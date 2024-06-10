import React from "react";
import Button from "../../components/Button";
import Login from "../../components/Login";

export const Navbar: React.FC = () => {
  return (
    <div className="font-mono w-screen h-[72px] flex items-center justify-between px-5">
      <div className="text-lg md:text-4xl " key="left">
        [MOVIE.TIME]
      </div>
      <div className="flex items-center gap-4" key="right">
        <Login />|<Button>SIGN UP</Button>
      </div>
    </div>
  );
};
