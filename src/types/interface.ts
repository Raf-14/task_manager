import mongoose, { Document } from 'mongoose';

// interface of application
export interface ConfigTypes {
    PORT: string | number;
    MONGODB_URI: string ;
    JWT_SECRET: string | undefined;
}


export interface ITask extends Document {
    title: string;
    description: string;
    priority: 'LOW' | 'MEDIUM' | 'HIGH' ;
    status: 'TODO' | 'IN_PROGRESS' | 'COMPLETED';
    dueDate: Date;
    userId: mongoose.Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}

export interface IUser extends Document {
    name: string;
    last_name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    comparePassword(candidatePassword: string): Promise<boolean>;
}

