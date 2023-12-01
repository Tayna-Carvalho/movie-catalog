import express from 'express';
import userRoutes from './routes/users.js';
import favoritesRoutes from './routes/favorites.js';
import watchedRoutes from './routes/watched.js';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());
app.use('/user', userRoutes);
app.use('/favorites', favoritesRoutes);
app.use('/watched', watchedRoutes);
app.listen(8800);
