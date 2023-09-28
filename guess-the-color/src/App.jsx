import { CurrentAndLatestGame } from "./components/CurrentAndLatestGame";
import { GuessTheColor } from "./components/GuessTheColor";
import { GuessTheColorProvider } from "./contexts/GuessTheColorContext";
import { TimeRemaningProvider } from "./contexts/TimeRemaningContext";

function App() {
  return (
    <>
      <TimeRemaningProvider>
        <GuessTheColorProvider>
          <div
            style={{
              display: "flex",
            }}
          >
            <CurrentAndLatestGame />
            <GuessTheColor />
          </div>
        </GuessTheColorProvider>
      </TimeRemaningProvider>
    </>
  );
}

export default App;
