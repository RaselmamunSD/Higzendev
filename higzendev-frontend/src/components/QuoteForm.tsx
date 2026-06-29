
import React, { useState, useEffect, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from '@/hooks/use-toast';
import {
  Check, SendIcon, User, Building2, Mail, Phone, FileText,
  Clock, DollarSign, Shield, ChevronRight, ChevronLeft,
  Globe, Smartphone, Tablet, Monitor, Server, Palette,
  CheckCircle2, AlertCircle, Loader2, Sparkles
} from 'lucide-react';
import { cn } from '@/lib/utils';

const formSchema = z.object({
  fullName: z.string().min(2, { message: 'Full name is required' }).max(100, { message: 'Name must be less than 100 characters' }),
  email: z.string().email({ message: 'Invalid email address' }).max(255, { message: 'Email must be less than 255 characters' }),
  phone: z.string().optional(),
  companyName: z.string().min(2, { message: 'Company name is required' }),
  projectDescription: z.string().min(10, { message: 'Please describe your project (minimum 10 characters)' }).max(2000, { message: 'Description must be less than 2000 characters' }),
  projectType: z.string().min(1, { message: 'Please select project type' }),
  timeline: z.string().min(1, { message: 'Please select a timeline' }),
  budget: z.string().optional(),
  platforms: z.array(z.string()).optional(),
  privacyConsent: z.boolean().refine(val => val === true, { message: 'You must agree to the privacy policy' })
});

type FormValues = z.infer<typeof formSchema>;

const platformOptions = [
  { id: 'web', label: 'Web Application', icon: Globe },
  { id: 'mobile-ios', label: 'iOS Mobile', icon: Smartphone },
  { id: 'mobile-android', label: 'Android Mobile', icon: Smartphone },
  { id: 'desktop', label: 'Desktop App', icon: Monitor },
  { id: 'api', label: 'API/Backend', icon: Server },
  { id: 'ui-ux', label: 'UI/UX Design', icon: Palette },
];

const projectTypes = [
  { value: 'custom-software', label: 'Custom Software Development' },
  { value: 'web-app', label: 'Web Application' },
  { value: 'mobile-app', label: 'Mobile App Development' },
  { value: 'ecommerce', label: 'E-commerce Platform' },
  { value: 'crm-erp', label: 'CRM/ERP System' },
  { value: 'saas', label: 'SaaS Product' },
  { value: 'api-integration', label: 'API/Integration' },
  { value: 'ui-ux', label: 'UI/UX Design' },
  { value: 'other', label: 'Other' },
];

const timelines = [
  { value: 'asap', label: 'ASAP / Urgent' },
  { value: '1-3-months', label: '1-3 Months' },
  { value: '3-6-months', label: '3-6 Months' },
  { value: '6-12-months', label: '6-12 Months' },
  { value: 'flexible', label: 'Flexible / Not Sure' },
];

const budgets = [
  { value: 'under-5k', label: 'Under $5,000' },
  { value: '5k-10k', label: '$5,000 - $10,000' },
  { value: '10k-25k', label: '$10,000 - $25,000' },
  { value: '25k-50k', label: '$25,000 - $50,000' },
  { value: '50k-100k', label: '$50,000 - $100,000' },
  { value: 'over-100k', label: '$100,000+' },
  { value: 'discuss', label: 'Prefer to Discuss' },
];

interface StepConfig {
  number: number;
  title: string;
  subtitle: string;
  icon: React.ElementType;
}

const steps: StepConfig[] = [
  { number: 1, title: 'Contact Info', subtitle: 'Who you are', icon: User },
  { number: 2, title: 'Project Details', subtitle: 'What you need', icon: FileText },
  { number: 3, title: 'Review & Send', subtitle: 'Confirm & submit', icon: SendIcon },
];

const FormInputIcon = ({ icon: Icon, valid, error }: { icon: React.ElementType; valid?: boolean; error?: boolean }) => (
  <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
    {error ? (
      <AlertCircle className="h-4 w-4 text-destructive" />
    ) : valid ? (
      <CheckCircle2 className="h-4 w-4 text-emerald-400" />
    ) : (
      <Icon className="h-4 w-4 text-muted-foreground/60" />
    )}
  </div>
);

const QuoteForm = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const totalSteps = 3;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      companyName: '',
      projectDescription: '',
      projectType: '',
      timeline: '',
      budget: '',
      platforms: [],
      privacyConsent: false
    }
  });

  const { watch, formState: { errors, touchedFields, dirtyFields } } = form;
  const descLength = watch('projectDescription')?.length || 0;

  const isFieldValid = useCallback((name: keyof FormValues) => {
    const value = watch(name);
    const fieldError = errors[name];
    const isDirty = dirtyFields[name];
    if (!isDirty || value === undefined || value === '' || (Array.isArray(value) && value.length === 0)) return undefined;
    return !fieldError;
  }, [watch, errors, dirtyFields]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [step]);

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log(data);
    toast({
      title: "Quote Request Sent!",
      description: "We've received your request and will contact you within 24 hours.",
      action: (
        <div className="h-8 w-8 bg-emerald-500 rounded-full flex items-center justify-center">
          <Check className="h-4 w-4 text-white" />
        </div>
      ),
    });
    form.reset();
    setStep(1);
    setIsSubmitting(false);
  };

  const validateStep = async (targetStep: number): Promise<boolean> => {
    let fieldsToValidate: (keyof FormValues)[] = [];
    if (step === 1 && targetStep > 1) {
      fieldsToValidate = ['fullName', 'email', 'companyName'];
    } else if (step === 2 && targetStep > 2) {
      fieldsToValidate = ['projectType', 'projectDescription', 'timeline', 'privacyConsent'];
    }
    if (fieldsToValidate.length === 0) return true;
    return await form.trigger(fieldsToValidate);
  };

  const handleNext = async () => {
    const isValid = await validateStep(step + 1);
    if (isValid) {
      setDirection('forward');
      setStep(s => Math.min(s + 1, totalSteps));
    }
  };

  const handleBack = () => {
    setDirection('backward');
    setStep(s => Math.max(s - 1, 1));
  };

  const goToStep = async (target: number) => {
    if (target === step) return;
    if (target < step) {
      setDirection('backward');
      setStep(target);
      return;
    }
    // Can only go forward if current step is valid
    const isValid = await validateStep(target);
    if (isValid) {
      setDirection('forward');
      setStep(target);
    }
  };

  const slideClass = direction === 'forward'
    ? 'animate-in fade-in slide-in-from-right-4 duration-300'
    : 'animate-in fade-in slide-in-from-left-4 duration-300';

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Visual Stepper */}
        <div className="mb-8">
          <div className="flex items-center justify-between relative">
            {/* Connecting line background */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-muted -translate-y-1/2 z-0" />
            {/* Active connecting line */}
            <div
              className="absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary -translate-y-1/2 z-0 transition-all duration-500 ease-out"
              style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
            />

            {steps.map((s, idx) => {
              const isActive = step === s.number;
              const isCompleted = step > s.number;
              const isClickable = s.number < step;
              const Icon = s.icon;

              return (
                <div key={s.number} className="relative z-10 flex flex-col items-center gap-2">
                  <button
                    type="button"
                    onClick={() => isClickable && goToStep(s.number)}
                    disabled={!isClickable && !isActive}
                    className={cn(
                      "w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 border-2",
                      isActive
                        ? "bg-gradient-to-br from-primary to-secondary border-primary text-white shadow-glow scale-110"
                        : isCompleted
                          ? "bg-primary/20 border-primary text-primary hover:bg-primary/30"
                          : "bg-card border-border text-muted-foreground"
                    )}
                  >
                    {isCompleted ? (
                      <Check className="h-5 w-5" />
                    ) : (
                      <Icon className="h-4 w-4 md:h-5 md:w-5" />
                    )}
                  </button>
                  <div className="text-center hidden sm:block">
                    <p className={cn(
                      "text-xs font-semibold transition-colors duration-300",
                      isActive ? "text-primary" : isCompleted ? "text-foreground" : "text-muted-foreground"
                    )}>
                      {s.title}
                    </p>
                    <p className={cn(
                      "text-[10px] transition-colors duration-300",
                      isActive || isCompleted ? "text-muted-foreground" : "text-muted-foreground/50"
                    )}>
                      {s.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Step 1: Contact Information */}
        {step === 1 && (
          <div className={cn("space-y-6", slideClass)}>
            <div className="bg-muted/30 rounded-xl p-4 md:p-6 border border-border/40">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-card-foreground">Contact Information</h3>
                  <p className="text-sm text-muted-foreground">Tell us how to reach you</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">
                        Full Name <span className="text-destructive">*</span>
                      </FormLabel>
                      <div className="relative">
                        <FormInputIcon icon={User} valid={isFieldValid('fullName') === true} error={!!errors.fullName} />
                        <FormControl>
                          <Input
                            placeholder="John Doe"
                            className={cn(
                              "pl-10 bg-background/80 border-border/60 focus:border-primary transition-all",
                              errors.fullName && "border-destructive focus:border-destructive"
                            )}
                            {...field}
                          />
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">
                        Email Address <span className="text-destructive">*</span>
                      </FormLabel>
                      <div className="relative">
                        <FormInputIcon icon={Mail} valid={isFieldValid('email') === true} error={!!errors.email} />
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="john@company.com"
                            className={cn(
                              "pl-10 bg-background/80 border-border/60 focus:border-primary transition-all",
                              errors.email && "border-destructive focus:border-destructive"
                            )}
                            {...field}
                          />
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium flex items-center gap-1.5">
                        Phone Number
                        <span className="text-[10px] bg-muted px-1.5 py-0.5 rounded text-muted-foreground">optional</span>
                      </FormLabel>
                      <div className="relative">
                        <FormInputIcon icon={Phone} />
                        <FormControl>
                          <Input
                            placeholder="+1 (555) 123-4567"
                            className="pl-10 bg-background/80 border-border/60 focus:border-primary transition-all"
                            {...field}
                          />
                        </FormControl>
                      </div>
                      <FormDescription className="text-xs">
                        For quick callback if needed
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">
                        Company Name <span className="text-destructive">*</span>
                      </FormLabel>
                      <div className="relative">
                        <FormInputIcon icon={Building2} valid={isFieldValid('companyName') === true} error={!!errors.companyName} />
                        <FormControl>
                          <Input
                            placeholder="Your Company Ltd."
                            className={cn(
                              "pl-10 bg-background/80 border-border/60 focus:border-primary transition-all",
                              errors.companyName && "border-destructive focus:border-destructive"
                            )}
                            {...field}
                          />
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <Button
                type="button"
                onClick={handleNext}
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground px-8 h-12 text-base font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-glow group"
              >
                Next: Project Details
                <ChevronRight className="ml-1 h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 2: Project Details */}
        {step === 2 && (
          <div className={cn("space-y-6", slideClass)}>
            <div className="bg-muted/30 rounded-xl p-4 md:p-6 border border-border/40 space-y-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-card-foreground">Project Details</h3>
                  <p className="text-sm text-muted-foreground">Tell us about your project</p>
                </div>
              </div>

              <FormField
                control={form.control}
                name="projectType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">
                      What type of project? <span className="text-destructive">*</span>
                    </FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className={cn(
                          "bg-background/80 border-border/60 focus:border-primary h-11",
                          errors.projectType && "border-destructive"
                        )}>
                          <SelectValue placeholder="Select project type..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-popover border-border z-50 max-h-[280px]">
                        {projectTypes.map(pt => (
                          <SelectItem key={pt.value} value={pt.value} className="cursor-pointer">
                            {pt.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="projectDescription"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center justify-between">
                      <FormLabel className="text-sm font-medium">
                        Project Description <span className="text-destructive">*</span>
                      </FormLabel>
                      <span className={cn(
                        "text-xs tabular-nums",
                        descLength > 1800 ? "text-destructive" : descLength > 1500 ? "text-amber-400" : "text-muted-foreground"
                      )}>
                        {descLength}/2000
                      </span>
                    </div>
                    <FormControl>
                      <Textarea
                        placeholder="Describe your project requirements, goals, key features you need, and any specific challenges you're looking to solve..."
                        className={cn(
                          "min-h-[140px] bg-background/80 border-border/60 focus:border-primary transition-all resize-none",
                          errors.projectDescription && "border-destructive"
                        )}
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="text-xs flex items-center gap-1">
                      <Sparkles className="h-3 w-3 text-primary/60" />
                      The more details you provide, the more accurate our quote will be
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Platform Chips */}
              <FormField
                control={form.control}
                name="platforms"
                render={() => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium flex items-center gap-1.5">
                      Target Platforms
                      <span className="text-[10px] bg-muted px-1.5 py-0.5 rounded text-muted-foreground">optional</span>
                    </FormLabel>
                    <div className="flex flex-wrap gap-2">
                      {platformOptions.map((platform) => (
                        <FormField
                          key={platform.id}
                          control={form.control}
                          name="platforms"
                          render={({ field }) => {
                            const isSelected = field.value?.includes(platform.id);
                            const Icon = platform.icon;
                            return (
                              <FormItem className="space-y-0">
                                <FormControl>
                                  <button
                                    type="button"
                                    onClick={() => {
                                      const current = field.value || [];
                                      const updated = isSelected
                                        ? current.filter((v) => v !== platform.id)
                                        : [...current, platform.id];
                                      field.onChange(updated);
                                    }}
                                    className={cn(
                                      "inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg border text-sm font-medium transition-all duration-200 min-h-[44px]",
                                      isSelected
                                        ? "bg-primary/15 border-primary text-foreground shadow-glow"
                                        : "bg-background/60 border-border/50 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                                    )}
                                  >
                                    <Icon className={cn("h-4 w-4", isSelected ? "text-primary" : "text-muted-foreground")} />
                                    {platform.label}
                                    {isSelected && <Check className="h-3.5 w-3.5 text-primary" />}
                                  </button>
                                </FormControl>
                              </FormItem>
                            );
                          }}
                        />
                      ))}
                    </div>
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <FormField
                  control={form.control}
                  name="timeline"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">
                        Expected Timeline <span className="text-destructive">*</span>
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className={cn(
                            "bg-background/80 border-border/60 focus:border-primary h-11",
                            errors.timeline && "border-destructive"
                          )}>
                            <SelectValue placeholder="Select timeline..." />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-popover border-border z-50">
                          {timelines.map(t => (
                            <SelectItem key={t.value} value={t.value} className="cursor-pointer">
                              {t.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="budget"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium flex items-center gap-1.5">
                        Budget Range
                        <span className="text-[10px] bg-muted px-1.5 py-0.5 rounded text-muted-foreground">optional</span>
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-background/80 border-border/60 focus:border-primary h-11">
                            <SelectValue placeholder="Select budget..." />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-popover border-border z-50">
                          {budgets.map(b => (
                            <SelectItem key={b.value} value={b.value} className="cursor-pointer">
                              {b.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormDescription className="text-xs">
                        Helps us recommend the best solution
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Privacy Consent */}
            <FormField
              control={form.control}
              name="privacyConsent"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-xl border border-border/50 p-4 md:p-5 bg-muted/20 hover:bg-muted/30 transition-colors">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className={cn(
                        "mt-0.5 data-[state=checked]:bg-primary data-[state=checked]:border-primary",
                        errors.privacyConsent && "border-destructive"
                      )}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-sm cursor-pointer flex items-center gap-2 font-medium">
                      <Shield className="h-4 w-4 text-primary" />
                      I agree to the Privacy Policy <span className="text-destructive">*</span>
                    </FormLabel>
                    <FormDescription className="text-xs text-muted-foreground">
                      Your information is secure and will only be used to respond to your inquiry.
                    </FormDescription>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-between pt-2 gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={handleBack}
                className="px-6 h-12 text-base font-medium rounded-xl border-border/60 hover:bg-muted/50 group"
              >
                <ChevronLeft className="mr-1 h-5 w-5 group-hover:-translate-x-0.5 transition-transform" />
                Back
              </Button>
              <Button
                type="button"
                onClick={handleNext}
                className="flex-1 max-w-xs bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground h-12 text-base font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-glow group"
              >
                Review Your Quote
                <ChevronRight className="ml-1 h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Review & Submit */}
        {step === 3 && (
          <div className={cn("space-y-6", slideClass)}>
            <div className="bg-muted/30 rounded-xl p-4 md:p-6 border border-border/40">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-card-foreground">Review Your Request</h3>
                  <p className="text-sm text-muted-foreground">Please confirm your details before sending</p>
                </div>
              </div>

              <div className="space-y-4">
                <ReviewSection title="Contact Information" stepNum={1} onEdit={() => goToStep(1)}>
                  <ReviewItem label="Full Name" value={watch('fullName')} icon={User} />
                  <ReviewItem label="Email" value={watch('email')} icon={Mail} />
                  <ReviewItem label="Phone" value={watch('phone') || '—'} icon={Phone} />
                  <ReviewItem label="Company" value={watch('companyName')} icon={Building2} />
                </ReviewSection>

                <ReviewSection title="Project Details" stepNum={2} onEdit={() => goToStep(2)}>
                  <ReviewItem
                    label="Project Type"
                    value={projectTypes.find(p => p.value === watch('projectType'))?.label || watch('projectType')}
                    icon={FileText}
                  />
                  <div className="col-span-2">
                    <p className="text-xs text-muted-foreground mb-1">Description</p>
                    <p className="text-sm text-foreground bg-background/50 rounded-lg p-3 border border-border/30">
                      {watch('projectDescription')}
                    </p>
                  </div>
                  {watch('platforms') && watch('platforms')!.length > 0 && (
                    <ReviewItem
                      label="Platforms"
                      value={watch('platforms')!.map(id => platformOptions.find(p => p.id === id)?.label).filter(Boolean).join(', ')}
                      icon={Globe}
                    />
                  )}
                  <ReviewItem
                    label="Timeline"
                    value={timelines.find(t => t.value === watch('timeline'))?.label || watch('timeline')}
                    icon={Clock}
                  />
                  {watch('budget') && (
                    <ReviewItem
                      label="Budget"
                      value={budgets.find(b => b.value === watch('budget'))?.label || watch('budget')}
                      icon={DollarSign}
                    />
                  )}
                </ReviewSection>
              </div>
            </div>

            <div className="flex justify-between pt-2 gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={handleBack}
                className="px-6 h-12 text-base font-medium rounded-xl border-border/60 hover:bg-muted/50 group"
              >
                <ChevronLeft className="mr-1 h-5 w-5 group-hover:-translate-x-0.5 transition-transform" />
                Back
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 max-w-sm bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground h-12 text-base font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-glow disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Get Your Free Quote
                    <SendIcon className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </div>
          </div>
        )}
      </form>
    </Form>
  );
};

/* Review Section Sub-component */
const ReviewSection = ({ title, stepNum, onEdit, children }: {
  title: string;
  stepNum: number;
  onEdit: () => void;
  children: React.ReactNode;
}) => (
  <div className="bg-background/40 rounded-xl p-4 border border-border/30">
    <div className="flex items-center justify-between mb-3">
      <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
        <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">
          {stepNum}
        </span>
        {title}
      </h4>
      <button
        type="button"
        onClick={onEdit}
        className="text-xs text-primary hover:text-primary/80 font-medium underline underline-offset-2 transition-colors"
      >
        Edit
      </button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {children}
    </div>
  </div>
);

const ReviewItem = ({ label, value, icon: Icon }: {
  label: string;
  value: string;
  icon: React.ElementType;
}) => (
  <div className="flex items-start gap-2.5">
    <Icon className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
    <div>
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="text-sm text-foreground font-medium">{value}</p>
    </div>
  </div>
);

export default QuoteForm;
