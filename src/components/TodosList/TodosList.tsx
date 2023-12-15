import Button from "../../common/Button";
import { useTodos } from "../../hooks";
import {
  TodosListSection,
  TodoCardSection,
  TodoCard,
  BtnWrapper,
} from "./style";
export default function TodosList({
  title,
  todos,
}: {
  title: string;
  todos: Todo[];
}) {
  const { deleteTodo, switchTodo } = useTodos();

  const handleDeleteBtnClick = async (id: Todo["id"]) => {
    try {
      deleteTodo(id);
    } catch (error) {
      console.log("delete error", error);
    }
  };

  const handleSwitchBtnClick = async (
    id: Todo["id"],
    isDone: Todo["isDone"]
  ) => {
    try {
      switchTodo(id, isDone);
    } catch (error) {}
  };

  return (
    <TodosListSection>
      <h1>{title}</h1>
      <TodoCardSection>
        {todos?.map((todo) => {
          return (
            <TodoCard key={todo.id}>
              <h2>{todo.title}</h2>
              <p>{todo.content}</p>
              <BtnWrapper>
                <Button
                  type="button"
                  text="삭제"
                  color="salmon"
                  eventHandler={() => handleDeleteBtnClick(todo.id)}
                />
                {todo.isDone ? (
                  <Button
                    type="button"
                    text="취소"
                    color="orange"
                    eventHandler={() =>
                      handleSwitchBtnClick(todo.id, todo.isDone)
                    }
                  />
                ) : (
                  <Button
                    type="button"
                    text="완료"
                    color="limegreen"
                    eventHandler={() =>
                      handleSwitchBtnClick(todo.id, todo.isDone)
                    }
                  />
                )}
              </BtnWrapper>
            </TodoCard>
          );
        })}
      </TodoCardSection>
    </TodosListSection>
  );
}
