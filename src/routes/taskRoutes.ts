// src/routes/taskRoutes.ts
import express from 'express';
const  { createTask, getTasks, getTask, updateTask, deleteTask} = require ('../controllers/taskController');
import { auth } from '../middleware/auth';

const router = express.Router();

// Toutes les routes de tâches nécessitent une authentification
router.use(auth);

// Routes CRUD pour les tâches
router.post('/', createTask);
router.get('/', getTasks);
router.get('/:id', getTask);
router.patch('/:id', updateTask);
router.delete('/:id', deleteTask);

export default router;