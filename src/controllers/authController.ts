// src/controllers/authController.ts
import { Request, Response } from 'express';
import User from '../models/Users';
import jwt from 'jsonwebtoken';


  // Inscription
  export const register = async (req: Request, res: Response) => {
    try {
      const { name, last_name, email, password } = req.body;

      // Vérifier si l'utilisateur existe déjà
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: 'Email déjà utilisé' });
      }

      // Créer le nouvel utilisateur
      const user = new User({
        name,
        last_name,
        email,
        password
      });

      await user.save();

      // Générer le token
      const token = jwt.sign(
        { userId: user._id },
        process.env.JWT_SECRET as string,
        { expiresIn: '24h' }
      );

      // Envoyer la réponse sans le mot de passe
      res.status(201).json({
        user: {
          id: user._id,
          name: user.name,
          last_name: user.last_name,
          email: user.email
        },
        token
      });
    } catch (error) {
      res.status(400).json({ error: 'Erreur lors de l\'inscription' });
    }
  }

  // Connexion
export const login =  async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      // Trouver l'utilisateur
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ error: 'Email ou mot de passe incorrect' });
      }

      // Vérifier le mot de passe
      const isValidPassword = await user.comparePassword(password);
      if (!isValidPassword) {
        return res.status(401).json({ error: 'Email ou mot de passe incorrect' });
      }

      // Générer le token
      const token = jwt.sign(
        { userId: user._id },
        process.env.JWT_SECRET as string,
        { expiresIn: '24h' }
      );

      // Définir le cookie
      res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 24 * 60 * 60 * 1000 // 24 heures
      });

      res.json({
        user: {
          id: user._id,
          name: user.name,
          last_name: user.last_name,
          email: user.email
        },
        token
      });
    } catch (error) {
      res.status(400).json({ error: 'Erreur lors de la connexion' });
    }
  }

  // Déconnexion
export const logout =  async (req: Request, res: Response) => {
    try {
      res.clearCookie('token');
      res.json({ message: 'Déconnexion réussie' });
    } catch (error) {
      res.status(500).json({ error: 'Erreur lors de la déconnexion' });
    }
  }
