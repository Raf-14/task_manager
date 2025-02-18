import mongoose, {Schema, Document } from 'mongoose';
import { ITask } from '../types/interface';


//Model of Task

const taskSchema = new Schema<ITask>({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlenght: 100
    },
    description: {
        type: String,
        trim: true,
        maxlenght: 500,
        default: ''
    },
    priority: {
        type: String,
        enum: ['LOW', 'MEDIUM', "HIGH"],
        default: 'MEDIUM'
    },
    status: {
        type: String,
        enum: [ 'TODO', 'IN_PROGRESS', 'COMPLETED'],
        default: 'TODO'
    },
    dueDate: {
        type: Date,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
},
{
    timestamps: true
}
);

// Index pour améliorer les performances des requêtes
taskSchema.index({ userId: 1, status: 1 });
taskSchema.index({ dueDate: 1 });
export default mongoose.model<ITask>('Task', taskSchema);