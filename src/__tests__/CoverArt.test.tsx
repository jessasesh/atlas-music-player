import { render } from "@testing-library/react";
import CoverArt from "../components/CoverArt";
import { describe, it, expect } from "vitest";

const mockSong = {
  id: "1234",
  title: "Test Song",
  artist: "Test Artist",
  cover: "/test-cover.jpg",
  song: "/test-song.mp3",
  duration: 240,
};

describe("CoverArt Component", () => {
  it("matches snapshot with a song", () => {
    const { container } = render(<CoverArt song={mockSong} />);
    expect(container).toMatchSnapshot();
  });

  it("matches snapshot without a song", () => {
    const { container } = render(<CoverArt song={null} />);
    expect(container).toMatchSnapshot();
  });
});
