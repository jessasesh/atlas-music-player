import { useState } from "react";
import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";

const MusicPlayer: React.FC = () => {
  const [playlist, setPlaylist] = useState<{ id: string; title: string; artist: string; duration: number }[]>([]);
  const [currentSongId, setCurrentSongId] = useState<string | null>(null);

  return (
    <div className="sm:flex">
      <CurrentlyPlaying
        playlist={playlist}
        setPlaylist={setPlaylist}
        currentSongId={currentSongId}
        setCurrentSongId={setCurrentSongId}
      />
      <Playlist playlist={playlist} currentSongId={currentSongId} onSelectSong={setCurrentSongId} />
    </div>
  );
};

export default MusicPlayer;
