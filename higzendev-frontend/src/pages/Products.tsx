import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Star, ExternalLink, Github, MessageCircle, Phone, Info, Check, ArrowRight } from 'lucide-react';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Apps category products with detailed information
  const appsProducts = [
    {
      id: 101,
      name: 'HealthCare Pro',
      description: 'Healthcare Management Application',
      longDescription: 'HealthCare Pro is a comprehensive healthcare management app designed for patients, doctors, and hospital administration. Features include appointment booking, prescription management, telemedicine, and medical record storage.',
      image: '/lovable-uploads/b44b4376-6a18-4433-9b0e-6719c11aa425.png',
      category: 'Apps',
      price: '$2,999',
      rating: 4.9,
      reviews: 342,
      features: [
        'Appointment Scheduling & Reminders',
        'Telemedicine Video Consultation',
        'Electronic Health Records (EHR)',
        'Prescription & Lab Report Management',
        'Multi-language Support'
      ],
      technologies: ['React Native', 'Node.js', 'PostgreSQL', 'Firebase', 'WebRTC'],
      status: 'Available'
    },
    {
      id: 102,
      name: 'EduLearn Plus',
      description: 'Online Education Platform',
      longDescription: 'EduLearn Plus is a modern e-learning platform that provides interactive learning experiences for students and teachers. Includes live classes, quizzes, assignments, and progress tracking features.',
      image: '/lovable-uploads/72ace780-45bd-4fc9-a7d4-43f9d6b33361.png',
      category: 'Apps',
      price: '$1,999',
      rating: 4.8,
      reviews: 567,
      features: [
        'Live Classes & Recorded Videos',
        'Interactive Quizzes & Assignments',
        'Progress Tracking Dashboard',
        'Certificate Generation',
        'Parent Notification System'
      ],
      technologies: ['Flutter', 'Django', 'MySQL', 'AWS S3', 'Zoom API'],
      status: 'Available'
    },
    {
      id: 103,
      name: 'FinTrack Wallet',
      description: 'Personal Finance Management',
      longDescription: 'FinTrack Wallet is designed for personal and business financial management. Features income-expense tracking, budget planning, investment monitoring, and financial report generation.',
      image: '/lovable-uploads/a364049e-ac00-4930-bd2f-53ac02e911d9.png',
      category: 'Apps',
      price: '$1,499',
      rating: 4.7,
      reviews: 423,
      features: [
        'Income & Expense Tracking',
        'Budget Planning & Goal Setting',
        'Bank Account Integration',
        'Detailed Financial Reports',
        'Bill Reminders & Payment Schedule'
      ],
      technologies: ['React Native', 'Python', 'MongoDB', 'Plaid API', 'Chart.js'],
      status: 'Available'
    },
    {
      id: 104,
      name: 'FoodExpress',
      description: 'Food Delivery Application',
      longDescription: 'FoodExpress is a complete food ordering and delivery platform. Includes separate apps for restaurants, customers, and delivery riders with real-time tracking and payment integration.',
      image: '/lovable-uploads/e86d3e88-9e98-45c2-bae4-e324c827606f.png',
      category: 'Apps',
      price: '$3,499',
      rating: 4.6,
      reviews: 289,
      features: [
        'Real-time Order Tracking',
        'Multiple Payment Options',
        'Restaurant Dashboard',
        'Delivery Rider App',
        'Review & Rating System'
      ],
      technologies: ['Flutter', 'Node.js', 'Firebase', 'Google Maps API', 'Stripe'],
      status: 'Available'
    },
    {
      id: 105,
      name: 'SmartRetail POS',
      description: 'POS System for Retail Business',
      longDescription: 'SmartRetail POS is a modern point of sale solution for small to medium-sized retail businesses. Features inventory management, sales reporting, customer management, and multi-store support.',
      image: '/lovable-uploads/54285353-c710-4552-b5a9-36c4ce0ed9b8.png',
      category: 'Apps',
      price: '$2,499',
      rating: 4.8,
      reviews: 198,
      features: [
        'Fast Billing & Invoicing',
        'Inventory & Stock Management',
        'Sales Analytics Dashboard',
        'Barcode Scanning Support',
        'Offline Mode Support'
      ],
      technologies: ['React', 'Electron', 'SQLite', 'Node.js', 'Thermal Printer API'],
      status: 'Available'
    },
    {
      id: 106,
      name: 'HRConnect',
      description: 'HR Management System',
      longDescription: 'HRConnect is built for complete human resource management of your organization. Features employee onboarding, attendance, leave management, payroll, and performance review.',
      image: '/lovable-uploads/64e0086b-d1a8-4fbe-9242-556584c00448.png',
      category: 'Apps',
      price: '$2,299',
      rating: 4.7,
      reviews: 156,
      features: [
        'Employee Database Management',
        'Attendance & Leave Tracking',
        'Payroll Processing & Tax Calculation',
        'Performance Appraisal System',
        'Recruitment Management'
      ],
      technologies: ['Angular', 'Spring Boot', 'PostgreSQL', 'Docker', 'AWS'],
      status: 'Coming Soon'
    }
  ];

  // ERP category products with detailed information
  const erpProducts = [
    {
      id: 201,
      name: 'Enterprise ERP Suite',
      description: 'Complete Enterprise Resource Planning',
      longDescription: 'Enterprise ERP Suite is a complete business solution that integrates finance, HR, supply chain, manufacturing, and sales modules. Ideal for medium to large organizations.',
      image: '/lovable-uploads/72ace780-45bd-4fc9-a7d4-43f9d6b33361.png',
      category: 'ERP',
      price: '$15,999',
      rating: 4.9,
      reviews: 234,
      features: [
        'Financial Accounting & Budgeting',
        'Supply Chain Management',
        'Human Resource Management',
        'Production Planning & Control',
        'Business Intelligence Dashboard'
      ],
      technologies: ['Java', 'Spring Boot', 'Oracle DB', 'Angular', 'Kubernetes'],
      status: 'Available'
    },
    {
      id: 202,
      name: 'Manufacturing ERP',
      description: 'ERP for Manufacturing Industry',
      longDescription: 'Manufacturing ERP is specially designed for the production industry. Features include production planning, inventory control, quality management, and machine maintenance tracking.',
      image: '/lovable-uploads/e86d3e88-9e98-45c2-bae4-e324c827606f.png',
      category: 'ERP',
      price: '$12,499',
      rating: 4.8,
      reviews: 178,
      features: [
        'BOM (Bill of Materials) Management',
        'Production Scheduling & MRP',
        'Quality Control & Testing',
        'Machine Maintenance Tracking',
        'Shop Floor Management'
      ],
      technologies: ['Python', 'Django', 'PostgreSQL', 'React', 'Docker'],
      status: 'Available'
    },
    {
      id: 203,
      name: 'Retail ERP Solution',
      description: 'ERP Solution for Retail Chains',
      longDescription: 'Retail ERP Solution covers all aspects of retail business - multi-store management, inventory, purchasing, sales, CRM, and loyalty programs. For small shops to large chain stores.',
      image: '/lovable-uploads/a364049e-ac00-4930-bd2f-53ac02e911d9.png',
      category: 'ERP',
      price: '$8,999',
      rating: 4.7,
      reviews: 312,
      features: [
        'Multi-Store Inventory Sync',
        'Automatic Reorder Point',
        'Customer Loyalty Program',
        'Vendor Management System',
        'Sales Forecasting & Analytics'
      ],
      technologies: ['Node.js', 'Express', 'MongoDB', 'Vue.js', 'Redis'],
      status: 'Available'
    },
    {
      id: 204,
      name: 'Healthcare ERP',
      description: 'ERP for Hospitals & Clinics',
      longDescription: 'Healthcare ERP is a complete management solution for hospitals, clinics, and healthcare chains. Patient management, billing, pharmacy, lab, and admin all on one platform.',
      image: '/lovable-uploads/b44b4376-6a18-4433-9b0e-6719c11aa425.png',
      category: 'ERP',
      price: '$18,999',
      rating: 4.9,
      reviews: 145,
      features: [
        'Patient Registration & EMR',
        'Appointment & OPD Management',
        'Pharmacy & Inventory Control',
        'Lab Management System',
        'Insurance Claim Processing'
      ],
      technologies: ['C#', '.NET Core', 'SQL Server', 'Angular', 'Azure'],
      status: 'Available'
    },
    {
      id: 205,
      name: 'Education ERP',
      description: 'ERP for Schools & Colleges',
      longDescription: 'Education ERP is built for complete management of educational institutions. Features include student admission, attendance, exams, results, fee management, and parent communication.',
      image: '/lovable-uploads/64e0086b-d1a8-4fbe-9242-556584c00448.png',
      category: 'ERP',
      price: '$6,499',
      rating: 4.8,
      reviews: 267,
      features: [
        'Student Admission & Registration',
        'Online Exam & Result System',
        'Fee Collection & Accounting',
        'Teacher & Staff Management',
        'Parent Portal & Mobile App'
      ],
      technologies: ['PHP', 'Laravel', 'MySQL', 'React', 'Firebase'],
      status: 'Available'
    },
    {
      id: 206,
      name: 'Construction ERP',
      description: 'ERP for Construction Companies',
      longDescription: 'Construction ERP is a specialized solution for the construction industry. Features include project management, cost estimation, material tracking, labor management, and contract management.',
      image: '/lovable-uploads/54285353-c710-4552-b5a9-36c4ce0ed9b8.png',
      category: 'ERP',
      price: '$11,999',
      rating: 4.6,
      reviews: 98,
      features: [
        'Project Planning & Gantt Chart',
        'Cost Estimation & Budgeting',
        'Material & Equipment Tracking',
        'Subcontractor Management',
        'Progress Reporting & Billing'
      ],
      technologies: ['Java', 'Spring', 'PostgreSQL', 'Vue.js', 'AWS'],
      status: 'Coming Soon'
    }
  ];

  const regularProducts = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    description: `${i % 4 === 0 ? 'Advanced CRM Solution' : i % 4 === 1 ? 'E-commerce Platform' : i % 4 === 2 ? 'Project Management Tool' : 'Analytics Dashboard'}`,
    longDescription: `A comprehensive ${i % 4 === 0 ? 'customer relationship management' : i % 4 === 1 ? 'e-commerce' : i % 4 === 2 ? 'project management' : 'analytics'} solution designed to streamline business operations and improve productivity.`,
    image: `https://images.unsplash.com/photo-${1500000000000 + (i * 100000)}?w=400&h=300&fit=crop&auto=format`,
    category: ['CRM', 'E-commerce', 'Project Management', 'Analytics'][i % 4],
    price: `$${(i + 1) * 99}`,
    rating: 4.5 + (Math.random() * 0.5),
    reviews: Math.floor(Math.random() * 500) + 50,
    features: [
      'Real-time data processing',
      'Advanced security features',
      'Cloud-based infrastructure',
      'Mobile responsive design',
      '24/7 customer support'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'TypeScript'],
    status: i % 5 === 0 ? 'Coming Soon' : 'Available'
  }));

  const products = [...appsProducts, ...erpProducts, ...regularProducts];

  const categories = ['All', 'Apps', 'ERP', 'CRM', 'E-commerce', 'Project Management', 'Analytics'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Software Products & Ready-to-Deploy Solutions | HigzenDev"
        description="Explore ready-to-deploy software solutions, ERP systems, mobile applications, CRM, and SaaS products built with cutting-edge technologies by HigzenDev."
        keywords="HigzenDev products, ready software solutions, ERP system, CRM software, mobile apps, SaaS products, custom software development"
      />
      <Header />
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="py-20 bg-muted/30 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in text-foreground">Our Products</h1>
              <p className="text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                Discover our comprehensive suite of software products designed to transform your business operations and drive growth.
              </p>
              <Button className="bg-primary hover:bg-primary/80 text-primary-foreground animate-fade-in" size="lg" style={{ animationDelay: '0.2s' }}>
                Explore All Products
              </Button>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-card border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-primary hover:bg-primary/80" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredProducts.map((product) => (
                <div 
                  key={product.id} 
                  className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-glow transition-all duration-300 border border-border flex flex-col justify-between"
                >
                  {/* Top: Product Image & Content */}
                  <div>
                    {/* Product Image */}
                    <div className="relative h-48 sm:h-52 bg-muted overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.src = `https://via.placeholder.com/400x300?text=${product.name}`;
                        }}
                      />
                      <div className="absolute top-3 right-3">
                        <Badge variant={product.status === 'Available' ? 'default' : 'secondary'} className="shadow-sm">
                          {product.status}
                        </Badge>
                      </div>
                      <div className="absolute top-3 left-3">
                        <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                          {product.category}
                        </Badge>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="p-5 sm:p-6">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="text-xs bg-muted/40">{product.category}</Badge>
                        <div className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="font-semibold text-foreground">{product.rating.toFixed(1)}</span>
                          <span>({product.reviews})</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold mb-2 text-foreground line-clamp-1">{product.name}</h3>
                      <p className="text-muted-foreground mb-4 text-sm line-clamp-2">{product.longDescription}</p>

                      {/* Features */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-xs uppercase tracking-wider text-muted-foreground mb-2">Key Highlights:</h4>
                        <ul className="text-xs sm:text-sm text-muted-foreground space-y-1">
                          {product.features.slice(0, 3).map((feature, index) => (
                            <li key={index} className="flex items-start gap-1.5">
                              <span className="text-primary mt-0.5">•</span>
                              <span className="line-clamp-1">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="mb-2">
                        <div className="flex flex-wrap gap-1.5">
                          {product.technologies.slice(0, 3).map((tech, index) => (
                            <span key={index} className="px-2 py-1 bg-muted text-xs rounded-md text-foreground font-mono">
                              {tech}
                            </span>
                          ))}
                          {product.technologies.length > 3 && (
                            <span className="px-2 py-1 bg-muted/60 text-xs rounded-md text-muted-foreground">
                              +{product.technologies.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom: 3 Action Buttons [Details] [WhatsApp] [Call Now] */}
                  <div className="p-5 sm:p-6 pt-0 border-t border-border/50">
                    <div className="grid grid-cols-3 gap-2 pt-4">
                      {/* Details Button */}
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedProduct(product);
                          setIsModalOpen(true);
                        }}
                        className="w-full py-2.5 px-2 text-xs sm:text-sm font-semibold rounded-lg bg-blue-500/15 text-blue-400 border border-blue-400/40 hover:bg-blue-500/25 hover:border-blue-400/70 transition-all text-center flex items-center justify-center gap-1 active:scale-95 shadow-sm"
                      >
                        <Info className="h-3.5 w-3.5 shrink-0" />
                        <span>Details</span>
                      </button>

                      {/* WhatsApp Button */}
                      <a
                        href={`https://wa.me/8801870966718?text=${encodeURIComponent(`Hello HigzenDev! I am interested in your product: ${product.name} (${product.category})`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 px-2 text-xs sm:text-sm font-semibold rounded-lg bg-emerald-500/15 text-emerald-400 border border-emerald-400/40 hover:bg-emerald-500/25 hover:border-emerald-400/70 transition-all text-center flex items-center justify-center gap-1 active:scale-95 shadow-sm"
                      >
                        <MessageCircle className="h-3.5 w-3.5 shrink-0" />
                        <span>WhatsApp</span>
                      </a>

                      {/* Call Now Button */}
                      <a
                        href="tel:+8801870966718"
                        className="w-full py-2.5 px-2 text-xs sm:text-sm font-semibold rounded-lg bg-amber-500/15 text-amber-400 border border-amber-400/40 hover:bg-amber-500/25 hover:border-amber-400/70 transition-all text-center flex items-center justify-center gap-1 active:scale-95 shadow-sm"
                      >
                        <Phone className="h-3.5 w-3.5 shrink-0" />
                        <span>Call Now</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Products
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Custom Product Development</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Don't see what you're looking for? We specialize in creating custom software products tailored to your specific business needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-primary hover:bg-primary/80 text-primary-foreground" size="lg">
                <Link to="/request-quote">Request Custom Product</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/schedule-meeting">Schedule Consultation</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Product Details Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-card border-border">
            {selectedProduct && (
              <div>
                <DialogHeader className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">{selectedProduct.category}</Badge>
                    <Badge variant={selectedProduct.status === 'Available' ? 'default' : 'secondary'}>
                      {selectedProduct.status}
                    </Badge>
                  </div>
                  <DialogTitle className="text-2xl font-bold text-foreground">
                    {selectedProduct.name}
                  </DialogTitle>
                  <DialogDescription className="text-sm text-muted-foreground">
                    {selectedProduct.description}
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-6">
                  {/* Image */}
                  <div className="relative h-60 w-full rounded-lg overflow-hidden bg-muted">
                    <img 
                      src={selectedProduct.image} 
                      alt={selectedProduct.name} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = `https://via.placeholder.com/600x300?text=${selectedProduct.name}`;
                      }}
                    />
                  </div>

                  {/* Category, Status & Rating */}
                  <div className="flex items-center justify-between p-4 bg-muted/40 rounded-xl border border-border">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs sm:text-sm font-medium">{selectedProduct.category}</Badge>
                      <Badge variant={selectedProduct.status === 'Available' ? 'default' : 'secondary'}>
                        {selectedProduct.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-1.5 bg-card px-3 py-1.5 rounded-lg border border-border">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="font-bold text-foreground">{selectedProduct.rating.toFixed(1)}</span>
                      <span className="text-xs text-muted-foreground">({selectedProduct.reviews} reviews)</span>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <h4 className="font-semibold text-base mb-2 text-foreground">Product Overview</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {selectedProduct.longDescription}
                    </p>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-base mb-3 text-foreground">Key Features & Modules</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {selectedProduct.features.map((feature: string, idx: number) => (
                        <div key={idx} className="flex items-start gap-2 text-sm bg-muted/30 p-2.5 rounded-lg border border-border/50">
                          <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="font-semibold text-base mb-2 text-foreground">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.technologies.map((tech: string, idx: number) => (
                        <Badge key={idx} variant="secondary" className="px-3 py-1 font-mono text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Direct Contact / Action Buttons */}
                  <div className="pt-4 border-t border-border flex flex-col sm:flex-row gap-3">
                    <a
                      href={`https://wa.me/8801870966718?text=${encodeURIComponent(`Hello HigzenDev! I would like to get more details/demo for ${selectedProduct.name}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 px-4 text-sm font-semibold rounded-lg bg-emerald-500 text-white hover:bg-emerald-600 transition-all text-center flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>Chat on WhatsApp</span>
                    </a>

                    <a
                      href="tel:+8801870966718"
                      className="flex-1 py-3 px-4 text-sm font-semibold rounded-lg bg-amber-500 text-white hover:bg-amber-600 transition-all text-center flex items-center justify-center gap-2"
                    >
                      <Phone className="h-4 w-4" />
                      <span>Call Us Directly</span>
                    </a>

                    <Button asChild className="flex-1" variant="outline">
                      <Link to="/request-quote" onClick={() => setIsModalOpen(false)}>
                        <span>Custom Quote</span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </main>
      <Footer />
    </div>
  );
};

export default Products;