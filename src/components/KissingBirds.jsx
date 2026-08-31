import React from 'react';

export const KissingBirds = () => {
  return (
    <div className="floating-decor-top-right" aria-label="Two white birds kissing with a pink heart">
      <svg width="150" height="130" viewBox="0 0 150 130" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="birdBlush" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(10 10) scale(10)">
            <stop stopColor="#FF85A1" stopOpacity="0.8" />
            <stop offset="1" stopColor="#FF85A1" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="heartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF6584" />
            <stop offset="100%" stopColor="#E6195E" />
          </linearGradient>

          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Floating Pulsing Heart Above Birds */}
        <g className="pulsing-heart">
          <path
            d="M75 24 C75 24, 67 12, 57 14 C47 16, 46 27, 56 37 L75 52 L94 37 C104 27, 103 16, 93 14 C83 12, 75 24, 75 24 Z"
            fill="url(#heartGrad)"
            filter="drop-shadow(0 2px 6px rgba(230, 25, 94, 0.4))"
          />
          {/* Sparkles around heart */}
          <circle cx="50" cy="14" r="1.5" fill="#FFCCD5" />
          <circle cx="100" cy="16" r="2" fill="#FFCCD5" />
          <path d="M75 8 L76.5 11 L79.5 12 L76.5 13 L75 16 L73.5 13 L70.5 12 L73.5 11 Z" fill="#FFE5EC" />
        </g>

        {/* Left White Bird */}
        <g transform="translate(18, 50)">
          {/* Bird Body */}
          <ellipse cx="38" cy="38" rx="26" ry="24" fill="#FFFFFF" filter="drop-shadow(0 4px 8px rgba(90, 22, 46, 0.08))" />
          {/* Wing */}
          <path d="M22 38 C18 46, 30 52, 36 44 C34 38, 26 36, 22 38 Z" fill="#F8F0F3" stroke="#F0D0D9" strokeWidth="1" />
          {/* Cute Eyes (^ ^) */}
          <path d="M42 30 Q45 25 48 30" stroke="#5A162E" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          {/* Pink Blush */}
          <ellipse cx="44" cy="36" rx="5" ry="4" fill="url(#birdBlush)" />
          {/* Beak pointing right towards other bird */}
          <path d="M62 33 L71 36 L62 40 Z" fill="#FFA07A" stroke="#E67E50" strokeWidth="1" strokeLinejoin="round" />
          {/* Tiny Tail */}
          <path d="M13 36 L4 30 L8 40 L4 44 L14 40 Z" fill="#FFFFFF" stroke="#F0D0D9" strokeWidth="1" />
          {/* Little Feet */}
          <path d="M32 61 L32 66 M42 61 L42 66" stroke="#FFA07A" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Right White Bird */}
        <g transform="translate(68, 50)">
          {/* Bird Body */}
          <ellipse cx="26" cy="38" rx="26" ry="24" fill="#FFFFFF" filter="drop-shadow(0 4px 8px rgba(90, 22, 46, 0.08))" />
          {/* Wing */}
          <path d="M42 38 C46 46, 34 52, 28 44 C30 38, 38 36, 42 38 Z" fill="#F8F0F3" stroke="#F0D0D9" strokeWidth="1" />
          {/* Cute Eyes (^ ^) */}
          <path d="M16 30 Q19 25 22 30" stroke="#5A162E" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          {/* Pink Blush */}
          <ellipse cx="20" cy="36" rx="5" ry="4" fill="url(#birdBlush)" />
          {/* Beak pointing left touching left bird's beak */}
          <path d="M2 33 L-7 36 L2 40 Z" fill="#FFA07A" stroke="#E67E50" strokeWidth="1" strokeLinejoin="round" />
          {/* Tiny Tail */}
          <path d="M51 36 L60 30 L56 40 L60 44 L50 40 Z" fill="#FFFFFF" stroke="#F0D0D9" strokeWidth="1" />
          {/* Little Feet */}
          <path d="M22 61 L22 66 M32 61 L32 66" stroke="#FFA07A" strokeWidth="2" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
};
