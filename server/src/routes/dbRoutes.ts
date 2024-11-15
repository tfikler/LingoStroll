import { Router } from 'express';
import { getUser, addUser, loginUserOrRegister, increaseUserScore, getAllUsers } from '../controllers/dbController';

const router = Router();

// Route that listens for GET requests with language and rank
router.get('/getUser', getUser);
router.post('/addUser', addUser);
router.post('/login', loginUserOrRegister);
router.post('/increase-score', increaseUserScore);
router.get('/users', getAllUsers);

export default router;