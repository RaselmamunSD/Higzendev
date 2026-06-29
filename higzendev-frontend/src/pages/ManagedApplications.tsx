import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FileText, Rocket, Shield, Zap } from 'lucide-react';

const ManagedApplications = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-accent/10 via-background to-primary/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto px-4 text-center relative">
            <FileText className="mx-auto mb-6 text-accent" size={64} />
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Managed Applications
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Complete application lifecycle management from concept to deployment and maintenance. We handle the entire development process so you can focus on your core business.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Comprehensive Application Management</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-card p-8 rounded-xl shadow-card-glow hover:shadow-glow transition-all duration-300 border border-border group hover:scale-105">
                  <Rocket className="text-accent mb-4 group-hover:scale-110 transition-transform" size={48} />
                  <h3 className="text-2xl font-semibold mb-4">Full Development Lifecycle</h3>
                  <p className="text-muted-foreground leading-relaxed">From planning and design to development, testing, and deployment - we manage every aspect of your application development.</p>
                </div>
                
                <div className="bg-card p-8 rounded-xl shadow-card-glow hover:shadow-glow transition-all duration-300 border border-border group hover:scale-105">
                  <Shield className="text-accent mb-4 group-hover:scale-110 transition-transform" size={48} />
                  <h3 className="text-2xl font-semibold mb-4">Security & Compliance</h3>
                  <p className="text-muted-foreground leading-relaxed">Built-in security measures and compliance standards ensure your applications are protected and meet industry regulations.</p>
                </div>
                
                <div className="bg-card p-8 rounded-xl shadow-card-glow hover:shadow-glow transition-all duration-300 border border-border group hover:scale-105">
                  <Zap className="text-accent mb-4 group-hover:scale-110 transition-transform" size={48} />
                  <h3 className="text-2xl font-semibold mb-4">Performance Optimization</h3>
                  <p className="text-muted-foreground leading-relaxed">Continuous monitoring and optimization to ensure your applications perform at peak efficiency.</p>
                </div>
                
                <div className="bg-card p-8 rounded-xl shadow-card-glow hover:shadow-glow transition-all duration-300 border border-border group hover:scale-105">
                  <FileText className="text-accent mb-4 group-hover:scale-110 transition-transform" size={48} />
                  <h3 className="text-2xl font-semibold mb-4">Ongoing Maintenance</h3>
                  <p className="text-muted-foreground leading-relaxed">Regular updates, bug fixes, and feature enhancements to keep your applications current and competitive.</p>
                </div>
              </div>

              <div className="bg-card p-8 rounded-xl mb-8 border border-border shadow-card-glow">
                <h3 className="text-2xl font-bold mb-6">Our Services Include</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm font-bold">✓</div>
                      <span className="text-muted-foreground">Custom Application Development</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm font-bold">✓</div>
                      <span className="text-muted-foreground">Web Application Development</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm font-bold">✓</div>
                      <span className="text-muted-foreground">Mobile Application Development</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm font-bold">✓</div>
                      <span className="text-muted-foreground">API Development & Integration</span>
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm font-bold">✓</div>
                      <span className="text-muted-foreground">Database Design & Management</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm font-bold">✓</div>
                      <span className="text-muted-foreground">Cloud Infrastructure Setup</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm font-bold">✓</div>
                      <span className="text-muted-foreground">DevOps & CI/CD Implementation</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-accent text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm font-bold">✓</div>
                      <span className="text-muted-foreground">Application Monitoring & Support</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-8 rounded-xl border border-border">
                <h3 className="text-2xl font-bold mb-4">Why Choose Managed Applications?</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Our managed application services provide you with a dedicated team that becomes an extension of your organization. We take full ownership of the development process, ensuring high-quality deliverables while you focus on your business objectives.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With our proven methodologies and experienced team, we deliver applications that are scalable, maintainable, and aligned with your business goals.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ManagedApplications;