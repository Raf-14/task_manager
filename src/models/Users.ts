import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcrypt';
import { IUser } from '../types/interface';

const userSchema = new Schema({
    name: { 
        type: String, 
        required: true,
        minlength: 3,
        maxlength: 50,
        lowercase: true,
        trim: true,
    },
    last_name: { 
        type: String, 
        required: true, 
        minlength: 3,
        maxlength: 50,
        lowercase: true,
        trim: true,
    },
    email: { 
        type: String, 
        required: true, 
        unique: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        lowercase: true,
        trim: true,
    },
    password: { 
        type: String, 
        required: true,
        minlength: 8,
        maxlength: 100,
        match: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    }
}, {
    timestamps: true  // Ceci va automatiquement gérer createdAt et updatedAt
});

// Correction du middleware de hachage du mot de passe
userSchema.pre('save', async function(this: IUser, next) {
    if (!this.isModified('password')) return next();

    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    }
    catch(error) {
        next(error as Error);
    }
});

// Méthode de comparaison des mots de passe
userSchema.methods.comparePassword = async function(this: IUser, candidatePassword: string): Promise<boolean> {
    return bcrypt.compare(candidatePassword, this.password);
};

// Ajout d'index pour optimiser les performances
userSchema.index({ email: 1 }, { unique: true });

export default mongoose.model<IUser>('User', userSchema);