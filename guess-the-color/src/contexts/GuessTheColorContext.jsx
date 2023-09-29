import {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
  useReducer,
} from "react";
import { useTimeRemaningContext } from "./TimeRemaningContext";
import { useCurrentLatestGameContext } from "./CurrentLatestGameContext";

export const GuessTheColorContext = createContext();

export function GuessTheColorProvider({ children }) {
  const [start, setStart] = useState(false);
  const [isSelected, setIsSelected] = useState("");
  const [restartButton, setRestart] = useState(false);
  const [resetData, setReset] = useState(false);
  const [correctColor, setCorrectColor] = useState();
  const [score, setScore] = useState(0);
  const [colorsHex, setColorsHex] = useState(["#FEEED8"]);

  const { time } = useTimeRemaningContext();

  const gameHistoric = (state, action) => {
    switch (action) {
      case "CORRECT":
        return {
          ...state,
          items: [
            ...state.items,
            {
              correct: true,
              time: time,
              colorCorrect: correctColor,
              guessedColor: null,
              score: score,
            },
          ],
        };
      case "INCORRECT":
        return {
          ...state,
          items: [
            ...state.items,
            {
              correct: false,
              time: time,
              colorCorrect: correctColor,
              guessedColor: isSelected,
              score: score,
            },
          ],
        };
      case "RESET":
        return { items: [] };
      default:
        return {
          ...state,
          items: [
            ...state.items,
            {
              correct: false,
              time: 0,
              colorCorrect: correctColor,
              guessedColor: isSelected,
              score: score,
            },
          ],
        };
    }
  };
  const initialValueLocalStorage = JSON.parse(
    window.localStorage.getItem("arrHistoric")
  );
  const validateInitialValue = initialValueLocalStorage
    ? initialValueLocalStorage
    : { items: [] };

  const [arrHistoric, setArrHistoric] = useReducer(
    gameHistoric,
    validateInitialValue
  );
  const valueGames = useCurrentLatestGameContext();
  const validationSelect = (selectColor) => {
    const hit = correctColor == selectColor && time > 0;
    const wrong = selectColor && correctColor !== selectColor && time !== 31;
    setIsSelected(selectColor);
    if (hit) {
      setScore(score + 5);
      setArrHistoric("CORRECT");
    } else if (wrong) {
      setScore(score - 1);
      setArrHistoric("INCORRECT");
    } else {
      setScore(score - 2);
      setArrHistoric();
    }
  };

  useEffect(() => {
    if (start && time == 0) {
      validationSelect();
    }
  }, [time]);

  function getRandomHexColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function generateRandomColorsArray() {
    const colorsArray = [];
    for (let i = 0; i < 3; i++) {
      colorsArray.push(getRandomHexColor());
    }
    setColorsHex(colorsArray);
    setCorrectColor(colorsArray[Math.floor(Math.random() * 3)]);
  }

  useEffect(() => {
    generateRandomColorsArray();
    valueGames.setArrGames(arrHistoric);
    window.localStorage.setItem("arrHistoric", JSON.stringify(arrHistoric));
  }, [arrHistoric]);

  useEffect(() => {
    if (start) {
      setScore(0);
      setReset(false)
      setArrHistoric("RESET");
      localStorage.removeItem("arrHistoric");
    }
    if (!start) {
      setScore(0);
    }
  }, [start]);

  const resetAllData = () => {
    setStart(false);
    localStorage.removeItem("arrHistoric");
    localStorage.removeItem("highScore");
    setArrHistoric("RESET");
    setReset(true)
  };
  const value = useMemo(
    () => ({
      generateRandomColorsArray,
      colorsHex,
      start,
      setStart,
      setRestart,
      restartButton,
      setScore,
      score,
      arrHistoric,
      setIsSelected,
      isSelected,
      resetAllData,
      resetData,
      validationSelect,
    }),
    [
      generateRandomColorsArray,
      colorsHex,
      start,
      setRestart,
      setScore,
      resetData,
      setStart,
      restartButton,
      resetAllData,
      arrHistoric,
      score,
      setIsSelected,
      isSelected,
      validationSelect,
    ]
  );
  return (
    <GuessTheColorContext.Provider value={value}>
      {children}
    </GuessTheColorContext.Provider>
  );
}

export const useGuessTheColorContext = () => useContext(GuessTheColorContext);
