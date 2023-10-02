import "../styles.css";
import { useGuessTheColorContext } from "../../../../contexts/GuessTheColorContext";
export function Score() {
  const value = useGuessTheColorContext();

  return (
    <>
      <div className="containerScore">
        <div className="value-score">SCORE:</div>
        <div className="value-highscore">{value.score}</div>
      </div>
    </>
  );
}
