import { useTodoQuery } from "../query";
import { useEffect, useState } from "react";

// 실제 UI에 로직을 부여하는 부분

export const useTodos = () => {
  const { todos, addTodoMutation, deleteTodoMutation, switchTodoMutation } =
    useTodoQuery();

  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [doneList, setDoneList] = useState<Todo[]>([]);

  const addTodo = (newTodo: Omit<Todo, "id">) => {
    addTodoMutation.mutate(newTodo);
  };

  const deleteTodo = (id: Todo["id"]) => {
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      return deleteTodoMutation.mutate(id);
    } else {
      return;
    }
  };

  const switchTodo = (id: Todo["id"], isDone: Todo["isDone"]) => {
    switchTodoMutation.mutate({ id, isDone });
  };

  useEffect(() => {
    setTodoList(todos?.filter((todo: Todo) => todo.isDone === false));
    setDoneList(todos?.filter((todo: Todo) => todo.isDone === true));
  }, [todos]);

  return { addTodo, deleteTodo, switchTodo, todoList, doneList };
};
