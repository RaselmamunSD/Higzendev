import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  ShieldCheck, 
  Send,
  Building2,
  Code2
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Custom Software Development',
    budget: '$10k - $25k',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Received! 🚀",
        description: "Thank you for reaching out. Our engineering team will review your inquiry and respond within 2 hours.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: 'Custom Software Development',
        budget: '$10k - $25k',
        message: '',
      });
    }, 1000);
  };

  return (
    <section className="py-20 sm:py-24 bg-[#050814] relative overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-1/4 left-10 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[550px] h-[450px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />
      
      {/* Cyber Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Interactive Consultation Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="relative group rounded-3xl p-1 bg-gradient-to-b from-primary/30 via-cyan-500/20 to-purple-500/20 shadow-2xl backdrop-blur-2xl">
              <div className="relative rounded-[22px] bg-gradient-to-b from-[#0a1124]/95 via-[#060b18]/95 to-[#040711]/95 border border-white/10 p-7 sm:p-9">
                
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      Start a Project
                    </h3>
                    <p className="text-sm text-slate-400 mt-1">
                      Tell us about your project or technical vision.
                    </p>
                  </div>
                  <div className="p-3 rounded-2xl bg-primary/10 border border-primary/30 text-primary shrink-0 hidden sm:block">
                    <Code2 className="w-6 h-6 text-cyan-400" />
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <Input 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="John Doe" 
                        className="h-12 bg-slate-900/80 border-slate-700/80 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:ring-cyan-400/20 rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Work Email *
                      </label>
                      <Input 
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="john@company.com" 
                        className="h-12 bg-slate-900/80 border-slate-700/80 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:ring-cyan-400/20 rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Phone / WhatsApp
                      </label>
                      <Input 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+880 1870-966718" 
                        className="h-12 bg-slate-900/80 border-slate-700/80 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:ring-cyan-400/20 rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Company / Organization
                      </label>
                      <Input 
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        placeholder="Acme Corp" 
                        className="h-12 bg-slate-900/80 border-slate-700/80 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:ring-cyan-400/20 rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Required Service
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                        className="w-full h-12 bg-slate-900/80 border border-slate-700/80 text-white px-3 rounded-xl focus:border-cyan-400 focus:outline-none text-sm"
                      >
                        <option value="Custom Software Development" className="bg-slate-900 text-white">Custom Software Development</option>
                        <option value="Enterprise Web Applications" className="bg-slate-900 text-white">Enterprise Web Applications</option>
                        <option value="Mobile App Development" className="bg-slate-900 text-white">Mobile App Development (iOS/Android)</option>
                        <option value="AI & Machine Learning Systems" className="bg-slate-900 text-white">AI & Machine Learning Systems</option>
                        <option value="Dedicated Engineering Team" className="bg-slate-900 text-white">Dedicated Engineering Squad</option>
                        <option value="Cloud Architecture & DevOps" className="bg-slate-900 text-white">Cloud Architecture & DevOps</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Estimated Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({...formData, budget: e.target.value})}
                        className="w-full h-12 bg-slate-900/80 border border-slate-700/80 text-white px-3 rounded-xl focus:border-cyan-400 focus:outline-none text-sm"
                      >
                        <option value="< $5k" className="bg-slate-900 text-white">&lt; $5,000</option>
                        <option value="$5k - $10k" className="bg-slate-900 text-white">$5,000 - $10,000</option>
                        <option value="$10k - $25k" className="bg-slate-900 text-white">$10,000 - $25,000</option>
                        <option value="$25k - $50k" className="bg-slate-900 text-white">$25,000 - $50,000</option>
                        <option value="$50k+" className="bg-slate-900 text-white">$50,000+ (Enterprise)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Project Details & Goals *
                    </label>
                    <Textarea 
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Describe your project, timeline, deliverables, or technical requirements..." 
                      className="min-h-[130px] bg-slate-900/80 border-slate-700/80 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:ring-cyan-400/20 rounded-xl"
                    />
                  </div>

                  <div className="pt-2">
                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-14 rounded-xl bg-gradient-to-r from-primary via-cyan-500 to-blue-600 hover:from-primary/90 hover:to-blue-700 text-white font-bold text-base shadow-xl shadow-primary/25 group transition-all duration-300 hover:scale-[1.01]"
                    >
                      <div className="flex items-center justify-center gap-2">
                        {isSubmitting ? (
                          <span>Submitting Request...</span>
                        ) : (
                          <>
                            <Send className="w-4 h-4 text-cyan-200" />
                            <span>Submit Consultation Request</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform ml-1" />
                          </>
                        )}
                      </div>
                    </Button>
                  </div>
                </form>

              </div>
            </div>
          </div>

          {/* Right Column: Direct Channels & Guarantees (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Connect Hub Card */}
            <div className="p-7 sm:p-8 rounded-3xl bg-slate-900/80 border border-white/10 backdrop-blur-xl space-y-6 shadow-2xl">
              <h3 className="text-xl font-bold text-white tracking-tight border-b border-white/10 pb-4 flex items-center gap-2.5">
                <span>Direct Contact Channels</span>
              </h3>

              <div className="space-y-4">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/8801870966718"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 hover:bg-emerald-900/50 hover:border-emerald-500/60 transition-all duration-200 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center p-2.5 shrink-0 border border-emerald-500/40 group-hover:scale-110 transition-transform">
                    <img src="/images/whatsapp-icon.png" alt="WhatsApp" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Instant Messaging</div>
                    <div className="text-sm sm:text-base font-bold text-white group-hover:text-emerald-300">
                      +880 1870-966718
                    </div>
                  </div>
                </a>

                {/* Direct Phone */}
                <a
                  href="tel:+8801870966718"
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60 hover:bg-slate-800 hover:border-cyan-500/40 transition-all duration-200 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 border border-primary/30 group-hover:scale-110 transition-transform">
                    <PhoneCall className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Direct Phone Line</div>
                    <div className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300">
                      +880 1870-966718
                    </div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:contact@higzendev.com"
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60 hover:bg-slate-800 hover:border-blue-500/40 transition-all duration-200 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0 border border-blue-500/30 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Email Inquiry</div>
                    <div className="text-sm sm:text-base font-bold text-white group-hover:text-blue-300">
                      contact@higzendev.com
                    </div>
                  </div>
                </a>

                {/* Office Location */}
                <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0 border border-purple-500/30 mt-0.5">
                    <MapPin className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Our Headquarters</div>
                    <div className="text-xs sm:text-sm font-semibold text-white leading-relaxed mt-0.5">
                      Rupnagor Abashik, Road -13, House -27, Floor -07,<br />
                      Mirpur-2, Dhaka, Bangladesh
                    </div>
                  </div>
                </div>

              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Follow Us:</span>
                <div className="flex items-center gap-2">
                  <a
                    href="https://www.linkedin.com/company/higzendev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 hover:border-[#0A66C2]/60 hover:bg-[#0A66C2]/20 flex items-center justify-center text-slate-300 hover:text-[#0A66C2] transition-all hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>

                  <a
                    href="https://www.facebook.com/share/19MBiAE2x8/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 hover:border-[#1877F2]/60 hover:bg-[#1877F2]/20 flex items-center justify-center text-slate-300 hover:text-[#1877F2] transition-all hover:scale-110"
                    aria-label="Facebook"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                </div>
              </div>

            </div>

            {/* HigzenDev Quality Guarantee Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-primary/10 via-cyan-500/5 to-purple-500/10 border border-white/10 backdrop-blur-xl space-y-4">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span>HigzenDev Delivery Assurance:</span>
              </h4>
              <div className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Strict Non-Disclosure Agreement (NDA) Protected</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Transparent Weekly Sprints & Live Demos</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>100% Intellectual Property (IP) Ownership</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
