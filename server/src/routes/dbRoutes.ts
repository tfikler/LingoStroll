import { Router } from 'express';
import { getUser, addUser, loginUserOrRegister } from '../controllers/dbController';

const router = Router();

// Route that listens for GET requests with language and rank
router.get('/getUser', getUser);
router.post('/addUser', addUser);
router.post('/login', loginUserOrRegister);

export default router;