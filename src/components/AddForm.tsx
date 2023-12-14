import { useState } from "react";
import { Todo } from "../types/Todo";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTodo } from "../axios/todos";

type OmitType = Omit<Todo, "id">;
export default function AddForm() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
  const handleAddTodoSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo: OmitType = {
      title,
      content,
      isDone: false,
    };
    try {
      mutation.mutate(newTodo);
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
