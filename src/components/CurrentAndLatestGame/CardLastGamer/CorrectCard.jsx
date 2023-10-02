import { getContrastColor } from "../../../utils";
import CheckCircle from "../../../assets/icons/CheckCircle.svg";
import "./styles.css";
export function CorrectCard({ game }) {
  return (
    <>
      <div  className="container-card-last-game">
        <div
          className="correct-box"
          style={{
            backgroundColor: `${game.colorCorrect}`,
            color: `${getContrastColor(game.colorCorrect)}`,
            fontWeight: 600,
          }}
        >
          {game.colorCorrect}
        </div>
        <img className="check-icon" src={CheckCircle} alt="check-circle" />
        <div className="timer">{game.time}</div>
      </div>
    </>
  );
}
