import axios from "axios";

const API_BASE_URL = "https://62a31a5e21232ff9b21865ea.mockapi.io";

const client = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export function fetchTasks() {
  return client.get("/tasks");
}

export function createTask(params) {
  return client.post("/tasks", params);
}

export function editTask(id, params) {
  return client.put(`/tasks/${id}`, params);
}
export function deleteTasks(id) {
  return client.delete(`/tasks/${id}`);
}
