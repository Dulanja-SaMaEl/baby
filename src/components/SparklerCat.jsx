import React from 'react';

export const SparklerCat = () => {
  return (
    <div className="hero-graphic-ring-container" aria-label="Happy cat wearing party hat holding sparkling sparkler">
      {/* Outer Glowing Ring Frame */}
      <div className="glowing-ring">
        <svg className="sparkler-cat-svg" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#801436" />
              <stop offset="50%" stopColor="#E6195E" />
              <stop offset="100%" stopColor="#6D2431" />
            </linearGradient>

            <radialGradient id="ringGlowBg" cx="50%" cy="50%" r="50%">
              <stop offset="70%" stopColor="#FFF2F5" />
              <stop offset="100%" stopColor="#FFE0E8" />
            </radialGradient>

            <linearGradient id="catBodyGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#FFF0F3" />
            </linearGradient>

            <radialGradient id="catBlush2" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FF7597" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#FF7597" stopOpacity="0" />
            </radialGradient>

            <linearGradient id="hatGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF85A1" />
              <stop offset="100%" stopColor="#FFCCD5" />
            </linearGradient>
          </defs>

          {/* Background Inside Ring */}
          <circle cx="120" cy="120" r="105" fill="url(#ringGlowBg)" />

          {/* Deep Pink / Burgundy Glowing Circular Ring */}
          <circle
            cx="120"
            cy="120"
            r="105"
            fill="none"
            stroke="url(#ringGrad)"
            strokeWidth="7"
            filter="drop-shadow(0 4px 12px rgba(109, 36, 49, 0.3))"
          />
          <circle cx="120" cy="120" r="99" fill="none" stroke="#FFA3B9" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />

          {/* CAT CHARACTER */}
          <g transform="translate(10, 10)">
            {/* Left Ear */}
            <path
              d="M62 66 L48 34 C 48 34, 68 42, 78 54"
              fill="#FFF0F3"
              stroke="#5A162E"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M60 60 L52 40 C 52 40, 65 46, 72 54 Z" fill="#FFCCD5" />

            {/* Right Ear */}
            <path
              d="M158 66 L172 34 C 172 34, 152 42, 142 54"
              fill="#FFF0F3"
              stroke="#5A162E"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M160 60 L168 40 C 168 40, 155 46, 148 54 Z" fill="#FFCCD5" />

            {/* Spiky Fur Tufts on Top of Head */}
            <path
              d="M98 51 L103 38 L108 49 L113 35 L118 49 L123 39 L127 51"
              fill="#FFF0F3"
              stroke="#5A162E"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Main Cat Body */}
            <path
              d="M110 50 
                 C 150 50, 172 75, 172 110 
                 C 172 145, 148 158, 110 158 
                 C 72 158, 48 145, 48 110 
                 C 48 75, 70 50, 110 50 Z"
              fill="url(#catBodyGrad2)"
              stroke="#5A162E"
              strokeWidth="3.5"
              strokeLinejoin="round"
            />

            {/* Soft Pink Blush Cheeks */}
            <ellipse cx="74" cy="114" rx="10" ry="7" fill="url(#catBlush2)" />
            <ellipse cx="146" cy="114" rx="10" ry="7" fill="url(#catBlush2)" />

            {/* JOYFUL HAPPY EYES (^ ^) */}
            <g stroke="#5A162E" strokeWidth="4" strokeLinecap="round" fill="none">
              <path d="M74 102 Q82 92 90 102" />
              <path d="M130 102 Q138 92 146 102" />
            </g>

            {/* WIDE OPEN-MOUTHED SMILE */}
            <g>
              {/* Cute tiny pink nose */}
              <polygon points="107,105 113,105 110,108" fill="#FF7597" />
              
              {/* Open Smile Outline */}
              <path
                d="M98 112 C 98 112, 110 132, 122 112 Z"
                fill="#5A162E"
                stroke="#5A162E"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
              {/* Cute Happy Tongue */}
              <path
                d="M102 120 C 105 128, 115 128, 118 120 Z"
                fill="#FF7597"
              />
            </g>

            {/* Whiskers */}
            <g stroke="#5A162E" strokeWidth="2" strokeLinecap="round" opacity="0.8">
              <line x1="64" y1="106" x2="44" y2="102" />
              <line x1="64" y1="112" x2="42" y2="114" />
              <line x1="156" y1="106" x2="176" y2="102" />
              <line x1="156" y1="112" x2="178" y2="114" />
            </g>

            {/* PASTEL PINK PARTY HAT (Tilted on Left Ear/Head) */}
            <g transform="translate(76, 18) rotate(-8)">
              {/* Hat Cone */}
              <polygon points="18,0 0,42 36,42" fill="url(#hatGrad)" stroke="#5A162E" strokeWidth="2" strokeLinejoin="round" />
              {/* Polka Dots */}
              <circle cx="12" cy="28" r="2.5" fill="#FFFFFF" />
              <circle cx="24" cy="34" r="2.5" fill="#FFD700" />
              <circle cx="20" cy="18" r="2" fill="#FFFFFF" />
              {/* Golden Star Pom-Pom at Top */}
              <polygon
                points="18,-4 20,0 24,0 21,3 22,7 18,5 14,7 15,3 12,0 16,0"
                fill="#FFD700"
                stroke="#E6A100"
                strokeWidth="0.8"
              />
            </g>

            {/* Right Paw holding Sparkler Wand */}
            <g transform="translate(142, 126)">
              {/* Paw */}
              <ellipse cx="12" cy="12" rx="10" ry="8" fill="#FFFFFF" stroke="#5A162E" strokeWidth="3" />
              
              {/* Sparkler Metal Wand */}
              <line x1="12" y1="14" x2="38" y2="-18" stroke="#888" strokeWidth="2.5" strokeLinecap="round" />
              
              {/* Active Sparkler Glowing Tip */}
              <g transform="translate(38, -18)">
                <circle cx="0" cy="0" r="5" fill="#FFF566" filter="drop-shadow(0 0 8px #FFD700)" />
                
                {/* CONSTANT SHIMMERING SPARKS */}
                <g className="shimmering-sparkler">
                  <path d="M-12 0 L12 0 M0 -12 L0 12 M-8 -8 L8 8 M-8 8 L8 -8" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" />
                  <path d="M-16 0 L16 0 M0 -16 L0 16" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" opacity="0.9" />
                  
                  {/* Radiating Gold Spark Particles */}
                  <circle cx="-14" cy="-10" r="2" fill="#FFD700" className="spark-p1" />
                  <circle cx="12" cy="-14" r="2.5" fill="#FFF" className="spark-p2" />
                  <circle cx="16" cy="8" r="1.8" fill="#FF9EAA" className="spark-p3" />
                  <circle cx="-10" cy="14" r="2.2" fill="#FFD700" className="spark-p4" />
                  <circle cx="0" cy="-18" r="2" fill="#FFF" className="spark-p5" />
                </g>
              </g>
            </g>

            {/* Left Paw */}
            <g transform="translate(62, 134)">
              <ellipse cx="10" cy="8" rx="10" ry="7" fill="#FFFFFF" stroke="#5A162E" strokeWidth="3" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};
