import React, { useState, useEffect, useRef } from 'react';

export const UltimateAnimativeCat = ({ isPlaying }) => {
  const [catState, setCatState] = useState('idle'); // 'skid' | 'pouncing' | 'leaping' | 'sprinting' | 'grooming' | 'idle'
  const [pawPrints, setPawPrints] = useState([]);
  const [sparkles, setSparkles] = useState([]);
  const animationTimerRef = useRef(null);
  const pawTimerRef = useRef(null);

  // Handle Play / Pause State Transitions
  useEffect(() => {
    if (isPlaying) {
      // PLAY STATE: Skid enter -> Pounce along player -> Leap over thumbnails -> Sprint off screen with sparkles!
      setCatState('skid');

      // Sequence timer for play state animations
      animationTimerRef.current = setTimeout(() => {
        setCatState('pouncing');

        setTimeout(() => {
          setCatState('leaping');

          setTimeout(() => {
            setCatState('sprinting');

            // Spawn exit sparkles
            setTimeout(() => {
              const newSparkles = Array.from({ length: 6 }).map((_, i) => ({
                id: Date.now() + i,
                leftPercent: 88 + Math.random() * 8,
                topPercent: 70 + Math.random() * 10,
                scale: 0.8 + Math.random() * 0.6
              }));
              setSparkles(newSparkles);

              setTimeout(() => {
                setCatState('idle');
              }, 600);
            }, 1200);
          }, 1400);
        }, 1200);
      }, 700);
    } else {
      // PAUSE STATE: Instantly stop, look confused, sit down, and lazily groom paw!
      if (animationTimerRef.current) clearTimeout(animationTimerRef.current);
      setCatState('grooming');
    }

    return () => {
      if (animationTimerRef.current) clearTimeout(animationTimerRef.current);
    };
  }, [isPlaying]);

  // Paw Print Spawner (Leaves 5-second fading deep rose-pink paw print trails while active)
  useEffect(() => {
    if (isPlaying) {
      pawTimerRef.current = setInterval(() => {
        const newPaw = {
          id: Date.now() + Math.random(),
          leftPercent: 8 + Math.random() * 82,
          topPercent: 78 + (Math.random() - 0.5) * 8,
          rotation: (Math.random() - 0.5) * 30
        };

        setPawPrints((prev) => [...prev.slice(-12), newPaw]);
      }, 450);
    } else {
      if (pawTimerRef.current) clearInterval(pawTimerRef.current);
    }

    return () => {
      if (pawTimerRef.current) clearInterval(pawTimerRef.current);
    };
  }, [isPlaying]);

  return (
    <div className={`ultimate-cat-wrapper cat-state-${catState}`} aria-hidden="true">
      {/* 1. Dynamic SVG Fluffy Pastel-Orange Tabby Cat (Ghibli Style) */}
      <div className="cat-sprite-box">
        {/* Dust Puff Particles (Rendered during skid) */}
        {catState === 'skid' && (
          <div className="skid-dust-cloud">
            <span className="dust-puff dust-1">☁️</span>
            <span className="dust-puff dust-2">💨</span>
          </div>
        )}

        {/* Confused Question Mark (Rendered during grooming/pause state) */}
        {catState === 'grooming' && (
          <div className="confused-question-mark">
            <span>❓</span>
          </div>
        )}

        <svg width="90" height="70" viewBox="0 0 90 70" fill="none" className="ghibli-cat-svg">
          <g transform="translate(5, 5)">
            {/* Fluffy Tail */}
            <path
              d="M 12 35 Q 2 20, 8 8 Q 14 0, 20 10 Q 22 24, 18 35 Z"
              fill="#E67E22"
              stroke="#5A162E"
              strokeWidth="2.5"
              className="cat-fluffy-tail"
            />

            {/* Tabby Tail Stripes */}
            <path d="M 8 18 Q 12 14, 16 18" stroke="#D35400" strokeWidth="2" fill="none" />
            <path d="M 10 26 Q 14 22, 18 26" stroke="#D35400" strokeWidth="2" fill="none" />

            {/* Fluffy Orange Tabby Body Base */}
            <ellipse cx="42" cy="38" rx="26" ry="17" fill="#F39C12" stroke="#5A162E" strokeWidth="2.5" />
            {/* White Soft Belly Accent */}
            <ellipse cx="45" cy="44" rx="16" ry="9" fill="#FFF5E6" opacity="0.9" />

            {/* Tabby Body Stripes */}
            <path d="M 32 25 Q 35 32, 38 25" stroke="#D35400" strokeWidth="2.2" strokeLinecap="round" fill="none" />
            <path d="M 44 24 Q 47 31, 50 24" stroke="#D35400" strokeWidth="2.2" strokeLinecap="round" fill="none" />
            <path d="M 52 27 Q 55 33, 58 27" stroke="#D35400" strokeWidth="2.2" strokeLinecap="round" fill="none" />

            {/* Ghibli Round Cat Head */}
            <circle cx="64" cy="24" r="16" fill="#F39C12" stroke="#5A162E" strokeWidth="2.5" />
            <ellipse cx="64" cy="28" rx="12" ry="8" fill="#FFF5E6" opacity="0.9" />

            {/* Fluffy Cheeks Tufts */}
            <path d="M 48 24 L 44 26 L 47 29 Z" fill="#F39C12" stroke="#5A162E" strokeWidth="1.5" />
            <path d="M 78 24 L 84 26 L 80 29 Z" fill="#F39C12" stroke="#5A162E" strokeWidth="1.5" />

            {/* Pointy Ears */}
            <polygon points="52,14 46,2 56,10" fill="#E67E22" stroke="#5A162E" strokeWidth="2" />
            <polygon points="53,12 49,5 55,9" fill="#FFCCD5" />

            <polygon points="70,14 76,2 66,10" fill="#F39C12" stroke="#5A162E" strokeWidth="2" />
            <polygon points="69,12 73,5 67,9" fill="#FFCCD5" />

            {/* Big Expressive Ghibli Eyes */}
            {catState === 'grooming' ? (
              // Grooming / Looking confused eyes: one open, one winking!
              <>
                <circle cx="59" cy="22" r="3.5" fill="#5A162E" />
                <path d="M 68 22 Q 72 18, 75 22" stroke="#5A162E" strokeWidth="2" strokeLinecap="round" fill="none" />
              </>
            ) : (
              // Pouncing / Sprinting joyful Ghibli eyes!
              <>
                <circle cx="59" cy="22" r="3.8" fill="#5A162E" />
                <circle cx="60" cy="20.5" r="1.2" fill="#FFFFFF" />
                <circle cx="71" cy="22" r="3.8" fill="#5A162E" />
                <circle cx="72" cy="20.5" r="1.2" fill="#FFFFFF" />
              </>
            )}

            {/* Nose & Cute Whisker Mouth */}
            <polygon points="65,27 63,25 67,25" fill="#FF4878" />
            <path d="M 65 27 Q 61 32, 57 29 M 65 27 Q 69 32, 73 29" stroke="#5A162E" strokeWidth="1.8" strokeLinecap="round" fill="none" />

            {/* Whiskers */}
            <line x1="77" y1="26" x2="87" y2="24" stroke="#5A162E" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="77" y1="28" x2="86" y2="30" stroke="#5A162E" strokeWidth="1.2" strokeLinecap="round" />

            {/* Blush Cheeks */}
            <ellipse cx="54" cy="27" rx="3.5" ry="2" fill="#FF85A1" opacity="0.8" />
            <ellipse cx="74" cy="27" rx="3.5" ry="2" fill="#FF85A1" opacity="0.8" />

            {/* Dynamic Running / Pouncing Paws */}
            {catState === 'grooming' ? (
              // Licking / Grooming Paw
              <g className="cat-grooming-paw">
                <ellipse cx="62" cy="38" rx="5" ry="7" fill="#FFF5E6" stroke="#5A162E" strokeWidth="2" transform="rotate(-30 62 38)" />
                <line x1="28" y1="48" x2="28" y2="58" stroke="#5A162E" strokeWidth="3" strokeLinecap="round" />
                <line x1="45" y1="48" x2="45" y2="58" stroke="#5A162E" strokeWidth="3" strokeLinecap="round" />
              </g>
            ) : (
              // Pouncing & Leaping Legs
              <g className="cat-dynamic-legs">
                <line x1="26" y1="48" x2="18" y2="60" stroke="#5A162E" strokeWidth="3" strokeLinecap="round" />
                <line x1="36" y1="48" x2="44" y2="60" stroke="#5A162E" strokeWidth="3" strokeLinecap="round" />
                <line x1="50" y1="48" x2="42" y2="60" stroke="#5A162E" strokeWidth="3" strokeLinecap="round" />
                <line x1="58" y1="48" x2="66" y2="60" stroke="#5A162E" strokeWidth="3" strokeLinecap="round" />
              </g>
            )}
          </g>
        </svg>
      </div>

      {/* 2. Slow-Fading Deep Rose-Pink Paw Print Trail Layer (5 Seconds Duration) */}
      <div className="deep-rose-paw-trail-layer">
        {pawPrints.map((paw) => (
          <span
            key={paw.id}
            className="slow-fade-paw-print"
            style={{
              left: `${paw.leftPercent}%`,
              top: `${paw.topPercent}%`,
              transform: `rotate(${paw.rotation}deg)`
            }}
          >
            🐾
          </span>
        ))}
      </div>

      {/* 3. Pink Sparkle Exit Particles */}
      {sparkles.length > 0 && (
        <div className="pink-sparkle-exit-layer">
          {sparkles.map((spk) => (
            <span
              key={spk.id}
              className="pink-sparkle-particle"
              style={{
                left: `${spk.leftPercent}%`,
                top: `${spk.topPercent}%`,
                transform: `scale(${spk.scale})`
              }}
            >
              ✨
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
