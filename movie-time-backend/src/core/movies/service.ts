import { insertMovieToWatchlist, queryMovies, queryUserWatchedMovie, removeMovieFromWatchlist } from "./repo";

export const listAllMovies = () => queryMovies();

export const hasUserWatchedMovie = async (userId: string, movieId: string) => {
  return await queryUserWatchedMovie(userId, movieId);
};

export const addMovieToWatchlist = (userId: string, movieId: string) => insertMovieToWatchlist(userId, movieId);

export const deleteMovieFromWatchlist = (userId: string, movieId: string) => {
  return removeMovieFromWatchlist(userId, movieId);
};
