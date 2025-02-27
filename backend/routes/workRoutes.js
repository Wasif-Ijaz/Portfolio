import express from 'express';
const router = express.Router();
import {
  addWork,
  updateWork,
  deleteWork,
  workById,
  works
} from '../controllers/workController.js';

router.get('/', works);
router.get('/:id', workById);
router.post('/', addWork);
router.put('/update/:id', updateWork);
router.delete('/delete/:id', deleteWork);

export default router;
