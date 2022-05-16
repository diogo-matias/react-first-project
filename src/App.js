import React, { useState } from "react";
import "./App.css";

import Titulo from "./components/Titulo";

const App = () => {
  let [tasks, setTasks] = useState("teste");
  let [titulo] = useState("Amanheceu ");

  function clickButton() {
    if (tasks === "teste") {
      setTasks("TESTE");
    } else {
      setTasks("teste");
    }
  }

  return (
    <div className="container">
      <Titulo titulo={titulo} />
      <h1> {tasks} </h1>

      <button onClick={clickButton}>BTN1</button>
    </div>
  );
};

export default App;
