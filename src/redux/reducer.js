// src/redux/reducer.js
import {
  ADD_TODO,
  TOGGLE_IsDone,
  DELETE_TODO,
  FILTER_All,
  EDIT_TASK,
} from "./actions";

const initialState = {
  todos: [],
  IsDoneValue: "ALL",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case TOGGLE_IsDone:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, IsDone: !todo.IsDone }
            : todo
        ),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    case FILTER_All:
      return {
        ...state,
        IsDoneValue: action.payload,
      };
    case EDIT_TASK:
      return {
        ...state,
        todos: state.todos.map((elt) =>
          elt.id === action.payload.id
            ? { ...elt, text: action.payload.newTask }
            : elt
        ),
      };
    default:
      return state;
  }
};

export default reducer;
