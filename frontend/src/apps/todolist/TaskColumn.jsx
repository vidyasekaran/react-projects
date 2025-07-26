import React from "react";

import TaskCard from "./TaskCard";
//import {Todo} from "../assets/target.png";
import del from "E:\\MERN-CRASH-COURSE\\frontend\\src\\assets\\delete.png";

const TaskColumn = ({ title, icon, tasks, status }) => {
  return (
    <section>
      <h2>
        <img src={icon} alt="" style={{ width: "20px", height: "20px" }} />
        {title}
      </h2>
      {tasks.map(
        (task, index) =>
          task.status === status && (
            <TaskCard key={index} title={task.task} tags={task.tags} />
          )
      )}
      <img src={del} alt="" style={{ width: "20px", height: "20px" }} />
    </section>
  );
};

export default TaskColumn;
