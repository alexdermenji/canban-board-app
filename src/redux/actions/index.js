import { TASK_TYPES } from "../../data";
import * as api from "../../api";

export function fetchTasks() {
  return (dispatch) => {
    api.fetchTasks().then((response) => {
      dispatch(fetchTasksSucceded(response.data));
    });
  };
}

export function fetchTasksSucceded(tasks) {
  return {
    type: TASK_TYPES.FETCH_TASKS_SUCCEDED,
    payload: {
      tasks,
    },
  };
}

export const createTask = (task, status, style) => {
  return {
    type: TASK_TYPES.CREATE_TASK,
    payload: {
      id: task,
      task,
      status,
      style,
    },
  };
};
