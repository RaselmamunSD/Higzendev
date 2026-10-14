import React from 'react';

export const RouteLoadingFallback: React.FC = () => {
  return (
    <div className="min-h-[70vh] w-full flex flex-col items-center justify-center bg-[#040711] text-white select-none">
      <div className="relative w-16 h-16 flex items-center justify-center">
        {/* Glowing pulse aura */}
        <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-ping" />
        {/* Modern rotating gradient ring */}
        <div className="w-14 h-14 rounded-full border-2 border-transparent border-t-primary border-r-cyan-400 animate-spin" />
        {/* Brand Logo */}
        <img
          src="/images/higzendev-logo.webp"
          alt="HigzenDev"
          className="absolute w-6 h-6 object-contain"
          width="24"
          height="24"
          loading="eager"
        />
      </div>
      <div className="mt-4 flex items-center gap-1.5 text-xs font-mono tracking-widest text-primary uppercase animate-pulse">
        <span>Loading</span>
        <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block animate-bounce" style={{ animationDelay: '0ms' }} />
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block animate-bounce" style={{ animationDelay: '150ms' }} />
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-bounce" style={{ animationDelay: '300ms' }} />
      </div>
    </div>
  );
};

export default RouteLoadingFallback;
