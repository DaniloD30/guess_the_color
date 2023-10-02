import { BarScore } from "./BarScore";
import { SquareHex } from "./SquareHex";
import { ButtonsGame } from "./ButtonsGame";
import { ResetAllData } from "./ResetAllData";

export function GuessTheColor() {
  /* 
  Sempre com o pensamento de dividir para conquistar
  Separei e modularizei nos componentes abaixo o core do GAME.
  Foi muito interessante eu ter trabalhado dessa forma,
  facilitou muito os testes únitarios
  */

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
