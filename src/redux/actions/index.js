import { TASK_TYPES } from "../../data";
import * as api from "../../api";

export function fetchTasks() {
  return (dispatch) => {
    dispatch(fetchTasksStarted());
    api
      .fetchTasks()
      .then((response) => {
        dispatch(fetchTasksSucceded(response.data));
      })
      .catch((error) => {
        dispatch(fetchTasksFailed(error.message));
      });
  };
}

export function fetchTasksStarted() {
  return {
    type: "FETCH_TASKS_STARTED",
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
export function fetchTasksFailed(error) {
  return {
    type: "FETCH_TASKS_FAILED",
    payload: {
      error,
    },
  };
}

export function createTask(title, status, style) {
  return (dispatch) => {
    api.createTask({ title, status, style }).then((resp) => {
      dispatch(createTaskSucceded(resp.data));
    });
  };
}

export const createTaskSucceded = ({ id, status, style, title }) => {
  return {
    type: TASK_TYPES.CREATE_TASK_SUCCEDED,
    payload: {
      id,
      status,
      style,
      title,
    },
  };
};
