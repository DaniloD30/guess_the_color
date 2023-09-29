import "./styles.css";
import { RemaningTimes } from "./RemaningTimes";
import { HighScore } from "./HighScore";
import { Score } from "./Score";
import { RestartButton } from "./RestartButton";
import { ProgressBar } from "../ProgressBar";
import { useState } from "react";
export function BarScore() {
  const [timeContext, setTimeContext] = useState(100);

  const handleChangeTimeContext = (value) => {
    setTimeContext(value);
  };
  
  return (
    <>
      <div className="containerBarScore">
        <RemaningTimes
          timeContext={timeContext}
          setTimeContext={handleChangeTimeContext}
        />
        <div className="verticalSeparator"></div>
        <RestartButton />
        <div className="verticalSeparator"></div>
        <div className="containerHighScore">
          <HighScore />
          <hr class="solid"></hr>
          <Score />
        </div>
      </div>
      <ProgressBar timeContext={timeContext} />
    </>
  );
}
