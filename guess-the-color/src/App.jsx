import { CurrentAndLatestGame } from "./components/CurrentAndLatestGame";
import { GuessTheColor } from "./components/GuessTheColor";
import { CurrentLatestGameProvider } from "./contexts/CurrentLatestGameContext";
import { GuessTheColorProvider } from "./contexts/GuessTheColorContext";
import { TimeRemaningProvider } from "./contexts/TimeRemaningContext";

function App() {
  return (
    <>
      <TimeRemaningProvider>
        <CurrentLatestGameProvider>
          <GuessTheColorProvider
            initialValue={{
              start: false,
              initialArrHistoric: { items: [] }
            }}
          >
            <div
              style={{
                display: "flex",
              }}
            >
              <CurrentAndLatestGame />
              <GuessTheColor />
            </div>
          </GuessTheColorProvider>
        </CurrentLatestGameProvider>
      </TimeRemaningProvider>
    </>
  );
}

export default App;
