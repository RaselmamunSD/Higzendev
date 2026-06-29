
import React from 'react';
import { ArrowRight, Monitor, Code, Database, Server, Cloud, Smartphone, Palette, Server as ServerIcon, ShoppingCart, FileText, Award, Lightbulb, GitBranch, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  slug: string;
}

const ServiceCard = ({ icon, title, description, slug }: ServiceCardProps) => {
  return (
    <Link 
      to={`/services/${slug}`}
      onClick={() => window.scrollTo(0, 0)}
      className="group bg-background rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 border border-border/50 hover:border-primary/20 relative overflow-hidden block"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative">
        <div className="h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-muted-foreground mb-6 line-clamp-3">{description}</p>
        <div className="mt-auto">
          <span className="inline-flex items-center text-primary hover:text-primary/80 font-medium group-hover:translate-x-1 transition-transform duration-300">
            Learn More <ArrowRight size={18} className="ml-2" />
          </span>
        </div>
      </div>
    </Link>
  );
};

interface ServiceDetailsProps {
  isMarquee?: boolean;
}

const ServiceDetailsSection = ({ isMarquee = true }: ServiceDetailsProps) => {
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
      icon: <Palette size={32} />,
      title: 'UI/UX Design',
      description: 'Elevate user experience with our creative UI/UX design. Intuitive interfaces that captivate and engage client.',
      slug: 'ui-ux-design'
    },
    {
      icon: <Cloud size={32} />,
      title: 'Cloud Services',
      description: 'Cloud outsourcing provider managed cloud services for businesses of all sizes.',
      slug: 'cloud-solutions'
    },
    {
      icon: <Database size={32} />,
      title: 'Database Management',
      description: 'DBMS establish the relationship between datasets, and how users interact with them.',
      slug: 'database-management'
    },
    {
      icon: <ShoppingCart size={32} />,
      title: 'E-commerce',
      description: 'Creating seamless online shopping experiences with modern e-commerce solutions tailored to your business.',
      slug: 'ecommerce'
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Mobile Application Dev',
      description: 'We build your apps for all the devices out there with native performance and cross-platform compatibility.',
      slug: 'mobile-app-development'
    },
    {
      icon: <ServerIcon size={32} />,
      title: 'QA & Testing',
      description: 'Software test lifecycle services, from test planning to execution and everything in between.',
      slug: 'qa-testing'
    },
    {
      icon: <FileText size={32} />,
      title: 'Custom CMS',
      description: 'Tailored content management systems that give you complete control over your digital content.',
      slug: 'custom-cms'
    },
    {
      icon: <Award size={32} />,
      title: 'Brand Promotion',
      description: 'Effective marketing strategies to elevate your brand presence and reach your target audience.',
      slug: 'brand-promotion'
    },
    {
      icon: <Lightbulb size={32} />,
      title: 'AI Development',
      description: 'Leveraging artificial intelligence to create smart solutions that transform your business processes.',
      slug: 'ai-development'
    },
    {
      icon: <Server size={32} />,
      title: 'Embedded System Design',
      description: 'Provide high-quality embedded system design and embedded architecture design services.',
      slug: 'embedded-system-design'
    },
    {
      icon: <GitBranch size={32} />,
      title: 'DevOps',
      description: 'Streamline your development lifecycle with comprehensive DevOps solutions, CI/CD pipelines, and automated deployment strategies.',
      slug: 'devops'
    },
    {
      icon: <Shield size={32} />,
      title: 'SRE (Site Reliability Engineering)',
      description: 'Ensure maximum uptime and performance with our Site Reliability Engineering services and monitoring solutions.',
      slug: 'sre'
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Premium Software Development Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We prioritize cultivating lasting business partnerships as your trusted software development partner. 
            Our comprehensive suite of services is designed to transform your vision into reality.
          </p>
        </div>

        {isMarquee ? (
          <div className="relative w-full overflow-hidden mb-16 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
            <div className="flex w-max animate-marquee-slow hover:[animation-play-state:paused] gap-8 pr-8 py-4">
              {[...services, ...services].map((service, index) => (
                <div key={index} className="w-[350px] shrink-0">
                  <ServiceCard
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    slug={service.slug}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
        )}

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailsSection;
