import React from 'react';

// Polar coordinates helper
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

export const MiniLoveGauge100 = () => {
  const cx = 80;
  const cy = 75;
  const radius = 52;
  const strokeWidth = 14;

  const segments = [
    { color: '#FFCCD5', start: 0, end: 33.5 },
    { color: '#FF85A1', start: 36, end: 69.5 },
    { color: '#FF4878', start: 72, end: 105.5 },
    { color: '#E6195E', start: 108, end: 141.5 },
    { color: '#5A162E', start: 144, end: 178 }
  ];

  // Positions for leftmost & rightmost hearts inside mini gauge
  const leftHeartPos = polarToCartesian(cx, cy, radius, 17);
  const rightHeartPos = polarToCartesian(cx, cy, radius, 161);

  return (
    <div className="mini-gauge-bottom-center" aria-label="Miniature 100% Love Gauge">
      <svg width="170" height="95" viewBox="0 0 160 95" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outer subtle decorative arc */}
        <path
          d={describeArc(cx, cy, radius + 10, 0, 180)}
          fill="none"
          stroke="#FFDCE3"
          strokeWidth="1.2"
          strokeDasharray="3 3"
        />

        {/* 5 Distinct Block Segments */}
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

        {/* Leftmost Faint Outline Heart */}
        <g transform={`translate(${leftHeartPos.x - 5}, ${leftHeartPos.y - 5}) scale(0.42)`}>
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            fill="none"
            stroke="#5A162E"
            strokeOpacity="0.45"
            strokeWidth="2.5"
          />
        </g>

        {/* Rightmost White Outline Heart */}
        <g transform={`translate(${rightHeartPos.x - 5}, ${rightHeartPos.y - 5}) scale(0.42)`}>
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2.8"
          />
        </g>

        {/* NEEDLE POINTING MAXIMUM RIGHT (100%) WITH CURSIVE "love" STEM */}
        <g style={{ transform: 'rotate(90deg)', transformOrigin: `${cx}px ${cy}px` }}>
          {/* Main Needle Stem */}
          <line x1={cx} y1={cy} x2={cx} y2="18" stroke="#5A162E" strokeWidth="2.2" strokeLinecap="round" />
          
          {/* Needle Tip */}
          <polygon points={`${cx - 2.5},22 ${cx},12 ${cx + 2.5},22`} fill="#5A162E" />

          {/* Cursive 'love' Text along stem */}
          <text
            x={cx}
            y="48"
            fill="#5A162E"
            fontSize="14"
            fontFamily="'Sacramento', cursive"
            fontWeight="bold"
            textAnchor="middle"
            transform={`rotate(-90, ${cx}, 48)`}
          >
            love
          </text>

          {/* Base Anchor Circle */}
          <circle cx={cx} cy={cy} r="5" fill="#5A162E" stroke="#FFFFFF" strokeWidth="1.8" />
          <circle cx={cx} cy={cy} r="1.8" fill="#FFFFFF" />
        </g>
      </svg>
      <span className="mini-gauge-label">100% MAX LOVE</span>
    </div>
  );
};
