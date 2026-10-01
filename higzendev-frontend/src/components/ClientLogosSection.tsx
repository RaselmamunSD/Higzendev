import React from 'react';

const logos = [
  { name: 'Google', url: 'https://logo.clearbit.com/google.com' },
  { name: 'Microsoft', url: 'https://logo.clearbit.com/microsoft.com' },
  { name: 'Apple', url: 'https://logo.clearbit.com/apple.com' },
  { name: 'Amazon', url: 'https://logo.clearbit.com/amazon.com' },
  { name: 'Netflix', url: 'https://logo.clearbit.com/netflix.com' },
  { name: 'Spotify', url: 'https://logo.clearbit.com/spotify.com' },
  { name: 'Airbnb', url: 'https://logo.clearbit.com/airbnb.com' },
  { name: 'Uber', url: 'https://logo.clearbit.com/uber.com' },
  { name: 'Tesla', url: 'https://logo.clearbit.com/tesla.com' },
  { name: 'NVIDIA', url: 'https://logo.clearbit.com/nvidia.com' },
  { name: 'Meta', url: 'https://logo.clearbit.com/meta.com' },
  { name: 'Cisco', url: 'https://logo.clearbit.com/cisco.com' },
  { name: 'Adobe', url: 'https://logo.clearbit.com/adobe.com' },
  { name: 'Salesforce', url: 'https://logo.clearbit.com/salesforce.com' },
  { name: 'IBM', url: 'https://logo.clearbit.com/ibm.com' },
  { name: 'Samsung', url: 'https://logo.clearbit.com/samsung.com' },
  { name: 'Intel', url: 'https://logo.clearbit.com/intel.com' },
  { name: 'Oracle', url: 'https://logo.clearbit.com/oracle.com' }
];

const ClientLogosSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-18 relative bg-gradient-to-b from-background via-card/40 to-background border-y border-border/40 overflow-hidden">
      {/* Background glow ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[200px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 mb-8 sm:mb-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest mb-3 backdrop-blur-md">
          <span>TRUSTED BY 100+ GLOBAL</span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
          Industry Leaders &{' '}
          <span className="bg-gradient-to-r from-primary via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Visionary Brands
          </span>
        </h2>

        <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
          High-growth innovators and global enterprises rely on HigzenDev to scale their engineering teams and build mission-critical digital products.
        </p>
      </div>

      {/* Infinite Marquee with Side Gradient Fades */}
      <div className="relative w-full overflow-hidden">
        {/* Left Gradient Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
        
        {/* Right Gradient Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />

        {/* Marquee Track */}
        <div className="flex animate-marquee-slow hover:[animation-play-state:paused] py-2" style={{ width: 'max-content' }}>
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex-shrink-0 mx-2.5 sm:mx-3.5 px-5 sm:px-6 py-3 sm:py-4 rounded-2xl bg-card/60 border border-border/70 backdrop-blur-md hover:border-primary/50 hover:bg-card/90 transition-all duration-300 flex items-center justify-center gap-3 h-16 sm:h-20 min-w-[140px] sm:min-w-[170px] shadow-sm group hover:shadow-glow"
            >
              <img
                src={logo.url}
                alt={logo.name}
                className="max-h-6 sm:max-h-8 max-w-[80px] sm:max-w-[100px] object-contain filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300 opacity-70 group-hover:opacity-100"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <span className="text-xs sm:text-sm font-semibold text-foreground/80 group-hover:text-foreground transition-colors">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogosSection;
