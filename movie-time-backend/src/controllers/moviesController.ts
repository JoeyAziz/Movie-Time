import { ListAllMovies } from "../core/movies/service";
import { getMovieDetails } from "../core/tmdb/service";
import { dbMovieToMovie, tmdbMovieDetailsToMovieDetails } from "./mapper";
import { MovieController } from "./types";

export const discover = async (): Promise<Record<string, MovieController.Movie[]>> => {
  const movies = dbMovieToMovie(await ListAllMovies());
  const res: Record<string, MovieController.Movie[]> = {};
  movies.forEach((movie) => {
    if (!res?.[movie.genre]) {
      res[movie.genre] = [movie];
    } else {
      res[movie.genre].push(movie);
    }
  });
  return res;
};

export const movieDetailsForUser = async (userId: string, movieId: string) => {};

export const moveDetails = async (movieId: string) => {
  const details = await getMovieDetails(movieId);
  if (details) return tmdbMovieDetailsToMovieDetails(details);
  throw new Error("Could not get the movie details");
};
