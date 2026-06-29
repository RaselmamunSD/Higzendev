
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Monitor, Heart, FileText } from 'lucide-react';

interface ServiceBoxProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceBox = ({ icon, title, description, link }: ServiceBoxProps & { link: string }) => {
  return (
    <Card className="group hover:scale-105 transition-all duration-300">
      <CardContent className="p-8">
        <div className="text-primary mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-4 text-center">{title}</h3>
        <p className="text-muted-foreground mb-8 text-center leading-relaxed">{description}</p>
        <div className="flex justify-center">
          <Button asChild variant="default" size="lg">
            <Link to={link}>Learn More</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const BusinessGoalsSection = () => {
  const services = [
    {
      icon: <Monitor size={48} />,
      title: 'Staff Augmentation',
      description: 'We provide professional resources to organizations with established in-house IT competence for an extended workbench.',
      link: '/services/staff-augmentation'
    },
    {
      icon: <FileText size={48} />,
      title: 'Managed Applications',
      description: 'We support organizations that need a full-cycle tailor made software development partner based on specific project needs.',
      link: '/services/managed-applications'
    },
    {
      icon: <Heart size={48} />,
      title: 'Professional Services',
      description: 'We offer business consulting and technical consulting solutions intended to optimize your organization.',
      link: '/services/professional-services'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Reach Your Business Goals With Our Services
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Seasoned tech experts providing reliable software development services to match specified requirements, budgets and timeframes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceBox
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessGoalsSection;
