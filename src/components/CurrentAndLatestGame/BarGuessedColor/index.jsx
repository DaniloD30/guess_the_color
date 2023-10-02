import "./styles.css";
export function BarGuessedColor() {
  return (
    <>
      <div className="containerBarGuessedColor">
        <div className="columnBarGuessedColor">
          <div>Guessed</div>
          <div>color</div>
        </div>
        <div className="separatorBarGuessedColor"></div>
        <div className="columnBarGuessedColor">
          <div>Correct</div> <div>color</div>
        </div>
        <div className="separatorBarGuessedColor"></div>
        <div className="columnBarGuessedColor"> Score</div>
      </div>
    </>
  );
}


