import { useEffect, useState } from "react";
import "../styles.css";
import { useGuessTheColorContext } from "../../../../contexts/GuessTheColorContext";
export function HighScore() {
  const value = useGuessTheColorContext();
  const [highScore, setHighScore] = useState(0);

   /* 
  TODO: highScore em localStorage
  */
  useEffect(() => {
    if (!value.start && value.arrHistoric.items.length > 0) {
      let high = [...value.arrHistoric.items];
      setHighScore(high.sort((a, b) => b.score - a.score)[0].score);
    }
  }, [value.start]);

  return (
    <>
      <div className="row-containerHighScore">
        <div className="highscore-title">HIGH SCORE</div>
        <div className="value-highscore">{highScore}</div>
      </div>
    </>
  );
}
