
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const AboutHeroSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
              Accelerate Your Software Development Potential with Us
            </h1>
            <p className="text-lg mb-8 text-gray-300">
              With our innovative solutions and dedicated expertise, success is a guaranteed 
              outcome. Let's accelerate together towards your goals and beyond.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Hire The Best Team <ArrowRight className="ml-2" size={18} />
            </Button>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative">
              {/* Main image container */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden h-64">
                    <img 
                      src="/lovable-uploads/53486b42-3a97-4b33-9947-cc3dc4e85b5c.png" 
                      alt="Team member" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="bg-yellow-100 rounded-2xl p-6 h-40">
                    <div className="text-lg font-semibold text-gray-800">Tech Stack</div>
                    <div className="text-5xl font-bold text-gray-900">20+</div>
                  </div>
                </div>
                <div className="space-y-4 mt-10">
                  <div className="bg-purple-100 rounded-2xl p-6 h-40">
                    <div className="text-lg font-semibold text-gray-800">Years of Experience</div>
                    <div className="text-5xl font-bold text-gray-900">7+</div>
                  </div>
                  <div className="rounded-2xl overflow-hidden h-64">
                    <img 
                      src="/lovable-uploads/7dee89d9-7ad3-4f44-8567-2fab5c93a862.png" 
                      alt="Team member" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
