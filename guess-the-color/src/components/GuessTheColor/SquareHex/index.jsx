import { useGuessTheColorContext } from "../../../contexts/GuessTheColorContext";
import "./styles.css";
export function SquareHex() {
  const { setStart, start } = useGuessTheColorContext();
  return (
    <>
      {/* 
              GUESS THE COLOR
              */}

      <div style={{ width: "60%" }}>
        <div
          style={{
            height: "350px",
            backgroundColor: "red",
          }}
        >
          .
          {!start ? (
            <div className="containerButton">
              <button className="buttonStart" onClick={() => setStart(true)}>
                START
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
