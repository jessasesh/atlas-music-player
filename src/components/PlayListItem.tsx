type PlayListItemProps = {
  title: string;
  artist: string;
  duration: number;
  isCurrent: boolean;
  onClick: () => void;
};

const PlayListItem = ({ title, artist, duration, isCurrent, onClick }: PlayListItemProps) => {
  return (
    <div
      className={`flex justify-between p-2 rounded-lg cursor-pointer transition-colors ${
        isCurrent
          ? "bg-primary text-white"
          : "bg-cardBg text-textPrimary dark:bg-darkCardBg dark:text-darkTextPrimary"
      } hover:bg-highlight dark:hover:bg-darkHighlight`}
      onClick={onClick}
    >
      <div>
        <h3 className="text-md font-semibold">{title}</h3>
        <p className="text-sm">{artist}</p>
      </div>
      <p className="text-sm">
        {Math.floor(duration / 60)}:{duration % 60 < 10 ? `0${duration % 60}` : duration % 60}
      </p>
    </div>
  );
};

export default PlayListItem;
