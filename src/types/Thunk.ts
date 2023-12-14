import { Todo } from "./Todo";

export type Thunk = {
  todos: Todo[];
  isLoading: boolean;
  isError: boolean;
  error: unknown;
};
