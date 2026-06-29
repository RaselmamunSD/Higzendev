import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceDetails = () => {
  const { serviceId } = useParams();

  const services = {
    'web-development': {
      title: 'Web Development',
      description: 'Build modern, responsive web applications using cutting-edge technologies.',
      features: [
        'React & TypeScript Development',
        'Responsive Design',
        'SEO Optimization',
        'Performance Optimization',
        'Cross-browser Compatibility',
        'Modern UI/UX Design'
      ],
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'],
      price: 'Starting from $5,000'
    },
    'mobile-app': {
      title: 'Mobile App Development',
      description: 'Create native and cross-platform mobile applications for iOS and Android.',
      features: [
        'Native iOS & Android Apps',
        'Cross-platform Development',
        'App Store Deployment',
        'Push Notifications',
        'Offline Functionality',
        'Third-party Integrations'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
      price: 'Starting from $8,000'
    },
    'cloud-solutions': {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment solutions.',
      features: [
        'AWS/Azure/GCP Setup',
        'Auto-scaling Infrastructure',
        'Database Management',
        'CI/CD Pipeline Setup',
        'Security Implementation',
        'Monitoring & Analytics'
      ],
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'],
      price: 'Starting from $3,000'
    },
    'ai-ml': {
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions using artificial intelligence and machine learning.',
      features: [
        'Custom ML Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'AI Chatbots',
        'Data Analysis'
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'Pandas'],
      price: 'Starting from $10,000'
    },
    'e-commerce': {
      title: 'E-commerce Solutions',
      description: 'Complete e-commerce platforms with payment integration.',
      features: [
        'Custom Shopping Cart',
        'Payment Gateway Integration',
        'Inventory Management',
        'Order Tracking',
        'Customer Management',
        'Analytics Dashboard'
      ],
      technologies: ['Shopify', 'WooCommerce', 'Stripe', 'PayPal', 'Magento'],
      price: 'Starting from $6,000'
    },
    'consulting': {
      title: 'Technology Consulting',
      description: 'Strategic technology consulting and architecture planning.',
      features: [
        'Technology Assessment',
        'Architecture Planning',
        'Digital Transformation',
        'Process Optimization',
        'Team Training',
        'Project Management'
      ],
      technologies: ['Various based on needs'],
      price: 'Starting from $2,000'
    }
  };

  const service = services[serviceId as keyof typeof services];

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow bg-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
            <Link to="/services">
              <Button className="bg-softgreen hover:bg-softgreen/80">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Services
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-white">
        {/* Hero Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <Link to="/services" className="inline-flex items-center text-softgreen hover:underline mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Link>
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">{service.title}</h1>
              <p className="text-xl text-gray-600 mb-8">{service.description}</p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-softgreen hover:bg-softgreen/80" size="lg">
                  Get Started
                </Button>
                <Button variant="outline" size="lg">
                  Request Quote
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-8">What's Included</h2>
                <div className="space-y-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-softgreen mr-3" />
                      <span className="text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-8">Technologies Used</h2>
                <div className="flex flex-wrap gap-3 mb-8">
                  {service.technologies.map((tech, index) => (
                    <span key={index} className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="bg-softgreen/10 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Pricing</h3>
                  <p className="text-2xl font-bold text-softgreen mb-4">{service.price}</p>
                  <p className="text-gray-600">Custom pricing available based on project requirements.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and create a solution that perfectly fits your needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button className="bg-softgreen hover:bg-softgreen/80" size="lg">
                  Contact Us
                </Button>
              </Link>
              <Link to="/schedule-meeting">
                <Button variant="outline" size="lg">
                  Schedule a Meeting
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

export default ServiceDetails;