import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { ChevronRight, Calendar, Code, Users, ArrowRight, Sparkles } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Automation System for bKash",
      client: "bKash Limited",
      logo: "https://via.placeholder.com/120x40?text=bKash",
      description: "Developed a comprehensive automation system that streamlined payment processing and reduced transaction time by 60%.",
      image: "/lovable-uploads/1b4c9fe7-adc0-4f33-89aa-6204e7dc1622.png",
      industry: "FinTech",
      technologies: ["Django", "React", "PostgreSQL"],
      year: "2023",
      testimonial: "HigzenDev delivered exceptional results. Their automation system transformed our payment processing capabilities.",
      gradient: "from-pink-500 via-rose-500 to-red-500"
    },
    {
      id: 2,
      title: "E-commerce Platform for Pathao",
      client: "Pathao Ltd",
      logo: "https://via.placeholder.com/120x40?text=Pathao",
      description: "Built a robust e-commerce platform with real-time tracking and integrated payment gateway for seamless user experience.",
      image: "/lovable-uploads/345bcc74-1822-47c9-a1ff-a8ae70f92542.png",
      industry: "E-commerce",
      technologies: ["React", "Node.js", "MongoDB"],
      year: "2023",
      testimonial: "Outstanding development team. They delivered a scalable solution that exceeded our expectations.",
      gradient: "from-emerald-500 via-teal-500 to-cyan-500"
    },
    {
      id: 3,
      title: "Smart Analytics Dashboard",
      client: "Grameenphone",
      logo: "https://via.placeholder.com/120x40?text=GP",
      description: "Created an intelligent analytics dashboard with real-time data visualization and predictive analytics capabilities.",
      image: "/lovable-uploads/4acf0bb3-60b8-4cf6-b59d-d2af4a64cb00.png",
      industry: "Telecommunications",
      technologies: ["Vue.js", "Python", "AWS"],
      year: "2024",
      testimonial: "The analytics dashboard provided invaluable insights that helped us make data-driven decisions.",
      gradient: "from-blue-500 via-indigo-500 to-violet-500"
    },
    {
      id: 4,
      title: "Healthcare Management System",
      client: "Square Hospitals",
      logo: "https://via.placeholder.com/120x40?text=Square",
      description: "Developed a comprehensive healthcare management system with patient records, appointment scheduling, and billing integration.",
      image: "/lovable-uploads/53486b42-3a97-4b33-9947-cc3dc4e85b5c.png",
      industry: "Healthcare",
      technologies: ["Angular", "Spring Boot", "MySQL"],
      year: "2023",
      testimonial: "HigzenDev's solution significantly improved our hospital operations and patient care quality.",
      gradient: "from-orange-500 via-amber-500 to-yellow-500"
    },
    {
      id: 5,
      title: "Digital Banking Solution",
      client: "BRAC Bank",
      logo: "https://via.placeholder.com/120x40?text=BRAC",
      description: "Built a secure digital banking platform with mobile app integration and advanced security features.",
      image: "/lovable-uploads/54285353-c710-4552-b5a9-36c4ce0ed9b8.png",
      industry: "Banking",
      technologies: ["React Native", "Laravel", "Redis"],
      year: "2024",
      testimonial: "Professional team with excellent technical expertise. They delivered a world-class banking solution.",
      gradient: "from-purple-500 via-fuchsia-500 to-pink-500"
    },
    {
      id: 6,
      title: "Inventory Management System",
      client: "ACI Limited",
      logo: "https://via.placeholder.com/120x40?text=ACI",
      description: "Implemented an advanced inventory management system with real-time tracking and automated reordering capabilities.",
      image: "/lovable-uploads/5c92dc4a-0075-470b-8d8c-73a6fde02be3.png",
      industry: "Manufacturing",
      technologies: ["PHP", "MySQL", "Bootstrap"],
      year: "2023",
      testimonial: "The inventory system revolutionized our supply chain management and reduced costs by 40%.",
      gradient: "from-cyan-500 via-sky-500 to-blue-500"
    }
  ];

  const industries = ["All", "FinTech", "E-commerce", "Healthcare", "Banking", "Telecommunications", "Manufacturing"];
  const [selectedIndustry, setSelectedIndustry] = React.useState("All");

  const filteredCaseStudies = selectedIndustry === "All" 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === selectedIndustry);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section with Gradient */}
        <section className="relative py-24 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-secondary/10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--secondary)/0.15),transparent_50%)]" />
          
          {/* Floating Orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            {/* Breadcrumb */}
            <Breadcrumb className="mb-8 animate-fade-in">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild className="text-muted-foreground hover:text-primary transition-colors">
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-primary font-medium">Case Studies</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            {/* Hero Content */}
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6 animate-fade-in">
                <Sparkles className="h-4 w-4" />
                Success Stories
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <span className="bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent">
                  Case Studies
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Real-world results from our real clients. Discover how we solve complex problems through smart design & engineering.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full animate-fade-in" style={{ animationDelay: '0.3s' }} />
            </div>
          </div>
        </section>

        {/* Filter Section with Glass Effect */}
        <section className="py-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-wrap gap-3 justify-center">
              {industries.map((industry, index) => (
                <Button
                  key={industry}
                  variant={selectedIndustry === industry ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedIndustry(industry)}
                  className={`rounded-full px-6 transition-all duration-300 animate-fade-in ${
                    selectedIndustry === industry 
                      ? "bg-gradient-to-r from-primary to-secondary border-0 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 scale-105" 
                      : "hover:border-primary/50 hover:bg-primary/5 hover:scale-105"
                  }`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {industry}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCaseStudies.map((study, index) => (
                <Card 
                  key={study.id} 
                  className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_20px_60px_-12px_hsl(var(--primary)/0.3)] hover:-translate-y-3 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Gradient Overlay on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Image Container */}
                  <div className="relative h-52 overflow-hidden">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Year Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-xs font-medium text-foreground flex items-center gap-1.5 border border-border/50">
                      <Calendar className="h-3 w-3 text-primary" />
                      {study.year}
                    </div>
                    
                    {/* Industry Badge on Image */}
                    <div className={`absolute bottom-4 left-4 px-3 py-1.5 bg-gradient-to-r ${study.gradient} rounded-full text-xs font-semibold text-white shadow-lg`}>
                      {study.industry}
                    </div>
                  </div>
                  
                  <CardHeader className="pb-3 pt-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                        <Code className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground font-medium">{study.client}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {study.title}
                    </h3>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground mb-5 line-clamp-3 text-sm leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                      {study.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {study.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="outline" 
                          className="text-xs bg-primary/5 border-primary/20 text-primary hover:bg-primary/10 transition-colors duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <Link to={`/case-studies/${study.id}`}>
                      <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 group/btn">
                        View Case Study
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section with Gradient */}
        <section className="py-24 relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.2),transparent_70%)]" />
          
          {/* Floating Elements */}
          <div className="absolute top-10 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6 animate-fade-in">
                <Users className="h-4 w-4" />
                Let's Collaborate
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <span className="bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent">
                  Let's Build Something Together
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Want similar results for your company? Let's talk about your project and how we can help you achieve your goals.
              </p>
              <Link to="/schedule-meeting">
                <Button 
                  size="lg" 
                  className="px-10 py-7 text-lg font-semibold rounded-xl bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105 animate-fade-in group"
                  style={{ animationDelay: '0.3s' }}
                >
                  <Users className="h-5 w-5 mr-2" />
                  Schedule Meeting
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudies;
