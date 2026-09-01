import React, { useEffect, useRef, useState } from 'react';
import { soundManager } from '../utils/soundEffects';

export const DrawingHeartOverlay = ({ onClose, onReplayJourney }) => {
  const canvasRef = useRef(null);
  const [showCenterText, setShowCenterText] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    soundManager.initContext();
    soundManager.playLoveChime();

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Words to draw
    const wordList = ['love you', 'LOVE YOU', 'Love You', 'i love you', 'I LOVE YOU', 'forever', 'baby', 'my princess', '💖'];
    const colors = [
      '#23F0FF', // Neon Cyan
      '#FF85A1', // Soft Pink
      '#A7FFEE', // Aqua Glow
      '#FFE600', // Bright Yellow
      '#FF4878', // Rose Pink
      '#79E2FF'  // Sky Blue
    ];

    // Generate heart outline points using Parametric Heart Equation
    // x = 16 * sin^3(t)
    // y = -(13 * cos(t) - 5 * cos(2t) - 2 * cos(3t) - cos(4t))
    const totalPoints = Math.min(220, Math.floor(width / 3.2));
    const heartScale = Math.min(width, height) / 38;

    const points = [];
    for (let i = 0; i < totalPoints; i++) {
      const t = (i / totalPoints) * Math.PI * 2;
      const x = 16 * Math.pow(Math.sin(t), 3);
      const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
      
      points.push({
        x: x * heartScale,
        y: y * heartScale,
        word: wordList[i % wordList.length],
        color: colors[i % colors.length],
        fontSize: Math.floor(Math.random() * 5 + 11),
        rotation: (Math.random() - 0.5) * 0.4,
        glow: Math.random() * 15 + 8,
        delay: (i / totalPoints) * 2.5 // progressive drawing delay in seconds
      });
    }

    // Add extra inner heart particles to match the reference image density
    const innerPoints = [];
    const innerDensity = Math.min(180, Math.floor(width / 4));
    for (let i = 0; i < innerDensity; i++) {
      const t = Math.random() * Math.PI * 2;
      const r = Math.pow(Math.random(), 0.6) * 0.85; // inner fill distribution
      const x = 16 * Math.pow(Math.sin(t), 3) * r;
      const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)) * r;

      innerPoints.push({
        x: x * heartScale,
        y: y * heartScale,
        word: wordList[Math.floor(Math.random() * wordList.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
        fontSize: Math.floor(Math.random() * 6 + 10),
        opacity: Math.random() * 0.7 + 0.3,
        pulseSpeed: Math.random() * 0.03 + 0.01,
        phase: Math.random() * Math.PI * 2,
        delay: 0.8 + Math.random() * 2.0
      });
    }

    let startTime = performance.now();

    // Timer to trigger center text and buttons
    const centerTimer = setTimeout(() => setShowCenterText(true), 1800);
    const buttonTimer = setTimeout(() => setShowButtons(true), 2800);

    const render = (now) => {
      const elapsed = (now - startTime) / 1000; // in seconds

      ctx.clearRect(0, 0, width, height);

      // Deep Romantic Radial Background
      const bgGrad = ctx.createRadialGradient(width / 2, height / 2, 50, width / 2, height / 2, Math.max(width, height) / 1.2);
      bgGrad.addColorStop(0, '#0F2A4A');
      bgGrad.addColorStop(0.6, '#0A192F');
      bgGrad.addColorStop(1, '#020710');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2 - 10;

      // Draw Inner Density Words
      for (let pt of innerPoints) {
        if (elapsed < pt.delay) continue;
        const progress = Math.min(1, (elapsed - pt.delay) / 0.8);
        const alpha = Math.sin(now * pt.pulseSpeed + pt.phase) * 0.25 + 0.75;

        ctx.save();
        ctx.translate(centerX + pt.x, centerY + pt.y);
        ctx.fillStyle = pt.color;
        ctx.globalAlpha = progress * alpha * 0.85;
        ctx.font = `600 ${pt.fontSize}px 'Fredoka', 'Quicksand', sans-serif`;
        ctx.shadowColor = pt.color;
        ctx.shadowBlur = 10;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(pt.word, 0, 0);
        ctx.restore();
      }

      // Draw Outer Heart Contour Words (Animative Progressive Drawing)
      for (let pt of points) {
        if (elapsed < pt.delay) continue;

        const progress = Math.min(1, (elapsed - pt.delay) / 0.6);
        const scale = 0.5 + progress * 0.5;

        ctx.save();
        ctx.translate(centerX + pt.x, centerY + pt.y);
        ctx.rotate(pt.rotation);
        ctx.scale(scale, scale);
        ctx.fillStyle = pt.color;
        ctx.globalAlpha = progress;
        ctx.font = `700 ${pt.fontSize}px 'Fredoka', 'Outfit', sans-serif`;
        ctx.shadowColor = pt.color;
        ctx.shadowBlur = pt.glow;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(pt.word, 0, 0);
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      clearTimeout(centerTimer);
      clearTimeout(buttonTimer);
    };
  }, []);

  return (
    <div className="drawing-heart-overlay">
      <canvas ref={canvasRef} className="drawing-heart-canvas" />

      {/* Center "I Love You" Glowing Title */}
      {showCenterText && (
        <div className="drawing-heart-center-text">
          <h1 className="heart-title-text">I Love You</h1>
          <p className="heart-subtitle-text">Forever & Always 💕</p>
        </div>
      )}

      {/* Action Buttons */}
      {showButtons && (
        <div className="drawing-heart-actions">
          <button
            className="drawing-heart-replay-btn"
            onClick={() => {
              soundManager.playLoveChime();
              onReplayJourney();
            }}
          >
            Restart Journey 🔄✨
          </button>
          {onClose && (
            <button className="drawing-heart-close-btn" onClick={onClose}>
              Close ✖
            </button>
          )}
        </div>
      )}
    </div>
  );
};
