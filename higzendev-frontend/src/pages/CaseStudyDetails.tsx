import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Users, TrendingUp, Award, ArrowRight, CheckCircle, Target, Lightbulb, Zap } from 'lucide-react';

const CaseStudyDetails = () => {
  const { id } = useParams();

  // Sample case study data - in real app, this would come from an API
  const caseStudies = {
    "fintech": {
      title: "Revolutionary FinTech Mobile Banking Solution",
      client: "SecureBank Digital",
      industry: "Financial Technology",
      duration: "10 months",
      teamSize: "12 developers",
      budget: "$850K",
      year: "2023",
      heroImage: "/lovable-uploads/72ace780-45bd-4fc9-a7d4-43f9d6b33361.png",
      overview: "SecureBank Digital approached us to create a next-generation mobile banking platform that would compete with industry leaders while maintaining the highest security standards.",
      challenge: {
        title: "The Challenge",
        description: "Traditional banking infrastructure was limiting customer experience. They needed a modern, secure, and user-friendly mobile platform that could handle millions of transactions while providing real-time insights.",
        points: [
          "Legacy systems causing slow transaction processing",
          "Poor user experience leading to customer churn",
          "Security vulnerabilities in existing platform",
          "Lack of real-time analytics and insights",
          "No mobile-first approach"
        ]
      },
      solution: {
        title: "Our Solution",
        description: "We designed and developed a comprehensive mobile banking ecosystem with cutting-edge security, intuitive UX, and real-time capabilities.",
        approaches: [
          {
            title: "Security First Architecture",
            description: "Implemented multi-layer security with biometric authentication, end-to-end encryption, and blockchain-based transaction verification.",
            icon: "🔒"
          },
          {
            title: "Microservices Architecture",
            description: "Built scalable microservices using Node.js and Docker, enabling independent scaling and maintenance of different banking functions.",
            icon: "🏗️"
          },
          {
            title: "Real-time Analytics",
            description: "Integrated AI-powered analytics for fraud detection, spending insights, and personalized financial recommendations.",
            icon: "📊"
          },
          {
            title: "Cross-Platform Mobile App",
            description: "Developed using React Native for seamless experience across iOS and Android with offline capabilities.",
            icon: "📱"
          }
        ]
      },
      technologies: [
        "React Native", "Node.js", "MongoDB", "Redis", "Docker", "Kubernetes", 
        "AWS", "Blockchain", "Machine Learning", "WebSocket", "GraphQL", "Jest"
      ],
      results: [
        {
          metric: "2.5M+",
          description: "App Downloads in First Year",
          icon: <TrendingUp className="text-green-400" />
        },
        {
          metric: "4.9/5",
          description: "App Store Rating",
          icon: <Award className="text-yellow-400" />
        },
        {
          metric: "99.99%",
          description: "System Uptime",
          icon: <CheckCircle className="text-blue-400" />
        },
        {
          metric: "0",
          description: "Security Incidents",
          icon: <CheckCircle className="text-green-400" />
        },
        {
          metric: "300%",
          description: "Increase in Digital Transactions",
          icon: <TrendingUp className="text-purple-400" />
        },
        {
          metric: "60%",
          description: "Reduction in Support Tickets",
          icon: <CheckCircle className="text-green-400" />
        }
      ],
      testimonial: {
        quote: "HigzenDev delivered beyond our expectations. The mobile banking platform has transformed our customer experience and positioned us as a leader in digital banking. The security features and user interface are world-class.",
        author: "Sarah Johnson",
        position: "Chief Technology Officer, SecureBank Digital"
      },
      timeline: [
        { phase: "Discovery & Planning", duration: "2 months", description: "Requirements gathering, technical architecture design, and project planning" },
        { phase: "MVP Development", duration: "3 months", description: "Core banking features, security implementation, and basic UI/UX" },
        { phase: "Advanced Features", duration: "3 months", description: "AI analytics, biometric authentication, and advanced security features" },
        { phase: "Testing & Security Audit", duration: "1 month", description: "Comprehensive testing, security audits, and performance optimization" },
        { phase: "Deployment & Launch", duration: "1 month", description: "Production deployment, user training, and go-live support" }
      ]
    },
    "healthcare": {
      title: "Advanced Healthcare Management System",
      client: "MediCare Plus Network",
      industry: "Healthcare Technology",
      duration: "8 months",
      teamSize: "10 developers",
      budget: "$650K",
      year: "2023",
      heroImage: "/lovable-uploads/b44b4376-6a18-4433-9b0e-6719c11aa425.png",
      overview: "MediCare Plus needed a comprehensive healthcare management system to streamline operations across their 50+ clinics and hospitals.",
      challenge: {
        title: "The Challenge",
        description: "Manual processes and disconnected systems were causing delays in patient care and operational inefficiencies across the healthcare network.",
        points: [
          "Paper-based patient records causing delays",
          "No real-time visibility across multiple locations",
          "Appointment scheduling conflicts and no-shows",
          "Inventory management issues",
          "Compliance and reporting challenges"
        ]
      },
      solution: {
        title: "Our Solution",
        description: "We created an integrated healthcare ecosystem that digitized operations, improved patient care, and ensured regulatory compliance.",
        approaches: [
          {
            title: "Electronic Health Records (EHR)",
            description: "Comprehensive patient management system with real-time access to medical history, prescriptions, and test results.",
            icon: "🏥"
          },
          {
            title: "Smart Scheduling System",
            description: "AI-powered appointment scheduling with automated reminders and resource optimization across all locations.",
            icon: "📅"
          },
          {
            title: "Inventory Management",
            description: "Real-time inventory tracking with predictive analytics for medical supplies and equipment.",
            icon: "📦"
          },
          {
            title: "Telemedicine Platform",
            description: "Secure video consultation platform with integrated prescription and billing systems.",
            icon: "💻"
          }
        ]
      },
      technologies: [
        "Vue.js", "Python", "Django", "PostgreSQL", "Redis", "WebRTC", 
        "AWS", "Docker", "Elasticsearch", "HL7 FHIR", "OpenSSL", "Celery"
      ],
      results: [
        {
          metric: "70%",
          description: "Faster Patient Processing",
          icon: <Clock className="text-green-400" />
        },
        {
          metric: "95%",
          description: "Reduction in Scheduling Conflicts",
          icon: <CheckCircle className="text-blue-400" />
        },
        {
          metric: "85%",
          description: "Improvement in Patient Satisfaction",
          icon: <Award className="text-yellow-400" />
        },
        {
          metric: "50%",
          description: "Reduction in Administrative Costs",
          icon: <TrendingUp className="text-purple-400" />
        },
        {
          metric: "99.5%",
          description: "System Uptime",
          icon: <CheckCircle className="text-green-400" />
        },
        {
          metric: "100%",
          description: "HIPAA Compliance",
          icon: <CheckCircle className="text-green-400" />
        }
      ],
      testimonial: {
        quote: "The system has revolutionized our operations. Patient care has improved dramatically, and our staff can focus more on healthcare rather than paperwork. The telemedicine feature has been a game-changer.",
        author: "Dr. Michael Chen",
        position: "Chief Medical Officer, MediCare Plus Network"
      },
      timeline: [
        { phase: "Analysis & Design", duration: "1.5 months", description: "Healthcare workflow analysis, compliance review, and system design" },
        { phase: "Core Development", duration: "3 months", description: "EHR system, patient management, and basic scheduling features" },
        { phase: "Advanced Features", duration: "2.5 months", description: "Telemedicine, inventory management, and analytics dashboard" },
        { phase: "Integration & Testing", duration: "1 month", description: "Third-party integrations, security testing, and user training" }
      ]
    },
    "ecommerce": {
      title: "Next-Generation E-commerce Platform",
      client: "RetailTech Global",
      industry: "E-commerce & Retail",
      duration: "6 months",
      teamSize: "15 developers",
      budget: "$750K",
      year: "2023",
      heroImage: "/lovable-uploads/a364049e-ac00-4930-bd2f-53ac02e911d9.png",
      overview: "RetailTech Global needed a scalable e-commerce platform to handle their rapid growth and compete with industry giants.",
      challenge: {
        title: "The Challenge",
        description: "Legacy e-commerce platform couldn't handle growing traffic, leading to poor performance during peak shopping seasons and lost revenue.",
        points: [
          "System crashes during high traffic periods",
          "Slow page load times affecting conversion rates",
          "Limited payment options and security concerns",
          "Poor mobile experience",
          "Inadequate inventory management"
        ]
      },
      solution: {
        title: "Our Solution",
        description: "We built a high-performance, scalable e-commerce ecosystem with modern architecture and exceptional user experience.",
        approaches: [
          {
            title: "Microservices Architecture",
            description: "Scalable microservices built with Node.js and containerized with Docker for independent scaling and maintenance.",
            icon: "🏗️"
          },
          {
            title: "Progressive Web App",
            description: "Lightning-fast PWA with offline capabilities, push notifications, and app-like experience on all devices.",
            icon: "📱"
          },
          {
            title: "AI-Powered Recommendations",
            description: "Machine learning algorithms for personalized product recommendations and dynamic pricing.",
            icon: "🤖"
          },
          {
            title: "Global CDN & Caching",
            description: "Optimized content delivery with intelligent caching strategies for sub-second page loads worldwide.",
            icon: "🌐"
          }
        ]
      },
      technologies: [
        "React", "Next.js", "Node.js", "MongoDB", "Redis", "Elasticsearch", 
        "AWS", "CloudFront", "Stripe", "PayPal", "Docker", "Kubernetes"
      ],
      results: [
        {
          metric: "400%",
          description: "Increase in Performance",
          icon: <Zap className="text-yellow-400" />
        },
        {
          metric: "65%",
          description: "Improvement in Conversion Rate",
          icon: <TrendingUp className="text-green-400" />
        },
        {
          metric: "0.8s",
          description: "Average Page Load Time",
          icon: <Clock className="text-blue-400" />
        },
        {
          metric: "99.99%",
          description: "Uptime During Black Friday",
          icon: <CheckCircle className="text-green-400" />
        },
        {
          metric: "$5M",
          description: "Additional Revenue in First Year",
          icon: <TrendingUp className="text-purple-400" />
        },
        {
          metric: "92%",
          description: "Mobile Performance Score",
          icon: <CheckCircle className="text-green-400" />
        }
      ],
      testimonial: {
        quote: "HigzenDev transformed our e-commerce business completely. The new platform handles our peak traffic flawlessly and the AI recommendations have significantly improved our sales. It's been a game-changer for our growth.",
        author: "Jennifer Martinez",
        position: "VP of Technology, RetailTech Global"
      },
      timeline: [
        { phase: "Architecture & Planning", duration: "1 month", description: "System architecture design, technology selection, and project planning" },
        { phase: "Core Platform Development", duration: "2.5 months", description: "Product catalog, shopping cart, and payment processing" },
        { phase: "Advanced Features", duration: "2 months", description: "AI recommendations, inventory management, and admin dashboard" },
        { phase: "Testing & Optimization", duration: "0.5 months", description: "Performance testing, security audit, and deployment" }
      ]
    },
    "manufacturing": {
      title: "Smart Manufacturing IoT Platform",
      client: "IndustrialTech Corporation",
      industry: "Industrial IoT & Manufacturing",
      duration: "12 months",
      teamSize: "18 developers",
      budget: "$1.2M",
      year: "2023",
      heroImage: "/lovable-uploads/e86d3e88-9e98-45c2-bae4-e324c827606f.png",
      overview: "IndustrialTech needed a comprehensive IoT platform to monitor and optimize their manufacturing processes across multiple facilities.",
      challenge: {
        title: "The Challenge",
        description: "Traditional manufacturing processes lacked real-time visibility and predictive capabilities, leading to unexpected downtime and inefficiencies.",
        points: [
          "No real-time monitoring of production lines",
          "Unexpected equipment failures causing downtime",
          "Manual quality control processes",
          "Energy waste and inefficient resource utilization",
          "Lack of predictive maintenance capabilities"
        ]
      },
      solution: {
        title: "Our Solution",
        description: "We developed an intelligent IoT ecosystem with real-time monitoring, predictive analytics, and automated optimization.",
        approaches: [
          {
            title: "IoT Sensor Network",
            description: "Deployed thousands of sensors across production lines for real-time monitoring of temperature, pressure, vibration, and quality metrics.",
            icon: "📡"
          },
          {
            title: "AI-Powered Predictive Analytics",
            description: "Machine learning models for predictive maintenance, quality prediction, and production optimization.",
            icon: "🧠"
          },
          {
            title: "Real-time Dashboard",
            description: "Comprehensive monitoring dashboard with alerts, analytics, and actionable insights for operations teams.",
            icon: "📊"
          },
          {
            title: "Automated Quality Control",
            description: "Computer vision and AI for automated quality inspection and defect detection.",
            icon: "🔍"
          }
        ]
      },
      technologies: [
        "Python", "TensorFlow", "React", "Node.js", "InfluxDB", "Grafana", 
        "AWS IoT", "Docker", "Apache Kafka", "OpenCV", "Raspberry Pi", "MQTT"
      ],
      results: [
        {
          metric: "35%",
          description: "Increase in Production Efficiency",
          icon: <TrendingUp className="text-green-400" />
        },
        {
          metric: "60%",
          description: "Reduction in Unplanned Downtime",
          icon: <CheckCircle className="text-blue-400" />
        },
        {
          metric: "45%",
          description: "Improvement in Quality Control",
          icon: <Award className="text-yellow-400" />
        },
        {
          metric: "$2.5M",
          description: "Annual Cost Savings",
          icon: <TrendingUp className="text-purple-400" />
        },
        {
          metric: "25%",
          description: "Energy Consumption Reduction",
          icon: <CheckCircle className="text-green-400" />
        },
        {
          metric: "90%",
          description: "Accuracy in Predictive Maintenance",
          icon: <CheckCircle className="text-green-400" />
        }
      ],
      testimonial: {
        quote: "The IoT platform has revolutionized our manufacturing operations. We now have complete visibility into our processes and can prevent issues before they occur. The ROI has exceeded our expectations.",
        author: "Robert Thompson",
        position: "Director of Operations, IndustrialTech Corporation"
      },
      timeline: [
        { phase: "IoT Strategy & Planning", duration: "2 months", description: "IoT infrastructure planning, sensor selection, and architecture design" },
        { phase: "Sensor Deployment", duration: "3 months", description: "Installing sensors, networking setup, and data collection systems" },
        { phase: "Platform Development", duration: "4 months", description: "Dashboard development, analytics engine, and alert systems" },
        { phase: "AI Model Training", duration: "2 months", description: "Machine learning model development and training for predictive analytics" },
        { phase: "Testing & Optimization", duration: "1 month", description: "System testing, performance optimization, and user training" }
      ]
    }
  };

  const caseStudy = caseStudies[id as keyof typeof caseStudies];

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
            <p className="text-gray-400">The requested case study could not be found.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-green-600 text-white mb-4">{caseStudy.industry}</Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {caseStudy.title}
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  {caseStudy.overview}
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="text-blue-400" />
                      <span className="text-gray-300">Duration</span>
                    </div>
                    <p className="font-semibold">{caseStudy.duration}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="text-green-400" />
                      <span className="text-gray-300">Team Size</span>
                    </div>
                    <p className="font-semibold">{caseStudy.teamSize}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="text-purple-400" />
                      <span className="text-gray-300">Budget</span>
                    </div>
                    <p className="font-semibold">{caseStudy.budget}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="text-yellow-400" />
                      <span className="text-gray-300">Year</span>
                    </div>
                    <p className="font-semibold">{caseStudy.year}</p>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src={caseStudy.heroImage} 
                  alt={caseStudy.title}
                  className="rounded-lg shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <Target className="text-red-400" />
                {caseStudy.challenge.title}
              </h2>
              <p className="text-gray-300 text-lg mb-8">{caseStudy.challenge.description}</p>
              <div className="grid md:grid-cols-2 gap-6">
                {caseStudy.challenge.points.map((point, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-gray-700 rounded-lg">
                    <ArrowRight className="text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <Lightbulb className="text-yellow-400" />
                {caseStudy.solution.title}
              </h2>
              <p className="text-gray-300 text-lg mb-12">{caseStudy.solution.description}</p>
              
              <div className="grid md:grid-cols-2 gap-8">
                {caseStudy.solution.approaches.map((approach, index) => (
                  <Card key={index} className="bg-muted/30 border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center gap-3">
                        <span className="text-2xl">{approach.icon}</span>
                        {approach.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">{approach.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-8">Technologies Used</h2>
              <div className="flex flex-wrap justify-center gap-4">
                {caseStudy.technologies.map((tech, index) => (
                  <Badge key={index} variant="outline" className="border-gray-600 text-gray-300 px-4 py-2 text-lg">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-12 text-center">Results & Impact</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {caseStudy.results.map((result, index) => (
                  <Card key={index} className="bg-gradient-to-br from-gray-800 to-gray-700 border-gray-600 text-center">
                    <CardContent className="p-6">
                      <div className="flex justify-center mb-4">
                        {result.icon}
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-2">{result.metric}</h3>
                      <p className="text-gray-300">{result.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-12 text-center">Project Timeline</h2>
              <div className="space-y-6">
                {caseStudy.timeline.map((phase, index) => (
                  <div key={index} className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-white mb-2">{phase.phase}</h3>
                      <p className="text-green-400 font-semibold mb-2">{phase.duration}</p>
                      <p className="text-gray-300">{phase.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-16 bg-gradient-to-r from-green-900 to-blue-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <blockquote className="text-2xl text-white italic mb-8">
                "{caseStudy.testimonial.quote}"
              </blockquote>
              <div className="text-green-400 font-semibold text-lg">
                {caseStudy.testimonial.author}
              </div>
              <div className="text-gray-300">
                {caseStudy.testimonial.position}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Success Story?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-3 text-lg">
                <Link to="/request-quote">Start Your Project</Link>
              </Button>
              <Button asChild variant="outline" className="border-gray-600 text-gray-300 hover:bg-muted/30 px-8 py-3 text-lg">
                <Link to="/schedule-meeting">Schedule Consultation</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudyDetails;