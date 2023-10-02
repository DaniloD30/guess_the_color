import { describe, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { ResetAllData } from ".";
import { ContextsContainer } from "../../../contexts";

describe("Render ResetAllData", () => {
  it("Render ResetAllData", () => {
    const initialValue = {
      start: false,
      initialArrHistoric: { items: [] },
    };
    render(
      <ContextsContainer initialValue={initialValue}>
        <ResetAllData />
      </ContextsContainer>
    );
    const button = screen.getByRole("button");
    fireEvent.click(button);
  });
});
