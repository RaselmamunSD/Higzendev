
import React from 'react';

const SuccessStoriesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2">
            <img 
              src="/lovable-uploads/a0e619bc-b97f-4cfd-bef8-5fa4212e2be8.png" 
              alt="Success Stories Illustration" 
              className="w-full"
            />
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Success Stories That Inspire
            </h2>
            <p className="mb-6 text-gray-300">
              At HigzenDev, we believe in the power of innovation and determination. Our journey is
              paved with inspiring success stories that showcase the incredible potential when passion
              meets technology.
            </p>
            <p className="mb-8 text-gray-300">
              Explore the inspiring tales of startups and established businesses alike, as they soar to new
              heights by unlocking the potential of HigzenDev solutions.
            </p>
            
            <hr className="my-8" />
            
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-lg text-white">Innovative Solutions:</h3>
                <p className="text-gray-300">Redefining industries with cutting-edge technology.</p>
              </div>
              
              <div>
                <h3 className="font-bold text-lg text-white">Determined Success:</h3>
                <p className="text-gray-300">Stories of overcoming challenges with HigzenDev support.</p>
              </div>
              
              <div>
                <h3 className="font-bold text-lg text-white">Growth through Partnership:</h3>
                <p className="text-gray-300">Collaborative efforts that drive business expansion.</p>
              </div>
              
              <div>
                <h3 className="font-bold text-lg text-white">Heart in Technology:</h3>
                <p className="text-gray-300">Where passion meets advanced solutions, shaping success.</p>
              </div>
            </div>
            
            <hr className="my-8" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
