import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/modules/todosSlice";
import { RootState } from "../redux/config/configStore";

export default function AddForm() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const todos = useSelector((state: RootState) => state.todosSlice);
  const dispatch = useDispatch();
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
          dispatch(addTodo(newTodo));
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
