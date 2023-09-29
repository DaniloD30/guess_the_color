import { useCurrentLatestGameContext } from "../../../contexts/CurrentLatestGameContext";

import "./styles.css";
export function CardLastGamer() {
  const value = useCurrentLatestGameContext();
  const reverseArrGame = [...value.arrGames.items].reverse();

  function getContrastColor(backgroundColor) {
    if (backgroundColor) {
      const r = parseInt(backgroundColor.slice(1, 3), 16);
      const g = parseInt(backgroundColor.slice(3, 5), 16);
      const b = parseInt(backgroundColor.slice(5, 7), 16);
      const brightness = (r * 299 + g * 587 + b * 114) / 1000;
      return brightness > 128 ? "#000000" : "#ffffff";
    }
    return "#ffffff";
  }
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
              src="public/images/icons/CheckCircle.svg"
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
              src="public/images/icons/InvalidCircle.svg"
              alt="check-circle"
            />
            <div className="timer">{game.time}</div>
          </div>
        )
      )}
    </>
  );
}
