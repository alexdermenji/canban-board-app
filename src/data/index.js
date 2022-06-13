export const TASK_STATUSES = {
  BACKLOG: "backlog",
  IN_PROGRESS: "processing",
  DONE: "done",
  BASKET: "basket",
};

export const TASK_STATUS_NAMES = [
  { title: "Backlog", id: "backlog", code: 0 },
  { title: "In Progress", id: "processing", code: 1 },
  { title: "Done", id: "done", code: 2 },
  { title: "Basket", id: "basket", code: 3 },
];

export const TASK_TYPES = {
  CREATE_TASK: "CREATE_TASK",
  CREATE_TASK_SUCCEDED: "CREATE_TASK_SUCCEDED",
  EDIT_TASK_SUCCEDED: "EDIT_TASK_SUCCEDED",
  DELETE_TASK: "DELETE_TASK",
  FETCH_TASKS_STARTED: "FETCH_TASKS_STARTED",
  FETCH_TASKS_SUCCEDED: "FETCH_TASKS_SUCCEDED",
  FETCH_TASKS_FAILED: "FETCH_TASKS_FAILED",
};
