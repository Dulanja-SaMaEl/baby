import React, { useState, useRef } from 'react';
import { CssBlossomingFlowers } from './CssBlossomingFlowers';
import { soundManager } from '../utils/soundEffects';

export const BouquetPage = ({ onGoBack, onGoNext }) => {
  const [hoveredRibbon, setHoveredRibbon] = useState(null);
  const [goldSparkles, setGoldSparkles] = useState([]);
  const containerRef = useRef(null);

  // Sparkle burst on ribbon hover
  const handleRibbonHover = (id, e) => {
    setHoveredRibbon(id);
    soundManager.playPop(180 + id * 20);

    const rect = e.currentTarget.getBoundingClientRect();
    const newSparkles = Array.from({ length: 5 }).map((_, i) => ({
      id: Date.now() + i,
      x: rect.left + rect.width * Math.random(),
      y: rect.top + rect.height * Math.random()
    }));

    setGoldSparkles((prev) => [...prev.slice(-10), ...newSparkles]);
  };

  // 6 Unfurling Love Ribbons (3 left, 3 right)
  const leftRibbons = [
    { id: 1, text: "You make my heart bloom.", delay: "0.2s" },
    { id: 2, text: "Life feels sweeter with you", delay: "0.6s" },
    { id: 3, text: "You make every moment sweeter.", delay: "1.0s" }
  ];

  const rightRibbons = [
    { id: 4, text: "I choose you every day", delay: "0.4s" },
    { id: 5, text: "My love for you keeps growing", delay: "0.8s" },
    { id: 6, text: "My heart will always choose you", delay: "1.2s" }
  ];

  return (
    <div ref={containerRef} className="bouquet-page-container magical-night-bouquet">
      {/* Top Navigation Header & Pulsing Glowing Next Button */}
      <header className="bouquet-header-nav">
        <h1 className="gradient-flow-title night-title">Your Bouquet</h1>

        {onGoNext && (
          <button className="glowing-next-btn night-btn" onClick={onGoNext}>
            Next →
          </button>
        )}
      </header>

      {/* Main Center Stage with Pure CSS Blossoming Night Flowers */}
      <main className="bouquet-central-stage night-stage">
        {/* Left Unfurl Silk Ribbons */}
        <div className="ribbons-column ribbons-left night-ribbons">
          {leftRibbons.map((ribbon) => (
            <div
              key={ribbon.id}
              className={`silk-ribbon-tag night-tag unfurl-left ${hoveredRibbon === ribbon.id ? 'hovered-ribbon' : ''}`}
              style={{ animationDelay: ribbon.delay }}
              onMouseEnter={(e) => handleRibbonHover(ribbon.id, e)}
              onMouseLeave={() => setHoveredRibbon(null)}
            >
              <span className="ribbon-text night-text">{ribbon.text}</span>
            </div>
          ))}
        </div>

        {/* Center Stage: Pure CSS Blossoming Flowers at Magical Night */}
        <div className="blossoming-garden-centerpiece">
          <CssBlossomingFlowers />
        </div>

        {/* Right Unfurl Silk Ribbons */}
        <div className="ribbons-column ribbons-right night-ribbons">
          {rightRibbons.map((ribbon) => (
            <div
              key={ribbon.id}
              className={`silk-ribbon-tag night-tag unfurl-right ${hoveredRibbon === ribbon.id ? 'hovered-ribbon' : ''}`}
              style={{ animationDelay: ribbon.delay }}
              onMouseEnter={(e) => handleRibbonHover(ribbon.id, e)}
              onMouseLeave={() => setHoveredRibbon(null)}
            >
              <span className="ribbon-text night-text">{ribbon.text}</span>
            </div>
          ))}
        </div>
      </main>

      {/* Gold Micro-Particles Burst Layer */}
      <div className="gold-sparkles-canvas" aria-hidden="true">
        {goldSparkles.map((spk) => (
          <span
            key={spk.id}
            className="floating-gold-dust"
            style={{ left: `${spk.x}px`, top: `${spk.y}px` }}
          >
            ✨
          </span>
        ))}
      </div>

      {/* Back to Gifts Button */}
      {onGoBack && (
        <button className="back-link-btn night-back" onClick={onGoBack} style={{ position: 'absolute', bottom: '1.2rem', left: '1.8rem', zIndex: 50 }}>
          ← Back to Gifts
        </button>
      )}
    </div>
  );
};
