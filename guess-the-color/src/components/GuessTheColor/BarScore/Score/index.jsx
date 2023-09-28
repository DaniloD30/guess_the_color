import {  useState } from "react";
import "../styles.css";
import { useGuessTheColorContext } from "../../../../contexts/GuessTheColorContext";
export function Score() {
  const value  = useGuessTheColorContext();
  /* 
  TODO: Quando finalizar a rodada, pegar o somatorio
        E mostrar aqui.

        Lógica caso erre, caso acerte, caso erre por causa do tempo
  */
  return (
    <>
      <div className="containerScore">
        <div className="value-score">SCORE</div>
        <div className="value-highscore">{value.score}</div>
      </div>
    </>
  );
}
