import React from "react";
import { useDispatch } from "react-redux";
import { TASK_STATUS_NAMES } from "../data";
import { editTask } from "../redux/actions";

function Task({ task }) {
  console.log(task.status.title);
  const dispatch = useDispatch();
  const onStatusChange = (e) => {
    dispatch(
      editTask(task.id, {
        title: e.target.options[e.target.selectedIndex].text,
        id: e.target.value,
      })
    );
  };
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
      {/* <select value={task.status.title} onChange={onStatusChange}>
        <option value="backlog">Backlog</option>
        <option value="processing">In progress</option>
        <option value="done">Done</option>
        <option value="basket">Basket</option>
      </select> */}

      <select value={task.status.id} onChange={onStatusChange}>
        {TASK_STATUS_NAMES.map((status) => (
          <option key={status.id} value={status.id}>
            {status.title}
          </option>
        ))}
      </select>
      <button
        className="task__edit"
        type="button"
        aria-label="Изменить"
      ></button>
    </div>
  );
}

export default Task;
