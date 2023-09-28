import "./styles.css";
export function BarScore() {
  return (
    <>
      <div className="containerBarScore">
        <div className="remaning">
          <div className="heading">REMANING</div>
          <div className="heading">TIMES (S)</div>
          <h2 className="heading">30</h2>
        </div>
        <div className="verticalSeparator"></div>
        <div className="restartButton">
          <div className="heading">RESTART</div>
        </div>
        <div className="verticalSeparator"></div>
        <div className="containerHighScore">
          <div className="row-containerHighScore">
            <div className="highscore-title">HIGH SCORE</div>
            <div className="value-highscore">13</div>
          </div>
          <hr class="solid"></hr>
          <div className="containerScore">
            <div className="value-score">SCORE</div>
            <div className="value-highscore">10</div>
          </div>
        </div>
      </div>
    </>
  );
}
