import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../axios/api";
import { Thunk } from "../../types/Thunk";
import { Todo } from "../../types/Todo";

const initialState: Thunk = {
  todos: [
    {
      id: "1",
      title: "title1",
      content: "content1",
      isDone: false,
    },
    {
      id: "2",
      title: "title2",
      content: "content2",
      isDone: false,
    },
    {
      id: "3",
      title: "title3",
      content: "content3",
      isDone: true,
    },
  ],
  isLoading: false,
  isError: false,
  error: null,
};

export const __fetchTodos = createAsyncThunk(
  "fetchTodos",
  async (payload, thunkAPI) => {
    try {
      const response = await api.get("/todos?_sort=id&_order=desc");
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addTodo = createAsyncThunk(
  "addTodo",
  async (payload: Omit<Todo, "id">, thunkAPI) => {
    try {
      await api.post("/todos", payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteTodo = createAsyncThunk(
  "deleteTodo",
  async (payload: Todo["id"], thunkAPI) => {
    try {
      await api.delete(`/todos/${payload}`);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __switchTodo = createAsyncThunk(
  "switchTodo",
  async (payload: { id: Todo["id"]; isDone: Todo["isDone"] }, thunkAPI) => {
    try {
      await api.patch(`/todos/${payload.id}`, { isDone: !payload.isDone });
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(__fetchTodos.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(__fetchTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.todos = action.payload;
    });
    builder.addCase(__fetchTodos.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.error = action.payload;
    });
  },
});

export const {} = todosSlice.actions;
export default todosSlice.reducer;
