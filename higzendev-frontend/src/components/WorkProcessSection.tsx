
import React from 'react';
import { Lightbulb, FileText, PenTool, Code, CheckCheck, Rocket, Users } from 'lucide-react';

const WorkProcessSection = () => {
  const steps = [
    { name: "Conceptualization", icon: <Lightbulb className="text-primary" size={24} /> },
    { name: "Specifications", icon: <FileText className="text-primary" size={24} /> },
    { name: "Design", icon: <PenTool className="text-primary" size={24} /> },
    { name: "Development", icon: <Code className="text-primary" size={24} /> },
    { name: "QA", icon: <CheckCheck className="text-primary" size={24} /> },
    { name: "Project/Feature Launch", icon: <Rocket className="text-primary" size={24} /> },
    { name: "Ongoing Collaboration", icon: <Users className="text-primary" size={24} /> }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            How We Work
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            No matter the project's complexity, we apply a pragmatic approach to deliver projects through agile-driven stages. 
            There are <span className="text-primary font-semibold">different ways</span> to collaborate with us, but this is our 
            path to bring you success for your software project:
          </p>
        </div>

        <div className="mb-16">
          <div className="relative">
            {/* Progress bar with gradient */}
            <div className="h-16 rounded-full bg-gradient-to-r from-primary via-accent to-primary flex items-center justify-between px-10 mb-12 shadow-glow-lg">
              <div className="text-white font-bold text-lg px-4 py-2">IMAGINE</div>
              <div className="text-white font-bold text-xl">&gt;</div>
              <div className="text-white font-bold text-lg px-4 py-2">BUILD</div>
              <div className="text-white font-bold text-xl">&gt;</div>
              <div className="text-white font-bold text-lg px-4 py-2">SUCCEED</div>
            </div>

            {/* Development steps */}
            <div className="grid grid-cols-7 gap-4">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center group">
                  <div className="h-1 w-full bg-primary/20 mb-6 group-hover:bg-primary/40 transition-colors"></div>
                  <div className="w-14 h-14 rounded-full bg-card border-2 border-primary/30 flex items-center justify-center mb-3 shadow-card-glow group-hover:scale-110 group-hover:border-primary transition-all duration-300">
                    {step.icon}
                  </div>
                  <div className="text-center text-sm text-foreground font-medium">{step.name}</div>
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
