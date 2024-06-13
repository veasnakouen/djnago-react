// write some interceptor
import axios from "axios";
import { ACCESS_TOKEN } from "./constant";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});
api.interceptors.request.use(
  (config) => {
    // looking at the localStorage we have token or not
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      // make sure there a space between Bearer and ${token}
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
