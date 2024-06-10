import React from "react";
import useDiscover from "../../hooks/useDiscover";
import { Header } from "./Header";
import { Navbar } from "./Navbar";
import { GenreSections } from "./GenreSections";

const Landing: React.FC = () => {
  const { data, isLoading } = useDiscover();

  if (isLoading) return <span>LOADING!!</span>;

  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center gap-4 p-4 md:gap-6">
        <Header />
        <GenreSections data={data} />
      </div>
    </div>
  );
};

export default Landing;
