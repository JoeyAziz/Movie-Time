import connectionPool from '../config/database';

export interface Movie {
    title: string;
    watched: boolean;
}

export const getAllMovies = async (): Promise<any> => {
    const [rows] = await connectionPool.query('SELECT * FROM Movies');
    return rows;
};

export const addMovie = async (movie: Movie): Promise<any> => {
    const { title, watched } = movie;
    const [result] = await connectionPool.query('INSERT INTO Movies (title, watched) VALUES (?, ?)', [title, watched]);
    return result;
};
