import React from 'react';

export const PaperAirplane = () => {
  return (
    <div className="floating-decor-bottom-left" aria-label="Pink paper airplane trailing a heart line">
      <svg width="220" height="180" viewBox="0 0 220 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="planeGradMain" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF7597" />
            <stop offset="100%" stopColor="#FF3B70" />
          </linearGradient>
          
          <linearGradient id="planeGradDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E6195E" />
            <stop offset="100%" stopColor="#9E0E3D" />
          </linearGradient>

          <linearGradient id="planeGradLight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFCCD5" />
            <stop offset="100%" stopColor="#FF85A1" />
          </linearGradient>
          
          <radialGradient id="trailGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FF85A1" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#FF85A1" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Heart Trail Path connecting to the tail of the plane */}
        {/* Trail starts at (20, 160), loops into a smooth heart loop, then leads to (150, 65) */}
        <path
          d="M20 160 
             C 10 140, 25 110, 48 105 
             C 70 100, 85 125, 75 145 
             C 60 170, 25 130, 45 90 
             C 58 64, 90 60, 110 75 
             C 128 88, 135 75, 152 64"
          fill="none"
          stroke="#FF4878"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="dashed-heart-trail"
        />

        {/* Secondary subtle glow path behind trail */}
        <path
          d="M20 160 
             C 10 140, 25 110, 48 105 
             C 70 100, 85 125, 75 145 
             C 60 170, 25 130, 45 90 
             C 58 64, 90 60, 110 75 
             C 128 88, 135 75, 152 64"
          fill="none"
          stroke="#FF85A1"
          strokeWidth="6"
          strokeOpacity="0.25"
          strokeLinecap="round"
        />

        {/* Little decorative floating mini-hearts along the trail */}
        <g transform="translate(42, 85) scale(0.6)">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#FF7597" opacity="0.8" />
        </g>
        
        {/* Pink Paper Airplane facing top-right */}
        <g transform="translate(150, 25) rotate(15)" filter="drop-shadow(0 6px 12px rgba(90, 22, 46, 0.15))">
          {/* Main Top Wing */}
          <polygon points="0,35 55,0 42,42" fill="url(#planeGradMain)" stroke="#5A162E" strokeWidth="0.8" strokeLinejoin="round" />
          
          {/* Under Fold / Side Wing */}
          <polygon points="0,35 42,42 25,48" fill="url(#planeGradDark)" stroke="#5A162E" strokeWidth="0.8" strokeLinejoin="round" />
          
          {/* Top Fold Layer */}
          <polygon points="0,35 55,0 20,28" fill="url(#planeGradLight)" stroke="#5A162E" strokeWidth="0.8" strokeLinejoin="round" />
          
          {/* Center Fold Line */}
          <line x1="0" y1="35" x2="55" y2="0" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.6" />
        </g>
      </svg>
    </div>
  );
};
