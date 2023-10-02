import { useGuessTheColorContext } from "../../../contexts/GuessTheColorContext";
import "./styles.css";
/* 
 Componente responsavel em rendedizar o botão de Resetar todos os dados
  */
export function ResetAllData() {
  const value = useGuessTheColorContext();
  return (
    <>
      <div className="containerResetAllData">
        <button
          className="buttonResetAllData"
          disabled={value.start}
          onClick={() => value.resetAllData()}
        >
          Reset All Data
        </button>
      </div>
    </>
  );
}
