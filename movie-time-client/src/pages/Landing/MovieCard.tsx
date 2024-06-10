import React, { useCallback } from "react";
import { Movie } from "../../models/movie";

interface MovieCardProps {
  data: Movie;
}

export const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
  const formatName = useCallback((name: string) => {
    if (name.length > 34) return name.substring(0, 34) + "...";
    return name;
  }, []);

  return (
    <div className="flex flex-col hover:scale-105 focus:scale-105 active:scale-95">
      <img
        loading="lazy"
        className="cursor-pointer rounded-t-xl snap-always snap-start min-w-[100px] w-[100px] h-[150px] md:min-w-[150px] md:w-[150px] md:h-[200px]"
        src={data.cover_url}
      />
      <div className="p-1 flex flex-col rounded-b-lg bg-yellow-500 bg-opacity-70 min-w-[100px] w-[100px] h-[40px] md:min-w-[150px] md:w-[150px] md:h-[40px]">
        <span className="font-sans text-sm leading-none">{formatName(data.name)}</span>
      </div>
    </div>
  );
};
