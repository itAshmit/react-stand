import React from "react";
import "./PlayerControls.css";

const PlayerControls = ({ currentSongIndex, setCurrentSongIndex, songs, isPlaying, setIsPlaying }) => {
  if (!setCurrentSongIndex) {
    console.error("setCurrentSongIndex is undefined in PlayerControls.jsx");
  }

  const handlePrevious = () => {
    if (typeof setCurrentSongIndex !== "function") return;
    setCurrentSongIndex((prevIndex) => (prevIndex === 0 ? songs.length - 1 : prevIndex - 1));
    setIsPlaying(true);
  };

  const handleNext = () => {
    if (typeof setCurrentSongIndex !== "function") return;
    setCurrentSongIndex((prevIndex) => (prevIndex === songs.length - 1 ? 0 : prevIndex + 1));
    setIsPlaying(true);
  };

  return (
    <div className="player-controls">
      <button onClick={handlePrevious}>⏮ Prev</button>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? "⏸ Pause" : "▶ Play"}
      </button>
      <button onClick={handleNext}>⏭ Next</button>
    </div>
  );
};

export default PlayerControls;
