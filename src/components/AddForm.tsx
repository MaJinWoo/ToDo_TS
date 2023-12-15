import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTodos } from "../redux/modules/todosSlice";
import { RootState } from "../redux/config/configStore";
import { axiosAddTodo, fetchTodos } from "../axios/todos";
import { Todo } from "../types/Todo";

export default function AddForm() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const todos = useSelector((state: RootState) => state.todosSlice);

  const dispatch = useDispatch();

  const handleAddTodoSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo = {
      id: todos.length + 1,
      title,
      content,
      isDone: false,
    };
    try {
      await axiosAddTodo(newTodo);
      await fetchTodos().then((data: Todo[]) => dispatch(setTodos(data)));
    } catch (error) {}
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
