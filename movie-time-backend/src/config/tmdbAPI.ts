import axios from "axios";

const tmdbAPIAxios = axios.create({
  baseURL: process.env.TMDB_API_URL,
  responseType: "json",
  headers: {
    Authorization: `Bearer ${process.env.TMDB_READ_ACCESS_TOKEN}`,
  },
  params: {
    api_key: process.env.TMDB_API_KEY,
  },
});

export default tmdbAPIAxios;
