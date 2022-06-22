import "./App.css";
import React from "react";
import TopBar from "./components/TopBar";
import BackImage from "./components/BackImage";
import Stores from "./components/Stores";

function App() {
  return (
    <div className="App">
      <TopBar />
      <BackImage />
      <Stores />
    </div>
  );
}

export default App;
