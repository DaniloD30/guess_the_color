import { useEffect, useState } from "react";
import "../styles.css";
import { useGuessTheColorContext } from "../../../../contexts/GuessTheColorContext";
import { useTimeRemaningContext } from "../../../../contexts/TimeRemaningContext";
export function RemaningTimes({ timeContext, setTimeContext }) {
  const value = useGuessTheColorContext();

  const { time, setTime } = useTimeRemaningContext();

  if (value.start) {
    let timeoutID = setTimeout(() => {
      if (value.restartButton) {
        setTime(31);
        setTimeContext(100);
        value.setRestart(false);
        value.setScore(0);
      } else {
        setTimeContext(timeContext - 3.33);
        setTime(time - 1);
      }
    }, 1000);

    if (time == 0) {
      clearTimeout(timeoutID);
      setTime(31);
      value.setStart(false);
      setTimeContext(100);
    }
  }

  useEffect(() => {
    if (time == 30) {
      setTimeContext(100);
    }
    if (time == 0) {
      setTime(31);
      setTimeContext(100);
    }
  }, [time]);

 
  return (
    <>
      <div className="remaning">
        <div className="heading">REMANING</div>
        <div className="heading">TIMES (S)</div>
        <h2 className="heading">{time == 31 ? 30 : time}</h2>
      </div>
    </>
  );
}
