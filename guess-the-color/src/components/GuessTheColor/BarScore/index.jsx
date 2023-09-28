import { useEffect, useState } from "react";
import "./styles.css";
import { RemaningTimes } from "./RemaningTimes";
import { HighScore } from "./HighScore";
import { Score } from "./Score";
import { RestartButton } from "./RestartButton";
export function BarScore() {
  /* 
  TODO: Quando der START, iniciar o contador REMANING
        quando o contador chegar em ZERO, volta para o 30
        e finaliza a rodada.
  */
  return (
    <>
      <div className="containerBarScore">
        <RemaningTimes />
        <div className="verticalSeparator"></div>
        <RestartButton />
        <div className="verticalSeparator"></div>
        <div className="containerHighScore">
          <HighScore />
          <hr class="solid"></hr>
          <Score />
        </div>
      </div>
    </>
  );
}
