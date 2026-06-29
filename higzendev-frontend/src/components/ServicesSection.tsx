
import React from 'react';
import { Monitor, Code, Layers, ArrowRight, ShoppingCart, Database, FileText, Award, Lightbulb, Cloud } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  slug: string;
}

const ServiceCard = ({ icon, title, description, slug }: ServiceCardProps) => {
  const navigate = useNavigate();
  
  return (
    <div 
      onClick={() => { navigate(`/services/${slug}`); window.scrollTo(0, 0); }}
      className="bg-dark-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 p-6 hover:glow-effect cursor-pointer"
    >
      <div className="h-14 w-14 rounded-md bg-primary/10 flex items-center justify-center text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
      <p className="text-muted-foreground text-sm mb-4">{description}</p>
      <div className="mt-auto">
        <span className="text-primary hover:text-accent flex items-center text-sm font-medium transition-colors">
          Learn More <ArrowRight size={16} className="ml-1" />
        </span>
      </div>
    </div>
  );
};

interface ScrollingServiceCardProps {
  icon: React.ReactNode;
  title: string;
  slug: string;
}

const ScrollingServiceCard = ({ icon, title, slug }: ScrollingServiceCardProps) => {
  const navigate = useNavigate();
  
  return (
    <div className="flex-shrink-0 w-64 mx-4">
      <div 
        onClick={() => { navigate(`/services/${slug}`); window.scrollTo(0, 0); }}
        className="bg-dark-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300 p-6 cursor-pointer"
      >
        <div className="h-14 w-14 rounded-md bg-primary/10 flex items-center justify-center text-primary mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
        <div className="mt-4">
          <span className="text-primary hover:text-accent flex items-center text-sm font-medium transition-colors">
            Learn More <ArrowRight size={16} className="ml-1" />
          </span>
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
const services = [
    {
      icon: <Monitor size={32} />,
      title: 'Web Application Development',
      description: 'Innovative web application development for your unique needs to enhance your business growth and user experience.',
      slug: 'web-development'
    },
    {
      icon: <Code size={32} />,
      title: 'Software Development',
      description: 'Transform your business with our custom software, driving innovation and achieving exceptional outcomes.',
      slug: 'web-development'
    },
    {
      icon: <Layers size={32} />,
      title: 'UI/UX Design',
      description: 'Elevate user experience with our creative UI/UX design. Intuitive interfaces that captivate and engage client.',
      slug: 'ui-ux-design'
    }
  ];

  const scrollingServices = [
    { icon: <ShoppingCart size={24} />, title: 'E-commerce', slug: 'ecommerce' },
    { icon: <Code size={24} />, title: 'MVP Development', slug: 'web-development' },
    { icon: <Database size={24} />, title: 'ERP Software', slug: 'database-management' },
    { icon: <FileText size={24} />, title: 'Custom CMS', slug: 'custom-cms' },
    { icon: <Award size={24} />, title: 'Brand Promotion', slug: 'brand-promotion' },
    { icon: <Lightbulb size={24} />, title: 'AI Development', slug: 'ai-development' },
    { icon: <Cloud size={24} />, title: 'Cloud Services', slug: 'cloud-solutions' },
    // Repeat for continuous scrolling
    { icon: <ShoppingCart size={24} />, title: 'E-commerce', slug: 'ecommerce' },
    { icon: <Code size={24} />, title: 'MVP Development', slug: 'web-development' },
    { icon: <Database size={24} />, title: 'ERP Software', slug: 'database-management' },
    { icon: <FileText size={24} />, title: 'Custom CMS', slug: 'custom-cms' },
    { icon: <Award size={24} />, title: 'Brand Promotion', slug: 'brand-promotion' },
    { icon: <Lightbulb size={24} />, title: 'AI Development', slug: 'ai-development' },
    { icon: <Cloud size={24} />, title: 'Cloud Services', slug: 'cloud-solutions' },
  ];

  return (
    <section className="py-20 bg-dark-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide diverse solutions for web, design, and apps. Check out the services we offer.
          </p>
        </div>

        {/* Scrolling Services Row */}
        <div className="mb-16 overflow-hidden">
          <div className="flex animate-carousel-scroll-right">
            {scrollingServices.map((service, index) => (
              <ScrollingServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                slug={service.slug}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              slug={service.slug}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="px-8 py-6 text-lg glow-effect-strong">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
