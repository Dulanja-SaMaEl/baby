import React from 'react';

export const GiftModal = ({ isOpen, giftData, onClose, onOpenBouquet, onOpenScrapbook, onOpenLetter, onOpenVideoVault }) => {
  if (!isOpen || !giftData) return null;

  return (
    <div className="modal-backdrop frosted-backdrop" onClick={onClose}>
      <div className="modal-card frosted-card" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Close surprise modal">
          ✕
        </button>

        {/* Surprise Badge Tag */}
        <span className="gift-modal-badge">{giftData.tag}</span>

        {/* Large Emoji Graphic */}
        <div className="gift-modal-icon-wrapper">
          <span className="gift-modal-icon">{giftData.icon}</span>
        </div>

        {/* Surprise Title */}
        <h3 className="gift-modal-title">{giftData.title}</h3>

        {/* Description Text */}
        <p className="gift-modal-description">{giftData.description}</p>

        {/* Highlights Pills */}
        {giftData.highlights && (
          <div className="gift-modal-highlights">
            {giftData.highlights.map((highlight, index) => (
              <span key={index} className="highlight-pill">
                {highlight}
              </span>
            ))}
          </div>
        )}

        {/* Modal Action Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: '0.6rem' }}>
          {giftData.id === 1 && onOpenBouquet && (
            <button className="modal-action-btn gift-modal-btn" onClick={onOpenBouquet}>
              Open Your Bouquet Surprise 💐✨
            </button>
          )}

          {giftData.id === 2 && onOpenScrapbook && (
            <button className="modal-action-btn gift-modal-btn" onClick={onOpenScrapbook}>
              View Memory Scrapbook 📖✨
            </button>
          )}

          {giftData.id === 3 && onOpenLetter && (
            <button className="modal-action-btn gift-modal-btn" onClick={onOpenLetter}>
              Read Heartfelt Letter 💌✨
            </button>
          )}

          {giftData.id === 4 && onOpenVideoVault && (
            <button className="modal-action-btn gift-modal-btn" onClick={onOpenVideoVault}>
              Watch Video Memory Vault 🎬🍿
            </button>
          )}

          {/* Explicit Back to Gifts Button for ALL modals */}
          <button
            className="modal-action-btn"
            style={{ background: 'rgba(35, 240, 255, 0.15)', color: '#A7FFEE', border: '1px solid rgba(35, 240, 255, 0.3)', boxShadow: 'none' }}
            onClick={onClose}
          >
            ← Close & Back to Gifts 🎁
          </button>
        </div>
      </div>
    </div>
  );
};
