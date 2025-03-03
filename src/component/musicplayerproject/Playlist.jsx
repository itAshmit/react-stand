import React from "react";
import "./Playlist.css";

const Playlist = ({ songs, setCurrentSongIndex }) => {
  return (
    <div className="playlist">
      {songs.map((song, index) => (
        <div key={song.id} onClick={() => setCurrentSongIndex(index)}>
          {song.title} - {song.artist}
        </div>
      ))}
    </div>
  );
};

export default Playlist;
