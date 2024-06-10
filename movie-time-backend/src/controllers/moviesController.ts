import {
  listAllMovies,
  addMovieToWatchlist,
  deleteMovieFromWatchlist,
  hasUserWatchedMovie,
} from "../core/movies/service";
import { getMovieDetails } from "../core/tmdb/service";
import { dbMovieToMovie, tmdbMovieDetailsToMovieDetails, tmdbMovieDetailsToMovieDetailsWithWatch } from "./mapper";
import { MovieController } from "./types";

export const discover = async (): Promise<Record<string, MovieController.Movie[]>> => {
  const movies = dbMovieToMovie(await listAllMovies());
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

export const movieDetailsForUser = async (userId: string, movieId: string) => {
  const details = await getMovieDetails(movieId);
  if (details) {
    const mappedDetails = tmdbMovieDetailsToMovieDetailsWithWatch(details);
    const watchedMovie = await hasUserWatchedMovie(userId, movieId);
    mappedDetails.is_watched = watchedMovie;
    return mappedDetails;
  }

  throw new Error("Could not get the movie details");
};

export const movieDetails = async (movieId: string) => {
  const details = await getMovieDetails(movieId);
  if (details) return tmdbMovieDetailsToMovieDetails(details);
  throw new Error("Could not get the movie details");
};

export const addToWatchlist = async (userId: string, movieId: string): Promise<void> => {
  await addMovieToWatchlist(userId, movieId);
};

export const removeFromWatchlist = async (userId: string, movieId: string): Promise<void> => {
  await deleteMovieFromWatchlist(userId, movieId);
};
