import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Database, Shield, Zap, BarChart3, Users, Lock, RefreshCw, Cloud, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const DatabaseManagement = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-primary/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary font-medium mb-6">
                <Database size={20} />
                Database Management Solutions
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Professional Database Management Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Comprehensive database solutions that ensure your data is secure, accessible, and optimized for performance. 
                From design to maintenance, we handle all aspects of your database infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8">
                  <Link to="/contact" className="flex items-center gap-2">
                    Get Database Consultation <ArrowRight size={20} />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Link to="/request-quote">Request Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Database Services */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Database Services</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Complete database lifecycle management from planning to optimization
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                <Database className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Database Design & Architecture</h3>
                <p className="text-muted-foreground mb-4">
                  Custom database design with optimal schema, indexing strategies, and performance tuning for your specific needs.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Schema Design</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Performance Optimization</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Scalability Planning</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                <Shield className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Database Security</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive security measures including encryption, access control, and compliance with industry standards.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Data Encryption</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Access Control</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Audit Logging</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                <RefreshCw className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Database Migration</h3>
                <p className="text-muted-foreground mb-4">
                  Seamless migration services with minimal downtime and complete data integrity preservation.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Zero-Downtime Migration</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Data Validation</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Rollback Planning</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                <BarChart3 className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Performance Monitoring</h3>
                <p className="text-muted-foreground mb-4">
                  Real-time monitoring and analytics to ensure optimal database performance and proactive issue resolution.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Real-time Monitoring</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Performance Analytics</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Automated Alerts</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                <Cloud className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Cloud Database Management</h3>
                <p className="text-muted-foreground mb-4">
                  Expert management of cloud databases across AWS, Azure, Google Cloud, and hybrid environments.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Multi-Cloud Support</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Auto-scaling</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Disaster Recovery</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Database Administration</h3>
                <p className="text-muted-foreground mb-4">
                  24/7 database administration services ensuring high availability and optimal performance.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> 24/7 Monitoring</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Backup Management</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Maintenance Planning</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Database Technologies */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Database Technologies We Work With</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                'MySQL', 'PostgreSQL', 'MongoDB', 'Oracle', 'SQL Server', 'Redis', 'Cassandra', 'DynamoDB',
                'Firebase', 'Supabase', 'MariaDB', 'SQLite', 'Neo4j', 'InfluxDB', 'CouchDB', 'Elasticsearch'
              ].map((tech) => (
                <div key={tech} className="bg-background p-6 rounded-xl text-center hover:shadow-md transition-all border">
                  <h4 className="font-semibold text-lg">{tech}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Database Management?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our comprehensive approach ensures your database infrastructure is reliable, secure, and scalable
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">High Performance</h3>
                    <p className="text-muted-foreground">Optimized queries and indexing strategies for lightning-fast data access and processing.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Lock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
                    <p className="text-muted-foreground">Military-grade encryption and comprehensive access controls to protect your sensitive data.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <BarChart3 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Scalable Architecture</h3>
                    <p className="text-muted-foreground">Design that grows with your business, handling increased load seamlessly.</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6">Database Management Benefits</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>99.9% Uptime Guarantee</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Automated Backup & Recovery</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Real-time Performance Monitoring</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>24/7 Expert Support</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Cost-Effective Solutions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Optimize Your Database?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let our database experts help you build a robust, scalable, and secure database infrastructure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8">
                <Link to="/request-quote" className="flex items-center gap-2">
                  Start Your Project <ArrowRight size={20} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/schedule-meeting">Get Free Consultation</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DatabaseManagement;