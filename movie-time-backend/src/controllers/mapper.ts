import { Movies } from "../core/movies/types";
import { MovieController } from "./types";

export const dbMovieToMovie = (
  dbMovies: Movies.dbMovie[],
): MovieController.Movie[] => {
  return dbMovies.map(ToMovie);
};

export const ToMovie = (dbMovie: Movies.dbMovie): MovieController.Movie => {
  return {
    id: dbMovie.movie_added_id,
    cover_url: `https://image.tmdb.org/t/p/w200/${dbMovie.movie_cover_url}`,
    description: dbMovie.movie_description,
    genre: dbMovie.genre_name,
    name: dbMovie.movie_name,
    released_date: dbMovie.movie_released_date,
  };
};
