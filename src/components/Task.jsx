import React from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../redux/actions";
import { Draggable } from "react-beautiful-dnd";

function Task({ id, index, tasks, task }) {
  const [isActive, setIsActive] = React.useState(false);
  const [inputValue, setInputValue] = React.useState(task.title);
  const dispatch = useDispatch();

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
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`taskboard__item task task--${task.style} ${
            isActive ? "task--active" : ""
          }`}
          draggable={true}
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
          <button
            onClick={onIconClick}
            className="task__edit"
            type="button"
            aria-label="Изменить"
          ></button>
        </div>
      )}
    </Draggable>
  );
}

export default Task;
