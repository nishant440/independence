import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';

interface FlagCeremonyProps {
  userDetails: {
    name: string;
    city: string;
  };
}

export const FlagCeremony: React.FC<FlagCeremonyProps> = ({ userDetails }) => {
  const [flagOpened, setFlagOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(false);
  const [showFreedomFighters, setShowFreedomFighters] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element for the national anthem
    audioRef.current = new Audio();
    // Using a placeholder URL - you can replace with actual national anthem URL
    audioRef.current.src = "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav";
    audioRef.current.preload = "auto";
    
    audioRef.current.addEventListener('ended', () => {
      setIsPlaying(false);
    });

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const handleFlagClick = () => {
    if (!flagOpened) {
      setFlagOpened(true);
      setTimeout(() => setShowPlayButton(true), 1000);
      setTimeout(() => setShowFreedomFighters(true), 2000);
    }
  };

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().catch(() => {
          // Fallback for browsers that require user interaction
          alert('Please turn on volume and click again to play the audio!');
        });
        setIsPlaying(true);
      }
    }
  };

  const freedomFighters = [
    {
      name: "Mahatma Gandhi",
      contribution: "Led the Non-Violence Movement and inspired millions through Satyagraha",
      years: "1869-1948"
    },
    {
      name: "Bhagat Singh",
      contribution: "Young revolutionary who sacrificed his life for freedom at age 23",
      years: "1907-1931"
    },
    {
      name: "Subhas Chandra Bose",
      contribution: "Formed Indian National Army and fought against British rule",
      years: "1897-1945"
    },
    {
      name: "Rani Lakshmibai",
      contribution: "Fierce warrior queen who fought bravely in the 1857 revolt",
      years: "1828-1858"
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-green-100 py-20 px-4 relative overflow-hidden">
      {/* Background clouds */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 text-6xl animate-float">☁️</div>
        <div className="absolute top-32 right-20 text-4xl animate-float" style={{ animationDelay: "2s" }}>☁️</div>
        <div className="absolute top-40 left-1/3 text-5xl animate-float" style={{ animationDelay: "1s" }}>☁️</div>
      </div>

      <div className="container mx-auto text-center">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-tricolor-navy mb-4">
            🏛️ Flag Hoisting Ceremony 2025 🏛️
          </h2>
          <p className="text-lg md:text-xl text-tricolor-navy/80 max-w-3xl mx-auto">
            Welcome {userDetails.name} from {userDetails.city}, let's salute our tricolor flag together!
          </p>
          <p className="text-md text-tricolor-navy/70 mt-2">
            (Click on the flag to open it and listen to the national song)
          </p>
        </div>

        {/* Main ceremony area */}
        <div className="max-w-4xl mx-auto">
          {/* Red Fort style building */}
          <div className="mb-8">
            <div className="bg-red-800/80 backdrop-blur-sm rounded-t-3xl p-6 border-4 border-red-900 shadow-2xl">
              <div className="flex justify-center space-x-4 mb-4">
                <div className="w-4 h-8 bg-red-900 rounded-t-full"></div>
                <div className="w-4 h-8 bg-red-900 rounded-t-full"></div>
                <div className="w-4 h-8 bg-red-900 rounded-t-full"></div>
              </div>
              <p className="text-white font-semibold">🏰 Red Fort - New Delhi</p>
            </div>
          </div>

          {/* Flag pole and flag */}
          <div className="relative bg-white/20 backdrop-blur-sm rounded-3xl p-12 border border-white/30 shadow-2xl">
            <div className="flex justify-center items-end mb-8">
              {/* Flag pole */}
              <div className="relative">
                <div className="w-3 h-64 bg-gradient-to-b from-gray-400 to-amber-800 rounded-full shadow-lg"></div>
                
                {/* Flag */}
                <div 
                  className={`absolute top-0 -right-20 cursor-pointer transform transition-all duration-1000 ${
                    flagOpened ? 'scale-100 opacity-100' : 'scale-75 opacity-80'
                  } hover:scale-105`}
                  onClick={handleFlagClick}
                >
                  <div className={`w-24 h-18 shadow-xl border-2 border-gray-200 transform transition-all duration-1000 ${
                    flagOpened ? 'animate-wave' : ''
                  }`}>
                    {/* Saffron stripe */}
                    <div className="h-6 bg-tricolor-saffron border-b border-gray-300"></div>
                    
                    {/* White stripe with Ashoka Chakra */}
                    <div className="h-6 bg-tricolor-white flex items-center justify-center border-b border-gray-300 relative">
                      <div className="w-5 h-5 border-2 border-tricolor-navy rounded-full flex items-center justify-center">
                        {/* Ashoka Chakra spokes */}
                        <div className="absolute w-full h-px bg-tricolor-navy transform rotate-0"></div>
                        <div className="absolute w-full h-px bg-tricolor-navy transform rotate-45"></div>
                        <div className="absolute w-full h-px bg-tricolor-navy transform rotate-90"></div>
                        <div className="absolute w-full h-px bg-tricolor-navy transform rotate-135"></div>
                        <div className="w-1 h-1 bg-tricolor-navy rounded-full"></div>
                      </div>
                    </div>
                    
                    {/* Green stripe */}
                    <div className="h-6 bg-tricolor-green"></div>
                  </div>
                </div>

                {/* Flag rope */}
                <div className="absolute top-0 -right-2 w-px h-20 bg-gray-600"></div>
              </div>
            </div>

            {/* Click instruction */}
            {!flagOpened && (
              <div className="mb-6 animate-pulse">
                <p className="text-tricolor-navy font-semibold text-lg">
                  👆 Click on the Flag!
                </p>
              </div>
            )}

            {/* Audio controls */}
            {showPlayButton && (
              <div className="animate-bounce mb-8">
                <button
                  onClick={toggleAudio}
                  className="bg-gradient-to-r from-tricolor-saffron to-tricolor-green hover:from-tricolor-green hover:to-tricolor-saffron text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-110 shadow-xl flex items-center space-x-3 mx-auto"
                >
                  {isPlaying ? (
                    <>
                      <Pause size={24} />
                      <span>Pause Song</span>
                    </>
                  ) : (
                    <>
                      <Play size={24} />
                      <span>🎵 Play National Song 🎵</span>
                    </>
                  )}
                  <Volume2 size={20} />
                </button>
              </div>
            )}

            {/* Ceremony message */}
            {flagOpened && (
              <div className="space-y-6 animate-fade-in">
                <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 border border-white/40">
                  <h3 className="text-2xl font-bold text-tricolor-navy mb-4">
                    🇮🇳 Salute to our Tricolor! 🇮🇳
                  </h3>
                  <div className="space-y-3 text-tricolor-navy">
                    <p className="font-semibold text-lg">
                      "Saare jahan se achcha, Hindostan hamara"
                    </p>
                    <p>
                      Today reminds us how precious our freedom is and the sacrifices made for it.
                    </p>
                    <p className="text-lg font-semibold">
                      🧡 Jai Hind! 🤍 Vande Mataram! 💚
                    </p>
                  </div>
                </div>

                {/* Crowd cheering */}
                <div className="grid grid-cols-6 md:grid-cols-10 gap-2 mt-8">
                  {Array.from({ length: 20 }, (_, i) => (
                    <div key={i} className="text-2xl animate-bounce" style={{ animationDelay: `${i * 0.1}s` }}>
                      {i % 4 === 0 ? '🙋‍♂️' : i % 4 === 1 ? '🙋‍♀️' : i % 4 === 2 ? '👨‍👩‍👧‍👦' : '🧑‍🤝‍🧑'}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Freedom Fighters Section */}
          {showFreedomFighters && (
            <div className="mt-16 animate-fade-in">
              <h3 className="text-3xl md:text-4xl font-bold text-tricolor-navy mb-8">
                🌟 Our Freedom Fighters - Heroes of Independence 🌟
              </h3>
              <p className="text-lg text-tricolor-navy/80 mb-8">
                Remembering the brave souls who fought for our freedom and made independence possible
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {freedomFighters.map((fighter, index) => (
                  <div 
                    key={index}
                    className="bg-white/25 backdrop-blur-md rounded-2xl p-6 border border-white/30 hover:scale-105 transition-all duration-300 shadow-xl"
                  >
                    <div className="text-center mb-4">
                      <div className="text-4xl mb-2">🏆</div>
                      <h4 className="text-xl font-bold text-tricolor-navy">{fighter.name}</h4>
                      <p className="text-sm text-tricolor-navy/70">({fighter.years})</p>
                    </div>
                    <p className="text-tricolor-navy text-sm leading-relaxed">
                      {fighter.contribution}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                <h4 className="text-xl font-semibold text-tricolor-navy mb-4">
                  How They Fought for Our Freedom:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-tricolor-navy">
                  <div className="text-center p-4 bg-white/20 rounded-xl">
                    <div className="text-2xl mb-2">✊</div>
                    <h5 className="font-semibold mb-2">Non-Violence Movement</h5>
                    <p>Peaceful protests, boycotts, and civil disobedience</p>
                  </div>
                  <div className="text-center p-4 bg-white/20 rounded-xl">
                    <div className="text-2xl mb-2">⚔️</div>
                    <h5 className="font-semibold mb-2">Armed Resistance</h5>
                    <p>Revolutionary activities and armed struggle</p>
                  </div>
                  <div className="text-center p-4 bg-white/20 rounded-xl">
                    <div className="text-2xl mb-2">📢</div>
                    <h5 className="font-semibold mb-2">Mass Movements</h5>
                    <p>Organizing people and spreading awareness</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Footer message */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
              <p className="text-tricolor-navy text-lg">
                🎆 Thank you {userDetails.name}! Happy Independence Day 2025! 🎆
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-5 text-3xl animate-float">🎈</div>
      <div className="absolute bottom-20 right-10 text-4xl animate-float" style={{ animationDelay: "1s" }}>🎊</div>
      <div className="absolute top-40 right-5 text-2xl animate-sparkle">✨</div>
      <div className="absolute bottom-40 left-10 text-3xl animate-sparkle" style={{ animationDelay: "2s" }}>⭐</div>
    </section>
  );
};
