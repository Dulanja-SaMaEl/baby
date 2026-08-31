import React, { useState, useEffect, useRef } from 'react';
import { MiniMusicPlayer } from './MiniMusicPlayer';
import { soundManager } from '../utils/soundEffects';

const LETTER_FULL_TEXT = `My beautiful girl,

Happy 24th Birthday. I wanted to create something special to show you just how much you mean to me. You make my life feel more beautiful and meaningful, and I feel so incredibly lucky to have you by my side.

Every single day, you make me smile, you make me feel safe, and you bring a kind of happiness into my world that I never knew was possible before I met you. I know I tell you this often, but you truly are the most beautiful person in my eyes, inside and out.

Watching you grow and stepping into this new year of your life makes me so proud. Thank you for being you, and for filling my heart with so much love. No matter where life takes us or what happens, my heart will always choose you. I can't wait to continue loving you for the rest of my life.

Always, forever.
Dulanja`;

export const LetterPage = ({ onGoBack, onGoNext }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const textIndexRef = useRef(0);
  const timerRef = useRef(null);

  // Typewriter effect logic
  useEffect(() => {
    soundManager.initContext();
    textIndexRef.current = 0;
    setDisplayedText('');
    setIsTypingComplete(false);

    timerRef.current = setInterval(() => {
      if (textIndexRef.current < LETTER_FULL_TEXT.length) {
        const nextChar = LETTER_FULL_TEXT.charAt(textIndexRef.current);
        setDisplayedText((prev) => prev + nextChar);
        textIndexRef.current += 1;

        // Play soft key click sound occasionally
        if (textIndexRef.current % 6 === 0) {
          soundManager.playPop(120 + (textIndexRef.current % 40));
        }
      } else {
        clearInterval(timerRef.current);
        setIsTypingComplete(true);
        soundManager.playLoveChime();
      }
    }, 28); // Natural reading speed (~28ms per char)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // Instant reveal on letter click
  const handleSkipTyping = () => {
    if (!isTypingComplete) {
      if (timerRef.current) clearInterval(timerRef.current);
      setDisplayedText(LETTER_FULL_TEXT);
      setIsTypingComplete(true);
      soundManager.playLoveChime();
    }
  };

  return (
    <div className="letter-page-container">
      {/* Floating Sinhala Romantic Lyrics Banner at Top */}
      <div className="karaoke-lyrics-ribbon letter-sinhala-banner">
        <div className="ribbon-glow-backdrop" />
        <div className="ribbon-content-box">
          <span className="karaoke-music-icon">🎵</span>
          <p className="sinhala-lyrics-text">
            උකස් දුන් හෘදේ නුඹටා • පණට සේමා නුඹට ප්රේමේ 💖
          </p>
        </div>
      </div>

      {/* Center UI: Large Vintage Ruled Parchment Paper Container */}
      <main className="letter-center-stage">
        <div className="letter-top-header">
          <h1 className="letter-header-title">A Letter From My Heart</h1>
        </div>

      {/* Bottom Left Anchor: Cute Calico Cat Hugging Large Pulsing Heart */}
      <div className="calico-cat-anchor" aria-hidden="true">
        <svg width="180" height="200" viewBox="0 0 180 200" fill="none" className="calico-cat-svg">
          {/* Floating Hearts above cat's head */}
          <g className="floating-cat-hearts">
            <path d="M 45 30 C 40 20, 30 20, 30 30 C 30 40, 45 50, 45 50 C 45 50, 60 40, 60 30 C 60 20, 50 20, 45 30 Z" fill="#FF4878" opacity="0.8" transform="scale(0.5) translate(30, -10)" />
            <path d="M 85 20 C 80 10, 70 10, 70 20 C 70 30, 85 40, 85 40 C 85 40, 100 30, 100 20 C 100 10, 90 10, 85 20 Z" fill="#FF85A1" opacity="0.85" transform="scale(0.6) translate(30, 0)" />
          </g>

          {/* Calico Cat Body */}
          <g transform="translate(10, 40)">
            {/* Tail */}
            <path d="M 30 130 Q 10 120, 15 90 Q 20 70, 35 80" stroke="#E67E22" strokeWidth="12" strokeLinecap="round" fill="none" />

            {/* White Body Base */}
            <ellipse cx="80" cy="110" rx="45" ry="40" fill="#FFFFFF" stroke="#5A162E" strokeWidth="3" />

            {/* Orange Calico Patches */}
            <path d="M 45 85 C 40 100, 60 120, 50 135 C 40 135, 38 100, 45 85 Z" fill="#E67E22" />
            <path d="M 105 85 C 120 95, 115 125, 125 130 C 125 110, 120 90, 105 85 Z" fill="#34495E" />

            {/* Head */}
            <ellipse cx="80" cy="60" rx="36" ry="30" fill="#FFFFFF" stroke="#5A162E" strokeWidth="3" />

            {/* Left Ear */}
            <path d="M 50 40 L 40 12 L 64 33 Z" fill="#E67E22" stroke="#5A162E" strokeWidth="3" strokeLinejoin="round" />
            <path d="M 52 36 L 46 20 L 60 32 Z" fill="#FFCCD5" />

            {/* Right Ear */}
            <path d="M 110 40 L 120 12 L 96 33 Z" fill="#FFFFFF" stroke="#5A162E" strokeWidth="3" strokeLinejoin="round" />
            <path d="M 108 36 L 114 20 L 100 32 Z" fill="#FFCCD5" />

            {/* Face Details */}
            {/* Happy Eyes */}
            <path d="M 62 58 Q 68 50, 74 58" stroke="#5A162E" strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M 86 58 Q 92 50, 98 58" stroke="#5A162E" strokeWidth="3" strokeLinecap="round" fill="none" />

            {/* Nose & Mouth */}
            <polygon points="80,63 77,60 83,60" fill="#FF4878" />
            <path d="M 80 63 Q 75 70, 70 67 M 80 63 Q 85 70, 90 67" stroke="#5A162E" strokeWidth="2.5" strokeLinecap="round" fill="none" />

            {/* Blush Cheeks */}
            <ellipse cx="58" cy="65" rx="7" ry="4" fill="#FF85A1" opacity="0.65" />
            <ellipse cx="102" cy="65" rx="7" ry="4" fill="#FF85A1" opacity="0.65" />

            {/* Large Hugged Red Heart (Pulsing Heartbeat) */}
            <g className="pulsing-hug-heart">
              <path
                d="M 80 115 C 60 75, 20 95, 45 130 C 65 155, 80 168, 80 168 C 80 168, 95 155, 115 130 C 140 95, 100 75, 80 115 Z"
                fill="#E6195E"
                stroke="#5A162E"
                strokeWidth="3.5"
              />
              <path d="M 50 105 Q 60 95, 68 110" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" opacity="0.6" fill="none" />
            </g>

            {/* Paws Over Heart */}
            <ellipse cx="50" cy="115" rx="10" ry="14" fill="#FFFFFF" stroke="#5A162E" strokeWidth="2.5" transform="rotate(-20 50 115)" />
            <ellipse cx="110" cy="115" rx="10" ry="14" fill="#FFFFFF" stroke="#5A162E" strokeWidth="2.5" transform="rotate(20 110 115)" />
          </g>
        </svg>
      </div>

      {/* Right Anchor: Vertical Watercolor Cherry Blossom Branch */}
      <div className="cherry-branch-anchor" aria-hidden="true">
        <svg width="180" height="420" viewBox="0 0 180 420" fill="none">
          <g filter="drop-shadow(0 4px 12px rgba(90, 22, 46, 0.08))">
            {/* Branch Stem */}
            <path d="M 180 20 Q 120 100, 140 220 Q 160 320, 100 420" stroke="#5D4037" strokeWidth="6" strokeLinecap="round" fill="none" />
            <path d="M 140 180 Q 90 160, 60 190" stroke="#4E342E" strokeWidth="4" strokeLinecap="round" fill="none" />

            {/* Cherry Blossom Flowers along branch */}
            {[
              { x: 130, y: 80, s: 1.1 },
              { x: 145, y: 150, s: 0.9 },
              { x: 75, y: 185, s: 1.2 },
              { x: 150, y: 250, s: 1.0 },
              { x: 115, y: 340, s: 1.1 },
            ].map((f, i) => (
              <g key={i} transform={`translate(${f.x}, ${f.y}) scale(${f.s})`}>
                {[0, 72, 144, 216, 288].map((angle, j) => (
                  <path
                    key={j}
                    d="M 0 0 C -10 -20, 10 -20, 0 0 Z"
                    fill="#FF85A1"
                    transform={`rotate(${angle})`}
                  />
                ))}
                <circle cx="0" cy="0" r="4" fill="#E6195E" />
              </g>
            ))}

            {/* Detaching Floating Petals */}
            <path className="drifting-branch-petal petal-1" d="M 70 200 C 60 190, 50 200, 60 210 Z" fill="#FFCCD5" />
            <path className="drifting-branch-petal petal-2" d="M 110 350 C 100 340, 90 350, 100 360 Z" fill="#FF85A1" />
          </g>
        </svg>
      </div>

        <div className="parchment-paper-card" onClick={handleSkipTyping} title="Click to reveal full text instantly">
          {/* Subtle Faint Notepad Ruled Lines */}
          <div className="notepad-ruled-lines" aria-hidden="true" />

          {/* Letter Cursive Text Area */}
          <article className="parchment-text-body">
            {displayedText.split('\n\n').map((paragraph, pIdx) => (
              <p key={pIdx} className="letter-paragraph">
                {paragraph}
              </p>
            ))}
            {!isTypingComplete && <span className="typewriter-cursor">|</span>}
          </article>

          {/* Delayed Reveal Pill Button in Bottom-Right of Paper */}
          {isTypingComplete && onGoNext && (
            <div className="letter-next-wrapper">
              <button className="letter-next-btn" onClick={onGoNext}>
                Next →
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Mini MP3 Player Widget Configured for Theme Song 2 */}
      <MiniMusicPlayer audioSrc="/Theme song 2.mp3" trackTitle="පිපුණු තිසරුන්" />

      {/* Back Navigation Link */}
      {onGoBack && (
        <button className="back-link-btn" onClick={onGoBack} style={{ position: 'absolute', bottom: '1.2rem', left: '1.8rem', zIndex: 30 }}>
          ← Back to Scrapbook
        </button>
      )}
    </div>
  );
};
