import { RowDataPacket } from "mysql2";
import connectionPool from "../../config/database";
import { Movies } from "./types";

export const queryGenres = async (): Promise<Movies.Genre[]> => {
  const [rows] = await connectionPool.query("SELECT * FROM moviedb_genres");
  return rows as Movies.Genre[];
};

export const queryMovies = async (): Promise<Movies.dbMovie[]> => {
  const [rows] = await connectionPool.query(
    "SELECT \
      m.added_id AS movie_added_id, \
      m.original_id AS movie_original_id, \
      m.genre_original_id AS movie_genre_original_id, \
      m.name AS movie_name, \
      m.description AS movie_description, \
      m.released_date AS movie_released_date, \
      m.cover_url AS movie_cover_url, \
      m.createdAt AS movie_createdAt, \
      m.updatedAt AS movie_updatedAt, \
      g.added_id AS genre_added_id, \
      g.original_id AS genre_original_id, \
      g.name AS genre_name, \
      g.createdAt AS genre_createdAt, \
      g.updatedAt AS genre_updatedAt \
  FROM  \
      moviedb_movies m \
  JOIN \
      moviedb_genres g ON m.genre_original_id = g.original_id",
  );
  return rows as Movies.dbMovie[];
};

export const queryMovieByAddedID = async (movieId: string) => {
  try {
    const [rows] = await connectionPool.query<RowDataPacket[]>("SELECT * FROM moviedb_movies WHERE added_id = ?", [
      movieId,
    ]);
    if (rows.length === 0) {
      return undefined;
    }

    return rows[0];
  } catch (error) {
    console.error("query_move_from_tmdb: " + error);
    return undefined;
  }
};

export const queryMoviesWithWatchStatus = async (
  userId: string,
  movieId: string,
): Promise<Movies.dbMovieWithWatchStatus | undefined> => {
  try {
    const [rows] = await connectionPool.query<RowDataPacket[]>(
      "SELECT \
      m.added_id AS movie_added_id, \
      m.original_id AS movie_original_id, \
      m.genre_original_id AS movie_genre_original_id, \
      m.name AS movie_name, \
      m.description AS movie_description, \
      m.released_date AS movie_released_date, \
      m.cover_url AS movie_cover_url, \
      m.createdAt AS movie_createdAt, \
      m.updatedAt AS movie_updatedAt, \
      g.added_id AS genre_added_id, \
      g.original_id AS genre_original_id, \
      g.name AS genre_name, \
      g.createdAt AS genre_createdAt, \
      g.updatedAt AS genre_updatedAt, \
      IF(uw.user_id IS NOT NULL, TRUE, FALSE) AS is_watched \
    FROM moviedb_movies m \
    JOIN moviedb_genres g ON m.genre_original_id = g.original_id \
    LEFT JOIN users_watch uw ON m.added_id = uw.movie_id AND uw.user_id = ? \
    WHERE m.added_id = ?",
      [userId, movieId],
    );

    if (rows.length === 0) {
      return undefined;
    }

    return rows[0] as Movies.dbMovieWithWatchStatus;
  } catch (error) {
    console.error("query_move_from_tmdb: " + error);
    return undefined;
  }
};

export const insertMovieToWatchlist = async (userId: string, movieId: string): Promise<void> => {
  await connectionPool.query("INSERT INTO users_watch (user_id, movie_id) VALUES (?, ?)", [userId, movieId]);
};

export const removeMovieFromWatchlist = async (userId: string, movieId: string): Promise<void> => {
  await connectionPool.query("DELETE FROM users_watch WHERE user_id = ? AND movie_id = ?", [userId, movieId]);
};
