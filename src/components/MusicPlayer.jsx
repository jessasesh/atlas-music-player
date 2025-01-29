import React from "react";
import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";

const MusicPlayer = () => {
  return (
    <div className="sm:flex">
        <CurrentlyPlaying />
        <Playlist />
    </div>
  );
};

export default MusicPlayer;