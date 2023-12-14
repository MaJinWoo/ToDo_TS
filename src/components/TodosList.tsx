import { Todo } from "../App";
import TodoCard from "./TodoCard";

type Props = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  isDone: boolean;
};
export default function TodosList({ todos, setTodos, isDone }: Props) {
  return (
    <div>
      <h2>{isDone ? "DONELIST" : "TODOLIST"}</h2>
      <TodoCard todos={todos} setTodos={setTodos} isDone={isDone} />
    </div>
  );
}
