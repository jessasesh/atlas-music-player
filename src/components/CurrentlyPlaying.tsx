import { useState, useEffect } from "react";
import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";
import AudioPlayer from "./AudioPlayer";

type PlaylistSong = {
  id: string;
  title: string;
  artist: string;
  duration: number;
};

type SongDetails = {
  id: string;
  title: string;
  artist: string;
  cover: string;
  song: string;
  duration: number;
};

type CurrentlyPlayingProps = {
  setCurrentSongId: (id: string | null) => void;
  setPlaylist: (playlist: PlaylistSong[]) => void;
};

const CurrentlyPlaying: React.FC<CurrentlyPlayingProps> = ({ setCurrentSongId, setPlaylist }) => {
  const [currentSong, setCurrentSong] = useState<SongDetails | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.5);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [isShuffle, setIsShuffle] = useState<boolean>(false);
  const [isRepeat, setIsRepeat] = useState<boolean>(false);

  useEffect(() => {
    fetchPlaylist();
  }, []);

  const fetchSongDetails = async (songId: string) => {
    try {
      const response = await fetch(`/api/v1/songs/${songId}`);
      if (!response.ok) return;
      const data: SongDetails = await response.json();
      setCurrentSong(data);
      setIsPlaying(true);
      setCurrentSongId(songId);
    } catch {
      return;
    }
  };

  const fetchPlaylist = async () => {
    try {
      const response = await fetch(`/api/v1/playlist`);
      if (!response.ok) return;
      const data: PlaylistSong[] = await response.json();
      setPlaylist(data);
      if (data.length > 0) fetchSongDetails(data[0].id);
    } catch {
      return;
    }
  };

  const prevSong = () => {
    if (!currentSong) return;
    setCurrentSongId(currentSong.id);
  };

  const nextSong = () => {
    if (!currentSong) return;
    setCurrentSongId(currentSong.id);
  };

  return (
    <div className="sm:w-1/2 xl:w-2/5 sm:mr-2 xl:ml-20 p-6 bg-gray-900 rounded-lg">
        <CoverArt song={currentSong} />
        <SongTitle song={currentSong} />
        <PlayControls
          isPlaying={isPlaying}
          togglePlay={() => setIsPlaying(!isPlaying)}
          prevSong={prevSong}
          nextSong={nextSong}
          isShuffle={isShuffle}
          toggleShuffle={() => setIsShuffle(!isShuffle)}
          isRepeat={isRepeat}
          toggleRepeat={() => setIsRepeat(!isRepeat)}
          playbackSpeed={playbackSpeed}
          setPlaybackSpeed={setPlaybackSpeed}
        />
        <VolumeControls volume={volume} setVolume={setVolume} />
        {currentSong && (
          <AudioPlayer
            songUrl={currentSong.song}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            volume={volume}
            playbackSpeed={playbackSpeed}
            onSongEnd={nextSong}
          />
        )}
      </div>
  );
};

export default CurrentlyPlaying;
