import React from 'react';
import { Heart, Target, Users, Zap } from 'lucide-react';

const WhyJoinUsSection = () => {
  const reasons = [
    {
      icon: Heart,
      title: "Make a Real Difference",
      description: "Build cutting-edge solutions that solve mission-critical problems for global businesses"
    },
    {
      icon: Target,
      title: "Meaningful Work",
      description: "Every line of code and design you craft creates lasting real-world impact and growth"
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Work alongside passionate, world-class engineers and creators who love what they do"
    },
    {
      icon: Zap,
      title: "Innovation First",
      description: "Leverage modern tech stacks, AI, cloud architecture, and modern best practices"
    }
  ];

  return (
    <section id="why-join-us" className="py-20 bg-gradient-to-b from-background to-muted/20 border-t border-border/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-2 block">Our Culture</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Why Join HigzenDev?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            We offer more than just a job – we offer an environment where your talent thrives and leads the future
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-2xl border border-border/70 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <reason.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{reason.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUsSection;
