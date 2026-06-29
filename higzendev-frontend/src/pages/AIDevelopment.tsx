import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Brain, Zap, Target, Bot, BarChart3, Eye, Mic, MessageSquare, CheckCircle, ArrowRight, Cpu, Database, Globe } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const AIDevelopment = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-primary/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary font-medium mb-6">
                <Brain size={20} />
                Artificial Intelligence Development
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Transform Your Business with AI
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Harness the power of artificial intelligence to automate processes, gain insights, and create 
                intelligent solutions that drive innovation and competitive advantage in your industry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8">
                  <Link to="/contact" className="flex items-center gap-2">
                    Start AI Project <ArrowRight size={20} />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Link to="/request-quote">Explore AI Solutions</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* AI Services */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive AI Solutions</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                From machine learning models to intelligent automation, we build AI solutions that solve real business problems
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                <Brain className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Machine Learning Models</h3>
                <p className="text-muted-foreground mb-4">
                  Custom ML models for prediction, classification, and pattern recognition tailored to your data.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Predictive Analytics</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Classification Models</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Anomaly Detection</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                <MessageSquare className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Natural Language Processing</h3>
                <p className="text-muted-foreground mb-4">
                  Advanced NLP solutions for text analysis, sentiment analysis, and language understanding.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Text Analysis</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Sentiment Analysis</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Chatbots & Virtual Assistants</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                <Eye className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Computer Vision</h3>
                <p className="text-muted-foreground mb-4">
                  Image recognition, object detection, and visual analysis solutions for various applications.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Image Recognition</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Object Detection</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Facial Recognition</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                <Bot className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Intelligent Automation</h3>
                <p className="text-muted-foreground mb-4">
                  Automate complex business processes with AI-powered workflows and decision systems.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Process Automation</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Decision Systems</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Workflow Optimization</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                <BarChart3 className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Predictive Analytics</h3>
                <p className="text-muted-foreground mb-4">
                  Advanced analytics and forecasting models to predict trends and optimize business decisions.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Demand Forecasting</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Risk Assessment</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Customer Behavior</li>
                </ul>
              </div>

              <div className="bg-card p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                <Mic className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Speech & Audio AI</h3>
                <p className="text-muted-foreground mb-4">
                  Speech recognition, synthesis, and audio processing solutions for interactive applications.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Speech Recognition</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Text-to-Speech</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-primary" /> Audio Analysis</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* AI Technologies */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">AI Technologies & Frameworks</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                'TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI', 'Hugging Face', 'OpenCV', 'spaCy', 'NLTK',
                'Keras', 'FastAPI', 'Python', 'R', 'Docker', 'Kubernetes', 'AWS AI', 'Google Cloud AI'
              ].map((tech) => (
                <div key={tech} className="bg-background p-6 rounded-xl text-center hover:shadow-md transition-all border">
                  <h4 className="font-semibold text-lg">{tech}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Use Cases */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Use Cases Across Industries</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Discover how AI can transform your industry with proven solutions and implementations
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card p-8 rounded-xl border text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Healthcare</h3>
                <p className="text-muted-foreground">Medical imaging analysis, drug discovery, and patient diagnosis assistance.</p>
              </div>

              <div className="bg-card p-8 rounded-xl border text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Finance</h3>
                <p className="text-muted-foreground">Fraud detection, algorithmic trading, and risk assessment models.</p>
              </div>

              <div className="bg-card p-8 rounded-xl border text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">E-commerce</h3>
                <p className="text-muted-foreground">Recommendation engines, demand forecasting, and customer segmentation.</p>
              </div>

              <div className="bg-card p-8 rounded-xl border text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cpu className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Manufacturing</h3>
                <p className="text-muted-foreground">Predictive maintenance, quality control, and supply chain optimization.</p>
              </div>

              <div className="bg-card p-8 rounded-xl border text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Customer Service</h3>
                <p className="text-muted-foreground">Intelligent chatbots, sentiment analysis, and automated support systems.</p>
              </div>

              <div className="bg-card p-8 rounded-xl border text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Marketing</h3>
                <p className="text-muted-foreground">Personalization engines, ad optimization, and customer lifetime value prediction.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our AI Development?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our expertise in AI ensures successful implementation and measurable business impact
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Proven Expertise</h3>
                    <p className="text-muted-foreground">Deep experience in AI technologies with successful implementations across industries.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Business-Focused</h3>
                    <p className="text-muted-foreground">AI solutions designed to solve real business problems and deliver measurable ROI.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Scalable Solutions</h3>
                    <p className="text-muted-foreground">AI systems built to scale with your business growth and evolving requirements.</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6">AI Development Benefits</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Automated Decision Making</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Enhanced Customer Experience</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Operational Efficiency</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Competitive Advantage</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Data-Driven Insights</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our AI Development Process</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Systematic approach to building effective AI solutions from concept to deployment
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-xl">1</div>
                <h3 className="text-lg font-semibold mb-3">Problem Definition</h3>
                <p className="text-muted-foreground text-sm">Identify and define the business problem AI will solve.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-xl">2</div>
                <h3 className="text-lg font-semibold mb-3">Data Analysis</h3>
                <p className="text-muted-foreground text-sm">Analyze and prepare data for model training.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-xl">3</div>
                <h3 className="text-lg font-semibold mb-3">Model Development</h3>
                <p className="text-muted-foreground text-sm">Build and train AI models using best practices.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-xl">4</div>
                <h3 className="text-lg font-semibold mb-3">Testing & Validation</h3>
                <p className="text-muted-foreground text-sm">Thoroughly test and validate model performance.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-xl">5</div>
                <h3 className="text-lg font-semibold mb-3">Deployment</h3>
                <p className="text-muted-foreground text-sm">Deploy and monitor AI solutions in production.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Harness the Power of AI?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Transform your business with intelligent AI solutions that drive innovation and growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                <Link to="/contact" className="flex items-center gap-2">
                  Start AI Development <ArrowRight size={20} />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/request-quote">Get AI Consultation</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AIDevelopment;