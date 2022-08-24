import axios, { AxiosRequestConfig } from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://hotels-backend.herokuapp.com/api",
});

axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
  if (!config.headers) config.headers = {};

  config.headers.Authorization =
    localStorage.getItem("HOTELS_AUTH_TOKEN") || "";

  return config;
});
