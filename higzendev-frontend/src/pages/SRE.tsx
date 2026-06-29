import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Shield, Server, Monitor, AlertTriangle, TrendingUp, Clock, Target, Users, CheckCircle, Zap, BarChart, Activity } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const SRE = () => {
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
                <Shield size={32} className="text-primary" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Site Reliability Engineering
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Ensure maximum uptime, performance, and reliability for your applications with our comprehensive 
                Site Reliability Engineering services. We build and maintain resilient systems that scale.
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

        {/* What is SRE Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">What is Site Reliability Engineering?</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  Site Reliability Engineering (SRE) is a discipline that incorporates aspects of software engineering 
                  and applies them to infrastructure and operations problems. SRE teams focus on creating scalable 
                  and highly reliable software systems through engineering practices.
                </p>
                <p className="text-lg leading-relaxed">
                  Our SRE approach combines software engineering with systems administration to build and run 
                  large-scale, massively distributed, fault-tolerant systems that ensure your applications 
                  perform reliably under any conditions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Metrics Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">SRE Key Performance Indicators</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-background rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">99.9%</h3>
                <p className="text-muted-foreground">Service Availability</p>
              </div>
              <div className="bg-background rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">&lt;100ms</h3>
                <p className="text-muted-foreground">Response Time</p>
              </div>
              <div className="bg-background rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">&lt;1%</h3>
                <p className="text-muted-foreground">Error Rate</p>
              </div>
              <div className="bg-background rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <AlertTriangle size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">&lt;5min</h3>
                <p className="text-muted-foreground">Mean Time to Recovery</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Our SRE Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-background rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-border/50">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Monitor size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Monitoring & Observability</h3>
                <p className="text-muted-foreground">
                  Comprehensive monitoring solutions with real-time metrics, alerting, and observability platforms.
                </p>
              </div>
              <div className="bg-background rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-border/50">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Server size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Infrastructure Management</h3>
                <p className="text-muted-foreground">
                  Automated infrastructure provisioning, scaling, and management for optimal performance.
                </p>
              </div>
              <div className="bg-background rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-border/50">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <AlertTriangle size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Incident Management</h3>
                <p className="text-muted-foreground">
                  24/7 incident response, root cause analysis, and post-mortem processes to prevent recurrence.
                </p>
              </div>
              <div className="bg-background rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-border/50">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <BarChart size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Performance Optimization</h3>
                <p className="text-muted-foreground">
                  Continuous performance tuning and optimization to ensure optimal system efficiency.
                </p>
              </div>
              <div className="bg-background rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-border/50">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Shield size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Disaster Recovery</h3>
                <p className="text-muted-foreground">
                  Comprehensive backup strategies and disaster recovery planning to ensure business continuity.
                </p>
              </div>
              <div className="bg-background rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-border/50">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Activity size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Capacity Planning</h3>
                <p className="text-muted-foreground">
                  Proactive capacity planning and resource allocation based on usage patterns and growth projections.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SRE Principles Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Core SRE Principles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-background rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <CheckCircle size={24} className="text-primary mr-3" />
                  Error Budgets
                </h3>
                <p className="text-muted-foreground">
                  Balance reliability goals with innovation velocity through carefully managed error budgets that 
                  allow for controlled risk-taking while maintaining service quality.
                </p>
              </div>
              <div className="bg-background rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Zap size={24} className="text-primary mr-3" />
                  Automation
                </h3>
                <p className="text-muted-foreground">
                  Eliminate toil through intelligent automation, freeing up time for strategic improvements 
                  and reducing the risk of human error in critical operations.
                </p>
              </div>
              <div className="bg-background rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Users size={24} className="text-primary mr-3" />
                  Shared Responsibility
                </h3>
                <p className="text-muted-foreground">
                  Foster collaboration between development and operations teams with shared ownership 
                  of reliability goals and system performance.
                </p>
              </div>
              <div className="bg-background rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <TrendingUp size={24} className="text-primary mr-3" />
                  Continuous Improvement
                </h3>
                <p className="text-muted-foreground">
                  Learn from failures through blameless post-mortems and implement systematic improvements 
                  to prevent similar issues in the future.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tools & Technologies Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Tools & Technologies</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {[
                'Prometheus', 'Grafana', 'ELK Stack', 'Datadog', 'New Relic', 'PagerDuty',
                'Kubernetes', 'Docker', 'Terraform', 'Ansible', 'AWS CloudWatch', 'Azure Monitor'
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
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Benefits of Our SRE Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Shield size={16} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Maximum Uptime</h3>
                  <p className="text-muted-foreground text-sm">
                    Achieve industry-leading availability with proactive monitoring and rapid incident response.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <TrendingUp size={16} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Improved Performance</h3>
                  <p className="text-muted-foreground text-sm">
                    Optimize system performance through continuous monitoring and data-driven improvements.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Clock size={16} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Faster Recovery</h3>
                  <p className="text-muted-foreground text-sm">
                    Minimize downtime with automated incident detection and rapid response procedures.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Target size={16} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Cost Efficiency</h3>
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
                  <h3 className="font-bold mb-2">Better User Experience</h3>
                  <p className="text-muted-foreground text-sm">
                    Ensure consistent, high-quality user experiences through reliable system performance.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle size={16} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Predictable Scaling</h3>
                  <p className="text-muted-foreground text-sm">
                    Scale systems predictably based on data-driven capacity planning and monitoring.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Our SRE Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="font-bold mb-3">Assessment</h3>
                <p className="text-muted-foreground text-sm">
                  Evaluate current system reliability, performance metrics, and identify improvement opportunities.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="font-bold mb-3">Design</h3>
                <p className="text-muted-foreground text-sm">
                  Create comprehensive monitoring, alerting, and reliability frameworks tailored to your needs.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="font-bold mb-3">Implementation</h3>
                <p className="text-muted-foreground text-sm">
                  Deploy monitoring tools, automate processes, and establish incident response procedures.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h3 className="font-bold mb-3">Optimization</h3>
                <p className="text-muted-foreground text-sm">
                  Continuously monitor, analyze, and optimize system performance and reliability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Achieve Maximum Reliability?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our SRE services can improve your system reliability and operational efficiency.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/contact">Start Your SRE Journey</Link>
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

export default SRE;