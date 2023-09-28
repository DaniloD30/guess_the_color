import {  useState } from "react";
import "../styles.css";
export function Score() {
  const [score, setScore] = useState(0);

  /* 
  TODO: Quando finalizar a rodada, pegar o somatorio
        E mostrar aqui.

        Lógica caso erre, caso acerte, caso erre por causa do tempo
  */
  return (
    <>
      <div className="containerScore">
        <div className="value-score">SCORE</div>
        <div className="value-highscore">{score}</div>
      </div>
    </>
  );
}
