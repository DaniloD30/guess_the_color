import { useEffect } from "react";
import { useGuessTheColorContext } from "../../../contexts/GuessTheColorContext";
import "./styles.css";
export function ButtonsGame() {
  // const { colorsHex, start,  validationSelect } =
  //   useGuessTheColorContext();

  const  value  = useGuessTheColorContext();
  // const correctColor = colorsHex[Math.floor(Math.random() * 3)];

  const handleClick = (selected) => {
    value.validationSelect(selected);
  };

  return (
    <>
      <div className="containerButtonsGame">
        {value.start &&
          value.colorsHex.map((hex, index) => (
            <button
              key={`${hex}-${index}`}
              className="buttonGame"
              onClick={() => handleClick(hex)}
            >
              {hex}
            </button>
          ))}
      </div>
    </>
  );
}
