import { configureStore } from "@reduxjs/toolkit";
// import reducer from "../reducers/index";
import todoReducer from "../slice/addSlice";

export const store = configureStore({
  reducer: {
    todosSlice: todoReducer,
  },
});
