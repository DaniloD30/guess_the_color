import { createContext, useContext, useState } from "react";

export const TimeRemaningContext = createContext();
/* 
Contexto/hook, com o objetivo de ser o responsavel
por salvar o time de cada rodada. Sendo o facilitador
desse uso do time em todo o projeto
*/
export function TimeRemaningProvider({ children }) {
  const [time, setTime] = useState(30);

  return (
    <TimeRemaningContext.Provider
      value={{
        time,
        setTime,
      }}
    >
      {children}
    </TimeRemaningContext.Provider>
  );
}

export const useTimeRemaningContext = () => useContext(TimeRemaningContext);
