import {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
  useReducer,
} from "react";
import { useTimeRemaningContext } from "./TimeRemaningContext";

export const GuessTheColorContext = createContext();

export function GuessTheColorProvider({ children }) {
  const [start, setStart] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [colorsHex, setColorsHex] = useState(["#FEEED8"]);
  const [correctColor, setCorrectColor] = useState();
  const [score, setScore] = useState(0);
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
              guessedColor: null,
              score: score,
            },
          ],
        };
      case "RESET":
        return [];
      default:
        return {
          ...state,
          items: [
            ...state.items,
            {
              correct: false,
              time: 0,
              colorCorrect: correctColor,
              guessedColor: null,
              score: score,
            },
          ],
        };
    }
  };
  //Cria um array e a primeira posição vai ser o SCORE e o HIGHSCORE vai ser a maior pontuação dessa lista
  // let arrHistoric = [];
  const [arrHistoric, setArrHistoric] = useReducer(gameHistoric, { items: [] });
  const validationSelect = (selectColor) => {
    const hit = correctColor == selectColor && time > 0;
    const wrong = selectColor && correctColor !== selectColor && time !== 31;

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
    generateRandomColorsArray();
  };
  const value = useMemo(
    () => ({
      generateRandomColorsArray,
      colorsHex,
      start,
      setStart,
      score,
      arrHistoric,
      setIsSelected,
      isSelected,
      validationSelect,
    }),
    [
      generateRandomColorsArray,
      colorsHex,
      start,
      setStart,
      arrHistoric,
      score,
      setIsSelected,
      isSelected,
      validationSelect,
    ]
  );
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
    if (start) {
      generateRandomColorsArray();
    }
    if (!start) {
      setScore(0);
    }
  }, [start]);

  /* 
  TODO: Em LATEST Ordenar o array em decrescente
  */
  return (
    <GuessTheColorContext.Provider value={value}>
      {children}
    </GuessTheColorContext.Provider>
  );
}

export const useGuessTheColorContext = () => useContext(GuessTheColorContext);
