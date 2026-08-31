import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { GiftBox } from './GiftBox';
import { GiftModal } from './GiftModal';
import { RosePetalsOverlay } from './RosePetalsOverlay';
import { LaceCornerAccents } from './LaceCornerAccents';
import { soundManager } from '../utils/soundEffects';

export const GiftRevealPage = ({ onGoBack, onGoBouquet, onGoScrapbook, onGoLetter, onGoVideoVault }) => {
  const [openedBoxes, setOpenedBoxes] = useState({ 1: false, 2: false, 3: false, 4: false });
  const [activeGiftModal, setActiveGiftModal] = useState(null);
  const [hoveredBox, setHoveredBox] = useState(null);

  const giftsData = [
    {
      id: 1,
      name: "Romantic Bouquet",
      tag: "SURPRISE GIFT 1 OF 4 💐",
      icon: "💐🌹",
      title: "Your Romantic Bouquet Surprise",
      description: "A gorgeous bouquet of deep red roses carefully handpicked for you, accompanied by secret sweet love notes!",
      highlights: ["🌹 Deep Red Roses", "💌 Floating Love Notes", "✨ Pure Romance"]
    },
    {
      id: 2,
      name: "Scrapbook Memories",
      tag: "SURPRISE GIFT 2 OF 4 📖",
      icon: "📖💖",
      title: "Our 30-Memory Scrapbook Timeline",
      description: "A delicate timeline carrying 30 of our most special photos together, full of romantic quotes, dates, and locations!",
      highlights: ["🌹 30 Precious Photos", "📍 Dates & Locations", "📖 Interactive Scrapbook"]
    },
    {
      id: 3,
      name: "Handwritten Love Letter",
      tag: "SURPRISE GIFT 3 OF 4 💌",
      icon: "💌✨",
      title: "A Heartfelt Written Love Letter",
      description: "A personal handwritten letter written from the bottom of my heart, revealing character by character with soft piano melody!",
      highlights: ["💌 Written Love Letter", "🎹 Soft Piano Melody", "✨ Typewriter Reveal"]
    },
    {
      id: 4,
      name: "Video Memory Vault",
      tag: "SURPRISE GIFT 4 OF 4 🍿",
      icon: "🎬🍿",
      title: "Our Video Memory Vault",
      description: "A private cinema vault featuring 16 of our favorite video memories together with a running cat, vintage film strip, and theater mode!",
      highlights: ["🎬 16 Favorite Videos", "🐱 Running Playful Cat", "🍿 Cinema Mode"]
    }
  ];

  const handleBoxClick = (giftId) => {
    soundManager.playLoveChime();

    // Mark box as opened
    setOpenedBoxes((prev) => ({ ...prev, [giftId]: true }));

    // Confetti burst - Night Garden Palette
    confetti({
      particleCount: 85,
      spread: 85,
      origin: { y: 0.65 },
      colors: ['#FFE600', '#23F0FF', '#A7FFEE', '#39C6D6', '#FFFFFF']
    });

    if (giftId === 1 && onGoBouquet) {
      setTimeout(() => {
        onGoBouquet();
      }, 500);
    } else {
      setTimeout(() => {
        const selectedGift = giftsData.find((g) => g.id === giftId);
        setActiveGiftModal(selectedGift);
      }, 400);
    }
  };

  return (
    <div className="gift-page-container">
      {/* Soft Floating Rose Petals & Lace Corner Accents */}
      <RosePetalsOverlay />
      <LaceCornerAccents />
      <div className="watercolor-cloud-bg" aria-hidden="true" />

      {/* Main Centered Column Content */}
      <main className="gift-central-content">
        {/* Top Section Typography */}
        <div className="gift-header-stack">
          <span className="celebration-badge" style={{ background: 'rgba(255, 230, 0, 0.15)', color: '#FFE600', border: '1px solid rgba(255, 230, 0, 0.4)', padding: '0.4rem 1.2rem', borderRadius: '20px', fontSize: '0.88rem', fontWeight: '700', letterSpacing: '1px' }}>
            🎉 TEST PASSED WITH 100% LOVE 🎉
          </span>
          <h1 className="bubbly-main-heading">
            You Passed The Love Test! 💖
          </h1>
          <p className="gift-subheading">
            Your 4 special surprises are waiting for you ✨
          </p>
        </div>

        {/* Core UI: Grid of 4 Gift Boxes */}
        <div className="gifts-row-container gifts-4-grid">
          {giftsData.map((gift) => (
            <div key={gift.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.6rem' }}>
              <GiftBox
                giftNumber={gift.id}
                isOpen={openedBoxes[gift.id]}
                isHovered={hoveredBox === gift.id}
                onMouseEnter={() => setHoveredBox(gift.id)}
                onMouseLeave={() => setHoveredBox(null)}
                onClick={() => handleBoxClick(gift.id)}
              />
              <span className="gift-card-label-badge">
                {gift.name}
              </span>
            </div>
          ))}
        </div>

        {/* Navigation back link */}
        {onGoBack && (
          <button className="back-link-btn" onClick={onGoBack} style={{ marginTop: '0.5rem' }}>
            ← Back to Milestone
          </button>
        )}
      </main>

      {/* Frosted Glass Gift Reveal Modal */}
      <GiftModal
        isOpen={!!activeGiftModal}
        giftData={activeGiftModal}
        onClose={() => setActiveGiftModal(null)}
        onOpenBouquet={onGoBouquet}
        onOpenScrapbook={onGoScrapbook}
        onOpenLetter={onGoLetter}
        onOpenVideoVault={onGoVideoVault}
      />
    </div>
  );
};
