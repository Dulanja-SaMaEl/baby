import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ScrapbookAccents } from './ScrapbookAccents';
import { MiniMusicPlayer } from './MiniMusicPlayer';
import { soundManager } from '../utils/soundEffects';

// 30 Curated Romantic Memories with exact user dates and locations
const MEMORIES_COLLECTION = [
  { id: 1, date: "2023", title: "Where my heart found its home ☕", location: "Somewhere beautiful", color: "#FFD6E3", image: "https://res.cloudinary.com/keklxcys/image/upload/v1788216621/img1.jpg" },
  { id: 2, date: "June 02, 2026", title: "Every step with you feels like magic 🍁", location: "Lake Round", color: "#FFE5EC", image: "https://res.cloudinary.com/keklxcys/image/upload/v1788216622/img2.jpg" },
  { id: 3, date: "June 07, 2026", title: "The day she said yes to me! 💍✨", location: "Lake Round (The day she said yes to me)", color: "#FFF0F3", image: "https://res.cloudinary.com/keklxcys/image/upload/v1788216622/img3.jpg" },
  { id: 4, date: "Special Moment", title: "Under a sky full of stars, I only saw you 🌌", location: "Somewhere beautiful", color: "#FDE2EA", image: "https://res.cloudinary.com/keklxcys/image/upload/v1788216623/img4.jpg" },
  { id: 5, date: "June 14, 2026", title: "Love is sweeter every single day with you 🌹", location: "Badagamuwa Forest", color: "#FFCCD5", image: "https://res.cloudinary.com/keklxcys/image/upload/v1788216622/img5.jpg" },
  { id: 6, date: "June 14, 2026", title: "Making sweet memories in the woods 🍃", location: "Badagamuwa Forest", color: "#FFF5F7", image: "https://res.cloudinary.com/keklxcys/image/upload/v1788216622/img6.jpg" },
  { id: 7, date: "June 14, 2026", title: "Sunsets are prettiest when I hold your hand 🌅", location: "Badagamuwa Forest", color: "#FFE3E9", image: "https://res.cloudinary.com/keklxcys/image/upload/v1788216616/img7.jpg" },
  { id: 8, date: "Unknown Date (Best friends)", title: "Best friends making unforgettable memories together 👯‍♀️✨", location: "Gampola", color: "#FCD5CE", image: "https://res.cloudinary.com/keklxcys/image/upload/v1788287822/img32.jpg" },
  { id: 9, date: "June 28, 2026", title: "My favorite partner in everything 💖", location: "Pangala", color: "#FEC89A", image: "https://res.cloudinary.com/keklxcys/image/upload/v1788216617/img9.jpg" },
  { id: 10, date: "June 28, 2026", title: "A thousand lifetimes, still choosing you 🎆", location: "Pangala", color: "#FFD6E3", image: "https://res.cloudinary.com/keklxcys/image/upload/v1788216617/img10.jpg" },
  { id: 11, date: "June 28, 2026", title: "Blossoms bloom, but you outshine them all 🌸", location: "Pangala", color: "#FFE5EC", image: "https://res.cloudinary.com/keklxcys/image/upload/v1788216618/img11.jpg" },
  { id: 12, date: "Unknown Date (Best friends)", title: "Where it all began — best friends forever & always 🚗💕", location: "Unknown Location", color: "#FFF0F3", image: "https://res.cloudinary.com/keklxcys/image/upload/v1788287822/img31.jpg" },
  { id: 13, date: "July 04, 2026", title: "You light up my life brighter than fireworks 🎇", location: "Giriulla", color: "#FDE2EA", image: "https://res.cloudinary.com/keklxcys/image/upload/v1788216618/img13.jpg" },
  { id: 14, date: "July 04, 2026", title: "Cozy moments & endless giggles 📚", location: "Giriulla", color: "#FFCCD5", image: "https://res.cloudinary.com/keklxcys/image/upload/v1788216618/img14.jpg" },
  { id: 15, date: "July 11, 2026", title: "Exploring Kandy hand in hand 🏞️", location: "Kandy", color: "#FFF5F7", image: "https://res.cloudinary.com/keklxcys/image/upload/v1788216620/img15.jpg" },
  { id: 16, date: "July 11, 2026", title: "Written in the stars, sealed with my heart 💌", location: "Kandy", color: "#FFE3E9", image: "https://res.cloudinary.com/keklxcys/image/upload/v1788216619/img16.jpg" },
  { id: 17, date: "July 11, 2026", title: "In the city of love with the love of my life 🏰", location: "Kandy", color: "#FCD5CE", image: "https://res.cloudinary.com/keklxcys/image/upload/v1788216620/img17.jpg" },
  { id: 18, date: "July 11, 2026", title: "Golden hour hits different in your arms ⛵", location: "Kandy", color: "#FEC89A", image: "https://res.cloudinary.com/keklxcys/image/upload/v1788216617/img18.jpg" },
  { id: 19, date: "July 18, 2026", title: "You bring color into my entire world 🌼", location: "Mankada", color: "#FFD6E3", image: "https://res.cloudinary.com/keklxcys/image/upload/v1788216617/img19.jpg" },
  { id: 20, date: "July 25, 2026", title: "Home & Family - A Very Special Day 🏠✨", location: "Home/Family (Special Day)", color: "#FFE5EC", image: "https://res.cloudinary.com/keklxcys/image/upload/v1788216617/img20.jpg" },
  { id: 21, date: "July 25, 2026", title: "My favorite melody is the sound of your laugh 🎶", location: "Home/Family", color: "#FFF0F3", image: "https://res.cloudinary.com/keklxcys/image/upload/v1788216618/img21.jpg" },
  { id: 22, date: "July 25, 2026", title: "Sweet treats & even sweeter moments 🍦", location: "Home/Family", color: "#FDE2EA", image: "https://res.cloudinary.com/keklxcys/image/upload/v1788216618/img22.jpg" },
  { id: 23, date: "August 01, 2026", title: "Stargazing at the Planetarium with my universe 🌌", location: "Planetarium", color: "#FFCCD5", image: "https://res.cloudinary.com/keklxcys/image/upload/v1788216619/img23.jpg" },
  { id: 24, date: "August 09, 2026", title: "Late night talks that make my heart melt 💖", location: "Home/Family", color: "#FFF5F7", image: "https://res.cloudinary.com/keklxcys/image/upload/v1788216620/img24.jpg" },
  { id: 25, date: "August 16, 2026", title: "Mountain breeze & your hand in mine 🍎", location: "Kandy", color: "#FFE3E9", image: "https://res.cloudinary.com/keklxcys/image/upload/v1788216620/img25.jpg" },
  { id: 26, date: "August 16, 2026", title: "Stepping into forever, side by side 🥂", location: "Kandy", color: "#FCD5CE", image: "https://res.cloudinary.com/keklxcys/image/upload/v1788216620/img26.jpg" },
  { id: 27, date: "August 16, 2026", title: "Flowers for the flower of my heart 💐", location: "Kandy", color: "#FEC89A", image: "https://res.cloudinary.com/keklxcys/image/upload/v1788216620/img27.jpg" },
  { id: 28, date: "August 25, 2026", title: "Looking deep into your beautiful eyes 🕯️", location: "Kurunegala", color: "#FFD6E3", image: "https://res.cloudinary.com/keklxcys/image/upload/v1788216620/img28.jpg" },
  { id: 29, date: "August 16, 2026", title: "Your smile is my favorite view in the world 😊", location: "Kandy", color: "#FFE5EC", image: "https://res.cloudinary.com/keklxcys/image/upload/v1788216621/img29.jpg" },
  { id: 30, date: "June 28, 2026", title: "Happy Birthday my princess! Our forever starts now 🎂✨", location: "Pangala", color: "#FFF0F3", image: "https://res.cloudinary.com/keklxcys/image/upload/v1788221979/img30.jpg" }
];

