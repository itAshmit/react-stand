import React, { useRef, useEffect } from "react";
import Playlist from "./Playlist";
import PlayerControls from "./PlayerControls";
import ProgressBar from "./ProgressBar";
import SongDetails from "./SongDetails";
import VolumeControl from "./VolumeControl";
import ThemeToggle from "./ThemeToggle";
import "./MusicPlayer.css"; 

const MusicPlayer = ({ 
  songs = [  // Default songs array
    { title: "Chanakya Veena", artist: "Rikhiram", src: "/Chanakya_BY_Rikhiram.mp3" },
    { title: "Meri Bigdi Banaana", artist: "Unknown", src: "/Meri_Bigdi_Banaana.mp3" },
    { title: "Shiv Kailash", artist: "Unknown", src: "/Shiv_Kailash.mp3" }
  ],   
  currentSongIndex = 0,  // Default to first song
  setCurrentSongIndex, 
  isPlaying, 
  setIsPlaying 
}) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (songs.length === 0 || !songs[currentSongIndex]) return;

    const audio = audioRef.current;
    if (isPlaying) {
      audio.play().catch((error) => console.error("Playback Error: ", error));
    } else {
      audio.pause();
    }
  }, [isPlaying, currentSongIndex, songs]);

  if (songs.length === 0) {
    return <div className="error">⚠ No songs available. Please add songs!</div>;
  }

  return (
    <div className="music-player">
      {/* Song Details */}
      <SongDetails song={songs[currentSongIndex] || { title: "Unknown", artist: "Unknown" }} />

      {/* Audio Element */}
      <audio ref={audioRef} src={songs[currentSongIndex]?.src || ""} />

      {/* Progress Bar */}
      <ProgressBar audioRef={audioRef} />

      {/* Player Controls */}
      <PlayerControls 
        isPlaying={isPlaying} 
        setIsPlaying={setIsPlaying} 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        songs={songs} 
      />

      {/* Playlist */}
      <Playlist songs={songs} onSongSelect={setCurrentSongIndex} />


      {/* Volume Control */}
      <VolumeControl audioRef={audioRef} />

      {/* Theme Toggle */}
      <ThemeToggle />
    </div>
  );
  
};

export default MusicPlayer;
