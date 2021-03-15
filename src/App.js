import React from "react";
import Menu from "./Menu";
import Favorite from "./Favorite";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Menu something="whatever" />

      <Favorite />
    </div>
  );
}

export default App;
