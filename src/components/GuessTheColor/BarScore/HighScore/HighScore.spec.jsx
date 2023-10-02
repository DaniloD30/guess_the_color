import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { HighScore } from ".";
import { ContextsContainer } from "../../../../contexts";

describe("Render HighScore", () => {
  it("Render HighScore and name", () => {
    const initial = {
      items: [
        {
          correct: true,
          time: 10,
          colorCorrect: "#FEEED8",
          guessedColor: null,
          score: 10,
        },
      ],
    };
    render(
      <ContextsContainer initialValue={initial}>
        <HighScore />
      </ContextsContainer>
    );
    const value = screen.getByText(/0/i);
    const text = screen.getByText(/high score/i);
    const textName = screen.getByText(/name/i);
    expect(text).toBeInTheDocument();
    expect(value).toBeInTheDocument();
    expect(textName).toBeInTheDocument();
  });
});
