type SongTitleProps = {
  song: {
    title: string;
    artist: string;
  } | null;
};

const SongTitle = ({ song }: SongTitleProps) => {
  return (
    <div className="flex-col mt-2">
      <h1 className="font-bold text-2xl text-textPrimary dark:text-darkTextPrimary">
        {song?.title || "Unknown Song"}
      </h1>
      <p className="text-lg font-semibold text-gray-500 dark:text-gray-400">
        {song?.artist || "Unknown Artist"}
      </p>
    </div>
  );
};

export default SongTitle;
