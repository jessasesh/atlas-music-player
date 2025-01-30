import { useState } from "react";
import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";

const MusicPlayer: React.FC = () => {
  const [currentSongId, setCurrentSongId] = useState<string | null>(null);
  const [playlist, setPlaylist] = useState<{ id: string; title: string; artist: string; duration: number }[]>([]);

  return (
    <div className="sm:flex">
      <CurrentlyPlaying setCurrentSongId={setCurrentSongId} setPlaylist={setPlaylist} />
      <Playlist playlist={playlist} currentSongId={currentSongId} onSelectSong={setCurrentSongId} />
    </div>
  );
};

export default MusicPlayer;
