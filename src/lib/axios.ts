import axios from "axios";

const createAxiosInstance = () => {
  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });

  return instance;
};

const api = createAxiosInstance();

export default api;
