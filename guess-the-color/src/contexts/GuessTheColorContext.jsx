import { createContext, useContext, useEffect, useState } from "react";

export const GuessTheColorContext = createContext();

export function GuessTheColorProvider({ children }) {
  const [timeContext, setTimeContext] = useState(100);
  const [start, setStart] = useState(false);
  const [colorsHex, setColorsHex] = useState([]);
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
  }
  useEffect(() => {
    if (start) {
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
    <GuessTheColorContext.Provider
      value={{
        timeContext,
        setTimeContext,
        generateRandomColorsArray,
        start,
        setStart,
      }}
    >
      {children}
    </GuessTheColorContext.Provider>
  );
}

export const useGuessTheColorContext = () => useContext(GuessTheColorContext);
