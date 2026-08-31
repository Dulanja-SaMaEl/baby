import React from 'react';

export const GiftBox = ({ giftNumber, isOpen, onClick, isHovered, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className={`gift-box-wrapper ${isOpen ? 'open' : ''} ${isHovered && !isOpen ? 'wiggle' : ''}`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      role="button"
      tabIndex={0}
      aria-label={`Open Gift Box ${giftNumber}`}
    >
      <svg className="gift-box-svg" viewBox="0 0 160 170" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="boxBaseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#B3E5FC" />
            <stop offset="100%" stopColor="#81D4FA" />
          </linearGradient>

          <linearGradient id="boxLidGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C5CAE9" />
            <stop offset="0%" stopColor="#B3E5FC" />
            <stop offset="100%" stopColor="#4FC3F7" />
          </linearGradient>

          <linearGradient id="ribbonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F8BBD0" />
            <stop offset="100%" stopColor="#FF85A1" />
          </linearGradient>

          <radialGradient id="openGlowGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFD700" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#FF85A1" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#FF85A1" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Drop Shadow Below Box Base */}
        <ellipse cx="80" cy="155" rx="55" ry="10" fill="#5A162E" opacity="0.15" />

        {/* Golden / Pink Emit Glow when Lid is Open */}
        {isOpen && (
          <g className="gift-emit-glow">
            <ellipse cx="80" cy="72" rx="48" ry="32" fill="url(#openGlowGrad)" />
            <circle cx="65" cy="55" r="4" fill="#FFD700" className="sparkle-p1" />
            <circle cx="95" cy="50" r="3.5" fill="#FFFFFF" className="sparkle-p2" />
            <circle cx="80" cy="40" r="4.5" fill="#FF85A1" className="sparkle-p3" />
          </g>
        )}

        {/* BASE ELEMENT */}
        <g className="gift-base">
          {/* Base Box Body */}
          <rect x="25" y="70" width="110" height="75" rx="8" fill="url(#boxBaseGrad)" stroke="#5A162E" strokeWidth="3" />
          
          {/* Vertical Ribbon on Base */}
          <rect x="68" y="70" width="24" height="75" fill="url(#ribbonGrad)" stroke="#5A162E" strokeWidth="2" />
          <line x1="80" y1="70" x2="80" y2="145" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.6" />

          {/* Gift Box Number Tag Badge */}
          <circle cx="80" cy="108" r="14" fill="#FFFFFF" stroke="#5A162E" strokeWidth="2" />
          <text
            x="80"
            y="113"
            fill="#5A162E"
            fontSize="14"
            fontWeight="bold"
            fontFamily="'Fredoka', sans-serif"
            textAnchor="middle"
          >
            {giftNumber}
          </text>
        </g>

        {/* LID ELEMENT (Animates: translateY(-40px) & rotate(-15deg) on click) */}
        <g className={`gift-lid ${isOpen ? 'lid-detached' : ''}`}>
          {/* Lid Top Box Rim */}
          <rect x="18" y="52" width="124" height="24" rx="5" fill="url(#boxLidGrad)" stroke="#5A162E" strokeWidth="3" />
          
          {/* Vertical Ribbon on Lid */}
          <rect x="68" y="52" width="24" height="24" fill="url(#ribbonGrad)" stroke="#5A162E" strokeWidth="2" />

          {/* LARGE SOFT PINK BOW (#F8BBD0 / #FF85A1) */}
          <g transform="translate(80, 52)">
            {/* Left Bow Loop */}
            <path
              d="M0 -2 C-12 -22, -38 -18, -32 -2 C-26 10, -8 2, 0 -2 Z"
              fill="url(#ribbonGrad)"
              stroke="#5A162E"
              strokeWidth="2.5"
            />
            {/* Right Bow Loop */}
            <path
              d="M0 -2 C12 -22, 38 -18, 32 -2 C26 10, 8 2, 0 -2 Z"
              fill="url(#ribbonGrad)"
              stroke="#5A162E"
              strokeWidth="2.5"
            />
            {/* Ribbon Tails */}
            <path d="M-4 0 L-22 22 L-10 20 L0 2 Z" fill="#F8BBD0" stroke="#5A162E" strokeWidth="2" />
            <path d="M4 0 L22 22 L10 20 L0 2 Z" fill="#F8BBD0" stroke="#5A162E" strokeWidth="2" />
            
            {/* Center Knot */}
            <circle cx="0" cy="-2" r="7" fill="#FF85A1" stroke="#5A162E" strokeWidth="2.5" />
            <circle cx="-1.5" cy="-3.5" r="2" fill="#FFFFFF" opacity="0.8" />
          </g>
        </g>
      </svg>
      <span className="gift-click-hint">{isOpen ? 'Opened! ✨' : 'Click to Open 🎁'}</span>
    </div>
  );
};
