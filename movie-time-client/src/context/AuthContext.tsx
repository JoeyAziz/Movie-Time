import { createContext, useState } from "react";
import useLogin from "../hooks/useLogin";
import useSignup from "../hooks/useSignup";

interface AuthContextProps {
  username?: string;
  singup: (username: string, password: string, onSuccess?: () => void) => void;
  login: (username: string, password: string, onSuccess?: () => void) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const savedUsername = sessionStorage.getItem("session");
  const { mutate: signupAPI } = useSignup();
  const { mutate: loginAPI } = useLogin();
  const [username, setUsername] = useState<string | undefined>(savedUsername ? atob(savedUsername) : undefined);

  const singup = (username: string, password: string, onSuccess?: () => void) => {
    signupAPI(
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

  return <AuthContext.Provider value={{ username, singup, login, logout }}>{children}</AuthContext.Provider>;
};
