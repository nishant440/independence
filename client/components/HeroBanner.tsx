import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export const HeroBanner: React.FC = () => {
  const [confetti, setConfetti] = useState<Array<{ id: number; x: number; color: string; size: number }>>([]);
  const [showCrowd, setShowCrowd] = useState(false);

  useEffect(() => {
    // Trigger crowd animation
    const timer = setTimeout(() => setShowCrowd(true), 500);

    // Generate confetti
    const generateConfetti = () => {
      const colors = ['#FF9933', '#FFFFFF', '#138808'];
      const newConfetti = Array.from({ length: 30 }, (_, i) => ({
        id: Date.now() + i,
        x: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 8 + 4,
      }));
      setConfetti(prev => [...prev.slice(-20), ...newConfetti]);
    };

    generateConfetti();
    const confettiInterval = setInterval(generateConfetti, 4000);

    return () => {
      clearTimeout(timer);
      clearInterval(confettiInterval);
    };
  }, []);

  // Removed crowd people as requested

  return (
    <section className="relative py-20 bg-gradient-to-b from-tricolor-white to-tricolor-green/10 overflow-hidden">
      {/* Confetti */}
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute animate-confetti pointer-events-none"
          style={{
            left: `${piece.x}%`,
            top: '-10px',
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            backgroundColor: piece.color,
            animationDuration: `${3 + Math.random() * 2}s`,
            animationDelay: `${Math.random() * 1}s`,
          }}
        />
      ))}

      <div className="container mx-auto px-4">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-tricolor-navy mb-4">
            Tribute to Our Freedom Fighters
          </h2>
          <p className="text-lg md:text-xl text-tricolor-navy/80 max-w-3xl mx-auto">
            Today we celebrate the spirit of freedom, unity, and the countless heroes who sacrificed their lives for our independence.
            From 1857 to 1947, brave souls fought tirelessly to free our motherland from colonial rule.
          </p>
        </div>

        {/* Freedom fighters values */}
        <div className="mb-16">
          <div className="bg-white/20 backdrop-blur-md rounded-3xl border border-white/30 shadow-xl p-8 md:p-12 max-w-6xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-semibold text-tricolor-navy text-center mb-8">
              🎊 Values That Led to Our Freedom 🎊
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-white/20 rounded-2xl">
                <div className="text-4xl mb-3">🧡</div>
                <h4 className="font-semibold text-tricolor-navy mb-2">Courage</h4>
                <p className="text-tricolor-navy/80 text-sm">Bravery of our martyrs who faced death fearlessly</p>
              </div>
              <div className="text-center p-6 bg-white/20 rounded-2xl">
                <div className="text-4xl mb-3">🤍</div>
                <h4 className="font-semibold text-tricolor-navy mb-2">Peace & Unity</h4>
                <p className="text-tricolor-navy/80 text-sm">Strength in unity across diverse communities</p>
              </div>
              <div className="text-center p-6 bg-white/20 rounded-2xl">
                <div className="text-4xl mb-3">💚</div>
                <h4 className="font-semibold text-tricolor-navy mb-2">Prosperity</h4>
                <p className="text-tricolor-navy/80 text-sm">Vision for a prosperous and free nation</p>
              </div>
            </div>

            {/* Timeline of freedom struggle */}
            <div className="bg-white/15 rounded-2xl p-6">
              <h4 className="text-xl font-semibold text-tricolor-navy mb-4 text-center">
                Journey to Freedom (1857-1947)
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center p-3 bg-white/20 rounded-xl">
                  <div className="font-bold text-tricolor-navy">1857</div>
                  <div className="text-sm text-tricolor-navy/80">First War of Independence</div>
                </div>
                <div className="text-center p-3 bg-white/20 rounded-xl">
                  <div className="font-bold text-tricolor-navy">1919</div>
                  <div className="text-sm text-tricolor-navy/80">Jallianwala Bagh</div>
                </div>
                <div className="text-center p-3 bg-white/20 rounded-xl">
                  <div className="font-bold text-tricolor-navy">1930</div>
                  <div className="text-sm text-tricolor-navy/80">Salt March</div>
                </div>
                <div className="text-center p-3 bg-white/20 rounded-xl">
                  <div className="font-bold text-tricolor-navy">1947</div>
                  <div className="text-sm text-tricolor-navy/80">Independence Day!</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Flag hoisting ceremony */}
        <div className="text-center mb-16">
          <div className="inline-block p-8 bg-white/20 backdrop-blur-sm rounded-3xl border border-white/30 shadow-xl max-w-2xl">
            <h3 className="text-2xl md:text-3xl font-semibold text-tricolor-navy mb-6">
              🏛️ Flag Hoisting Ceremony 2025
            </h3>
            <div className="flex justify-center items-end space-x-4 mb-6">
              {/* Flag pole */}
              <div className="w-2 bg-amber-800 h-32 relative">
                {/* Indian flag */}
                <div className="absolute top-0 -right-8 w-16 h-12 shadow-md animate-wave">
                  <div className="h-4 bg-tricolor-saffron"></div>
                  <div className="h-4 bg-tricolor-white flex items-center justify-center">
                    <div className="w-3 h-3 border border-tricolor-navy rounded-full flex items-center justify-center">
                      <div className="w-1 h-1 bg-tricolor-navy rounded-full"></div>
                    </div>
                  </div>
                  <div className="h-4 bg-tricolor-green"></div>
                </div>
              </div>
            </div>
            <p className="text-tricolor-navy font-medium mb-4">
              "A flag is not just a piece of cloth. It is a symbol of a nation's hopes and dreams."
            </p>
            <p className="text-tricolor-navy/80 text-sm">
              Every year since 1947, our tricolor has been hoisted with pride,
              remembering those who fought for this moment.
            </p>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center">
          <div className="inline-block p-6 bg-gradient-to-r from-tricolor-saffron/20 via-tricolor-white to-tricolor-green/20 rounded-2xl border border-tricolor-navy/20 backdrop-blur-sm">
            <h3 className="text-xl md:text-2xl font-semibold text-tricolor-navy mb-2">
              🎆 Join the Celebration! 🎆
            </h3>
            <p className="text-tricolor-navy/80">
              Share your Independence Day wishes and be part of this digital celebration
            </p>
          </div>
        </div>
      </div>

      {/* Decorative balloons */}
      <div className="absolute top-10 left-5 text-4xl animate-float">🎈</div>
      <div className="absolute top-20 right-5 text-3xl animate-float" style={{ animationDelay: "1s" }}>🎈</div>
      <div className="absolute bottom-20 left-10 text-5xl animate-float" style={{ animationDelay: "2s" }}>🎈</div>
    </section>
  );
};
