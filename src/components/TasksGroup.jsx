import React from "react";
import { useDispatch } from "react-redux";
import Task from "./Task";
import { Droppable } from "react-beautiful-dnd";
import { deleteTasks } from "../redux/actions";

function TasksGroup({ board, tasks, isBasket }) {
  const dispatch = useDispatch();
  const deleteTasksHandler = () => {
    tasks.forEach((task) => dispatch(deleteTasks(task.id)));
  };

  return (
    <article className={`taskboard__group taskboard__group--${board.id}`}>
      <h3
        className={`taskboard__group-heading taskboard__group-heading--${board.id}`}
      >
        {board.title}
      </h3>
      <Droppable droppableId={String(board.code)}>
        {(provided) => (
          <div
            className="taskboard__list"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {tasks.map((task, index) => (
              <Task id={task.id} index={index} key={task.id} task={task} />
            ))}
            {!tasks.length && (
              <div
                className="taskboard__item task task--empty"
                draggable={true}
              >
                <p>{isBasket ? "Basket is empty" : "Drag the card"}</p>
              </div>
            )}
            {provided.placeholder}
            {isBasket && tasks.length > 0 && (
              <button
                onClick={deleteTasksHandler}
                className="taskboard__button button button--clear"
                type="button"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="15.5374"
                    y="5.16638"
                    width="1.83333"
                    height="14.6667"
                    transform="rotate(45 15.5374 5.16638)"
                    fill="white"
                  />
                  <rect
                    x="16.8337"
                    y="15.5372"
                    width="1.83333"
                    height="14.6667"
                    transform="rotate(135 16.8337 15.5372)"
                    fill="white"
                  />
                </svg>
                <span>Clear</span>
              </button>
            )}
          </div>
        )}
      </Droppable>
    </article>
  );
}

export default TasksGroup;
