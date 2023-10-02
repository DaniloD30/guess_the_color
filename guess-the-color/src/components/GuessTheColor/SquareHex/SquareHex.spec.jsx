import { describe, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { SquareHex } from ".";
import { ContextsContainer } from "../../../contexts";

describe("Render SquareHex", () => {
  it("Render SquareHex", () => {
    const initialValue = {
      start: false,
      initialArrHistoric: { items: [] },
    };
    render(
      <ContextsContainer initialValue={initialValue}>
        <SquareHex />
      </ContextsContainer>
    );
    const squarehexContainer = screen.getByTestId("squarehex-container");
    expect(squarehexContainer).toHaveStyle("height: 350px");

    const buttonStart = screen.getByRole("button");
    fireEvent.click(buttonStart);
  });
});
