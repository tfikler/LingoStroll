import { Router } from 'express';
import { practiceLanguage } from '../controllers/openaiController';

const router = Router();

// Route that listens for GET requests with language and rank
router.post('/practice', practiceLanguage);

export default router;