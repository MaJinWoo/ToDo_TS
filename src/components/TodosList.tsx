import { useTodos } from "../hooks";

export default function TodosList({
  title,
  todos,
}: {
  title: string;
  todos: Todo[];
}) {
  const { deleteTodo, switchTodo } = useTodos();

  const handleDeleteBtnClick = async (id: Todo["id"]) => {
    try {
      deleteTodo(id);
    } catch (error) {
      console.log("delete error", error);
    }
  };

  const handleSwitchBtnClick = async (
    id: Todo["id"],
    isDone: Todo["isDone"]
  ) => {
    try {
      switchTodo(id, isDone);
    } catch (error) {}
  };

  return (
    <div>
      <h2>{title}</h2>
      {todos?.map((todo) => {
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
