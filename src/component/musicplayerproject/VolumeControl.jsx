import React from "react";
import "./VolumeControl.css";

const VolumeControl = ({ audioRef }) => {
  const changeVolume = (e) => {
    audioRef.current.volume = e.target.value / 100;
  };

  return (
    <input
      type="range"
      min="0"
      max="100"
      onChange={changeVolume}
      className="volume-control"
    />
  );
};

export default VolumeControl;
