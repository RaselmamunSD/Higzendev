import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div 
        className={`w-10 h-10 min-h-[40px] min-w-[40px] aspect-square rounded-full border border-border/40 bg-card/60 ${className}`} 
        aria-hidden="true"
      />
    );
  }

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={`relative w-10 h-10 min-h-[40px] max-h-[40px] min-w-[40px] max-w-[40px] aspect-square rounded-full border border-border/70 bg-card/90 hover:bg-card text-foreground flex items-center justify-center transition-all duration-300 hover:scale-105 hover:border-primary/50 shadow-sm shrink-0 ${className}`}
      aria-label={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
      title={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
    >
      <Sun
        className={`h-[18px] w-[18px] text-amber-500 transition-all duration-300 ${
          isDark ? 'rotate-90 scale-0 opacity-0 absolute' : 'rotate-0 scale-100 opacity-100'
        }`}
      />
      <Moon
        className={`h-[18px] w-[18px] text-cyan-400 transition-all duration-300 ${
          isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0 absolute'
        }`}
      />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
};

export default ThemeToggle;
