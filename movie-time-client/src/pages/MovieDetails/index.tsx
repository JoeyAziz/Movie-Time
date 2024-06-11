import React from "react";
import useFetchMovie from "../../hooks/useFetchMovie";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../../components/Spinner";
import Button from "../../components/Button";
import MoveDetailsActions from "./MoveDetailsActions";

const MovieDetails: React.FC = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const { data: movie, isLoading, isError } = useFetchMovie(movieId ?? "");
  const navigate = useNavigate();

  if (isLoading) return <Spinner />;

  if (isError || !movie) {
    navigate("/");
    return <></>;
  }

  return (
    <div className="flex flex-col gap-1 px-5 pt-1">
      <div>
        <Button
          onClick={() => {
            navigate("/");
          }}
          className="mb-2 text-2xl font-bold cursor-pointer"
        >
          Home Page
        </Button>
      </div>
      <div className="flex flex-col gap-3 font-sans md:flex-row">
        <img className="object-cover rounded-xl" src={movie.posterPath} alt={`${movie.title} Poster`} />
        <div className="flex flex-col gap-3">
          <div className="p-4 bg-amber-400 rounded-xl opacity-70 h-fit">
            <h1 className="mb-2 text-2xl font-bold">{movie.title}</h1>

            <p className="mb-4 text-gray-900">{movie.overview}</p>
            <div className="mb-4">
              <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-blue-200 rounded-full">
                {movie.genres.join(", ")}
              </span>
            </div>
            <div className="mb-4 text-sm text-gray-800">
              <p>Release Date: {movie.releaseDate}</p>
              <p>Runtime: {movie.runtime} mins</p>
              <p>
                Rating: {movie.rating} ({movie.voteCount} votes)
              </p>
              <a href={movie.homepage} className="text-blue-700">
                More Info
              </a>
            </div>
            <div className="mb-4 text-sm text-gray-800">
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
          {movieId && <MoveDetailsActions movieId={movieId} is_watched={movie.is_watched} />}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
