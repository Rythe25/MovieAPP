import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AUTH_BASE_URL = process.env.EXPO_PUBLIC_AUTH_API_URL

export const auth = axios.create({
  baseURL: AUTH_BASE_URL,
  timeout: 10000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

auth.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

auth.interceptors.response.use((response) => response, async (error) => {
    if (error.response?.status === 401) {
      await AsyncStorage.removeItem("token");
    }

    return Promise.reject(error);
  },
);
