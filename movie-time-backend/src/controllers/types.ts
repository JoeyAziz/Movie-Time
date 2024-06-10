export namespace MovieController {
  export interface Movie {
    id: number;
    genre: string;
    name: string;
    description: string;
    released_date: string;
    cover_url: string;
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
  }

  export interface MovieDetailsWithWatch extends MovieDetails {
    is_watched: boolean;
  }
}
