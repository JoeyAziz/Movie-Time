export interface Movie {
  id: number;
  cover_url: string;
  description: string;
  genre: string;
  name: string;
  released_date: string;
}

export interface MovieDetails {
  title: string;
  posterPath: string;
  overview: string;
  genres: string[];
  releaseDate: string;
  runtime: number;
  rating: number;
  voteCount: number;
  homepage: string;
  productionCompanies: { name: string; originCountry: string }[];
  is_watched?: boolean;
}
