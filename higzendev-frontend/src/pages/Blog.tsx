
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';

const allBlogPosts = [
  // AI & ML Category (6 posts)
  {
    id: 'ai-enterprise-software',
    title: 'The Future of AI in Enterprise Software',
    excerpt: 'Exploring how artificial intelligence is transforming business applications and workflows.',
    date: 'May 5, 2025',
    category: 'AI & ML',
    readTime: '5 min read',
    image: '/lovable-uploads/a364049e-ac00-4930-bd2f-53ac02e911d9.png'
  },
  {
    id: 'machine-learning-trends',
    title: 'Machine Learning Trends in 2025',
    excerpt: 'Latest trends and innovations in machine learning that are shaping the future.',
    date: 'May 3, 2025',
    category: 'AI & ML',
    readTime: '6 min read',
    image: '/lovable-uploads/a0e619bc-b97f-4cfd-bef8-5fa4212e2be8.png'
  },
  {
    id: 'neural-networks-explained',
    title: 'Neural Networks Explained Simply',
    excerpt: 'A beginner-friendly guide to understanding how neural networks work.',
    date: 'May 1, 2025',
    category: 'AI & ML',
    readTime: '8 min read',
    image: '/lovable-uploads/53486b42-3a97-4b33-9947-cc3dc4e85b5c.png'
  },
  {
    id: 'ai-automation-business',
    title: 'AI Automation in Business Processes',
    excerpt: 'How AI is revolutionizing business automation and workflow optimization.',
    date: 'April 28, 2025',
    category: 'AI & ML',
    readTime: '7 min read',
    image: '/lovable-uploads/04bb71ef-9de4-4174-949b-c195f9072db7.png'
  },
  {
    id: 'deep-learning-applications',
    title: 'Deep Learning Applications in Industry',
    excerpt: 'Real-world applications of deep learning across various industries.',
    date: 'April 25, 2025',
    category: 'AI & ML',
    readTime: '9 min read',
    image: '/lovable-uploads/1b4c9fe7-adc0-4f33-89aa-6204e7dc1622.png'
  },
  {
    id: 'ai-ethics-considerations',
    title: 'AI Ethics and Responsible Development',
    excerpt: 'Important considerations for ethical AI development and deployment.',
    date: 'April 23, 2025',
    category: 'AI & ML',
    readTime: '6 min read',
    image: '/lovable-uploads/345bcc74-1822-47c9-a1ff-a8ae70f92542.png'
  },
  
  // Security Category (6 posts)
  {
    id: 'secure-coding-practices',
    title: 'Secure Coding Practices Every Developer Should Know',
    excerpt: 'Best practices for writing secure code and protecting applications from common vulnerabilities.',
    date: 'April 22, 2025',
    category: 'Security',
    readTime: '7 min read',
    image: '/lovable-uploads/b44b4376-6a18-4433-9b0e-6719c11aa425.png'
  },
  {
    id: 'cybersecurity-threats-2025',
    title: 'Top Cybersecurity Threats in 2025',
    excerpt: 'Understanding and preparing for the latest cybersecurity threats.',
    date: 'April 20, 2025',
    category: 'Security',
    readTime: '8 min read',
    image: '/lovable-uploads/4acf0bb3-60b8-4cf6-b59d-d2af4a64cb00.png'
  },
  {
    id: 'api-security-best-practices',
    title: 'API Security Best Practices',
    excerpt: 'Essential security measures for protecting your APIs from attacks.',
    date: 'April 18, 2025',
    category: 'Security',
    readTime: '6 min read',
    image: '/lovable-uploads/54285353-c710-4552-b5a9-36c4ce0ed9b8.png'
  },
  {
    id: 'zero-trust-architecture',
    title: 'Implementing Zero Trust Architecture',
    excerpt: 'A comprehensive guide to zero trust security model implementation.',
    date: 'April 15, 2025',
    category: 'Security',
    readTime: '10 min read',
    image: '/lovable-uploads/5c92dc4a-0075-470b-8d8c-73a6fde02be3.png'
  },
  {
    id: 'data-encryption-strategies',
    title: 'Modern Data Encryption Strategies',
    excerpt: 'Advanced encryption techniques for protecting sensitive data.',
    date: 'April 12, 2025',
    category: 'Security',
    readTime: '7 min read',
    image: '/lovable-uploads/62f17d6a-05cb-40df-8227-75e88f970645.png'
  },
  {
    id: 'security-incident-response',
    title: 'Security Incident Response Planning',
    excerpt: 'How to create and implement effective security incident response plans.',
    date: 'April 10, 2025',
    category: 'Security',
    readTime: '9 min read',
    image: '/lovable-uploads/7dee89d9-7ad3-4f44-8567-2fab5c93a862.png'
  },

  // Cloud Category (6 posts)
  {
    id: 'cloud-migration-strategies',
    title: 'Cloud Migration Strategies for Legacy Systems',
    excerpt: 'How to successfully plan and execute a migration from on-premise to cloud infrastructure.',
    date: 'March 28, 2025',
    category: 'Cloud',
    readTime: '8 min read',
    image: '/lovable-uploads/64e0086b-d1a8-4fbe-9242-556584c00448.png'
  },
  {
    id: 'serverless-architecture-guide',
    title: 'Complete Guide to Serverless Architecture',
    excerpt: 'Understanding serverless computing and its benefits for modern applications.',
    date: 'March 25, 2025',
    category: 'Cloud',
    readTime: '7 min read',
    image: '/lovable-uploads/ee4edf23-a52a-49aa-bee5-8e9610ca4992.png'
  },
  {
    id: 'multi-cloud-strategies',
    title: 'Multi-Cloud Deployment Strategies',
    excerpt: 'Best practices for managing applications across multiple cloud providers.',
    date: 'March 22, 2025',
    category: 'Cloud',
    readTime: '9 min read',
    image: '/lovable-uploads/f1d2b0e1-1812-4659-9841-f6fd4f6a06a8.png'
  },
  {
    id: 'cloud-cost-optimization',
    title: 'Cloud Cost Optimization Techniques',
    excerpt: 'Proven strategies to reduce cloud infrastructure costs without compromising performance.',
    date: 'March 20, 2025',
    category: 'Cloud',
    readTime: '6 min read',
    image: '/lovable-uploads/a364049e-ac00-4930-bd2f-53ac02e911d9.png'
  },
  {
    id: 'kubernetes-deployment',
    title: 'Kubernetes Deployment Best Practices',
    excerpt: 'Essential practices for deploying and managing applications on Kubernetes.',
    date: 'March 18, 2025',
    category: 'Cloud',
    readTime: '10 min read',
    image: '/lovable-uploads/b44b4376-6a18-4433-9b0e-6719c11aa425.png'
  },
  {
    id: 'cloud-native-development',
    title: 'Cloud-Native Development Principles',
    excerpt: 'Building applications designed specifically for cloud environments.',
    date: 'March 15, 2025',
    category: 'Cloud',
    readTime: '8 min read',
    image: '/lovable-uploads/e86d3e88-9e98-45c2-bae4-e324c827606f.png'
  },

  // DevOps Category (6 posts)
  {
    id: 'devops-best-practices',
    title: 'DevOps Best Practices for Continuous Deployment',
    excerpt: 'A guide to implementing effective DevOps processes that enhance productivity.',
    date: 'March 15, 2025',
    category: 'DevOps',
    readTime: '6 min read',
    image: '/lovable-uploads/72ace780-45bd-4fc9-a7d4-43f9d6b33361.png'
  },
  {
    id: 'ci-cd-pipeline-setup',
    title: 'Setting Up Robust CI/CD Pipelines',
    excerpt: 'Step-by-step guide to creating efficient continuous integration and deployment pipelines.',
    date: 'March 12, 2025',
    category: 'DevOps',
    readTime: '9 min read',
    image: '/lovable-uploads/954ddfc6-3ae2-41b6-9dd6-0f792497c6d0.png'
  },
  {
    id: 'infrastructure-as-code',
    title: 'Infrastructure as Code with Terraform',
    excerpt: 'Managing infrastructure using code for better consistency and automation.',
    date: 'March 10, 2025',
    category: 'DevOps',
    readTime: '7 min read',
    image: '/lovable-uploads/a0e619bc-b97f-4cfd-bef8-5fa4212e2be8.png'
  },
  {
    id: 'monitoring-observability',
    title: 'Monitoring and Observability in DevOps',
    excerpt: 'Implementing comprehensive monitoring solutions for production systems.',
    date: 'March 8, 2025',
    category: 'DevOps',
    readTime: '8 min read',
    image: '/lovable-uploads/53486b42-3a97-4b33-9947-cc3dc4e85b5c.png'
  },
  {
    id: 'containerization-docker',
    title: 'Advanced Docker Containerization',
    excerpt: 'Mastering Docker for efficient application deployment and scaling.',
    date: 'March 5, 2025',
    category: 'DevOps',
    readTime: '6 min read',
    image: '/lovable-uploads/04bb71ef-9de4-4174-949b-c195f9072db7.png'
  },
  {
    id: 'gitops-deployment',
    title: 'GitOps: Git-Driven Deployment Strategies',
    excerpt: 'Using Git workflows to manage and deploy infrastructure and applications.',
    date: 'March 3, 2025',
    category: 'DevOps',
    readTime: '7 min read',
    image: '/lovable-uploads/1b4c9fe7-adc0-4f33-89aa-6204e7dc1622.png'
  },

  // Architecture Category (6 posts)
  {
    id: 'microservices-vs-monolithic',
    title: 'Microservices vs. Monolithic Architecture',
    excerpt: 'A detailed comparison of different architectural approaches for modern applications.',
    date: 'April 10, 2025',
    category: 'Architecture',
    readTime: '6 min read',
    image: '/lovable-uploads/e86d3e88-9e98-45c2-bae4-e324c827606f.png'
  },
  {
    id: 'event-driven-architecture',
    title: 'Event-Driven Architecture Patterns',
    excerpt: 'Understanding and implementing event-driven systems for scalable applications.',
    date: 'April 8, 2025',
    category: 'Architecture',
    readTime: '8 min read',
    image: '/lovable-uploads/345bcc74-1822-47c9-a1ff-a8ae70f92542.png'
  },
  {
    id: 'api-design-principles',
    title: 'RESTful API Design Principles',
    excerpt: 'Best practices for designing robust and scalable REST APIs.',
    date: 'April 5, 2025',
    category: 'Architecture',
    readTime: '7 min read',
    image: '/lovable-uploads/4acf0bb3-60b8-4cf6-b59d-d2af4a64cb00.png'
  },
  {
    id: 'domain-driven-design',
    title: 'Domain-Driven Design in Practice',
    excerpt: 'Implementing DDD principles for better software architecture and team collaboration.',
    date: 'April 3, 2025',
    category: 'Architecture',
    readTime: '10 min read',
    image: '/lovable-uploads/54285353-c710-4552-b5a9-36c4ce0ed9b8.png'
  },
  {
    id: 'scalable-system-design',
    title: 'Designing Scalable System Architectures',
    excerpt: 'Principles and patterns for building systems that scale efficiently.',
    date: 'April 1, 2025',
    category: 'Architecture',
    readTime: '9 min read',
    image: '/lovable-uploads/5c92dc4a-0075-470b-8d8c-73a6fde02be3.png'
  },
  {
    id: 'database-architecture-patterns',
    title: 'Modern Database Architecture Patterns',
    excerpt: 'Exploring different database architectures for various application needs.',
    date: 'March 30, 2025',
    category: 'Architecture',
    readTime: '8 min read',
    image: '/lovable-uploads/62f17d6a-05cb-40df-8227-75e88f970645.png'
  }
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);
  
  const categories = ['All', 'AI & ML', 'Security', 'Cloud', 'DevOps', 'Architecture'];
  
  const getFilteredPosts = () => {
    if (selectedCategory === 'All') {
      return showAll ? allBlogPosts : allBlogPosts.slice(0, 6);
    }
    const filtered = allBlogPosts.filter(post => post.category === selectedCategory);
    return showAll ? filtered : filtered.slice(0, 6);
  };
  
  const filteredPosts = getFilteredPosts();
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-6">
              Tech Insights & Innovation
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Stay updated with the latest insights, trends, and breakthrough technologies from HigzenDev
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                Weekly Updates
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                Expert Insights
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                Industry Trends
              </span>
            </div>
          </div>
        </div>
      </section>

      <main className="flex-grow">
        <div className="container mx-auto px-4 pb-20">
          {/* Featured Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button 
                key={category} 
                variant={category === selectedCategory ? 'default' : 'outline'}
                className="rounded-full"
                onClick={() => {
                  setSelectedCategory(category);
                  setShowAll(false);
                }}
              >
                {category}
              </Button>
            ))}
          </div>
          
          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <article 
                key={post.id} 
                className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden hover:bg-card/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/10"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <div 
                    className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url(${post.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-semibold rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors group-hover:gap-3"
                  >
                    Read More 
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
          
          {/* Load More Section */}
          {!showAll && (
            <div className="mt-16 text-center">
              <Button 
                size="lg"
                className="px-8 py-3 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => setShowAll(true)}
              >
                Load More Articles
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
