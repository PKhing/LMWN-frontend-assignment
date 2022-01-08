import axios from "axios";

const config = {
  baseURL: " http://192.168.1.126:3001/api",
};

export const apiClient = axios.create(config);
