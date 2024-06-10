import bcrypt from "bcryptjs";
import { insertUser, queryUserByUsername, updateUserToken as dbUpdateUserToken } from "./repo";

export const createNewUser = async (username: string, password: string) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    return insertUser(username, hashedPassword);
  } catch (error) {
    console.error(error);
  }
};

export const findUserByUsername = (username: string) => {
  try {
    return queryUserByUsername(username);
  } catch (error) {
    console.error(error);
  }
};

export const validatePassword = async (password: string, hashedPassword: string) => {
  return await bcrypt.compare(password, hashedPassword);
};

export const updateUserToken = async (userId: string, token: string | null) => dbUpdateUserToken(userId, token);
