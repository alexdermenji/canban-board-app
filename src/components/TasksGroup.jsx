import React from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../redux/actions";
import Task from "./Task";
import { Droppable } from "react-beautiful-dnd";

function TasksGroup({
  status,
  tasks,
  setCurrentBoard,
  setCurrentTask,
  currentBoard,
  currentTask,
}) {
  const dispatch = useDispatch();
  const dropHandler = (e) => {
    e.preventDefault();
    dispatch(editTask(currentTask.id, { status, style: status.id }));
    setCurrentBoard(status);
  };

  const dragOverHandler = (e) => {
    e.preventDefault();
  };
  return (
    <article className={`taskboard__group taskboard__group--${status.id}`}>
      <h3
        className={`taskboard__group-heading taskboard__group-heading--${status.id}`}
      >
        {status.title}
      </h3>
      <Droppable droppableId={String(status.code)}>
        {(provided) => (
          <div
            className="taskboard__list"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {tasks.map((task, index) => (
              <Task
                id={task.id}
                index={index}
                tasks={tasks}
                key={task.id}
                task={task}
                setCurrentBoard={setCurrentBoard}
                setCurrentTask={setCurrentTask}
                currentBoard={currentBoard}
                currentTask={currentTask}
              />
            ))}
            {!tasks.length && (
              <div
                className="taskboard__item task task--empty"
                draggable={true}
                onDragOver={(e) => dragOverHandler(e)}
                onDrop={(e) => dropHandler(e, status)}
              >
                <p>Перетащите карточку</p>
              </div>
            )}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </article>
  );
}

export default TasksGroup;
