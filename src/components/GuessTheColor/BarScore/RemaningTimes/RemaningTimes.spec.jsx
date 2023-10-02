import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { RemaningTimes } from ".";
import { ContextsContainer } from "../../../../contexts";

describe("Render RemaningTimes", () => {
  it("Render RemaningTimes when play game", () => {
    const initial = {
      start: true,
      initialArrHistoric: { items: [] },
    };
    const fn = vi.fn()
    render(
      <ContextsContainer initialValue={initial}>
        <RemaningTimes  timeContext={30} setTimeContext={fn}/>
      </ContextsContainer>
    );
    const textRemaning = screen.getByText(/remaning/i)
    const times = screen.getByText(/times \(s\)/i)
    const heading = screen.getByRole('heading', {
      name: /30/i
    })
    expect(textRemaning).toBeInTheDocument();
    expect(times).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
  });
});
