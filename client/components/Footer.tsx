import React, { useEffect, useState } from 'react';
import { Heart, Code, Coffee, Phone, Instagram, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    const generateSparkles = () => {
      const newSparkles = Array.from({ length: 12 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 60,
      }));
      setSparkles(newSparkles);
    };

    generateSparkles();
    const interval = setInterval(generateSparkles, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-tricolor-navy via-tricolor-navy/90 to-black text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className={"bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23FFFFFF\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"3\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] h-full w-full"} />
      </div>

      {/* Sparkles */}
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute w-1 h-1 bg-white rounded-full animate-sparkle"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}

      <div className="relative py-16 px-4">
        <div className="container mx-auto">
          {/* Main footer content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
            
            {/* Left section - About */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="text-3xl">🇮🇳</div>
                <div>
                  <h3 className="text-2xl font-bold">Independence Day 2024</h3>
                  <p className="text-white/70">79 Years of Freedom</p>
                </div>
              </div>
              
              <p className="text-white/80 leading-relaxed">
                इस Independence Day celebration website को बनाकर अपने देश के प्रति प्रेम व्यक्त किया गया है। 
                हमारे वीर शहीदों को नमन! 🙏
              </p>

              <div className="flex items-center space-x-2 text-white/70">
                <Code size={16} />
                <span>Made with</span>
                <Heart size={16} className="text-red-400 animate-pulse" />
                <span>and</span>
                <Coffee size={16} className="text-amber-400" />
                <span>for India</span>
              </div>
            </div>

            {/* Center section - Developer info */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold flex items-center space-x-2">
                <span>👨‍💻</span>
                <span>Developer Information</span>
              </h3>

              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <h4 className="font-semibold text-lg mb-2">Nishant Gautam</h4>
                  <p className="text-white/80 text-sm mb-3">Full Stack Web Developer</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm">
                      <Phone size={14} className="text-tricolor-saffron" />
                      <span>+91 9368070638</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Mail size={14} className="text-tricolor-green" />
                      <span>Contact for projects</span>
                    </div>
                  </div>
                </div>

                {/* Tech stack */}
                <div>
                  <p className="text-sm text-white/70 mb-2">Built using:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">React</span>
                    <span className="px-2 py-1 bg-blue-600/20 text-blue-300 rounded text-xs">TypeScript</span>
                    <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded text-xs">Tailwind CSS</span>
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs">Vite</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right section - Connect */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold flex items-center space-x-2">
                <span>🤝</span>
                <span>Connect With Me</span>
              </h3>

              <div className="space-y-4">
                <a 
                  href="tel:+919368070638"
                  className="group flex items-center space-x-3 p-3 bg-white/10 hover:bg-tricolor-saffron/20 rounded-xl transition-all duration-300 border border-white/20"
                >
                  <div className="p-2 bg-tricolor-saffron rounded-lg group-hover:scale-110 transition-transform">
                    <Phone size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Phone Call</p>
                    <p className="text-sm text-white/70">+91 9368070638</p>
                  </div>
                </a>

                <a 
                  href="https://www.instagram.com/nishh.official/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-3 p-3 bg-white/10 hover:bg-pink-500/20 rounded-xl transition-all duration-300 border border-white/20"
                >
                  <div className="p-2 bg-pink-500 rounded-lg group-hover:scale-110 transition-transform">
                    <Instagram size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Instagram</p>
                    <p className="text-sm text-white/70">@nishh.official</p>
                  </div>
                </a>

                <a 
                  href="https://www.linkedin.com/in/nishant-gautam-39b529329/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-3 p-3 bg-white/10 hover:bg-blue-600/20 rounded-xl transition-all duration-300 border border-white/20"
                >
                  <div className="p-2 bg-blue-600 rounded-lg group-hover:scale-110 transition-transform">
                    <Linkedin size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <p className="text-sm text-white/70">Professional Profile</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Patriotic quote */}
          <div className="text-center mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 max-w-4xl mx-auto">
              <div className="mb-4">
                <div className="flex justify-center items-center space-x-4 mb-4">
                  <div className="w-12 h-8 flex overflow-hidden rounded shadow-lg">
                    <div className="flex-1 bg-tricolor-saffron"></div>
                    <div className="flex-1 bg-tricolor-white"></div>
                    <div className="flex-1 bg-tricolor-green"></div>
                  </div>
                </div>
              </div>
              
              <blockquote className="text-xl md:text-2xl font-semibold text-white mb-4">
                "सारे जहाँ से अच्छा हिन्दोस्तान हमारा"
              </blockquote>
              <p className="text-white/80 text-lg">
                "Better than the entire world, is our India"
              </p>
              <cite className="text-white/60 text-sm mt-4 block">- Allama Iqbal</cite>
            </div>
          </div>

          {/* Bottom section */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-white/70 text-sm">
                  © {currentYear} Independence Day Celebration Website
                </p>
                <p className="text-white/60 text-xs mt-1">
                  Designed & Developed by Nishant Gautam with 🧡🤍💚 for India
                </p>
              </div>
              
              <div className="flex items-center space-x-4 text-sm text-white/70">
                <span className="flex items-center space-x-1">
                  <span>🎆</span>
                  <span>Happy Independence Day!</span>
                </span>
                <span className="flex items-center space-x-1">
                  <span>🇮🇳</span>
                  <span>Jai Hind!</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-5 left-5 text-2xl animate-float opacity-60">🎈</div>
      <div className="absolute bottom-10 right-10 text-3xl animate-float opacity-60" style={{ animationDelay: "1s" }}>🎊</div>
      <div className="absolute top-10 left-10 text-xl animate-sparkle opacity-40">✨</div>
      <div className="absolute top-5 right-5 text-2xl animate-sparkle opacity-40" style={{ animationDelay: "2s" }}>⭐</div>
    </footer>
  );
};
