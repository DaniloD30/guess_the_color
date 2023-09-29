import { useCurrentLatestGameContext } from "../../../contexts/CurrentLatestGameContext";

import "./styles.css";
export function CardLastGamer() {
  const value = useCurrentLatestGameContext();
  const reverseArrGame = [...value.arrGames.items].reverse();
  /* 
  TODO: 
  // A cada vez que uma partida é iniciada, 
  essa pilha é resetada. (representada no protótipo por 
    
  ]

    pilha em localStorage
  */

  return (
    <>
      {reverseArrGame.map((game, index) =>
        game.correct ? (
          <div key={`${game.time}-${index}`} className="container-card-last-game">
            <div
              className="correct-box"
              style={{
                backgroundColor: `${game.colorCorrect}`,
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
          <div key={`${game.time}-${index}`} className="container-card-last-game">
            <div
              className="invalid-box"
              style={{
                backgroundColor: `${game.guessedColor}`,
              }}
            >
              {game.guessedColor}
            </div>
            <div
              className="invalid-box"
              style={{
                backgroundColor: `${game.colorCorrect}`,
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
