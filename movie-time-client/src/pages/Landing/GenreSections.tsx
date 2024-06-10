import { map } from "lodash";
import React from "react";
import { GenreList } from "./GenreList";
import { Movie } from "../../models/movie";

interface GenreSectionsProps {
  data?: Record<string, Movie[]>;
}

export const GenreSections: React.FC<GenreSectionsProps> = ({ data }) => {
  return (
    <>
      {map(data, (items, genre) => (
        <GenreList key={genre} genre={genre} movies={items} />
      ))}
    </>
  );
};
