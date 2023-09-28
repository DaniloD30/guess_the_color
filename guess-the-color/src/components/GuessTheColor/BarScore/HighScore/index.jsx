import { useState } from "react";
import "../styles.css";
export function HighScore() {
  const [highScore, setHighScore] = useState(0);

  /* 
  TODO: Quando finalizar a rodada, verificar se a pontuação
        foi maior que a ultima, e guardar o maior valor

        lógica do highScore? Salvar os scores em um array?
        esse mesmo array dos ultimos jogos?
  */
  return (
    <>
      <div className="row-containerHighScore">
        <div className="highscore-title">HIGH SCORE</div>
        <div className="value-highscore">{highScore}</div>
      </div>
    </>
  );
}
