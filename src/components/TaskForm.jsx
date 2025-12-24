import React from "react";
import "./TaskForm.css";

export const TaskForm = () => {
  return (
    <header className="app_header">
      <form>
        <input
          type="text"
          className="task_input"
          placeholder="Enter Your task"
        />

        <div className="task_form_bottom_line">
          <div>
            <button className="tags">HTML</button>
            <button className="tags">CSS</button>
            <button className="tags">Javascript</button>
            <button className="tags">React</button>
          </div>

          <div>
            <select className="task_status">
              <option value="todo">To Do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
            <button type="submit" className="task_submit">
              + Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
