
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Linkedin, Facebook, Twitter } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const FounderHeroSection = () => {
  return (
    <section className="py-20 bg-transparent relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20 pointer-events-none"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Left side - Founder image and info */}
          <div className="lg:w-1/3">
            <div className="mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-xl blur-lg opacity-30"></div>
                <Avatar className="w-64 h-64 mx-auto rounded-xl relative border-2 border-purple-400/30">
                  <AvatarImage src="/lovable-uploads/a364049e-ac00-4930-bd2f-53ac02e911d9.png" alt="Michael Chen - Founder of TechWave" />
                  <AvatarFallback className="text-4xl bg-gray-800 text-white">MC</AvatarFallback>
                </Avatar>
              </div>
            </div>
            
            <Card className="bg-gray-800/80 border border-gray-700/50 backdrop-blur-sm">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-2 text-white">Michael Chen</h2>
                <p className="text-lg text-purple-400 mb-4 font-medium">Founder & CEO</p>
                
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    <span className="font-medium text-white">Education:</span> MIT, Computer Science
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span className="font-medium text-white">Experience:</span> 15+ years in Tech
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span className="font-medium text-white">Previous:</span> Principal Engineer at Google
                  </div>
                </div>
                
                <div className="flex space-x-4 mt-6">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:scale-110">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full hover:from-purple-600 hover:to-purple-700 transition-all duration-300 hover:scale-110">
                    <Facebook size={20} />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-full hover:from-gray-700 hover:to-gray-800 transition-all duration-300 hover:scale-110">
                    <Twitter size={20} />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Right side - Founder story and details */}
          <div className="lg:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
              Meet Our <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Visionary</span> Founder
            </h1>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Michael Chen founded TechWave in 2010 with a vision to bridge the talent gap in the 
                software development industry. Drawing from his experience at tech giants like Google, 
                he recognized the growing need for skilled developers who could deliver high-quality 
                solutions efficiently.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-white flex items-center gap-3">
                  <span className="w-8 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></span>
                  The Beginning
                </h3>
                <p className="text-gray-300 leading-relaxed pl-11">
                  After graduating with honors from MIT's Computer Science program, Michael spent a decade 
                  leading complex projects at Google, where he built and managed global engineering teams. 
                  This experience gave him unique insights into what makes successful tech teams work and 
                  the challenges companies face when trying to scale their development capabilities.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-white flex items-center gap-3">
                  <span className="w-8 h-1 bg-gradient-to-r from-blue-400 to-green-400 rounded-full"></span>
                  The TechWave Vision
                </h3>
                <p className="text-gray-300 leading-relaxed pl-11">
                  Michael founded TechWave with a clear mission: to help businesses access the top 1% of 
                  software development talent without the traditional hiring headaches. He built the company 
                  on core principles of technical excellence, transparent communication, and results-driven 
                  development.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-white flex items-center gap-3">
                  <span className="w-8 h-1 bg-gradient-to-r from-green-400 to-purple-400 rounded-full"></span>
                  Leadership Philosophy
                </h3>
                <div className="pl-11 space-y-4">
                  <blockquote className="text-lg italic text-gray-200 border-l-4 border-purple-400 pl-4 bg-gray-800/30 py-3 rounded-r-lg">
                    "Great software is built by great people who genuinely care about solving problems."
                  </blockquote>
                  <p className="text-gray-300 leading-relaxed">
                    His leadership approach emphasizes continuous learning, mentorship, and 
                    creating an environment where innovation thrives. Under his guidance, TechWave has grown 
                    from a small team of 5 developers to over 100 IT professionals serving clients worldwide.
                  </p>
                </div>
              </div>
              
              <div className="pt-6">
                <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-0 px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25">
                  Schedule a Call with Michael <ArrowRight className="ml-2" size={18} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderHeroSection;
