import { render } from "@testing-library/react";
import PlayListItem from "../components/PlayListItem";
import { describe, it, expect } from "vitest";

describe("PlayListItem Component", () => {
  it("matches snapshot when song is selected", () => {
    const { container } = render(
      <PlayListItem title="Test Song" artist="Test Artist" duration={240} isCurrent={true} onClick={() => {}} />
    );
    expect(container).toMatchSnapshot();
  });

  it("matches snapshot when song is not selected", () => {
    const { container } = render(
      <PlayListItem title="Test Song" artist="Test Artist" duration={240} isCurrent={false} onClick={() => {}} />
    );
    expect(container).toMatchSnapshot();
  });
});
