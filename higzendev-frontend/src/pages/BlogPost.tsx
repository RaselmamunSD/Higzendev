import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, User, Clock, Share2, Tag, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPost = () => {
  const { blogId } = useParams();

  const blogPosts = {
    'ai-enterprise-software': {
      title: 'The Future of AI in Enterprise Software',
      date: 'May 5, 2025',
      author: 'John Smith',
      readTime: '8 min read',
      category: 'Technology',
      content: `
        <p>Artificial Intelligence is revolutionizing the enterprise software landscape at an unprecedented pace. From automating routine tasks to providing intelligent insights, AI is becoming an integral part of modern business operations.</p>
        
        <h2>The Current State of AI in Enterprise</h2>
        <p>Today's enterprises are leveraging AI across various domains including customer service, data analysis, process automation, and predictive analytics. The integration of AI technologies has shown remarkable improvements in efficiency and decision-making capabilities.</p>
        
        <h2>Key Benefits of AI Integration</h2>
        <ul>
          <li>Automated decision making processes</li>
          <li>Enhanced customer experience through personalization</li>
          <li>Predictive maintenance and analytics</li>
          <li>Improved operational efficiency</li>
          <li>Better risk management and fraud detection</li>
        </ul>
        
        <h2>Challenges and Considerations</h2>
        <p>While AI offers tremendous opportunities, enterprises must also navigate challenges such as data privacy, implementation costs, and the need for skilled professionals.</p>
        
        <h2>Looking Forward</h2>
        <p>The future of AI in enterprise software looks promising with advancements in machine learning, natural language processing, and computer vision continuing to drive innovation.</p>
      `
    },
    'secure-coding-practices': {
      title: 'Secure Coding Practices Every Developer Should Know',
      date: 'April 22, 2025',
      author: 'Sarah Johnson',
      readTime: '12 min read',
      category: 'Security',
      content: `
        <p>Security should be at the forefront of every developer's mind. With cyber threats becoming increasingly sophisticated, implementing secure coding practices is no longer optional—it's essential.</p>
        
        <h2>Input Validation</h2>
        <p>Always validate and sanitize user inputs to prevent injection attacks. Use parameterized queries and input validation libraries.</p>
        
        <h2>Authentication and Authorization</h2>
        <p>Implement robust authentication mechanisms and ensure proper authorization checks at every level of your application.</p>
        
        <h2>Data Encryption</h2>
        <p>Encrypt sensitive data both at rest and in transit. Use strong encryption algorithms and manage keys securely.</p>
        
        <h2>Error Handling</h2>
        <p>Implement proper error handling that doesn't expose sensitive information to potential attackers.</p>
        
        <h2>Regular Security Updates</h2>
        <p>Keep all dependencies and frameworks updated to their latest secure versions.</p>
      `
    }
  };

  const defaultPosts = Array.from({ length: 20 }, (_, i) => ({
    id: `post-${i + 1}`,
    title: `Blog Post ${i + 1}: ${i % 3 === 0 ? 'Technology Trends' : i % 3 === 1 ? 'Development Best Practices' : 'Industry Insights'}`,
    date: `May ${Math.floor(Math.random() * 30) + 1}, 2025`,
    author: ['John Smith', 'Sarah Johnson', 'Mike Chen', 'Emily Davis'][Math.floor(Math.random() * 4)],
    readTime: `${Math.floor(Math.random() * 10) + 5} min read`,
    category: ['Technology', 'Development', 'Business', 'Security'][Math.floor(Math.random() * 4)],
    content: `
      <p>This is a sample blog post demonstrating the structure and layout of our blog articles. Each post contains valuable insights and information about various topics in technology and software development.</p>
      
      <h2>Main Content Section</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
      
      <h2>Key Points</h2>
      <ul>
        <li>Important insight number one</li>
        <li>Critical information to consider</li>
        <li>Best practices and recommendations</li>
        <li>Future outlook and trends</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>In conclusion, staying updated with the latest trends and best practices is crucial for success in today's rapidly evolving technology landscape.</p>
    `
  }));

  const post = blogPosts[blogId as keyof typeof blogPosts] || 
    defaultPosts.find(p => p.id === blogId) || 
    defaultPosts[0];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        {/* Hero Header */}
        <section className="relative py-16 md:py-24 bg-gradient-to-b from-card to-background overflow-hidden">
          {/* Background glow effects */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-primary hover:text-accent transition-colors mb-8 group"
            >
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>
            
            <div className="max-w-4xl mx-auto">
              {/* Category Badge */}
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/20 to-accent/20 text-primary text-sm font-medium rounded-full border border-primary/30">
                  <Tag className="h-3 w-3" />
                  {post.category}
                </span>
              </div>
              
              {/* Title */}
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
                {post.title}
              </h1>
              
              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 md:gap-6 text-muted-foreground mb-8">
                <div className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-full border border-border">
                  <User className="h-4 w-4 text-primary" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-full border border-border">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-full border border-border">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex items-center gap-4">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-primary/50 text-primary hover:bg-primary/10 hover:text-primary"
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Share Article
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-accent/50 text-accent hover:bg-accent/10 hover:text-accent"
                >
                  <BookOpen className="h-4 w-4 mr-2" />
                  Save for Later
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Content Card */}
              <div className="bg-card/30 backdrop-blur-sm rounded-2xl border border-border p-8 md:p-12">
                <div 
                  className="blog-content"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>
              
              {/* Author Card */}
              <div className="mt-12 bg-gradient-to-r from-card to-card/50 rounded-2xl border border-border p-6 md:p-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xl font-bold">
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Written by</p>
                    <h3 className="text-xl font-bold text-foreground">{post.author}</h3>
                    <p className="text-muted-foreground text-sm">Content Writer & Tech Enthusiast</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="py-16 md:py-20 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Related <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Articles</span>
                </h2>
                <p className="text-muted-foreground">Explore more insights and knowledge</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {defaultPosts.slice(0, 4).map((relatedPost, index) => (
                  <Link 
                    key={index}
                    to={`/blog/${relatedPost.id}`}
                    className="group block bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                  >
                    {/* Image Placeholder with Gradient */}
                    <div className="h-48 bg-gradient-to-br from-primary/20 via-accent/10 to-card relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full border border-primary/30">
                          {relatedPost.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                        <Calendar className="h-3 w-3" />
                        <span>{relatedPost.date}</span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xs font-bold">
                            {relatedPost.author.split(' ').map(n => n[0]).join('')}
                          </div>
                          <span>{relatedPost.author}</span>
                        </div>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {relatedPost.readTime}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <Link to="/blog">
                  <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white px-8 py-3 rounded-full">
                    View All Articles
                    <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      
      {/* Blog Content Styles */}
      <style>{`
        .blog-content {
          font-size: 1.125rem;
          line-height: 1.9;
          color: hsl(var(--muted-foreground));
        }
        
        .blog-content p {
          margin-bottom: 1.5rem;
        }
        
        .blog-content h2 {
          font-size: 1.75rem;
          font-weight: 700;
          color: hsl(var(--foreground));
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid hsl(var(--primary) / 0.3);
        }
        
        .blog-content h3 {
          font-size: 1.375rem;
          font-weight: 600;
          color: hsl(var(--foreground));
          margin-top: 2rem;
          margin-bottom: 0.75rem;
        }
        
        .blog-content ul, .blog-content ol {
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
        }
        
        .blog-content li {
          margin-bottom: 0.75rem;
          position: relative;
          padding-left: 0.5rem;
        }
        
        .blog-content ul li::marker {
          color: hsl(var(--primary));
        }
        
        .blog-content ol li::marker {
          color: hsl(var(--primary));
          font-weight: 600;
        }
        
        .blog-content a {
          color: hsl(var(--primary));
          text-decoration: underline;
          text-underline-offset: 4px;
        }
        
        .blog-content a:hover {
          color: hsl(var(--accent));
        }
        
        .blog-content blockquote {
          border-left: 4px solid hsl(var(--primary));
          padding-left: 1.5rem;
          margin: 2rem 0;
          font-style: italic;
          color: hsl(var(--muted-foreground));
          background: hsl(var(--card) / 0.5);
          padding: 1rem 1.5rem;
          border-radius: 0.5rem;
        }
        
        .blog-content code {
          background: hsl(var(--card));
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
          font-size: 0.875em;
          color: hsl(var(--primary));
        }
        
        .blog-content pre {
          background: hsl(var(--card));
          padding: 1.5rem;
          border-radius: 0.75rem;
          overflow-x: auto;
          margin: 1.5rem 0;
          border: 1px solid hsl(var(--border));
        }
        
        .blog-content img {
          border-radius: 0.75rem;
          margin: 2rem 0;
        }
      `}</style>
    </div>
  );
};

export default BlogPost;
