import "./styles.css";
/* 
 Componente responsavel em renderizar a barra de progresso que seria o 
 tempo decrementando
  */
export function ProgressBar({ timeContext }) {
  return (
    <>
      <div className="containerProgress">
        <div
          data-testid="progress-container"
          style={{
            width: `${timeContext}%`,
            height: "15px",
            backgroundColor: "#8290A3",
          }}
        ></div>
      </div>
    </>
  );
}
