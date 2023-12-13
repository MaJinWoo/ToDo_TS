import { useState } from "react";
import { Todo } from "../App";
type Props = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};
export default function AddForm({ todos, setTodos }: Props) {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  return (
    <div>
      <p>TodoList 추가하기</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const newTodo = {
            id: todos.length + 1,
            title,
            content,
            isDone: false,
          };
          setTodos([...todos, newTodo]);
          setTitle("");
          setContent("");
        }}
      >
        <label>제목</label>
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label>내용</label>
        <input
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <button type="submit">추가하기</button>
      </form>
    </div>
  );
}
