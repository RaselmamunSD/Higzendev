
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ClientSuccessSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Client Success Stories: How <span className="text-[#ff7d47]">HigzenDev Delivers</span> Results
            </h2>
            <p className="text-gray-300 mb-6">
              At HigzenDev, we believe success isn't just about products or services, but the real results we deliver to our clients. 
              Our client success stories showcase how we partner with businesses from various industries to solve complex 
              challenges and create tailored solutions that drive true value.
            </p>
            <p className="text-gray-300 mb-8">
              Whether it's streamlining business processes, boosting efficiency, or developing innovative digital products, 
              our projects are diverse and impactful. Explore our customer success stories to see how we've helped companies 
              achieve their goals and transform their visions into reality. Read all our success stories to learn more, 
              and perhaps we'll be writing your story next!
            </p>
            <Button className="bg-[#ff3366] hover:bg-[#e62e5c] text-white px-8 py-6 h-auto" asChild>
              <Link to="/success-stories">Explore Success Stories</Link>
            </Button>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="/lovable-uploads/4acf0bb3-60b8-4cf6-b59d-d2af4a64cb00.png" 
              alt="Client meeting" 
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSuccessSection;
