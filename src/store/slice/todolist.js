import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getTodos = createAsyncThunk("todoList/getTodos", async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  let json = await response.json();
  console.log(json);
  let jsonArray = json.slice(0, 5)
  return jsonArray;
});

const todoListSlice = createSlice({
  name: "todoList",
  initialState: {
    todos: [],
    status: null
  },
  extraReducers: {
    [getTodos.fulfilled]: (state, action) => {
       state.todos = action.payload;
    },
    [getTodos.pending]: (state) => {
      state.status = "Fetching todos. Please wait a moment...";
    },
    [getTodos.rejected]: (state) => {
      state.status = "Failed to fetch data...";
    }
  }
});

export default todoListSlice.reducer;
