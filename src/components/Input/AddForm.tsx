import { useState } from "react";
import { useTodos } from "../../hooks";
import Button from "../../common/Button";
import { AddFormSection, TitleAndInput, InputWrapper } from "./style";
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

    if (!title || !content) {
      alert("제목과 내용은 필수입니다.");
      return;
    }

    try {
      addTodo(newTodo);
    } catch (error) {
      console.log("add 에러 발생:", error);
    }

    setTitle("");
    setContent("");
  };

  return (
    <AddFormSection
      onSubmit={(event) => {
        handleAddTodoSubmit(event);
      }}
    >
      <TitleAndInput>
        <h1>Add Todo</h1>
        <InputWrapper>
          <label htmlFor="title">제목</label>
          <input
            id="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <label htmlFor="content">내용</label>
          <input
            id="content"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
          <Button type="submit" color="olivedrab" text="추가하기" />
        </InputWrapper>
      </TitleAndInput>
    </AddFormSection>
  );
}
