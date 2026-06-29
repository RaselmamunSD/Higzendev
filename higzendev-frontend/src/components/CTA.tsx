import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="py-16 bg-dark-section text-foreground border-y border-border">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Looking for a reliable IT solutions provider?</h2>
        <h3 className="text-3xl md:text-5xl font-bold mb-8 text-primary">Choose HigzenDev</h3>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Contact us today to learn how we can help your business grow and succeed in the digital world.
        </p>
        <Link to="/schedule-meeting">
          <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold px-8 py-4 h-auto text-lg glow-effect">
            Schedule Meeting
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CTA;
