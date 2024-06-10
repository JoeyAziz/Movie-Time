import React from "react";
import Login from "../../components/Login";
import Signup from "../../components/Signup";
import Logout from "../../components/Logout";
import { useAuth } from "../../hooks/useAuth";

export const Navbar: React.FC = () => {
  const { username } = useAuth();

  return (
    <div className="font-mono w-screen h-[72px] flex items-center justify-between px-5">
      <div className="text-lg md:text-4xl" key="left">
        [MOVIE.TIME]
      </div>
      {username ? (
        <div className="flex items-center gap-4" key="right">
          <span>{`Hello, @${username} 👋`}</span> | <Logout />
        </div>
      ) : (
        <div className="flex items-center gap-4" key="right">
          <Login />|<Signup />
        </div>
      )}
    </div>
  );
};
