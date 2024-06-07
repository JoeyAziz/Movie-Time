import connectionPool from "../../config/database";
import api from "../../config/tmdbAPI";
import { queryGenres } from "../movies/repo";
import { TMDB } from "./types";

export const populateGenres = async () => {
  const response: { data: TMDB.GenreResponse } = await api.get(
    "genre/movie/list?language=en",
  );

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

export const insertGenresFromTMDB = async (res: TMDB.GenreResponse) => {
  for (const genre of res.genres) {
    await connectionPool.query(
      "INSERT INTO moviedb_genres (original_id,name) VALUES (?,?)",
      [genre.id, genre.name],
    );
  }
};

export const insertMoviesFromTMDB = async (movies: TMDB.DiscoveryResponse) => {
  for (const movie of movies) {
    await connectionPool.query(
      "INSERT INTO moviedb_movies (original_id, genre_original_id, name, description, released_date ,cover_url) VALUES (?, ?, ?, ?, ?, ?)",
      [
        movie.id,
        movie.genre_ids[0],
        movie.title,
        movie.overview,
        movie.release_date,
        movie.poster_path,
      ],
    );
  }
};
