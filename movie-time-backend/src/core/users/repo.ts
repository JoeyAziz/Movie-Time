import connectionPool from "../../config/database";
import { User } from "./type";

export const insertUser = async (username: string, password: string) => {
  const [result] = await connectionPool.query("INSERT INTO users (username, password) VALUES (?, ?)", [
    username,
    password,
  ]);
  return result;
};

export const queryUserByUsername = async (username: string) => {
  const [rows] = await connectionPool.query("SELECT * FROM users WHERE username = ?", [username]);
  return (rows as User[])[0] as User;
};

export const updateUserToken = async (userId: string, token: string | null): Promise<void> => {
  await connectionPool.query("UPDATE users SET token = ? WHERE added_id = ?", [token, userId]);
};
