import { TASK_TYPES } from "../../data";

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
