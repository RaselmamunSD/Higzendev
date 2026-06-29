
import React from 'react';
import { Button } from '@/components/ui/button';

const SalesStatisticsSection = () => {
  const stats = [
    { value: '145+', label: 'Project Done' },
    { value: '127+', label: 'Happy Clients' },
    { value: '4.7', label: 'User Ratings' },
    { value: '4+', label: 'Years of Experience' },
  ];

  return (
    <section className="py-20 bg-cover bg-center relative" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/lovable-uploads/53486b42-3a97-4b33-9947-cc3dc4e85b5c.png')" }}>
      <div className="container mx-auto px-4 text-center z-10 relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          We generate sales, leads, and new business opportunities for our clients.
        </h2>
        <p className="text-white mb-8 max-w-3xl mx-auto">
          Achieve your sales goals with us | How to sell your digital products instantly? Visit the link below to get complete digital marketing solutions
        </p>
        <Button className="bg-[#008080] hover:bg-[#006666] text-white mb-16">
          WHATSAPP NOW
        </Button>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-black/40 backdrop-blur-sm rounded-lg p-8">
          {stats.map((stat, index) => (
            <div key={index} className="p-4 border-r last:border-r-0 border-gray-500 last:border-0">
              <h3 className="text-4xl md:text-5xl font-bold text-[#b3ff00] mb-2">{stat.value}</h3>
              <p className="text-white">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SalesStatisticsSection;
