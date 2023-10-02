import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ButtonsGame } from ".";
import { ContextsContainer } from "../../../contexts";

describe("Render ButtonsGame", () => {
  it("Render ButtonsGame with context start true", () => {
    const initialValue = {
      start: true,
      initialArrHistoric: { items: [] },
    };
    render(
      <ContextsContainer initialValue={initialValue}>
        <ButtonsGame />
      </ContextsContainer>
    );
    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBe(3);
  });
});
