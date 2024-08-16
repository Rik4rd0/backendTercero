import express from 'express';
import { createTercero, deleteTercero, getAllTercero, getTercero, updateTercero } from '../controllers/terceroControllers.js';

const router = express.Router();

router.get('/', getAllTercero);
router.get('/:id', getTercero);
router.post('/', createTercero);
router.put('/:id', updateTercero);
router.delete('/:id', deleteTercero);

export default router;
