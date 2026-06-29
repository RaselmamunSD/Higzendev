import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Cloud, Shield, Zap, Database, Server, Lock } from 'lucide-react';

const CloudSolutions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-cyan-900 to-teal-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center mb-6">
              <Cloud size={80} className="text-cyan-400" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Cloud Solutions</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Scalable, secure cloud infrastructure that grows with your business
            </p>
          </div>
        </section>

        {/* Cloud Services */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Cloud Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-xl border hover:shadow-glow transition-all">
                <Server className="text-primary mb-4" size={48} />
                <h3 className="text-xl font-bold mb-3">Cloud Migration</h3>
                <p className="text-muted-foreground">Seamless migration of your existing systems to cloud platforms with minimal downtime.</p>
              </div>
              <div className="bg-card p-6 rounded-xl border hover:shadow-glow transition-all">
                <Database className="text-primary mb-4" size={48} />
                <h3 className="text-xl font-bold mb-3">Database Solutions</h3>
                <p className="text-muted-foreground">Managed database services with automatic backups and high availability.</p>
              </div>
              <div className="bg-card p-6 rounded-xl border hover:shadow-glow transition-all">
                <Shield className="text-primary mb-4" size={48} />
                <h3 className="text-xl font-bold mb-3">Security & Compliance</h3>
                <p className="text-muted-foreground">Enterprise-grade security with compliance standards like GDPR, HIPAA, and SOC2.</p>
              </div>
              <div className="bg-card p-6 rounded-xl border hover:shadow-glow transition-all">
                <Zap className="text-primary mb-4" size={48} />
                <h3 className="text-xl font-bold mb-3">Auto Scaling</h3>
                <p className="text-muted-foreground">Automatic resource scaling to handle traffic spikes and optimize costs.</p>
              </div>
              <div className="bg-card p-6 rounded-xl border hover:shadow-glow transition-all">
                <Lock className="text-primary mb-4" size={48} />
                <h3 className="text-xl font-bold mb-3">Backup & Recovery</h3>
                <p className="text-muted-foreground">Automated backup solutions with disaster recovery planning.</p>
              </div>
              <div className="bg-card p-6 rounded-xl border hover:shadow-glow transition-all">
                <Cloud className="text-primary mb-4" size={48} />
                <h3 className="text-xl font-bold mb-3">Multi-Cloud Strategy</h3>
                <p className="text-muted-foreground">Leverage multiple cloud providers for optimal performance and redundancy.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Cloud Platforms */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Cloud Platforms We Work With</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card border p-8 rounded-xl text-center hover:shadow-glow transition-all">
                <div className="w-16 h-16 bg-primary rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Cloud className="text-primary-foreground" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Amazon AWS</h3>
                <p className="text-muted-foreground">Comprehensive cloud services including EC2, S3, RDS, Lambda, and more.</p>
              </div>
              <div className="bg-card border p-8 rounded-xl text-center hover:shadow-glow transition-all">
                <div className="w-16 h-16 bg-primary rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Server className="text-primary-foreground" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Microsoft Azure</h3>
                <p className="text-muted-foreground">Enterprise solutions with Active Directory integration and hybrid cloud capabilities.</p>
              </div>
              <div className="bg-card border p-8 rounded-xl text-center hover:shadow-glow transition-all">
                <div className="w-16 h-16 bg-primary rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Database className="text-primary-foreground" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Google Cloud</h3>
                <p className="text-muted-foreground">AI/ML capabilities, BigQuery analytics, and Kubernetes-native solutions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Cloud Benefits</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Cost Efficiency', desc: 'Pay only for what you use with no upfront infrastructure costs', icon: '💰' },
                { title: 'Scalability', desc: 'Scale resources up or down based on demand automatically', icon: '📈' },
                { title: 'Reliability', desc: '99.9% uptime with built-in redundancy and failover', icon: '🔒' },
                { title: 'Global Reach', desc: 'Deploy applications worldwide with edge locations', icon: '🌍' }
              ].map((benefit) => (
                <div key={benefit.title} className="bg-card border p-6 rounded-xl text-center hover:shadow-glow transition-all">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Migration Process */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Cloud Migration Process</h2>
            <div className="space-y-8">
              {[
                { phase: 'Assessment', desc: 'Evaluate current infrastructure and identify migration opportunities' },
                { phase: 'Strategy', desc: 'Develop migration roadmap and choose optimal cloud architecture' },
                { phase: 'Planning', desc: 'Create detailed migration plan with timelines and risk mitigation' },
                { phase: 'Migration', desc: 'Execute phased migration with minimal business disruption' },
                { phase: 'Optimization', desc: 'Fine-tune performance and costs post-migration' },
                { phase: 'Management', desc: 'Ongoing monitoring, maintenance, and optimization' }
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
        <section className="py-16 bg-cyan-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Move to the Cloud?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how cloud solutions can transform your business operations
            </p>
            <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Your Cloud Journey
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CloudSolutions;