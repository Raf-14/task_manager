// src/routes/userRoutes.ts
import express from 'express';
const {  getProfile , updateProfile, deleteAccount } = require('../controllers/userController');
import { auth } from '../middleware/auth';

const router = express.Router();

// Toutes les routes utilisateur nécessitent une authentification
router.use(auth);

router.get('/profile', getProfile);
router.patch('/profile', updateProfile);
router.delete('/profile', deleteAccount);

export default router;