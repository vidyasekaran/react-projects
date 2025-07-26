import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TaskForm from "./TaskForm";
import TaskColumn from "./TaskColumn";
import Todo from "E:\\MERN-CRASH-COURSE\\frontend\\src\\assets\\target.png";

const Simplify = () => {
  const [tasks, setTasks] = useState([]);

  console.log("tasks", tasks);
  return (
    <div className="app">
      <TaskForm setTasks={setTasks} />
      <main className="d-flex gap-3 p-2">
        <TaskColumn title="To do" icon={Todo} tasks={tasks} status={"todo"} />
        <TaskColumn title="Doing" icon={Todo} tasks={tasks} status={"Doing"} />
        <TaskColumn title="Done" icon={Todo} tasks={tasks} status={"Done"} />
      </main>
    </div>
  );
};

export default Simplify;
