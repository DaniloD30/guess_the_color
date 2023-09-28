import { createContext, useContext, useEffect, useState, useMemo } from "react";
import { useTimeRemaningContext } from "./TimeRemaningContext";

export const GuessTheColorContext = createContext();

export function GuessTheColorProvider({ children }) {
  const [start, setStart] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [colorsHex, setColorsHex] = useState(["#FEEED8"]);
  const [correctColor, setCorrectColor] = useState();
  const [timeSelect, setTimeSelect] = useState();
  const { time } = useTimeRemaningContext();
  const validationSelect = (selectColor) => {
    console.log("correctHex -->", correctColor);
    console.log("selectColor -->", selectColor);
    console.log("timeSelect -->", time);
    if (correctColor == selectColor) {
      let obj = {
        correct: true,
        time: time,
        colorCorrect: correctColor,
        guessedColor: null,
      };
    } else {
      let obj = {
        correct: false,
        time: time,
        colorCorrect: correctColor,
        guessedColor: selectColor,
      };
    }
    generateRandomColorsArray();
  };
  const value = useMemo(
    () => ({
      generateRandomColorsArray,
      colorsHex,
      start,
      setStart,
      setTimeSelect,
      setIsSelected,
      isSelected,
      validationSelect,
    }),
    [
      generateRandomColorsArray,
      colorsHex,
      start,
      setStart,
      setTimeSelect,
      setIsSelected,
      isSelected,
      validationSelect,
    ]
  );
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
      console.log("generate");
      generateRandomColorsArray();
    }
  }, [start]);

  // const colors = generateRandomColorsArray(3);

  /* 
  TODO: Gerador de cores, chamo 3 vezes
        salvo as 3 cores no array
        mostro uma deles aleatoriamente no quadrado (randon index)
        verifico em qual o o usuario clicou e faço a pontuação

        a cada clique salvar {
          corret: true,
          time: 20,
          colorCorret: x,
          guessedColor: null
        }
         a cada clique errou {
          corret: false,
          time: 20,
          colorCorret: x
          guessedColor: x
        }
  */
  return (
    <GuessTheColorContext.Provider value={value}>
      {children}
    </GuessTheColorContext.Provider>
  );
}

export const useGuessTheColorContext = () => useContext(GuessTheColorContext);
