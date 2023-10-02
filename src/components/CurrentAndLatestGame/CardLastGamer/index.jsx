import { useCurrentLatestGameContext } from "../../../contexts/CurrentLatestGameContext";
import "./styles.css";
import { CorrectCard } from "./CorrectCard";
import { InvalidCard } from "./InvalidCard";

export function CardLastGamer() {
  const value = useCurrentLatestGameContext();
  const reverseArrGame = [...value.arrGames.items].reverse();

  /* 
 Componente responsavel em renderizar o card
 de cada rodada, formando o histórico a esquerda
 das rodadas
  */
  return (
    <>
      {reverseArrGame.map((game, index) =>
        game.correct ? (
          <CorrectCard key={`${game.time}-${index}`} game={game} />
        ) : (
          <InvalidCard key={`${game.time}-${index}`} game={game} />
        )
      )}
    </>
  );
}
