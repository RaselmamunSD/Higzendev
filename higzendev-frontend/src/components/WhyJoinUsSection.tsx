import React from 'react';
import { Heart, Target, Users, Zap } from 'lucide-react';

const WhyJoinUsSection = () => {
  const reasons = [
    {
      icon: Heart,
      title: "Make a Real Difference",
      description: "Help improve mental health and wellbeing for thousands of people worldwide"
    },
    {
      icon: Target,
      title: "Meaningful Work",
      description: "Every line of code you write contributes to someone's journey to better mental health"
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Work with passionate, talented people who care about making an impact"
    },
    {
      icon: Zap,
      title: "Innovation First",
      description: "Use cutting-edge technology to solve real-world mental health challenges"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Why Join MoodMate?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer more than just a job – we offer a chance to make a real difference
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-lg border border-border hover:border-primary transition-all hover:shadow-glow-strong"
            >
              <reason.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-foreground">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUsSection;
