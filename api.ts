import { ITask } from "./types/task";

//const baseUrl = "https://jsonplaceholder.typicode.com/users";
const baseUrl="http://localhost:3000/tasks"
//const baseUrl= "todo";
//const baseUrl="https://mocki.io/v1/dae98e00-40b7-447c-ada0-b27eb0c568a1";
export const getAllTodos = async (): Promise<ITask[]> => {
  const res = await fetch(`${baseUrl}`, { cache: "no-store" });
  const todos = await res.json();
  return todos;
};

export const addTodo = async (todo: ITask): Promise<ITask> => {
  const res = await fetch(`${baseUrl}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const newTodo = await res.json();
  return newTodo;
};

export const editTodo = async (todo: ITask): Promise<ITask> => {
  const res = await fetch(`${baseUrl}/${todo.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const updatedTodo = await res.json();
  return updatedTodo;
};

export const deleteTodo = async (id: string): Promise<void> => {
  await fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
  });
};
