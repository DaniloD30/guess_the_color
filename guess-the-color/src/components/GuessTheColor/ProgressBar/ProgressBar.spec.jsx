import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ProgressBar } from ".";

describe("Render ProgressBar", () => {
  it("Render progressBar with 10% percent", () => {
    render(<ProgressBar timeContext={10} />);
    const percent = screen.getByTestId("progress-container");
    expect(percent).toHaveStyle("width: 10%");
  });
});
