import React from "react";
import useDiscover from "../../hooks/useDiscover";
import { map } from "lodash";

const Landing: React.FC = () => {
  const { data, isLoading } = useDiscover();

  if (isLoading) return <span>LOADING!!</span>;

  return (
    <div className="flex flex-col justify-center">
      {map(data, (items, genre) => (
        <div className="flex flex-col gap-1 ">
          <h1>{genre}</h1>
          <div className="flex gap-2 overflow-x-scroll">
            {map(items, (item) => (
              <img
                width={200}
                height={200}
                src={`https://image.tmdb.org/t/p/w200//${item.cover_url}`}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Landing;
