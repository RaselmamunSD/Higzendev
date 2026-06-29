import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Checkbox } from '@/components/ui/checkbox';
import { MessageCircle, Send, X, User, Sparkles, ArrowLeft, Phone, Mail, UserCircle, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

// Chat option icons as components
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.757-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
  </svg>
);

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface UserInfo {
  name: string;
  phone: string;
  email: string;
}

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [stage, setStage] = useState<'options' | 'form' | 'chat'>('options');
  const [userInfo, setUserInfo] = useState<UserInfo>({ name: '', phone: '', email: '' });
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!userInfo.name.trim() || !userInfo.phone.trim() || !userInfo.email.trim()) {
      toast({
        title: "Please fill the form",
        description: "All fields are required",
        variant: "destructive"
      });
      return;
    }

    if (!agreedToTerms) {
      toast({
        title: "Accept terms",
        description: "Please accept the terms to continue",
        variant: "destructive"
      });
      return;
    }

    // Start chat with welcome message
    setMessages([
      {
        id: '1',
        content: `Hello ${userInfo.name}! I'm HigzenDev AI Assistant. How can I help you today?`,
        sender: 'bot',
        timestamp: new Date()
      }
    ]);
    setStage('chat');
  };

  const handleBackToForm = () => {
    setStage('form');
    setMessages([]);
  };

  const handleBackToOptions = () => {
    setStage('options');
  };

  const handleSelectLiveChat = () => {
    setStage('form');
  };

  const handleExternalLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const messageToSend = inputValue;
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('/functions/v1/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: messageToSend }),
      });

      if (!response.ok) {
        throw new Error('Failed to get AI response');
      }

      const data = await response.json();
      
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: data.response || 'Sorry, I could not generate a response.',
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      console.error('Error calling chatbot:', error);
      const errorResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: getBotResponse(messageToSend),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsLoading(false);
    }
  };

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('hello') || input.includes('hi')) {
      return "Hello! I'm here to help you with any questions about our services. How can I assist you?";
    }
    
    if (input.includes('service') || input.includes('what do you do')) {
      return 'We offer Web Development, Mobile Apps, AI Solutions, Cloud Services, and Digital Marketing. Which service would you like to know more about?';
    }
    
    if (input.includes('price') || input.includes('cost') || input.includes('quote')) {
      return 'Our pricing is project-based. For detailed information, please contact our sales team.';
    }
    
    if (input.includes('contact') || input.includes('reach')) {
      return 'You can contact us via email, phone, or the contact form. Our team is available 24/7.';
    }
    
    if (input.includes('team') || input.includes('who')) {
      return 'Our expert team has 10+ years of experience in software development, AI, and digital solutions.';
    }
    
    if (input.includes('portfolio') || input.includes('work') || input.includes('project')) {
      return "We have completed 500+ projects across various industries. Check out our portfolio section!";
    }
    
    if (input.includes('time') || input.includes('timeline') || input.includes('how long')) {
      return 'Project timelines: Simple websites 2-4 weeks, Web apps 6-12 weeks, Enterprise solutions 3-6 months.';
    }
    
    if (input.includes('technology') || input.includes('tech stack')) {
      return 'We work with React, Node.js, Python, AI/ML, AWS and modern technologies.';
    }
    
    return 'Thank you for your message! Our expert team will assist you. Please provide more details about how we can help.';
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setStage('options');
    setUserInfo({ name: '', phone: '', email: '' });
    setAgreedToTerms(false);
    setMessages([]);
  };

  return (
    <>
      {/* Floating Chat Button - Purple Theme */}
      {!isOpen && (
        <div className="fixed bottom-4 right-3 sm:bottom-6 sm:right-4 md:bottom-8 md:right-6 z-50">
          <Button
            onClick={() => setIsOpen(true)}
            className="relative h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 rounded-full p-0 border-0 shadow-2xl transition-all duration-500 hover:scale-110 group overflow-visible bg-transparent hover:bg-transparent"
          >
            {/* Outer glow ring - Purple */}
            <div className="absolute inset-[-3px] rounded-full bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 opacity-60 blur-md animate-pulse" />
            
            {/* Rotating border ring */}
            <div className="absolute inset-[-2px] rounded-full bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 animate-[spin_4s_linear_infinite]" />
            
            {/* Inner background */}
            <div className="absolute inset-[2px] rounded-full bg-gradient-to-br from-card via-background to-card" />
            
            {/* Icon container with gradient */}
            <div className="relative z-10 h-full w-full rounded-full bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 flex items-center justify-center shadow-inner">
              <div className="relative">
                <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 md:h-5 md:w-5 text-white drop-shadow-lg group-hover:scale-110 transition-transform duration-300" />
                <Sparkles className="absolute -top-1 -right-1 h-2 w-2 sm:h-2.5 sm:w-2.5 text-yellow-300 animate-pulse" />
              </div>
            </div>
            
            {/* Notification badge */}
            <div className="absolute -top-0.5 -right-0.5 w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 bg-gradient-to-br from-green-400 via-emerald-500 to-green-600 rounded-full border-2 border-background shadow-lg flex items-center justify-center z-20">
              <span className="text-[7px] sm:text-[8px] font-bold text-white">AI</span>
            </div>
            
            {/* Ripple effect */}
            <div className="absolute inset-0 rounded-full bg-purple-500/20 animate-ping" />
          </Button>
        </div>
      )}

      {/* Chat Window - Fully Responsive */}
      {isOpen && (
        <Card className="fixed z-50 animate-fade-in flex flex-col overflow-hidden
          inset-2 sm:inset-auto
          sm:bottom-6 sm:right-4 md:bottom-8 md:right-6 
          sm:w-[340px] sm:max-h-[calc(100vh-3rem)] sm:h-[480px] md:w-[380px] md:h-[520px] lg:w-[420px] lg:h-[560px]
          rounded-2xl sm:rounded-2xl
          shadow-2xl border-0 sm:border-2 sm:border-purple-500/20 
          bg-card/95 backdrop-blur-xl
          max-h-[calc(100vh-1rem)]">
          
          {/* Header - Purple Theme - Fixed height and structure */}
          <div className="flex-shrink-0 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white px-3 py-3 sm:px-4 sm:py-4 md:py-4 rounded-t-2xl">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                <div className="relative flex-shrink-0">
                  <div className="h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11 rounded-full bg-gradient-to-br from-white/20 to-white/5 p-0.5 shadow-lg">
                    <img 
                      src="/lovable-uploads/b9b8125a-32af-42bb-8078-5806ae38b242.png" 
                      alt="AI Assistant" 
                      className="h-full w-full rounded-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 bg-green-400 rounded-full border-2 border-white animate-pulse shadow-sm" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm sm:text-base md:text-lg font-bold flex items-center gap-1.5 sm:gap-2 truncate">
                    HigzenDev AI
                    <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-300 flex-shrink-0" />
                  </div>
                  <div className="text-[10px] sm:text-xs opacity-90 font-medium">Active • Online</div>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleClose}
                className="h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11 p-0 text-white hover:bg-white/20 rounded-full transition-all duration-300 hover:rotate-90 flex-shrink-0"
                aria-label="Close chat"
              >
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              </Button>
            </div>
          </div>
          
          <CardContent className="p-0 flex flex-col flex-1 min-h-0 overflow-hidden">
            {/* Options Stage - Clean Design with Scroll */}
            {stage === 'options' && (
              <ScrollArea className="flex-1">
                <div className="flex flex-col bg-background min-h-full">
                  {/* Avatar Message Bubble */}
                  <div className="flex gap-3 p-3 sm:p-4">
                    <div className="relative flex-shrink-0">
                      <img 
                        src="/lovable-uploads/b9b8125a-32af-42bb-8078-5806ae38b242.png" 
                        alt="AI Assistant" 
                        className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover shadow-md"
                      />
                      <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-background" />
                    </div>
                    <div className="bg-muted rounded-2xl rounded-tl-sm px-3 py-2 shadow-sm max-w-[85%]">
                      <p className="text-xs sm:text-sm text-foreground">
                        Choose a chat option to get started.
                      </p>
                    </div>
                  </div>

                  {/* Chat Option Buttons - Compact Cards */}
                  <div className="px-3 sm:px-4 space-y-2 sm:space-y-2.5">
                    {/* Live Chat Option */}
                    <button
                      onClick={handleSelectLiveChat}
                      className="w-full flex items-center gap-3 p-3 sm:p-3.5 rounded-xl bg-card border border-border hover:border-purple-300 hover:shadow-md transition-all duration-300 group"
                    >
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-foreground/20 flex items-center justify-center group-hover:border-purple-500 transition-colors flex-shrink-0">
                        <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-foreground/70 group-hover:text-purple-600" />
                      </div>
                      <div className="flex-1 text-left">
                        <div className="text-xs sm:text-sm font-medium text-foreground">Chat via Live Chat</div>
                      </div>
                    </button>

                    {/* WhatsApp Option */}
                    <button
                      onClick={() => handleExternalLink('https://wa.me/8801764996464')}
                      className="w-full flex items-center gap-3 p-3 sm:p-3.5 rounded-xl bg-card border border-border hover:border-green-300 hover:shadow-md transition-all duration-300 group"
                    >
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-green-500 flex-shrink-0">
                        <WhatsAppIcon />
                      </div>
                      <div className="flex-1 text-left">
                        <div className="text-xs sm:text-sm font-medium text-foreground">Chat with WhatsApp</div>
                      </div>
                    </button>

                    {/* Facebook Option */}
                    <button
                      onClick={() => handleExternalLink('https://www.facebook.com/HigzenDev')}
                      className="w-full flex items-center gap-3 p-3 sm:p-3.5 rounded-xl bg-card border border-border hover:border-blue-300 hover:shadow-md transition-all duration-300 group"
                    >
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-blue-600 flex-shrink-0">
                        <FacebookIcon />
                      </div>
                      <div className="flex-1 text-left">
                        <div className="text-xs sm:text-sm font-medium text-foreground">Chat with Facebook</div>
                      </div>
                    </button>

                    {/* Instagram Option */}
                    <button
                      onClick={() => handleExternalLink('https://www.instagram.com/HigzenDev')}
                      className="w-full flex items-center gap-3 p-3 sm:p-3.5 rounded-xl bg-card border border-border hover:border-pink-300 hover:shadow-md transition-all duration-300 group"
                    >
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-pink-600 flex-shrink-0">
                        <InstagramIcon />
                      </div>
                      <div className="flex-1 text-left">
                        <div className="text-xs sm:text-sm font-medium text-foreground">Chat with Instagram</div>
                      </div>
                    </button>
                  </div>

                  {/* Footer */}
                  <div className="p-3 sm:p-4 mt-4">
                    <div className="flex items-center justify-center gap-1.5 text-[10px] sm:text-xs text-muted-foreground">
                      <span>Powered by</span>
                      <span className="text-purple-600 font-medium">HigzenDev AI</span>
                    </div>
                  </div>
                </div>
              </ScrollArea>
            )}

            {/* Form Stage */}
            {stage === 'form' && (
              <div className="flex-1 flex flex-col p-3 sm:p-4 md:p-5">
                {/* Back Button */}
                <button
                  onClick={handleBackToOptions}
                  className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors mb-3 sm:mb-4 group"
                >
                  <ArrowLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4 group-hover:-translate-x-1 transition-transform" />
                  <span>View other options</span>
                </button>
                {/* Welcome Message */}
                <div className="flex gap-2 sm:gap-3 mb-4 sm:mb-5">
                  <div className="relative flex-shrink-0">
                    <img 
                      src="/lovable-uploads/b9b8125a-32af-42bb-8078-5806ae38b242.png" 
                      alt="AI Assistant" 
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-purple-400/30 shadow-md"
                    />
                    <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-400 rounded-full border-2 border-card" />
                  </div>
                  <div className="bg-muted/80 rounded-2xl rounded-bl-sm px-3 py-2 sm:px-4 sm:py-3 border border-border/30 shadow-sm max-w-[85%]">
                    <p className="text-xs sm:text-sm text-foreground leading-relaxed">
                      We'd love to chat with you! Please provide your details.
                    </p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground mt-1">
                      {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>

                {/* Contact Form */}
                <form onSubmit={handleFormSubmit} className="flex-1 flex flex-col">
                  <div className="space-y-2.5 sm:space-y-3 flex-1">
                    {/* Name Input */}
                    <div className="relative">
                      <UserCircle className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-purple-500" />
                      <Input
                        type="text"
                        placeholder="Your Name"
                        value={userInfo.name}
                        onChange={(e) => setUserInfo(prev => ({ ...prev, name: e.target.value }))}
                        className="pl-10 sm:pl-12 h-10 sm:h-11 md:h-12 text-xs sm:text-sm rounded-xl border-2 border-border focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                      />
                    </div>

                    {/* Phone Input */}
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
                        <span className="text-xs sm:text-sm">🇧🇩</span>
                      </div>
                      <Input
                        type="tel"
                        placeholder="Phone Number"
                        value={userInfo.phone}
                        onChange={(e) => setUserInfo(prev => ({ ...prev, phone: e.target.value }))}
                        className="pl-10 sm:pl-12 h-10 sm:h-11 md:h-12 text-xs sm:text-sm rounded-xl border-2 border-border focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-purple-500" />
                      <Input
                        type="email"
                        placeholder="Email Address"
                        value={userInfo.email}
                        onChange={(e) => setUserInfo(prev => ({ ...prev, email: e.target.value }))}
                        className="pl-10 sm:pl-12 h-10 sm:h-11 md:h-12 text-xs sm:text-sm rounded-xl border-2 border-border focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                      />
                    </div>

                    {/* Terms Checkbox */}
                    <div className="flex items-start gap-2 sm:gap-3 pt-1 sm:pt-2">
                      <Checkbox
                        id="terms"
                        checked={agreedToTerms}
                        onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                        className="mt-0.5 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
                      />
                      <label htmlFor="terms" className="text-[10px] sm:text-xs text-muted-foreground leading-tight cursor-pointer">
                        By submitting, you consent to receive SMS or email for specific channels. Rates may apply.
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full mt-3 sm:mt-4 h-10 sm:h-11 md:h-12 rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 hover:opacity-90 text-white text-xs sm:text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <span>Submit</span>
                    <Send className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </Button>
                </form>

                {/* Powered By */}
                <div className="mt-3 sm:mt-4 text-[9px] sm:text-[10px] md:text-xs text-muted-foreground/60 text-center font-medium flex items-center justify-center gap-1">
                  <Sparkles className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                  Powered by HigzenDev AI
                </div>
              </div>
            )}

            {/* Chat Stage */}
            {stage === 'chat' && (
              <>
                {/* Back Button */}
                <div className="px-3 py-2 sm:px-4 sm:py-2.5 border-b border-border/50">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleBackToForm}
                    className="h-7 sm:h-8 px-2 sm:px-3 text-xs sm:text-sm text-purple-600 hover:text-purple-700 hover:bg-purple-50 rounded-lg"
                  >
                    <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                    Back
                  </Button>
                </div>

                <ScrollArea className="flex-1 px-3 sm:px-4 py-2 sm:py-3">
                  <div className="space-y-3 sm:space-y-4 pb-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={cn(
                          "flex gap-2 sm:gap-3 animate-fade-in",
                          message.sender === 'user' ? 'justify-end' : 'justify-start'
                        )}
                      >
                        {message.sender === 'bot' && (
                          <div className="relative flex-shrink-0 mt-1">
                            <img 
                              src="/lovable-uploads/b9b8125a-32af-42bb-8078-5806ae38b242.png" 
                              alt="AI Assistant" 
                              className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full object-cover border-2 border-purple-400/30 shadow-md"
                            />
                            <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-green-400 rounded-full border-2 border-card" />
                          </div>
                        )}
                        
                        <div
                          className={cn(
                            "max-w-[85%] sm:max-w-[80%] rounded-2xl px-2.5 py-2 sm:px-3 sm:py-2.5 md:px-4 md:py-3 text-xs sm:text-sm leading-relaxed shadow-md",
                            message.sender === 'user'
                              ? 'bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white rounded-br-md'
                              : 'bg-muted/80 text-foreground border border-border/30 rounded-bl-md'
                          )}
                        >
                          <div className="whitespace-pre-wrap text-[11px] sm:text-[13px] md:text-sm">{message.content}</div>
                          <div className={cn(
                            "text-[9px] sm:text-[10px] md:text-xs mt-1 sm:mt-1.5 md:mt-2 opacity-70",
                            message.sender === 'user' ? 'text-white/70' : 'text-muted-foreground'
                          )}>
                            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </div>
                        </div>
                        
                        {message.sender === 'user' && (
                          <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-gradient-to-br from-purple-500/30 to-fuchsia-500/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1 border border-purple-400/20 shadow-md">
                            <User className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 text-foreground" />
                          </div>
                        )}
                      </div>
                    ))}
                    
                    {isLoading && (
                      <div className="flex gap-2 sm:gap-3 justify-start animate-fade-in">
                        <div className="relative flex-shrink-0 mt-1">
                          <img 
                            src="/lovable-uploads/b9b8125a-32af-42bb-8078-5806ae38b242.png" 
                            alt="AI Assistant" 
                            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full object-cover border-2 border-purple-400/30 shadow-md"
                          />
                          <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-green-400 rounded-full border-2 border-card animate-pulse" />
                        </div>
                        <div className="bg-gradient-to-r from-muted/90 to-muted/70 rounded-2xl rounded-bl-md px-4 py-3 sm:px-5 sm:py-3.5 border border-purple-200/30 shadow-lg backdrop-blur-sm">
                          <div className="flex items-center gap-3">
                            {/* Animated Wave Dots */}
                            <div className="flex items-end gap-1 h-4">
                              <span 
                                className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-gradient-to-t from-violet-600 to-purple-400 rounded-full shadow-sm"
                                style={{ 
                                  animation: 'typingWave 1.4s ease-in-out infinite',
                                  animationDelay: '0s'
                                }} 
                              />
                              <span 
                                className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-gradient-to-t from-purple-600 to-fuchsia-400 rounded-full shadow-sm"
                                style={{ 
                                  animation: 'typingWave 1.4s ease-in-out infinite',
                                  animationDelay: '0.2s'
                                }} 
                              />
                              <span 
                                className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-gradient-to-t from-fuchsia-600 to-pink-400 rounded-full shadow-sm"
                                style={{ 
                                  animation: 'typingWave 1.4s ease-in-out infinite',
                                  animationDelay: '0.4s'
                                }} 
                              />
                            </div>
                            <span className="text-muted-foreground text-[10px] sm:text-xs font-medium tracking-wide animate-pulse">
                              AI is thinking...
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <div ref={messagesEndRef} />
                  </div>
                </ScrollArea>
                
                {/* Input Area */}
                <div className="p-2.5 sm:p-3 md:p-4 border-t border-border/50 bg-gradient-to-t from-muted/30 to-transparent flex-shrink-0">
                  <div className="flex gap-2 sm:gap-3 items-end">
                    <div className="relative flex-1">
                      <Input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Type your message..."
                        className="flex-1 bg-background/90 border-2 border-border focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 rounded-xl sm:rounded-2xl px-3 py-2 sm:px-4 sm:py-2.5 md:py-3 text-xs sm:text-sm placeholder:text-muted-foreground/60 transition-all duration-300 shadow-sm min-h-[38px] sm:min-h-[44px] md:min-h-[48px]"
                        disabled={isLoading}
                      />
                      {isLoading && (
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                          <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 border-2 border-purple-300 border-t-purple-600 rounded-full animate-spin" />
                        </div>
                      )}
                    </div>
                    <Button
                      onClick={handleSendMessage}
                      disabled={!inputValue.trim() || isLoading}
                      size="sm"
                      className="px-3 py-2 sm:px-4 sm:py-2.5 md:py-3 h-[38px] sm:h-[44px] md:h-[48px] rounded-xl sm:rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 hover:opacity-90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 disabled:opacity-50"
                    >
                      <Send className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                    </Button>
                  </div>
                  <div className="mt-2 sm:mt-3 text-[9px] sm:text-[10px] md:text-xs text-muted-foreground/60 text-center font-medium flex items-center justify-center gap-1">
                    <Sparkles className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                    Powered by HigzenDev AI
                  </div>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default AIChatbot;
