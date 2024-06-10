import axios from "axios";
import { API_URL } from ".";

export async function signup(username: string, password: string) {
  const response = await axios.post(
    `${API_URL}/auth/signup`,
    {
      username,
      password,
    },
    {
      withCredentials: true,
    },
  );
  return response.data;
}

export async function login(username: string, password: string) {
  const response = await axios.post(
    `${API_URL}/auth/login`,
    {
      username,
      password,
    },
    {
      withCredentials: true,
    },
  );
  return response.data;
}
