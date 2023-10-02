import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BarGuessedColor } from ".";
import { ContextsContainer } from "../../../contexts";

describe("Render BarGuessedColor", () => {
  it("Render BarGuessedColor", () => {
    const initial = {
      start: false,
      initialArrHistoric: { items: [] },
    };

    render(
      <ContextsContainer initialValue={initial}>
        <BarGuessedColor />
      </ContextsContainer>
    );
    const textGuessed = screen.getByText(/guessed/i);
    const colorText = screen.getAllByText(/color/i);
    const correct = screen.getByText(/correct/i);
    const score = screen.getByText(/score/i);

    expect(textGuessed).toBeInTheDocument();
    expect(colorText).toHaveLength(2);
    expect(correct).toBeInTheDocument();
    expect(score).toBeInTheDocument();
  });
});
