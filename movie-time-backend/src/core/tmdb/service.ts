import api from "../../config/tmdbAPI";
import { queryGenres, queryMovieByAddedID } from "../movies/repo";
import { insertGenresFromTMDB, insertMoviesFromTMDB } from "./repo";
import { TMDB } from "./types";

export const populateGenres = async () => {
  const response: { data: TMDB.GenreResponse } = await api.get("/genre/movie/list?language=en");

  await insertGenresFromTMDB(response.data);
};

export const populateMovies = async () => {
  const genres = await queryGenres();

  for (const genre of genres) {
    const response = await api.get("/discover/movie", {
      params: {
        with_genres: genre.original_id,
      },
    });
    await insertMoviesFromTMDB(response.data.results);
  }
};

export const getMovieDetails = async (movieId: string) => {
  try {
    const movie = await queryMovieByAddedID(movieId);
    if (!movie) {
      throw new Error("Movie was not found");
    }

    const response: { data: TMDB.MovieDetailsResponse } = await api.get(`/movie/${movie.original_id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
