import { useSelector } from "react-redux";
import AddForm from "../components/AddForm";
import TodosList from "../components/TodosList";
import { RootState } from "../redux/config/configStore";

export default function Home() {
  const todos = useSelector((state: RootState) => state.todosSlice);
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
