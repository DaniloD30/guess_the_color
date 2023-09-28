import { createContext, useContext, useState } from "react";

export const GuessTheColorContext = createContext();

export function GuessTheColorProvider({ children }) {
  const [timeContext, setTimeContext] = useState(100);
  return (
    <GuessTheColorContext.Provider value={{ timeContext, setTimeContext }}>
      {children}
    </GuessTheColorContext.Provider>
  );
}

export const useGuessTheColorContext = () => useContext(GuessTheColorContext);
