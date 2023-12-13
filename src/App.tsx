import { useState } from "react";
import AddForm from "./components/AddForm";
import LetterList from "./components/LetterList";
export type Todo = {
  id: number;
  title: string;
  content: string;
  isDone: boolean;
};
function App() {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      title: "title1",
      content: "content1",
      isDone: false,
    },
    {
      id: 2,
      title: "title2",
      content: "content2",
      isDone: false,
    },
    {
      id: 3,
      title: "title3",
      content: "content3",
      isDone: true,
    },
  ]);
  return (
    <div>
      <header>Todo List</header>
      <main>
        <AddForm todos={todos} setTodos={setTodos} />
        <LetterList todos={todos} setTodos={setTodos} isDone={false} />
        <LetterList todos={todos} setTodos={setTodos} isDone={true} />
      </main>
    </div>
  );
}

export default App;
