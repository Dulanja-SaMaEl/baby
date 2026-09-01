import React, { useState, useEffect, useRef } from 'react';
import { KaraokeLyricsBanner } from './KaraokeLyricsBanner';
import { soundManager } from '../utils/soundEffects';

export const MiniMusicPlayer = ({ 
  audioSrc = 'https://res.cloudinary.com/keklxcys/video/upload/v1788220551/Theme_song.mp3', 
  trackTitle = 'Young and Beautiful' 
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(225); // ~3:45 default duration
  const [showLyricsModal, setShowLyricsModal] = useState(false);
  const audioRef = useRef(null);
  const timerRef = useRef(null);

  const [showEntrancePrompt, setShowEntrancePrompt] = useState(true);

  const isYoungAndBeautifulTrack = audioSrc.includes('Theme_song.mp3') || 
                                   audioSrc.includes('Theme song.mp3') || 
                                   audioSrc.toLowerCase().includes('young');

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

    // Attempt autoplay on mount
    audio.play().then(() => {
      setIsPlaying(true);
      setShowEntrancePrompt(false);
    }).catch(() => {
      // Browser autoplay policy blocked audio -> keep banner open for 1-tap play
      setIsPlaying(false);
      setShowEntrancePrompt(true);
    });

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
          setShowEntrancePrompt(false);
        }).catch(() => {
          soundManager.playLoveChime();
          setIsPlaying(true);
          setShowEntrancePrompt(false);
        });
      } else {
        setIsPlaying(true);
        setShowEntrancePrompt(false);
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
      {/* Animative Page Entrance Music Invitation Banner */}
      {showEntrancePrompt && !isPlaying && (
        <div className="music-entrance-prompt-banner" onClick={togglePlay}>
          <div className="prompt-notes-animation">
            <span className="bouncing-note n1">🎵</span>
            <span className="bouncing-note n2">🎶</span>
            <span className="bouncing-note n3">✨</span>
          </div>
          <div className="prompt-text-stack">
            <span className="prompt-badge">🎧 ROMANTIC AUDIO EXPERIENCE</span>
            <h4 className="prompt-heading">Play background song for this page 💖</h4>
            <p className="prompt-subtext">Theme Song: <strong>{trackTitle}</strong></p>
          </div>
          <button className="prompt-play-action-btn">
            ▶ Play Song Now ✨
          </button>
        </div>
      )}

      {/* Synchronized Floating Karaoke Banner (Only for track Young and Beautiful) */}
      {isYoungAndBeautifulTrack && (
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
            <span className="mp3-track-name" title={trackTitle}>{trackTitle}</span>
            {isYoungAndBeautifulTrack && (
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
