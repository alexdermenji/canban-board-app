export const TASK_STATUSES = {
  BACKLOG: "backlog",
  IN_PROGRESS: "processing",
  DONE: "done",
  BASKET: "basket",
};

export const BOARDS = [
  { title: "Backlog", id: "backlog", code: 0, style: "backlog" },
  { title: "In Progress", id: "processing", code: 1, style: "processing" },
  { title: "Done", id: "done", code: 2, style: "done" },
  { title: "Basket", id: "basket", code: 3, style: "basket" },
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
