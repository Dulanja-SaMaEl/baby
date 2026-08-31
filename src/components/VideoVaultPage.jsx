import React, { useState, useRef } from 'react';
import confetti from 'canvas-confetti';
import { UltimateAnimativeCat } from './UltimateAnimativeCat';
import { soundManager } from '../utils/soundEffects';

// 16 Curated Video Moments
const VIDEO_COLLECTION = [
  { id: 1, title: "Your giggles are my favorite sound in the world 🗼", duration: "0:24", bgGradient: "linear-gradient(135deg, #FFCCD5, #FF85A1)", videoUrl: "https://res.cloudinary.com/keklxcys/video/upload/v1788216656/vid1.mp4" },
  { id: 2, title: "Chasing waves & holding you close 🌅", duration: "0:30", bgGradient: "linear-gradient(135deg, #FFE3E9, #FFD6E3)", videoUrl: "https://res.cloudinary.com/keklxcys/video/upload/v1788216658/vid2.mp4" },
  { id: 3, title: "Flour on our noses, love in our hearts 🥞", duration: "0:18", bgGradient: "linear-gradient(135deg, #FFF0F3, #FFE5EC)", videoUrl: "https://res.cloudinary.com/keklxcys/video/upload/v1788216663/vid3.mp4" },
  { id: 4, title: "Singing out loud with the windows down 🎶", duration: "0:45", bgGradient: "linear-gradient(135deg, #FDE2EA, #FFCCD5)", videoUrl: "https://res.cloudinary.com/keklxcys/video/upload/v1788216655/vid4.mp4" },
  { id: 5, title: "Let it rain, as long as I get to dance with you 🌧️", duration: "0:28", bgGradient: "linear-gradient(135deg, #FFD6E3, #FFE3E9)", videoUrl: "https://res.cloudinary.com/keklxcys/video/upload/v1788216656/vid5.mp4" },
  { id: 6, title: "Sharing sweet bites & sweeter giggles 🍦", duration: "0:15", bgGradient: "linear-gradient(135deg, #FFE5EC, #FFF0F3)", videoUrl: "https://res.cloudinary.com/keklxcys/video/upload/v1788216660/vid6.mp4" },
  { id: 7, title: "Counting stars, but I already found my universe 🌌", duration: "0:35", bgGradient: "linear-gradient(135deg, #FFCCD5, #FDE2EA)", videoUrl: "https://res.cloudinary.com/keklxcys/video/upload/v1788216658/vid7.mp4" },
  { id: 8, title: "Autumn adventures with my favorite human 🎃", duration: "0:22", bgGradient: "linear-gradient(135deg, #FFE3E9, #FFD6E3)", videoUrl: "https://res.cloudinary.com/keklxcys/video/upload/v1788216655/vid8.mp4" },
  { id: 9, title: "Counting down to midnight in your arms 🎆", duration: "0:40", bgGradient: "linear-gradient(135deg, #FFF0F3, #FF85A1)", videoUrl: "https://res.cloudinary.com/keklxcys/video/upload/v1788216662/vid9.mp4" },
  { id: 10, title: "Screaming on thrill rides, holding hands tight 🎡", duration: "0:32", bgGradient: "linear-gradient(135deg, #FDE2EA, #FFE5EC)", videoUrl: "https://res.cloudinary.com/keklxcys/video/upload/v1788216667/vid10.mp4" },
  { id: 11, title: "Sweetest moments baking memories with you 🎂", duration: "0:20", bgGradient: "linear-gradient(135deg, #FFD6E3, #FFCCD5)", videoUrl: "https://res.cloudinary.com/keklxcys/video/upload/v1788216655/vid11.mp4" },
  { id: 12, title: "Pure joy & happy tail-wags with you 🐶", duration: "0:16", bgGradient: "linear-gradient(135deg, #FFE5EC, #FFE3E9)", videoUrl: "https://res.cloudinary.com/keklxcys/video/upload/v1788216664/vid12.mp4" },
  { id: 13, title: "Warm firelight & your soft smile 🪵", duration: "0:26", bgGradient: "linear-gradient(135deg, #FFF0F3, #FDE2EA)", videoUrl: "https://res.cloudinary.com/keklxcys/video/upload/v1788216659/vid13.mp4" },
  { id: 14, title: "Snowflakes falling, but your hug warms my soul ❄️", duration: "0:33", bgGradient: "linear-gradient(135deg, #FFCCD5, #FFD6E3)", videoUrl: "https://res.cloudinary.com/keklxcys/video/upload/v1788216666/vid14.mp4" },
  { id: 15, title: "Under cherry blossoms, dreaming of our future 🌸", duration: "0:29", bgGradient: "linear-gradient(135deg, #FFE3E9, #FFF0F3)", videoUrl: "https://res.cloudinary.com/keklxcys/video/upload/v1788216658/vid15.mp4" },
  { id: 16, title: "You and me, forever & always infinity 💖", duration: "0:50", bgGradient: "linear-gradient(135deg, #FF85A1, #E6195E)", videoUrl: "https://res.cloudinary.com/keklxcys/video/upload/v1788216656/vid16.mp4" }
];

