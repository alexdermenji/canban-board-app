import React from "react";

function Task({ task }) {
  return (
    <div className={`taskboard__item task task--${task.style}`}>
      <div className="task__body">
        <p className="task__view">{task.title}</p>
        <input
          onChange={() => {}}
          className="task__input"
          type="text"
          value={task.title}
        />
      </div>
      <button
        className="task__edit"
        type="button"
        aria-label="Изменить"
      ></button>
    </div>
  );
}

export default Task;
