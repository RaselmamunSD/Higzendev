import React from 'react';
import { Lightbulb, FileText, PenTool, Code, CheckCheck, Rocket, Users } from 'lucide-react';

const WorkProcessSection = () => {
  const steps = [
    { 
      name: "Conceptualization", 
      phase: "Imagine",
      icon: <Lightbulb className="text-primary" size={24} /> 
    },
    { 
      name: "Specifications", 
      phase: "Imagine",
      icon: <FileText className="text-primary" size={24} /> 
    },
    { 
      name: "Design", 
      phase: "Imagine",
      icon: <PenTool className="text-primary" size={24} /> 
    },
    { 
      name: "Development", 
      phase: "Build",
      icon: <Code className="text-primary" size={24} /> 
    },
    { 
      name: "QA", 
      phase: "Build",
      icon: <CheckCheck className="text-primary" size={24} /> 
    },
    { 
      name: "Project/Feature Launch", 
      phase: "Succeed",
      icon: <Rocket className="text-primary" size={24} /> 
    },
    { 
      name: "Ongoing Collaboration", 
      phase: "Succeed",
      icon: <Users className="text-primary" size={24} /> 
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto mb-10 md:mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            How We Work
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
            No matter the project's complexity, we apply a pragmatic approach to deliver projects through agile-driven stages. 
            There are <span className="text-primary font-semibold">different ways</span> to collaborate with us, but this is our 
            path to bring you success for your software project:
          </p>
        </div>

        <div className="mb-8 md:mb-16">
          <div className="relative">
            {/* Progress bar with gradient */}
            <div className="h-12 sm:h-16 rounded-full bg-gradient-to-r from-primary via-accent to-primary flex items-center justify-between px-4 sm:px-10 mb-8 sm:mb-12 shadow-glow-lg">
              <div className="text-white font-bold text-xs sm:text-base md:text-lg tracking-wider">IMAGINE</div>
              <div className="text-white/80 font-bold text-sm sm:text-xl">&gt;</div>
              <div className="text-white font-bold text-xs sm:text-base md:text-lg tracking-wider">BUILD</div>
              <div className="text-white/80 font-bold text-sm sm:text-xl">&gt;</div>
              <div className="text-white font-bold text-xs sm:text-base md:text-lg tracking-wider">SUCCEED</div>
            </div>

            {/* Mobile / Tablet Process Cards (< lg) */}
            <div className="lg:hidden space-y-3">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl bg-card/70 backdrop-blur-sm border border-border/40 hover:border-primary/40 transition-all duration-300 shadow-sm group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-primary/20 transition-all duration-300">
                    {step.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[11px] font-bold text-primary tracking-wider uppercase block">
                      Step 0{index + 1}
                    </span>
                    <h3 className="text-sm sm:text-base font-semibold text-foreground leading-snug">
                      {step.name}
                    </h3>
                  </div>
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase shrink-0 border ${
                    step.phase === 'Imagine' 
                      ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' 
                      : step.phase === 'Build' 
                      ? 'bg-purple-500/10 text-purple-400 border-purple-500/20' 
                      : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                  }`}>
                    {step.phase}
                  </span>
                </div>
              ))}
            </div>

            {/* Desktop Process Grid (lg+) */}
            <div className="hidden lg:grid lg:grid-cols-7 gap-4">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center group relative">
                  <div className="h-1 w-full bg-primary/20 mb-6 group-hover:bg-primary/50 transition-colors"></div>
                  <div className="w-14 h-14 rounded-full bg-card border-2 border-primary/30 flex items-center justify-center mb-3 shadow-card-glow group-hover:scale-110 group-hover:border-primary transition-all duration-300 relative">
                    <span className="absolute -top-1.5 -right-1 w-5 h-5 rounded-full bg-primary text-white text-[10px] font-bold flex items-center justify-center shadow-sm">
                      {index + 1}
                    </span>
                    {step.icon}
                  </div>
                  <div className="text-center text-sm text-foreground font-medium leading-snug">{step.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcessSection;
