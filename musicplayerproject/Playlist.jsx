import React from "react";
import "./Playlist.css";

const Playlist = ({ songs, onSongSelect }) => {
  return (
    <div className="playlist">
      <h3>Playlist</h3>
      <ul>
        {songs.map((song, index) => (
          <li key={index} onClick={() => onSongSelect(index)}>
            {song.title}
          </li>
        ))}
      </ul>
    </div>
  );
};


export default Playlist;
