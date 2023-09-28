import "./styles.css";
import { useTimeRemaningContext } from "../../../contexts/TimeRemaningContext";
export function ProgressBar({ timeContext }) {
  // const { timeContext } = useTimeRemaningContext();
  return (
    <>
      <div className="containerProgress">
        <div
          style={{
            width: `${timeContext}%`,
            height: "15px",
            backgroundColor: "#8290A3",
          }}
        ></div>
      </div>
    </>
  );
}
