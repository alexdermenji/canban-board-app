import axios from "axios";

const API_BASE_URL = "https://2a31a5e21232ff9b21865ea.mockapi.io";

const client = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export function fetchTasks() {
  return client.get("/tasks");
}
