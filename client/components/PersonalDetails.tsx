import React from 'react';
import { Phone, Linkedin, Instagram, MapPin, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

export const PersonalDetails: React.FC = () => {
  const handlePhoneClick = () => {
    window.open('tel:+919368070638', '_self');
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/nishant-gautam-39b529329/', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/nishh.official/', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-tricolor-green/10 via-tricolor-white to-tricolor-saffron/10 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className={"bg-[url('data:image/svg+xml,%3Csvg width=\"100\" height=\"100\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M50 5L61.8 38.2H95L68.4 58.8L80.2 92L50 71.4L19.8 92L31.6 58.8L5 38.2H38.2L50 5Z\" fill=\"%23000080\" fill-opacity=\"0.1\"/%3E%3C/svg%3E')] h-full w-full"} />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-tricolor-navy mb-4">
            🇮🇳 About the Developer 🇮🇳
          </h2>
          <p className="text-lg md:text-xl text-tricolor-navy/80 max-w-2xl mx-auto">
            Creating this Independence Day celebration with love for our great nation
          </p>
        </div>

        {/* Main profile card */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white/20 backdrop-blur-md rounded-3xl border border-white/30 shadow-2xl p-8 md:p-12 hover:scale-105 transition-all duration-500 hover:shadow-tricolor-saffron/20 hover:shadow-2xl">
            <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12">
              {/* Profile image */}
              <div className="flex-shrink-0">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-2xl border-4 border-white/30">
                  <img 
                    src="https://cdn.builder.io/api/v1/image/assets%2F6ddae83c915a4ce7ace6b0b0ac060019%2Fd7ee65bbf17c47bd9c7f5a7567b892f1?format=webp&width=800"
                    alt="Nishant Gautam"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Profile info */}
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-4xl md:text-5xl font-bold text-tricolor-navy mb-4">
                  Nishant Gautam
                </h3>
                
                <div className="space-y-3 mb-6">
                  <p className="text-xl md:text-2xl text-tricolor-navy/80 font-semibold">
                    Full Stack Web Developer
                  </p>
                  <p className="text-lg text-tricolor-navy/70">
                    Passionate about creating amazing digital experiences
                  </p>
                </div>

                {/* Personal details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center space-x-3 justify-center lg:justify-start">
                    <Phone size={20} className="text-tricolor-saffron" />
                    <span className="text-tricolor-navy">+91 9368070638</span>
                  </div>
                  <div className="flex items-center space-x-3 justify-center lg:justify-start">
                    <MapPin size={20} className="text-tricolor-green" />
                    <span className="text-tricolor-navy">India</span>
                  </div>
                  <div className="flex items-center space-x-3 justify-center lg:justify-start">
                    <Calendar size={20} className="text-tricolor-navy" />
                    <span className="text-tricolor-navy">Software Engineer</span>
                  </div>
                  <div className="flex items-center space-x-3 justify-center lg:justify-start">
                    <span className="text-xl">🇮🇳</span>
                    <span className="text-tricolor-navy">Proud Indian</span>
                  </div>
                </div>

                {/* Quote */}
                <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 border border-white/40">
                  <p className="text-tricolor-navy italic text-lg leading-relaxed">
                    "Technology में innovation करके अपने देश को आगे बढ़ाना मेरा सपना है। 
                    आ��� Independence Day पर यह website बनाकर खुशी हो रही है! 🇮🇳"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Phone card */}
          <div 
            onClick={handlePhoneClick}
            className="group bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 p-6 hover:bg-white/30 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-xl hover:shadow-tricolor-saffron/20"
          >
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-tricolor-saffron flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Phone size={28} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold text-tricolor-navy mb-2">Phone / कॉल करें</h4>
              <p className="text-tricolor-navy/80 group-hover:text-tricolor-navy transition-colors">
                +91 9368070638
              </p>
              <p className="text-sm text-tricolor-navy/60 mt-2">Direct call / तुरंत कॉल करें</p>
            </div>
          </div>

          {/* LinkedIn card */}
          <div 
            onClick={handleLinkedInClick}
            className="group bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 p-6 hover:bg-white/30 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-xl hover:shadow-tricolor-green/20"
          >
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-tricolor-green flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Linkedin size={28} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold text-tricolor-navy mb-2">LinkedIn</h4>
              <p className="text-tricolor-navy/80 group-hover:text-tricolor-navy transition-colors text-sm">
                Professional Connect
              </p>
              <p className="text-sm text-tricolor-navy/60 mt-2">Business inquiries / काम की बात</p>
            </div>
          </div>

          {/* Instagram card */}
          <div 
            onClick={handleInstagramClick}
            className="group bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 p-6 hover:bg-white/30 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-xl hover:shadow-tricolor-navy/20"
          >
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-tricolor-navy flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Instagram size={28} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold text-tricolor-navy mb-2">Instagram</h4>
              <p className="text-tricolor-navy/80 group-hover:text-tricolor-navy transition-colors">
                @nishh.official
              </p>
              <p className="text-sm text-tricolor-navy/60 mt-2">Follow for updates / फॉलो करें</p>
            </div>
          </div>
        </div>

        {/* Skills section */}
        <div className="text-center mt-16">
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-tricolor-navy mb-6">
              💻 Technical Skills & Expertise
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/20 rounded-xl p-4">
                <div className="text-2xl mb-2">⚛️</div>
                <p className="text-tricolor-navy font-medium">React.js</p>
              </div>
              <div className="bg-white/20 rounded-xl p-4">
                <div className="text-2xl mb-2">🟦</div>
                <p className="text-tricolor-navy font-medium">TypeScript</p>
              </div>
              <div className="bg-white/20 rounded-xl p-4">
                <div className="text-2xl mb-2">🟢</div>
                <p className="text-tricolor-navy font-medium">Node.js</p>
              </div>
              <div className="bg-white/20 rounded-xl p-4">
                <div className="text-2xl mb-2">🎨</div>
                <p className="text-tricolor-navy font-medium">UI/UX</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-5 w-6 h-6 bg-tricolor-saffron rounded-full animate-float opacity-60" />
      <div className="absolute top-40 right-10 w-4 h-4 bg-tricolor-green rounded-full animate-float opacity-60" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-20 left-16 w-8 h-8 bg-tricolor-navy rounded-full animate-float opacity-60" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-40 right-5 w-5 h-5 bg-tricolor-white border border-tricolor-navy rounded-full animate-float opacity-60" style={{ animationDelay: "0.5s" }} />
    </section>
  );
};
