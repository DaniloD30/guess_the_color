import { BarGuessedColor } from "./BarGuessedColor";
import { CardLastGamer } from "./CardLastGamer";

export function CurrentAndLatestGame() {
  return (
    <>
      <div
        style={{
          backgroundColor: "#ECEFF5",
          minHeight: "100vh",
          width: "35vh",
          color: "#48525D",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h3>Current/Latest game</h3>
        </div>
        <BarGuessedColor />
        <div
          style={{
            maxHeight: "80vh",
            overflowY: "auto",
          }}
        >
          <CardLastGamer />
        </div>
      </div>
    </>
  );
}
