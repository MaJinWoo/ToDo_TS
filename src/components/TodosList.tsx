import { useDispatch } from "react-redux";
import { Todo } from "../types/Todo";
import { AppDispatch } from "../redux/config/configStore";
import {
  __deleteTodo,
  __fetchTodos,
  __switchTodo,
} from "../redux/modules/todosSlice";

export default function TodosList({
  title,
  todos,
}: {
  title: string;
  todos: Todo[];
}) {
  const dispatch = useDispatch<AppDispatch>();

  const handleDeleteBtnClick = async (id: Todo["id"]) => {
    try {
      await dispatch(__deleteTodo(id));
      await dispatch(__fetchTodos());
    } catch (error) {
      console.log("delete error", error);
    }
  };

  const handleSwitchBtnClick = async (
    id: Todo["id"],
    isDone: Todo["isDone"]
  ) => {
    try {
      await dispatch(__switchTodo({ id, isDone }));
      await dispatch(__fetchTodos());
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
