import React from "react";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";
import "./PlayerControls.css";

function PlayerControls() {
  return (
    <div className="player-controls">
      <button><FaBackward /> Prev</button>
      <button><FaPlay /> Play</button>
      <button><FaPause /> Pause</button>
      <button><FaForward /> Next</button>
    </div>
  );
}

export default PlayerControls;
