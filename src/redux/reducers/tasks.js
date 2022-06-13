import { TASK_TYPES } from "../../data";

const initialState = {
  tasks: [],
  isLoading: false,
  error: null,
};

export default function tasks(state = initialState, action) {
  switch (action.type) {
    case TASK_TYPES.CREATE_TASK_SUCCEDED: {
      return {
        ...state,
        tasks: [...state.tasks, { ...action.payload }],
      };
    }
    case TASK_TYPES.EDIT_TASK_SUCCEDED: {
      const tasks = state.tasks.map((task) => {
        console.log(task.id);
        console.log(action.payload.id);
        if (task.id === action.payload.id) {
          return { ...task, ...action.payload };
        }
        return task;
      });
      return {
        ...state,
        tasks,
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
    case TASK_TYPES.DELETE_TASK: {
      const tasks = state.tasks.filter((task) => task.id !== action.payload);
      return {
        ...state,
        tasks,
      };
    }
    default:
      return state;
  }
}
