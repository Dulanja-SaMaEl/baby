import React from 'react';

export const ScrapbookAccents = () => {
  return (
    <>
      {/* Subtle Torn Paper & Lace Textures along Left & Right Edges */}
      <div className="torn-paper-edge edge-left" aria-hidden="true" />
      <div className="torn-paper-edge edge-right" aria-hidden="true" />

      {/* Top Left: 3 Overlapping Vintage Romance Tickets */}
      <div className="vintage-tickets-container" aria-hidden="true">
        {/* Ticket 1 */}
        <div className="vintage-ticket ticket-1">
          <div className="ticket-inner">
            <span className="ticket-stub">NO. 001</span>
            <span className="ticket-title">ADMIT ONE: LOVE</span>
          </div>
        </div>

        {/* Ticket 2 */}
        <div className="vintage-ticket ticket-2">
          <div className="ticket-inner">
            <span className="ticket-stub">2024</span>
            <span className="ticket-title">FOREVER TOGETHER</span>
          </div>
        </div>

        {/* Ticket 3 */}
        <div className="vintage-ticket ticket-3">
          <div className="ticket-inner">
            <span className="ticket-stub">VIP</span>
            <span className="ticket-title">TICKET TO MY HEART</span>
          </div>
        </div>
      </div>

      {/* Top Right: Fluttering Soft Pink Butterfly */}
      <div className="butterfly-accent" aria-hidden="true">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="fluttering-butterfly">
          <g transform="translate(30, 30)">
            {/* Left Upper Wing */}
            <path
              d="M 0 0 C -15 -30, -40 -20, -25 5 C -15 15, -5 5, 0 0 Z"
              fill="#FF85A1"
              opacity="0.85"
            />
            {/* Left Lower Wing */}
            <path
              d="M 0 0 C -25 10, -35 30, -10 25 C -5 20, -2 10, 0 0 Z"
              fill="#FFCCD5"
              opacity="0.8"
            />
            {/* Right Upper Wing */}
            <path
              d="M 0 0 C 15 -30, 40 -20, 25 5 C 15 15, 5 5, 0 0 Z"
              fill="#FF85A1"
              opacity="0.85"
            />
            {/* Right Lower Wing */}
            <path
              d="M 0 0 C 25 10, 35 30, 10 25 C 5 20, 2 10, 0 0 Z"
              fill="#FFCCD5"
              opacity="0.8"
            />
            {/* Butterfly Body & Antennae */}
            <path d="M 0 -12 L 0 12" stroke="#5A162E" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 0 -10 Q -6 -20, -10 -22" stroke="#5A162E" strokeWidth="1.2" strokeLinecap="round" fill="none" />
            <path d="M 0 -10 Q 6 -20, 10 -22" stroke="#5A162E" strokeWidth="1.2" strokeLinecap="round" fill="none" />
          </g>
        </svg>
      </div>

      {/* Bottom Left: Botanical Illustration of Pink Lilies & Cherry Blossoms */}
      <div className="floral-cluster-accent" aria-hidden="true">
        <svg width="220" height="200" viewBox="0 0 220 200" fill="none">
          <g filter="drop-shadow(0 4px 10px rgba(90, 22, 46, 0.08))">
            {/* Green Stems & Leaves */}
            <path d="M 30 180 Q 70 120, 110 80" stroke="#388E3C" strokeWidth="3" fill="none" />
            <path d="M 40 180 Q 100 130, 150 100" stroke="#2E7D32" strokeWidth="2.5" fill="none" />
            <path d="M 60 140 C 40 110, 20 120, 50 150 Z" fill="#4CAF50" opacity="0.85" />
            <path d="M 90 120 C 110 90, 130 110, 80 135 Z" fill="#43A047" opacity="0.85" />

            {/* Pink Lily 1 */}
            <g transform="translate(65, 90)">
              <path d="M 0 0 C -20 -30, 0 -50, 0 -10 Z" fill="#FF85A1" />
              <path d="M 0 0 C 20 -30, 0 -50, 0 -10 Z" fill="#FF85A1" />
              <path d="M 0 0 C -30 -10, -40 10, -10 0 Z" fill="#FFCCD5" />
              <path d="M 0 0 C 30 -10, 40 10, 10 0 Z" fill="#FFCCD5" />
              <path d="M 0 0 C -15 25, 0 35, 0 10 Z" fill="#F8BBD0" />
              <circle cx="0" cy="-5" r="4" fill="#FFD700" />
            </g>

            {/* Cherry Blossom 1 */}
            <g transform="translate(130, 75)">
              {[0, 72, 144, 216, 288].map((angle, i) => (
                <path
                  key={i}
                  d={`M 0 0 C -8 -16, 8 -16, 0 0 Z`}
                  fill="#FF85A1"
                  transform={`rotate(${angle})`}
                />
              ))}
              <circle cx="0" cy="0" r="3" fill="#E6195E" />
            </g>

            {/* Cherry Blossom 2 */}
            <g transform="translate(160, 115)">
              {[0, 72, 144, 216, 288].map((angle, i) => (
                <path
                  key={i}
                  d={`M 0 0 C -7 -14, 7 -14, 0 0 Z`}
                  fill="#FFCCD5"
                  transform={`rotate(${angle})`}
                />
              ))}
              <circle cx="0" cy="0" r="2.5" fill="#E6195E" />
            </g>
          </g>
        </svg>
      </div>
    </>
  );
};
