import PlayListItem from "./PlayListItem";

type PlaylistProps = {
  playlist: { id: string; title: string; artist: string; duration: number }[];
  currentSongId: string | null;
  onSelectSong: (songId: string) => void;
};

const Playlist = ({ playlist = [], currentSongId, onSelectSong }: PlaylistProps) => {
  return (
    <div className="sm:w-1/2 xl:w-2/5 sm:ml-2 xl:mr-20 p-6 bg-cardBg text-textPrimary dark:bg-darkCardBg dark:text-darkTextPrimary rounded-lg shadow-md">
      <h1 className="mb-4 font-semibold text-xl">Playlist</h1>
      <div className="space-y-2">
        {playlist.map((song) => (
          <PlayListItem
            key={song.id}
            title={song.title}
            artist={song.artist}
            duration={song.duration}
            isCurrent={song.id === currentSongId}
            onClick={() => onSelectSong(song.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Playlist;
