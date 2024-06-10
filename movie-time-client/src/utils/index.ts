export const isValidUsername = (username: string): boolean => /^[a-zA-Z0-9]+$/.test(username);
export const isValidPassword = (password: string): boolean => password.length > 4 && password.length < 255;
