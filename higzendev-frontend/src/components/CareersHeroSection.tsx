import React from 'react';
import ParticleBackground from './ParticleBackground';

const CareersHeroSection = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
          Join Our Team
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
          Build the future of mental health technology with us
        </p>
      </div>
    </section>
  );
};

export default CareersHeroSection;
