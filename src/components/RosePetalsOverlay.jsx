import React, { useMemo } from 'react';

export const RosePetalsOverlay = () => {
  // Generate 16 floating rose petals with randomized speeds, sizes, and delays
  const petals = useMemo(() => {
    return Array.from({ length: 16 }).map((_, index) => ({
      id: index,
      left: `${(index * 6.2 + Math.random() * 5) % 96}%`,
      size: 14 + Math.random() * 12,
      duration: 7 + Math.random() * 6,
      delay: Math.random() * 5,
      rotation: Math.random() * 360,
      opacity: 0.5 + Math.random() * 0.45
    }));
  }, []);

  return (
    <div className="rose-petals-overlay" aria-hidden="true">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="rose-petal"
          style={{
            left: petal.left,
            width: `${petal.size}px`,
            height: `${petal.size * 1.3}px`,
            animationDuration: `${petal.duration}s`,
            animationDelay: `${petal.delay}s`,
            opacity: petal.opacity,
            transform: `rotate(${petal.rotation}deg)`
          }}
        >
          <svg viewBox="0 0 24 32" fill="none">
            <path
              d="M12 0 C18 6, 24 14, 20 24 C16 32, 8 32, 4 24 C0 14, 6 6, 12 0 Z"
              fill="#E6195E"
              opacity="0.8"
            />
            <path
              d="M12 4 C16 9, 20 16, 17 23 C14 28, 8 28, 6 22 C4 15, 8 9, 12 4 Z"
              fill="#FF7597"
              opacity="0.9"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};
