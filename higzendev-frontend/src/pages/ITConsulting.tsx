import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Users, Target, Lightbulb, TrendingUp, Shield, Cog } from 'lucide-react';

const ITConsulting = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center mb-6">
              <Users size={80} className="text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">IT Consulting</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Strategic technology guidance to optimize your business operations and drive growth
            </p>
          </div>
        </section>

        {/* Consulting Services */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Consulting Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-xl border hover:shadow-glow transition-all">
                <Target className="text-primary mb-4" size={48} />
                <h3 className="text-xl font-bold mb-3">IT Strategy</h3>
                <p className="text-muted-foreground">Develop comprehensive IT strategies aligned with your business objectives.</p>
              </div>
              <div className="bg-card p-6 rounded-xl border hover:shadow-glow transition-all">
                <Lightbulb className="text-primary mb-4" size={48} />
                <h3 className="text-xl font-bold mb-3">Digital Transformation</h3>
                <p className="text-muted-foreground">Guide your organization through digital modernization and innovation.</p>
              </div>
              <div className="bg-card p-6 rounded-xl border hover:shadow-glow transition-all">
                <Shield className="text-primary mb-4" size={48} />
                <h3 className="text-xl font-bold mb-3">Cybersecurity</h3>
                <p className="text-muted-foreground">Assess and strengthen your security posture against evolving threats.</p>
              </div>
              <div className="bg-card p-6 rounded-xl border hover:shadow-glow transition-all">
                <Cog className="text-primary mb-4" size={48} />
                <h3 className="text-xl font-bold mb-3">System Integration</h3>
                <p className="text-muted-foreground">Seamlessly integrate disparate systems for improved efficiency.</p>
              </div>
              <div className="bg-card p-6 rounded-xl border hover:shadow-glow transition-all">
                <TrendingUp className="text-primary mb-4" size={48} />
                <h3 className="text-xl font-bold mb-3">Performance Optimization</h3>
                <p className="text-muted-foreground">Optimize IT infrastructure for maximum performance and cost efficiency.</p>
              </div>
              <div className="bg-card p-6 rounded-xl border hover:shadow-glow transition-all">
                <Users className="text-primary mb-4" size={48} />
                <h3 className="text-xl font-bold mb-3">Change Management</h3>
                <p className="text-muted-foreground">Support organizational change with technology adoption strategies.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Consulting Areas */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Areas of Expertise</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Technology Assessment</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Current infrastructure evaluation</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Technology gap analysis</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>ROI analysis and recommendations</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Future-proofing strategies</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Business Process Optimization</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Workflow automation opportunities</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Process re-engineering</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Efficiency improvement strategies</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Technology integration planning</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Consulting Methodology</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Discovery', desc: 'Understand your business needs and current challenges' },
                { step: '02', title: 'Analysis', desc: 'Comprehensive assessment of existing systems and processes' },
                { step: '03', title: 'Recommendation', desc: 'Develop tailored solutions and implementation roadmap' },
                { step: '04', title: 'Implementation', desc: 'Support execution with ongoing guidance and monitoring' }
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Our IT Consulting?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="text-primary" size={40} />
                </div>
                <h3 className="text-xl font-bold mb-3">Strategic Focus</h3>
                <p className="text-muted-foreground">Align technology initiatives with business goals for maximum impact.</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="text-primary" size={40} />
                </div>
                <h3 className="text-xl font-bold mb-3">Proven Results</h3>
                <p className="text-muted-foreground">Track record of successful IT transformations across industries.</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-primary" size={40} />
                </div>
                <h3 className="text-xl font-bold mb-3">Expert Team</h3>
                <p className="text-muted-foreground">Experienced consultants with deep industry knowledge.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Industries We Serve</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {['Healthcare', 'Finance', 'Manufacturing', 'Retail', 'Education', 'Government', 'Technology', 'Non-Profit'].map((industry) => (
                <div key={industry} className="bg-card border p-4 rounded-lg text-center hover:shadow-glow transition-all">
                  <h4 className="font-semibold">{industry}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your IT Strategy?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how our consulting services can drive your business forward
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule a Consultation
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ITConsulting;