export const VideoVaultPage = ({ onGoBack, onFinishJourney }) => {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showFinaleModal, setShowFinaleModal] = useState(false);
  const videoRef = useRef(null);

  const activeVideo = VIDEO_COLLECTION[activeVideoIndex];

  // Trigger video play event
  const handlePlayVideo = () => {
    setIsPlaying(true);
    soundManager.initContext();
  };

  const handlePauseVideo = () => {
    setIsPlaying(false);
  };

  const handleSelectVideo = (idx) => {
    if (idx === activeVideoIndex) return;
    soundManager.playPop(120);
    setIsPlaying(false);
    setActiveVideoIndex(idx);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handleFinishClick = () => {
    soundManager.playLoveChime();
    confetti({
      particleCount: 120,
      spread: 100,
      origin: { y: 0.5 },
      colors: ['#FF4878', '#FF85A1', '#FFD700', '#5A162E', '#FFFFFF']
    });
    setShowFinaleModal(true);
  };

  return (
    <div className={`video-vault-container ${isPlaying ? 'cinema-mode-active' : ''}`}>
      {/* Cinema Mode Darkening Overlay */}
      <div className="cinema-overlay" aria-hidden="true" />

      {/* Header Stack */}
      <header className="video-vault-header">
        <h1 className="video-vault-title">Our Favorite Moments</h1>
        <p className="video-vault-subtitle">Sit back, relax, and enjoy the show 🍿</p>
      </header>

      {/* Main Center Video Player Container */}
      <main className="video-main-stage">
        <div className="video-player-card">
          {/* Main Video Frame / HTML5 Video Player */}
          <div className="video-frame-wrapper" style={{ background: activeVideo.bgGradient }}>
            <video
              ref={videoRef}
              className="main-html5-video"
              controls
              onPlay={handlePlayVideo}
              onPause={handlePauseVideo}
              onEnded={handlePauseVideo}
              poster=""
              src={activeVideo.videoUrl || `/videos/video${activeVideo.id}.mp4`}
            >
              {/* SVG Animated Fallback Canvas inside Video Player */}
              <svg width="100%" height="100%" viewBox="0 0 600 350" fill="none">
                <rect width="600" height="350" fill="url(#vaultGrad)" />
                <defs>
                  <linearGradient id="vaultGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFF0F3" />
                    <stop offset="100%" stopColor="#FFCCD5" />
                  </linearGradient>
                </defs>

                {/* Animated Film Reel Graphic */}
                <circle cx="300" cy="150" r="60" fill="#5A162E" opacity="0.12" />
                <circle cx="300" cy="150" r="45" fill="#E6195E" opacity="0.8" />
                <polygon points="290,135 320,150 290,165" fill="#FFFFFF" />

                {/* Video Title Banner */}
                <text x="300" y="250" textAnchor="middle" fill="#5A162E" fontFamily="Playfair Display, serif" fontSize="22" fontWeight="700">
                  {activeVideo.title}
                </text>
                <text x="300" y="280" textAnchor="middle" fill="#5A162E" fontFamily="Fredoka, sans-serif" fontSize="14" opacity="0.75">
                  MOMENT #{activeVideo.id} OF 16 • {activeVideo.duration}
                </text>
              </svg>
            </video>
          </div>
        </div>

        {/* The Ultimate Animative Ghibli-style Fluffy Orange Cat Component */}
        <UltimateAnimativeCat isPlaying={isPlaying} />
      </main>

      {/* Vintage Film Strip Carousel (16 Thumbnails) */}
      <aside className="film-strip-container" aria-label="16 Video Thumbnails">
        <div className="film-perforations film-top" />
        <div className="film-strip-scroll-track">
          {VIDEO_COLLECTION.map((v, idx) => (
            <button
              key={v.id}
              className={`film-thumbnail-card ${idx === activeVideoIndex ? 'active-thumb' : ''}`}
              onClick={() => handleSelectVideo(idx)}
              style={{ background: v.bgGradient }}
              title={v.title}
            >
              <div className="thumb-play-icon">▶</div>
              <span className="thumb-number">#{v.id}</span>
              <span className="thumb-title">{v.title}</span>
            </button>
          ))}
        </div>
        <div className="film-perforations film-bottom" />
      </aside>

      {/* Bottom Right Prominent Finish Journey Button */}
      <div className="finish-journey-wrapper">
        <button className="finish-journey-btn" onClick={handleFinishClick}>
          Finish Journey 💖
        </button>
      </div>

      {/* Back to Letter Button */}
      {onGoBack && (
        <button className="back-link-btn" onClick={onGoBack} style={{ position: 'absolute', bottom: '1.2rem', left: '1.8rem', zIndex: 30 }}>
          ← Back to Letter
        </button>
      )}

      {/* Celebration Grand Finale Modal */}
      {showFinaleModal && (
        <div className="modal-backdrop" onClick={() => setShowFinaleModal(false)}>
          <div className="modal-card celebration-finale-card" onClick={(e) => e.stopPropagation()}>
            <span className="celebration-emoji">✨💖 infinity 💖✨</span>
            <h2 className="modal-title" style={{ fontSize: '1.6rem', color: '#FF85A1', textShadow: '0 0 12px rgba(255, 133, 161, 0.6)' }}>
              This Is Actually Not The End, Babe...
            </h2>
            <p className="special-subheading" style={{ fontSize: '1.05rem', lineHeight: '1.6', color: '#FFE3E9', margin: '0.8rem 0' }}>
              This is just another beautiful beginning of our endless future together 💕 Every moment we’ve shared is just the prologue to the forever I want to build with you! Happy Birthday my princess! 🎂✨
            </p>
            <div style={{ display: 'flex', gap: '0.8rem', justifyContent: 'center', marginTop: '1.2rem' }}>
              <button
                className="modal-action-btn"
                onClick={() => {
                  setShowFinaleModal(false);
                  if (onFinishJourney) onFinishJourney();
                }}
              >
                Replay Journey 🔄✨
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
