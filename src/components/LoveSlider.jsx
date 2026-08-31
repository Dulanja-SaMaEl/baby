import React from 'react';

export const LoveSlider = ({ value, onChange }) => {
  // Calculate percentage background for active track effect
  const activePercent = value;

  return (
    <div className="slider-container">
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="love-slider"
        aria-label="Love meter slider"
        style={{
          background: `linear-gradient(to right, #FF85A1 0%, #FF4878 ${activePercent}%, #FFCCD5 ${activePercent}%, #FFCCD5 100%)`
        }}
      />
      <span className="slider-hint">Drag to adjust the love meter 💕</span>
    </div>
  );
};
