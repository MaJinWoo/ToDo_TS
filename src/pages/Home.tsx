import { useTodos } from "../hooks";
// import AddForm from "../components/AddForm";
// import TodosList from "../components/TodosList";
import { AddForm } from "../components/Input";
import { TodosList } from "../components/TodosList";
import { useTodoQuery } from "../query";
import styled from "styled-components";

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
    <Container>
      <header>Todo List</header>
      <main>
        <AddForm />
        <TodosList title={"진행중... 🔥"} todos={todoList} />
        <TodosList title={"완료! ✅"} todos={doneList} />
      </main>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  & header {
    border-radius: 10px;
    height: 40px;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: lightyellow;
  }
`;
