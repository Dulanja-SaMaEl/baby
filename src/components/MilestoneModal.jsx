import React from 'react';

export const MilestoneModal = ({ isOpen, onClose, onGoNext }) => {
  if (!isOpen) return null;

  const handleAction = () => {
    onClose();
    if (onGoNext) onGoNext();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card celebration-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close milestone modal">✕</button>

        <div className="modal-header-icon">
          <span className="celebration-emoji">👑</span>
        </div>

        <h2 className="modal-title">Happy 24th Birthday! 🎉</h2>

        <p className="modal-body-text">
          24 years of pure magic, laughter, and sweetness! May your day be filled with endless joy, delicious cake, and magical moments. 🎀✨
        </p>

        <div className="modal-heart-banner">
          <span>🎈</span>
          <span>💖</span>
          <span>🎂</span>
        </div>

        <button className="modal-action-btn" onClick={handleAction}>
          Claim Your Gifts! 🎁✨
        </button>
      </div>
    </div>
  );
};
