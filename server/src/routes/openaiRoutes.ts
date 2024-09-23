import { Router } from 'express';
import {practiceLanguage, chat, getQuestions} from '../controllers/openaiController';

const router = Router();

// Route that listens for GET requests with language and rank
router.post('/practice', practiceLanguage);
router.post('/chat', chat);
router.get('/american-questions', getQuestions);

export default router;