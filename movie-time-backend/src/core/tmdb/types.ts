export namespace TMDB {
  export type GenreResponse = {
    genres: {
      id: number;
      name: string;
    }[];
  };

  export type DiscoveryResponse = {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }[];

  export type MovieDetailsResponse = {
    title: string;
    poster_path: string;
    overview: string;
    genres: {
      name: string;
    }[];
    release_date: string;
    runtime: number;
    vote_average: number;
    vote_count: number;
    homepage: string;
    production_companies: {
      name: string;
      origin_country: string;
    }[];
  };
}
