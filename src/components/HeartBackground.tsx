export function HeartBackground() {
  const hearts = [
    { top: '10%', left: '5%', size: 280, opacity: 0.03 },
    { top: '60%', right: '8%', size: 320, opacity: 0.025 },
    { top: '30%', left: '70%', size: 200, opacity: 0.035 },
    { top: '75%', left: '20%', size: 260, opacity: 0.02 },
    { top: '5%', right: '25%', size: 180, opacity: 0.03 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {hearts.map((heart, i) => (
        <svg
          key={i}
          className="absolute text-rose-400"
          style={{
            top: heart.top,
            left: heart.left,
            right: heart.right,
            width: heart.size,
            height: heart.size,
            opacity: heart.opacity,
          }}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      ))}
    </div>
  );
}
