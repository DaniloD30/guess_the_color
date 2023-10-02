import { useGuessTheColorContext } from "../../../contexts/GuessTheColorContext";
import "./styles.css";
export function ButtonsGame() {
  const value = useGuessTheColorContext();

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
