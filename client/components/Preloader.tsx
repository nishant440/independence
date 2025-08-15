import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [showInitials, setShowInitials] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowInitials(true), 500);
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setTimeout(onComplete, 800);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => {
      clearTimeout(timer);
      clearInterval(progressTimer);
    };
  }, [onComplete]);

  const particles = Array.from({ length: 20 }, (_, i) => (
    <div
      key={i}
      className={cn(
        "absolute w-2 h-2 rounded-full animate-particle",
        i % 3 === 0 && "bg-tricolor-saffron",
        i % 3 === 1 && "bg-tricolor-white",
        i % 3 === 2 && "bg-tricolor-green"
      )}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 2}s`,
        animationDuration: `${2 + Math.random() * 2}s`,
      }}
    />
  ));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-tricolor-saffron via-tricolor-white to-tricolor-green">
      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles}
      </div>

      {/* Main content */}
      <div className="relative text-center">
        {/* NG Initials */}
        <div className={cn(
          "mb-8 transform transition-all duration-1000",
          showInitials ? "scale-100 opacity-100" : "scale-0 opacity-0"
        )}>
          <div className="relative">
            <span className="text-8xl md:text-9xl font-bold text-tricolor-navy drop-shadow-2xl">
              N
            </span>
            <span className="text-8xl md:text-9xl font-bold text-tricolor-green ml-2 drop-shadow-2xl">
              G
            </span>
            
            {/* Glow effect */}
            <div className="absolute inset-0 text-8xl md:text-9xl font-bold blur-sm opacity-50">
              <span className="text-tricolor-saffron">N</span>
              <span className="text-tricolor-green ml-2">G</span>
            </div>
          </div>
        </div>

        {/* Loading text */}
        <div className="mb-6">
          <p className="text-tricolor-navy text-xl font-semibold animate-pulse">
            Loading Independence Day Celebration...
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-80 h-2 bg-white/30 rounded-full backdrop-blur-sm border border-white/20 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-tricolor-saffron via-tricolor-white to-tricolor-green transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        {/* Progress percentage */}
        <div className="mt-3">
          <span className="text-tricolor-navy font-semibold">{progress}%</span>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-6 h-6 bg-tricolor-saffron rounded-full animate-float" style={{ animationDelay: "0s" }} />
      <div className="absolute top-20 right-20 w-4 h-4 bg-tricolor-green rounded-full animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-20 left-20 w-5 h-5 bg-tricolor-navy rounded-full animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-10 right-10 w-3 h-3 bg-tricolor-white border border-tricolor-navy rounded-full animate-float" style={{ animationDelay: "0.5s" }} />
    </div>
  );
};
