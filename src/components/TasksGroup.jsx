import React from "react";
import Task from "./Task";

function TasksGroup({ status, tasks }) {
  console.log(tasks);
  return (
    <article className={`taskboard__group taskboard__group--${status.id}`}>
      <h3
        className={`taskboard__group-heading taskboard__group-heading--${status.id}`}
      >
        {status.title}
      </h3>
      <div className="taskboard__list">
        {/* <div className="taskboard__item task task--active">
          <div className="task__body">
            <p className="task__view">Название первой задачи</p>
            <input
              onChange={() => {}}
              className="task__input"
              type="text"
              value="Название первой задачи"
            />
          </div>
          <button
            className="task__edit"
            type="button"
            aria-label="Изменить"
          ></button>
        </div> */}

        {tasks && tasks.map((task) => <Task key={task.id} task={task} />)}
      </div>
    </article>
  );
}

export default TasksGroup;
