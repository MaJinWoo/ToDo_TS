import api from "../axios/api";
// import api from "@/axios/api";
type NewTodoType = Omit<Todo, "id">;
type SwitchTodoType = Pick<Todo, "id" | "isDone">;

// api 관련 로직
// isAxiosError => error의 타입을 정의
// axios.isAxiosError<> => record 사용

export const fetchTodos = async () => {
  try {
    const response = await api.get("/todos?_sort=id&_order=desc");
    return response.data;
  } catch (error) {
    console.log("error fetching data: ", error);
    return error;
  }
};

export const addTodo = async (newTodo: NewTodoType) => {
  try {
    await api.post("/todos", newTodo);
  } catch (error) {
    console.log("error updating data: ", error);
  }
};

export const deleteTodo = async (id: Todo["id"]) => {
  try {
    await api.delete(`/todos/${id}`);
  } catch (error) {
    console.log("error deleting data: ", error);
  }
};

export const switchTodo = async ({ id, isDone }: SwitchTodoType) => {
  try {
    await api.patch(`/todos/${id}`, {
      isDone: !isDone,
    });
  } catch (error) {
    console.log("error switching data: ", error);
  }
};
