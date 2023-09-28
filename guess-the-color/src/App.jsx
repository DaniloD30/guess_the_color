import { GuessTheColor } from "./components/GuessTheColor";
import { GuessTheColorProvider } from "./contexts/GuessTheColorContext";

function App() {
  return (
    <>
      <GuessTheColorProvider>
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
              backgroundColor: "#DBDFE6",
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
            <img
              src="public/images/icons/CheckCircle.svg"
              alt="check-cirvle"
              height="30px"
            />
            <div
              style={{
                color: "#6B737D",
                width: "20%",
                fontWeight: 600,
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
            <img
              src="public/images/icons/InvalidCircle.svg"
              alt="check-cirvle"
              height="30px"
            />
            <div
              style={{
                color: "#6B737D",
                width: "20%",
                fontWeight: 600,
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
              backgroundColor: "#DBDFE6",
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
            <img
              src="public/images/icons/InvalidCircle.svg"
              alt="check-cirvle"
              height="30px"
            />
            <div
              style={{
                color: "#6B737D",
                width: "20%",
                fontWeight: 600,
              }}
            >
              2s
            </div>
          </div>
        </div>
        <GuessTheColor />
      </div>
      </GuessTheColorProvider>
    </>
  );
}

export default App;
