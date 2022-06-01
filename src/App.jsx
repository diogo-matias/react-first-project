// import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";

import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import TaskDetails from "./components/TaskDetail";

import "./App.css";
const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.cypress.io/todos?_limit=5"
      );

      setTasks(data);
    };

    fetchTasks();
  }, []);

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: Math.random(10),
        completed: false,
      },
    ];

    setTasks(newTasks);
  };

  const handleDeleteTask = (taskId) => {
    const newTasks = tasks.map((task) => task);

    const taskIndex = newTasks.findIndex((task) => task.id === taskId);

    newTasks.splice(taskIndex, 1);

    setTasks(newTasks);
  };

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });

    setTasks(newTasks);
  };

  return (
    <Router>
      <div className="container-app">
        <Header />
        <br />

        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                <AddTask handleTaskAddition={handleTaskAddition} />
                <Tasks
                  tasks={tasks}
                  handleDeleteTask={handleDeleteTask}
                  handleTaskClick={handleTaskClick}
                />
              </>
            }
          />

          <Route path="/:taskTitle" exact element={<TaskDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
