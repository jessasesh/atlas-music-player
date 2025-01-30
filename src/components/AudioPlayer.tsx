import { useEffect, useRef } from "react";

type AudioPlayerProps = {
  songUrl: string;
  isPlaying: boolean;
  setIsPlaying: (value: boolean) => void;
  volume: number;
  playbackSpeed: number;
  onSongEnd: () => void;
};

const AudioPlayer = ({ songUrl, isPlaying, setIsPlaying, volume, playbackSpeed, onSongEnd }: AudioPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play().catch(() => setIsPlaying(false));
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, songUrl]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = playbackSpeed;
    }
  }, [playbackSpeed]);

  return (
    <audio
      ref={audioRef}
      src={songUrl}
      onEnded={onSongEnd}
    />
  );
};

export default AudioPlayer;
