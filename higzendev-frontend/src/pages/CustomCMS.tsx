import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FileText, Edit3, Users, Shield, Zap, Globe, Smartphone, BarChart3, CheckCircle, ArrowRight, Settings, Lock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const CustomCMS = () => {
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
                <FileText size={20} />
                Custom Content Management Systems
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Take Control of Your Content
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Custom-built content management systems tailored to your specific workflow and business needs. 
                Empower your team with intuitive tools to manage content efficiently and effectively.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8">
                  <Link to="/contact" className="flex items-center gap-2">
                    Build Your CMS <ArrowRight size={20} />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Link to="/request-quote">See Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CMS Features */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful CMS Features</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Everything you need to manage your content effectively, built specifically for your requirements
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                <Edit3 className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Intuitive Content Editor</h3>
                <p className="text-muted-foreground mb-4">
                  Rich text editor with drag-and-drop functionality, media management, and preview capabilities.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> WYSIWYG Editor</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Media Library</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Live Preview</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">User Management</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive user roles and permissions system with workflow approval processes.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Role-based Access</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Approval Workflow</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Activity Tracking</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                <Smartphone className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Mobile Responsive</h3>
                <p className="text-muted-foreground mb-4">
                  Fully responsive admin interface that works seamlessly across all devices and screen sizes.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Mobile Optimized</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Touch-friendly UI</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Offline Capabilities</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                <Shield className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Advanced Security</h3>
                <p className="text-muted-foreground mb-4">
                  Enterprise-grade security with encrypted data storage, secure authentication, and audit trails.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Data Encryption</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> 2FA Support</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Audit Logs</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                <BarChart3 className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Analytics & Insights</h3>
                <p className="text-muted-foreground mb-4">
                  Built-in analytics to track content performance, user engagement, and system usage patterns.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Content Analytics</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> User Behavior</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Performance Metrics</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                <Globe className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Multi-language Support</h3>
                <p className="text-muted-foreground mb-4">
                  Internationalization support with content translation management and localized interfaces.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Multi-language Content</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Translation Workflow</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Localized UI</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CMS Types */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">CMS Solutions We Build</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Tailored content management solutions for every industry and use case
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-background p-8 rounded-xl border text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Website CMS</h3>
                <p className="text-muted-foreground">Complete website management with pages, blogs, and media handling.</p>
              </div>

              <div className="bg-background p-8 rounded-xl border text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Document Management</h3>
                <p className="text-muted-foreground">Organize, version, and collaborate on documents and files efficiently.</p>
              </div>

              <div className="bg-background p-8 rounded-xl border text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Digital Asset Management</h3>
                <p className="text-muted-foreground">Centralized storage and management of digital assets and media files.</p>
              </div>

              <div className="bg-background p-8 rounded-xl border text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Knowledge Base</h3>
                <p className="text-muted-foreground">Comprehensive knowledge management system with search and categorization.</p>
              </div>

              <div className="bg-background p-8 rounded-xl border text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Edit3 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">News & Publishing</h3>
                <p className="text-muted-foreground">Editorial workflow with publishing, scheduling, and content approval.</p>
              </div>

              <div className="bg-background p-8 rounded-xl border text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Custom Solutions</h3>
                <p className="text-muted-foreground">Bespoke CMS solutions tailored to your specific business requirements.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Technologies We Use</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                'React', 'Node.js', 'PHP', 'Python', 'Laravel', 'Django', 'WordPress', 'Drupal',
                'Strapi', 'Contentful', 'MongoDB', 'MySQL', 'PostgreSQL', 'Redis', 'AWS S3', 'Cloudinary'
              ].map((tech) => (
                <div key={tech} className="bg-card p-6 rounded-xl text-center hover:shadow-md transition-all border">
                  <h4 className="font-semibold text-lg">{tech}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Custom CMS?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Advantages of building a content management system specifically for your business
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Perfect Fit</h3>
                    <p className="text-muted-foreground">Built specifically for your workflow, ensuring maximum efficiency and productivity.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Lock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Full Control</h3>
                    <p className="text-muted-foreground">Complete ownership and control over your content management system and data.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Settings className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Scalable Solution</h3>
                    <p className="text-muted-foreground">Designed to grow with your business and adapt to changing requirements.</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6">Custom CMS Benefits</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Unlimited Customization</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Enhanced Security & Control</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Better Performance</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Cost-effective Long-term</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Seamless Integration</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Development Process</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Systematic approach to building your perfect content management system
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-xl">1</div>
                <h3 className="text-xl font-semibold mb-3">Requirements Analysis</h3>
                <p className="text-muted-foreground">Deep dive into your content workflow and specific requirements.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-xl">2</div>
                <h3 className="text-xl font-semibold mb-3">System Design</h3>
                <p className="text-muted-foreground">Create detailed architecture and user interface designs.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-xl">3</div>
                <h3 className="text-xl font-semibold mb-3">Development & Testing</h3>
                <p className="text-muted-foreground">Build and thoroughly test your custom CMS solution.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-xl">4</div>
                <h3 className="text-xl font-semibold mb-3">Deployment & Training</h3>
                <p className="text-muted-foreground">Deploy the system and train your team for optimal usage.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Your Custom CMS?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let us create a content management system that perfectly fits your workflow and business needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                <Link to="/contact" className="flex items-center gap-2">
                  Start Your CMS Project <ArrowRight size={20} />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/request-quote">Get Custom Quote</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CustomCMS;