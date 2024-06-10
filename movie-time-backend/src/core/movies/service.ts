import { insertMovieToWatchlist, queryMovies, queryMoviesWithWatchStatus, removeMovieFromWatchlist } from "./repo";

export const listAllMovies = () => queryMovies();

export const listMoviesWithWatchStatusForUser = async (userId: string, movieId: string) => {
  return await queryMoviesWithWatchStatus(userId, movieId);
};

export const addMovieToWatchlist = (userId: string, movieId: string) => insertMovieToWatchlist(userId, movieId);

export const deleteMovieFromWatchlist = (userId: string, movieId: string) => {
  return removeMovieFromWatchlist(userId, movieId);
};
