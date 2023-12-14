import { useDispatch } from "react-redux";
import { Todo } from "../types/Todo";
import { deleteTodo, switchTodo } from "../redux/modules/todosSlice";

type IdType = Todo["id"];

export default function TodosList({
  title,
  todos,
}: {
  title: string;
  todos: Todo[];
}) {
  const dispatch = useDispatch();
  const handleDeleteBtnClick = (id: IdType) => {
    dispatch(deleteTodo(id));
  };
  const handleSwitchBtnClick = (id: IdType) => {
    dispatch(switchTodo(id));
  };
  return (
    <div>
      <h2>{title}</h2>
      {todos.map((todo) => {
        return (
          <ul>
            <li>{todo.title}</li>
            <li>{todo.content}</li>
            <li>{todo.isDone.toString()}</li>
            <button onClick={() => handleDeleteBtnClick(todo.id)}>삭제</button>
            <button onClick={() => handleSwitchBtnClick(todo.id)}>
              {todo.isDone ? "취소" : "완료"}
            </button>
          </ul>
        );
      })}
    </div>
  );
}
