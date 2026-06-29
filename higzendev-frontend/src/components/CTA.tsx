
import React from 'react';
import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <section className="py-16 bg-dark-section text-foreground border-y border-border">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Looking for a reliable IT solutions provider?</h2>
        <h3 className="text-3xl md:text-5xl font-bold mb-8 text-primary">Choose TechWave</h3>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Contact us today to learn how we can help your business grow and succeed in the digital world.
        </p>
        <Button className="px-8 py-6 text-lg glow-effect-strong">
          Request a Free Consultation
        </Button>
      </div>
    </section>
  );
};

export default CTA;
