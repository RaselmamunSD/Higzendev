import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Heart, Lightbulb, Target, TrendingUp } from 'lucide-react';

const ProfessionalServices = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto px-4 text-center relative">
            <Heart className="mx-auto mb-6 text-primary" size={64} />
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Professional Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Strategic consulting and technical expertise to optimize your organization's performance, streamline processes, and achieve your business objectives.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Comprehensive Consulting Solutions</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-card p-8 rounded-xl shadow-card-glow hover:shadow-glow transition-all duration-300 border border-border group hover:scale-105">
                  <Lightbulb className="text-primary mb-4 group-hover:scale-110 transition-transform" size={48} />
                  <h3 className="text-2xl font-semibold mb-4">Business Consulting</h3>
                  <p className="text-muted-foreground leading-relaxed">Strategic guidance to help you make informed decisions, optimize operations, and achieve sustainable growth.</p>
                </div>
                
                <div className="bg-card p-8 rounded-xl shadow-card-glow hover:shadow-glow transition-all duration-300 border border-border group hover:scale-105">
                  <Target className="text-primary mb-4 group-hover:scale-110 transition-transform" size={48} />
                  <h3 className="text-2xl font-semibold mb-4">Technical Consulting</h3>
                  <p className="text-muted-foreground leading-relaxed">Expert technical advice on architecture, technology selection, and implementation strategies for your projects.</p>
                </div>
                
                <div className="bg-card p-8 rounded-xl shadow-card-glow hover:shadow-glow transition-all duration-300 border border-border group hover:scale-105">
                  <TrendingUp className="text-primary mb-4 group-hover:scale-110 transition-transform" size={48} />
                  <h3 className="text-2xl font-semibold mb-4">Process Optimization</h3>
                  <p className="text-muted-foreground leading-relaxed">Analyze and improve your business processes to increase efficiency, reduce costs, and enhance productivity.</p>
                </div>
                
                <div className="bg-card p-8 rounded-xl shadow-card-glow hover:shadow-glow transition-all duration-300 border border-border group hover:scale-105">
                  <Heart className="text-primary mb-4 group-hover:scale-110 transition-transform" size={48} />
                  <h3 className="text-2xl font-semibold mb-4">Digital Transformation</h3>
                  <p className="text-muted-foreground leading-relaxed">Guide your organization through digital transformation initiatives to stay competitive in the modern marketplace.</p>
                </div>
              </div>

              <div className="bg-card p-8 rounded-xl mb-8 border border-border shadow-card-glow">
                <h3 className="text-2xl font-bold mb-6">Our Consulting Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-primary">Business Consulting</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm font-bold">✓</div>
                        <span className="text-muted-foreground">Strategic Planning</span>
                      </li>
                      <li className="flex items-center">
                        <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm font-bold">✓</div>
                        <span className="text-muted-foreground">Business Process Analysis</span>
                      </li>
                      <li className="flex items-center">
                        <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm font-bold">✓</div>
                        <span className="text-muted-foreground">Market Research & Analysis</span>
                      </li>
                      <li className="flex items-center">
                        <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm font-bold">✓</div>
                        <span className="text-muted-foreground">Digital Strategy Development</span>
                      </li>
                      <li className="flex items-center">
                        <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm font-bold">✓</div>
                        <span className="text-muted-foreground">Change Management</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-primary">Technical Consulting</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm font-bold">✓</div>
                        <span className="text-muted-foreground">Technology Architecture Design</span>
                      </li>
                      <li className="flex items-center">
                        <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm font-bold">✓</div>
                        <span className="text-muted-foreground">System Integration Planning</span>
                      </li>
                      <li className="flex items-center">
                        <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm font-bold">✓</div>
                        <span className="text-muted-foreground">Security Assessment & Planning</span>
                      </li>
                      <li className="flex items-center">
                        <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm font-bold">✓</div>
                        <span className="text-muted-foreground">Performance Optimization</span>
                      </li>
                      <li className="flex items-center">
                        <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center mr-3 text-sm font-bold">✓</div>
                        <span className="text-muted-foreground">Technology Roadmap Development</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-xl border border-border">
                <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  We take a holistic approach to consulting, combining deep industry knowledge with technical expertise to deliver actionable insights and sustainable solutions. Our consultants work closely with your team to understand your unique challenges and opportunities.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  <div className="text-center">
                    <div className="bg-primary text-primary-foreground rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-3 font-bold text-lg">1</div>
                    <h4 className="font-semibold mb-2 text-lg">Assess</h4>
                    <p className="text-sm text-muted-foreground">Analyze current state and identify opportunities</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary text-primary-foreground rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-3 font-bold text-lg">2</div>
                    <h4 className="font-semibold mb-2 text-lg">Design</h4>
                    <p className="text-sm text-muted-foreground">Develop tailored solutions and strategies</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary text-primary-foreground rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-3 font-bold text-lg">3</div>
                    <h4 className="font-semibold mb-2 text-lg">Implement</h4>
                    <p className="text-sm text-muted-foreground">Execute solutions with ongoing support</p>
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

export default ProfessionalServices;