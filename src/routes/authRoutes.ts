
import express from 'express';
const { register, login, logout } = require ('../controllers/authController');
import { auth } from '../middleware/auth';

const router = express.Router();

// Routes publiques
router.post('/register', register);
router.post('/login', login);

// Routes protégées
router.post('/logout', auth, logout);

export default router;