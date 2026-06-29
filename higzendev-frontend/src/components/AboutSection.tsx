import React from 'react';
import { CheckCircle } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <div className="h-64 rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/954ddfc6-3ae2-41b6-9dd6-0f792497c6d0.png" 
                  alt="Developer coding on laptop"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-72 rounded-lg mt-8 overflow-hidden">
                <img 
                  src="/lovable-uploads/f1d2b0e1-1812-4659-9841-f6fd4f6a06a8.png" 
                  alt="Person coding HTML"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-72 rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/72ace780-45bd-4fc9-a7d4-43f9d6b33361.png" 
                  alt="Developers working together"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-64 rounded-lg mt-8 overflow-hidden">
                <img 
                  src="/lovable-uploads/04bb71ef-9de4-4174-949b-c195f9072db7.png" 
                  alt="Code through glasses"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              <span className="text-primary">About</span> Us
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-foreground">Global IT Solutions Provider</h3>
            <p className="mb-6 text-muted-foreground text-lg">
              HigzenDev is a trusted global provider of IT solutions and services, including web design 
              and development, graphic design, branding, video and photo editing, and digital platform 
              services. With 13+ years of experience and a client base of 1850+ businesses worldwide, 
              we offer innovative, cost-effective solutions to meet our client's requirements.
            </p>
            
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-foreground">Diverse Clientele</h3>
            <p className="mb-6 text-muted-foreground text-lg">
              Our clients span diverse industries and geographies, including the US, Canada, UK, Germany, 
              Australia, and New Zealand. We've successfully partnered with digital publishers, retailers, 
              healthcare providers, travel and tourism companies, and online brands to drive business growth 
              and achieve goals.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-8">
              <div className="flex items-center gap-2 text-foreground font-medium">
                <CheckCircle className="text-primary" size={20} />
                <span>13+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 text-foreground font-medium">
                <CheckCircle className="text-primary" size={20} />
                <span>1850+ Clients Worldwide</span>
              </div>
              <div className="flex items-center gap-2 text-foreground font-medium">
                <CheckCircle className="text-primary" size={20} />
                <span>100+ IT Professionals</span>
              </div>
              <div className="flex items-center gap-2 text-foreground font-medium">
                <CheckCircle className="text-primary" size={20} />
                <span>24/7 Support Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
