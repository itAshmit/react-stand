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
    { id: 1, title: "Chanakya", artist: "Rishabh Rikhiram", src: "CHanakya_BY_RIkhiram.mp3" },
    { id: 2, title: "Meri Bigdi Banana", artist: "Nikhil Verma", src: "Meri Bigdi Banaana.mp3" },
    { id: 3, title: "Shiv Kailash", artist: "Rishabh Rikhiram", src: "Shiv_Kailash.mp3" },
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
      <audio ref={audioRef} src={songs[currentSongIndex]?.src || ""} />
      <ProgressBar audioRef={audioRef} />
      <PlayerControls
        songs={songs} // ✅ Ensure `songs` is passed
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        playNext={playNext}
        playPrevious={playPrevious}
      />
      <VolumeControl audioRef={audioRef} />
      <ThemeToggle />
    </div>
  );
};

export default MusicPlayer;
