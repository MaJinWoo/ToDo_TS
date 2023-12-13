import { createSlice } from "@reduxjs/toolkit";
import { Todo } from "../../types/Todo";

const initialState: Todo[] = [
  {
    id: 1,
    title: "title1",
    content: "content1",
    isDone: false,
  },
  {
    id: 2,
    title: "title2",
    content: "content2",
    isDone: false,
  },
  {
    id: 3,
    title: "title3",
    content: "content3",
    isDone: true,
  },
];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      return [action.payload, ...state];
    },
    deleteTodo: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    switchTodo: (state, action) => {
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isDone: !item.isDone };
        } else {
          return item;
        }
      });
    },
  },
});

export const { addTodo, deleteTodo, switchTodo } = todosSlice.actions;
export default todosSlice.reducer;
