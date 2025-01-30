import forward from "/images/forward.svg";
import play from "/images/play.svg";
import pause from "/images/pause.svg";
import rewind from "/images/rewind.svg";
import shuffle from "/images/shuffle.svg";

type PlayControlsProps = {
  isPlaying: boolean;
  togglePlay: () => void;
  prevSong: () => void;
  nextSong: () => void;
  isShuffle: boolean;
  toggleShuffle: () => void;
  isRepeat: boolean;
  toggleRepeat: () => void;
  playbackSpeed: number;
  setPlaybackSpeed: (speed: number) => void;
};

const PlayControls = ({
  isPlaying,
  togglePlay,
  prevSong,
  nextSong,
  isShuffle,
  toggleShuffle,
  playbackSpeed,
  setPlaybackSpeed,
}: PlayControlsProps) => {
  return (
    <div className="flex mt-4 justify-between p-4 items-center rounded-lg">
      <button
        onClick={() => setPlaybackSpeed(playbackSpeed === 1 ? 2 : playbackSpeed === 2 ? 0.5 : 1)}
        className="text-lg font-semibold text-textPrimary dark:text-darkTextPrimary"
      >
        {playbackSpeed || 1}x
      </button>

      <button onClick={prevSong} >
        <img src={rewind} alt="Rewind" className="w-6 h-6 dark:brightness-0 dark:invert" />
      </button>

      <button onClick={togglePlay} >
        <img src={isPlaying ? pause : play} alt="Play/Pause" className="w-8 h-8 dark:brightness-0 dark:invert" />
      </button>

      <button onClick={nextSong}>
        <img src={forward} alt="Skip Forward" className="w-6 h-6 dark:brightness-0 dark:invert" />
      </button>

      <button
        onClick={toggleShuffle}
        className={`transition-transform ${isShuffle ? "opacity-100" : "opacity-50"}`}
      >
        <img src={shuffle} alt="Shuffle" className="w-6 h-6 dark:brightness-0 dark:invert" />
      </button>
    </div>
  );
};

export default PlayControls;
