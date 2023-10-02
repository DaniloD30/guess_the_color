import { describe, it, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { RestartButton } from ".";
import { ContextsContainer } from "../../../../contexts";

describe("Render RestartButton", () => {
  it("Render RestartButton when play game", () => {
    const initial = {
      start: true,
      initialArrHistoric: { items: [] },
    };

    render(
      <ContextsContainer initialValue={initial}>
        <RestartButton />
      </ContextsContainer>
    );
    const button = screen.getByRole("button", {
      name: /restart/i,
    });
    fireEvent.click(button);
  });
  it("Render RestartButton disabled", () => {
    const initial = {
      start: false,
      initialArrHistoric: { items: [] },
    };

    render(
      <ContextsContainer initialValue={initial}>
        <RestartButton />
      </ContextsContainer>
    );
    const button = screen.getByRole("button", {
      name: /restart/i,
    });
    expect(button).toBeDisabled()
  });
});
