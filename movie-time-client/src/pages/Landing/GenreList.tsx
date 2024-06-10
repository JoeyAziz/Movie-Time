import React from "react";
import { Movie } from "../../models/movie";
import { map } from "lodash";
import { MovieCard } from "./MovieCard";

interface GenreSectionProps {
  genre: string;
  movies: Movie[];
}

export const GenreList: React.FC<GenreSectionProps> = ({ genre, movies }) => {
  return (
    <div className="flex flex-col gap-3 md:gap-5">
      <span className="text-xl font-extrabold md:text-4xl">{genre}</span>
      <div className="flex w-full gap-3 p-1 m-2 overflow-x-scroll overflow-y-hidden snap-mandatory snap-x">
        {map(movies, (item) => (
          <MovieCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};
