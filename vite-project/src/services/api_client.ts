import axios from "axios";

const apiClient = axios.create({
  // baseURL: "https://api.rawg.io/api",
  baseURL: "http://localhost:5000/",

  params: {
    key: import.meta.env.VITE_API_KEY,
  },
});

export default apiClient;
