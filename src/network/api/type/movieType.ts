export interface RouteParams {
  movieId: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface MovieDetail {
  id: number;
  title: string;
  backdrop_path: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
  runtime: number;
  overview: string;
  genres: Genre[];
}

export interface AuthorDetails {
  avatar_path: string | null;
  rating: number | null;
}

export interface Review {
  id: string;
  author: string;
  content: string;
  author_details: AuthorDetails;
}

export interface Cast {
  id: number;
  name: string;
  profile_path: string | null;
}