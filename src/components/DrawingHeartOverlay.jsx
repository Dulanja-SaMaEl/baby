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

    // Cyan, Sky Blue, Aqua, Soft Pink theme matching the site
    const words = ['LOVE YOU', 'love you', 'Love You', 'I LOVE YOU'];
    const colors = ['#23F0FF', '#79E2FF', '#A7FFEE', '#5CE1E6', '#FF85A1'];

    // 1. Outer Heart Line Points (evenly spaced along parametric curve)
    const outerCount = Math.min(85, Math.floor(width / 7.5));
    const heartScale = Math.min(width, height) / 36;
    const points = [];

    for (let i = 0; i < outerCount; i++) {
      const t = (i / outerCount) * Math.PI * 2;
      const x = 16 * Math.pow(Math.sin(t), 3);
      const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));

      points.push({
        x: x * heartScale,
        y: y * heartScale,
        word: words[i % words.length],
        color: colors[i % colors.length],
        fontSize: Math.floor(width < 480 ? 11 : 13),
        delay: (i / outerCount) * 2.2 // Smooth drawing animation around perimeter
      });
    }

    // 2. Middle Ring Heart Points (scaled slightly inside)
    const midCount = Math.min(45, Math.floor(width / 14));
    const midPoints = [];
    for (let i = 0; i < midCount; i++) {
      const t = (i / midCount) * Math.PI * 2;
      const r = 0.78;
      const x = 16 * Math.pow(Math.sin(t), 3) * r;
      const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)) * r;

      midPoints.push({
        x: x * heartScale,
        y: y * heartScale,
        word: words[(i + 1) % words.length],
        color: colors[(i + 2) % colors.length],
        fontSize: Math.floor(width < 480 ? 10 : 12),
        delay: 0.6 + (i / midCount) * 1.8
      });
    }

    // 3. Inner Soft Ambient Floating Text (leaving center 40% empty for title)
    const innerCount = Math.min(25, Math.floor(width / 24));
    const innerPoints = [];
    for (let i = 0; i < innerCount; i++) {
      const t = (i / innerCount) * Math.PI * 2;
      const r = 0.52;
      const x = 16 * Math.pow(Math.sin(t), 3) * r;
      const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)) * r;

      innerPoints.push({
        x: x * heartScale,
        y: y * heartScale,
        word: words[(i + 2) % words.length],
        color: colors[(i + 3) % colors.length],
        fontSize: Math.floor(width < 480 ? 9 : 11),
        delay: 1.2 + (i / innerCount) * 1.2
      });
    }

    let startTime = performance.now();

    const centerTimer = setTimeout(() => setShowCenterText(true), 1500);
    const buttonTimer = setTimeout(() => setShowButtons(true), 2400);

    // 60 FPS Silky Smooth Render Loop (Zero Canvas Lag)
    const render = (now) => {
      const elapsed = (now - startTime) / 1000;

      ctx.clearRect(0, 0, width, height);

      // Radial Glowing Theme Background
      const bgGrad = ctx.createRadialGradient(width / 2, height / 2, 40, width / 2, height / 2, Math.max(width, height) / 1.1);
      bgGrad.addColorStop(0, '#0F2A4A');
      bgGrad.addColorStop(0.55, '#0A192F');
      bgGrad.addColorStop(1, '#020710');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2 - 15;

      // Draw Inner Ring Points
      for (let pt of innerPoints) {
        if (elapsed < pt.delay) continue;
        const alpha = Math.min(0.7, (elapsed - pt.delay) / 0.6);

        ctx.save();
        ctx.translate(centerX + pt.x, centerY + pt.y);
        ctx.fillStyle = pt.color;
        ctx.globalAlpha = alpha;
        ctx.font = `600 ${pt.fontSize}px 'Fredoka', sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(pt.word, 0, 0);
        ctx.restore();
      }

      // Draw Middle Ring Points
      for (let pt of midPoints) {
        if (elapsed < pt.delay) continue;
        const alpha = Math.min(0.85, (elapsed - pt.delay) / 0.5);

        ctx.save();
        ctx.translate(centerX + pt.x, centerY + pt.y);
        ctx.fillStyle = pt.color;
        ctx.globalAlpha = alpha;
        ctx.font = `700 ${pt.fontSize}px 'Fredoka', sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(pt.word, 0, 0);
        ctx.restore();
      }

      // Draw Main Heart Perimeter Points (Drawing Heart Line)
      for (let pt of points) {
        if (elapsed < pt.delay) continue;
        const alpha = Math.min(1, (elapsed - pt.delay) / 0.4);

        ctx.save();
        ctx.translate(centerX + pt.x, centerY + pt.y);
        ctx.fillStyle = pt.color;
        ctx.globalAlpha = alpha;
        ctx.font = `700 ${pt.fontSize}px 'Fredoka', sans-serif`;
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

      {/* Clean High-Contrast Center "I Love You" Title */}
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
