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
    setTodos: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { setTodos } = todosSlice.actions;
export default todosSlice.reducer;
