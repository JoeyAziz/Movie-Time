import axios from "axios";
import { API_URL } from ".";
import { Discover } from "../models/discover";

export async function discover(): Promise<Record<string, Discover[]>> {
  console.log(`${API_URL}/movies/discover`)
  const response = await axios.get(`${API_URL}/movies/discover`, {
    withCredentials: true,
  });
  return response.data;
}
