export const TASK_STATUSES = {
  BACKLOG: "backlog",
  IN_PROGRESS: "processing",
  DONE: "done",
  BASKET: "basket",
};

export const TASK_STATUS_NAMES = [
  { title: "Backlog", id: "backlog" },
  { title: "In Progress", id: "processing" },
  { title: "Done", id: "done" },
  { title: "Basket", id: "basket" },
];

export const TASK_TYPES = {
  CREATE_TASK: "CREATE_TASK",
  CREATE_TASK_SUCCEDED: "CREATE_TASK_SUCCEDED",
  UPDATE_TASK: "UPDATE_TASK",
  DELETE_TASK: "DELETE_TASK",
  FETCH_TASKS_STARTED: "FETCH_TASKS_STARTED",
  FETCH_TASKS_SUCCEDED: "FETCH_TASKS_SUCCEDED",
  FETCH_TASKS_FAILED: "FETCH_TASKS_FAILED",
};
