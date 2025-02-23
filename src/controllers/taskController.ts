// src/controllers/taskController.ts
import { Request, Response } from 'express';
import Task from '../models/Task';

interface AuthRequest extends Request {
    user?: any;
}


/**
 * Créer une nouvelle tâche
 * 
 */
export const createTask = async (req: AuthRequest, res: Response) => {
    console.log("Tentative de création de tâche", req.body);
  
    try {
      const task = new Task({
        ...req.body,
        userId: req.user._id, // Ajout de l'ID utilisateur depuis le token
      });
  
      await task.save();
      res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ error: 'Erreur lors de la création de la tâche' });
        console.error("Erreur lors de la création de la tâche", error);
  
      if (error) {
        return res.status(400).json({ errors: error });
      }
  
      res.status(500).json({ error: "Erreur serveur lors de la création de la tâche" });
    }
  };

    // Obtenir toutes les tâches de l'utilisateur
    export const getTasks = async (req: AuthRequest, res: Response) => {
        try {
            const match: any = { userId: req.user._id };
            const sort: any = {};

            // Filtrage par status
            if (req.query.status) {
                match.status = req.query.status;
            }

            // Filtrage par priorité
            if (req.query.priority) {
                match.priority = req.query.priority;
            }

            // Tri
            if (req.query.sortBy) {
                const parts = (req.query.sortBy as string).split(':');
                sort[parts[0]] = parts[1] === 'desc' ? -1 : 1;
            }

            const tasks = await Task.find(match)
                .sort(sort)
                .limit(parseInt(req.query.limit as string) || 10)
                .skip(parseInt(req.query.skip as string) || 0);

            res.json(tasks);
        } catch (error) {
            res.status(500).json({ error: 'Erreur lors de la récupération des tâches' });
        }
    }

    // Obtenir une tâche spécifique
    export const getTask = async (req: AuthRequest, res: Response) =>{
        try {
            const task = await Task.findOne({
                _id: req.params.id,
                userId: req.user._id
            });

            if (!task) {
                return res.status(404).json({ error: 'Tâche non trouvée' });
            }

            res.json(task);
        } catch (error) {
            res.status(500).json({ error: 'Erreur lors de la récupération de la tâche' });
        }
    }

    // Mettre à jour une tâche
    export const updateTask = async (req: AuthRequest, res: Response) => {
        const updates = Object.keys(req.body);
        const allowedUpdates = ['title', 'description', 'status', 'priority', 'dueDate'];
        const isValidOperation = updates.every(update => allowedUpdates.includes(update));

        if (!isValidOperation) {
            return res.status(400).json({ error: 'Mises à jour invalides' });
        }

        try {
            const task = await Task.findOne({
                _id: req.params.id,
                userId: req.user._id
            });

            if (!task) {
                return res.status(404).json({ error: 'Tâche non trouvée' });
            }

            updates.forEach(update => {
                if (req.body[update] !== undefined) {
                    (task as any)[update] = req.body[update];
                }
            });

            await task.save();
            res.json(task);
        } catch (error) {
            res.status(400).json({ error: 'Erreur lors de la mise à jour de la tâche' });
        }
    }

    // Supprimer une tâche
    export const deleteTask = async (req: AuthRequest, res: Response) => {
        try {
            const task = await Task.findOneAndDelete({
                _id: req.params.id,
                userId: req.user._id
            });

            if (!task) {
                return res.status(404).json({ error: 'Tâche non trouvée' });
            }

            res.json({ message: 'Tâche supprimée avec succès' });
        } catch (error) {
            res.status(500).json({ error: 'Erreur lors de la suppression de la tâche' });
        }
    }
