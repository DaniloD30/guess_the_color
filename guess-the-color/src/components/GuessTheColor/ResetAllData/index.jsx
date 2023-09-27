export function ResetAllData() {
  return (
    <>
      {/* 
                GUESS THE COLOR
                */}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "end",
          height: "20%",
          alignItems: "end",
          marginRight: "20%",
        }}
      >
        <button
          style={{
            backgroundColor: "#48525D",
            color: "#FFFFFF",
            borderRadius: "5px",
            height: "50px",
            width: "150px",
            cursor: "pointer",
          }}
        >
          Reset All Data
        </button>
      </div>
    </>
  );
}
