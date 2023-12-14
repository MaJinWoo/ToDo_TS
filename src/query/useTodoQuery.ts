import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addTodo, deleteTodo, fetchTodos, switchTodo } from "../axios/todos";
import { queryKeys } from "./queryKeys";

// 리액트 쿼리 관련된 로직 (쿼리 + mutation)

export const useTodoQuery = () => {
  const queryClient = useQueryClient();

  //query
  const {
    data: todos,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [queryKeys.todos],
    queryFn: fetchTodos,
  });

  //Mutation

  const addTodoMutation = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.todos] });
    },
  });

  const deleteTodoMutation = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.todos] });
    },
  });

  const switchTodoMutation = useMutation({
    mutationFn: switchTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.todos] });
    },
  });

  return {
    todos,
    isLoading,
    isError,
    addTodoMutation,
    deleteTodoMutation,
    switchTodoMutation,
  };
};
