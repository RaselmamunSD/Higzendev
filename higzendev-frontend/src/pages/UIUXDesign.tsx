import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Palette, Users, Eye, Lightbulb, Monitor, Smartphone } from 'lucide-react';

const UIUXDesign = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-pink-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center mb-6">
              <Palette size={80} className="text-pink-400" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">UI/UX Design</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Creating intuitive and beautiful user experiences that delight and convert
            </p>
          </div>
        </section>

        {/* Design Services */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Design Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-xl border hover:shadow-glow transition-all">
                <Eye className="text-primary mb-4" size={48} />
                <h3 className="text-xl font-bold mb-3">User Research</h3>
                <p className="text-muted-foreground">In-depth user analysis to understand needs, behaviors, and pain points.</p>
              </div>
              <div className="bg-card p-6 rounded-xl border hover:shadow-glow transition-all">
                <Lightbulb className="text-primary mb-4" size={48} />
                <h3 className="text-xl font-bold mb-3">UX Strategy</h3>
                <p className="text-muted-foreground">Strategic planning for optimal user journeys and experience optimization.</p>
              </div>
              <div className="bg-card p-6 rounded-xl border hover:shadow-glow transition-all">
                <Palette className="text-primary mb-4" size={48} />
                <h3 className="text-xl font-bold mb-3">Visual Design</h3>
                <p className="text-muted-foreground">Beautiful interfaces that align with your brand and engage users.</p>
              </div>
              <div className="bg-card p-6 rounded-xl border hover:shadow-glow transition-all">
                <Monitor className="text-primary mb-4" size={48} />
                <h3 className="text-xl font-bold mb-3">Web Design</h3>
                <p className="text-muted-foreground">Responsive web designs that work perfectly across all devices.</p>
              </div>
              <div className="bg-card p-6 rounded-xl border hover:shadow-glow transition-all">
                <Smartphone className="text-primary mb-4" size={48} />
                <h3 className="text-xl font-bold mb-3">Mobile Design</h3>
                <p className="text-muted-foreground">Native mobile app designs optimized for touch interactions.</p>
              </div>
              <div className="bg-card p-6 rounded-xl border hover:shadow-glow transition-all">
                <Users className="text-primary mb-4" size={48} />
                <h3 className="text-xl font-bold mb-3">Usability Testing</h3>
                <p className="text-muted-foreground">Testing and validation to ensure optimal user experience.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Design Process */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Design Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Research', desc: 'User research and market analysis' },
                { step: '02', title: 'Wireframe', desc: 'Information architecture and wireframing' },
                { step: '03', title: 'Design', desc: 'Visual design and prototyping' },
                { step: '04', title: 'Test', desc: 'User testing and iteration' }
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Design Tools */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Design Tools & Technologies</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {['Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'Illustrator', 'InVision', 'Principle', 'Framer'].map((tool) => (
                <div key={tool} className="bg-card p-4 rounded-lg text-center border hover:shadow-glow transition-all">
                  <h4 className="font-semibold">{tool}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Great Design Matters</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-pink-600" size={40} />
                </div>
                <h3 className="text-xl font-bold mb-3">Increased Engagement</h3>
                <p className="text-gray-600">Well-designed interfaces keep users engaged and encourage interaction.</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="text-purple-600" size={40} />
                </div>
                <h3 className="text-xl font-bold mb-3">Better Conversions</h3>
                <p className="text-gray-600">Optimized user experiences lead to higher conversion rates and sales.</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="text-indigo-600" size={40} />
                </div>
                <h3 className="text-xl font-bold mb-3">Brand Recognition</h3>
                <p className="text-gray-600">Consistent design builds trust and strengthens your brand identity.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your User Experience?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's create designs that not only look great but also drive results
            </p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Your Design Project
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default UIUXDesign;