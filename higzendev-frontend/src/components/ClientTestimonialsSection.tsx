
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import useEmblaCarousel from 'embla-carousel-react';

interface TestimonialCardProps {
  logo: string;
  clientName: string;
  title: string;
  testimonial: string;
  clientImage?: string;
}

const TestimonialCard = ({ logo, clientName, title, testimonial, clientImage }: TestimonialCardProps) => {
  const initials = clientName
    .split(' ')
    .map(part => part[0])
    .join('');

  // Vary star ratings for different testimonials
  const getStarRating = (name: string) => {
    const ratings: { [key: string]: number } = {
      'Chris Withers': 5,
      'Troy Flower': 4,
      'Henric Ehrenblad': 4,
      'Sarah Johnson': 5,
      'Michael Chen': 3,
      'Emily Rodriguez': 4,
      'David Kim': 5,
      'Jessica Taylor': 3,
      'Robert Wilson': 4,
      'Lisa Anderson': 5
    };
    return ratings[name] || 4;
  };

  const starRating = getStarRating(clientName);

  return (
    <div className="bg-card rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 shadow-glow border-2 border-primary/20 h-full flex flex-col min-w-[280px] w-[280px] sm:min-w-[320px] sm:w-[320px] md:min-w-[360px] md:w-[360px] lg:min-w-[400px] lg:w-[400px] hover:border-primary transition-all duration-300 hover:scale-105">
      <div className="flex flex-col items-center text-center mb-4 md:mb-6 lg:mb-8">
        <Avatar className="h-16 w-16 sm:h-18 sm:w-18 md:h-20 md:w-20 lg:h-24 lg:w-24 mb-3 md:mb-4 lg:mb-6 border-2 border-primary/30">
          {clientImage ? (
            <AvatarImage src={clientImage} alt={clientName} />
          ) : (
            <AvatarFallback className="bg-primary/10 text-primary text-base sm:text-lg md:text-xl font-bold">{initials}</AvatarFallback>
          )}
        </Avatar>
        <h4 className="font-bold text-primary text-base sm:text-lg md:text-xl mb-1 md:mb-2">{clientName}</h4>
      </div>
      
      <p className="text-muted-foreground flex-grow leading-relaxed text-center mb-4 md:mb-6 lg:mb-8 text-sm sm:text-base">
        &ldquo;{testimonial}&rdquo;
      </p>
      
      <div className="flex justify-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ${star <= starRating ? 'text-primary' : 'text-muted-foreground/30'} fill-current`}
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    </div>
  );
};

const ClientTestimonialsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    skipSnaps: false,
    dragFree: false,
  });

  useEffect(() => {
    if (emblaApi) {
      const interval = setInterval(() => {
        emblaApi.scrollNext();
      }, 3000); // Auto-scroll every 3 seconds

      return () => clearInterval(interval);
    }
  }, [emblaApi]);

  const testimonials = [
    {
      logo: "https://via.placeholder.com/150x50?text=Kliktt",
      clientName: "Chris Withers",
      title: "CEO & Founder",
      testimonial: "Heartfelt appreciation to TechWave Limited for believing in my vision. Their talented developers can take any challenges against all odds and helped to bring Kliktt into life.",
      clientImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      logo: "https://via.placeholder.com/150x50?text=WellTeam",
      clientName: "Troy Flower",
      title: "Founder",
      testimonial: "TechWave exceeded expectations with proactive suggestions, responsiveness, and dedication. From co-founders to team, working with them was a delight!",
      clientImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      logo: "https://via.placeholder.com/150x50?text=Limestone",
      clientName: "Henric Ehrenblad",
      title: "Founder",
      testimonial: "I came down Bangladesh and visited the TechWave office. It feels like they are a great cultured company and that's one of the reasons, why it's so fun to work with them.",
      clientImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    {
      logo: "https://via.placeholder.com/150x50?text=TechCorp",
      clientName: "Sarah Johnson",
      title: "CTO",
      testimonial: "Outstanding technical expertise and professional service. TechWave delivered our project on time and exceeded all expectations.",
      clientImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    {
      logo: "https://via.placeholder.com/150x50?text=InnovateLab",
      clientName: "Michael Chen",
      title: "Product Manager",
      testimonial: "Working with TechWave was seamless. Their attention to detail and innovative solutions helped us scale our platform effectively.",
      clientImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face"
    },
    {
      logo: "https://via.placeholder.com/150x50?text=CloudSync",
      clientName: "Emily Rodriguez",
      title: "Founder & CEO",
      testimonial: "TechWave's cloud solutions transformed our business operations. Their team is professional, responsive, and highly skilled.",
      clientImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      logo: "https://via.placeholder.com/150x50?text=DataFlow",
      clientName: "David Kim",
      title: "Lead Developer",
      testimonial: "Exceptional database management and optimization services. TechWave helped us improve performance by 300%.",
      clientImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face"
    },
    {
      logo: "https://via.placeholder.com/150x50?text=MobileFirst",
      clientName: "Jessica Taylor",
      title: "Head of Product",
      testimonial: "Their mobile app development expertise is top-notch. Our app now has excellent user ratings and engagement.",
      clientImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    {
      logo: "https://via.placeholder.com/150x50?text=EcomPlus",
      clientName: "Robert Wilson",
      title: "Business Owner",
      testimonial: "TechWave built our e-commerce platform from scratch. Sales increased by 250% after launch. Highly recommended!",
      clientImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face"
    },
    {
      logo: "https://via.placeholder.com/150x50?text=AIVenture",
      clientName: "Lisa Anderson",
      title: "AI Specialist",
      testimonial: "Their AI development capabilities are impressive. TechWave helped us implement machine learning solutions that revolutionized our workflow.",
      clientImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const brandLogos = [
    { src: 'https://logo.clearbit.com/google.com', alt: 'Google' },
    { src: 'https://logo.clearbit.com/microsoft.com', alt: 'Microsoft' },
    { src: 'https://logo.clearbit.com/apple.com', alt: 'Apple' },
    { src: 'https://logo.clearbit.com/amazon.com', alt: 'Amazon' },
    { src: 'https://logo.clearbit.com/netflix.com', alt: 'Netflix' },
    { src: 'https://logo.clearbit.com/spotify.com', alt: 'Spotify' },
    { src: 'https://logo.clearbit.com/airbnb.com', alt: 'Airbnb' },
    { src: 'https://logo.clearbit.com/uber.com', alt: 'Uber' },
    { src: 'https://logo.clearbit.com/tesla.com', alt: 'Tesla' },
    { src: 'https://logo.clearbit.com/intel.com', alt: 'Intel' },
    { src: 'https://logo.clearbit.com/cisco.com', alt: 'Cisco' },
    { src: 'https://logo.clearbit.com/adobe.com', alt: 'Adobe' },
    { src: 'https://logo.clearbit.com/salesforce.com', alt: 'Salesforce' },
    { src: 'https://logo.clearbit.com/nvidia.com', alt: 'NVIDIA' },
    { src: 'https://logo.clearbit.com/meta.com', alt: 'Meta' },
    { src: 'https://logo.clearbit.com/ibm.com', alt: 'IBM' },
    { src: 'https://logo.clearbit.com/oracle.com', alt: 'Oracle' },
    { src: 'https://logo.clearbit.com/sap.com', alt: 'SAP' },
    { src: 'https://logo.clearbit.com/paypal.com', alt: 'PayPal' },
    { src: 'https://logo.clearbit.com/samsung.com', alt: 'Samsung' }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-[#121212] via-background to-[#121212] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Trusted by <span className="text-primary">20+</span> Leading Brands
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed px-2">
            Our expertise has consistently exceeded expectations of our clients. Top brands
            rely on us as a strategic partner to scale their development teams.
          </p>
        </div>

        {/* Brand Logos - Single Line Scrolling */}
        <div className="mb-10 md:mb-16 overflow-hidden">
          <div className="flex animate-marquee-slow hover:[animation-play-state:paused]" style={{ width: 'max-content' }}>
            {[...brandLogos, ...brandLogos, ...brandLogos].map((logo, index) => (
              <div key={index} className="flex-shrink-0 mx-2 md:mx-3 bg-card rounded-lg p-3 md:p-4 lg:p-6 shadow-card-glow hover:shadow-glow border border-border transition-all duration-300 group hover:scale-105 w-28 h-16 sm:w-32 sm:h-18 md:w-36 md:h-20 lg:w-40 lg:h-24 flex items-center justify-center">
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="max-w-full max-h-10 sm:max-h-12 md:max-h-14 lg:max-h-16 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="mb-10 md:mb-16">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-3 sm:gap-4 md:gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-none">
                  <TestimonialCard
                    logo={testimonial.logo}
                    clientName={testimonial.clientName}
                    title={testimonial.title}
                    testimonial={testimonial.testimonial}
                    clientImage={testimonial.clientImage}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link to="/case-studies">
            <Button 
              size="lg" 
              variant="default"
            >
              See Our Case Studies
            </Button>
          </Link>
          <p className="text-muted-foreground mt-4">
            Discover how we've helped brands achieve their goals
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonialsSection;
