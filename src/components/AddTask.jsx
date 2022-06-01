import React, { useState } from "react";
import Button from "./Button";
import "./AddTask.css";

const AddTask = ({ handleTaskAddition }) => {
  const [inputData, setInputData] = useState("");

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleButtonClick = () => {
    if (!inputData) return alert("preencha o campo");

    handleTaskAddition(inputData);
    setInputData("");
  };

  return (
    <div className="container-add-task">
      <input
        className="input-add-task"
        type="text"
        value={inputData}
        placeholder="Write your task here..."
        onChange={handleInputChange}
      />
      <div className="button-container">
        <Button onClick={handleButtonClick}> Adicionar</Button>
      </div>
    </div>
  );
};

export default AddTask;
