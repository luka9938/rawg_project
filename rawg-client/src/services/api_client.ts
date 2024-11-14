import axios from "axios";

const apiClient = axios.create({
  // baseURL: "http://localhost:5001/",
  baseURL: import.meta.env.VITE_API_URL,

  params: {
    key: import.meta.env.VITE_API_KEY,
  },
});

export default apiClient;
