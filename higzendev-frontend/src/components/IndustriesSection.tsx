import React from 'react';
import { 
  Building2, HeartPulse, Film, HeartHandshake, 
  Store, UtensilsCrossed, ShoppingCart, GraduationCap, 
  Ticket, Wallet, Home, Plane, CheckCircle 
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const IndustriesSection = () => {
  const industries = [
    { name: 'Corporate', icon: Building2, desc: 'Enterprise solutions and corporate portals', color: 'text-blue-500', bg: 'bg-blue-500/10', border: 'hover:border-blue-500/50' },
    { name: 'Healthcare', icon: HeartPulse, desc: 'Medical software and patient management', color: 'text-rose-500', bg: 'bg-rose-500/10', border: 'hover:border-rose-500/50' },
    { name: 'Media & Ent.', icon: Film, desc: 'Streaming platforms and media distribution', color: 'text-purple-500', bg: 'bg-purple-500/10', border: 'hover:border-purple-500/50' },
    { name: 'Nonprofit', icon: HeartHandshake, desc: 'Donation systems and volunteer portals', color: 'text-emerald-500', bg: 'bg-emerald-500/10', border: 'hover:border-emerald-500/50' },
    { name: 'B2B & B2C', icon: Store, desc: 'Marketplaces and business portals', color: 'text-orange-500', bg: 'bg-orange-500/10', border: 'hover:border-orange-500/50' },
    { name: 'Food & Dining', icon: UtensilsCrossed, desc: 'Restaurant management and delivery apps', color: 'text-red-500', bg: 'bg-red-500/10', border: 'hover:border-red-500/50' },
    { name: 'eCommerce', icon: ShoppingCart, desc: 'Online stores and retail solutions', color: 'text-cyan-500', bg: 'bg-cyan-500/10', border: 'hover:border-cyan-500/50' },
    { name: 'Education', icon: GraduationCap, desc: 'E-learning platforms and LMS', color: 'text-yellow-500', bg: 'bg-yellow-500/10', border: 'hover:border-yellow-500/50' },
    { name: 'Events', icon: Ticket, desc: 'Ticketing and event management', color: 'text-pink-500', bg: 'bg-pink-500/10', border: 'hover:border-pink-500/50' },
    { name: 'Finance', icon: Wallet, desc: 'Fintech apps and banking solutions', color: 'text-green-500', bg: 'bg-green-500/10', border: 'hover:border-green-500/50' },
    { name: 'Real Estate', icon: Home, desc: 'Property listings and agency tools', color: 'text-indigo-500', bg: 'bg-indigo-500/10', border: 'hover:border-indigo-500/50' },
    { name: 'Travel', icon: Plane, desc: 'Booking systems and travel portals', color: 'text-sky-500', bg: 'bg-sky-500/10', border: 'hover:border-sky-500/50' }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">Domains We Master</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Industries We Serve
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We transform the digital ecosystem across diverse industries with tailored, cutting-edge technology solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <Card key={i} className={`group bg-card/50 backdrop-blur-sm border-border/50 transition-all duration-300 hover:shadow-glow hover:-translate-y-1 ${ind.border}`}>
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto rounded-2xl ${ind.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={ind.color} size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">{ind.name}</h3>
                  <p className="text-sm text-muted-foreground">{ind.desc}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-primary/10 via-card to-primary/5 rounded-2xl p-8 md:p-12 border border-primary/10 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-foreground">Why Partner With Us?</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "Trusted global provider with 13+ years of experience",
                "Over 1850+ satisfied clients worldwide",
                "Experienced team of IT professionals",
                "Customized solutions to meet your specific needs"
              ].map((reason, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-background/50 p-4 rounded-xl border border-border/50 hover:border-primary/30 transition-colors">
                  <div className="bg-primary/20 p-2 rounded-full">
                    <CheckCircle className="text-primary flex-shrink-0" size={20} />
                  </div>
                  <span className="text-foreground font-medium">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
