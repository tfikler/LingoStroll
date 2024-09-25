import { Router } from 'express';
import {getDataForLanguageAndRank, updateUserWithUsedQuestions} from '../controllers/locationController';

const router = Router();

// Route that listens for GET requests with language and rank
router.get('/', getDataForLanguageAndRank);
router.post('/used-questions', updateUserWithUsedQuestions);

export default router;
