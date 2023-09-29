import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ButtonsGame } from ".";
import { GuessTheColorProvider } from "../../../contexts/GuessTheColorContext";
import { TimeRemaningProvider } from "../../../contexts/TimeRemaningContext";
import { CurrentLatestGameProvider } from "../../../contexts/CurrentLatestGameContext";

describe("Render ButtonsGame", () => {
  it("Render ButtonsGame with context start true", () => {
    render(
      <TimeRemaningProvider>
        <CurrentLatestGameProvider>
          <GuessTheColorProvider
            initialValue={{
              start: true,
            }}
          >
            <ButtonsGame />
          </GuessTheColorProvider>
        </CurrentLatestGameProvider>
      </TimeRemaningProvider>
    );
    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBe(3);
  });
});
