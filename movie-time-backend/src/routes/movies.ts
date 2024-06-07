import express, { Request, Response } from 'express';
import {addMovie, getAllMovies} from '../controllers/moviesController';

const router = express.Router();

router.get('/', async (_: Request, res: Response) => {
    try {
        const result = await getAllMovies();
        res.json(result);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/', async (req: Request, res: Response) => {
    try {
        const { title, watched } = req.body;
        const result = await addMovie({ title, watched });
        res.status(201).json(result);
    } catch (error: any) {
        res.status(500).json({ error });
    }
});

export default router;
