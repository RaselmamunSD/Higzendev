
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const navigate = useNavigate();

  const navigateToTop = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Products', path: '/products' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Blog', path: '/blog' },
    { label: 'Industries', path: '/industries' },
    { label: 'Contact Us', path: '/contact' },
    { label: 'Request Quote', path: '/request-quote' },
    { label: 'Schedule Meeting', path: '/schedule-meeting' },
  ];

  const services = [
    { label: 'Web Development', path: '/services/web-development' },
    { label: 'Mobile App Development', path: '/services/mobile-app-development' },
    { label: 'UI/UX Design', path: '/services/ui-ux-design' },
    { label: 'Cloud Solutions', path: '/services/cloud-solutions' },
    { label: 'IT Consulting', path: '/services/it-consulting' },
    { label: 'Brand Promotion', path: '/brand-promotion' },
  ];

  const moreServices = [
    { label: 'AI Development', path: '/services/ai-development' },
    { label: 'DevOps', path: '/services/devops' },
    { label: 'SRE', path: '/services/sre' },
    { label: 'Embedded Systems', path: '/services/embedded-system-design' },
    { label: 'QA Testing', path: '/services/qa-testing' },
    { label: 'Database Management', path: '/services/database-management' },
  ];

  const socials = [
    { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/share/19MBiAE2x8/' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/company/higzendev/' },
    { icon: Twitter, label: 'Twitter', href: 'https://twitter.com/' },
    { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/' },
  ];

  return (
    <footer className="relative bg-slate-100/90 dark:bg-background py-10 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-border/40">
      {/* Main footer card - Deep Midnight Cyber Blue (Distinct contrast in White Theme) */}
      <div 
        className="relative max-w-7xl mx-auto rounded-2xl overflow-hidden border border-slate-800/80 shadow-2xl" 
        style={{ background: 'linear-gradient(135deg, #070b16 0%, #0a1324 45%, #071526 100%)' }}
      >
        
        {/* Abstract blue glow art - left side */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Main blue swirl glow */}
          <div className="absolute -bottom-20 -left-10 w-[350px] h-[350px] rounded-full blur-[80px]" style={{ background: 'radial-gradient(circle, hsl(var(--primary) / 0.25) 0%, hsl(var(--primary) / 0.08) 50%, transparent 70%)' }} />
          <div className="absolute bottom-0 left-[5%] w-[200px] h-[280px] rounded-full blur-[60px] rotate-[-20deg]" style={{ background: 'radial-gradient(ellipse, hsl(var(--primary) / 0.2) 0%, transparent 70%)' }} />
          <div className="absolute -bottom-10 left-[15%] w-[150px] h-[200px] rounded-full blur-[50px] rotate-[15deg]" style={{ background: 'radial-gradient(ellipse, hsl(var(--secondary) / 0.15) 0%, transparent 70%)' }} />
          
          {/* Subtle right side glow */}
          <div className="absolute -bottom-20 right-[10%] w-[300px] h-[250px] rounded-full blur-[100px]" style={{ background: 'radial-gradient(circle, hsl(var(--primary) / 0.08) 0%, transparent 70%)' }} />
          
          {/* Watermark text */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[7rem] md:text-[10rem] font-black tracking-[0.2em] select-none whitespace-nowrap uppercase" style={{ color: 'rgba(255, 255, 255, 0.025)' }}>
            HIGZENDEV
          </div>
        </div>

        <div className="relative z-10 px-5 sm:px-8 lg:px-12 pt-12 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Brand Column */}
            <div className="space-y-4">
              <button onClick={() => navigateToTop('/')} className="inline-block group">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-white p-1 flex items-center justify-center shadow-md">
                    <img
                      src="/images/higzendev-logo.webp"
                      alt="HigzenDev Logo"
                      className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <span className="text-lg font-bold tracking-tight">
                    <span className="text-white">Higzen</span>
                    <span className="text-primary">Dev</span>
                  </span>
                </div>
              </button>
              <p className="text-slate-400 text-sm leading-relaxed max-w-[220px]">
                Innovative software solutions for businesses of all sizes.
              </p>

              {/* Direct Phone & WhatsApp */}
              <div className="space-y-1.5 pt-1 text-xs">
                <a 
                  href="tel:+8801870966718" 
                  className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  <span className="text-primary font-bold">📞</span>
                  <span>+880 1870-966718</span>
                </a>
                <a 
                  href="https://wa.me/8801870966718" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  <span className="text-emerald-400 font-bold">💬</span>
                  <span>WhatsApp: +880 1870-966718</span>
                </a>
                <div className="flex items-start gap-2 text-slate-300 pt-0.5">
                  <span className="text-primary font-bold">📍</span>
                  <span className="leading-snug">
                    Rupnagor Abashik, Road -13, House -27, Floor -07, Mirpur-2, Dhaka
                  </span>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4 pt-1">
                {socials.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 hover:scale-110"
                  >
                    <Icon size={15} strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-bold text-white mb-4 tracking-wider uppercase">
                Quick Links
              </h4>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-1 md:block md:space-y-1.5">
                {quickLinks.map(({ label, path }) => (
                  <li key={path}>
                    <button
                      onClick={() => navigateToTop(path)}
                      className="text-slate-300 hover:text-cyan-400 text-sm font-medium transition-colors duration-200 min-h-[36px] flex items-center text-left"
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Services */}
            <div>
              <h4 className="text-sm font-bold text-white mb-4 tracking-wider uppercase">
                Our Services
              </h4>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-1 md:block md:space-y-1.5">
                {services.map(({ label, path }) => (
                  <li key={path}>
                    <button
                      onClick={() => navigateToTop(path)}
                      className="text-slate-300 hover:text-cyan-400 text-sm font-medium transition-colors duration-200 min-h-[36px] flex items-center text-left"
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* More Services */}
            <div>
              <h4 className="text-sm font-bold text-white mb-4 tracking-wider uppercase">
                More Services
              </h4>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-1 md:block md:space-y-1.5">
                {moreServices.map(({ label, path }) => (
                  <li key={path}>
                    <button
                      onClick={() => navigateToTop(path)}
                      className="text-slate-300 hover:text-cyan-400 text-sm font-medium transition-colors duration-200 min-h-[36px] flex items-center text-left"
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom copyright */}
          <div className="mt-10 pt-5 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-slate-400">
                © {new Date().getFullYear()} HigzenDev. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6">
                {[
                  { label: 'Privacy Policy', path: '/privacy-policy' },
                  { label: 'Terms & Conditions', path: '/terms-conditions' },
                  { label: 'Sitemap', path: '/sitemap' },
                ].map(({ label, path }) => (
                  <button
                    key={path}
                    onClick={() => navigateToTop(path)}
                    className="text-xs text-slate-300 hover:text-cyan-400 transition-colors min-h-[36px] flex items-center"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
