
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CompanyHistorySection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2">
            <div className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-800 mb-6">
              About TechWave
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              From Humble Beginnings to Global Partner.
            </h2>
            <p className="text-lg mb-8 text-gray-700">
              Founded in 2016, TechWave provides IT consulting and software
              development services. With the help of a passionate team and talented
              individuals.
            </p>
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
              Download Company Profile <ArrowRight className="ml-2" size={18} />
            </Button>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative">
              {/* Image grid similar to AboutHeroSection */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden h-64">
                    <img 
                      src="/lovable-uploads/53486b42-3a97-4b33-9947-cc3dc4e85b5c.png" 
                      alt="Team member" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="bg-purple-100 rounded-2xl p-6 h-40">
                    <div className="text-lg font-semibold text-gray-700">Tech Stack</div>
                    <div className="text-5xl font-bold">20+</div>
                  </div>
                </div>
                <div className="space-y-4 mt-10">
                  <div className="rounded-2xl overflow-hidden h-64">
                    <img 
                      src="/lovable-uploads/53486b42-3a97-4b33-9947-cc3dc4e85b5c.png" 
                      alt="Team member" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden h-64">
                    <img 
                      src="/lovable-uploads/53486b42-3a97-4b33-9947-cc3dc4e85b5c.png" 
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

export default CompanyHistorySection;
