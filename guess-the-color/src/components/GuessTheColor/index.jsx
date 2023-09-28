import { BarScore } from "./BarScore";
import { SquareHex } from "./SquareHex";
import { ButtonsGame } from "./ButtonsGame";
import { ResetAllData } from "./ResetAllData";

export function GuessTheColor() {
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          backgroundColor: "white",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>Guess the color</h1>
        <BarScore />
        <SquareHex />
        <ButtonsGame />
        <ResetAllData />
      </div>
    </>
  );
}
