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
    type: TASK_TYPES.FETCH_TASKS_STARTED,
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
    type: TASK_TYPES.FETCH_TASKS_FAILED,
    payload: {
      error,
    },
  };
}

export function createTask(title, board) {
  return (dispatch) => {
    api
      .createTask({
        title,
        boardId: board.id,
        boardTitle: board.title,
        boardCode: board.code,
        boardStyle: board.style,
      })
      .then((resp) => {
        console.log(resp.data);
        dispatch(createTaskSucceded(resp.data));
      });
  };
}

export const createTaskSucceded = (props) => {
  return {
    type: TASK_TYPES.CREATE_TASK_SUCCEDED,
    payload: {
      ...props,
    },
  };
};

function getTaskById(tasks, id) {
  return tasks.find((task) => task.id === id);
}

export function editTask(id, params = {}) {
  return (dispatch, getState) => {
    const task = getTaskById(getState().tasks, id);
    const updatedTask = { ...task, ...params };
    api.editTask(id, updatedTask).then((resp) => {
      dispatch(editTaskSucceeded(resp.data));
    });
  };
}

export function editTaskSucceeded(task) {
  return {
    type: TASK_TYPES.EDIT_TASK_SUCCEDED,
    payload: task,
  };
}

export function deleteTasks(id) {
  return (dispatch) => {
    dispatch(deleteTaskSucceded(id));
    api.deleteTasks(id).then((resp) => {
      console.log(resp.data);
    });
  };
}

export function deleteTaskSucceded(id) {
  return {
    type: TASK_TYPES.DELETE_TASK,
    payload: id,
  };
}
