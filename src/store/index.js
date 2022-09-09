import { configureStore } from "@reduxjs/toolkit";
import todoList from "./slice/todolist";

const store = configureStore({
  reducer: {
    todoList: todoList
  }
});

export default store;