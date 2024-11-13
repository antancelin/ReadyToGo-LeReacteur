import { useState } from "react";
import "./App.css";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  return (
    <>
      <header>
        <i className="fa-solid fa-shuttle-space"></i>
        <h1>Ready To Go</h1>
      </header>
      <main>
        <div className="container">
          <div className="buttons">
            <div className="switch">
              <div className="switch-on">
                <button
                  className={switch1 ? "full" : "empty"}
                  onClick={() => {
                    setSwitch1(true);
                  }}
                >
                  ON
                </button>
                <button
                  className={switch2 ? "full" : "empty"}
                  onClick={() => {
                    setSwitch2(true);
                  }}
                >
                  ON
                </button>
                <button
                  className={switch3 ? "full" : "empty"}
                  onClick={() => {
                    setSwitch3(true);
                  }}
                >
                  ON
                </button>
              </div>
              <div className="switch-off">
                <button
                  className={!switch1 ? "full" : "empty"}
                  onClick={() => {
                    setSwitch1(false);
                  }}
                >
                  OFF
                </button>
                <button
                  className={!switch2 ? "full" : "empty"}
                  onClick={() => {
                    setSwitch2(false);
                  }}
                >
                  OFF
                </button>
                <button
                  className={!switch3 ? "full" : "empty"}
                  onClick={() => {
                    setSwitch3(false);
                  }}
                >
                  OFF
                </button>
              </div>
            </div>
            <div className="reset">
              <button
                onClick={() => {
                  setSwitch1(false);
                  setSwitch2(false);
                  setSwitch3(false);
                }}
              >
                RESET
              </button>
            </div>
          </div>
          <div className="final-button">
            {switch1 && switch2 && switch3 ? (
              <button className="go-button">Go !</button>
            ) : (
              <button className="no-button">No way !</button>
            )}
          </div>
        </div>
      </main>
      <footer>
        <p>
          Made with{" "}
          <span>
            <a href="https://fr.react.dev/">React</a>
          </span>{" "}
          at{" "}
          <span>
            <a href="https://www.lereacteur.io/">Le Reacteur</a>
          </span>{" "}
          By{" "}
          <span>
            <a href="https://github.com/antancelin"> Antoine Ancelin</a>
          </span>
        </p>
      </footer>
    </>
  );
}

export default App;
