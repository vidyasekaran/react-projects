import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Tag from "../todolist/Tag";
const TaskForm = ({ setTasks }) => {
  // now you can use setTasks passed as props

  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  const checkTag = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };

  const selectTag = (tag) => {
    console.log("Hello" + tag);

    if (taskData.tags.some((item) => item === tag)) {
      const filterTags = taskData.tags.filter((item) => item !== tag);
      setTaskData((prev) => {
        return { ...prev, tags: filterTags };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
  };

  const handleData = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);
    setTasks((prev) => {
      return [...prev, taskData];
    });
  };

  return (
    <div className="container">
      <div className="form-section">
        <form onSubmit={handleSubmit} className="row g-3">
          <div className="mb3">
            <input
              name="task"
              type="text"
              className="form-control"
              placeholder="Enter text"
              //onChange={handleTaskChange}
              onChange={handleData}
            />
          </div>
          <div className="mb3">
            <div>
              <Tag
                tagName="HTML"
                selectTag={selectTag}
                selected={checkTag("HTML")}
              />
              <Tag
                tagName="CSS"
                selectTag={selectTag}
                selected={checkTag("CSS")}
              />
              <Tag
                tagName="Javascript"
                selectTag={selectTag}
                selected={checkTag("Javascript")}
              />
              <Tag
                tagName="React"
                selectTag={selectTag}
                selected={checkTag("React")}
              />
            </div>
          </div>
          <div>
            <select
              className="task_status"
              //onChange={handleStatusChange}
              name="status"
              onChange={handleData}
            >
              <option className="todo">ToDo</option>
              <option className="doing">Doing</option>
              <option className="done">Done</option>
            </select>
          </div>
          <div>
            <button type="submit" className="btn btn-primary mb-3">
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default TaskForm;
