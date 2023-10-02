import { CurrentLatestGameProvider } from "./CurrentLatestGameContext";
import { GuessTheColorProvider } from "./GuessTheColorContext";
import { TimeRemaningProvider } from "./TimeRemaningContext";

export function ContextsContainer({ initialValue, children }) {
  /* 
  Container dos contextos, modularizando e 
  evitando a repetição da importação dos providers,
  principalmente nos testes únitarios.
  */
  return (
    <>
      <TimeRemaningProvider>
        <CurrentLatestGameProvider>
          <GuessTheColorProvider initialValue={initialValue}>
            {children}
          </GuessTheColorProvider>
        </CurrentLatestGameProvider>
      </TimeRemaningProvider>
    </>
  );
}
