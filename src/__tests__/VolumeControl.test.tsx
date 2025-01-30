import { render } from "@testing-library/react";
import VolumeControls from "../components/VolumeControls";
import { describe, it, expect } from "vitest";

describe("VolumeControls Component", () => {
  it("matches snapshot at 50% volume", () => {
    const { container } = render(<VolumeControls volume={0.5} setVolume={() => {}} />);
    expect(container).toMatchSnapshot();
  });

  it("matches snapshot at 100% volume", () => {
    const { container } = render(<VolumeControls volume={1} setVolume={() => {}} />);
    expect(container).toMatchSnapshot();
  });

  it("matches snapshot at 0% volume", () => {
    const { container } = render(<VolumeControls volume={0} setVolume={() => {}} />);
    expect(container).toMatchSnapshot();
  });
});
