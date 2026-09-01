import React, { useMemo } from 'react';
import { LYRICS_DATA } from '../utils/lyricsData';

export const KaraokeLyricsBanner = ({ currentTime = 0, isPlaying = false, showFullModal = false, onCloseModal }) => {
  // Find currently active lyric line index based on playback time
  const activeIndex = useMemo(() => {
    let index = -1;
    for (let i = 0; i < LYRICS_DATA.length; i++) {
      if (currentTime >= LYRICS_DATA[i].time) {
        index = i;
      } else {
        break;
      }
    }
    return index;
  }, [currentTime]);

  const activeLine = activeIndex >= 0 ? LYRICS_DATA[activeIndex] : null;

  return (
    <>
      {/* Floating Holographic Karaoke Lyrics Ribbon (Active when song is playing) */}
      {isPlaying && activeLine && (
        <div className="karaoke-lyrics-ribbon" aria-live="polite">
          <div className="ribbon-glow-backdrop" />
          <div className="ribbon-content-box">
            <span className="karaoke-music-icon">🎤</span>
            <p className="karaoke-active-text">{activeLine.text}</p>
          </div>
        </div>
      )}

      {/* Full Lyrics Modal Overlay */}
      {showFullModal && (
        <div className="modal-backdrop frosted-backdrop" onClick={onCloseModal}>
          <div className="modal-card lyrics-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={onCloseModal} aria-label="Close lyrics">
              ✕
            </button>
            <span className="celebration-emoji">🎶</span>
            <h3 className="lyrics-modal-title">
              Young and Beautiful
            </h3>
            <p className="lyrics-modal-subtitle">
              Lana Del Rey • Song Transcript
            </p>

            <div className="full-lyrics-scroll-box">
              {LYRICS_DATA.map((line, idx) => {
                const isActive = idx === activeIndex;
                const minutes = Math.floor(line.time / 60);
                const seconds = Math.floor(line.time % 60).toString().padStart(2, '0');
                const timeStr = `${minutes}:${seconds}`;

                return (
                  <div
                    key={idx}
                    className={`lyrics-line-row ${isActive ? 'active-karaoke-row' : ''}`}
                  >
                    <span className="lyrics-timestamp">{timeStr}</span>
                    <span className="lyrics-text-content">{line.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
