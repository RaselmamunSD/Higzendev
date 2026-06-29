import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, Target, Users, BarChart3, Megaphone, Eye, Share2, Lightbulb } from 'lucide-react';

const BrandPromotion = () => {
  const marketingServices = [
    {
      icon: <TrendingUp size={48} />,
      title: 'Digital Marketing Strategy',
      description: 'Comprehensive digital marketing strategies tailored to your business goals and target audience.',
      features: ['SEO Optimization', 'Content Marketing', 'Email Campaigns', 'Analytics & Reporting']
    },
    {
      icon: <Target size={48} />,
      title: 'Brand Identity & Design',
      description: 'Create a compelling brand identity that resonates with your audience and stands out in the market.',
      features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Marketing Materials']
    },
    {
      icon: <Users size={48} />,
      title: 'Social Media Management',
      description: 'Build and engage your community across all major social media platforms.',
      features: ['Content Creation', 'Community Management', 'Influencer Partnerships', 'Social Advertising']
    },
    {
      icon: <BarChart3 size={48} />,
      title: 'Performance Analytics',
      description: 'Data-driven insights to measure and optimize your marketing campaigns for maximum ROI.',
      features: ['Campaign Tracking', 'ROI Analysis', 'A/B Testing', 'Market Research']
    },
    {
      icon: <Megaphone size={48} />,
      title: 'Advertising Campaigns',
      description: 'Strategic advertising campaigns across digital and traditional channels.',
      features: ['Google Ads', 'Facebook Advertising', 'Display Advertising', 'Video Marketing']
    },
    {
      icon: <Eye size={48} />,
      title: 'Brand Awareness',
      description: 'Increase your brand visibility and recognition in your target market.',
      features: ['PR & Media Relations', 'Event Marketing', 'Sponsorship Opportunities', 'Community Outreach']
    }
  ];

  const marketingProcess = [
    {
      step: '01',
      title: 'Discovery & Research',
      description: 'We analyze your business, competitors, and target audience to develop a comprehensive understanding of your market position.'
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Create a customized marketing strategy that aligns with your business objectives and budget requirements.'
    },
    {
      step: '03',
      title: 'Creative Execution',
      description: 'Develop compelling creative assets and content that captures your brand essence and engages your audience.'
    },
    {
      step: '04',
      title: 'Campaign Launch',
      description: 'Execute marketing campaigns across selected channels with careful monitoring and real-time optimization.'
    },
    {
      step: '05',
      title: 'Analysis & Optimization',
      description: 'Continuously analyze performance data and optimize campaigns for improved results and ROI.'
    }
  ];

  const marketingBenefits = [
    'Increased Brand Visibility',
    'Higher Customer Engagement',
    'Improved Lead Generation',
    'Better Customer Retention',
    'Enhanced Market Position',
    'Measurable ROI',
    'Competitive Advantage',
    'Long-term Business Growth'
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-600 to-blue-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 text-lg px-6 py-2 bg-white/20 text-white border-white/30">
                Brand Promotion & Marketing
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Elevate Your Brand with Strategic Marketing
              </h1>
              <p className="text-xl mb-8 text-purple-100">
                Comprehensive marketing solutions to boost your brand visibility, engage your audience, 
                and drive business growth through innovative digital strategies.
              </p>
              <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50">
                Start Your Marketing Journey
              </Button>
            </div>
          </div>
        </section>

        {/* Marketing Services */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Marketing Services</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                From brand strategy to digital campaigns, we offer complete marketing solutions 
                to help your business reach its full potential.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {marketingServices.map((service, index) => (
                <Card key={index} className="h-full hover:shadow-glow transition-all">
                  <CardHeader>
                    <div className="text-primary mb-4">{service.icon}</div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Marketing Process */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Marketing Process</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                A structured approach to marketing that ensures measurable results and sustainable growth.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {marketingProcess.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Marketing Benefits */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Marketing Services?</h2>
                <p className="text-lg text-muted-foreground">
                  Our comprehensive marketing approach delivers measurable results and long-term success.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {marketingBenefits.map((benefit, index) => (
                  <div key={index} className="bg-card border p-6 rounded-lg hover:shadow-glow transition-all text-center">
                    <Lightbulb className="text-primary mx-auto mb-3" size={32} />
                    <h4 className="font-semibold">{benefit}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Marketing Insights */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Marketing Insights & Strategies</h2>
                <p className="text-lg text-muted-foreground">
                  Stay ahead of the competition with our data-driven marketing insights and innovative strategies.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Modern Marketing Challenges</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <Share2 className="text-primary mr-4 mt-1" size={24} />
                      <div>
                        <h4 className="font-semibold mb-2">Multi-Channel Integration</h4>
                        <p className="text-muted-foreground">Seamlessly integrate your marketing efforts across all digital and traditional channels for maximum impact.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Target className="text-primary mr-4 mt-1" size={24} />
                      <div>
                        <h4 className="font-semibold mb-2">Precision Targeting</h4>
                        <p className="text-muted-foreground">Reach the right audience at the right time with advanced targeting and personalization strategies.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <BarChart3 className="text-primary mr-4 mt-1" size={24} />
                      <div>
                        <h4 className="font-semibold mb-2">Performance Optimization</h4>
                        <p className="text-muted-foreground">Continuously optimize campaigns based on real-time data and performance metrics.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-8 rounded-lg text-white">
                  <h3 className="text-2xl font-bold mb-6">Get Started Today</h3>
                  <p className="mb-6">
                    Ready to transform your brand's marketing presence? Our expert team is here to help you 
                    create impactful campaigns that drive real results.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span>Free Marketing Consultation</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span>Custom Strategy Development</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span>24/7 Campaign Support</span>
                    </div>
                  </div>
                  <Button asChild className="mt-6 bg-white text-purple-600 hover:bg-purple-50">
                    <Link to="/schedule-meeting">Schedule Consultation</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Boost Your Brand?</h2>
            <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
              Let's create a marketing strategy that drives growth, engages your audience, 
              and delivers measurable results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Get Marketing Quote
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                View Portfolio
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BrandPromotion;