export const ScrapbookGalleryPage = ({ onGoBack, onGoNext }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const lastScrollTimeRef = useRef(0);
  const touchStartYRef = useRef(0);

  const currentMemory = MEMORIES_COLLECTION[currentIndex];

  const changeIndex = useCallback((newIdx) => {
    if (newIdx < 0 || newIdx >= MEMORIES_COLLECTION.length || newIdx === currentIndex) return;

    soundManager.playPop(85 + newIdx * 3);
    setIsTransitioning(true);
    setCurrentIndex(newIdx);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 400);
  }, [currentIndex]);

  // Mouse Wheel Scroll Listener: Scroll Down advances to next memory, Scroll Up goes to previous
  useEffect(() => {
    const handleWheel = (e) => {
      const now = Date.now();
      if (now - lastScrollTimeRef.current < 350) return;

      if (e.deltaY > 20) {
        lastScrollTimeRef.current = now;
        changeIndex(currentIndex + 1);
      } else if (e.deltaY < -20) {
        lastScrollTimeRef.current = now;
        changeIndex(currentIndex - 1);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentIndex, changeIndex]);

  // Touch Swipe Gesture Handling for Mobile
  useEffect(() => {
    const handleTouchStart = (e) => {
      touchStartYRef.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      const touchEndY = e.changedTouches[0].clientY;
      const diffY = touchStartYRef.current - touchEndY;

      if (Math.abs(diffY) > 40) {
        if (diffY > 0) {
          changeIndex(currentIndex + 1); // Swipe Up -> Next Memory
        } else {
          changeIndex(currentIndex - 1); // Swipe Down -> Previous Memory
        }
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentIndex, changeIndex]);

  // Arrow Key Navigation (Left / Right / Up / Down)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        changeIndex(currentIndex - 1);
      } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        changeIndex(currentIndex + 1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, changeIndex]);

  return (
    <div className="scrapbook-page-container">
      {/* Handcrafted Scrapbook Background Accents */}
      <ScrapbookAccents />

      {/* Top Header & Navigation Bar */}
      <header className="scrapbook-header-bar">
        <h1 className="scrapbook-title">Our Memory Scrapbook</h1>

        {/* Top-Right Pill-Shaped Next Button */}
        {onGoNext && (
          <button className="scrapbook-next-btn" onClick={onGoNext} aria-label="Next page">
            Next →
          </button>
        )}
      </header>

      {/* Main Center Layout Stage */}
      <main className="scrapbook-center-stage">
        <div className="polaroid-wrapper-card">
          {/* Decorative Tape Corners */}
          <div className="tape-corner tape-top-left" />
          <div className="tape-corner tape-top-right" />

          {/* Polaroid Photo Frame */}
          <div className={`polaroid-frame ${isTransitioning ? 'transitioning' : ''}`}>
            {/* Photo Canvas Area */}
            <div className="polaroid-photo-canvas" style={{ backgroundColor: currentMemory.color }}>
              {currentMemory.image ? (
                <img
                  src={currentMemory.image}
                  alt={currentMemory.title}
                  className="polaroid-real-img"
                  loading="lazy"
                />
              ) : (
                <svg className="polaroid-illustration-svg" viewBox="0 0 400 250" fill="none">
                  <defs>
                    <radialGradient id={`skyGrad-${currentMemory.id}`} cx="50%" cy="40%" r="60%">
                      <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
                      <stop offset="100%" stopColor={currentMemory.color} stopOpacity="0.4" />
                    </radialGradient>
                  </defs>
                  <rect width="400" height="250" fill={`url(#skyGrad-${currentMemory.id})`} />
                  <path d="M 60 70 Q 80 50, 100 70 Q 120 50, 140 70 Q 150 90, 100 120 Q 50 90, 60 70 Z" fill="#FFFFFF" opacity="0.6" />
                  <path d="M 280 60 Q 300 40, 320 60 Q 340 40, 360 60 Q 370 80, 320 110 Q 270 80, 280 60 Z" fill="#FFFFFF" opacity="0.5" />
                  <g transform="translate(200, 120)">
                    <circle cx="0" cy="0" r="48" fill="#5A162E" opacity="0.08" />
                    <path
                      d="M 0 -22 C -18 -38, -42 -22, -42 0 C -42 22, -18 36, 0 48 C 18 36, 42 22, 42 0 C 42 -22, 18 -38, 0 -22 Z"
                      fill="#E6195E"
                      opacity="0.85"
                    />
                    <circle cx="0" cy="-2" r="16" fill="#FFFFFF" />
                    <circle cx="0" cy="-2" r="10" fill="#5A162E" />
                    <circle cx="-3" cy="-5" r="3" fill="#FFFFFF" />
                  </g>
                  <text x="200" y="210" textAnchor="middle" fill="#0A192F" fontFamily="Fredoka, sans-serif" fontSize="16" fontWeight="700">
                    MEMORY #{currentMemory.id} OF 30 (Scroll 🖱️)
                  </text>
                </svg>
              )}
            </div>

            {/* Bottom White Margin Handwritten Script Caption */}
            <div className="polaroid-bottom-margin">
              <h2 className="polaroid-caption-title">{currentMemory.title}</h2>
              <div className="polaroid-meta-row">
                <span className="polaroid-date-text">📅 {currentMemory.date}</span>
                <span className="polaroid-location-text">📍 {currentMemory.location}</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Creative Vertical Film-Strip Timeline Ribbon on Right Side */}
      <aside className="vertical-timeline-ribbon" aria-label="Vertical Timeline">
        <div className="vertical-ribbon-line" />
        {MEMORIES_COLLECTION.map((m, idx) => (
          <div
            key={m.id}
            className={`vertical-ribbon-node ${idx === currentIndex ? 'active' : ''}`}
            onClick={() => changeIndex(idx)}
            title={`Memory #${m.id}: ${m.title}`}
          >
            <span className="vertical-node-dot" />
            {idx % 5 === 0 && (
              <span className="vertical-node-label">{m.date.includes('2026') ? m.date.replace(', 2026', '') : m.date}</span>
            )}
          </div>
        ))}
      </aside>

      {/* Mini MP3 Player Widget Overlay */}
      <MiniMusicPlayer />

      {/* Back Navigation Link */}
      {onGoBack && (
        <button className="back-link-btn" onClick={onGoBack} style={{ position: 'absolute', bottom: '1.2rem', left: '1.8rem', zIndex: 30 }}>
          ← Back to Bouquet
        </button>
      )}
    </div>
  );
};
