import React from "react";
import useDiscover from "../../hooks/useDiscover";
import { map } from "lodash";
import { Header } from "./Header";

const Landing: React.FC = () => {
  const { data, isLoading } = useDiscover();

  if (isLoading) return <span>LOADING!!</span>;

  return (
    <div className="flex flex-col justify-center gap-4 p-4 md:gap-6">
      <Header />
      {map(data, (items, genre) => (
        <div className="flex flex-col gap-3 md:gap-5">
          <span className="text-xl font-extrabold md:text-4xl">{genre}</span>
          <div className="flex gap-3 pb-4 overflow-x-scroll snap-mandatory snap-x">
            {map(items, (item) => (
              <img
                loading="lazy"
                className="rounded-lg snap-always snap-start w-[150px] h-[150px] md:min-w-[200px] md:w-[200px] md:h-[200px]"
                src={item.cover_url}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Landing;
