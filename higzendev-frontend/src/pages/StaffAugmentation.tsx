import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Monitor, Users, Code, Settings } from 'lucide-react';

const StaffAugmentation = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto px-4 text-center relative">
            <Monitor className="mx-auto mb-6 text-primary" size={64} />
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Staff Augmentation
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Enhance your development team with our skilled professionals. We provide talented developers, designers, and tech experts to seamlessly integrate with your existing team.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Choose Our Staff Augmentation Services?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-card p-8 rounded-xl shadow-card-glow hover:shadow-glow transition-all duration-300 border border-border group hover:scale-105">
                  <Users className="text-primary mb-4 group-hover:scale-110 transition-transform" size={48} />
                  <h3 className="text-2xl font-semibold mb-4">Expert Talent Pool</h3>
                  <p className="text-muted-foreground leading-relaxed">Access to a diverse pool of experienced developers, designers, and technical specialists ready to join your team.</p>
                </div>
                
                <div className="bg-card p-8 rounded-xl shadow-card-glow hover:shadow-glow transition-all duration-300 border border-border group hover:scale-105">
                  <Code className="text-primary mb-4 group-hover:scale-110 transition-transform" size={48} />
                  <h3 className="text-2xl font-semibold mb-4">Technical Excellence</h3>
                  <p className="text-muted-foreground leading-relaxed">Our professionals are skilled in the latest technologies and development methodologies to ensure high-quality deliverables.</p>
                </div>
                
                <div className="bg-card p-8 rounded-xl shadow-card-glow hover:shadow-glow transition-all duration-300 border border-border group hover:scale-105">
                  <Settings className="text-primary mb-4 group-hover:scale-110 transition-transform" size={48} />
                  <h3 className="text-2xl font-semibold mb-4">Flexible Scaling</h3>
                  <p className="text-muted-foreground leading-relaxed">Scale your team up or down based on project requirements without the overhead of permanent hiring.</p>
                </div>
                
                <div className="bg-card p-8 rounded-xl shadow-card-glow hover:shadow-glow transition-all duration-300 border border-border group hover:scale-105">
                  <Monitor className="text-primary mb-4 group-hover:scale-110 transition-transform" size={48} />
                  <h3 className="text-2xl font-semibold mb-4">Seamless Integration</h3>
                  <p className="text-muted-foreground leading-relaxed">Our professionals quickly adapt to your workflow, tools, and company culture for maximum productivity.</p>
                </div>
              </div>

              <div className="bg-card p-8 rounded-xl border border-border shadow-card-glow">
                <h3 className="text-2xl font-bold mb-6">Our Process</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1 font-bold">1</div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Requirements Analysis</h4>
                      <p className="text-muted-foreground">We understand your project needs, technical requirements, and team dynamics.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1 font-bold">2</div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Talent Matching</h4>
                      <p className="text-muted-foreground">We select the best-fit professionals from our talent pool based on your specific requirements.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1 font-bold">3</div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Quick Integration</h4>
                      <p className="text-muted-foreground">Our professionals join your team and start contributing to your projects immediately.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1 font-bold">4</div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Ongoing Support</h4>
                      <p className="text-muted-foreground">We provide continuous support and ensure optimal performance throughout the engagement.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default StaffAugmentation;