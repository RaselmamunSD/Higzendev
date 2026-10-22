import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const VideoMeeting = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-200">
      <Header />
      <main className="flex-grow">
        <section className="py-20 bg-gradient-to-b from-background via-muted/30 to-background dark:via-slate-900/40 border-b border-border/40">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-8">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-primary via-blue-500 to-accent bg-clip-text text-transparent">
                Schedule Video Meeting
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Book a convenient time for your video consultation
              </p>
            </div>
            
            {/* Calendly Widget */}
            <div className="max-w-4xl mx-auto bg-card border border-border/70 rounded-2xl shadow-xl p-4 sm:p-6 overflow-hidden">
              <div 
                className="calendly-inline-widget rounded-xl" 
                data-url="https://calendly.com/rasel-mamun314?hide_landing_page_details=1&hide_gdpr_banner=1" 
                style={{ minWidth: '320px', height: '700px' }}
              ></div>
              <script 
                type="text/javascript" 
                src="https://assets.calendly.com/assets/external/widget.js" 
                async
              ></script>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default VideoMeeting;
