import { createContext, useContext, useMemo, useState } from "react";

export const CurrentLatestGameContext = createContext();

/* 
Contexto/hook, voltado para o histórico das
partidas
*/
export function CurrentLatestGameProvider({ children }) {
  const [arrGames, setArrGames] = useState({ items: [] });

  const valueGames = useMemo(
    () => ({
      setArrGames,
      arrGames,
    }),
    [setArrGames, arrGames]
  );
  return (
    <CurrentLatestGameContext.Provider value={valueGames}>
      {children}
    </CurrentLatestGameContext.Provider>
  );
}

export const useCurrentLatestGameContext = () =>
  useContext(CurrentLatestGameContext);
