
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Link } from 'react-router-dom';

interface CaseStudyProps {
  title: string;
  image: string;
  description: string;
  category: string;
  link: string;
  titleBg: string;
}

const CaseStudyCard = ({ title, image, description, category, link, titleBg }: CaseStudyProps) => {
  return (
    <Card className="group overflow-hidden bg-card/50 border-border/50 backdrop-blur-sm transition-all duration-500 hover:shadow-[0_20px_50px_-12px_hsl(var(--primary)/0.3)] hover:border-primary/30 hover:-translate-y-2 hover:scale-[1.02]">
      <div className="h-48 bg-muted/20 overflow-hidden relative">
        <img 
          src={image} 
          alt="Case study" 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <CardHeader className="py-4">
        <h3 className={`text-xl font-bold text-white px-3 py-1.5 rounded-md inline-block ${titleBg}`}>{title}</h3>
      </CardHeader>
      <CardContent className="py-2">
        <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">{description}</p>
      </CardContent>
      <CardFooter className="flex flex-col items-start pt-0 pb-6 gap-3">
        <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-medium border border-primary/20">
          {category}
        </span>
        <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground shadow-lg hover:shadow-primary/25 transition-all duration-300 group-hover:translate-x-1" asChild>
          <Link to={link}>Explore More →</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      title: "FinTech Pro",
      image: "/lovable-uploads/72ace780-45bd-4fc9-a7d4-43f9d6b33361.png",
      description: "Revolutionary FinTech mobile banking solution with advanced security and 2.5M+ downloads.",
      category: "Financial Technology",
      link: "/case-study-details/fintech",
      titleBg: "bg-blue-600"
    },
    {
      title: "MediCare Plus",
      image: "/lovable-uploads/b44b4376-6a18-4433-9b0e-6719c11aa425.png",
      description: "Advanced healthcare management system improving patient care across 50+ medical facilities.",
      category: "Healthcare Technology",
      link: "/case-study-details/healthcare",
      titleBg: "bg-rose-600"
    },
    {
      title: "RetailTech Hub",
      image: "/lovable-uploads/a364049e-ac00-4930-bd2f-53ac02e911d9.png",
      description: "Next-generation e-commerce platform handling millions of transactions with 400% performance boost.",
      category: "E-commerce & Retail",
      link: "/case-study-details/ecommerce",
      titleBg: "bg-emerald-600"
    },
    {
      title: "IndustrialTech IoT",
      image: "/lovable-uploads/e86d3e88-9e98-45c2-bae4-e324c827606f.png",
      description: "Smart manufacturing IoT platform with AI-powered analytics saving $2.5M annually.",
      category: "Industrial IoT",
      link: "/case-study-details/manufacturing",
      titleBg: "bg-violet-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-card/50 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.1),transparent_50%)]" />
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">Our Portfolio</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent">
            Client Success Stories
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Transforming businesses through innovative technology solutions</p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6 rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard 
              key={index}
              title={study.title}
              image={study.image}
              description={study.description}
              category={study.category}
              link={study.link}
              titleBg={study.titleBg}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
