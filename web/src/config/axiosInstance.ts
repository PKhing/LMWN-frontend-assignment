import axios from "axios";

const config = {
  baseURL: process.env.REACT_APP_API_BASE_URL,
};

export const apiClient = axios.create(config);
