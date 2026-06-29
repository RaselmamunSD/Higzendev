
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  Target, 
  Shield, 
  Scale, 
  TrendingUp, 
  Lightbulb, 
  Users, 
  Award, 
  Building,
  Sparkles,
  Zap
} from 'lucide-react';

const Story = () => {
  useEffect(() => {
    // Add AOS-like scroll animations
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
    });

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Our Story - Hero Section */}
        <section className="relative bg-[#0D1B2A] text-white py-24 px-8 overflow-hidden">
          {/* Wave Overlay Background */}
          <div className="absolute inset-0 opacity-10">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full">
              <path d="M0,0V120H1200V0C900,60 300,60 0,0Z" fill="currentColor"/>
            </svg>
          </div>
          
          <div className="relative max-w-6xl mx-auto text-center scroll-animate">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-[#1E90FF] to-[#00C896] bg-clip-text text-transparent">
              Our Story
            </h1>
            <p className="text-xl md:text-2xl text-[#A0AEC0] max-w-4xl mx-auto leading-relaxed">
              A journey of innovation, growth, and impact — from idea to global reach. 
              We transform businesses through cutting-edge technology and creative solutions.
            </p>
            <div className="mt-12 flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-[#1E90FF] to-[#00C896] rounded-full"></div>
            </div>
          </div>
        </section>

        {/* Brand Identity and Elements */}
        <section className="bg-[#1A1A1A] py-20 px-8">
          <div className="max-w-7xl mx-auto scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center bg-gradient-to-r from-[#1E90FF] to-[#00C896] bg-clip-text text-transparent">
              Brand Identity and Elements
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group bg-gradient-to-br from-[#2A2A2A] to-[#1E1E1E] p-8 rounded-2xl hover:scale-105 hover:shadow-2xl transition-all duration-300 hover:border-2 hover:border-[#00C896] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1E90FF]/10 to-[#00C896]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 text-center text-[#00C896]">
                    Explain the tagline: "The Soul of Tech"? What message does it convey?
                  </h3>
                  <p className="text-[#F5F7FA] leading-relaxed">
                    The tagline "The Soul of Tech" communicates TechWave's commitment to infusing 
                    technology with creativity, humanity, and depth. It encapsulates the company's belief that 
                    technology is not just a tool but a medium through which businesses can express 
                    themselves and connect with their audiences profoundly.
                  </p>
                </div>
              </div>
              
              <div className="group bg-gradient-to-br from-[#2A2A2A] to-[#1E1E1E] p-8 rounded-2xl hover:scale-105 hover:shadow-2xl transition-all duration-300 hover:border-2 hover:border-[#1E90FF] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1E90FF]/10 to-[#00C896]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 text-center text-[#1E90FF]">
                    What symbolism is embedded in the logo, and how does it represent the brand?
                  </h3>
                  <p className="text-[#F5F7FA] leading-relaxed">
                    Our logo draws inspiration from modern technology platforms, reflecting one of our core 
                    strengths. The logo's color palette is carefully selected to represent our brand's identity 
                    and values - innovation, reliability, and growth.
                  </p>
                </div>
              </div>
              
              <div className="group bg-gradient-to-br from-[#2A2A2A] to-[#1E1E1E] p-8 rounded-2xl hover:scale-105 hover:shadow-2xl transition-all duration-300 hover:border-2 hover:border-purple-400 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-[#00C896]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 text-center text-purple-400">
                    Why was the ROBOTO and how does it maintain visual consistency?
                  </h3>
                  <p className="text-[#F5F7FA] leading-relaxed">
                    We intended to use a clear, versatile font that supports all platforms. We went with 
                    ROBOTO, a popular Google font that's used in Google's logo now.
                    
                    We chose Roboto as our primary font due to its high readability and compatibility across 
                    all platforms, ensuring seamless loading. In addition to the font choice, we chose vibrant 
                    green as our main color. This color symbolizes freshness and naturalness and provides a 
                    soothing effect to the eyes.
                  </p>
                </div>
              </div>
              
              <div className="group bg-gradient-to-br from-[#2A2A2A] to-[#1E1E1E] p-8 rounded-2xl hover:scale-105 hover:shadow-2xl transition-all duration-300 hover:border-2 hover:border-yellow-400 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-[#00C896]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 text-center text-yellow-400">
                    The Importance of the brand colors: Green, Orange, Red, and Violet colors
                  </h3>
                  <p className="text-[#F5F7FA] leading-relaxed">
                    At first, our core strength was technology, and technology platforms inspired us. All four colors, 
                    Green, Orange, Red, and Violet, are present in our logo but in a different approach. The 
                    4 Directional Arrow symbolizes that we work on all verticals and worldwide. The www symbolizes a 
                    website address, which is the starting point of any company's digital presence. Most of 
                    our services are website-centric.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* The Glorious Story Section */}
        <section className="bg-gradient-to-br from-[#0D1117] to-[#1A1A1A] py-20 px-8">
          <div className="max-w-7xl mx-auto scroll-animate">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-[#00C896] to-[#1E90FF] bg-clip-text text-transparent">
                  The Glorious Story of TechWave
                </h2>
                <p className="text-lg text-[#A0AEC0] leading-relaxed">
                  TechWave stands apart as a dynamic B2B-focused agency, renowned for delivering 
                  comprehensive, innovative digital solutions tailored specifically to the evolving needs of 
                  businesses. We help web and software development agencies grow faster by reducing 
                  their operational and development costs, improving work efficiency, and meeting 
                  deadlines with efficient time management. Our diverse service portfolio includes high-
                  quality Website Development, advanced Web and Mobile Application Development, 
                  robust Software Solutions, strategic SEO services, and professional Audio-Video Editing, 
                  making us a versatile, all-in-one partner for companies seeking growth and digital 
                  excellence.
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="grid grid-cols-3 gap-3">
                  <img src="/lovable-uploads/53486b42-3a97-4b33-9947-cc3dc4e85b5c.png" alt="Team images" className="rounded-xl w-full h-32 object-cover transform rotate-3 hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-[#00C896]" />
                  <img src="/lovable-uploads/7dee89d9-7ad3-4f44-8567-2fab5c93a862.png" alt="Team images" className="rounded-xl w-full h-32 object-cover -rotate-2 hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-[#1E90FF]" />
                  <img src="/lovable-uploads/53486b42-3a97-4b33-9947-cc3dc4e85b5c.png" alt="Team images" className="rounded-xl w-full h-32 object-cover rotate-1 hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-purple-400" />
                  <img src="/lovable-uploads/7dee89d9-7ad3-4f44-8567-2fab5c93a862.png" alt="Team images" className="rounded-xl w-full h-32 object-cover -rotate-3 hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-[#00C896]" />
                  <img src="/lovable-uploads/53486b42-3a97-4b33-9947-cc3dc4e85b5c.png" alt="Team images" className="rounded-xl w-full h-32 object-cover rotate-2 hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-[#1E90FF]" />
                  <img src="/lovable-uploads/7dee89d9-7ad3-4f44-8567-2fab5c93a862.png" alt="Team images" className="rounded-xl w-full h-32 object-cover -rotate-1 hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-yellow-400" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Birth of a Concept: Early Beginnings */}
        <section className="bg-gradient-to-br from-[#2D1B69] via-[#1E1B3A] to-[#0D1117] py-20 px-8">
          <div className="max-w-7xl mx-auto scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
              The Birth of a Concept: Early Beginnings
            </h2>
            
            {/* Timeline Cards */}
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#1E90FF] to-[#00C896]"></div>
              
              <div className="space-y-16">
                <div className="flex items-center justify-between">
                  <div className="w-5/12"></div>
                  <div className="w-2/12 flex justify-center">
                    <div className="w-6 h-6 bg-[#1E90FF] rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-5/12">
                    <div className="bg-gradient-to-r from-[#1E1E1E] to-[#2A2A2A] p-8 rounded-2xl hover:scale-105 transition-all duration-300 border border-[#1E90FF]/30">
                      <h3 className="text-2xl font-bold text-[#1E90FF] mb-4">2018 - The Spark</h3>
                      <p className="text-[#F5F7FA]">
                        Started as a freelance web developer with a vision to transform how businesses approach technology. 
                        Working remotely with a small but dedicated team.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="w-5/12">
                    <div className="bg-gradient-to-l from-[#1E1E1E] to-[#2A2A2A] p-8 rounded-2xl hover:scale-105 transition-all duration-300 border border-[#00C896]/30">
                      <h3 className="text-2xl font-bold text-[#00C896] mb-4">2019 - First Growth</h3>
                      <p className="text-[#F5F7FA]">
                        Expanding services and building stronger client relationships. 
                        The demand for quality work began to exceed expectations.
                      </p>
                    </div>
                  </div>
                  <div className="w-2/12 flex justify-center">
                    <div className="w-6 h-6 bg-[#00C896] rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-5/12"></div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="w-5/12"></div>
                  <div className="w-2/12 flex justify-center">
                    <div className="w-6 h-6 bg-gradient-to-r from-[#1E90FF] to-[#00C896] rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-5/12">
                    <div className="bg-gradient-to-r from-[#1E1E1E] to-[#2A2A2A] p-8 rounded-2xl hover:scale-105 transition-all duration-300 border border-purple-400/30">
                      <h3 className="text-2xl font-bold text-purple-400 mb-4">2020 - Transformation</h3>
                      <p className="text-[#F5F7FA]">
                        The pivotal transition from freelancer to company founder. 
                        TechWave was officially born with a mission to innovate.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* A Sister Company Formed (2018) */}
        <section className="relative bg-gradient-to-br from-[#0D4A2B] via-[#1A5F3F] to-[#0D1117] py-20 px-8 overflow-hidden">
          {/* Circuit Pattern Background */}
          <div className="absolute inset-0 opacity-5">
            <svg width="60" height="60" viewBox="0 0 60 60" className="w-full h-full">
              <defs>
                <pattern id="circuit" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                  <circle cx="10" cy="10" r="2" fill="currentColor"/>
                  <circle cx="50" cy="50" r="2" fill="currentColor"/>
                  <path d="M10,10 L50,10 L50,50" stroke="currentColor" strokeWidth="1" fill="none"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#circuit)"/>
            </svg>
          </div>

          <div className="relative max-w-6xl mx-auto scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
              A Sister Company Formed (2018)
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00C896] to-[#1E90FF] rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
                <div className="relative bg-[#0D1117] p-8 rounded-2xl border border-[#00C896]/30">
                  <Building className="w-16 h-16 text-[#00C896] mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">Strategic Expansion</h3>
                  <p className="text-[#A0AEC0] leading-relaxed">
                    In 2018, we launched our first hosting platform, built entirely from scratch. 
                    This venture taught us valuable lessons about scalability and business partnerships.
                  </p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#1E90FF] to-[#00C896] rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
                <div className="relative bg-[#0D1117] p-8 rounded-2xl border border-[#1E90FF]/30">
                  <Award className="w-16 h-16 text-[#1E90FF] mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">Sustainable Growth</h3>
                  <p className="text-[#A0AEC0] leading-relaxed">
                    By 2019, we established another hosting service that remains under company ownership today, 
                    demonstrating our commitment to long-term value creation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What inspired the name */}
        <section className="bg-gradient-to-br from-[#0D1117] to-[#1A1A1A] py-20 px-8">
          <div className="max-w-7xl mx-auto scroll-animate">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="group bg-gradient-to-br from-[#2A2A2A] to-[#1E1E1E] p-8 rounded-2xl hover:scale-105 hover:shadow-2xl transition-all duration-300 hover:border-2 hover:border-[#00C896] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00C896]/10 to-[#1E90FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <Lightbulb className="w-12 h-12 text-[#00C896] mb-6" />
                    <h3 className="text-2xl font-bold mb-4 text-[#00C896]">
                      What inspired using the brand name?
                    </h3>
                    <p className="text-lg mb-6 text-[#F5F7FA] leading-relaxed">
                      The inspiration behind our brand name is rooted in our commitment to
                      illuminate businesses. Just as "tech wave" signifies a wave of technology, we aim to enhance businesses through services
                      like Web Development, App Creation, Software Solutions, SEO, and Digital Marketing. The name aligns
                      perfectly with our mission.
                    </p>
                    <p className="text-lg text-[#A0AEC0] leading-relaxed">
                      We were also motivated by the desire to secure a domain name with an IT focus that harmonized
                      well with our vision. Our offerings encompass various aspects of making businesses shine, including Web
                      Design, UI/UX Development, Application Creation, ERP Solutions, Graphic Design, and Digital Marketing.
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#1E90FF] to-[#00C896] rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                  <img 
                    src="/lovable-uploads/7dee89d9-7ad3-4f44-8567-2fab5c93a862.png" 
                    alt="Team" 
                    className="relative rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Transition to Current Name */}
        <section className="bg-gradient-to-br from-[#1A1A1A] to-[#0D1117] py-20 px-8">
          <div className="max-w-7xl mx-auto scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-[#00C896] to-[#1E90FF] bg-clip-text text-transparent">
              The Transition to TechWave (2020)
            </h2>
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <div className="group bg-gradient-to-br from-[#2A2A2A] to-[#1E1E1E] p-8 rounded-2xl hover:scale-105 hover:shadow-2xl transition-all duration-300 hover:border-2 hover:border-[#1E90FF] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1E90FF]/10 to-[#00C896]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-4 text-[#1E90FF]">How did the transition happen?</h3>
                    <p className="text-[#F5F7FA] leading-relaxed">
                      Our previous brand name might convey a limited focus, while our proper
                      emphasis has always been global. Thus, we embarked on a quest to discover a suitable name
                      that could encompass the entirety of our services. Through diligent searching, we stumbled
                      upon the domain "TechWave," a name that perfectly encapsulates our offerings. This choice
                      seamlessly aligns with our mission and perspective.
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="relative group mb-6">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#1E90FF] to-[#00C896] rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                  <img 
                    src="/lovable-uploads/7dee89d9-7ad3-4f44-8567-2fab5c93a862.png" 
                    alt="Team with award" 
                    className="relative rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300"
                  />
                </div>
                <div className="group bg-gradient-to-br from-[#2A2A2A] to-[#1E1E1E] p-6 rounded-2xl hover:scale-105 hover:shadow-2xl transition-all duration-300 hover:border-2 hover:border-[#00C896] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00C896]/10 to-[#1E90FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-2 text-[#00C896]">Recognition Achievement</h3>
                    <p className="text-[#F5F7FA] leading-relaxed">
                      Our founder was honored with an industry award for significant contributions
                      to the local tech industry. Around the same time, the company rebranded. 
                      Winning the award became a turning point, encouraging the team to dream bigger. This
                      led to the decision to establish the first physical office to
                      expand its scope.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Formation Section */}
        <section className="bg-black py-20 px-8">
          <div className="max-w-7xl mx-auto scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-[#00C896] to-[#1E90FF] bg-clip-text text-transparent">
              The Formation of TechWave (2020)
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h3 className="text-3xl font-bold mb-8 text-white">
                  How does our brand identity translate to our values?
                </h3>
                <p className="text-xl text-[#A0AEC0] leading-relaxed">
                  The term "TechWave" implies innovation and technological advancement. This concept reflects our aspiration to excel through our partnerships with our
                  clients. Likewise, we strive to empower our clients, aiding them in achieving their own brilliance in the business landscape.
                </p>
              </div>
              
              <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-[#1E90FF] to-[#00C896] bg-clip-text text-transparent">
                Building a Brand: Shaping TechWave
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group bg-gradient-to-br from-[#2A2A2A] to-[#1E1E1E] p-8 rounded-2xl hover:scale-105 hover:shadow-2xl transition-all duration-300 hover:border-2 hover:border-[#1E90FF] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1E90FF]/10 to-[#00C896]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <Users className="w-12 h-12 text-[#1E90FF] mb-6" />
                    <h3 className="text-2xl font-bold mb-4 text-center text-[#1E90FF]">
                      How did TechWave's website develop over time?
                    </h3>
                    <p className="text-[#F5F7FA] leading-relaxed">
                      The journey began with our initial website and later transformed into TechWave. Initially, our
                      offerings were limited to services such as Web Development, WordPress Web
                      Development, and SEO. However, as time progressed, TechWave expanded its horizons to
                      encompass a comprehensive suite of services essential for businesses to thrive online.
                    </p>
                  </div>
                </div>
                
                <div className="group bg-gradient-to-br from-[#2A2A2A] to-[#1E1E1E] p-8 rounded-2xl hover:scale-105 hover:shadow-2xl transition-all duration-300 hover:border-2 hover:border-[#00C896] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00C896]/10 to-[#1E90FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <Building className="w-12 h-12 text-[#00C896] mb-6" />
                    <h3 className="text-2xl font-bold mb-4 text-center text-[#00C896]">
                      The preparations for the official launch
                    </h3>
                    <p className="text-[#F5F7FA] leading-relaxed">
                      TechWave officially launched in 2020, starting as a venture with a small team.
                      After registering the domain and securing an office, the initial team included
                      web developers, an SEO expert, a social media marketer, and office staff. Now we've
                      grown to 50+ members, with continuous expansion each month. The decision to have an
                      office was motivated by the benefits of working together in one location,
                      such as improved team management, streamlined communication, and efficient time use.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Official Launch Section */}
        <section className="bg-gradient-to-br from-[#0D1117] to-[#1A1A1A] py-20 px-8">
          <div className="max-w-7xl mx-auto scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-[#00C896] to-[#1E90FF] bg-clip-text text-transparent">
              TechWave's Official Launch and Vision (2021)
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group bg-gradient-to-br from-[#2A2A2A] to-[#1E1E1E] p-8 rounded-2xl hover:scale-105 hover:shadow-2xl transition-all duration-300 hover:border-2 hover:border-[#1E90FF] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1E90FF]/10 to-[#00C896]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <Users className="w-12 h-12 text-[#1E90FF] mb-6" />
                  <h3 className="text-xl font-bold mb-4 text-center text-[#1E90FF]">
                    Establishing a dedicated team: How did this shape growth?
                  </h3>
                  <p className="text-[#F5F7FA] leading-relaxed">
                    The choice to form dedicated teams at TechWave aimed to
                    enhance services and offer specialized client support. As
                    our company grew, dedicated teams improved efficiency,
                    quality, and customization. This decision significantly
                    influenced our growth, delivering high-quality work in
                    diverse areas like web development, SEO, design, and
                    marketing. Dedicated teams fostered collaboration,
                    knowledge sharing, and skill development, raising overall
                    company competency.
                  </p>
                </div>
              </div>
              
              <div className="group bg-gradient-to-br from-[#2A2A2A] to-[#1E1E1E] p-8 rounded-2xl hover:scale-105 hover:shadow-2xl transition-all duration-300 hover:border-2 hover:border-[#00C896] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00C896]/10 to-[#1E90FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <Target className="w-12 h-12 text-[#00C896] mb-6" />
                  <h3 className="text-xl font-bold mb-4 text-center text-[#00C896]">
                    The mission of TechWave: Aim to encourage creativity
                  </h3>
                  <p className="text-[#F5F7FA] leading-relaxed">
                    TechWave is on a mission to simplify our clients'
                    businesses and help them expand. We believe that if our
                    clients succeed, we succeed. Our goal is to make
                    technology accessible and beneficial for businesses of all
                    sizes, encouraging creativity and innovation in every
                    project we undertake.
                  </p>
                </div>
              </div>

              <div className="group bg-gradient-to-br from-[#2A2A2A] to-[#1E1E1E] p-8 rounded-2xl hover:scale-105 hover:shadow-2xl transition-all duration-300 hover:border-2 hover:border-purple-400 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-[#00C896]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <TrendingUp className="w-12 h-12 text-purple-400 mb-6" />
                  <h3 className="text-xl font-bold mb-4 text-center text-purple-400">
                    Future Vision and Growth
                  </h3>
                  <p className="text-[#F5F7FA] leading-relaxed">
                    Looking forward, TechWave continues to evolve and adapt to
                    emerging technologies and market demands. Our vision is to
                    become a global leader in digital transformation,
                    helping businesses worldwide harness the power of
                    technology to achieve unprecedented growth and success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Story;
