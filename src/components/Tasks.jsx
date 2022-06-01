import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, handleTaskClick, handleDeleteTask }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          task={task}
          handleDeleteTask={handleDeleteTask}
          handleTaskClick={handleTaskClick}
        />
      ))}
    </div>
  );
};

export default Tasks;
