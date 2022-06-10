import { TASK_TYPES } from "../../data";

const initialState = {
  tasks: [],
  isLoading: false,
  error: null,
};

export default function tasks(state = initialState, action) {
  switch (action.type) {
    case TASK_TYPES.CREATE_TASK: {
      const { task, status, style, id } = action.payload;
      return {
        ...state,
        tasks: [...state.tasks, { title: task, status, style, id }],
      };
    }
    case TASK_TYPES.FETCH_TASKS_STARTED: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case TASK_TYPES.FETCH_TASKS_SUCCEDED: {
      return {
        ...state,
        tasks: action.payload.tasks,
        isLoading: false,
      };
    }
    case TASK_TYPES.FETCH_TASKS_FAILED: {
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
      };
    }
    default:
      return state;
  }
}
