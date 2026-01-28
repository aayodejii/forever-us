import { useMemo } from 'react';

interface Heart {
  id: number;
  left: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
}

export function FloatingHearts() {
  const hearts = useMemo<Heart[]>(() => {
    return Array.from({ length: 10 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 14 + Math.random() * 16,
      opacity: 0.08 + Math.random() * 0.15,
      duration: 6 + Math.random() * 8,
      delay: Math.random() * 6,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <svg
          key={heart.id}
          className="absolute text-rose-300"
          style={{
            left: `${heart.left}%`,
            bottom: '-5%',
            width: heart.size,
            height: heart.size,
            opacity: heart.opacity,
            animation: `floatUp ${heart.duration}s ease-in-out ${heart.delay}s infinite`,
          }}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      ))}
      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-110vh) rotate(20deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
