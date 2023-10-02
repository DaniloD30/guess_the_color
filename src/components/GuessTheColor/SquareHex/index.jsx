import { useEffect, useState } from "react";
import { useGuessTheColorContext } from "../../../contexts/GuessTheColorContext";
import "./styles.css";
import { getContrastColor } from "../../../utils";
export function SquareHex() {
  const value = useGuessTheColorContext();
  const initialValue = {
    name: "",
    difficulty: 0,
  };
  const [objDate, setObjDate] = useState(initialValue);

  useEffect(() => {
    if (value.start) {
      setObjDate(initialValue);
    }
  }, [value.start]);

  return (
    <>
      <div style={{ width: "60%" }}>
        <div
          data-testid="squarehex-container"
          style={{
            height: "350px",
            backgroundColor: `${value.correctColor}`,
          }}
        >
          .
          {!value.start ? (
            <div className="containerButton">
              <div className="input-block">
                <input
                  className="buttonName"
                  maxLength={255}
                  required
                  placeholder="Enter your name*"
                  onChange={(e) =>
                    setObjDate({ ...objDate, name: e.target.value })
                  }
                />
              </div>
              <div className="input-block">
                <label
                  style={{
                    color: `${getContrastColor(value.colorsHex[0])}`,
                    fontWeight: 600,
                  }}
                >
                  Choose the difficulty:
                </label>
                <select
                  className="buttonSelect"
                  value={objDate.difficulty}
                  onChange={(e) =>
                    setObjDate({ ...objDate, difficulty: e.target.value })
                  }
                >
                  <option value={0}>Easy</option>
                  <option value={1}>Medium</option>
                  <option value={2}>Hard</option>
                </select>
              </div>
              <button
                className="buttonStart"
                disabled={objDate.name.trim() === "" || objDate.name === ""}
                onClick={() => value.handleStart(objDate)}
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
