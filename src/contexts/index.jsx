import { CurrentLatestGameProvider } from "./CurrentLatestGameContext";
import { GuessTheColorProvider } from "./GuessTheColorContext";
import { TimeRemaningProvider } from "./TimeRemaningContext";

export function ContextsContainer({ initialValue, children }) {
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
