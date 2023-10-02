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
          {
            /* 
            Aqui tive a decisão de separar em dois componentes principais
            o GuessTheColor que seria o CORE do game e a CurrentAndLatestGame
            Que seria a barra a esquerda mostrando o histórico de cada rodada.
            */
          }
          <CurrentAndLatestGame />
          <GuessTheColor />
        </div>
      </ContextsContainer>
    </>
  );
}

export default App;
