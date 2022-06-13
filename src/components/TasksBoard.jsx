import React from "react";
import { useSelector } from "react-redux";
import { BOARDS } from "../data";
import { selectError, selectIsLoading, selectTasks } from "../redux/selectors";
import TasksGroup from "./TasksGroup";

function TasksBoard() {
  const tasks = useSelector(selectTasks);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  return (
    <>
      {BOARDS.map((board) => {
        const statusTasks = tasks.filter((task) => task.boardId === board.id);

        return (
          <TasksGroup
            key={board.code}
            board={board}
            tasks={statusTasks}
            isBasket={board.id === "basket"}
          />
        );
      })}
    </>
  );
}

export default TasksBoard;
