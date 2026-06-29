import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Smartphone, Apple, Play, Users, Zap, Shield } from 'lucide-react';

const MobileAppDevelopment = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center mb-6">
              <Smartphone size={80} className="text-purple-400" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Mobile App Development</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Build engaging mobile experiences that connect with your users anywhere, anytime
            </p>
          </div>
        </section>

        {/* Platform Support */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Platform Development</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-8 rounded-xl border text-center hover:shadow-glow transition-all">
                <Apple className="text-foreground mx-auto mb-4" size={60} />
                <h3 className="text-2xl font-bold mb-4">iOS Development</h3>
                <p className="text-muted-foreground">Native iOS apps using Swift and Objective-C for optimal performance and user experience.</p>
              </div>
              <div className="bg-card p-8 rounded-xl border text-center hover:shadow-glow transition-all">
                <Play className="text-primary mx-auto mb-4" size={60} />
                <h3 className="text-2xl font-bold mb-4">Android Development</h3>
                <p className="text-muted-foreground">Native Android apps using Kotlin and Java with Material Design principles.</p>
              </div>
              <div className="bg-card p-8 rounded-xl border text-center hover:shadow-glow transition-all">
                <Zap className="text-primary mx-auto mb-4" size={60} />
                <h3 className="text-2xl font-bold mb-4">Cross-Platform</h3>
                <p className="text-muted-foreground">React Native and Flutter apps for faster development and multi-platform reach.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">App Development Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Users, title: 'User Authentication', desc: 'Secure login and user management systems' },
                { icon: Shield, title: 'Data Security', desc: 'End-to-end encryption and secure data handling' },
                { icon: Zap, title: 'Real-time Updates', desc: 'Push notifications and live data synchronization' },
                { icon: Smartphone, title: 'Responsive Design', desc: 'Optimized for all screen sizes and devices' },
                { icon: Play, title: 'App Store Ready', desc: 'Compliance with store guidelines and optimization' },
                { icon: Apple, title: 'Performance', desc: 'Fast loading times and smooth user interactions' }
              ].map((feature) => (
                <div key={feature.title} className="p-6 bg-card border rounded-xl hover:shadow-glow transition-all">
                  <feature.icon className="text-primary mb-4" size={48} />
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Mobile App Development Process</h2>
            <div className="space-y-8">
              {[
                { phase: 'Discovery & Planning', desc: 'Market research, user analysis, and feature planning' },
                { phase: 'UI/UX Design', desc: 'Wireframing, prototyping, and visual design creation' },
                { phase: 'Development', desc: 'Native or cross-platform coding with agile methodology' },
                { phase: 'Testing & QA', desc: 'Comprehensive testing across devices and platforms' },
                { phase: 'Deployment', desc: 'App store submission and launch support' },
                { phase: 'Maintenance', desc: 'Ongoing updates, bug fixes, and feature enhancements' }
              ].map((phase, index) => (
                <div key={index} className="flex items-center space-x-6">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{phase.phase}</h3>
                    <p className="text-muted-foreground">{phase.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Turn Your App Idea Into Reality</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's create a mobile app that engages your users and grows your business
            </p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Your App Project
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MobileAppDevelopment;