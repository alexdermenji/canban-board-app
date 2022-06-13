import React from "react";
import { useSelector } from "react-redux";
import { TASK_STATUS_NAMES } from "../data";
import { selectError, selectIsLoading, selectTasks } from "../redux/selectors";
import TasksGroup from "./TasksGroup";

function TasksBoard() {
  const [currentBoard, setCurrentBoard] = React.useState(null);
  const [currentTask, setCurrentTask] = React.useState(null);

  const tasks = useSelector(selectTasks);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  return (
    <>
      {TASK_STATUS_NAMES.map((status) => {
        const statusTasks = tasks.filter(
          (task) => task.status.id === status.id
        );

        return (
          <TasksGroup
            key={status.id}
            status={status}
            tasks={statusTasks}
            setCurrentBoard={setCurrentBoard}
            setCurrentTask={setCurrentTask}
            currentBoard={currentBoard}
            currentTask={currentTask}
            isBasket={status.id === "basket"}
          />
        );
      })}
    </>
  );
}

export default TasksBoard;
