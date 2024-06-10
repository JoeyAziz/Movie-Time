export namespace Movies {
  export interface Genre {
    added_id: number;
    original_id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
  }

  export interface dbMovie {
    movie_added_id: number;
    movie_original_id: number;
    movie_genre_added_id: number;
    movie_name: string;
    movie_description: string;
    movie_released_date: string;
    movie_cover_url: string;
    movie_createdAt: string;
    movie_updatedAt: string;
    genre_original_id: number;
    genre_name: string;
    genre_createdAt: string;
    genre_updatedAt: string;
  }

  export interface dbMovieWithWatchStatus extends dbMovie {
    is_watched: boolean;
  }
}
