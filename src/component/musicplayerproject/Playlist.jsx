import React from "react";
import "./Playlist.css";
const Playlist = ({ songs, currentSongIndex, setCurrentSongIndex, setIsPlaying }) => {
  const handleSongClick = (index) => {
    setCurrentSongIndex(index);  // ✅ Set new song
    setIsPlaying(true);          // ✅ Auto-play song
  };

  return (
    <div className="playlist">
      <h3>Playlist</h3>
      <ul>
        {songs.map((song, index) => (
          <li key={index} onClick={() => handleSongClick(index)}>
            {song.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;
