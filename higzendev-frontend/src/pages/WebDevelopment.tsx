import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Code, Globe, Smartphone, Zap, Shield, Users } from 'lucide-react';

const WebDevelopment = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center mb-6">
              <Code size={80} className="text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Web Development</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Creating powerful, scalable web applications that drive your business forward
            </p>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Web Development Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-xl border hover:shadow-glow transition-all">
                <Globe className="text-primary mb-4" size={48} />
                <h3 className="text-xl font-bold mb-3">Frontend Development</h3>
                <p className="text-muted-foreground">Modern, responsive interfaces using React, Vue.js, and Angular with cutting-edge design principles.</p>
              </div>
              <div className="bg-card p-6 rounded-xl border hover:shadow-glow transition-all">
                <Shield className="text-primary mb-4" size={48} />
                <h3 className="text-xl font-bold mb-3">Backend Development</h3>
                <p className="text-muted-foreground">Robust server-side solutions with Node.js, Python, and .NET for scalable applications.</p>
              </div>
              <div className="bg-card p-6 rounded-xl border hover:shadow-glow transition-all">
                <Zap className="text-primary mb-4" size={48} />
                <h3 className="text-xl font-bold mb-3">Full-Stack Solutions</h3>
                <p className="text-muted-foreground">Complete web applications from database to user interface with seamless integration.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Technologies We Use</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                'React', 'Node.js', 'Python', 'Angular', 'Vue.js', 'MongoDB', 'PostgreSQL', 'AWS',
                'TypeScript', 'JavaScript', 'Express.js', 'Next.js', 'Django', 'Flask', 'Docker',
                'Kubernetes', 'Redis', 'GraphQL', 'Firebase', 'Supabase'
              ].map((tech) => (
                <div key={tech} className="bg-card p-4 rounded-lg text-center border hover:shadow-glow transition-all">
                  <h4 className="font-semibold">{tech}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Development Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Planning', desc: 'Requirements analysis and project roadmap creation' },
                { step: '02', title: 'Design', desc: 'UI/UX design and system architecture planning' },
                { step: '03', title: 'Development', desc: 'Agile development with regular testing and reviews' },
                { step: '04', title: 'Deployment', desc: 'Launch, monitoring, and ongoing maintenance support' }
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

        {/* CTA */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Web Project?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how we can bring your web development vision to life
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Started Today
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WebDevelopment;