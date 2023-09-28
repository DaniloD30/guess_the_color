import { useEffect, useState } from "react";
import "../styles.css";
import { useGuessTheColorContext } from "../../../../contexts/GuessTheColorContext";
export function RemaningTimes() {
  const [time, setTime] = useState(30);
  const { timeContext, setTimeContext, start, setStart } =
    useGuessTheColorContext();
  if (start) {
    let timeoutID = setTimeout(() => {
      setTime(time - 1);
      setTimeContext(timeContext - 3.33);
    }, 1000);

    if (time == 0) {
      clearTimeout(timeoutID);
      setTime(31);
      setStart(false);
      setTimeContext(100);
    }
  }

  useEffect(() => {
    if (time == 30) {
      setTimeContext(100);
    }
  }, [time]);

  /* 
  TODO: Quando der START, iniciar o contador REMANING
        quando o contador chegar em ZERO, volta para o 30
        e finaliza a rodada.
  */
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
