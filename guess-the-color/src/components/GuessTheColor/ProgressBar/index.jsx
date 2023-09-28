import "./styles.css";
import { useGuessTheColorContext } from "../../../contexts/GuessTheColorContext";
export function ProgressBar() {
  const { timeContext } = useGuessTheColorContext();

  return (
    <>
      <div className="containerProgress">
        <div
          style={{
            width: `${timeContext}%`,
            height: "15px",
            backgroundColor: "#8290A3",
          }}
        ></div>
      </div>
    </>
  );
}
