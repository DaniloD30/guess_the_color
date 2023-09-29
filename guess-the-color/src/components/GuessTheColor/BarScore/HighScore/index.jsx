import { useEffect, useState } from "react";
import "../styles.css";
import { useGuessTheColorContext } from "../../../../contexts/GuessTheColorContext";
export function HighScore() {
  const value = useGuessTheColorContext();
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    if (!value.start && value.arrHistoric.items.length > 0) {
      let high = [...value.arrHistoric.items];
      let isBigger =
        high.sort((a, b) => b.score - a.score)[0].score >
        window.localStorage.getItem("highScore")
          ? high.sort((a, b) => b.score - a.score)[0].score
          : window.localStorage.getItem("highScore");
      setHighScore(isBigger);
      window.localStorage.setItem("highScore", isBigger);
    }
  }, [value.start]);

  useEffect(() => {
    if (value.resetData) {
      setHighScore(0);
    }
  }, [value.resetData]);
  return (
    <>
      <div className="row-containerHighScore">
        <div className="highscore-title">HIGH SCORE</div>
        <div className="value-highscore">{highScore}</div>
      </div>
    </>
  );
}
