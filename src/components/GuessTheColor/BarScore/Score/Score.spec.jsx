import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Score } from ".";
import { ContextsContainer } from "../../../../contexts";

describe("Render Score", () => {
  it("Render Score", () => {
    const initial = {
      start: false,
      initialArrHistoric: { items: [] },
    };

    render(
      <ContextsContainer initialValue={initial}>
        <Score />
      </ContextsContainer>
    );
    const score = screen.getByText(/score:/i);
    const valueScore = screen.getByText(/0/i);
    expect(score).toBeInTheDocument();
    expect(valueScore).toBeInTheDocument();
  });
});
