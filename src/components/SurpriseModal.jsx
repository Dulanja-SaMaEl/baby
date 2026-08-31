import React from 'react';

export const SurpriseModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close surprise modal">✕</button>

        <div className="modal-header-icon">
          <span className="celebration-emoji">🎁</span>
        </div>

        <h2 className="modal-title">Surprise Unlocked! 🎉</h2>

        <p className="modal-body-text">
          Happy Special Day! You bring so much light, happiness, and love into every single day. 🌸
        </p>

        <div className="modal-heart-banner">
          <span>💖</span>
          <span>✨</span>
          <span>💖</span>
        </div>

        <button className="modal-action-btn" onClick={onClose}>
          Aww, Thank You! 💕
        </button>
      </div>
    </div>
  );
};
