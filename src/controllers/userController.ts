// src/controllers/userController.ts
import { Request, Response } from 'express';
import User from '../models/Users';


  // Obtenir le profil de l'utilisateur connecté
  export const getProfile = async (req: Request & { user?: any }, res: Response) => {
    try {
      const user = await User.findById(req.user?._id).select('-password');
      if (!user) {
        return res.status(404).json({ error: 'Utilisateur non trouvé' });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: 'Erreur lors de la récupération du profil' });
    }
  }

  // Mettre à jour le profil
  export const updateProfile = async (req: Request & { user?: any }, res: Response) =>{
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'last_name', 'email', 'password'];
    const isValidOperation = updates.every(update => allowedUpdates.includes(update));

    if (!isValidOperation) {
      return res.status(400).json({ error: 'Mises à jour invalides' });
    }

    try {
      const user = await User.findById(req.user?._id);
      if (!user) {
        return res.status(404).json({ error: 'Utilisateur non trouvé' });
      }

      updates.forEach(update => {
        if (req.body[update] !== undefined) {
          (user as any)[update] = req.body[update];
        }
      });

      await user.save();
      res.json(user);
    } catch (error) {
      res.status(400).json({ error: 'Erreur lors de la mise à jour du profil' });
    }
  }

  // Supprimer le compte
  export const deleteAccount = async (req: Request & { user?: any }, res: Response) => {
    try {
      const user = await User.findByIdAndDelete(req.user?._id);
      if (!user) {
        return res.status(404).json({ error: 'Utilisateur non trouvé' });
      }
      res.clearCookie('token');
      res.json({ message: 'Compte supprimé avec succès' });
    } catch (error) {
      res.status(500).json({ error: 'Erreur lors de la suppression du compte' });
    }
  }
