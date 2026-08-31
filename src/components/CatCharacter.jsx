import React from 'react';

export const CatCharacter = ({ loveValue = 38 }) => {
  // Determine expression state based on love percentage
  const getExpression = () => {
    if (loveValue < 25) return 'hurt';
    if (loveValue <= 45) return 'grumpy'; // Default 38% state!
    if (loveValue <= 75) return 'curious';
    if (loveValue <= 95) return 'happy';
    return 'inLove';
  };

  const expression = getExpression();

  return (
    <div className="character-wrapper" aria-label={`Cute cat character (${expression} mood)`}>
      <svg className="character-svg" viewBox="0 0 160 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="catBodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#FFF0F3" />
          </linearGradient>
          
          <radialGradient id="catBlush" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FF7597" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#FF7597" stopOpacity="0" />
          </radialGradient>

          <filter id="blushFilter" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2.5" />
          </filter>
        </defs>

        {/* Floating Hearts for 100% State */}
        {expression === 'inLove' && (
          <g className="pulsing-heart">
            <path d="M40 25 C40 25, 34 18, 28 20 C22 22, 21 28, 27 34 L40 43 L53 34 C59 28, 58 22, 52 20 C46 18, 40 25, 40 25 Z" fill="#FF3B70" />
            <path d="M120 20 C120 20, 115 14, 110 15 C105 17, 104 22, 109 27 L120 34 L131 27 C136 22, 135 17, 130 15 C125 14, 120 20, 120 20 Z" fill="#FF7597" />
          </g>
        )}

        {/* Cat Main Body (Round Fluffy Shape) */}
        <path
          d="M80 30 
             C 120 30, 142 55, 142 90 
             C 142 125, 118 138, 80 138 
             C 42 138, 18 125, 18 90 
             C 18 55, 40 30, 80 30 Z"
          fill="url(#catBodyGrad)"
          stroke="#5A162E"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />

        {/* Left Ear */}
        <path
          d="M32 46 L18 14 C 18 14, 38 22, 48 34"
          fill="#FFF0F3"
          stroke="#5A162E"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Left Inner Ear Pink Pad */}
        <path d="M30 40 L22 20 C 22 20, 35 26, 42 34 Z" fill="#FFCCD5" />

        {/* Right Ear */}
        <path
          d="M128 46 L142 14 C 142 14, 122 22, 112 34"
          fill="#FFF0F3"
          stroke="#5A162E"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Right Inner Ear Pink Pad */}
        <path d="M130 40 L138 20 C 138 20, 125 26, 118 34 Z" fill="#FFCCD5" />

        {/* Spiky Fur Tufts on Top Center of Head */}
        <path
          d="M68 31 L73 18 L78 29 L83 15 L88 29 L93 19 L97 31"
          fill="#FFF0F3"
          stroke="#5A162E"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Soft Pink Blush on Cheeks */}
        <ellipse cx="44" cy="94" rx="10" ry="7" fill="url(#catBlush)" />
        <ellipse cx="116" cy="94" rx="10" ry="7" fill="url(#catBlush)" />

        {/* Cute Little Paws at Bottom */}
        <ellipse cx="56" cy="133" rx="12" ry="7" fill="#FFFFFF" stroke="#5A162E" strokeWidth="3" />
        <path d="M52 133 L52 137 M60 133 L60 137" stroke="#5A162E" strokeWidth="2" strokeLinecap="round" />
        
        <ellipse cx="104" cy="133" rx="12" ry="7" fill="#FFFFFF" stroke="#5A162E" strokeWidth="3" />
        <path d="M100 133 L100 137 M108 133 L108 137" stroke="#5A162E" strokeWidth="2" strokeLinecap="round" />

        {/* FACIAL EXPRESSIONS */}

        {/* Grumpy / Pouty Eyebrows (Default 38%) */}
        {(expression === 'grumpy' || expression === 'hurt') && (
          <g stroke="#5A162E" strokeWidth="3" strokeLinecap="round">
            <line x1="44" y1="64" x2="58" y2="70" />
            <line x1="116" y1="64" x2="102" y2="70" />
          </g>
        )}

        {/* EYES */}
        {expression === 'hurt' && (
          <g>
            {/* > < Eyes */}
            <path d="M44 76 L56 84 M44 84 L56 76" stroke="#5A162E" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M104 76 L116 84 M104 84 L116 76" stroke="#5A162E" strokeWidth="3.5" strokeLinecap="round" />
            {/* Tear Drop */}
            <path d="M36 88 C34 94, 38 98, 41 95 C43 92, 38 88, 36 88 Z" fill="#64B5F6" />
          </g>
        )}

        {expression === 'grumpy' && (
          <g>
            {/* Slightly annoyed rounded pouty eyes with top eyelid line */}
            <circle cx="52" cy="80" r="6.5" fill="#5A162E" />
            <circle cx="108" cy="80" r="6.5" fill="#5A162E" />
            {/* Eye glint */}
            <circle cx="50" cy="78" r="2" fill="#FFFFFF" />
            <circle cx="106" cy="78" r="2" fill="#FFFFFF" />
            {/* Flat top eyelid for grumpy look */}
            <path d="M43 75 H61" stroke="#5A162E" strokeWidth="3" strokeLinecap="round" />
            <path d="M99 75 H117" stroke="#5A162E" strokeWidth="3" strokeLinecap="round" />
          </g>
        )}

        {expression === 'curious' && (
          <g>
            {/* Big round curious eyes */}
            <circle cx="52" cy="80" r="7.5" fill="#5A162E" />
            <circle cx="108" cy="80" r="7.5" fill="#5A162E" />
            <circle cx="50" cy="77" r="2.5" fill="#FFFFFF" />
            <circle cx="106" cy="77" r="2.5" fill="#FFFFFF" />
          </g>
        )}

        {expression === 'happy' && (
          <g stroke="#5A162E" strokeWidth="3.5" strokeLinecap="round" fill="none">
            {/* Happy ^ ^ eyes */}
            <path d="M44 82 Q52 72 60 82" />
            <path d="M100 82 Q108 72 116 82" />
          </g>
        )}

        {expression === 'inLove' && (
          <g fill="#FF1744">
            {/* Heart Eyes ♥ ♥ */}
            <path d="M52 86 L44 78 C41 75, 41 71, 44 68 C47 66, 50 67, 52 70 C54 67, 57 66, 60 68 C63 71, 63 75, 60 78 Z" />
            <path d="M108 86 L100 78 C97 75, 97 71, 100 68 C103 66, 106 67, 108 70 C110 67, 113 66, 116 68 C119 71, 119 75, 116 78 Z" />
          </g>
        )}

        {/* MOUTH & NOSE */}
        {/* Cute tiny pink nose */}
        <polygon points="77,85 83,85 80,88" fill="#FF7597" />

        {/* Pouty / Downward Mouth for Grumpy & Hurt states */}
        {(expression === 'grumpy' || expression === 'hurt') && (
          <g stroke="#5A162E" strokeWidth="3" strokeLinecap="round" fill="none">
            {/* Inverted pouty mouth curve ︵ */}
            <path d="M72 96 Q80 90 88 96" />
          </g>
        )}

        {/* Neutral mouth for Curious */}
        {expression === 'curious' && (
          <g stroke="#5A162E" strokeWidth="3" strokeLinecap="round" fill="none">
            <path d="M73 93 Q76 96 80 93 Q84 96 87 93" />
          </g>
        )}

        {/* Happy smile for Happy & InLove */}
        {(expression === 'happy' || expression === 'inLove') && (
          <g stroke="#5A162E" strokeWidth="3" strokeLinecap="round" fill="none">
            <path d="M72 92 Q80 102 88 92" />
            {/* Cute open mouth tongue at 100% */}
            {expression === 'inLove' && (
              <path d="M75 95 Q80 104 85 95 Z" fill="#FF85A1" stroke="#5A162E" strokeWidth="2" />
            )}
          </g>
        )}

        {/* Whiskers */}
        <g stroke="#5A162E" strokeWidth="2" strokeLinecap="round" opacity="0.75">
          {/* Left Whiskers */}
          <line x1="34" y1="86" x2="16" y2="82" />
          <line x1="34" y1="92" x2="14" y2="94" />
          {/* Right Whiskers */}
          <line x1="126" y1="86" x2="144" y2="82" />
          <line x1="126" y1="92" x2="146" y2="94" />
        </g>
      </svg>
    </div>
  );
};
