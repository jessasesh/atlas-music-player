import speakerIcon from "/images/speaker.svg";

type VolumeControlsProps = {
  volume: number;
  setVolume: (value: number) => void;
};

const VolumeControls = ({ volume, setVolume }: VolumeControlsProps) => {
  return (
    <div className="m-4 flex items-center">
      <img src={speakerIcon} alt="Speaker Icon" className="dark:brightness-0 dark:invert w-6 h-6 mr-2" />
      <input
        type="range"
        min="0"
        max="1"
        step="0.1"
        value={volume}
        onChange={(e) => setVolume(parseFloat(e.target.value))}
        className="w-full cursor-pointer"
      />
    </div>
  );
};

export default VolumeControls;
