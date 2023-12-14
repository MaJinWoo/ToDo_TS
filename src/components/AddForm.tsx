import { useState } from "react";
import { useTodos } from "../hooks";

type OmitType = Omit<Todo, "id">;

export default function AddForm() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const { addTodo } = useTodos();

  const handleAddTodoSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTodo: OmitType = {
      title,
      content,
      isDone: false,
    };

    try {
      addTodo(newTodo);
    } catch (error) {
      console.log("add 에러 발생:", error);
    }

    setTitle("");
    setContent("");
  };

  return (
    <div>
      <p>TodoList 추가하기</p>
      <form
        onSubmit={(event) => {
          handleAddTodoSubmit(event);
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
