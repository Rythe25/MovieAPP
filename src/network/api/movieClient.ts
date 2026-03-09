import axios from "axios";

const API_KEY = process.env.EXPO_PUBLIC_TMDB_API_KEY;
const MOVIE_BASE_URL = process.env.EXPO_PUBLIC_MOVIE_API_URL;

export const tmdb = axios.create({
  baseURL: MOVIE_BASE_URL,
  headers: {
    Authorization: `Bearer ${API_KEY}`
  }
});
