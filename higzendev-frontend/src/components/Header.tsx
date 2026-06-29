
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Home, Info, Briefcase, Package, PenLine, Factory, FileText, CalendarDays, Users, BookOpen, Rocket, UserCircle } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleAbout = () => setIsAboutOpen(!isAboutOpen);

  const navigateToTop = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
    setIsAboutOpen(false);
  };

  return (
    <header 
      className={`sticky top-0 z-50 text-white border-b border-border/30 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#1a1a1a]/95 backdrop-blur-lg py-2 shadow-lg' 
          : 'bg-[#1a1a1a] backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/images/higzendev-logo.png" 
              alt="HigzenDev Logo" 
              className={`mr-2 transition-all duration-300 ${isScrolled ? 'h-9' : 'h-11'}`}
            />
            <span className={`font-bold transition-all duration-300 ${isScrolled ? 'text-xl' : 'text-2xl'}`}>
              <span className="text-white">Higzen</span>
              <span className="text-blue-500">Dev</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-5 ml-16">
          <button onClick={() => navigateToTop('/')} className={`hover:text-softgreen transition-all duration-300 font-semibold px-2 py-1 ${isScrolled ? 'text-sm' : 'text-base'}`}>Home</button>
          
          {/* About Dropdown */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                 <NavigationMenuTrigger className={`bg-transparent hover:bg-softgreen hover:text-white focus:bg-softgreen focus:text-white data-[state=open]:bg-softgreen data-[state=open]:text-white font-semibold border-none px-2 py-1 rounded-md transition-all duration-300 ${isScrolled ? 'text-sm' : 'text-base'}`}>
                   <span className="flex items-center">
                     About <ChevronDown className="ml-1 h-3 w-3" />
                   </span>
                 </NavigationMenuTrigger>
                 <NavigationMenuContent className="min-w-[200px] z-[100]">
                   <ul className="p-3 space-y-2">
                     <li>
                       <button onClick={() => navigateToTop('/about')} className="block w-full text-left px-4 py-2.5 text-gray-200 hover:bg-primary/90 hover:text-white rounded-lg transition-all duration-300 font-medium hover:shadow-glow hover:scale-[1.02] text-sm">
                         About Us
                       </button>
                     </li>
                     <li>
                       <button onClick={() => navigateToTop('/about/story')} className="block w-full text-left px-4 py-2.5 text-gray-200 hover:bg-primary/90 hover:text-white rounded-lg transition-all duration-300 font-medium hover:shadow-glow hover:scale-[1.02] text-sm">
                         Our Story
                       </button>
                     </li>
                     <li>
                       <button onClick={() => navigateToTop('/about/founder')} className="block w-full text-left px-4 py-2.5 text-gray-200 hover:bg-primary/90 hover:text-white rounded-lg transition-all duration-300 font-medium hover:shadow-glow hover:scale-[1.02] text-sm">
                         About Founder
                       </button>
                     </li>
                      <li>
                        <button onClick={() => navigateToTop('/about/team')} className="block w-full text-left px-4 py-2.5 text-gray-200 hover:bg-primary/90 hover:text-white rounded-lg transition-all duration-300 font-medium hover:shadow-glow hover:scale-[1.02] text-sm">
                          Meet The Team
                        </button>
                      </li>
                      <li>
                        <button onClick={() => navigateToTop('/careers')} className="block w-full text-left px-4 py-2.5 text-gray-200 hover:bg-primary/90 hover:text-white rounded-lg transition-all duration-300 font-medium hover:shadow-glow hover:scale-[1.02] text-sm">
                          Careers
                        </button>
                      </li>
                    </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <button onClick={() => navigateToTop('/services')} className={`hover:text-softgreen transition-all duration-300 font-semibold px-2 py-1 ${isScrolled ? 'text-sm' : 'text-base'}`}>Services</button>
          <button onClick={() => navigateToTop('/products')} className={`hover:text-softgreen transition-all duration-300 font-semibold px-2 py-1 ${isScrolled ? 'text-sm' : 'text-base'}`}>Products</button>
          <button onClick={() => navigateToTop('/blog')} className={`hover:text-softgreen transition-all duration-300 font-semibold px-2 py-1 ${isScrolled ? 'text-sm' : 'text-base'}`}>Blog</button>
          <button onClick={() => navigateToTop('/about/team')} className={`hover:text-softgreen transition-all duration-300 font-semibold px-2 py-1 ${isScrolled ? 'text-sm' : 'text-base'}`}>Team</button>
          
          <button onClick={() => navigateToTop('/industries')} className={`hover:bg-softgreen hover:text-white transition-all duration-300 font-semibold px-3 py-1.5 rounded-md border border-transparent hover:border-softgreen ${isScrolled ? 'text-sm' : 'text-base'}`}>
            Industries
          </button>
          
          <div className="flex items-center space-x-2 ml-3">
            <Button 
              onClick={() => navigateToTop('/request-quote')} 
              className={`bg-softgreen hover:bg-softgreen/80 text-white font-medium rounded-md transition-all duration-300 hover:scale-105 ${
                isScrolled ? 'px-3 py-1.5 h-8 text-xs' : 'px-4 py-2 h-9 text-sm'
              }`}
            >
              Request Quote
            </Button>
            <Button 
              onClick={() => navigateToTop('/schedule-meeting')} 
              className={`bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] hover:from-[#5558e3] hover:to-[#7c4de7] text-white font-medium rounded-full transition-all duration-300 hover:scale-105 shadow-lg ${
                isScrolled ? 'px-3 py-1.5 h-8 text-xs' : 'px-4 py-2 h-9 text-sm'
              }`}
            >
              Schedule Meeting
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Button - Touch-friendly 44px target */}
        <div className="lg:hidden">
          <button 
            onClick={toggleMenu} 
            className="text-white p-3 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg hover:bg-primary/10 transition-colors"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation - Modern glassmorphism design */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gradient-to-b from-[#0d1117] to-[#161b22] border-t border-white/5 absolute w-full top-full left-0 shadow-2xl z-50 max-h-[calc(100vh-80px)] overflow-y-auto">
          <nav className="flex flex-col p-5 gap-2">
            {/* Nav Items with icons */}
            <button 
              onClick={() => navigateToTop('/')} 
              className="flex items-center gap-3.5 text-gray-200 hover:text-white transition-all duration-300 font-medium min-h-[50px] px-4 rounded-xl hover:bg-white/[0.06] text-[15px] group"
            >
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Home className="h-[18px] w-[18px] text-primary" />
              </div>
              Home
            </button>
            
            {/* About Section with Dropdown */}
            <div>
              <button 
                onClick={toggleAbout} 
                className="flex items-center gap-3.5 text-gray-200 hover:text-white transition-all duration-300 font-medium min-h-[50px] px-4 rounded-xl hover:bg-white/[0.06] w-full text-[15px] group"
              >
                <div className="w-9 h-9 rounded-lg bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                  <Info className="h-[18px] w-[18px] text-cyan-400" />
                </div>
                <span className="flex-1 text-left">About</span>
                <ChevronDown className={`h-5 w-5 text-gray-300 transition-transform duration-300 ${isAboutOpen ? 'rotate-180' : ''}`} strokeWidth={3} />
              </button>
              
              {isAboutOpen && (
                <div className="ml-[52px] mt-1 mb-1 space-y-0.5 border-l-2 border-primary/20 pl-4 animate-in slide-in-from-top-2">
                  <button onClick={() => navigateToTop('/about')} className="flex items-center gap-2.5 text-gray-400 hover:text-white transition-all font-medium min-h-[42px] px-3 hover:bg-white/[0.04] rounded-lg w-full text-sm">
                    <Users className="h-4 w-4 text-primary/60" />About Us
                  </button>
                  <button onClick={() => navigateToTop('/about/story')} className="flex items-center gap-2.5 text-gray-400 hover:text-white transition-all font-medium min-h-[42px] px-3 hover:bg-white/[0.04] rounded-lg w-full text-sm">
                    <BookOpen className="h-4 w-4 text-primary/60" />Our Story
                  </button>
                  <button onClick={() => navigateToTop('/about/founder')} className="flex items-center gap-2.5 text-gray-400 hover:text-white transition-all font-medium min-h-[42px] px-3 hover:bg-white/[0.04] rounded-lg w-full text-sm">
                    <UserCircle className="h-4 w-4 text-primary/60" />About Founder
                  </button>
                  <button onClick={() => navigateToTop('/about/team')} className="flex items-center gap-2.5 text-gray-400 hover:text-white transition-all font-medium min-h-[42px] px-3 hover:bg-white/[0.04] rounded-lg w-full text-sm">
                    <Users className="h-4 w-4 text-primary/60" />Meet The Team
                  </button>
                  <button onClick={() => navigateToTop('/careers')} className="flex items-center gap-2.5 text-gray-400 hover:text-white transition-all font-medium min-h-[42px] px-3 hover:bg-white/[0.04] rounded-lg w-full text-sm">
                    <Rocket className="h-4 w-4 text-primary/60" />Careers
                  </button>
                </div>
              )}
            </div>
            
            <button onClick={() => navigateToTop('/services')} className="flex items-center gap-3.5 text-gray-200 hover:text-white transition-all duration-300 font-medium min-h-[50px] px-4 rounded-xl hover:bg-white/[0.06] text-[15px] group">
              <div className="w-9 h-9 rounded-lg bg-violet-500/10 flex items-center justify-center group-hover:bg-violet-500/20 transition-colors">
                <Briefcase className="h-[18px] w-[18px] text-violet-400" />
              </div>
              Services
            </button>
            
            <button onClick={() => navigateToTop('/products')} className="flex items-center gap-3.5 text-gray-200 hover:text-white transition-all duration-300 font-medium min-h-[50px] px-4 rounded-xl hover:bg-white/[0.06] text-[15px] group">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                <Package className="h-[18px] w-[18px] text-emerald-400" />
              </div>
              Products
            </button>
            
            <button onClick={() => navigateToTop('/blog')} className="flex items-center gap-3.5 text-gray-200 hover:text-white transition-all duration-300 font-medium min-h-[50px] px-4 rounded-xl hover:bg-white/[0.06] text-[15px] group">
              <div className="w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                <PenLine className="h-[18px] w-[18px] text-amber-400" />
              </div>
              Blog
            </button>

            <button onClick={() => navigateToTop('/about/team')} className="flex items-center gap-3.5 text-gray-200 hover:text-white transition-all duration-300 font-medium min-h-[50px] px-4 rounded-xl hover:bg-white/[0.06] text-[15px] group">
              <div className="w-9 h-9 rounded-lg bg-sky-500/10 flex items-center justify-center group-hover:bg-sky-500/20 transition-colors">
                <Users className="h-[18px] w-[18px] text-sky-400" />
              </div>
              Team
            </button>
            
            <button onClick={() => navigateToTop('/industries')} className="flex items-center gap-3.5 text-gray-200 hover:text-white transition-all duration-300 font-medium min-h-[50px] px-4 rounded-xl hover:bg-white/[0.06] text-[15px] group">
              <div className="w-9 h-9 rounded-lg bg-rose-500/10 flex items-center justify-center group-hover:bg-rose-500/20 transition-colors">
                <Factory className="h-[18px] w-[18px] text-rose-400" />
              </div>
              Industries
            </button>
            
            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-3" />
            
            {/* Action Buttons - matching nav item style */}
            <div className="space-y-2">
              <button 
                onClick={() => navigateToTop('/request-quote')} 
                className="flex items-center gap-3.5 text-gray-200 hover:text-white transition-all duration-300 font-medium min-h-[50px] px-4 rounded-xl hover:bg-white/[0.06] text-[15px] group w-full"
              >
                <div className="w-9 h-9 rounded-lg bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                  <FileText className="h-[18px] w-[18px] text-cyan-400" />
                </div>
                Request Quote
              </button>
              <button 
                onClick={() => navigateToTop('/schedule-meeting')} 
                className="flex items-center gap-3.5 text-gray-200 hover:text-white transition-all duration-300 font-medium min-h-[50px] px-4 rounded-xl hover:bg-white/[0.06] text-[15px] group w-full"
              >
                <div className="w-9 h-9 rounded-lg bg-violet-500/10 flex items-center justify-center group-hover:bg-violet-500/20 transition-colors">
                  <CalendarDays className="h-[18px] w-[18px] text-violet-400" />
                </div>
                Schedule Meeting
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
