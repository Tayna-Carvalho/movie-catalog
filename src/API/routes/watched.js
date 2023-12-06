import express from 'express';
import { getWatched, addWatched, deleteWatched } from '../controllers/watched.js';
const router = express.Router();
router.get('/', getWatched);
router.post('/', addWatched);
router.delete('/:idUser/:idMedia', deleteWatched);
export default router;
