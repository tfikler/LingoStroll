import { Router } from 'express';
import { getUser, addUser } from '../controllers/dbController';

const router = Router();

// Route that listens for GET requests with language and rank
router.get('/getUser', getUser);
router.post('/addUser', addUser);

export default router;