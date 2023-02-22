import { createSlice } from "@reduxjs/toolkit";
// slice state
const initialState = {
  todos: [], // variable name
};

const todoSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
      return state;
    },
    updateTodo: (state, action) => {
      console.log("action", action.payload);
      console.log("staes", state.todos);
      state.todos[action.payload.index] = action.payload.updatedTodo;
      console.log("statehhh", state.todos);
      return state;
    },
    deleteTodo: (state, action) => {
      state.todos.splice(action.payload, 1);
      return state;
    },
  },
});

export const { setInputValue, addTodo, updateTodo, deleteTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
