import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Shield, Bug, Zap, CheckCircle, Target, Users, Monitor, Smartphone, Globe, ArrowRight, BarChart3, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const QATesting = () => {
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
                <Shield size={20} />
                Quality Assurance & Testing Services
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Ensure Flawless Software Quality
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Comprehensive QA and testing services to ensure your software is bug-free, secure, and performs optimally 
                across all platforms and devices. Quality is not just our goal—it's our guarantee.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8">
                  <Link to="/contact" className="flex items-center gap-2">
                    Start Testing <ArrowRight size={20} />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Link to="/request-quote">Get Test Strategy</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testing Services */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Testing Services</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Full spectrum of testing solutions covering every aspect of software quality assurance
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                <Bug className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Functional Testing</h3>
                <p className="text-muted-foreground mb-4">
                  Thorough validation of application functionality to ensure all features work as intended.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Unit Testing</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Integration Testing</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> System Testing</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                <Zap className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Performance Testing</h3>
                <p className="text-muted-foreground mb-4">
                  Evaluate system performance under various load conditions and optimize for peak efficiency.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Load Testing</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Stress Testing</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Volume Testing</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                <Shield className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Security Testing</h3>
                <p className="text-muted-foreground mb-4">
                  Identify vulnerabilities and ensure robust security measures protect your application and data.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Penetration Testing</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Vulnerability Assessment</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Authentication Testing</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Usability Testing</h3>
                <p className="text-muted-foreground mb-4">
                  Ensure optimal user experience through comprehensive usability and accessibility testing.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> User Experience Testing</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Accessibility Testing</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Cross-browser Testing</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                <Smartphone className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Mobile Testing</h3>
                <p className="text-muted-foreground mb-4">
                  Specialized testing for mobile applications across different devices, platforms, and network conditions.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Device Compatibility</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Platform Testing</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Network Testing</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                <Monitor className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Automation Testing</h3>
                <p className="text-muted-foreground mb-4">
                  Efficient automated testing solutions for faster delivery and continuous integration workflows.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Test Automation</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> CI/CD Integration</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Regression Testing</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testing Methodologies */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Testing Process</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Structured approach ensuring comprehensive coverage and quality delivery
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-xl">1</div>
                <h3 className="text-xl font-semibold mb-3">Planning & Strategy</h3>
                <p className="text-muted-foreground">Define test scope, objectives, and create comprehensive test strategy.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-xl">2</div>
                <h3 className="text-xl font-semibold mb-3">Test Design</h3>
                <p className="text-muted-foreground">Create detailed test cases and scenarios covering all requirements.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-xl">3</div>
                <h3 className="text-xl font-semibold mb-3">Execution</h3>
                <p className="text-muted-foreground">Execute test cases systematically and document all findings.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-xl">4</div>
                <h3 className="text-xl font-semibold mb-3">Reporting</h3>
                <p className="text-muted-foreground">Provide detailed reports with insights and recommendations.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testing Tools & Technologies */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Testing Tools & Technologies</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                'Selenium', 'Cypress', 'Jest', 'Playwright', 'TestNG', 'JMeter', 'Postman', 'OWASP ZAP',
                'Appium', 'TestComplete', 'SoapUI', 'LoadRunner', 'Burp Suite', 'BrowserStack', 'Sauce Labs', 'TestRail'
              ].map((tool) => (
                <div key={tool} className="bg-card p-6 rounded-xl text-center hover:shadow-md transition-all border">
                  <h4 className="font-semibold text-lg">{tool}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our QA Services?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our comprehensive approach ensures your software meets the highest quality standards
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">99.9% Bug Detection</h3>
                    <p className="text-muted-foreground">Our rigorous testing process catches even the most elusive bugs before release.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Faster Time to Market</h3>
                    <p className="text-muted-foreground">Automated testing and parallel execution reduce testing cycles significantly.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <BarChart3 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Cost Reduction</h3>
                    <p className="text-muted-foreground">Early bug detection saves significant costs compared to post-release fixes.</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6">Quality Assurance Benefits</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Risk Mitigation & Compliance</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Enhanced User Experience</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Brand Reputation Protection</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Improved Software Reliability</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Continuous Quality Improvement</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Served */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Specialized testing expertise across diverse industry verticals
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                'Healthcare', 'Finance & Banking', 'E-commerce', 'Education', 'Government', 'Manufacturing', 'Retail', 'Travel',
                'Real Estate', 'Gaming', 'Media & Entertainment', 'Automotive', 'Logistics', 'Insurance', 'Telecom', 'SaaS'
              ].map((industry) => (
                <div key={industry} className="bg-card p-6 rounded-xl text-center hover:shadow-md transition-all border">
                  <h4 className="font-semibold">{industry}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Ensure Software Quality?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let our QA experts help you deliver bug-free, high-quality software that exceeds user expectations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                <Link to="/contact" className="flex items-center gap-2">
                  Start Quality Testing <ArrowRight size={20} />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/request-quote">Get Testing Strategy</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default QATesting;