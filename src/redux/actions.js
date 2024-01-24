// src/redux/actions.js
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_IsDone = "TOGGLE_FAVORITE";
export const DELETE_TODO = "DELETE_TODO";
export const FILTER_All = "FilterAll";
export const EDIT_TASK = "EDIT_TASK";
export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: {
    id: new Date().getTime(),
    text,
    favorite: false,
  },
});

export const toggleIsDone = (id) => ({
  type: TOGGLE_IsDone,
  payload: { id },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: { id },
});
export const FilterAll = (payload) => ({
  type: FILTER_All,
  payload,
});
export const NewSave = (payload) => ({
  type: EDIT_TASK,
  payload,
});
