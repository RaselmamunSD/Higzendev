import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Home, Info, Briefcase, Building2, Phone, FileText, Users, Rocket } from 'lucide-react';

const Sitemap = () => {
  const navigate = useNavigate();

  const navigateToTop = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sitemapSections = [
    {
      title: 'Main Pages',
      icon: Home,
      links: [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Team', path: '/team' },
        { name: 'Founder', path: '/founder' },
        { name: 'Our Story', path: '/story' },
        { name: 'Contact Us', path: '/contact' },
      ]
    },
    {
      title: 'Services',
      icon: Briefcase,
      links: [
        { name: 'All Services', path: '/services' },
        { name: 'Web Development', path: '/services/web-development' },
        { name: 'Mobile App Development', path: '/services/mobile-app-development' },
        { name: 'UI/UX Design', path: '/services/ui-ux-design' },
        { name: 'Cloud Solutions', path: '/services/cloud-solutions' },
        { name: 'IT Consulting', path: '/services/it-consulting' },
        { name: 'AI Development', path: '/services/ai-development' },
        { name: 'DevOps', path: '/services/devops' },
        { name: 'SRE', path: '/services/sre' },
        { name: 'QA Testing', path: '/services/qa-testing' },
        { name: 'Database Management', path: '/services/database-management' },
        { name: 'Embedded System Design', path: '/services/embedded-system-design' },
        { name: 'Custom CMS', path: '/services/custom-cms' },
        { name: 'Managed Applications', path: '/services/managed-applications' },
        { name: 'Staff Augmentation', path: '/services/staff-augmentation' },
        { name: 'Professional Services', path: '/services/professional-services' },
      ]
    },
    {
      title: 'Industries',
      icon: Building2,
      links: [
        { name: 'All Industries', path: '/industries' },
        { name: 'E-commerce', path: '/industries/ecommerce' },
      ]
    },
    {
      title: 'Portfolio',
      icon: Rocket,
      links: [
        { name: 'Success Stories', path: '/success-stories' },
        { name: 'Case Studies', path: '/case-studies' },
        { name: 'Products', path: '/products' },
        { name: 'Blog', path: '/blog' },
      ]
    },
    {
      title: 'Get Started',
      icon: Phone,
      links: [
        { name: 'Request Quote', path: '/request-quote' },
        { name: 'Schedule Meeting', path: '/schedule-meeting' },
        { name: 'Brand Promotion', path: '/brand-promotion' },
        { name: 'Careers', path: '/careers' },
      ]
    },
    {
      title: 'Legal',
      icon: FileText,
      links: [
        { name: 'Privacy Policy', path: '/privacy-policy' },
        { name: 'Terms & Conditions', path: '/terms-conditions' },
      ]
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-accent/10 via-primary/5 to-background py-16 border-b border-border/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Sitemap
              </h1>
              <p className="text-lg text-muted-foreground">
                Navigate through all pages of our website
              </p>
            </div>
          </div>
        </div>

        {/* Sitemap Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sitemapSections.map((section, idx) => {
                const Icon = section.icon;
                return (
                  <div 
                    key={idx}
                    className="bg-card/50 backdrop-blur-sm rounded-2xl shadow-lg border border-border/30 p-6 hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h2 className="text-xl font-bold text-foreground">{section.title}</h2>
                    </div>
                    <ul className="space-y-3">
                      {section.links.map((link, linkIdx) => (
                        <li key={linkIdx}>
                          <button
                            onClick={() => navigateToTop(link.path)}
                            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group w-full text-left"
                          >
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            <span className="text-sm">{link.name}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Sitemap;
