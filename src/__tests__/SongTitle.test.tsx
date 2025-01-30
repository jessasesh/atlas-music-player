import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import SongTitle from "../components/SongTitle";

type Song = {
  id: string;
  title: string;
  artist: string;
  cover: string;
  song: string;
  duration: number;
};

describe("SongTitle Component", () => {
  it("matches the snapshot with song data", () => {
    const song: Song = {
      id: "1",
      title: "Painted in Blue",
      artist: "Soul Canvas",
      cover: "/sample-cover.jpg",
      song: "/sample-song.mp3",
      duration: 200,
    };

    const { container } = render(<SongTitle song={song} />);
    expect(container).toMatchSnapshot();
  });

  it("matches the snapshot when song data is missing", () => {
    const { container } = render(<SongTitle song={null} />);
    expect(container).toMatchSnapshot();
  });
});
