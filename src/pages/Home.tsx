import { useQuery } from "@tanstack/react-query";
import AddForm from "../components/AddForm";
import TodosList from "../components/TodosList";
import { fetchTodos } from "../axios/todos";
import { Todo } from "../types/Todo";

export default function Home() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  if (isLoading) {
    return <div>로딩 중...</div>;
  }
  if (isError) {
    return <div>에러 발생!</div>;
  }

  // 이럴 땐 어떻게 해야 하나요?
  const todoList = data.filter((todo: Todo) => todo.isDone === false);
  const doneList = data.filter((todo: Todo) => todo.isDone === true);

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
