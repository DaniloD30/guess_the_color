import { useEffect, useState } from "react";
import "../styles.css";
export function RemaningTimes() {
  const [time, setTime] = useState(30);

  let timeoutID = setTimeout(() => {
    setTime(time - 1);
  }, 1000);

  useEffect(() => {
    if (time == 0) {
      clearTimeout(timeoutID);
      setTime(30);
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
        <h2 className="heading">{time}</h2>
      </div>
    </>
  );
}
