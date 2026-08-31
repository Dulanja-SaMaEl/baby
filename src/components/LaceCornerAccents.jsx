import React from 'react';

export const LaceCornerAccents = () => {
  return (
    <>
      {/* Top-Left Corner White Lace & Ribbon Accent */}
      <div className="lace-accent lace-top-left" aria-hidden="true">
        <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Lace Scallop Waves */}
          <path d="M0 40 C30 40, 40 30, 40 0" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.65" fill="none" />
          <path d="M0 70 C55 70, 70 55, 70 0" stroke="#FFFFFF" strokeWidth="2" opacity="0.5" fill="none" />
          <path d="M0 100 C80 100, 100 80, 100 0" stroke="#FFFFFF" strokeWidth="1.8" opacity="0.4" fill="none" />
          <path d="M0 130 C110 130, 130 110, 130 0" stroke="#FFCCD5" strokeWidth="1.5" opacity="0.35" strokeDasharray="4 4" fill="none" />

          {/* Delicate Floral Lace Dots */}
          <circle cx="20" cy="20" r="3" fill="#FFFFFF" opacity="0.7" />
          <circle cx="45" cy="45" r="4" fill="#FFFFFF" opacity="0.7" />
          <circle cx="70" cy="70" r="3.5" fill="#FFFFFF" opacity="0.6" />
          <circle cx="95" cy="20" r="2.5" fill="#FFFFFF" opacity="0.5" />
          <circle cx="20" cy="95" r="2.5" fill="#FFFFFF" opacity="0.5" />

          {/* Ribbon Bow in Corner */}
          <g transform="translate(45, 45)">
            <path d="M0 0 C-15 -18, -25 -5, 0 0 Z" fill="#FFFFFF" opacity="0.75" />
            <path d="M0 0 C-5 -25, -18 -15, 0 0 Z" fill="#FFFFFF" opacity="0.75" />
            <path d="M0 0 C15 18, 25 5, 0 0 Z" fill="#FFFFFF" opacity="0.75" />
            <circle cx="0" cy="0" r="3.5" fill="#FF85A1" />
          </g>
        </svg>
      </div>

      {/* Bottom-Right Corner White Lace & Ribbon Accent */}
      <div className="lace-accent lace-bottom-right" aria-hidden="true">
        <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Lace Scallop Waves */}
          <path d="M180 140 C150 140, 140 150, 140 180" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.65" fill="none" />
          <path d="M180 110 C125 110, 110 125, 110 180" stroke="#FFFFFF" strokeWidth="2" opacity="0.5" fill="none" />
          <path d="M180 80 C100 80, 80 100, 80 180" stroke="#FFFFFF" strokeWidth="1.8" opacity="0.4" fill="none" />
          <path d="M180 50 C70 50, 50 70, 50 180" stroke="#FFCCD5" strokeWidth="1.5" opacity="0.35" strokeDasharray="4 4" fill="none" />

          {/* Delicate Floral Lace Dots */}
          <circle cx="160" cy="160" r="3" fill="#FFFFFF" opacity="0.7" />
          <circle cx="135" cy="135" r="4" fill="#FFFFFF" opacity="0.7" />
          <circle cx="110" cy="110" r="3.5" fill="#FFFFFF" opacity="0.6" />
          <circle cx="85" cy="160" r="2.5" fill="#FFFFFF" opacity="0.5" />
          <circle cx="160" cy="85" r="2.5" fill="#FFFFFF" opacity="0.5" />

          {/* Ribbon Bow in Corner */}
          <g transform="translate(135, 135)">
            <path d="M0 0 C15 18, 25 5, 0 0 Z" fill="#FFFFFF" opacity="0.75" />
            <path d="M0 0 C5 25, 18 15, 0 0 Z" fill="#FFFFFF" opacity="0.75" />
            <path d="M0 0 C-15 -18, -25 -5, 0 0 Z" fill="#FFFFFF" opacity="0.75" />
            <circle cx="0" cy="0" r="3.5" fill="#FF85A1" />
          </g>
        </svg>
      </div>
    </>
  );
};
