import React from 'react';
import { MapPin, Phone, Mail, Navigation, Clock, Globe2 } from 'lucide-react';

const LocationSection = () => {
  const address = "Sel Rose N Dale, 116 Kazi Nazrul Islam Ave, Dhaka – 1205, Bangladesh";
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  const embedUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

  const contactCards = [
    {
      icon: MapPin,
      title: 'Our Address',
      lines: ['Sel Rose N Dale', '116 Kazi Nazrul Islam Ave', 'Dhaka – 1205, Bangladesh'],
      gradient: 'from-cyan-500/20 to-blue-500/20',
      iconColor: 'text-cyan-400',
      ring: 'ring-cyan-400/30',
    },
    {
      icon: Phone,
      title: 'Call Us',
      lines: ['01870966718', 'Mon – Sat, 9:00 – 18:00'],
      gradient: 'from-violet-500/20 to-fuchsia-500/20',
      iconColor: 'text-violet-400',
      ring: 'ring-violet-400/30',
    },
    {
      icon: Mail,
      title: 'Email Us',
      lines: ['contact@higzendev.com', 'Reply within 24 hours'],
      gradient: 'from-emerald-500/20 to-teal-500/20',
      iconColor: 'text-emerald-400',
      ring: 'ring-emerald-400/30',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[#0b0f17] via-[#0f1420] to-[#0b0f17] relative overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <Globe2 className="h-4 w-4 text-cyan-400" />
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-300">Our Location</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-5 bg-gradient-to-r from-white via-cyan-200 to-primary bg-clip-text text-transparent">
            Find Us
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Visit our office or get in touch — we're here to help you transform your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch">
          {/* Map */}
          <div className="group relative min-h-[480px]">
            <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-br from-primary via-cyan-500 to-violet-500 opacity-50 group-hover:opacity-90 blur-md transition duration-500"></div>
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#0d1117] w-full h-full min-h-[480px]">
              <iframe
                src={embedUrl}
                title="HigzenDev location map"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0, filter: 'invert(0.92) hue-rotate(180deg)' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Floating action */}
              <button
                onClick={() => window.open(mapsUrl, '_blank')}
                className="absolute bottom-5 left-5 right-5 sm:right-auto bg-gradient-to-r from-primary to-cyan-500 text-white px-6 py-3.5 rounded-xl font-semibold shadow-[0_10px_30px_-10px_hsl(var(--primary)/0.6)] hover:shadow-[0_15px_40px_-10px_hsl(var(--primary)/0.8)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 backdrop-blur-md z-10"
              >
                <Navigation className="h-4 w-4" />
                Get Directions
              </button>
            </div>
          </div>

          {/* Contact cards */}
          <div className="space-y-4">
            {contactCards.map((c, i) => (
              <div key={i} className="group relative">
                <div className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-br ${c.gradient} opacity-0 group-hover:opacity-100 blur-sm transition duration-500`}></div>
                <div className="relative flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/10 backdrop-blur-sm hover:border-white/20 hover:-translate-y-1 transition-all duration-300">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${c.gradient} flex items-center justify-center ring-1 ${c.ring}`}>
                    <c.icon className={`h-5 w-5 ${c.iconColor}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-white mb-1.5">{c.title}</h3>
                    {c.lines.map((line, idx) => (
                      <p key={idx} className={`text-sm leading-relaxed ${idx === 0 ? 'text-gray-200' : 'text-gray-400'}`}>
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Hours mini card */}
            <div className="relative p-5 rounded-2xl bg-gradient-to-br from-primary/10 via-cyan-500/5 to-violet-500/10 border border-white/10">
              <div className="flex items-center gap-3 mb-2">
                <Clock className="h-4 w-4 text-cyan-400" />
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-300">Business Hours</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Mon – Sat</span>
                <span className="text-white font-semibold">9:00 AM – 6:00 PM</span>
              </div>
              <div className="flex items-center justify-between text-sm mt-1">
                <span className="text-gray-400">Sunday</span>
                <span className="text-rose-300 font-semibold">Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
