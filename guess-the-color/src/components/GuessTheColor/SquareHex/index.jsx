export function SquareHex() {
  return (
    <>
      {/* 
              GUESS THE COLOR
              */}
      <div style={{ width: "60%" }}>
        <div
          style={{
            height: "350px",
            backgroundColor: "red",
          }}
        >
          .
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "80%",
            }}
          >
            <button
              style={{
                backgroundColor: "#48525D",
                color: "#FFFFFF",
                borderRadius: "5px",
                height: "50px",
                width: "100px",
                cursor: "pointer",
              }}
            >
              START
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
