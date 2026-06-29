
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Award, Headphones, Check } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="border border-gray-700 h-full bg-muted/30">
      <CardContent className="pt-6">
        <div className="flex flex-col items-center text-center">
          <div className="p-3 bg-primary rounded-full text-white mb-4">
            {icon}
          </div>
          <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const WhyWorkWithUsSection = () => {
  const features = [
    {
      icon: <Award size={24} />,
      title: "High-Quality Work and On-time Delivery",
      description: "Consistently delivering high-quality work with a commitment to on-time delivery, ensuring excellence and punctuality in every project undertaken."
    },
    {
      icon: <Check size={24} />,
      title: "100% Satisfaction Guaranteed",
      description: "We guarantee 100% satisfaction, ensuring that our services not only meet but exceed your expectations. Your contentment is our top priority, and we stand by it with confidence."
    },
    {
      icon: <Headphones size={24} />,
      title: "Quick Response with 24/7 Support",
      description: "Get quick responses and round-the-clock support for all your inquiries. Our team is here 24/7 to assist you promptly, ensuring a seamless experience at any time."
    },
    {
      icon: <Clock size={24} />,
      title: "30 Days of Free Support After the Delivery",
      description: "Enjoy peace of mind with our service—receive 30 days of free support after delivery. We're committed to assisting you even after the project is completed, ensuring your satisfaction for an extended period."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Why Work <span className="text-primary">With Us</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            We work with you to understand your business goals, target audience, and
            work closely with you to identify the challenges your website faces and
            strategize effective solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUsSection;
