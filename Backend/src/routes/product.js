import express from "express";
import { create, getAll, getDetail, remove, update } from '../controllers/product.js';

const router = express.Router();

router.get('/', getAll)
router.get('/:id', getDetail)
router.post('/create', create)
router.put('/update/:id', update)
router.delete('/remove/:id', remove)


export default router;