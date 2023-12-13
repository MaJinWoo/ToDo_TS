import { Todo } from "../App";
import LetterCard from "./LetterCard";

type Props = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  isDone: boolean;
};
export default function LetterList({ todos, setTodos, isDone }: Props) {
  return (
    <div>
      <h2>{isDone ? "DONELIST" : "TODOLIST"}</h2>
      <LetterCard todos={todos} setTodos={setTodos} isDone={isDone} />
    </div>
  );
}
