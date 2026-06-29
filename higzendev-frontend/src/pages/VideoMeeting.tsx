import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const VideoMeeting = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-white">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-8">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Schedule Video Meeting</h1>
              <p className="text-xl text-gray-600 mb-8">
                Book a convenient time for your video consultation
              </p>
            </div>
            
            {/* Calendly Widget */}
            <div className="max-w-4xl mx-auto">
              <div 
                className="calendly-inline-widget" 
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