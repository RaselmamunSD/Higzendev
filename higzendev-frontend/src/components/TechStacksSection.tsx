
import React from 'react';

const TechStacksSection = () => {
  const techStacksRow1 = [
    { name: 'React', color: 'bg-card border-2 border-primary/20 text-foreground hover:border-primary' },
    { name: 'PHP', color: 'bg-card border-2 border-accent/20 text-foreground hover:border-accent' },
    { name: 'Java', color: 'bg-card border-2 border-primary/20 text-foreground hover:border-primary' },
    { name: 'Python', color: 'bg-card border-2 border-accent/20 text-foreground hover:border-accent' },
    { name: 'Vue.js', color: 'bg-card border-2 border-primary/20 text-foreground hover:border-primary' },
    { name: 'Go', color: 'bg-card border-2 border-accent/20 text-foreground hover:border-accent' },
  ];

  const techStacksRow2 = [
    { name: 'Laravel', color: 'bg-card border-2 border-accent/20 text-foreground hover:border-accent' },
    { name: 'Flutter', color: 'bg-card border-2 border-primary/20 text-foreground hover:border-primary' },
    { name: '.Net', color: 'bg-card border-2 border-accent/20 text-foreground hover:border-accent' },
    { name: 'Azure', color: 'bg-card border-2 border-primary/20 text-foreground hover:border-primary' },
    { name: 'AWS', color: 'bg-card border-2 border-accent/20 text-foreground hover:border-accent' },
    { name: 'Node.js', color: 'bg-card border-2 border-primary/20 text-foreground hover:border-primary' },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            We Serve All Tech Stacks
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We understand that today companies must develop custom software products 
            to keep pace with the competitive market
          </p>
        </div>
      </div>

      <div className="w-full">
        {/* First row - scrolling right */}
        <div className="relative mb-12 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
          <div className="flex animate-marquee-right" style={{ width: 'max-content' }}>
            {[...techStacksRow1, ...techStacksRow1, ...techStacksRow1, ...techStacksRow1, ...techStacksRow1].map((tech, index) => (
              <div key={index} className="flex-shrink-0 mx-4">
                <div className={`w-28 h-28 md:w-32 md:h-32 rounded-full ${tech.color} flex items-center justify-center font-semibold text-lg shadow-card-glow hover:shadow-glow transform hover:scale-110 transition-all duration-300`}>
                  {tech.name}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Second row - scrolling left */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
          <div className="flex animate-marquee-left" style={{ width: 'max-content' }}>
            {[...techStacksRow2, ...techStacksRow2, ...techStacksRow2, ...techStacksRow2, ...techStacksRow2].map((tech, index) => (
              <div key={index} className="flex-shrink-0 mx-4">
                <div className={`w-28 h-28 md:w-32 md:h-32 rounded-full ${tech.color} flex items-center justify-center font-semibold text-lg shadow-card-glow hover:shadow-glow transform hover:scale-110 transition-all duration-300`}>
                  {tech.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStacksSection;
