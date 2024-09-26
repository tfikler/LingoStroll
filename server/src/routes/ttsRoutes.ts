import { Router } from 'express';
import { speakWord, speakSentence } from '../controllers/ttsController';

const router = Router();


router.post('/speak-word', speakWord)


export default router;