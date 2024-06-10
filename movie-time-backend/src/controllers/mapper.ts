import { Movies } from "../core/movies/types";
import { TMDB } from "../core/tmdb/types";
import { MovieController } from "./types";

export const dbMovieToMovie = (dbMovies: Movies.dbMovie[]): MovieController.Movie[] => {
  return dbMovies.map(toMovie);
};

export const toMovie = (dbMovie: Movies.dbMovie): MovieController.Movie => {
  return {
    id: dbMovie.movie_added_id,
    cover_url: `https://image.tmdb.org/t/p/w200/${dbMovie.movie_cover_url}`,
    description: dbMovie.movie_description,
    genre: dbMovie.genre_name,
    name: dbMovie.movie_name,
    released_date: dbMovie.movie_released_date,
  };
};

export const tmdbMovieDetailsToMovieDetails = (tmdbMovie: TMDB.MovieDetailsResponse): MovieController.MovieDetails => {
  return {
    title: tmdbMovie.title,
    posterPath: `https://image.tmdb.org/t/p/w500/${tmdbMovie.poster_path}`,
    overview: tmdbMovie.overview,
    genres: tmdbMovie.genres.map((genre) => genre.name),
    releaseDate: tmdbMovie.release_date,
    runtime: tmdbMovie.runtime,
    rating: tmdbMovie.vote_average,
    voteCount: tmdbMovie.vote_count,
    homepage: tmdbMovie.homepage,
    productionCompanies: tmdbMovie.production_companies.map((company) => ({
      name: company.name,
      originCountry: company.origin_country,
    })),
  };
};

export const dbMovieWithStatusToMovieDetails = (
  dbMovie: Movies.dbMovieWithWatchStatus,
): MovieController.MovieDetailsWithWatch => {
  const movie = toMovie(dbMovie) as MovieController.MovieDetailsWithWatch;
  movie.is_watched = dbMovie.is_watched;
  movie.cover_url = `https://image.tmdb.org/t/p/w500/${dbMovie.movie_cover_url}`;
  return movie;
};
