import React, { useState, useCallback } from 'react';

interface Firework {
  id: number;
  x: number;
  y: number;
  color: string;
}

interface FireworksProps {
  children: React.ReactNode;
}

export const Fireworks: React.FC<FireworksProps> = ({ children }) => {
  const [fireworks, setFireworks] = useState<Firework[]>([]);

  const colors = ['#FF9933', '#FFFFFF', '#138808', '#000080'];

  const createFirework = useCallback((e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    const newFirework: Firework = {
      id: Date.now() + Math.random(),
      x,
      y,
      color: colors[Math.floor(Math.random() * colors.length)],
    };

    setFireworks(prev => [...prev, newFirework]);

    // Remove firework after animation
    setTimeout(() => {
      setFireworks(prev => prev.filter(fw => fw.id !== newFirework.id));
    }, 600);
  }, []);

  return (
    <div className="relative" onClick={createFirework}>
      {children}
      
      {/* Fireworks */}
      {fireworks.map((firework) => (
        <div
          key={firework.id}
          className="absolute pointer-events-none"
          style={{
            left: `${firework.x}%`,
            top: `${firework.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          {/* Center burst */}
          <div
            className="absolute w-4 h-4 rounded-full animate-firework"
            style={{ backgroundColor: firework.color }}
          />
          
          {/* Sparks */}
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full animate-firework"
              style={{
                backgroundColor: firework.color,
                left: `${Math.cos((i * 45) * Math.PI / 180) * 20}px`,
                top: `${Math.sin((i * 45) * Math.PI / 180) * 20}px`,
                animationDelay: `${i * 0.05}s`,
              }}
            />
          ))}
          
          {/* Additional sparks */}
          {Array.from({ length: 12 }, (_, i) => (
            <div
              key={`spark-${i}`}
              className="absolute w-1 h-1 rounded-full animate-firework opacity-80"
              style={{
                backgroundColor: firework.color,
                left: `${Math.cos((i * 30) * Math.PI / 180) * 30}px`,
                top: `${Math.sin((i * 30) * Math.PI / 180) * 30}px`,
                animationDelay: `${i * 0.03}s`,
                animationDuration: '0.8s',
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
