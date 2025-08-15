import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export const AnimatedHeader: React.FC = () => {
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number; color: string }>>([]);

  useEffect(() => {
    const generateSparkles = () => {
      const colors = ['#FF9933', '#FFFFFF', '#138808'];
      const newSparkles = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
      }));
      setSparkles(newSparkles);
    };

    generateSparkles();
    const interval = setInterval(generateSparkles, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-tricolor-saffron/20 via-tricolor-white to-tricolor-green/20 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className={"absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23000080\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"} />
      </div>

      {/* Sparkles */}
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute w-2 h-2 rounded-full animate-sparkle"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            backgroundColor: sparkle.color,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}

      {/* Main heading */}
      <div className="relative text-center px-4 max-w-6xl mx-auto">
        <div className="mb-8">
          {/* Flag emoji or icon */}
          <div className="text-6xl md:text-8xl mb-4 animate-wave">🇮🇳</div>
        </div>

        {/* Main title with gradient and animation */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
          <span className="inline-block bg-gradient-to-r from-tricolor-saffron via-tricolor-navy to-tricolor-green bg-clip-text text-transparent animate-pulse">
            Happy
          </span>
          <br />
          <span className="inline-block bg-gradient-to-r from-tricolor-green via-tricolor-navy to-tricolor-saffron bg-clip-text text-transparent">
            Independence
          </span>
          <br />
          <span className="inline-block bg-gradient-to-r from-tricolor-saffron via-tricolor-green to-tricolor-navy bg-clip-text text-transparent">
            Day
          </span>
        </h1>

        {/* Subtitle */}
        <div className="mt-8 space-y-2">
          <p className="text-xl md:text-2xl text-tricolor-navy font-semibold">
            Celebrating 79 Years of Freedom (1947-2025)
          </p>
          <p className="text-lg md:text-xl text-tricolor-navy/80">
            Jai Hind! Pride of India! 🧡🤍💚
          </p>
        </div>

        {/* Tricolor decorative line */}
        <div className="mt-8 flex justify-center">
          <div className="flex h-2 w-48 md:w-64 rounded-full overflow-hidden shadow-lg">
            <div className="flex-1 bg-tricolor-saffron" />
            <div className="flex-1 bg-tricolor-white border-y border-gray-300" />
            <div className="flex-1 bg-tricolor-green" />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-tricolor-navy rounded-full flex justify-center">
            <div className="w-1 h-3 bg-tricolor-navy rounded-full mt-2 animate-pulse" />
          </div>
          <p className="text-tricolor-navy text-sm mt-2">Scroll Down</p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-8 h-8 bg-tricolor-saffron rounded-full animate-float opacity-60" />
      <div className="absolute top-32 right-16 w-6 h-6 bg-tricolor-green rounded-full animate-float opacity-60" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-32 left-20 w-10 h-10 bg-tricolor-white border-2 border-tricolor-navy rounded-full animate-float opacity-60" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-20 right-10 w-4 h-4 bg-tricolor-navy rounded-full animate-float opacity-60" style={{ animationDelay: "0.5s" }} />
    </header>
  );
};
