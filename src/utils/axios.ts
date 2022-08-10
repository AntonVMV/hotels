import axios, { AxiosRequestConfig } from "axios";

export const authAxiosInstance = axios.create({
  baseURL: "http://localhost:3002/api/auth",
});

authAxiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
  if (!config.headers) config.headers = {};

  config.headers.Authorization =
    localStorage.getItem("HOTELS_AUTH_TOKEN") || "";

  return config;
});
