import express from 'express';
import movieRoutes from './routes/movies';
import healthRoutes from './routes/health';

const app = express();

app.use(express.json());
app.use('/health', healthRoutes);
app.use('/api/movies', movieRoutes);

export default app;
