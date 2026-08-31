import React from 'react';

export const KissingBirdsParty = () => {
  return (
    <div className="floating-decor-top-right" aria-label="Two white birds wearing party hats kissing with a pink heart">
      <svg width="150" height="135" viewBox="0 0 150 135" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="birdBlushParty" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(10 10) scale(10)">
            <stop stopColor="#FF85A1" stopOpacity="0.8" />
            <stop offset="1" stopColor="#FF85A1" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="heartGradParty" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF6584" />
            <stop offset="100%" stopColor="#E6195E" />
          </linearGradient>

          <linearGradient id="partyHatGrad1" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFCCD5" />
            <stop offset="100%" stopColor="#FF7597" />
          </linearGradient>

          <linearGradient id="partyHatGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#FFA07A" />
          </linearGradient>
        </defs>

        {/* Floating Pulsing Heart Above Birds */}
        <g className="pulsing-heart">
          <path
            d="M75 22 C75 22, 67 10, 57 12 C47 14, 46 25, 56 35 L75 50 L94 35 C104 25, 103 14, 93 12 C83 10, 75 22, 75 22 Z"
            fill="url(#heartGradParty)"
            filter="drop-shadow(0 2px 6px rgba(230, 25, 94, 0.4))"
          />
          {/* Sparkles */}
          <circle cx="50" cy="12" r="1.5" fill="#FFCCD5" />
          <circle cx="100" cy="14" r="2" fill="#FFD700" />
          <path d="M75 6 L76.5 9 L79.5 10 L76.5 11 L75 14 L73.5 11 L70.5 10 L73.5 9 Z" fill="#FFE5EC" />
        </g>

        {/* Left White Bird */}
        <g transform="translate(18, 52)">
          {/* Bird Body */}
          <ellipse cx="38" cy="38" rx="26" ry="24" fill="#FFFFFF" filter="drop-shadow(0 4px 8px rgba(90, 22, 46, 0.08))" />
          
          {/* Tiny Party Hat on Left Bird */}
          <g transform="translate(28, 4) rotate(-12)">
            <polygon points="10,0 2,24 18,24" fill="url(#partyHatGrad1)" stroke="#5A162E" strokeWidth="1" strokeLinejoin="round" />
            {/* Polka dots */}
            <circle cx="8" cy="16" r="1.5" fill="#FFFFFF" />
            <circle cx="14" cy="20" r="1.5" fill="#FFFFFF" />
            {/* Yellow pom-pom top */}
            <circle cx="10" cy="0" r="3.5" fill="#FFD700" />
          </g>

          {/* Wing */}
          <path d="M22 38 C18 46, 30 52, 36 44 C34 38, 26 36, 22 38 Z" fill="#F8F0F3" stroke="#F0D0D9" strokeWidth="1" />
          {/* Cute Eyes (^ ^) */}
          <path d="M42 30 Q45 25 48 30" stroke="#5A162E" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          {/* Pink Blush */}
          <ellipse cx="44" cy="36" rx="5" ry="4" fill="url(#birdBlushParty)" />
          {/* Beak pointing right towards other bird */}
          <path d="M62 33 L71 36 L62 40 Z" fill="#FFA07A" stroke="#E67E50" strokeWidth="1" strokeLinejoin="round" />
          {/* Tiny Tail */}
          <path d="M13 36 L4 30 L8 40 L4 44 L14 40 Z" fill="#FFFFFF" stroke="#F0D0D9" strokeWidth="1" />
          {/* Little Feet */}
          <path d="M32 61 L32 66 M42 61 L42 66" stroke="#FFA07A" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Right White Bird */}
        <g transform="translate(68, 52)">
          {/* Bird Body */}
          <ellipse cx="26" cy="38" rx="26" ry="24" fill="#FFFFFF" filter="drop-shadow(0 4px 8px rgba(90, 22, 46, 0.08))" />
          
          {/* Tiny Party Hat on Right Bird */}
          <g transform="translate(18, 4) rotate(12)">
            <polygon points="10,0 2,24 18,24" fill="url(#partyHatGrad2)" stroke="#5A162E" strokeWidth="1" strokeLinejoin="round" />
            {/* Polka dots */}
            <circle cx="10" cy="14" r="1.5" fill="#FFFFFF" />
            <circle cx="6" cy="20" r="1.5" fill="#FFFFFF" />
            {/* Pink pom-pom top */}
            <circle cx="10" cy="0" r="3.5" fill="#FF4878" />
          </g>

          {/* Wing */}
          <path d="M42 38 C46 46, 34 52, 28 44 C30 38, 38 36, 42 38 Z" fill="#F8F0F3" stroke="#F0D0D9" strokeWidth="1" />
          {/* Cute Eyes (^ ^) */}
          <path d="M16 30 Q19 25 22 30" stroke="#5A162E" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          {/* Pink Blush */}
          <ellipse cx="20" cy="36" rx="5" ry="4" fill="url(#birdBlushParty)" />
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
