import React, { useMemo } from 'react';

export const BokehConfettiOverlay = () => {
  // Generate deterministic bokeh circles
  const bokehCircles = useMemo(() => {
    return Array.from({ length: 9 }).map((_, i) => ({
      id: i,
      size: 80 + (i * 35) % 120,
      left: `${(i * 12 + 8) % 90}%`,
      top: `${(i * 15 + 10) % 85}%`,
      delay: `${(i * 0.7) % 5}s`,
      duration: `${8 + (i * 2) % 6}s`,
      color: i % 2 === 0 ? 'rgba(255, 204, 213, 0.45)' : 'rgba(255, 240, 243, 0.6)'
    }));
  }, []);

  // Generate gentle falling confetti & glitter particles
  const confettiParticles = useMemo(() => {
    const colors = ['#FF85A1', '#FFCCD5', '#E6195E', '#FFD700', '#FFE58F', '#FF4878'];
    const shapes = ['rect', 'circle', 'star'];

    return Array.from({ length: 32 }).map((_, i) => {
      const left = `${(i * 3.1 + 2) % 98}%`;
      const delay = `${(i * 0.4) % 8}s`;
      const duration = `${7 + (i * 0.6) % 6}s`;
      const size = 6 + (i % 4) * 3;
      const color = colors[i % colors.length];
      const shape = shapes[i % shapes.length];
      const rotate = `${(i * 45) % 360}deg`;

      return { id: i, left, delay, duration, size, color, shape, rotate };
    });
  }, []);

  return (
    <div className="bokeh-confetti-container" aria-hidden="true">
      {/* Light Diffused Bokeh Circles Layer */}
      <div className="bokeh-layer">
        {bokehCircles.map((b) => (
          <div
            key={b.id}
            className="bokeh-circle"
            style={{
              width: `${b.size}px`,
              height: `${b.size}px`,
              left: b.left,
              top: b.top,
              backgroundColor: b.color,
              animationDelay: b.delay,
              animationDuration: b.duration
            }}
          />
        ))}
      </div>

      {/* Gentle Falling Pastel Pink & Gold Confetti Overlay */}
      <div className="confetti-layer">
        {confettiParticles.map((p) => (
          <div
            key={p.id}
            className={`confetti-particle ${p.shape}`}
            style={{
              left: p.left,
              animationDelay: p.delay,
              animationDuration: p.duration,
              width: `${p.size}px`,
              height: p.shape === 'rect' ? `${p.size * 1.5}px` : `${p.size}px`,
              backgroundColor: p.shape !== 'star' ? p.color : 'transparent',
              transform: `rotate(${p.rotate})`
            }}
          >
            {p.shape === 'star' && (
              <svg width={p.size * 1.5} height={p.size * 1.5} viewBox="0 0 24 24" fill={p.color}>
                <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
