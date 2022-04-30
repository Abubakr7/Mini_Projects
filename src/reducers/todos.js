import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "todos",
  initialState: {
    text: "",
    todos: [],
  },
  reducers: {
    handleChange: (state, action) => {
      state.text = action.payload;
    },
    addTodo: (state) => {
      state.todos.push({ text: state.text, isCompleted: false });
    },
    completeTodo: (state, action) => {
      const { index, check } = action.payload;
      state.todos[index].isCompleted = check;
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(
        (elem, elemIndex) => elemIndex !== action.payload
      );
    },
  },
});

export const { handleChange, addTodo, completeTodo, deleteTodo } =
  slice.actions;

export default slice.reducer;
