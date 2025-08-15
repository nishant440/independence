import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Instagram, Linkedin } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-white/20' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-3">
            <div className="text-2xl md:text-3xl">🇮🇳</div>
            <div>
              <h1 className="font-bold text-lg md:text-xl text-tricolor-navy">
                Independence Day 2025
              </h1>
              <p className="text-xs md:text-sm text-tricolor-navy/70">
                79 Years of Freedom
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-tricolor-navy hover:text-tricolor-saffron transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('celebration')}
              className="text-tricolor-navy hover:text-tricolor-saffron transition-colors font-medium"
            >
              Celebration
            </button>
            <button 
              onClick={() => scrollToSection('ceremony')}
              className="text-tricolor-navy hover:text-tricolor-saffron transition-colors font-medium"
            >
              Flag Ceremony
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-tricolor-navy hover:text-tricolor-saffron transition-colors font-medium"
            >
              About Developer
            </button>
          </nav>

          {/* Social Links - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="tel:+919368070638"
              className="p-2 bg-tricolor-saffron/20 hover:bg-tricolor-saffron hover:text-white rounded-full transition-all duration-300"
            >
              <Phone size={18} />
            </a>
            <a 
              href="https://www.instagram.com/nishh.official/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-tricolor-green/20 hover:bg-tricolor-green hover:text-white rounded-full transition-all duration-300"
            >
              <Instagram size={18} />
            </a>
            <a 
              href="https://www.linkedin.com/in/nishant-gautam-39b529329/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-tricolor-navy/20 hover:bg-tricolor-navy hover:text-white rounded-full transition-all duration-300"
            >
              <Linkedin size={18} />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-tricolor-navy"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md rounded-2xl mt-2 p-4 border border-white/30 shadow-xl">
            <nav className="space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="block w-full text-left text-tricolor-navy hover:text-tricolor-saffron transition-colors font-medium py-2"
              >
                🏠 Home
              </button>
              <button 
                onClick={() => scrollToSection('celebration')}
                className="block w-full text-left text-tricolor-navy hover:text-tricolor-saffron transition-colors font-medium py-2"
              >
                🎉 Celebration
              </button>
              <button 
                onClick={() => scrollToSection('ceremony')}
                className="block w-full text-left text-tricolor-navy hover:text-tricolor-saffron transition-colors font-medium py-2"
              >
                🏛️ Flag Ceremony
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-tricolor-navy hover:text-tricolor-saffron transition-colors font-medium py-2"
              >
                👨‍💻 About Developer
              </button>
              
              {/* Mobile Social Links */}
              <div className="flex items-center space-x-4 pt-4 border-t border-tricolor-navy/20">
                <a 
                  href="tel:+919368070638"
                  className="flex items-center space-x-2 text-tricolor-navy hover:text-tricolor-saffron transition-colors"
                >
                  <Phone size={16} />
                  <span className="text-sm">Call</span>
                </a>
                <a 
                  href="https://www.instagram.com/nishh.official/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-tricolor-navy hover:text-tricolor-saffron transition-colors"
                >
                  <Instagram size={16} />
                  <span className="text-sm">Instagram</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/nishant-gautam-39b529329/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-tricolor-navy hover:text-tricolor-saffron transition-colors"
                >
                  <Linkedin size={16} />
                  <span className="text-sm">LinkedIn</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
