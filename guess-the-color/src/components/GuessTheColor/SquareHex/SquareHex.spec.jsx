import { describe, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { SquareHex } from ".";
import { GuessTheColorProvider } from "../../../contexts/GuessTheColorContext";
import { TimeRemaningProvider } from "../../../contexts/TimeRemaningContext";
import { CurrentLatestGameProvider } from "../../../contexts/CurrentLatestGameContext";

describe("Render SquareHex", () => {
  it("Render SquareHex", () => {
    render(
      <TimeRemaningProvider>
        <CurrentLatestGameProvider>
          <GuessTheColorProvider
            initialValue={{
              start: false,
            }}
          >
            <SquareHex />
          </GuessTheColorProvider>
        </CurrentLatestGameProvider>
      </TimeRemaningProvider>
    );
    const squarehexContainer = screen.getByTestId("squarehex-container");
    expect(squarehexContainer).toHaveStyle("height: 350px");

    const buttonStart = screen.getByRole("button");
    fireEvent.click(buttonStart);
  });
});
