import React from "react";
import { useDispatch } from "react-redux";
import { TASK_STATUS_NAMES } from "../data";
import { editTask } from "../redux/actions";

function Task({ task }) {
  const [isActive, setIsActive] = React.useState(false);
  const [inputValue, setInputValue] = React.useState(task.title);
  const dispatch = useDispatch();
  const onStatusChange = (e) => {
    dispatch(
      editTask(task.id, {
        status: {
          title: e.target.options[e.target.selectedIndex].text,
          id: e.target.value,
        },
      })
    );
  };

  const onIconClick = (e) => {
    setIsActive(!isActive);
    if (isActive) {
      dispatch(
        editTask(task.id, {
          title: inputValue,
        })
      );
    }
  };
  return (
    <div
      className={`taskboard__item task task--${task.style} ${
        isActive ? "task--active" : ""
      }`}
    >
      <div className="task__body">
        <p className="task__view">{task.title}</p>
        <input
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          className="task__input"
          type="text"
          value={inputValue}
        />
      </div>

      <select value={task.status.id} onChange={onStatusChange}>
        {TASK_STATUS_NAMES.map((status) => (
          <option key={status.id} value={status.id}>
            {status.title}
          </option>
        ))}
      </select>
      <button
        onClick={onIconClick}
        className="task__edit"
        type="button"
        aria-label="Изменить"
      ></button>
    </div>
  );
}

export default Task;
