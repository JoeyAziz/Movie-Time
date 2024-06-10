import { createContext, useContext, useState } from "react";
import useLogin from "../hooks/useLogin";

interface AuthContextProps {
  username?: string;
  login: (username: string, password: string, onSuccess?: () => void) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const savedUsername = sessionStorage.getItem("session");
  const { mutate: loginAPI } = useLogin();
  const [username, setUsername] = useState<string | undefined>(savedUsername ? atob(savedUsername) : undefined);

  const login = (username: string, password: string, onSuccess?: () => void) => {
    loginAPI(
      { username, password },
      {
        onSuccess: () => {
          setUsername(username);
          sessionStorage.setItem("session", btoa(username));
          onSuccess?.();
        },
      },
    );
  };

  const logout = () => {
    setUsername(undefined);
    sessionStorage.clear();
    document.location.href = "/";
  };

  return <AuthContext.Provider value={{ username, login, logout }}>{children}</AuthContext.Provider>;
};
