import axios from "axios";
import { API_URL } from ".";
import { Movie, MovieDetails } from "../models/movie";

export async function discover(): Promise<Record<string, Movie[]>> {
  const response = await axios.get(`${API_URL}/movies/discover`, {
    withCredentials: true,
  });
  return response.data;
}

export async function fetchDetails(movieId: string): Promise<MovieDetails> {
  const response = await axios.get(`${API_URL}/movies/${movieId}/details`, {
    withCredentials: true,
  });
  return response.data;
}

export async function addToWatchlist(movieId: string): Promise<void> {
  await axios.post(
    `${API_URL}/movies/${movieId}/watchlist`,
    {},
    {
      withCredentials: true,
    },
  );
}

export async function removeFromWatchlist(movieId: string): Promise<void> {
  await axios.delete(`${API_URL}/movies/${movieId}/watchlist`, {
    withCredentials: true,
  });
}
