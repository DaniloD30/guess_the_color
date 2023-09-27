export function BarScore() {
  return (
    <>
      <div
        style={{
          display: "flex",
          border: "1px solid",
          borderRadius: "10px",
          minHeight: "10px",
          backgroundColor: "#ECEFF5",
          width: "60%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px",
            width: "33%",
          }}
        >
          <div style={{ fontWeight: 600 }}>REMANING</div>
          <div style={{ fontWeight: 600 }}>TIMES (S)</div>
          <h2 style={{ fontWeight: 600 }}>30</h2>
        </div>
        <div style={{ borderLeft: "1px solid" }}></div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "33%",
          }}
        >
          <div style={{ fontWeight: 600 }}>RESTART</div>
        </div>
        <div style={{ borderLeft: "1px solid" }}></div>
        <div
          style={{
            width: "33%",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: "10px",
              minHeight: "35%",
            }}
          >
            <div style={{ fontWeight: 600, marginLeft: "10px" }}>
              HIGH SCORE
            </div>
            <div style={{ fontWeight: 600, marginRight: "10px" }}>13</div>
          </div>
          <hr class="solid"></hr>
          <div
            style={{
              display: "flex",
              minHeight: "50%",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div style={{ fontWeight: 600, marginLeft: "10px" }}>SCORE</div>
            <div style={{ fontWeight: 600, marginRight: "10px" }}>10</div>
          </div>
        </div>
      </div>
    </>
  );
}


