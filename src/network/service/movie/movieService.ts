import { tmdb } from "../../api/client";

export const fetchTrendingMovies = async () => {
  const response = await tmdb.get("/trending/movie/day");
  console.log("=== FETCH TRENDING MOVIES");
  return response.data.results.slice(0,10); // top 10
};

export const fetchMovies = async (category: string) => {
  const response = await tmdb.get(`/movie/${category}`);
  console.log("=== FETCH MOVIES");
  return response.data.results;
};