import React from 'react';
import { Briefcase, GraduationCap, Heart, Home, Palmtree, TrendingUp } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Briefcase,
      title: "Competitive Salary",
      description: "Industry-leading compensation packages"
    },
    {
      icon: Heart,
      title: "Health Coverage",
      description: "Comprehensive health, dental, and vision insurance"
    },
    {
      icon: Palmtree,
      title: "Flexible Time Off",
      description: "Unlimited PTO and flexible work arrangements"
    },
    {
      icon: Home,
      title: "Remote Work",
      description: "Work from anywhere in the world"
    },
    {
      icon: GraduationCap,
      title: "Learning Budget",
      description: "Annual budget for courses, conferences, and books"
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Clear career paths and mentorship programs"
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Benefits & Perks
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We take care of our team so they can take care of others
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-lg border border-border hover:border-primary transition-all hover:shadow-glow group"
            >
              <benefit.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-3 text-foreground">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
