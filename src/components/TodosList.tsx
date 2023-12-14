import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Todo } from "../types/Todo";
import { deleteTodo, switchTodo } from "../axios/todos";

export default function TodosList({
  title,
  todos,
}: {
  title: string;
  todos: Todo[];
}) {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
  const switchMutation = useMutation({
    mutationFn: switchTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const handleDeleteBtnClick = async (id: Todo["id"]) => {
    try {
      deleteMutation.mutate(id);
    } catch (error) {
      console.log("delete error", error);
    }
  };

  const handleSwitchBtnClick = async (
    id: Todo["id"],
    isDone: Todo["isDone"]
  ) => {
    try {
      // 전달할 때 묶어서 전달!!
      switchMutation.mutate({ id, isDone });
    } catch (error) {}
  };

  return (
    <div>
      <h2>{title}</h2>
      {todos.map((todo) => {
        return (
          <ul key={todo.id}>
            <li>{todo.title}</li>
            <li>{todo.content}</li>
            <li>{todo.isDone.toString()}</li>
            <button onClick={() => handleDeleteBtnClick(todo.id)}>삭제</button>
            <button onClick={() => handleSwitchBtnClick(todo.id, todo.isDone)}>
              {todo.isDone ? "취소" : "완료"}
            </button>
          </ul>
        );
      })}
    </div>
  );
}
