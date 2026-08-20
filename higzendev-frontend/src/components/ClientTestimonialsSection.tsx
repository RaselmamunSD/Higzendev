import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Sparkles, Star, Quote, ArrowRight, CheckCircle2 } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

interface TestimonialCardProps {
  clientName: string;
  title: string;
  company: string;
  testimonial: string;
  clientImage?: string;
  rating?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  clientName, 
  title, 
  company, 
  testimonial, 
  clientImage, 
  rating = 5 
}) => {
  const initials = clientName
    .split(' ')
    .map(part => part[0])
    .join('')
    .slice(0, 2);

  return (
    <div className="bg-card/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-border/80 hover:border-primary/50 shadow-xl transition-all duration-300 hover:-translate-y-1.5 h-full flex flex-col justify-between min-w-[290px] w-[290px] sm:min-w-[340px] sm:w-[340px] md:min-w-[380px] md:w-[380px] group relative overflow-hidden">
      {/* Subtle top corner gradient glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none group-hover:bg-primary/20 transition-all duration-500" />

      <div>
        {/* Top row: Star Rating + Quote Icon */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < rating ? 'text-amber-400 fill-amber-400' : 'text-muted-foreground/30'}`}
              />
            ))}
          </div>
          <Quote className="w-6 h-6 text-primary/40 group-hover:text-primary transition-colors" />
        </div>

        {/* Testimonial quote text */}
        <p className="text-sm sm:text-base text-foreground/90 leading-relaxed italic mb-6">
          "{testimonial}"
        </p>
      </div>

      {/* Client author footer */}
      <div className="pt-4 border-t border-border/60 flex items-center gap-3.5">
        <Avatar className="h-12 w-12 rounded-2xl border border-primary/30 shrink-0">
          {clientImage ? (
            <AvatarImage src={clientImage} alt={clientName} className="object-cover" />
          ) : (
            <AvatarFallback className="bg-gradient-to-tr from-primary to-cyan-500 text-white font-bold text-sm">
              {initials}
            </AvatarFallback>
          )}
        </Avatar>

        <div className="overflow-hidden">
          <div className="flex items-center gap-1.5">
            <h4 className="font-bold text-foreground text-sm sm:text-base truncate group-hover:text-primary transition-colors">
              {clientName}
            </h4>
            <CheckCircle2 className="w-3.5 h-3.5 text-primary fill-primary/20 shrink-0" />
          </div>
          <p className="text-xs text-muted-foreground truncate">
            {title} • <span className="text-primary font-medium">{company}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

const brandLogos = [
  { name: 'Meta', url: 'https://logo.clearbit.com/meta.com' },
  { name: 'IBM', url: 'https://logo.clearbit.com/ibm.com' },
  { name: 'Oracle', url: 'https://logo.clearbit.com/oracle.com' },
  { name: 'SAP', url: 'https://logo.clearbit.com/sap.com' },
  { name: 'PayPal', url: 'https://logo.clearbit.com/paypal.com' },
  { name: 'Samsung', url: 'https://logo.clearbit.com/samsung.com' },
  { name: 'Google', url: 'https://logo.clearbit.com/google.com' },
  { name: 'Microsoft', url: 'https://logo.clearbit.com/microsoft.com' },
  { name: 'Apple', url: 'https://logo.clearbit.com/apple.com' },
  { name: 'Amazon', url: 'https://logo.clearbit.com/amazon.com' },
  { name: 'Netflix', url: 'https://logo.clearbit.com/netflix.com' },
  { name: 'Spotify', url: 'https://logo.clearbit.com/spotify.com' },
];

const testimonials = [
  {
    clientName: "Chris Withers",
    title: "CEO & Founder",
    company: "Kliktt",
    testimonial: "Heartfelt appreciation to HigzenDev for believing in my vision. Their talented developers take on complex challenges and helped bring Kliktt into life.",
    clientImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5
  },
  {
    clientName: "Troy Flower",
    title: "Founder",
    company: "WellTeam",
    testimonial: "HigzenDev exceeded expectations with proactive suggestions, responsiveness, and dedication. From technical leads to developers, working with them is a delight!",
    clientImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5
  },
  {
    clientName: "Henric Ehrenblad",
    title: "Founder",
    company: "Limestone",
    testimonial: "I visited the HigzenDev team in person. They have an exceptional engineering culture and world-class standards. It's why they remain our core tech partner.",
    clientImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    rating: 5
  },
  {
    clientName: "Sarah Johnson",
    title: "Chief Technology Officer",
    company: "TechCorp Global",
    testimonial: "Outstanding technical expertise and reliable engineering delivery. HigzenDev delivered our distributed microservices platform ahead of schedule with zero downtime.",
    clientImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    rating: 5
  },
  {
    clientName: "Emily Rodriguez",
    title: "Founder & CEO",
    company: "CloudSync Labs",
    testimonial: "HigzenDev's cloud architecture and AI agent integrations transformed our SaaS operations. Their team is responsive, highly skilled, and obsessively meticulous.",
    clientImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5
  },
  {
    clientName: "David Kim",
    title: "VP of Engineering",
    company: "DataFlow Systems",
    testimonial: "Exceptional database scalability and API optimization. HigzenDev helped us improve query performance by over 300% on high-load workloads.",
    clientImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
    rating: 5
  }
];

const ClientTestimonialsSection: React.FC = () => {
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
      }, 3500);

      return () => clearInterval(interval);
    }
  }, [emblaApi]);

  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-background via-muted/15 to-background relative overflow-hidden border-y border-border/40">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
            <span>CLIENT PROOF & REPUTATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
            Trusted by{' '}
            <span className="bg-gradient-to-r from-primary via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              20+ Leading Brands
            </span>{' '}
            Worldwide
          </h2>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Our engineering expertise consistently delivers transformative results. Top global brands rely on us as their dedicated technology partner.
          </p>
        </div>

      </div>

      {/* Brand Logos Infinite Marquee */}
      <div className="relative w-full overflow-hidden mb-16">
        {/* Side Gradient Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />

        <div className="flex animate-marquee-slow hover:[animation-play-state:paused] py-2" style={{ width: 'max-content' }}>
          {[...brandLogos, ...brandLogos, ...brandLogos].map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex-shrink-0 mx-2.5 sm:mx-3 px-5 py-3 rounded-2xl bg-card/60 border border-border/70 backdrop-blur-md hover:border-primary/50 hover:bg-card/90 transition-all duration-300 flex items-center justify-center gap-3 h-16 min-w-[150px] shadow-sm group hover:scale-105"
            >
              <img 
                src={logo.url} 
                alt={logo.name} 
                className="max-h-6 max-w-[80px] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <span className="text-xs sm:text-sm font-semibold text-foreground/80 group-hover:text-foreground">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Client Testimonials Carousel */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_3%,black_97%,transparent)]" ref={emblaRef}>
          <div className="flex gap-4 sm:gap-6 py-2">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-none">
                <TestimonialCard
                  clientName={testimonial.clientName}
                  title={testimonial.title}
                  company={testimonial.company}
                  testimonial={testimonial.testimonial}
                  clientImage={testimonial.clientImage}
                  rating={testimonial.rating}
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Footer */}
        <div className="text-center mt-14">
          <Button
            asChild
            size="lg"
            className="h-12 px-8 rounded-xl bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 text-white font-semibold shadow-lg shadow-primary/20 group"
          >
            <Link to="/case-studies" className="flex items-center gap-2">
              Explore Our Case Studies & Results
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <p className="text-xs sm:text-sm text-muted-foreground mt-3">
            Discover how we have helped high-growth enterprises scale efficiently.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ClientTestimonialsSection;
