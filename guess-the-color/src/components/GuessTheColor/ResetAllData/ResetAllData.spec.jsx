import { describe, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { ResetAllData } from ".";
import { GuessTheColorProvider } from "../../../contexts/GuessTheColorContext";
import { TimeRemaningProvider } from "../../../contexts/TimeRemaningContext";
import { CurrentLatestGameProvider } from "../../../contexts/CurrentLatestGameContext";

describe("Render ResetAllData", () => {
  it("Render ResetAllData", () => {
    render(
      <TimeRemaningProvider>
        <CurrentLatestGameProvider>
          <GuessTheColorProvider
            initialValue={{
              start: false,
              initialArrHistoric: { items: [] }
            }}
          >
            <ResetAllData />
          </GuessTheColorProvider>
        </CurrentLatestGameProvider>
      </TimeRemaningProvider>
    );
    const button = screen.getByRole("button");
    fireEvent.click(button);
  });
});
