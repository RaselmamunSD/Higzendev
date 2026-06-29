import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { ChevronRight, ArrowLeft, ExternalLink, CheckCircle, Users, Calendar, Code, Star } from 'lucide-react';

const CaseStudyDetail = () => {
  const { id } = useParams();
  
  // Sample case study data - in a real app, this would come from an API
  const caseStudyData = {
    1: {
      title: "Automation System for bKash",
      client: "bKash Limited",
      logo: "https://via.placeholder.com/120x40?text=bKash",
      industry: "FinTech",
      year: "2023",
      duration: "8 months",
      teamSize: "6 developers",
      technologies: ["Django", "React", "PostgreSQL", "Redis", "AWS", "Docker"],
      hero_image: "/lovable-uploads/1b4c9fe7-adc0-4f33-89aa-6204e7dc1622.png",
      challenge: "bKash was facing significant challenges with their manual payment processing system, which was causing delays and increasing transaction errors. They needed a comprehensive automation solution that could handle millions of transactions daily while maintaining security and reliability.",
      solution: "We developed a robust automation system using Django for the backend API, React for the admin dashboard, and PostgreSQL for data management. The system included real-time transaction processing, automated fraud detection, and comprehensive reporting features. We also implemented microservices architecture for better scalability.",
      results: [
        "Reduced transaction processing time by 60%",
        "Increased daily transaction capacity by 300%",
        "Decreased system errors by 85%",
        "Improved customer satisfaction by 45%",
        "Achieved 99.9% system uptime"
      ],
      testimonial: {
        text: "HigzenDev delivered exceptional results. Their automation system transformed our payment processing capabilities and significantly improved our operational efficiency. The team was professional, responsive, and delivered on time.",
        author: "Ahmed Rahman",
        position: "Chief Technology Officer, bKash Limited"
      },
      screenshots: [
        "/lovable-uploads/1b4c9fe7-adc0-4f33-89aa-6204e7dc1622.png",
        "/lovable-uploads/345bcc74-1822-47c9-a1ff-a8ae70f92542.png",
        "/lovable-uploads/4acf0bb3-60b8-4cf6-b59d-d2af4a64cb00.png"
      ]
    },
    2: {
      title: "E-commerce Platform for Pathao",
      client: "Pathao Ltd",
      logo: "https://via.placeholder.com/120x40?text=Pathao",
      industry: "E-commerce",
      year: "2023",
      duration: "10 months",
      teamSize: "8 developers",
      technologies: ["React", "Node.js", "MongoDB", "Redis", "AWS", "Kubernetes"],
      hero_image: "/lovable-uploads/345bcc74-1822-47c9-a1ff-a8ae70f92542.png",
      challenge: "Pathao needed a robust e-commerce platform that could handle high traffic volumes, integrate real-time tracking, and provide a seamless payment gateway for millions of users across Bangladesh.",
      solution: "We built a scalable e-commerce platform using React for the frontend, Node.js for the backend, and MongoDB for flexible data storage. The platform includes real-time order tracking, integrated payment systems, and an advanced recommendation engine powered by machine learning.",
      results: [
        "Increased order processing speed by 75%",
        "Reduced cart abandonment rate by 40%",
        "Improved app load time by 60%",
        "Achieved 2 million+ active monthly users",
        "99.95% uptime during peak seasons"
      ],
      testimonial: {
        text: "Outstanding development team. They delivered a scalable solution that exceeded our expectations. The real-time tracking feature has become a key differentiator for our platform.",
        author: "Fahim Ahmed",
        position: "VP of Engineering, Pathao Ltd"
      },
      screenshots: [
        "/lovable-uploads/345bcc74-1822-47c9-a1ff-a8ae70f92542.png",
        "/lovable-uploads/4acf0bb3-60b8-4cf6-b59d-d2af4a64cb00.png",
        "/lovable-uploads/53486b42-3a97-4b33-9947-cc3dc4e85b5c.png"
      ]
    },
    3: {
      title: "Smart Analytics Dashboard",
      client: "Grameenphone",
      logo: "https://via.placeholder.com/120x40?text=GP",
      industry: "Telecommunications",
      year: "2024",
      duration: "6 months",
      teamSize: "5 developers",
      technologies: ["Vue.js", "Python", "AWS", "TensorFlow", "PostgreSQL", "Grafana"],
      hero_image: "/lovable-uploads/4acf0bb3-60b8-4cf6-b59d-d2af4a64cb00.png",
      challenge: "Grameenphone required an intelligent analytics dashboard that could process massive amounts of telecom data in real-time and provide predictive insights for business decision-making.",
      solution: "We created a comprehensive analytics dashboard using Vue.js for interactive visualizations, Python for data processing, and TensorFlow for predictive analytics. The system integrates with existing telecom infrastructure and provides real-time KPI monitoring.",
      results: [
        "Reduced data analysis time by 80%",
        "Improved revenue forecasting accuracy by 35%",
        "Identified cost-saving opportunities worth $2M annually",
        "Real-time monitoring of 50+ KPIs",
        "Automated report generation saving 100+ hours monthly"
      ],
      testimonial: {
        text: "The analytics dashboard provided invaluable insights that helped us make data-driven decisions. HigzenDev's team understood our complex requirements and delivered a solution that transformed our operations.",
        author: "Dr. Nasreen Khan",
        position: "Chief Data Officer, Grameenphone"
      },
      screenshots: [
        "/lovable-uploads/4acf0bb3-60b8-4cf6-b59d-d2af4a64cb00.png",
        "/lovable-uploads/53486b42-3a97-4b33-9947-cc3dc4e85b5c.png",
        "/lovable-uploads/54285353-c710-4552-b5a9-36c4ce0ed9b8.png"
      ]
    },
    4: {
      title: "Healthcare Management System",
      client: "Square Hospitals",
      logo: "https://via.placeholder.com/120x40?text=Square",
      industry: "Healthcare",
      year: "2023",
      duration: "12 months",
      teamSize: "10 developers",
      technologies: ["Angular", "Spring Boot", "MySQL", "Docker", "HL7 FHIR", "Azure"],
      hero_image: "/lovable-uploads/53486b42-3a97-4b33-9947-cc3dc4e85b5c.png",
      challenge: "Square Hospitals needed a comprehensive healthcare management system to digitize patient records, streamline appointment scheduling, manage billing, and ensure HIPAA-compliant data handling across multiple facilities.",
      solution: "We developed an enterprise-grade healthcare management system using Angular for the frontend, Spring Boot for robust backend services, and MySQL for secure data storage. The system includes electronic health records (EHR), appointment management, billing integration, and telemedicine capabilities.",
      results: [
        "Reduced patient wait time by 50%",
        "Digitized 500,000+ patient records",
        "Improved billing accuracy by 95%",
        "Enabled telemedicine for 10,000+ consultations monthly",
        "Achieved full HIPAA compliance"
      ],
      testimonial: {
        text: "HigzenDev's solution significantly improved our hospital operations and patient care quality. The system is intuitive, reliable, and has transformed how we deliver healthcare services.",
        author: "Dr. Mahmud Hassan",
        position: "Director of IT, Square Hospitals"
      },
      screenshots: [
        "/lovable-uploads/53486b42-3a97-4b33-9947-cc3dc4e85b5c.png",
        "/lovable-uploads/54285353-c710-4552-b5a9-36c4ce0ed9b8.png",
        "/lovable-uploads/5c92dc4a-0075-470b-8d8c-73a6fde02be3.png"
      ]
    },
    5: {
      title: "Digital Banking Solution",
      client: "BRAC Bank",
      logo: "https://via.placeholder.com/120x40?text=BRAC",
      industry: "Banking",
      year: "2024",
      duration: "14 months",
      teamSize: "12 developers",
      technologies: ["React Native", "Laravel", "Redis", "PostgreSQL", "AWS", "Blockchain"],
      hero_image: "/lovable-uploads/54285353-c710-4552-b5a9-36c4ce0ed9b8.png",
      challenge: "BRAC Bank wanted to launch a comprehensive digital banking platform with mobile app integration, advanced security features, and seamless integration with their core banking system.",
      solution: "We built a secure digital banking platform using React Native for cross-platform mobile apps, Laravel for the backend API, and PostgreSQL for transaction data. The solution includes biometric authentication, real-time fraud detection, and blockchain-based transaction verification.",
      results: [
        "Onboarded 500,000+ digital banking users in 6 months",
        "Reduced fraud incidents by 90%",
        "Achieved 4.8 star rating on app stores",
        "Processed $100M+ in digital transactions",
        "99.99% security compliance score"
      ],
      testimonial: {
        text: "Professional team with excellent technical expertise. They delivered a world-class banking solution that has positioned us as a leader in digital banking in Bangladesh.",
        author: "Selim Rahman",
        position: "Head of Digital Banking, BRAC Bank"
      },
      screenshots: [
        "/lovable-uploads/54285353-c710-4552-b5a9-36c4ce0ed9b8.png",
        "/lovable-uploads/5c92dc4a-0075-470b-8d8c-73a6fde02be3.png",
        "/lovable-uploads/1b4c9fe7-adc0-4f33-89aa-6204e7dc1622.png"
      ]
    },
    6: {
      title: "Inventory Management System",
      client: "ACI Limited",
      logo: "https://via.placeholder.com/120x40?text=ACI",
      industry: "Manufacturing",
      year: "2023",
      duration: "9 months",
      teamSize: "7 developers",
      technologies: ["PHP", "MySQL", "Bootstrap", "Laravel", "IoT", "Power BI"],
      hero_image: "/lovable-uploads/5c92dc4a-0075-470b-8d8c-73a6fde02be3.png",
      challenge: "ACI Limited needed an advanced inventory management system with real-time tracking, automated reordering, and integration with their existing ERP system to optimize their supply chain operations.",
      solution: "We implemented a comprehensive inventory management system using Laravel for the backend, MySQL for data management, and IoT sensors for real-time tracking. The system includes automated reorder points, barcode scanning, and Power BI integration for advanced analytics.",
      results: [
        "Reduced inventory holding costs by 40%",
        "Eliminated stockouts by 95%",
        "Improved order accuracy to 99.8%",
        "Reduced manual data entry by 70%",
        "Annual savings of $2.5M in operational costs"
      ],
      testimonial: {
        text: "The inventory system revolutionized our supply chain management and reduced costs significantly. HigzenDev's team delivered exactly what we needed with excellent post-deployment support.",
        author: "Kamal Uddin",
        position: "Supply Chain Director, ACI Limited"
      },
      screenshots: [
        "/lovable-uploads/5c92dc4a-0075-470b-8d8c-73a6fde02be3.png",
        "/lovable-uploads/1b4c9fe7-adc0-4f33-89aa-6204e7dc1622.png",
        "/lovable-uploads/345bcc74-1822-47c9-a1ff-a8ae70f92542.png"
      ]
    }
  };

  const caseStudy = caseStudyData[Number(id) as keyof typeof caseStudyData];

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Case Study Not Found</h1>
            <Link to="/case-studies">
              <Button>Back to Case Studies</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-grow">
        {/* Breadcrumb */}
        <section className="bg-background py-8">
          <div className="container mx-auto px-4">
            <Breadcrumb className="mb-4">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <ChevronRight className="h-4 w-4" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/case-studies">Case Studies</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <ChevronRight className="h-4 w-4" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage>{caseStudy.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <Link to="/case-studies">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Case Studies
              </Button>
            </Link>
          </div>
        </section>

        {/* Hero Banner */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={caseStudy.logo} 
                    alt={caseStudy.client}
                    className="h-12 object-contain"
                  />
                  <div>
                    <Badge variant="secondary" className="mb-2">
                      {caseStudy.industry}
                    </Badge>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {caseStudy.year}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {caseStudy.teamSize}
                      </span>
                    </div>
                  </div>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  {caseStudy.title}
                </h1>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {caseStudy.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={caseStudy.hero_image} 
                  alt={caseStudy.title}
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* Challenge */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
                      <ExternalLink className="h-6 w-6 text-primary" />
                      The Challenge
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {caseStudy.challenge}
                    </p>
                  </CardContent>
                </Card>

                {/* Solution */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
                      <Code className="h-6 w-6 text-primary" />
                      Our Solution
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {caseStudy.solution}
                    </p>
                  </CardContent>
                </Card>

                {/* Results */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
                      <CheckCircle className="h-6 w-6 text-primary" />
                      Results & Impact
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {caseStudy.results.map((result, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{result}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Screenshots */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-foreground">
                      Project Screenshots
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {caseStudy.screenshots.map((screenshot, index) => (
                        <div key={index} className="rounded-lg overflow-hidden shadow-md">
                          <img 
                            src={screenshot} 
                            alt={`Screenshot ${index + 1}`}
                            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Testimonial */}
                <Card className="bg-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
                      <Star className="h-6 w-6 text-primary" />
                      Client Testimonial
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <blockquote className="text-lg text-muted-foreground italic mb-6">
                      "{caseStudy.testimonial.text}"
                    </blockquote>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{caseStudy.testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{caseStudy.testimonial.position}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <Card className="sticky top-8">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-foreground">
                      Project Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="font-semibold text-foreground mb-1">Client</p>
                      <p className="text-muted-foreground">{caseStudy.client}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Industry</p>
                      <p className="text-muted-foreground">{caseStudy.industry}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Year</p>
                      <p className="text-muted-foreground">{caseStudy.year}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Duration</p>
                      <p className="text-muted-foreground">{caseStudy.duration}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Team Size</p>
                      <p className="text-muted-foreground">{caseStudy.teamSize}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-2">Technologies</p>
                      <div className="flex flex-wrap gap-2">
                        {caseStudy.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss how we can help you achieve similar results for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <Users className="h-5 w-5 mr-2" />
                    Get Started
                  </Button>
                </Link>
                <Link to="/case-studies">
                  <Button variant="outline" size="lg" className="px-8 py-6 text-lg font-semibold rounded-xl">
                    View More Case Studies
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudyDetail;