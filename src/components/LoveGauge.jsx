import React from 'react';

// Helper function to create SVG arc paths
const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
  const angleInRadians = (angleInDegrees - 180) * Math.PI / 180.0;
  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
};

const describeArc = (x, y, radius, startAngle, endAngle) => {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  return [
    "M", start.x, start.y,
    "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
  ].join(" ");
};

export const LoveGauge = ({ loveValue = 38 }) => {
  // Map loveValue (0 to 100) to rotation angle (-90deg to +90deg)
  const needleAngle = -90 + (loveValue / 100) * 180;

  // Segment colors: Light Pink -> Soft Pink -> Medium Pink -> Dark Pink -> Dark Red
  const segments = [
    { color: '#FFCCD5', start: 0, end: 33.5, label: 'Light Pink' },
    { color: '#FF85A1', start: 36, end: 69.5, label: 'Soft Pink' },
    { color: '#FF4878', start: 72, end: 105.5, label: 'Medium Pink' },
    { color: '#E6195E', start: 108, end: 141.5, label: 'Rose' },
    { color: '#5A162E', start: 144, end: 178, label: 'Dark Red' }
  ];

  const cx = 150;
  const cy = 145;
  const radius = 105;
  const strokeWidth = 26;

  // Heart positions inside leftmost and rightmost segments
  // Leftmost (Seg 1) center angle ~ 17 degrees from left
  const leftHeartPos = polarToCartesian(cx, cy, radius, 17);
  // Rightmost (Seg 5) center angle ~ 161 degrees from left
  const rightHeartPos = polarToCartesian(cx, cy, radius, 161);

  return (
    <div className="gauge-container" aria-label={`Love Gauge at ${loveValue}%`}>
      <svg className="gauge-svg" viewBox="0 0 300 170" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="gaugeShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer subtle decorative track arc */}
        <path
          d={describeArc(cx, cy, radius + 18, 0, 180)}
          fill="none"
          stroke="#FFDCE3"
          strokeWidth="2"
          strokeDasharray="4 4"
        />

        {/* 5 Distinct Block Segments with Gradient Colors */}
        {segments.map((seg, idx) => (
          <path
            key={idx}
            d={describeArc(cx, cy, radius, seg.start, seg.end)}
            fill="none"
            stroke={seg.color}
            strokeWidth={strokeWidth}
            strokeLinecap="butt"
          />
        ))}

        {/* Faint Outline Heart inside Segment 1 (Leftmost / Lightest) */}
        <g transform={`translate(${leftHeartPos.x - 9}, ${leftHeartPos.y - 8.5}) scale(0.75)`}>
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            fill="none"
            stroke="#5A162E"
            strokeOpacity="0.4"
            strokeWidth="2"
          />
        </g>

        {/* White Outline Heart inside Segment 5 (Rightmost / Darkest) */}
        <g transform={`translate(${rightHeartPos.x - 9}, ${rightHeartPos.y - 8.5}) scale(0.75)`}>
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2.2"
          />
        </g>

        {/* THE NEEDLE WITH ELEGANT CURSIVE "love" STEM SCRIPT */}
        <g
          className="needle-group"
          style={{
            transform: `rotate(${needleAngle}deg)`,
            transformOrigin: `${cx}px ${cy}px`
          }}
        >
          {/* Main Needle Line & Shaft */}
          <line
            x1={cx}
            y1={cy}
            x2={cx}
            y2="30"
            stroke="#5A162E"
            strokeWidth="2.8"
            strokeLinecap="round"
          />

          {/* Sharp Needle Tip */}
          <polygon
            points={`${cx - 3.5},38 ${cx},22 ${cx + 3.5},38`}
            fill="#5A162E"
          />

          {/* Cursive "love" script integrated into the needle stem */}
          {/* Hand-crafted path wrapping around stem from y=120 to y=50 */}
          <path
            d="
              M 150 120 
              C 145 116, 142 108, 146 102 
              C 152 94, 158 108, 150 112 
              C 146 114, 145 106, 150 100 
              C 155 94, 156 86, 148 88 
              C 142 90, 144 98, 150 96 
              C 154 94, 156 82, 148 80 
              C 143 78, 145 70, 150 72 
              C 155 74, 155 62, 150 56
              C 146 50, 150 42, 150 30
            "
            fill="none"
            stroke="#5A162E"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Elegant Script Text overlay "love" for crystal-clear readability */}
          <text
            x={cx}
            y="92"
            fill="#5A162E"
            fontSize="22"
            fontFamily="'Sacramento', cursive"
            fontWeight="bold"
            textAnchor="middle"
            transform={`rotate(-90, ${cx}, 92)`}
            style={{ pointerEvents: 'none' }}
          >
            love
          </text>

          {/* Needle Base Anchor Circle */}
          <circle
            cx={cx}
            cy={cy}
            r="8.5"
            fill="#5A162E"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            filter="drop-shadow(0 2px 4px rgba(90, 22, 46, 0.3))"
          />
          <circle
            cx={cx}
            cy={cy}
            r="3"
            fill="#FFFFFF"
          />
        </g>

        {/* Center Base Decorative Ring */}
        <circle cx={cx} cy={cy} r="14" fill="none" stroke="#FFCCD5" strokeWidth="1.5" strokeDasharray="3 3" />
      </svg>
    </div>
  );
};
