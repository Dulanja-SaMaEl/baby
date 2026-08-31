import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { ExcitedBearCat } from './ExcitedBearCat';
import { MilestoneModal } from './MilestoneModal';
import { soundManager } from '../utils/soundEffects';

export const MilestoneCounterPage = ({ onGoBack, onGoNext }) => {
  const [yearsCount, setYearsCount] = useState(0);
  const [monthsCount, setMonthsCount] = useState(0);
  const [daysCount, setDaysCount] = useState(0);

  const [isTickerFinished, setIsTickerFinished] = useState(false);
  const [showBalloons, setShowBalloons] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Number Ticker Effect: Counts up from 0 to 24 over 1.5s (1500ms)
  useEffect(() => {
    const duration = 1500; // 1.5 seconds
    const targetYears = 24;
    const startTime = performance.now();

    const animateTicker = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic calculation for smooth slowdown at end
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentYears = Math.floor(easedProgress * targetYears);

      setYearsCount(currentYears);

      if (progress < 1) {
        requestAnimationFrame(animateTicker);
      } else {
        setYearsCount(24);
        setIsTickerFinished(true);
        setShowBalloons(true);

        // Play chime sound & pop celebratory confetti
        soundManager.playLoveChime();
        confetti({
          particleCount: 65,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#FF7597', '#FFCCD5', '#E6195E', '#FFD700', '#6D2431']
        });
      }
    };

    const animationFrame = requestAnimationFrame(animateTicker);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const handleNextClick = () => {
    soundManager.playLoveChime();
    setIsModalOpen(true);
  };

  // Heart-shaped floating balloons array (5-7 balloons)
  const balloons = [
    { id: 1, left: '15%', delay: '0s', size: 38, speed: '4.5s' },
    { id: 2, left: '30%', delay: '0.4s', size: 48, speed: '5s' },
    { id: 3, left: '48%', delay: '0.2s', size: 42, speed: '4.8s' },
    { id: 4, left: '68%', delay: '0.6s', size: 52, speed: '5.2s' },
    { id: 5, left: '84%', delay: '0.1s', size: 40, speed: '4.6s' },
    { id: 6, left: '25%', delay: '0.8s', size: 45, speed: '5.4s' }
  ];

  return (
    <div className="milestone-page-container">
      {/* 5-7 Soft Pink Heart-Shaped Balloons Floating Up on Celebration Reveal */}
      {showBalloons && (
        <div className="balloons-layer" aria-hidden="true">
          {balloons.map((b) => (
            <div
              key={b.id}
              className="floating-heart-balloon"
              style={{
                left: b.left,
                animationDelay: b.delay,
                animationDuration: b.speed
              }}
            >
              <svg width={b.size} height={b.size * 1.2} viewBox="0 0 40 48" fill="none">
                {/* Heart Balloon Shape */}
                <path
                  d="M20 34 C20 34, 4 24, 4 13 C4 7, 9 2, 15 2 C18.5 2, 20 5, 20 5 C20 5, 21.5 2, 25 2 C31 2, 36 7, 36 13 C36 24, 20 34, 20 34 Z"
                  fill="#FF85A1"
                  stroke="#E6195E"
                  strokeWidth="1.5"
                  filter="drop-shadow(0 4px 8px rgba(230, 25, 94, 0.25))"
                />
                {/* Balloon shine highlight */}
                <path d="M11 7 C14 4, 16 5, 16 5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.75" />
                {/* Balloon String */}
                <path d="M20 34 C20 38, 22 40, 20 46" stroke="#5A162E" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
              </svg>
            </div>
          ))}
        </div>
      )}

      {/* Main Centered Column Stack */}
      <main className="milestone-central-content">
        {/* Top Graphic: Excited Bear/Cat with Paws up & Glowing Backdrop */}
        <ExcitedBearCat />

        {/* Main Heading: "Happy Birthday My Girl 🎀" */}
        <h1 className="milestone-main-heading">
          <span className="dark-word">Happy </span>
          <span className="rose-word">Birthday </span>
          <span className="dark-word">My Girl </span>
          <span className="ribbon-bow-icon" title="Pink Bow">🎀</span>
        </h1>

        {/* Sub-heading: "You have completed" */}
        <p className="milestone-subheading">
          You have completed
        </p>

        {/* The Counter Section (Single Flexbox Row on Mobile) */}
        <div className="counter-row-container">
          {/* Block 1: YEARS */}
          <div className="counter-block">
            <span className="counter-number gradient-text">
              {yearsCount}
            </span>
            <span className="counter-label">YEARS</span>
          </div>

          {/* Block 2: MONTHS */}
          <div className="counter-block">
            <span className="counter-number gradient-text">
              {monthsCount}
            </span>
            <span className="counter-label">MONTHS</span>
          </div>

          {/* Block 3: DAYS */}
          <div className="counter-block">
            <span className="counter-number gradient-text">
              {daysCount}
            </span>
            <span className="counter-label">DAYS</span>
          </div>
        </div>

        {/* Call to Action Button: Fades in AFTER ticker animation completes */}
        <div className={`button-wrapper ${isTickerFinished ? 'fade-in-visible' : 'fade-in-hidden'}`}>
          <button className="next-cta-btn" onClick={handleNextClick} aria-label="Next step">
            <span className="btn-text">NEXT</span>
            <span className="btn-wand-icon">🪄</span>
          </button>
        </div>

        {/* Back navigation link */}
        {onGoBack && (
          <button className="back-link-btn" onClick={onGoBack} style={{ marginTop: '0.6rem' }}>
            ← Back to Surprise
          </button>
        )}
      </main>

      {/* Interactive 24th Birthday Modal */}
      <MilestoneModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onGoNext={onGoNext}
      />
    </div>
  );
};
