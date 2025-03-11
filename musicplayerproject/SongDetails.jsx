import React from "react";
import "./SongDetails.css";

const SongDetails = ({ song }) => {
  return (
    <div className="song-details">
      <h2>{song.title}</h2>
      <p>{song.artist}</p>
    </div>
  );
};

export default SongDetails;
