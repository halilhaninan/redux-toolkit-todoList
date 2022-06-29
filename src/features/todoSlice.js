import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const { v4: uuidv4 } = require("uuid");
console.log("uuidv4", uuidv4());
export const todoSlice = createSlice({
  name: "todolistReducer",
  initialState,
  reducers: {
    add: (state, action) => {
      const newTodo = { id: uuidv4(), title: action.payload, completed: false };
      state.push(newTodo);
    },
    remove: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    markCompleted: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      todo.completed = true;
    },

    markNotCompleted: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      todo.completed = false;
    },
    markAllCompleted: (state) => {
      return state.map((todo) => ({ ...todo, completed: true }));
    },
    deleteCompleted: (state) => {
      return state.filter((todo) => !todo.completed);
    },
  },
});

export const {
  add,
  remove,
  markCompleted,
  markNotCompleted,
  markAllCompleted,
  deleteCompleted,
} = todoSlice.actions;

export default todoSlice.reducer;
