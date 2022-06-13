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

  // const dragStartHandler = (e, board, card) => {
  //   // dispatch(editTask(task.id, { status: { title: "", id: "" } }));
  //   setCurrentBoard(board);
  //   setCurrentTask(card);
  // };

  // const dropHandler = (e, board) => {
  //   dispatch(
  //     editTask(currentTask.id, { status: board.status, style: board.style })
  //   );
  // };

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

          {/* <select value={task.status.id} onChange={onStatusChange}>
 {TASK_STATUS_NAMES.map((status) => (
   <option key={status.id} value={status.id}>
     {status.title}
   </option>
 ))}
</select> */}
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
