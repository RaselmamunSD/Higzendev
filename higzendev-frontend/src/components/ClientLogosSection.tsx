import React from 'react';

const ClientLogosSection = () => {
  const logos = [
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
    <section className="py-12 md:py-16 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-white">
            Trusted by <span className="text-primary">20+</span> Leading Brands
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto px-2">
            Our expertise has consistently exceeded expectations of our clients. Top brands rely on us as a strategic partner to scale their development teams.
          </p>
        </div>

        {/* Single row - slow scrolling */}
        <div className="overflow-hidden">
          <div className="flex animate-marquee-slow hover:[animation-play-state:paused]" style={{ width: 'max-content' }}>
            {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 mx-2 md:mx-3 bg-card/50 backdrop-blur-sm p-3 md:p-4 rounded-lg shadow-lg h-20 w-32 sm:h-24 sm:w-40 md:h-28 md:w-48 flex items-center justify-center border border-border/30 hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="max-h-14 sm:max-h-16 md:max-h-20 max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogosSection;
