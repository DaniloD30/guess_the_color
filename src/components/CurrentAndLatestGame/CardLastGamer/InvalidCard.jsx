import { getContrastColor } from "../../../utils";
import InvalidCircle from "../../../assets/icons/InvalidCircle.svg";
import "./styles.css";
export function InvalidCard({ game }) {
  return (
    <>
      <div className="container-card-last-game">
        <div
          className="invalid-box"
          style={{
            backgroundColor: `${game.guessedColor}`,
            color: `${getContrastColor(game.guessedColor)}`,
            fontWeight: 600,
          }}
        >
          {game.guessedColor}
        </div>
        <div
          className="invalid-box"
          style={{
            backgroundColor: `${game.colorCorrect}`,
            color: `${getContrastColor(game.guessedColor)}`,
            fontWeight: 600,
          }}
        >
          {game.colorCorrect}
        </div>
        <img className="check-icon" src={InvalidCircle} alt="check-circle" />
        <div className="timer">{game.time}s</div>
      </div>
    </>
  );
}
