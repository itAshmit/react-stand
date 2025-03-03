import React, { useState, useEffect } from "react";
import "./ProgressBar.css";

const ProgressBar = ({ audioRef }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      if (audioRef.current) {
        setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
      }
    };
    audioRef.current?.addEventListener("timeupdate", updateProgress);
    return () => audioRef.current?.removeEventListener("timeupdate", updateProgress);
  }, [audioRef]);

  return <input type="range" value={progress} readOnly className="progress-bar" />;
};

export default ProgressBar;
