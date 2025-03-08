import React, { useState } from "react";
import { FaVolumeUp } from "react-icons/fa"; // Volume icon
import "./VolumeControl.css";

const VolumeControl = ({ audioRef }) => {
  const [isVisible, setIsVisible] = useState(false);

  const changeVolume = (e) => {
    if (audioRef.current) {
      audioRef.current.volume = e.target.value / 100;
    }
  };

  return (
    <div
      className="volume-container"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <FaVolumeUp className="volume-icon" />
      <input
        type="range"
        min="0"
        max="100"
        onChange={changeVolume}
        className={`volume-control ${isVisible ? "visible" : "hidden"}`}
      />
    </div>
  );
};

export default VolumeControl;
