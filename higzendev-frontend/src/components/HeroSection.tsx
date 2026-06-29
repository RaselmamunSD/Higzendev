import React, { useState, useEffect, useCallback, Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import HeroSkeleton from '@/components/skeletons/HeroSkeleton';

// Import hero videos
import heroVideo1 from '@/assets/hero-video.mp4';
import heroVideo2 from '@/assets/hero-slide-2-video.mp4';
import heroVideo3 from '@/assets/hero-slide-3-video.mp4';

interface Slide {
  id: number;
  video: string;
  heading: string;
  subtext: string;
}

const slides: Slide[] = [
  {
    id: 1,
    video: heroVideo1,
    heading: "Welcome to Our Platform",
    subtext: "Digital Solutions Built with Modern Technology"
  },
  {
    id: 2,
    video: heroVideo2,
    heading: "Innovative Design",
    subtext: "Bring Your Dream Projects to Life"
  },
  {
    id: 3,
    video: heroVideo3,
    heading: "Professional Services",
    subtext: "We Work with Quality and Reliability"
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
      }, 50); // Speed of typing
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

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
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
    
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section 
      className="relative min-h-screen w-full overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Videos with Parallax Effect */}
      {!isVideoLoaded && <HeroSkeleton />}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          {...getMotionProps({
            initial: { opacity: 0, scale: reduceMotion ? 1 : 1.1 },
            animate: { opacity: 1, scale: 1 },
            exit: { opacity: 0, scale: reduceMotion ? 1 : 1.05 },
            transition: { duration: reduceMotion ? 0.3 : 1, ease: "easeInOut" },
          })}
          className="absolute inset-0"
        >
          <video
            key={slides[currentSlide].video}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            onLoadedData={() => setIsVideoLoaded(true)}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ transform: reduceMotion ? 'none' : undefined }}
          >
            <source src={slides[currentSlide].video} type="video/mp4" />
          </video>
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
        </motion.div>
      </AnimatePresence>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                {...getMotionProps({
                  initial: { opacity: 0, x: reduceMotion ? 0 : -50 },
                  animate: { opacity: 1, x: 0 },
                  exit: { opacity: 0, x: reduceMotion ? 0 : 50 },
                  transition: { duration: reduceMotion ? 0.2 : 0.6, ease: "easeOut" },
                })}
                className="space-y-6"
              >
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold bg-primary/20 text-primary border border-primary/30 backdrop-blur-sm">
                    ✨ Slide {currentSlide + 1} of {slides.length}
                  </span>
                </motion.div>

                {/* Heading with Typewriter Effect */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight min-h-[1.2em]"
                  style={{ 
                    textShadow: '0 4px 30px rgba(0, 0, 0, 0.5)',
                  }}
                >
                  <TypewriterText 
                    key={currentSlide}
                    text={slides[currentSlide].heading}
                    className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent"
                  />
                </motion.h1>

                {/* Subtext with Typewriter Effect */}
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl min-h-[1.5em]"
                  style={{ 
                    textShadow: '0 2px 20px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  <TypewriterText 
                    key={`subtext-${currentSlide}`}
                    text={slides[currentSlide].subtext}
                  />
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 pt-4"
                >
                  <Button 
                    size="lg"
                    className="group bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] hover:bg-[position:100%_0] text-primary-foreground px-8 py-6 text-lg shadow-glow hover:shadow-glow-lg transition-all duration-500 rounded-full"
                    onClick={() => navigate('/contact')}
                  >
                    Get Started
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline" 
                    className="border-2 border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary transition-all duration-300 px-8 py-6 text-lg rounded-full backdrop-blur-sm"
                    onClick={() => navigate('/services')}
                  >
                    Explore Services
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
        className="absolute left-4 sm:left-6 lg:left-10 top-1/2 -translate-y-1/2 z-20 p-3 sm:p-4 rounded-full bg-background/30 backdrop-blur-md border border-border/50 text-foreground hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 group-hover:-translate-x-1 transition-transform" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-6 lg:right-10 top-1/2 -translate-y-1/2 z-20 p-3 sm:p-4 rounded-full bg-background/30 backdrop-blur-md border border-border/50 text-foreground hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative transition-all duration-300 ${
              index === currentSlide 
                ? 'w-10 sm:w-12 h-3 sm:h-4' 
                : 'w-3 sm:w-4 h-3 sm:h-4 hover:scale-125'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            <span 
              className={`absolute inset-0 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-gradient-to-r from-primary to-accent' 
                  : 'bg-foreground/30 hover:bg-foreground/50'
              }`}
            />
            {index === currentSlide && (
              <motion.span
                layoutId="activeDot"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent shadow-glow"
              />
            )}
          </button>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-border/30 z-20">
        <motion.div
          key={currentSlide}
          initial={{ width: "0%" }}
          animate={{ width: isAutoPlaying ? "100%" : "0%" }}
          transition={{ duration: 5, ease: "linear" }}
          className="h-full bg-gradient-to-r from-primary via-accent to-secondary"
        />
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
    </section>
  );
};

export default HeroSection;
