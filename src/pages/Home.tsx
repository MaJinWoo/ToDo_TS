import { useTodos } from "../hooks";
import AddForm from "../components/AddForm";
import TodosList from "../components/TodosList";
import { useTodoQuery } from "../query";

export default function Home() {
  const { isLoading, isError } = useTodoQuery();
  const { todoList, doneList } = useTodos();

  if (isLoading) {
    return <div>로딩 중...</div>;
  }
  if (isError) {
    return <div>에러 발생!</div>;
  }

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
