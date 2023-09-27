function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
        }}
      >
        {/* 
          Current/Latest Game
          */}
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
          <div
            style={{
              display: "flex",
              border: "2px solid #DBE9E6",
              minHeight: "60px",
              width: "100%",
            }}
          >
            <div
              style={{
                fontWeight: "600",
                width: "33%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div>Guessed</div>
              <div>color</div>
            </div>
            <div style={{ borderLeft: "1px solid" }}></div>
            <div
              style={{
                fontWeight: "600",
                width: "33%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div>Corret</div> <div>color</div>
            </div>
            <div style={{ borderLeft: "1px solid" }}></div>
            <div
              style={{
                fontWeight: "600",
                width: "33%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {" "}
              Score
            </div>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              minHeight: "90px",
              marginTop: "20px",
              backgroundColor: '#DBDFE6',
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                backgroundColor: "green",
                width: "60%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "40px",
                borderRadius: "10px",
                color: "#FFFFFF",
              }}
            >
              #77D353
            </div>
            <img src="public/images/icons/CheckCircle.svg" alt="check-cirvle"height="30px"/>
            <div
              style={{
                color: "#6B737D",
                width: "20%",
                fontWeight: 600
              }}
            >
              2s
            </div>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              minHeight: "90px",
              marginTop: "20px",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                backgroundColor: "green",
                width: "28%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "40px",
                borderRadius: "10px",
                color: "#FFFFFF",
              }}
            >
              #77D353
            </div>
            <div
              style={{
                backgroundColor: "green",
                width: "28%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "40px",
                borderRadius: "10px",
                color: "#FFFFFF",
              }}
            >
              #77D353
            </div>
            <img src="public/images/icons/InvalidCircle.svg" alt="check-cirvle"height="30px"/>
            <div
              style={{
                color: "#6B737D",
                width: "20%",
                fontWeight: 600
              }}
            >
              2s
            </div>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              minHeight: "90px",
              marginTop: "20px",
              backgroundColor: '#DBDFE6',
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                backgroundColor: "green",
                width: "28%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "40px",
                borderRadius: "10px",
                color: "#FFFFFF",
              }}
            >
              #77D353
            </div>
            <div
              style={{
                backgroundColor: "green",
                width: "28%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "40px",
                borderRadius: "10px",
                color: "#FFFFFF",
              }}
            >
              #77D353
            </div>
            <img src="public/images/icons/InvalidCircle.svg" alt="check-cirvle"height="30px"/>
            <div
              style={{
                color: "#6B737D",
                width: "20%",
                fontWeight: 600
              }}
            >
              2s
            </div>
          </div>
        </div>
        {/* 
          GUESS THE COLOR
          */}
        <div
          style={{
            display: "flex",
            width: "100%",
            backgroundColor: "white",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1>Guess the color</h1>
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
          <div
            style={{
              marginTop: "30px",
              width: "60%",
              backgroundColor: "#E5E9D6",
            }}
          >
            <div
              style={{
                width: "10%",
                height: "15px",
                backgroundColor: "#8290A3",
              }}
            ></div>
          </div>
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
          <div
            style={{
              width: "60%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <button
              style={{
                backgroundColor: "#FFFFFF",
                color: "#48525D",
                borderRadius: "5px",
                height: "50px",
                width: "200px",
                cursor: "pointer",
              }}
            >
              #48525D
            </button>
            <button
              style={{
                backgroundColor: "#FFFFFF",
                color: "#48525D",
                borderRadius: "5px",
                height: "50px",
                width: "200px",
                cursor: "pointer",
              }}
            >
              #48525D
            </button>
            <button
              style={{
                backgroundColor: "#FFFFFF",
                color: "#48525D",
                borderRadius: "5px",
                height: "50px",
                width: "200px",
                cursor: "pointer",
              }}
            >
              #48525D
            </button>
          </div>
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
        </div>
      </div>
    </>
  );
}

export default App;