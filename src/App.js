import "./App.css";
import React from "react";
import Header from "./components/Header";
import homepage from "./assets/homepage.jpg";

function App() {
  return (
    <React.Fragment>
      <h1>Sainma Zindagi</h1>
      <Header />
      <div>
        <img src={homepage} width="800" height="300" />
        <h1>
          Track films you’ve watched.
          <br />
          Save those you want to see.
          <br /> Tell your friends what’s good. <br />
        </h1>
      </div>
    </React.Fragment>
  );
}

export default App;
