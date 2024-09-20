import { Router } from 'express';
import { getDataForLanguageAndRank } from '../controllers/locationController';

const router = Router();

// Route that listens for GET requests with language and rank
router.get('/', getDataForLanguageAndRank);

export default router;
