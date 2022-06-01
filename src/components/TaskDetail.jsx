import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./TaskDetail.css";

import Button from "./Button";

const TaskDetails = () => {
  const URLParameter = useParams();

  let navigate = useNavigate();

  return (
    <>
      <Button onClick={() => navigate(-1)}>Voltar</Button>
      <div className="detail-container">
        <h2>{URLParameter.taskTitle}</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
          accusamus ab eaque dolore omnis quibusdam veniam totam odio quia quam!
        </p>
      </div>
    </>
  );
};

export default TaskDetails;
