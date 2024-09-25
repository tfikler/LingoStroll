import { Router } from 'express';
import { speakWord, speakSentence } from '../controllers/ttsController';

const router = Router();


router.post('/speak-word', speakWord)
router.post('/speak-sentence', speakSentence)


export default router;