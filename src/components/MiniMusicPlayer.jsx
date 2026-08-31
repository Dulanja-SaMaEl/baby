import React, { useState, useEffect, useRef } from 'react';
import { KaraokeLyricsBanner } from './KaraokeLyricsBanner';
import { soundManager } from '../utils/soundEffects';

export const MiniMusicPlayer = ({ audioSrc = '/Theme song.mp3', trackTitle = 'Young and Beautiful' }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(225); // ~3:45 default duration
  const [showLyricsModal, setShowLyricsModal] = useState(false);
  const audioRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    // Audio source initialization
    const audio = new Audio(audioSrc);
    audio.loop = true;
    audioRef.current = audio;

    const updateTime = () => {
      if (audio.currentTime) {
        setCurrentTime(audio.currentTime);
      }
      if (audio.duration && !isNaN(audio.duration)) {
        setDuration(audio.duration);
      }
    };

    audio.addEventListener('timeupdate', updateTime);

    return () => {
      audio.pause();
      audio.removeEventListener('timeupdate', updateTime);
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [audioSrc]);

  // Fallback timer increment if HTML5 audio is simulated/synth
  useEffect(() => {
    if (isPlaying && (!audioRef.current || audioRef.current.paused)) {
      timerRef.current = setInterval(() => {
        setCurrentTime((prev) => (prev >= 225 ? 0 : prev + 1));
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying]);

  const togglePlay = () => {
    soundManager.initContext();

    if (!isPlaying) {
      if (audioRef.current) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          // Play synth chime as backup if media file isn't present
          soundManager.playLoveChime();
          setIsPlaying(true);
        });
      } else {
        setIsPlaying(true);
      }
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsPlaying(false);
    }
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <>
      {/* Synchronized Floating Karaoke Banner (Only for default track Young and Beautiful) */}
      {audioSrc.includes('Theme song.mp3') && (
        <KaraokeLyricsBanner
          currentTime={currentTime}
          isPlaying={isPlaying}
          showFullModal={showLyricsModal}
          onCloseModal={() => setShowLyricsModal(false)}
        />
      )}

      {/* Mini MP3 Player Widget */}
      <div className="mini-mp3-player-widget">
        {/* Play / Pause Button with Soft Pulsing Glow Hint */}
        <button
          className={`mp3-play-btn ${!isPlaying ? 'pulse-hint' : ''}`}
          onClick={togglePlay}
          aria-label={isPlaying ? `Pause ${trackTitle}` : `Play ${trackTitle}`}
        >
          <span className="mp3-btn-icon">{isPlaying ? '⏸' : '▶'}</span>
        </button>

        {/* Track Info & Progress Track */}
        <div className="mp3-track-details">
          <div className="mp3-track-title-row">
            <span className="mp3-music-note">🎵</span>
            <span className="mp3-track-name">{trackTitle}</span>
            {audioSrc.includes('Theme song.mp3') && (
              <button
                className="mp3-lyrics-btn"
                onClick={() => setShowLyricsModal(true)}
                title="View full lyrics"
              >
                🎤 Lyrics
              </button>
            )}
          </div>

          {/* Soft Pink Timeline Progress Bar */}
          <div className="mp3-progress-container">
            <div
              className="mp3-progress-fill"
              style={{ width: `${isPlaying ? Math.min(100, Math.max(0, progressPercent)) : 0}%` }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
