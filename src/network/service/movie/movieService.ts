import { tmdb } from "../../api/movieClient";

export const fetchTrendingMovies = async () => {
  try {
    const response = await tmdb.get("/trending/movie/day");
    return response.data.results.slice(0, 10);
  } catch (error) {
    console.log("Error fetching trending movies:", error);
    throw error;
  }
};

export const fetchMovies = async (category: string) => {
  try {
    const response = await tmdb.get(`/movie/${category}`);
    return response.data.results;
  } catch (error) {
    console.log(`Error fetching movies for category "${category}":`, error);
    throw error;
  }
};

export const fetchMovieDetail = async (movieId: number) => {
  try {
    const response = await tmdb.get(`/movie/${movieId}`);
    return response.data;
  } catch (error) {
    console.log(`Error fetching movie detail for id ${movieId}:`, error);
    throw error;
  }
};

export const fetchMovieReviews = async (movieId: number) => {
  try {
    const response = await tmdb.get(`/movie/${movieId}/reviews`);
    return response.data.results;
  } catch (error) {
    console.log(`Error fetching movie reviews for id ${movieId}:`, error);
    throw error;
  }
};

export const fetchMovieCast = async (movieId: number) => {
  try {
    const response = await tmdb.get(`/movie/${movieId}/credits`);
    return response.data.cast;
  } catch (error) {
    console.log(`Error fetching movie cast for id ${movieId}:`, error);
    throw error;
  }
};