import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Tag from "../todolist/Tag";
import Todo from "E:\\MERN-CRASH-COURSE\\frontend\\src\\assets\\target.png";

const TaskCard = ({ title, tags }) => {
  return (
    <article className="border p-3">
      <p className="task_text"> {title}</p>
      <div className="mb3">
        <div>
          {tags.map((tag, index) => (
            <Tag key={index} tagName={tag} selected={true} />
          ))}
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
