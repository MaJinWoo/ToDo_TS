import api from "../axios/api";
import { Todo } from "../types/Todo";

const fetchTodos = async () => {
  try {
    const response = await api.get("/todos?_sort=id&_order=desc");
    return response.data;
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};

const axiosAddTodo = async (newTodo: Todo) => {
  try {
    await api.post("/todos", newTodo);
  } catch (error) {
    console.log("Error adding data:", error);
  }
};

const axiosDeleteTodo = async (id: Todo["id"]) => {
  try {
    await api.delete(`/todos/${id}`);
  } catch (error) {
    console.log("Error deleteing todo:", error);
  }
};

const axiosSwitchTodo = async (id: Todo["id"], isDone: Todo["isDone"]) => {
  try {
    await api.patch(`/todos/${id}`, {
      isDone: !isDone,
    });
  } catch (error) {
    console.log("Error patching data:", error);
  }
};

export { fetchTodos, axiosAddTodo, axiosDeleteTodo, axiosSwitchTodo };
