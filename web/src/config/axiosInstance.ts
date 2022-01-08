import axios from "axios";

const config = {
  baseURL: "http://localhost:3001/api",
};

export const apiClient = axios.create(config);
