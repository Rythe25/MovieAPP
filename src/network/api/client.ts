import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_KEY = process.env.TMDB_API_KEY;

export const auth = axios.create({
  baseURL: "https://laravel-auth-api-opal.vercel.app/api",
  timeout: 10000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export const tmdb = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${API_KEY}`
  }
});

auth.interceptors.request.use(async config => {
  // if (config.url === "/login") return config;

  const token = await AsyncStorage.getItem("token");

  if (token) {
    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

auth.interceptors.response.use(
  response => response,
  async error => {
    if (error.response?.status === 401) {
      await AsyncStorage.removeItem("token");
    }

    return Promise.reject(error);
  }
);

