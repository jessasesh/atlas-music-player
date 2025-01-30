import { useState, useEffect } from "react";

type Song = {
  id: string;
  title: string;
  artist: string;
  cover: string;
  song: string;
  duration: number;
  lyrics?: string;
};

type CoverArtProps = {
  song: Song | null;
};


const CoverArt = ({ song }: CoverArtProps) => {
  const [lyrics, setLyrics] = useState<string | null>(null);
  const [showLyrics, setShowLyrics] = useState<boolean>(false);

  useEffect(() => {
    if (!song) return;

    const fetchLyrics = async () => {
      try {
        const response = await fetch(`api/v1/lyrics/${song.id}`);
        if (response.ok) {
          const data = await response.json();
          setLyrics(data.lyrics);
        } else {
          setLyrics(null);
        }
      } catch {
        setLyrics(null);
      }
    };

    fetchLyrics();
  }, [song]);

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setShowLyrics(true)}
      onMouseLeave={() => setShowLyrics(false)}
    >
      <img
        src={song?.cover || "/images/default-cover.png"}
        alt={song?.title || "No Cover Art"}
        className="rounded-lg w-full h-auto"
      />

      {showLyrics && lyrics && (
        <div className="absolute inset-0 bg-black bg-opacity-75 text-white flex items-center justify-center p-4 rounded-lg text-sm">
          <p className="text-center">{lyrics}</p>
        </div>
      )}
    </div>
  );
};

export default CoverArt;
