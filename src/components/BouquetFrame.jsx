import React from 'react';

export const BouquetFrame = () => {
  return (
    <div className="bouquet-frame-container">
      {/* Decorative Scalloped (Wavy) Pink Outer Border Frame */}
      <svg className="scalloped-border-svg" viewBox="0 0 240 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="frameShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#5A162E" floodOpacity="0.12" />
          </filter>
        </defs>

        {/* Scalloped Wavy Outer Path */}
        <path
          d="M 20 10 
             Q 30 0, 40 10 Q 50 0, 60 10 Q 70 0, 80 10 Q 90 0, 100 10 Q 110 0, 120 10 Q 130 0, 140 10 Q 150 0, 160 10 Q 170 0, 180 10 Q 190 0, 200 10 Q 210 0, 220 10
             Q 230 20, 230 30 Q 240 40, 230 50 Q 240 60, 230 70 Q 240 80, 230 90 Q 240 100, 230 110 Q 240 120, 230 130 Q 240 140, 230 150 Q 240 160, 230 170 Q 240 180, 230 190 Q 240 200, 230 210 Q 240 220, 230 230 Q 240 240, 230 250 Q 240 260, 230 270 Q 240 280, 230 290 Q 230 300, 220 310
             Q 210 320, 200 310 Q 190 320, 180 310 Q 170 320, 160 310 Q 150 320, 140 310 Q 130 320, 120 310 Q 110 320, 100 310 Q 90 320, 80 310 Q 70 320, 60 310 Q 50 320, 40 310 Q 30 320, 20 310
             Q 10 300, 10 290 Q 0 280, 10 270 Q 0 260, 10 250 Q 0 240, 10 230 Q 0 220, 10 210 Q 0 200, 10 190 Q 0 180, 10 170 Q 0 160, 10 150 Q 0 140, 10 130 Q 0 120, 10 110 Q 0 100, 10 90 Q 0 80, 10 70 Q 0 60, 10 50 Q 0 40, 10 30 Q 10 20, 20 10 Z"
          fill="#FFD6E3"
          stroke="#FF85A1"
          strokeWidth="2.5"
          filter="url(#frameShadow)"
        />

        {/* Inner Rectangular White Card Area */}
        <rect x="22" y="22" width="196" height="276" rx="14" fill="#FFFFFF" stroke="#FFCCD5" strokeWidth="2" />
      </svg>

      {/* Central Illustration of Deep Red Roses wrapped in white paper tied with a red ribbon */}
      <div className="bouquet-illustration-wrapper">
        <svg className="bouquet-svg" viewBox="0 0 200 260" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="bouquetDropShadow" x="-15%" y="-15%" width="130%" height="130%">
              <feDropShadow dx="0" dy="10" stdDeviation="12" floodColor="#5A162E" floodOpacity="0.2" />
            </filter>

            <linearGradient id="wrapperGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#F9F0F3" />
            </linearGradient>

            <linearGradient id="roseRed1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E6195E" />
              <stop offset="50%" stopColor="#B3003B" />
              <stop offset="100%" stopColor="#6A0021" />
            </linearGradient>

            <linearGradient id="roseRed2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF2A6D" />
              <stop offset="100%" stopColor="#990033" />
            </linearGradient>

            <linearGradient id="ribbonRed" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF1744" />
              <stop offset="100%" stopColor="#B71C1C" />
            </linearGradient>
          </defs>

          {/* Group with Drop Shadow */}
          <g filter="url(#bouquetDropShadow)">
            {/* White Wrapping Paper Cone */}
            <path
              d="M 50 120 L 150 120 L 125 240 Q 100 255, 75 240 Z"
              fill="url(#wrapperGrad)"
              stroke="#E2D4DA"
              strokeWidth="2"
            />
            {/* Paper Folds & Highlights */}
            <path d="M 50 120 Q 80 150, 100 248" stroke="#F0E2E7" strokeWidth="2" fill="none" />
            <path d="M 150 120 Q 120 150, 100 248" stroke="#F0E2E7" strokeWidth="2" fill="none" />
            
            {/* Paper Collar Wings */}
            <path d="M 35 95 L 65 130 L 100 110 Z" fill="#FFFFFF" stroke="#E2D4DA" strokeWidth="1.5" />
            <path d="M 165 95 L 135 130 L 100 110 Z" fill="#FFFFFF" stroke="#E2D4DA" strokeWidth="1.5" />

            {/* Deep Green Leaves & Stems */}
            <path d="M 60 90 C 45 75, 40 55, 60 45 C 75 60, 70 80, 60 90 Z" fill="#2E7D32" stroke="#1B5E20" strokeWidth="1.5" />
            <path d="M 140 90 C 155 75, 160 55, 140 45 C 125 60, 130 80, 140 90 Z" fill="#2E7D32" stroke="#1B5E20" strokeWidth="1.5" />
            <path d="M 100 50 C 90 35, 110 35, 100 50 Z" fill="#388E3C" />

            {/* BOUQUET OF DEEP RED ROSES */}
            {/* Rose 1 (Top Center) */}
            <g transform="translate(100, 48)">
              <circle cx="0" cy="0" r="22" fill="url(#roseRed1)" stroke="#5A162E" strokeWidth="1.5" />
              <path d="M -12 -6 C -8 -16, 8 -16, 12 -6 C 16 6, -16 12, 0 18 Z" fill="url(#roseRed2)" />
              <path d="M -6 -4 C -2 -10, 6 -10, 6 -4 C 8 2, -8 4, 0 8 Z" fill="#FF5252" />
            </g>

            {/* Rose 2 (Left Upper) */}
            <g transform="translate(68, 65)">
              <circle cx="0" cy="0" r="20" fill="url(#roseRed1)" stroke="#5A162E" strokeWidth="1.5" />
              <path d="M -10 -5 C -6 -14, 6 -14, 10 -5 C 14 5, -14 10, 0 15 Z" fill="url(#roseRed2)" />
              <path d="M -5 -3 C -2 -8, 5 -8, 5 -3 C 7 2, -7 3, 0 6 Z" fill="#FF5252" />
            </g>

            {/* Rose 3 (Right Upper) */}
            <g transform="translate(132, 65)">
              <circle cx="0" cy="0" r="20" fill="url(#roseRed1)" stroke="#5A162E" strokeWidth="1.5" />
              <path d="M -10 -5 C -6 -14, 6 -14, 10 -5 C 14 5, -14 10, 0 15 Z" fill="url(#roseRed2)" />
              <path d="M -5 -3 C -2 -8, 5 -8, 5 -3 C 7 2, -7 3, 0 6 Z" fill="#FF5252" />
            </g>

            {/* Rose 4 (Center Low) */}
            <g transform="translate(100, 80)">
              <circle cx="0" cy="0" r="24" fill="url(#roseRed1)" stroke="#5A162E" strokeWidth="1.5" />
              <path d="M -14 -7 C -9 -18, 9 -18, 14 -7 C 18 7, -18 14, 0 20 Z" fill="url(#roseRed2)" />
              <path d="M -7 -4 C -3 -11, 7 -11, 7 -4 C 9 3, -9 5, 0 9 Z" fill="#FF5252" />
            </g>

            {/* Rose 5 (Bottom Left) */}
            <g transform="translate(76, 102)">
              <circle cx="0" cy="0" r="18" fill="url(#roseRed1)" stroke="#5A162E" strokeWidth="1.5" />
              <path d="M -9 -4 C -5 -12, 5 -12, 9 -4 C 12 4, -12 8, 0 13 Z" fill="url(#roseRed2)" />
            </g>

            {/* Rose 6 (Bottom Right) */}
            <g transform="translate(124, 102)">
              <circle cx="0" cy="0" r="18" fill="url(#roseRed1)" stroke="#5A162E" strokeWidth="1.5" />
              <path d="M -9 -4 C -5 -12, 5 -12, 9 -4 C 12 4, -12 8, 0 13 Z" fill="url(#roseRed2)" />
            </g>

            {/* PROMINENT RED RIBBON & BOW */}
            <g transform="translate(100, 185)">
              {/* Left Ribbon Loop */}
              <path d="M 0 0 C -25 -25, -45 5, 0 0 Z" fill="url(#ribbonRed)" stroke="#7F0000" strokeWidth="1.8" />
              {/* Right Ribbon Loop */}
              <path d="M 0 0 C 25 -25, 45 5, 0 0 Z" fill="url(#ribbonRed)" stroke="#7F0000" strokeWidth="1.8" />
              {/* Ribbon Tails */}
              <path d="M -4 0 L -30 45 L -16 42 L 0 2 Z" fill="url(#ribbonRed)" stroke="#7F0000" strokeWidth="1.5" />
              <path d="M 4 0 L 30 45 L 16 42 L 0 2 Z" fill="url(#ribbonRed)" stroke="#7F0000" strokeWidth="1.5" />
              {/* Center Knot */}
              <circle cx="0" cy="0" r="8.5" fill="#FF1744" stroke="#7F0000" strokeWidth="2" />
              <circle cx="-2" cy="-2" r="2.5" fill="#FFFFFF" opacity="0.7" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};
