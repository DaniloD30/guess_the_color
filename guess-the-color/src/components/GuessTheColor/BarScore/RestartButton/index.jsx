import { useGuessTheColorContext } from "../../../../contexts/GuessTheColorContext";
import "../styles.css";
export function RestartButton() {
  const value = useGuessTheColorContext();
  return (
    <>
      <button
        className="restartButton"
        disabled={!value.start}
        onClick={() => value.setRestart(true)}
      >
        <div className="heading">RESTART</div>
      </button>
    </>
  );
}
