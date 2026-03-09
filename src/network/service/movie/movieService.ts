import { tmdb } from "../../api/movieClient";

export const fetchTrendingMovies = async () => {
  const response = await tmdb.get("/trending/movie/day");
  console.log("=== FETCH TRENDING MOVIES");
  // console.log(tmdb.defaults.headers);
  return response.data.results.slice(0, 10); // top 10
};

export const fetchMovies = async (category: string) => {
  const response = await tmdb.get(`/movie/${category}`);
  console.log("=== FETCH MOVIES");
  // console.log(tmdb.defaults.headers);
  return response.data.results;
};
