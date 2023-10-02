import { createContext, useContext, useState } from "react";

export const TimeRemaningContext = createContext();

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
