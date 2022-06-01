import React from "react";
import "./Task.css";
import { CgClose, CgInfo } from "react-icons/cg";
import { useNavigate, Link, Navigate } from "react-router-dom";

const Task = ({ task, handleTaskClick, handleDeleteTask }) => {
  let navigate = useNavigate();
  const handleTaskDetailsClick = () => {
    navigate(`/${task.title}`);
  };

  return (
    <div
      className="container-task"
      style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}
    >
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>
      <div className="container-icons">
        <div className="infos" onClick={handleTaskDetailsClick}>
          <CgInfo />
        </div>
        <div onClick={() => handleDeleteTask(task.id)} className="apagar">
          <CgClose />
        </div>
      </div>
    </div>
  );
};

export default Task;
