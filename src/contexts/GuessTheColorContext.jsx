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

export function GuessTheColorProvider({
  initialValue,
  initialArrHistoric,
  children,
}) {
  const [start, setStart] = useState(initialValue.start);
  const [isSelected, setIsSelected] = useState("");
  const [restartButton, setRestart] = useState(false);
  const [resetData, setReset] = useState(false);
  const [correctColor, setCorrectColor] = useState("#FEEED8");
  const [score, setScore] = useState(0);
  const [colorsHex, setColorsHex] = useState(["#FEEED8"]);
  const [objDate, setObjDate] = useState({
    name: window.localStorage.getItem("name"),
    difficulty: 0,
  });
  const { time } = useTimeRemaningContext();
  const valueGames = useCurrentLatestGameContext();

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
  const haveHistoric = window.localStorage.getItem("arrHistoric");
  const initialValueLocalStorage = JSON.parse(
    haveHistoric ? haveHistoric : '{"items": []}'
  );
  const validateInitialValue = initialValueLocalStorage
    ? initialValueLocalStorage
    : initialArrHistoric;
  const [arrHistoric, setArrHistoric] = useReducer(
    gameHistoric,
    validateInitialValue
  );

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

  const resetAllData = () => {
    setStart(false);
    localStorage.removeItem("arrHistoric");
    localStorage.removeItem("highScore");
    localStorage.removeItem("name");
    setObjDate({
      name: "",
      difficulty: 0,
    });
    setArrHistoric("RESET");
    setReset(true);
  };

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
    const countDificculty =
      objDate.difficulty == 0 ? 3 : objDate.difficulty == 1 ? 4 : 5;
    for (let i = 0; i < countDificculty; i++) {
      colorsArray.push(getRandomHexColor());
    }
    setColorsHex(colorsArray);
    setCorrectColor(colorsArray[Math.floor(Math.random() * countDificculty)]);
  }

  function handleStart(objName) {
    setStart(true);
    setObjDate(objName);
    window.localStorage.setItem("name", objName.name);
  }

  useEffect(() => {
    generateRandomColorsArray();
    valueGames.setArrGames(arrHistoric);
    window.localStorage.setItem("arrHistoric", JSON.stringify(arrHistoric));
  }, [arrHistoric]);

  useEffect(() => {
    if (start) {
      setScore(0);
      setReset(false);
      setArrHistoric("RESET");
      localStorage.removeItem("arrHistoric");
    }
    if (!start) {
      setScore(0);
    }
  }, [start]);

  useEffect(() => {
    if (start && time == 31) {
      validationSelect();
    }
  }, [time]);

  const value = useMemo(
    () => ({
      generateRandomColorsArray,
      colorsHex,
      start,
      setStart,
      setRestart,
      handleStart,
      restartButton,
      setScore,
      score,
      objDate,
      arrHistoric,
      correctColor,
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
      handleStart,
      correctColor,
      setScore,
      objDate,
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
