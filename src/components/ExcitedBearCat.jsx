import React from 'react';

export const ExcitedBearCat = () => {
  return (
    <div className="excited-character-wrapper" aria-label="Cute blushing white bear with paws up in excitement">
      <svg className="excited-character-svg" viewBox="0 0 200 190" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="backdropGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="16" />
          </filter>

          <linearGradient id="bearBodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#FFF2F5" />
          </linearGradient>

          <radialGradient id="bearBlush" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FF7597" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#FF7597" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Soft, Glowing Deep-Pink Circular Backdrop (#6D2431 with low opacity & high blur) */}
        <circle
          cx="100"
          cy="95"
          r="75"
          fill="#6D2431"
          opacity="0.22"
          filter="url(#backdropGlow)"
        />
        <circle
          cx="100"
          cy="95"
          r="68"
          fill="#FFCCD5"
          opacity="0.35"
          filter="url(#backdropGlow)"
        />

        {/* CHARACTER (Happy White Bear/Cat with Paws up in Excitement) */}
        <g transform="translate(10, 5)">
          {/* Left Bear Ear */}
          <circle cx="52" cy="42" r="20" fill="#FFFFFF" stroke="#5A162E" strokeWidth="3.2" />
          <circle cx="52" cy="42" r="11" fill="#FFCCD5" />

          {/* Right Bear Ear */}
          <circle cx="128" cy="42" r="20" fill="#FFFFFF" stroke="#5A162E" strokeWidth="3.2" />
          <circle cx="128" cy="42" r="11" fill="#FFCCD5" />

          {/* Tiny Spiky Tufts on top of head */}
          <path
            d="M82 43 L86 32 L91 42 L96 30 L101 42 L105 33 L109 43"
            fill="#FFF2F5"
            stroke="#5A162E"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Round Fluffy Head & Body */}
          <ellipse cx="90" cy="98" rx="56" ry="48" fill="url(#bearBodyGrad)" stroke="#5A162E" strokeWidth="3.5" />

          {/* Soft Pink Blush Circles on Cheeks */}
          <ellipse cx="52" cy="102" rx="11" ry="8" fill="url(#bearBlush)" />
          <ellipse cx="128" cy="102" rx="11" ry="8" fill="url(#bearBlush)" />

          {/* JOYFUL HAPPY CLOSED EYES (^ ^) */}
          <g stroke="#5A162E" strokeWidth="3.8" strokeLinecap="round" fill="none">
            <path d="M54 90 Q63 80 72 90" />
            <path d="M108 90 Q117 80 126 90" />
          </g>

          {/* Cute Nose & Mouth */}
          <ellipse cx="90" cy="95" rx="5" ry="3.5" fill="#FF7597" />
          <path d="M84 101 Q90 108 96 101" stroke="#5A162E" strokeWidth="3" strokeLinecap="round" fill="none" />

          {/* Cute Whiskers/Details */}
          <g stroke="#5A162E" strokeWidth="1.8" strokeLinecap="round" opacity="0.65">
            <line x1="42" y1="96" x2="28" y2="94" />
            <line x1="42" y1="102" x2="26" y2="104" />
            <line x1="138" y1="96" x2="152" y2="94" />
            <line x1="138" y1="102" x2="154" y2="104" />
          </g>

          {/* PAWS UP TO FACE IN EXCITEMENT ( ( ≧ ◡ ≦ ) ) */}
          {/* Left Paw holding left cheek */}
          <g transform="translate(40, 96) rotate(15)">
            <ellipse cx="14" cy="12" rx="12" ry="10" fill="#FFFFFF" stroke="#5A162E" strokeWidth="3.2" />
            <path d="M10 16 C12 18, 16 18, 18 16" stroke="#FFCCD5" strokeWidth="2" strokeLinecap="round" />
          </g>

          {/* Right Paw holding right cheek */}
          <g transform="translate(112, 96) rotate(-15)">
            <ellipse cx="14" cy="12" rx="12" ry="10" fill="#FFFFFF" stroke="#5A162E" strokeWidth="3.2" />
            <path d="M10 16 C12 18, 16 18, 18 16" stroke="#FFCCD5" strokeWidth="2" strokeLinecap="round" />
          </g>
        </g>
      </svg>
    </div>
  );
};
