import "./styles.css";
export function ProgressBar({ timeContext }) {
  return (
    <>
      <div className="containerProgress">
        <div
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
