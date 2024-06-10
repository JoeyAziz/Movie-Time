import { createNewUser, findUserByUsername, validatePassword } from "../core/users/service";
import { User } from "../core/users/type";

export const signup = async (username: string, password: string): Promise<User> => {
  const existingUser = await findUserByUsername(username);
  if (existingUser) {
    throw new Error("User already exists");
  }

  const userId = await createNewUser(username, password);
  if (!userId) {
    throw new Error("Something went wrong");
  }

  const user = await findUserByUsername(username);
  if (!user) {
    throw new Error("Something went wrong");
  }

  return user;
};

export const login = async (username: string, password: string): Promise<User> => {
  const user = await findUserByUsername(username);
  if (!user) {
    throw new Error("User doesn't exists");
  }
  const isValidPassword = await validatePassword(password, user.password);
  if (!isValidPassword) {
    throw new Error("Wrong password");
  }
  return user;
};
