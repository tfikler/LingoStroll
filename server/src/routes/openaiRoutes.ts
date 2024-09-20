import { Router } from 'express';
import { practiceLanguage, chat } from '../controllers/openaiController';

const router = Router();

// Route that listens for GET requests with language and rank
router.post('/practice', practiceLanguage);
router.post('/chat', chat);

export default router;