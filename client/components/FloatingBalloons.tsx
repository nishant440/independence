import React, { useEffect, useState } from 'react';

interface Balloon {
  id: number;
  x: number;
  size: number;
  color: string;
  speed: number;
}

export const FloatingBalloons: React.FC = () => {
  const [balloons, setBalloons] = useState<Balloon[]>([]);

  const balloonColors = ['🧡', '🤍', '💚', '💙'];

  useEffect(() => {
    const generateBalloons = () => {
      const newBalloons = Array.from({ length: 6 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        size: Math.random() * 20 + 20,
        color: balloonColors[Math.floor(Math.random() * balloonColors.length)],
        speed: Math.random() * 10 + 5,
      }));
      setBalloons(newBalloons);
    };

    generateBalloons();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {balloons.map((balloon) => (
        <div
          key={balloon.id}
          className="absolute animate-float"
          style={{
            left: `${balloon.x}%`,
            bottom: '-10%',
            fontSize: `${balloon.size}px`,
            animationDuration: `${balloon.speed}s`,
            animationDelay: `${balloon.id * 0.5}s`,
          }}
        >
          <div className="relative">
            {/* Balloon */}
            <div 
              className="text-center hover:scale-110 transition-transform duration-300"
              style={{ filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.2))' }}
            >
              🎈
            </div>
            
            {/* String */}
            <div 
              className="absolute top-full left-1/2 transform -translate-x-1/2 w-px bg-gray-400"
              style={{ height: `${balloon.size / 2}px` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
