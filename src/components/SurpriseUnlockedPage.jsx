import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { KissingBirdsParty } from './KissingBirdsParty';
import { PaperAirplane } from './PaperAirplane';
import { MiniLoveGauge100 } from './MiniLoveGauge100';
import { SparklerCat } from './SparklerCat';
import { BokehConfettiOverlay } from './BokehConfettiOverlay';
import { SurpriseModal } from './SurpriseModal';
import { soundManager } from '../utils/soundEffects';

export const SurpriseUnlockedPage = ({ onGoBack, onGoNext }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleStartClick = (e) => {
    e.stopPropagation();
    setIsClicked(true);
    soundManager.playLoveChime();

    // Trigger celebratory gold & cyan confetti burst
    confetti({
      particleCount: 100,
      spread: 90,
      origin: { y: 0.65 },
      colors: ['#FFE600', '#23F0FF', '#A7FFEE', '#39C6D6', '#FFFFFF']
    });

    setTimeout(() => {
      setIsClicked(false);
      if (onGoNext) {
        onGoNext();
      } else {
        setIsModalOpen(true);
      }
    }, 250);
  };

  return (
    <div className="surprise-page-container">
      {/* Background Bokeh & Falling Confetti Overlay */}
      <BokehConfettiOverlay />

      {/* Peripheral Decor - Top-Right: Kissing Birds with Party Hats */}
      <KissingBirdsParty />

      {/* Peripheral Decor - Bottom-Left: Paper Airplane with Heart Trail */}
      <PaperAirplane />

      {/* Peripheral Decor - Bottom-Center: Miniature 100% Full Love Gauge */}
      <MiniLoveGauge100 />

      {/* Main Centered Column Stack */}
      <main className="surprise-central-content">
        {/* Main Heading in Elegant Serif Font */}
        <h1 className="special-day-heading">
          It's Your Special Day 🌸
        </h1>

        {/* Hero Graphic - Glowing Cyan Ring with Sparkler Cat */}
        <SparklerCat />

        {/* Sub-heading Text */}
        <p className="special-subheading">
          I made something special for you...
        </p>

        {/* Call To Action Pill Button */}
        <button
          className={`start-cta-btn ${isClicked ? 'clicked' : ''}`}
          onClick={handleStartClick}
          aria-label="Start special surprise"
        >
          <span className="btn-cute-face">😊</span>
          <span className="btn-text">START</span>
        </button>

        {/* Navigation links */}
        <div style={{ display: 'flex', gap: '1rem', marginTop: '0.4rem' }}>
          {onGoBack && (
            <button className="back-link-btn" onClick={onGoBack}>
              ← Back
            </button>
          )}
          {onGoNext && (
            <button className="back-link-btn" onClick={onGoNext}>
              Milestone →
            </button>
          )}
        </div>
      </main>

      {/* Interactive Surprise Modal */}
      <SurpriseModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};
