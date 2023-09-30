import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { HighScore } from ".";
import { GuessTheColorProvider } from "../../../../contexts/GuessTheColorContext";
import { CurrentLatestGameProvider } from "../../../../contexts/CurrentLatestGameContext";
import { TimeRemaningProvider } from "../../../../contexts/TimeRemaningContext";

describe("Render HighScore", () => {
  it("Render HighScore", () => {
    render(
      <TimeRemaningProvider>
        <CurrentLatestGameProvider>
          <GuessTheColorProvider
            initialValue={{
              start: false,
              initialArrHistoric: {
                items: [
                  {
                    correct: true,
                    time: 10,
                    colorCorrect: "#FEEED8",
                    guessedColor: null,
                    score: 10,
                  },
                ],
              },
            }}
          >
            <HighScore />
          </GuessTheColorProvider>
        </CurrentLatestGameProvider>
      </TimeRemaningProvider>
    );

    const value = screen.getByText(/0/i);
    const text = screen.getByText(/high score/i);
    expect(text).toBeInTheDocument();
    expect(value).toBeInTheDocument();
  });
});
