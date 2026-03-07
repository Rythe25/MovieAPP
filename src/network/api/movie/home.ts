import axios from "axios";

const API_KEY = process.env.EXPO_PUBLIC_TMDB_API_KEY;

// console.log("TMDB KEY:", API_KEY);
const tmdb = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${API_KEY}`
  }
});

export const fetchTrendingMovies = async () => {
  const response = await tmdb.get("/trending/movie/day");
  return response.data.results.slice(0,10); // top 10
};

export const fetchMovies = async (category: string) => {
  const response = await tmdb.get(`/movie/${category}`);
  return response.data.results;
};