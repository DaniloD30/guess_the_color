import { useGuessTheColorContext } from "../../../contexts/GuessTheColorContext";
import "./styles.css";
export function SquareHex() {
  // const { setStart, start, colorsHex } = useGuessTheColorContext();
  const  value  = useGuessTheColorContext();
  return (
    <>
      <div style={{ width: "60%" }}>
        <div
          style={{
            height: "350px",
            backgroundColor: `${value.colorsHex[0]}`,
          }}
        >
          .
          {!value.start ? (
            <div className="containerButton">
              <button
                className="buttonStart"
                onClick={() => value.setStart(true)}
              >
                START
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
