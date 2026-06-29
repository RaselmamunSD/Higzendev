import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, Clock, DollarSign, MapPin, Calendar } from 'lucide-react';
import { Button } from './ui/button';

const OpenPositionsSection = () => {
  const positions = [
    {
      id: "senior-ai-engineer",
      title: "Senior AI Engineer",
      department: "Engineering",
      type: "Full-time",
      location: "San Francisco, CA / Remote",
      experience: "5+ years",
      salary: "$150,000 - $200,000",
      description: "We're looking for an experienced AI Engineer to help build and scale our mental health AI systems.",
      openingDate: "Jan 5, 2026",
      closingDate: "Feb 28, 2026"
    },
    {
      id: "senior-frontend-developer",
      title: "Senior Frontend Developer",
      department: "Engineering",
      type: "Full-time",
      location: "Remote",
      experience: "4+ years",
      salary: "$120,000 - $160,000",
      description: "Build beautiful and intuitive user interfaces for our mental health platform.",
      openingDate: "Jan 10, 2026",
      closingDate: "Mar 15, 2026"
    },
    {
      id: "product-designer",
      title: "Product Designer",
      department: "Design",
      type: "Full-time",
      location: "New York / Remote",
      experience: "3+ years",
      salary: "$100,000 - $140,000",
      description: "Design empathetic and accessible experiences for users seeking mental health support.",
      openingDate: "Jan 8, 2026",
      closingDate: "Mar 8, 2026"
    },
    {
      id: "backend-engineer",
      title: "Backend Engineer",
      department: "Engineering",
      type: "Full-time",
      location: "Remote",
      experience: "3+ years",
      salary: "$110,000 - $150,000",
      description: "Build scalable and secure backend systems for our healthcare platform.",
      openingDate: "Jan 12, 2026",
      closingDate: "Mar 20, 2026"
    },
    {
      id: "data-scientist",
      title: "Data Scientist",
      department: "Data & Analytics",
      type: "Full-time",
      location: "Boston / Remote",
      experience: "4+ years",
      salary: "$130,000 - $170,000",
      description: "Analyze user data to improve mental health outcomes and AI model performance.",
      openingDate: "Jan 15, 2026",
      closingDate: "Mar 31, 2026"
    },
    {
      id: "clinical-psychologist",
      title: "Clinical Psychologist",
      department: "Clinical",
      type: "Full-time",
      location: "Remote",
      experience: "Licensed",
      salary: "$90,000 - $130,000",
      description: "Provide clinical oversight and ensure our AI systems meet therapeutic standards.",
      openingDate: "Jan 20, 2026",
      closingDate: "Apr 15, 2026"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Open Positions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find your next opportunity with us
          </p>
        </div>
        
        <div className="space-y-6 max-w-5xl mx-auto">
          {positions.map((position) => (
            <div 
              key={position.id}
              className="bg-card p-8 rounded-lg border border-border hover:border-primary transition-all hover:shadow-glow group"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                      {position.department}
                    </span>
                    <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm font-medium rounded-full">
                      {position.type}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {position.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-4 mb-3 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{position.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{position.experience}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4" />
                      <span className="text-sm">{position.salary}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mb-4 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-green-500" />
                      <span className="text-sm">Opening: <span className="text-green-500 font-medium">{position.openingDate}</span></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-red-500" />
                      <span className="text-sm">Closing: <span className="text-red-500 font-medium">{position.closingDate}</span></span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground">{position.description}</p>
                </div>
                
                <Link to={`/careers/${position.id}`}>
                  <Button className="glow-effect group-hover:shadow-glow-strong whitespace-nowrap">
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenPositionsSection;
