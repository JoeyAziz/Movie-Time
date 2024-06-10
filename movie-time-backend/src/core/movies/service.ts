import { insertMovieToWatchlist, queryMovies, removeMovieFromWatchlist } from "./repo";

export const ListAllMovies = () => queryMovies();

export const addMovieToWatchlist = (userId: string, movieId: string) => insertMovieToWatchlist(userId, movieId);

export const deleteMovieFromWatchlist = (userId: string, movieId: string) => {
  return removeMovieFromWatchlist(userId, movieId);
};
