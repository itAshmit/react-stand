import React, { useState, useEffect } from "react";
import "./ProgressBar.css";

const ProgressBar = ({ audioRef }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      if (audioRef.current && !isNaN(audioRef.current.duration)) {
        setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
      }
    };

    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener("timeupdate", updateProgress);
      return () => {
        audio.removeEventListener("timeupdate", updateProgress);
      };
    }
  }, [audioRef]);

  const handleSeek = (event) => {
    if (!audioRef.current || isNaN(audioRef.current.duration)) return; // Prevent errors

    const seekTime = (event.target.value / 100) * audioRef.current.duration;
    if (!isNaN(seekTime) && seekTime >= 0 && seekTime <= audioRef.current.duration) {
      audioRef.current.currentTime = seekTime;
      setProgress(event.target.value);
    }
  };

  return (
    <input
      type="range"
      value={progress}
      onChange={handleSeek}
      className="progress-bar"
      style={{
        background: `linear-gradient(to right, #4caf50 ${progress}%, #ddd ${progress}%)`,
      }}
    />
  );
};

export default ProgressBar;
