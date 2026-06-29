
import React from 'react';
import { 
  Building2, ShoppingCart, Smartphone, Building, MonitorSmartphone, Heart, Car,
  Camera, Briefcase, Rocket, Glasses, Scale, HeartHandshake, Landmark, Dumbbell, 
  Gamepad2, Shirt, Zap, PlaneTakeoff, Truck 
} from 'lucide-react';

interface IndustryCardProps {
  icon: React.ReactNode;
  name: string;
  bgColor: string;
}

const IndustryCard = ({ icon, name, bgColor }: IndustryCardProps) => {
  return (
    <div className={`${bgColor} rounded-xl p-4 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 border border-white/10`}>
      <div className="mb-2 text-gray-800">
        {icon}
      </div>
      <span className="text-sm font-medium text-gray-800">{name}</span>
    </div>
  );
};

const IndustryExpertiseSection = () => {
  const industries = [
    { icon: <Building2 size={24} />, name: "Finance & Banking", bgColor: "bg-gradient-to-br from-pink-200 to-pink-300" },
    { icon: <ShoppingCart size={24} />, name: "E-commerce", bgColor: "bg-gradient-to-br from-green-200 to-green-300" },
    { icon: <Smartphone size={24} />, name: "Telecom", bgColor: "bg-gradient-to-br from-purple-200 to-purple-300" },
    { icon: <Building size={24} />, name: "Real Estate", bgColor: "bg-gradient-to-br from-blue-200 to-blue-300" },
    { icon: <MonitorSmartphone size={24} />, name: "Software", bgColor: "bg-gradient-to-br from-yellow-200 to-yellow-300" },
    { icon: <Heart size={24} />, name: "Health & Fitness", bgColor: "bg-gradient-to-br from-emerald-200 to-emerald-300" },
    { icon: <Car size={24} />, name: "Automotive", bgColor: "bg-gradient-to-br from-indigo-200 to-indigo-300" },
    { icon: <Camera size={24} />, name: "Photo & Video", bgColor: "bg-gradient-to-br from-orange-200 to-orange-300" },
    { icon: <Briefcase size={24} />, name: "Business", bgColor: "bg-gradient-to-br from-amber-200 to-amber-300" },
    { icon: <Rocket size={24} />, name: "Startup", bgColor: "bg-gradient-to-br from-cyan-200 to-cyan-300" },
    { icon: <Glasses size={24} />, name: "AR/VR", bgColor: "bg-gradient-to-br from-violet-200 to-violet-300" },
    { icon: <Scale size={24} />, name: "Legal Services", bgColor: "bg-gradient-to-br from-slate-200 to-slate-300" },
    { icon: <HeartHandshake size={24} />, name: "Non-profit", bgColor: "bg-gradient-to-br from-rose-200 to-rose-300" },
    { icon: <Landmark size={24} />, name: "Govt. & Public Sector", bgColor: "bg-gradient-to-br from-teal-200 to-teal-300" },
    { icon: <Dumbbell size={24} />, name: "Sports & Fitness", bgColor: "bg-gradient-to-br from-lime-200 to-lime-300" },
    { icon: <Gamepad2 size={24} />, name: "Gaming", bgColor: "bg-gradient-to-br from-fuchsia-200 to-fuchsia-300" },
    { icon: <Shirt size={24} />, name: "Fashion & Apparel", bgColor: "bg-gradient-to-br from-pink-200 to-rose-300" },
    { icon: <Zap size={24} />, name: "Energy & Utilities", bgColor: "bg-gradient-to-br from-yellow-200 to-orange-300" },
    { icon: <PlaneTakeoff size={24} />, name: "Agriculture", bgColor: "bg-gradient-to-br from-green-200 to-lime-300" },
    { icon: <Truck size={24} />, name: "Logistics", bgColor: "bg-gradient-to-br from-blue-200 to-indigo-300" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Our Industry Expertises
        </h2>
        <p className="text-center max-w-4xl mx-auto mb-12">
          Our deep understanding of diverse industries empowers us to design customized software solutions. 
          Let our expertise be the catalyst for your next triumph.
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {industries.slice(0, 7).map((industry, index) => (
            <IndustryCard 
              key={index} 
              icon={industry.icon} 
              name={industry.name} 
              bgColor={industry.bgColor} 
            />
          ))}
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4">
          {industries.slice(7, 13).map((industry, index) => (
            <IndustryCard 
              key={index + 7} 
              icon={industry.icon} 
              name={industry.name} 
              bgColor={industry.bgColor} 
            />
          ))}
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 mt-4">
          {industries.slice(13, 20).map((industry, index) => (
            <IndustryCard 
              key={index + 13} 
              icon={industry.icon} 
              name={industry.name} 
              bgColor={industry.bgColor} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryExpertiseSection;
