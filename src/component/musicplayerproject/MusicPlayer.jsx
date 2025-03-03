import React, { useState, useRef } from "react";
import PlayerControls from "./PlayerControls";
import ProgressBar from "./ProgressBar";
import SongDetails from "./SongDetails";
import Playlist from "./Playlist";
import VolumeControl from "./VolumeControl";
import Navbar from "./Navbar";
import ThemeToggle from "./ThemeToggle";
import "./MusicPlayer.css";

const MusicPlayer = () => {
  const [songs] = useState([
    { id: 1, title: "Song One", artist: "Artist A", src: "/songs/song1.mp3" },
    { id: 2, title: "Song Two", artist: "Artist B", src: "/songs/song2.mp3" },
    { id: 3, title: "Song Three", artist: "Artist C", src: "/songs/song3.mp3" },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const playNext = () => {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === songs.length - 1 ? 0 : prevIndex + 1
    );
  };

  const playPrevious = () => {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === 0 ? songs.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="music-player">
      <Navbar />
      <SongDetails song={songs[currentSongIndex]} />
      <audio ref={audioRef} src={songs[currentSongIndex].src} />
      <ProgressBar audioRef={audioRef} />
      <PlayerControls
        isPlaying={isPlaying}
        togglePlayPause={togglePlayPause}
        playNext={playNext}
        playPrevious={playPrevious}
      />
      <VolumeControl audioRef={audioRef} />
      <Playlist songs={songs} setCurrentSongIndex={setCurrentSongIndex} />
      <ThemeToggle />
    </div>
  );
};

export default MusicPlayer;