import { queryMovies } from "../core/movies/repo";
import { dbMovieToMovie } from "./mapper";
import { MovieController } from "./types";

export const discover = async (): Promise<
  Record<string, MovieController.Movie[]>
> => {
  const movies = dbMovieToMovie(await queryMovies());
  const res: Record<string, MovieController.Movie[]> = {};
  movies.forEach((movie) => {
    if (!res[movie.genre]) {
      res[movie.genre] = [];
    }
    if (res[movie.genre].length < 10) {
      res[movie.genre].push(movie);
    }
    res[movie.genre] = res[movie.genre];
  });
  return res;
};
