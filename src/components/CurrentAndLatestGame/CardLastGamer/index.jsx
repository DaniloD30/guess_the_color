import { useCurrentLatestGameContext } from "../../../contexts/CurrentLatestGameContext";
import { getContrastColor } from "../../../utils";
import CheckCircle from '../../../assets/icons/CheckCircle.png'
import InvalidCircle from '../../../assets/icons/InvalidCircle.png'
import "./styles.css";
export function CardLastGamer() {
  const value = useCurrentLatestGameContext();
  const reverseArrGame = [...value.arrGames.items].reverse();

  return (
    <>
      {reverseArrGame.map((game, index) =>
        game.correct ? (
          <div
            key={`${game.time}-${index}`}
            className="container-card-last-game"
          >
            <div
              className="correct-box"
              style={{
                backgroundColor: `${game.colorCorrect}`,
                color: `${getContrastColor(game.colorCorrect)}`,
                fontWeight: 600
              }}
            >
              {game.colorCorrect}
            </div>
            <img
              className="check-icon"
              src={CheckCircle}
              alt="check-circle"
            />
            <div className="timer">{game.time}</div>
          </div>
        ) : (
          <div
            key={`${game.time}-${index}`}
            className="container-card-last-game"
          >
            <div
              className="invalid-box"
              style={{
                backgroundColor: `${game.guessedColor}`,
                color: `${getContrastColor(game.guessedColor)}`,
                fontWeight: 600
              }}
            >
              {game.guessedColor}
            </div>
            <div
              className="invalid-box"
              style={{
                backgroundColor: `${game.colorCorrect}`,
                color: `${getContrastColor(game.guessedColor)}`,
                fontWeight: 600
              }}
            >
              {game.colorCorrect}
            </div>
            <img
              className="check-icon"
              src={InvalidCircle}
              alt="check-circle"
            />
            <div className="timer">{game.time}s</div>
          </div>
        )
      )}
    </>
  );
}
