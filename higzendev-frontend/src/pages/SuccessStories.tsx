import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Users, TrendingUp, Award, Calendar, ArrowRight } from 'lucide-react';

const SuccessStories = () => {
  const successStories = [
    {
      id: 1,
      title: "E-commerce Revolution for RetailTech",
      client: "RetailTech Solutions",
      industry: "E-commerce",
      challenge: "Legacy system couldn't handle growing traffic",
      solution: "Built scalable microservices architecture with React and Node.js",
      results: ["300% increase in performance", "50% reduction in load time", "99.9% uptime"],
      impact: "Increased revenue by $2M annually",
      duration: "6 months",
      rating: 5,
      testimonial: "HigzenDev transformed our entire business. The new platform can handle 10x our previous traffic.",
      image: "/lovable-uploads/a364049e-ac00-4930-bd2f-53ac02e911d9.png",
      technologies: ["React", "Node.js", "MongoDB", "AWS"],
      year: "2023"
    },
    {
      id: 2,
      title: "Healthcare Management System",
      client: "MediCare Plus",
      industry: "Healthcare",
      challenge: "Manual processes causing delays in patient care",
      solution: "Developed comprehensive patient management system",
      results: ["60% faster patient processing", "90% reduction in errors", "Real-time data access"],
      impact: "Improved patient satisfaction by 85%",
      duration: "8 months",
      rating: 5,
      testimonial: "The system has revolutionized how we manage patient care. It's intuitive and powerful.",
      image: "/lovable-uploads/b44b4376-6a18-4433-9b0e-6719c11aa425.png",
      technologies: ["Vue.js", "Python", "PostgreSQL", "Docker"],
      year: "2023"
    },
    {
      id: 3,
      title: "FinTech Mobile Banking App",
      client: "SecureBank",
      industry: "Finance",
      challenge: "Needed modern mobile banking solution",
      solution: "Built secure, user-friendly mobile banking app",
      results: ["2M+ downloads", "4.8 app store rating", "Zero security incidents"],
      impact: "Acquired 500K new customers in first year",
      duration: "10 months",
      rating: 5,
      testimonial: "Our customers love the new app. It's set a new standard in mobile banking.",
      image: "/lovable-uploads/72ace780-45bd-4fc9-a7d4-43f9d6b33361.png",
      technologies: ["React Native", "Firebase", "Blockchain", "AI/ML"],
      year: "2022"
    },
    {
      id: 4,
      title: "Smart Manufacturing IoT Platform",
      client: "IndustrialTech Corp",
      industry: "Manufacturing",
      challenge: "Needed real-time monitoring of production lines",
      solution: "Implemented IoT sensors with AI-powered analytics",
      results: ["25% increase in efficiency", "40% reduction in downtime", "Real-time insights"],
      impact: "Saved $1.5M in operational costs",
      duration: "12 months",
      rating: 5,
      testimonial: "The IoT platform has transformed our manufacturing process completely.",
      image: "/lovable-uploads/e86d3e88-9e98-45c2-bae4-e324c827606f.png",
      technologies: ["IoT", "Python", "TensorFlow", "AWS IoT"],
      year: "2023"
    },
    {
      id: 5,
      title: "EdTech Learning Management System",
      client: "EduFuture Academy",
      industry: "Education",
      challenge: "Remote learning platform for 50K+ students",
      solution: "Built scalable LMS with video conferencing and AI tutoring",
      results: ["98% student satisfaction", "Zero downtime during peak", "AI-powered personalization"],
      impact: "Enabled seamless remote education for thousands",
      duration: "7 months",
      rating: 5,
      testimonial: "This platform made remote learning engaging and effective for our students.",
      image: "/lovable-uploads/954ddfc6-3ae2-41b6-9dd6-0f792497c6d0.png",
      technologies: ["Angular", "Node.js", "WebRTC", "Machine Learning"],
      year: "2022"
    },
    {
      id: 6,
      title: "Real Estate Investment Platform",
      client: "PropertyMax",
      industry: "Real Estate",
      challenge: "Needed digital transformation for property management",
      solution: "Created comprehensive property investment and management platform",
      results: ["200% increase in leads", "70% faster transactions", "Automated reporting"],
      impact: "Processed $50M in property transactions",
      duration: "9 months",
      rating: 5,
      testimonial: "The platform has completely digitized our real estate operations.",
      image: "/lovable-uploads/62f17d6a-05cb-40df-8227-75e88f970645.png",
      technologies: ["React", "Django", "PostgreSQL", "Stripe"],
      year: "2023"
    }
  ];

  const industries = ["All", "E-commerce", "Healthcare", "Finance", "Manufacturing", "Education", "Real Estate"];
  const [selectedIndustry, setSelectedIndustry] = React.useState("All");

  const filteredStories = selectedIndustry === "All" 
    ? successStories 
    : successStories.filter(story => story.industry === selectedIndustry);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-green-900 to-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Success Stories
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Real results, real impact. Discover how we've helped businesses transform and thrive.
            </p>
            <div className="flex items-center justify-center gap-8 text-lg">
              <div className="flex items-center gap-2">
                <Users className="text-green-400" />
                <span>100+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="text-blue-400" />
                <span>$10M+ Revenue Generated</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="text-yellow-400" />
                <span>99% Success Rate</span>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Filter by Industry</h2>
              <div className="flex flex-wrap justify-center gap-4">
                {industries.map((industry) => (
                  <Button
                    key={industry}
                    variant={selectedIndustry === industry ? "default" : "outline"}
                    onClick={() => setSelectedIndustry(industry)}
                    className={`${
                      selectedIndustry === industry
                        ? "bg-gradient-to-r from-green-500 to-blue-500 text-white"
                        : "bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-600"
                    }`}
                  >
                    {industry}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStories.map((story) => (
                <Card key={story.id} className="bg-muted/30 border-gray-700 hover:border-green-500 transition-all duration-300 group">
                  <CardHeader>
                    <div className="aspect-video mb-4 overflow-hidden rounded-lg">
                      <img 
                        src={story.image} 
                        alt={story.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="bg-green-600 text-white">
                        {story.industry}
                      </Badge>
                      <div className="flex items-center gap-1">
                        {[...Array(story.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <CardTitle className="text-white group-hover:text-green-400 transition-colors">
                      {story.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {story.year} • {story.duration}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-green-400 mb-2">Challenge:</h4>
                        <p className="text-gray-300 text-sm">{story.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-blue-400 mb-2">Solution:</h4>
                        <p className="text-gray-300 text-sm">{story.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-purple-400 mb-2">Results:</h4>
                        <ul className="text-gray-300 text-sm space-y-1">
                          {story.results.map((result, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <ArrowRight className="w-3 h-3 text-green-400" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-gradient-to-r from-green-900/50 to-blue-900/50 p-4 rounded-lg">
                        <h4 className="font-semibold text-yellow-400 mb-2">Impact:</h4>
                        <p className="text-white font-semibold">{story.impact}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-300 mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {story.technologies.map((tech, index) => (
                            <Badge key={index} variant="outline" className="border-gray-600 text-gray-300">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="border-t border-gray-700 pt-4">
                        <blockquote className="text-gray-300 italic">
                          "{story.testimonial}"
                        </blockquote>
                        <p className="text-green-400 font-semibold mt-2">- {story.client}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-900 to-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Write Your Success Story?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our growing list of successful clients. Let's discuss how we can help transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg">
                <Link to="/request-quote">Start Your Project</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg">
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

export default SuccessStories;