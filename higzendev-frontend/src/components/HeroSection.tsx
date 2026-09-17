import React, { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, MessageCircle } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface Slide {
  id: number;
  heading: string;
  subtext: string;
  badge: string;
}

const slides: Slide[] = [
  {
    id: 1,
    badge: "ENTERPRISE SOFTWARE & AI POWERHOUSE",
    heading: "Engineering the Future of Digital Innovation",
    subtext: "Silicon Valley craftsmanship, mission-critical distributed architectures, and top 1% global engineering teams."
  },
  {
    id: 2,
    badge: "TAILORED TECH ECOSYSTEMS",
    heading: "Where Vision Meets Technical Mastery",
    subtext: "Custom software, high-concurrency cloud systems, and AI workflows built to scale without limits."
  },
  {
    id: 3,
    badge: "HIGZENDEV INNOVATION HUB",
    heading: "Accelerating High-Growth Global Brands",
    subtext: "Transforming complex business challenges into resilient, high-velocity digital products."
  }
];

// Typewriter component
const TypewriterText = ({ text, className }: { text: string; className?: string }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setDisplayedText('');
    setCurrentIndex(0);
  }, [text]);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 35); // Speed of typing
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <span className={className}>
      {displayedText}
      {currentIndex < text.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="inline-block w-[3px] h-[1em] bg-primary ml-1 align-middle"
        />
      )}
    </span>
  );
};

const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const reduceMotion = useReducedMotion();

  // Simplified animation props for mobile/reduced motion
  const getMotionProps = (defaultProps: object) => {
    if (reduceMotion) {
      return {
        initial: { opacity: 1 },
        animate: { opacity: 1 },
        exit: { opacity: 1 },
        transition: { duration: 0 },
      };
    }
    return defaultProps;
  };

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section 
      className="relative min-h-[92vh] lg:min-h-screen w-full overflow-hidden bg-[#040711] flex items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Image: HigzenDev Office Headquarters */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: reduceMotion ? 1 : [1, 1.06, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-full h-full"
        >
          <img
            src="/images/higzendev-office-hero.png"
            alt="HigzenDev Headquarters Office"
            className="w-full h-full object-cover object-center filter brightness-[0.95] contrast-[1.05]"
            loading="eager"
          />
        </motion.div>

        {/* Ambient Warm & Cyan Office Glow Accents */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[750px] h-[400px] bg-primary/15 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-10 right-10 w-[500px] h-[350px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

        {/* Lighter Gradient Overlays for enhanced background visibility & crisp typography */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#040711]/85 via-[#040711]/50 to-[#040711]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#040711] via-transparent to-[#040711]/30" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                {...getMotionProps({
                  initial: { opacity: 0, x: reduceMotion ? 0 : -40 },
                  animate: { opacity: 1, x: 0 },
                  exit: { opacity: 0, x: reduceMotion ? 0 : 40 },
                  transition: { duration: reduceMotion ? 0.2 : 0.5, ease: "easeOut" },
                })}
                className="space-y-6 text-left"
              >
                {/* Top Badge */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                >
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-primary/20 text-cyan-300 border border-primary/40 backdrop-blur-md shadow-lg shadow-primary/10">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                    <span>{slides[currentSlide].badge}</span>
                  </span>
                </motion.div>

                {/* Heading with Typewriter Effect */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight min-h-[1.2em]"
                  style={{ 
                    textShadow: '0 4px 30px rgba(0, 0, 0, 0.8)',
                  }}
                >
                  <TypewriterText 
                    key={currentSlide}
                    text={slides[currentSlide].heading}
                    className="bg-gradient-to-r from-white via-cyan-200 to-primary bg-clip-text text-transparent"
                  />
                </motion.h1>

                {/* Subtext */}
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed"
                  style={{ 
                    textShadow: '0 2px 20px rgba(0, 0, 0, 0.8)',
                  }}
                >
                  {slides[currentSlide].subtext}
                </motion.p>

                {/* Action CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
                >
                  <Button 
                    size="lg"
                    className="h-14 px-8 rounded-2xl bg-gradient-to-r from-primary via-cyan-500 to-blue-600 hover:from-primary/90 hover:to-blue-700 text-white font-bold text-base shadow-xl shadow-primary/30 group transition-all duration-300 hover:scale-105"
                    onClick={() => navigate('/contact')}
                  >
                    <span>Get Started</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <Button 
                    size="lg"
                    variant="outline" 
                    className="h-14 px-8 rounded-2xl border-white/20 bg-slate-900/60 hover:bg-slate-800/80 text-white font-semibold text-base backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-cyan-400/50"
                    onClick={() => navigate('/services')}
                  >
                    Explore Services
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="h-14 px-6 rounded-2xl border-emerald-500/30 bg-emerald-950/30 hover:bg-emerald-950/50 text-emerald-400 hover:text-emerald-300 font-semibold text-sm backdrop-blur-md transition-all duration-300 hover:scale-105"
                    onClick={() => window.open('https://wa.me/8801870966718', '_blank')}
                  >
                    <div className="flex items-center gap-2">
                      <img src="/images/whatsapp-icon.png" alt="WhatsApp" className="w-4 h-4 object-contain" />
                      <span>WhatsApp</span>
                    </div>
                  </Button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-20 p-3 sm:p-3.5 rounded-full bg-slate-950/60 backdrop-blur-md border border-white/10 text-white hover:bg-primary hover:border-primary transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5 group-hover:-translate-x-0.5 transition-transform" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-20 p-3 sm:p-3.5 rounded-full bg-slate-950/60 backdrop-blur-md border border-white/10 text-white hover:bg-primary hover:border-primary transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#040711] to-transparent pointer-events-none z-10" />
    </section>
  );
};

export default HeroSection;
