import LetterCard from "./LetterCard";
import { Todo } from "../types/Todo";

type PickType = Pick<Todo, "isDone">;

export default function LetterList({ isDone }: PickType) {
  return (
    <div>
      <h2>{isDone ? "DONELIST" : "TODOLIST"}</h2>
      <LetterCard isDone={isDone} />
    </div>
  );
}
