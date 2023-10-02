import { CurrentAndLatestGame } from "./components/CurrentAndLatestGame";
import { GuessTheColor } from "./components/GuessTheColor";
import { ContextsContainer } from "./contexts";

function App() {
  return (
    <>
      <ContextsContainer
        initialValue={{
          start: false,
          initialArrHistoric: { items: [] },
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
      </ContextsContainer>
    </>
  );
}

export default App;
