import React from "react";
import "./PlayerControls.css";

const PlayerControls = ({ isPlaying, setIsPlaying, onNext, onPrevious }) => {
  return (
    <div className="controls">
      <button onClick={onPrevious}>⏮ Prev</button>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? "⏸ Pause" : "▶ Play"}
      </button>
      <button onClick={onNext}>⏭ Next</button>
    </div>
  );
};

export default PlayerControls;
