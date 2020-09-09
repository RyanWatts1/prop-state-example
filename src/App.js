import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Cat from "./Cat";

function App() {
  const todos = [
    { id: "56", title: "DeeDee" },
    { id: "45", title: "Ryan" },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <Cat todos={todos} />
        <Cat todos={todos} alt />
      </header>
    </div>
  );
}

export default App;
