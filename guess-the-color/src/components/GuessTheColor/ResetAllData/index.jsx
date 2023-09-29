import { useGuessTheColorContext } from "../../../contexts/GuessTheColorContext";
import "./styles.css";
export function ResetAllData() {
  const value = useGuessTheColorContext();
  return (
    <>
      <div className="containerResetAllData">
        <button
          className="buttonResetAllData"
          onClick={() => value.resetAllData()}
        >
          Reset All Data
        </button>
      </div>
    </>
  );
}
