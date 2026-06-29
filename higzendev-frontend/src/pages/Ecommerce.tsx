import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ShoppingCart, CreditCard, Truck, Shield, BarChart3, Users, Smartphone, Globe, CheckCircle, ArrowRight, Star, Zap } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const Ecommerce = () => {
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
                <ShoppingCart size={20} />
                E-commerce Development Solutions
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Build Your Online Empire
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Create powerful e-commerce platforms that drive sales and deliver exceptional shopping experiences. 
                From simple stores to enterprise marketplaces, we build solutions that scale with your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8">
                  <Link to="/contact" className="flex items-center gap-2">
                    Start Your Store <ArrowRight size={20} />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Link to="/request-quote">View Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* E-commerce Solutions */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive E-commerce Solutions</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                End-to-end e-commerce development services tailored to your business needs
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                <ShoppingCart className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Custom E-commerce Stores</h3>
                <p className="text-muted-foreground mb-4">
                  Fully customized online stores built from scratch with unique designs and powerful functionality.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Custom Design</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Advanced Features</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> SEO Optimized</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                <Globe className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Multi-vendor Marketplaces</h3>
                <p className="text-muted-foreground mb-4">
                  Build comprehensive marketplaces where multiple vendors can sell their products with advanced management.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Vendor Management</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Commission System</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Analytics Dashboard</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                <Smartphone className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Mobile Commerce Apps</h3>
                <p className="text-muted-foreground mb-4">
                  Native and cross-platform mobile apps that provide seamless shopping experiences on all devices.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> iOS & Android</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Push Notifications</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Offline Capability</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                <CreditCard className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Payment Integration</h3>
                <p className="text-muted-foreground mb-4">
                  Secure payment gateways supporting multiple payment methods and currencies for global reach.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Multiple Gateways</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Global Currencies</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> PCI Compliance</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                <Truck className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Inventory & Logistics</h3>
                <p className="text-muted-foreground mb-4">
                  Advanced inventory management and logistics integration for efficient order fulfillment.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Real-time Tracking</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Multi-warehouse</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Shipping Integration</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                <BarChart3 className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Analytics & Reporting</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive analytics and reporting tools to track sales, customer behavior, and business growth.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Sales Analytics</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Customer Insights</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Custom Reports</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Platforms We Work With */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">E-commerce Platforms & Technologies</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                'Shopify', 'WooCommerce', 'Magento', 'BigCommerce', 'Custom React', 'Next.js', 'Shopify Plus', 'PrestaShop',
                'OpenCart', 'Drupal Commerce', 'Laravel', 'Node.js', 'Stripe', 'PayPal', 'Square', 'Razorpay'
              ].map((platform) => (
                <div key={platform} className="bg-background p-6 rounded-xl text-center hover:shadow-md transition-all border">
                  <h4 className="font-semibold text-lg">{platform}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our E-commerce Solutions?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We build e-commerce platforms that not only look great but drive real business results
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Lightning Fast Performance</h3>
                    <p className="text-muted-foreground">Optimized for speed with advanced caching and CDN integration for instant page loads.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Bank-Level Security</h3>
                    <p className="text-muted-foreground">SSL encryption, PCI compliance, and fraud protection to keep transactions secure.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Conversion Optimized</h3>
                    <p className="text-muted-foreground">Designed to maximize sales with proven UX patterns and A/B testing capabilities.</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6">E-commerce Success Features</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Mobile-First Responsive Design</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Advanced Search & Filtering</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Abandoned Cart Recovery</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Multi-language Support</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Social Media Integration</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Email Marketing Integration</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Real results from our e-commerce projects
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background p-8 rounded-xl border text-center">
                <div className="text-4xl font-bold text-primary mb-2">300%</div>
                <div className="text-muted-foreground">Increase in Online Sales</div>
              </div>
              <div className="bg-background p-8 rounded-xl border text-center">
                <div className="text-4xl font-bold text-primary mb-2">50%</div>
                <div className="text-muted-foreground">Faster Page Load Times</div>
              </div>
              <div className="bg-background p-8 rounded-xl border text-center">
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <div className="text-muted-foreground">Customer Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Launch Your E-commerce Store?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of successful businesses selling online with our powerful e-commerce solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                <Link to="/contact" className="flex items-center gap-2">
                  Start Your Store <ArrowRight size={20} />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/request-quote">Get Free Quote</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Ecommerce;