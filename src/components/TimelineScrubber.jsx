import React, { useRef, useEffect } from 'react';

export const TimelineScrubber = ({ totalItems = 30, activeIndex, onSelect }) => {
  const containerRef = useRef(null);
  const yearsMap = {
    0: '2019',
    4: '2020',
    9: '2021',
    14: '2022',
    19: '2023',
    24: '2024',
    29: 'Today 💕'
  };

  // Scroll active dot into view smoothly
  useEffect(() => {
    if (containerRef.current) {
      const activeDot = containerRef.current.querySelector(`.timeline-dot-node.active`);
      if (activeDot) {
        activeDot.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  }, [activeIndex]);

  return (
    <div className="timeline-scrubber-wrapper">
      <div className="timeline-scrubber-track" ref={containerRef}>
        {/* Horizontal Line (#5A162E) */}
        <div className="timeline-line-base" />

        {/* 30 Nodes */}
        {Array.from({ length: totalItems }).map((_, index) => {
          const isActive = index === activeIndex;
          const yearLabel = yearsMap[index];

          return (
            <div
              key={index}
              className={`timeline-dot-wrapper ${isActive ? 'active-wrapper' : ''}`}
              onClick={() => onSelect(index)}
            >
              <button
                className={`timeline-dot-node ${isActive ? 'active' : ''}`}
                aria-label={`Go to photo ${index + 1}`}
              >
                <span className="dot-inner" />
              </button>

              {/* Year / Date Label every 5th dot */}
              {yearLabel && (
                <span className={`timeline-year-label ${isActive ? 'active-year' : ''}`}>
                  {yearLabel}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
