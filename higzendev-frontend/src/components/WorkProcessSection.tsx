import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, FileText, PenTool, Code, CheckCheck, Rocket, Users, Play, Pause, ChevronRight } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface StepItem {
  name: string;
  phase: 'Imagine' | 'Build' | 'Succeed';
  phaseIndex: number;
  description: string;
  icon: React.ElementType;
}

const steps: StepItem[] = [
  { 
    name: "Conceptualization", 
    phase: "Imagine",
    phaseIndex: 0,
    description: "Validating core ideas, defining product vision, market feasibility analysis, and drafting a strategic roadmap.",
    icon: Lightbulb
  },
  { 
    name: "Specifications", 
    phase: "Imagine",
    phaseIndex: 0,
    description: "Detailed technical specifications, architecture blueprints, API schemas, and optimal tech stack selection.",
    icon: FileText
  },
  { 
    name: "Design", 
    phase: "Imagine",
    phaseIndex: 0,
    description: "Human-centered UI/UX wireframes, design systems, design tokens, and clickable high-fidelity prototypes.",
    icon: PenTool
  },
  { 
    name: "Development", 
    phase: "Build",
    phaseIndex: 1,
    description: "High-velocity 2-week agile sprints, clean modular code, scalable microservices, and continuous integration.",
    icon: Code
  },
  { 
    name: "QA & Testing", 
    phase: "Build",
    phaseIndex: 1,
    description: "Rigorous end-to-end automated testing, unit testing, security vulnerability scans, and performance benchmarking.",
    icon: CheckCheck
  },
  { 
    name: "Project Launch", 
    phase: "Succeed",
    phaseIndex: 2,
    description: "Zero-downtime production deployment, cloud infrastructure orchestration, and seamless public release.",
    icon: Rocket
  },
  { 
    name: "Ongoing Collaboration", 
    phase: "Succeed",
    phaseIndex: 2,
    description: "24/7 SLA monitoring, real-time analytics, rapid feature iteration, and dedicated engineering squad support.",
    icon: Users
  }
];

const WorkProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const reduceMotion = useReducedMotion();

  // Auto-advance through steps with animated timer
  useEffect(() => {
    if (!isPlaying || reduceMotion) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3800);

    return () => clearInterval(interval);
  }, [isPlaying, reduceMotion]);

  const currentStep = steps[activeStep];
  const CurrentIcon = currentStep.icon;

  const getPhaseColor = (phase: string) => {
    switch (phase) {
      case 'Imagine':
        return 'text-blue-500 bg-blue-500/10 border-blue-500/20';
      case 'Build':
        return 'text-purple-500 bg-purple-500/10 border-purple-500/20';
      case 'Succeed':
        return 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20';
      default:
        return 'text-primary bg-primary/10 border-primary/20';
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background cyber grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-32 w-80 h-80 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-10 md:mb-14 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span>AGILE DELIVERY FRAMEWORK</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 md:mb-6 bg-gradient-to-r from-primary via-cyan-400 to-purple-400 bg-clip-text text-transparent tracking-tight">
            How We Work
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
            No matter the project's complexity, we apply a pragmatic approach to deliver projects through agile-driven stages. 
            There are <span className="text-primary font-semibold">different ways</span> to collaborate with us, but this is our 
            path to bring you success for your software project:
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Top Phase Header with dynamic active glow & phase jumping */}
          <div className="h-14 sm:h-16 rounded-full bg-card/80 border border-border/70 backdrop-blur-xl flex items-center justify-between px-3 sm:px-8 mb-8 sm:mb-14 shadow-lg relative overflow-hidden">
            {/* Background moving ambient glow for active phase */}
            <div 
              className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-primary/15 via-accent/25 to-primary/15 rounded-full blur-md transition-all duration-700 ease-out pointer-events-none"
              style={{
                left: currentStep.phaseIndex === 0 ? '0%' : currentStep.phaseIndex === 1 ? '33.33%' : '66.66%'
              }}
            />
            
            <button
              type="button"
              onClick={() => { setActiveStep(0); setIsPlaying(false); }}
              className={`relative z-10 flex items-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2 rounded-full font-bold text-xs sm:text-base transition-all duration-300 ${
                currentStep.phaseIndex === 0
                  ? 'bg-primary text-white shadow-glow scale-105'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <span>IMAGINE</span>
            </button>

            <div className="text-muted-foreground/30 font-bold text-sm sm:text-lg select-none">&gt;</div>

            <button
              type="button"
              onClick={() => { setActiveStep(3); setIsPlaying(false); }}
              className={`relative z-10 flex items-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2 rounded-full font-bold text-xs sm:text-base transition-all duration-300 ${
                currentStep.phaseIndex === 1
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-glow scale-105'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <span>BUILD</span>
            </button>

            <div className="text-muted-foreground/30 font-bold text-sm sm:text-lg select-none">&gt;</div>

            <button
              type="button"
              onClick={() => { setActiveStep(5); setIsPlaying(false); }}
              className={`relative z-10 flex items-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2 rounded-full font-bold text-xs sm:text-base transition-all duration-300 ${
                currentStep.phaseIndex === 2
                  ? 'bg-gradient-to-r from-pink-500 to-emerald-500 text-white shadow-glow scale-105'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <span>SUCCEED</span>
            </button>
          </div>

          {/* DESKTOP TIMELINE (lg+) */}
          <div className="hidden lg:block">
            {/* Horizontal Timeline Bar with Connecting Line */}
            <div className="relative mb-6">
              {/* Inactive Base Line */}
              <div className="absolute top-7 left-7 right-7 h-1 bg-border/80 -translate-y-1/2 z-0" />

              {/* Animated Active Progress Line */}
              <div 
                className="absolute top-7 left-7 h-1 bg-gradient-to-r from-primary via-purple-500 to-emerald-400 -translate-y-1/2 z-0 transition-all duration-700 ease-out shadow-[0_0_12px_hsl(var(--primary))]"
                style={{
                  width: `calc(${(activeStep / (steps.length - 1)) * 100}% * ((100% - 56px) / 100%))`
                }}
              />

              {/* 7 Step Circles */}
              <div className="grid grid-cols-7 gap-4 relative z-10">
                {steps.map((step, index) => {
                  const StepIcon = step.icon;
                  const isActive = index === activeStep;
                  const isCompleted = index < activeStep;

                  return (
                    <button
                      key={step.name}
                      type="button"
                      onClick={() => {
                        setActiveStep(index);
                        setIsPlaying(false);
                      }}
                      className="flex flex-col items-center group cursor-pointer text-left focus:outline-none"
                    >
                      {/* Step Circle with animated pulse on active */}
                      <div 
                        className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 relative ${
                          isActive
                            ? 'bg-primary text-white scale-110 shadow-[0_0_25px_hsl(var(--primary)/0.6)] ring-4 ring-primary/30'
                            : isCompleted
                            ? 'bg-card border-2 border-primary text-primary shadow-sm group-hover:scale-105'
                            : 'bg-card border-2 border-border text-muted-foreground group-hover:border-primary/50 group-hover:text-foreground group-hover:scale-105'
                        }`}
                      >
                        <StepIcon className={`h-6 w-6 transition-transform duration-300 ${isActive ? 'scale-110' : ''}`} />
                        
                        {/* Step Number Tag */}
                        <span 
                          className={`absolute -top-1.5 -right-1 w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center shadow-md transition-colors ${
                            isActive
                              ? 'bg-white text-slate-900'
                              : isCompleted
                              ? 'bg-primary text-white'
                              : 'bg-muted text-muted-foreground border border-border'
                          }`}
                        >
                          {index + 1}
                        </span>
                      </div>

                      {/* Step Name */}
                      <span 
                        className={`text-center text-xs font-semibold mt-3 max-w-[110px] leading-snug transition-colors ${
                          isActive
                            ? 'text-primary font-bold'
                            : 'text-muted-foreground group-hover:text-foreground'
                        }`}
                      >
                        {step.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Step Highlight Showcase Card (Desktop) */}
            <div className="mt-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -12, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="p-6 sm:p-7 rounded-2xl bg-card/90 border border-primary/30 shadow-2xl backdrop-blur-xl relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

                  <div className="flex items-center justify-between gap-6 relative z-10">
                    <div className="flex items-center gap-5">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0 shadow-inner">
                        <CurrentIcon className="h-8 w-8 text-primary animate-pulse" />
                      </div>

                      <div>
                        <div className="flex items-center gap-2.5 mb-1.5">
                          <span className="text-xs font-extrabold text-primary uppercase tracking-wider">
                            Step 0{activeStep + 1} of 07
                          </span>
                          <span className="text-muted-foreground text-xs">•</span>
                          <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border uppercase ${getPhaseColor(currentStep.phase)}`}>
                            {currentStep.phase} Phase
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-1">
                          {currentStep.name}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                          {currentStep.description}
                        </p>
                      </div>
                    </div>

                    {/* Auto-play toggle & Step Navigation */}
                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        type="button"
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="px-3.5 py-2 rounded-xl border border-border/80 bg-card hover:bg-muted text-foreground text-xs font-semibold flex items-center gap-2 transition-all hover:scale-105"
                        title={isPlaying ? 'Pause Auto-Animation' : 'Play Auto-Animation'}
                      >
                        {isPlaying ? <Pause className="h-3.5 w-3.5 text-primary" /> : <Play className="h-3.5 w-3.5 text-primary" />}
                        <span>{isPlaying ? 'Pause' : 'Auto Play'}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setActiveStep((prev) => (prev + 1) % steps.length);
                          setIsPlaying(false);
                        }}
                        className="w-9 h-9 rounded-xl border border-border/80 bg-card hover:bg-muted text-foreground flex items-center justify-center transition-all hover:scale-105"
                        aria-label="Next Step"
                        title="Next Step"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  {/* Animated Progress Track */}
                  <div className="mt-5 w-full bg-border/40 h-1 rounded-full overflow-hidden">
                    <motion.div 
                      key={`progress-${activeStep}-${isPlaying}`}
                      initial={{ width: '0%' }}
                      animate={{ width: isPlaying ? '100%' : `${((activeStep + 1) / steps.length) * 100}%` }}
                      transition={{ duration: isPlaying ? 3.8 : 0.3, ease: 'linear' }}
                      className="h-full bg-primary"
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* MOBILE & TABLET ANIMATED PROCESS CARDS (< lg) */}
          <div className="lg:hidden space-y-3">
            {/* Auto Play Controller for Mobile */}
            <div className="flex items-center justify-between px-2 mb-2">
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                Interactive Steps (Tap any step)
              </span>
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold border border-border/70 bg-card text-foreground"
              >
                {isPlaying ? <Pause className="h-3 w-3 text-primary" /> : <Play className="h-3 w-3 text-primary" />}
                <span>{isPlaying ? 'Pause' : 'Auto Play'}</span>
              </button>
            </div>

            {steps.map((step, index) => {
              const StepIcon = step.icon;
              const isActive = index === activeStep;

              return (
                <motion.div
                  key={step.name}
                  layout
                  onClick={() => {
                    setActiveStep(index);
                    setIsPlaying(false);
                  }}
                  className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-card border-primary shadow-[0_0_20px_-3px_hsl(var(--primary)/0.35)] ring-1 ring-primary/40 scale-[1.01]'
                      : 'bg-card/70 border-border/60 hover:border-primary/40 hover:bg-card'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    {/* Glowing Icon Badge */}
                    <div 
                      className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isActive 
                          ? 'bg-primary text-white shadow-glow' 
                          : 'bg-primary/10 text-primary border border-primary/20'
                      }`}
                    >
                      <StepIcon className="h-6 w-6" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className={`text-[11px] font-extrabold uppercase tracking-wider ${isActive ? 'text-primary' : 'text-muted-foreground'}`}>
                          Step 0{index + 1}
                        </span>
                        {isActive && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-primary">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                            Active
                          </span>
                        )}
                      </div>
                      <h3 className="text-base font-bold text-foreground leading-snug">
                        {step.name}
                      </h3>
                    </div>

                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase shrink-0 border ${getPhaseColor(step.phase)}`}>
                      {step.phase}
                    </span>
                  </div>

                  {/* Expandable Active Description on Mobile */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mt-3 pt-3 border-t border-border/50">
                          {step.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcessSection;
