import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { KissingBirds } from './components/KissingBirds';
import { PaperAirplane } from './components/PaperAirplane';
import { CatCharacter } from './components/CatCharacter';
import { LoveGauge } from './components/LoveGauge';
import { LoveSlider } from './components/LoveSlider';
import { SurpriseUnlockedPage } from './components/SurpriseUnlockedPage';
import { MilestoneCounterPage } from './components/MilestoneCounterPage';
import { GiftRevealPage } from './components/GiftRevealPage';
import { BouquetPage } from './components/BouquetPage';
import { ScrapbookGalleryPage } from './components/ScrapbookGalleryPage';
import { LetterPage } from './components/LetterPage';
import { VideoVaultPage } from './components/VideoVaultPage';
import { soundManager } from './utils/soundEffects';

export default function App() {
  // Page state sequence: 'loveMeter' -> 'surpriseUnlocked' -> 'milestoneCounter' -> 'giftReveal' -> 'bouquet' -> 'scrapbook' -> 'letter' -> 'videoVault'
  const [activePage, setActivePage] = useState('loveMeter');
  
  // Love meter state - defaults to 38%
  const [loveValue, setLoveValue] = useState(38);
  const [isBumping, setIsBumping] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [fireflyParticles, setFireflyParticles] = useState([]);
  const hasTriggered100Ref = useRef(false);

  // Dynamic heading text matching mood state
  const getHeadingText = (val) => {
    if (val <= 15) return 'Fill my heart with love 💕';
    if (val <= 45) return 'Dulanja Loves You Forever 💕';
    if (val <= 70) return 'Getting warmer...';
    if (val <= 90) return 'So much love!';
    return 'Full of love! ❤️';
  };

  // Handle slider changes
  const handleSliderChange = (newVal) => {
    setLoveValue(newVal);
    
    // Play subtle synth pop sound
    soundManager.playPop(newVal);

    // Bump animation on percentage subheading
    setIsBumping(true);
    setTimeout(() => setIsBumping(false), 150);

    // Trigger confetti when hitting 100%
    if (newVal === 100 && !hasTriggered100Ref.current) {
      hasTriggered100Ref.current = true;
      soundManager.playLoveChime();
      
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#23F0FF', '#A7FFEE', '#FFE600', '#39C6D6', '#FFFFFF']
      });
    } else if (newVal < 100) {
      hasTriggered100Ref.current = false;
    }
  };

  // Global Celebration Clicks: Spawns glowing Celestial Gold & Electric Cyan fireflies
  const handleGlobalClick = (e) => {
    soundManager.initContext();

    const newFireflies = Array.from({ length: 4 }).map((_, i) => ({
      id: Date.now() + Math.random() + i,
      x: e.clientX + (Math.random() - 0.5) * 30,
      y: e.clientY + (Math.random() - 0.5) * 30,
      color: i % 2 === 0 ? '#FFE600' : '#23F0FF',
      scale: 0.8 + Math.random() * 0.6
    }));

    setFireflyParticles((prev) => [...prev.slice(-20), ...newFireflies]);
  };

  // Clean up firefly particles
  useEffect(() => {
    if (fireflyParticles.length === 0) return;
    const timer = setTimeout(() => {
      setFireflyParticles((prev) => prev.filter((p) => Date.now() - p.id < 1000));
    }, 1000);
    return () => clearTimeout(timer);
  }, [fireflyParticles]);

  // Toggle sound manager
  const toggleSound = (e) => {
    e.stopPropagation();
    soundManager.enabled = !soundEnabled;
    setSoundEnabled(!soundEnabled);
  };

  return (
    <div className="global-app-container" onClick={handleGlobalClick}>
      {/* Sound Toggle Button */}
      <button className="sound-toggle-btn" onClick={toggleSound} title="Toggle sound effects">
        <span>{soundEnabled ? '🔊' : '🔇'}</span>
        <span>{soundEnabled ? 'Sound On' : 'Sound Off'}</span>
      </button>

      {/* RENDER ACTIVE PAGE STEP WITH SEAMLESS FADE TRANSITION */}
      <div key={activePage} className="night-page-transition-wrapper">
        {activePage === 'videoVault' ? (
          <VideoVaultPage
            onGoBack={() => setActivePage('letter')}
            onFinishJourney={() => setActivePage('loveMeter')}
          />
        ) : activePage === 'letter' ? (
          <LetterPage
            onGoBack={() => setActivePage('scrapbook')}
            onGoNext={() => setActivePage('videoVault')}
          />
        ) : activePage === 'scrapbook' ? (
          <ScrapbookGalleryPage
            onGoBack={() => setActivePage('bouquet')}
            onGoNext={() => setActivePage('letter')}
          />
        ) : activePage === 'bouquet' ? (
          <BouquetPage
            onGoBack={() => setActivePage('giftReveal')}
            onGoNext={() => setActivePage('scrapbook')}
          />
        ) : activePage === 'giftReveal' ? (
          <GiftRevealPage
            onGoBack={() => setActivePage('milestoneCounter')}
            onGoBouquet={() => setActivePage('bouquet')}
            onGoScrapbook={() => setActivePage('scrapbook')}
            onGoLetter={() => setActivePage('letter')}
            onGoVideoVault={() => setActivePage('videoVault')}
          />
        ) : activePage === 'milestoneCounter' ? (
          <MilestoneCounterPage
            onGoBack={() => setActivePage('surpriseUnlocked')}
            onGoNext={() => setActivePage('giftReveal')}
          />
        ) : activePage === 'surpriseUnlocked' ? (
          <SurpriseUnlockedPage
            onGoBack={() => setActivePage('loveMeter')}
            onGoNext={() => setActivePage('milestoneCounter')}
          />
        ) : (
          <div className="welcome-container">
            {/* Top Right Floating Decor: Kissing White Birds */}
            <KissingBirds />

            {/* Bottom Left Floating Decor: Paper Airplane & Heart Trail */}
            <PaperAirplane />

            {/* Central Content Column */}
            <main className="central-content">
              {/* Character Graphic */}
              <CatCharacter loveValue={loveValue} />

              {/* Heading */}
              <h1 className="heading-text">
                {getHeadingText(loveValue)}
              </h1>

              {/* Sub-heading (% display) */}
              <h2 className={`subheading-text ${isBumping ? 'bump' : ''}`}>
                {loveValue}%
              </h2>

              {/* Love Meter Speedometer Gauge */}
              <LoveGauge loveValue={loveValue} />

              {/* Slider Control */}
              <LoveSlider value={loveValue} onChange={handleSliderChange} />

              {/* If hit 100%, show transition button */}
              {loveValue === 100 && (
                <button
                  className="unlocked-banner-btn"
                  onClick={() => setActivePage('surpriseUnlocked')}
                >
                  Surprise Unlocked! View Page ✨
                </button>
              )}
            </main>
          </div>
        )}
      </div>

      {/* Global Interactive Firefly Click Sparks Canvas */}
      <div className="firefly-sparks-canvas">
        {fireflyParticles.map((spark) => (
          <div
            key={spark.id}
            style={{
              position: 'fixed',
              left: `${spark.x}px`,
              top: `${spark.y}px`,
              pointerEvents: 'none',
              zIndex: 9999,
              transform: `translate(-50%, -50%) scale(${spark.scale})`,
              color: spark.color,
              fontSize: '1.2rem',
              filter: `drop-shadow(0 0 8px ${spark.color})`,
              animation: 'fireflySparkFloat 1s ease-out forwards'
            }}
          >
            ✨
          </div>
        ))}
      </div>

      <style>{`
        @keyframes fireflySparkFloat {
          0% {
            opacity: 1;
            transform: translate(-50%, -50%) translateY(0px) scale(0.6);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) translateY(-40px) scale(1.3);
          }
        }
      `}</style>
    </div>
  );
}
