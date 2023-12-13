import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/config/configStore";
import { deleteTodo, switchTodo } from "../redux/modules/todosSlice";
import { Todo } from "../types/Todo";

type PickType = Pick<Todo, "isDone">;

export default function LetterCard({ isDone }: PickType) {
  const todos = useSelector((state: RootState) => state.todosSlice);
  const dispatch = useDispatch();
  return (
    <div>
      {todos
        .filter(function (t) {
          return t.isDone === isDone;
        })
        .map(function (todo) {
          return (
            <div key={todo.id}>
              <p>{todo.id}</p>
              <p>{todo.title}</p>
              <p>{todo.content}</p>
              <p>{todo.isDone.toString()}</p>
              <button
                onClick={function () {
                  dispatch(deleteTodo(todo.id));
                }}
              >
                삭제
              </button>
              <button
                onClick={function () {
                  dispatch(switchTodo(todo.id));
                }}
              >
                {isDone ? "취소" : "완료"}
              </button>
            </div>
          );
        })}
    </div>
  );
}
