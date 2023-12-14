import { useDispatch, useSelector } from "react-redux";
import AddForm from "../components/AddForm";
import TodosList from "../components/TodosList";
import { AppDispatch, RootState } from "../redux/config/configStore";
import { useEffect } from "react";
import { __fetchTodos } from "../redux/modules/todosSlice";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();

  const { todos, isLoading, isError, error } = useSelector(
    (state: RootState) => state.todosSlice
  );

  useEffect(() => {
    dispatch(__fetchTodos());
  }, []);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }
  if (isError) {
    return <div>에러 발생!</div>;
  }

  const todoList = todos.filter((todo) => todo.isDone === false);
  const doneList = todos.filter((todo) => todo.isDone === true);

  return (
    <div>
      <header>Todo List</header>
      <main>
        <AddForm />
        <TodosList title={"진행중.."} todos={todoList} />
        <TodosList title={"완료!"} todos={doneList} />
      </main>
    </div>
  );
}
