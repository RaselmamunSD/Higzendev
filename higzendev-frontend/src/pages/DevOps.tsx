import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowRight, GitBranch, Server, Cloud, Code, Monitor, Shield, Zap, Target, Users, CheckCircle, Wrench } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const DevOps = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-primary/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <GitBranch size={32} className="text-primary" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                DevOps Solutions
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Accelerate your software delivery with our comprehensive DevOps services. 
                We bridge the gap between development and operations to ensure faster, more reliable deployments.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link to="/contact">Get Started</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/request-quote">Request Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What is DevOps Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">What is DevOps?</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  DevOps is a software development methodology that combines development (Dev) and operations (Ops) 
                  to shorten the development lifecycle and provide continuous delivery with high software quality. 
                  It emphasizes collaboration, automation, and monitoring at all steps of software construction.
                </p>
                <p className="text-lg leading-relaxed">
                  Our DevOps approach helps organizations deliver applications and services at high velocity, 
                  enabling faster innovation and better customer service through automated processes and improved collaboration.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Services Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Our DevOps Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-background rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Cloud size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">CI/CD Pipeline Setup</h3>
                <p className="text-muted-foreground">
                  Implement robust continuous integration and continuous deployment pipelines for automated testing and deployment.
                </p>
              </div>
              <div className="bg-background rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Server size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Infrastructure as Code</h3>
                <p className="text-muted-foreground">
                  Manage and provision infrastructure through code, ensuring consistency and repeatability across environments.
                </p>
              </div>
              <div className="bg-background rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Monitor size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Monitoring & Logging</h3>
                <p className="text-muted-foreground">
                  Comprehensive monitoring solutions with real-time alerting and detailed logging for better visibility.
                </p>
              </div>
              <div className="bg-background rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Shield size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Security Integration</h3>
                <p className="text-muted-foreground">
                  Integrate security practices into the DevOps pipeline with automated security testing and compliance checks.
                </p>
              </div>
              <div className="bg-background rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Code size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Configuration Management</h3>
                <p className="text-muted-foreground">
                  Automated configuration management using tools like Ansible, Puppet, and Chef for consistent deployments.
                </p>
              </div>
              <div className="bg-background rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Wrench size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Containerization & Orchestration</h3>
                <p className="text-muted-foreground">
                  Docker containerization and Kubernetes orchestration for scalable and portable application deployments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Technologies We Use</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {[
                'Docker', 'Kubernetes', 'Jenkins', 'GitLab CI', 'AWS', 'Azure',
                'Terraform', 'Ansible', 'Prometheus', 'Grafana', 'ELK Stack', 'Nginx'
              ].map((tech, index) => (
                <div key={index} className="text-center p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                  <div className="font-semibold text-sm">{tech}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Why Choose Our DevOps Services?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Zap size={16} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Faster Time to Market</h3>
                  <p className="text-muted-foreground text-sm">
                    Reduce deployment time from weeks to hours with automated pipelines and streamlined processes.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Shield size={16} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Improved Reliability</h3>
                  <p className="text-muted-foreground text-sm">
                    Minimize downtime and errors with automated testing, monitoring, and rollback capabilities.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Target size={16} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Cost Optimization</h3>
                  <p className="text-muted-foreground text-sm">
                    Reduce operational costs through automation and efficient resource utilization.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Users size={16} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Enhanced Collaboration</h3>
                  <p className="text-muted-foreground text-sm">
                    Break down silos between development and operations teams for better communication.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle size={16} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Quality Assurance</h3>
                  <p className="text-muted-foreground text-sm">
                    Automated testing and quality gates ensure consistent, high-quality releases.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Monitor size={16} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Better Visibility</h3>
                  <p className="text-muted-foreground text-sm">
                    Real-time monitoring and analytics provide insights into application performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Our DevOps Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="font-bold mb-3">Assessment</h3>
                <p className="text-muted-foreground text-sm">
                  Analyze current infrastructure and development processes to identify improvement opportunities.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="font-bold mb-3">Strategy</h3>
                <p className="text-muted-foreground text-sm">
                  Develop a comprehensive DevOps roadmap tailored to your specific business needs and goals.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="font-bold mb-3">Implementation</h3>
                <p className="text-muted-foreground text-sm">
                  Execute the DevOps strategy with automated pipelines, monitoring, and infrastructure setup.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h3 className="font-bold mb-3">Optimization</h3>
                <p className="text-muted-foreground text-sm">
                  Continuously monitor and optimize processes for improved performance and efficiency.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Development Process?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our DevOps solutions can accelerate your software delivery and improve your operational efficiency.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/contact">Start Your DevOps Journey</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/schedule-meeting">Schedule Consultation</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DevOps;