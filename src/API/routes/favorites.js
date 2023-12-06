import express from 'express';
import { getFavorites, addFavorites, deleteFavorites } from '../controllers/favorites.js';
const router = express.Router();
router.get('/', getFavorites);
router.post('/', addFavorites);
router.delete('/:idUser/:idMedia', deleteFavorites);
export default router;