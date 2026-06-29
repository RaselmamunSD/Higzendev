
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
    { icon: Facebook, label: 'Facebook' },
    { icon: Twitter, label: 'Twitter' },
    { icon: Linkedin, label: 'LinkedIn' },
    { icon: Instagram, label: 'Instagram' },
  ];

  return (
    <footer className="relative bg-background py-10 px-4 sm:px-6 lg:px-8">
      {/* Main footer card */}
      <div className="relative max-w-7xl mx-auto rounded-2xl overflow-hidden border border-border/40" style={{ background: 'linear-gradient(135deg, hsl(210 20% 6%) 0%, hsl(210 25% 8%) 40%, hsl(199 40% 10%) 100%)' }}>
        
        {/* Abstract blue glow art - left side */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Main blue swirl glow */}
          <div className="absolute -bottom-20 -left-10 w-[350px] h-[350px] rounded-full blur-[80px]" style={{ background: 'radial-gradient(circle, hsl(var(--primary) / 0.25) 0%, hsl(var(--primary) / 0.08) 50%, transparent 70%)' }} />
          <div className="absolute bottom-0 left-[5%] w-[200px] h-[280px] rounded-full blur-[60px] rotate-[-20deg]" style={{ background: 'radial-gradient(ellipse, hsl(var(--primary) / 0.2) 0%, transparent 70%)' }} />
          <div className="absolute -bottom-10 left-[15%] w-[150px] h-[200px] rounded-full blur-[50px] rotate-[15deg]" style={{ background: 'radial-gradient(ellipse, hsl(var(--secondary) / 0.15) 0%, transparent 70%)' }} />
          
          {/* Subtle right side glow */}
          <div className="absolute -bottom-20 right-[10%] w-[300px] h-[250px] rounded-full blur-[100px]" style={{ background: 'radial-gradient(circle, hsl(var(--primary) / 0.08) 0%, transparent 70%)' }} />
          
          {/* Watermark text */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[7rem] md:text-[10rem] font-black tracking-[0.2em] select-none whitespace-nowrap uppercase" style={{ color: 'hsl(0 0% 100% / 0.015)' }}>
            HIGZENDEV
          </div>
        </div>

        <div className="relative z-10 px-8 sm:px-12 pt-12 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Brand Column */}
            <div className="space-y-4">
              <button onClick={() => navigateToTop('/')} className="inline-block group">
                <div className="flex items-center gap-3">
                  <img
                    src="/images/higzendev-logo.png"
                    alt="HigzenDev Logo"
                    className="h-9 transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="text-base font-bold tracking-tight">
                    <span className="text-foreground">Higzen</span>
                    <span className="text-primary">Dev</span>
                  </span>
                </div>
              </button>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-[220px]">
                Innovative software solutions for businesses of all sizes.
              </p>

              {/* Social Icons */}
              <div className="flex gap-4 pt-1">
                {socials.map(({ icon: Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    <Icon size={15} strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4 tracking-wide">
                Quick Links
              </h4>
              <ul className="space-y-1.5">
                {quickLinks.map(({ label, path }) => (
                  <li key={path}>
                    <button
                      onClick={() => navigateToTop(path)}
                      className="text-muted-foreground hover:text-primary text-sm transition-colors duration-200 min-h-[36px] flex items-center"
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Services */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4 tracking-wide">
                Our Services
              </h4>
              <ul className="space-y-1.5">
                {services.map(({ label, path }) => (
                  <li key={path}>
                    <button
                      onClick={() => navigateToTop(path)}
                      className="text-muted-foreground hover:text-primary text-sm transition-colors duration-200 min-h-[36px] flex items-center"
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* More Services */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4 tracking-wide">
                More Services
              </h4>
              <ul className="space-y-1.5">
                {moreServices.map(({ label, path }) => (
                  <li key={path}>
                    <button
                      onClick={() => navigateToTop(path)}
                      className="text-muted-foreground hover:text-primary text-sm transition-colors duration-200 min-h-[36px] flex items-center"
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom copyright */}
          <div className="mt-10 pt-5 border-t border-border/20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-muted-foreground">
                © {new Date().getFullYear()} HigzenDev. All rights reserved.
              </p>
              <div className="flex gap-6">
                {[
                  { label: 'Privacy Policy', path: '/privacy-policy' },
                  { label: 'Terms & Conditions', path: '/terms-conditions' },
                  { label: 'Sitemap', path: '/sitemap' },
                ].map(({ label, path }) => (
                  <button
                    key={path}
                    onClick={() => navigateToTop(path)}
                    className="text-xs text-muted-foreground hover:text-primary transition-colors min-h-[36px] flex items-center"
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
