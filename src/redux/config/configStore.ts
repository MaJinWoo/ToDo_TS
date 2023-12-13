import todosSlice from "../modules/todosSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    todosSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
