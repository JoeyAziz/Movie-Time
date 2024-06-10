import connectionPool from "../../config/database";
import { TMDB } from "./types";

export const insertGenresFromTMDB = async (res: TMDB.GenreResponse) => {
  for (const genre of res.genres) {
    await connectionPool.query("INSERT INTO moviedb_genres (original_id,name) VALUES (?,?)", [genre.id, genre.name]);
  }
};

export const insertMoviesFromTMDB = async (movies: TMDB.DiscoveryResponse) => {
  for (const movie of movies) {
    try {
      await connectionPool.query(
        "INSERT INTO moviedb_movies (original_id, genre_original_id, name, description, released_date ,cover_url) VALUES (?, ?, ?, ?, ?, ?)",
        [movie.id, movie.genre_ids[0], movie.title, movie.overview, movie.release_date, movie.poster_path],
      );
    } catch (error) {
      console.warn("insert_movies_from_tmdb: " + error);
    }
  }
};
