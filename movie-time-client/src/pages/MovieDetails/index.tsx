import React from "react";
import useFetchMovie from "../../hooks/useFetchMovie";

const MovieDetails: React.FC = () => {
  const { data: movie } = useFetchMovie("12");

  if (!movie) return <></>;

  return (
    <div className="max-w-md p-4 m-4 overflow-hidden bg-white rounded shadow-lg md:max-w-lg lg:max-w-xl">
      <img className="object-cover w-full h-56 mb-4" src={movie.posterPath} alt={`${movie.title} Poster`} />
      <div>
        <h1 className="mb-2 text-2xl font-bold">{movie.title}</h1>
        <p className="mb-4 text-gray-700">{movie.overview}</p>
        <div className="mb-4">
          <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-blue-200 rounded-full">
            {movie.genres.join(", ")}
          </span>
        </div>
        <div className="mb-4 text-sm text-gray-500">
          <p>Release Date: {movie.releaseDate}</p>
          <p>Runtime: {movie.runtime} mins</p>
          <p>
            Rating: {movie.rating} ({movie.voteCount} votes)
          </p>
          <a href={movie.homepage} className="text-blue-500">
            More Info
          </a>
        </div>
        <div className="mb-4 text-sm text-gray-500">
          <p>Production Companies:</p>
          <ul className="ml-4 list-disc">
            {movie.productionCompanies.map((company, index) => (
              <li key={index}>
                {company.name} ({company.originCountry})
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
