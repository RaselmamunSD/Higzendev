
import React from 'react';

const VisionSection = () => {
  return (
    <section className="py-20 bg-[#0a0b33] text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              How our Vision Became Reality
            </h2>
            <div className="rounded-3xl overflow-hidden">
              <img 
                src="/lovable-uploads/53486b42-3a97-4b33-9947-cc3dc4e85b5c.png" 
                alt="Team meeting"
                className="w-full h-auto"
              />
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="space-y-8">
              <p className="text-lg">
                Our company specializes in software outsourcing and provides robust,
                scalable, and efficient solutions to clients around the world.
              </p>
              
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Delivering Diverse Projects Across Industries for Numerous Companies
                </h3>
                <p className="text-lg mb-6">
                  Founded in 2016, HigzenDev provides IT consulting and software 
                  development services. With the help of a passionate team and talented 
                  individuals dedicated to positively impacting the world, HigzenDev's 
                  products help businesses grow and succeed. Our goal is to create digital 
                  experiences that will make your life simpler and more enjoyable.
                </p>
                <p className="text-lg">
                  With about 300 colleagues at hand, our focus is on providing innovative 
                  software development solutions that make life easier for people worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
