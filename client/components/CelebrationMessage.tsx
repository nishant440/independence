import React, { useEffect, useState } from 'react';
import { Heart, Star, Users } from 'lucide-react';

interface UserDetails {
  name: string;
  phone: string;
  email: string;
  city: string;
  age: string;
}

interface CelebrationMessageProps {
  userDetails: UserDetails;
  onContinue: () => void;
}

export const CelebrationMessage: React.FC<CelebrationMessageProps> = ({ userDetails, onContinue }) => {
  const [showMessage, setShowMessage] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [confetti, setConfetti] = useState<Array<{ id: number; x: number; color: string }>>([]);

  useEffect(() => {
    // Show message with delay
    setTimeout(() => setShowMessage(true), 500);
    setTimeout(() => setShowButton(true), 2000);

    // Generate confetti
    const generateConfetti = () => {
      const colors = ['#FF9933', '#FFFFFF', '#138808'];
      const newConfetti = Array.from({ length: 20 }, (_, i) => ({
        id: Date.now() + i,
        x: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
      }));
      setConfetti(prev => [...prev.slice(-30), ...newConfetti]);
    };

    generateConfetti();
    const interval = setInterval(generateConfetti, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-tricolor-saffron/30 via-tricolor-white to-tricolor-green/30 flex items-center justify-center py-20 px-4 relative overflow-hidden">
      {/* Confetti */}
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute w-3 h-3 animate-confetti pointer-events-none"
          style={{
            left: `${piece.x}%`,
            top: '-10px',
            backgroundColor: piece.color,
            animationDuration: `${3 + Math.random()}s`,
          }}
        />
      ))}

      <div className="text-center max-w-2xl mx-auto">
        {/* Welcome message */}
        <div className={`transform transition-all duration-1000 ${showMessage ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
          {/* Celebration icon */}
          <div className="mb-8">
            <div className="inline-block p-6 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 shadow-xl">
              <div className="text-6xl animate-bounce">🎉</div>
            </div>
          </div>

          {/* Main message */}
          <div className="bg-white/20 backdrop-blur-md rounded-3xl border border-white/30 shadow-2xl p-8 mb-8">
            <h1 className="text-3xl md:text-5xl font-bold text-tricolor-navy mb-4">
              Thank You {userDetails.name}! 🇮🇳
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-tricolor-navy mb-6">
              Welcome to Independence Day 2025 Celebration!
            </h2>

            <div className="space-y-4 text-lg text-tricolor-navy/80">
              <p>
                🎊 Welcome to this joyous Independence Day celebration! 🎊
              </p>
              <p>
                You have joined us from {userDetails.city} and we are delighted to have you!
              </p>
              <p>
                Let's celebrate together our nation's freedom and independence! 🧡🤍💚
              </p>
            </div>
          </div>

          {/* User details summary */}
          <div className="bg-white/15 backdrop-blur-sm rounded-2xl border border-white/20 p-6 mb-8">
            <h3 className="text-xl font-semibold text-tricolor-navy mb-4 flex items-center justify-center space-x-2">
              <Users size={24} />
              <span>Your Information</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-tricolor-navy">
              <div className="flex items-center space-x-2">
                <Star size={16} className="text-tricolor-saffron" />
                <span><strong>Name:</strong> {userDetails.name}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star size={16} className="text-tricolor-green" />
                <span><strong>City:</strong> {userDetails.city}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star size={16} className="text-tricolor-saffron" />
                <span><strong>Age:</strong> {userDetails.age} years</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star size={16} className="text-tricolor-green" />
                <span><strong>Phone:</strong> {userDetails.phone}</span>
              </div>
            </div>
          </div>

          {/* Patriotic messages */}
          <div className="space-y-4 mb-8">
            <div className="bg-tricolor-saffron/20 backdrop-blur-sm rounded-2xl p-4 border border-tricolor-saffron/30">
              <p className="text-tricolor-navy font-medium">
                🧡 "This festival of freedom reminds us that the sacrifice of our brave martyrs was not in vain!"
              </p>
            </div>
            <div className="bg-tricolor-green/20 backdrop-blur-sm rounded-2xl p-4 border border-tricolor-green/30">
              <p className="text-tricolor-navy font-medium">
                💚 "Unity is strength - let's work together to make our country even stronger!"
              </p>
            </div>
          </div>

          {/* Continue button */}
          {showButton && (
            <div className="animate-bounce">
              <button
                onClick={onContinue}
                className="bg-gradient-to-r from-tricolor-saffron to-tricolor-green hover:from-tricolor-green hover:to-tricolor-saffron text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-xl flex items-center space-x-3 mx-auto"
              >
                <span className="text-xl">🏛️</span>
                <span>View Flag Ceremony</span>
                <span className="text-xl">🇮🇳</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-10 left-10 text-4xl animate-float">🎈</div>
      <div className="absolute top-20 right-20 text-3xl animate-float" style={{ animationDelay: "1s" }}>🎊</div>
      <div className="absolute bottom-20 left-20 text-5xl animate-float" style={{ animationDelay: "2s" }}>🎆</div>
      <div className="absolute bottom-10 right-10 text-2xl animate-float" style={{ animationDelay: "0.5s" }}>✨</div>
      
      {/* Background hearts */}
      <div className="absolute top-1/4 left-1/4 opacity-20">
        <Heart size={60} className="text-tricolor-saffron animate-pulse" />
      </div>
      <div className="absolute top-3/4 right-1/4 opacity-20">
        <Heart size={60} className="text-tricolor-green animate-pulse" style={{ animationDelay: "1s" }} />
      </div>
    </section>
  );
};
