import mongoose, {Schema, Document } from 'mongoose';
import { ITask } from '../types/interface';

/**
 * Modèle Mongoose pour une tâche
 */
const taskSchema = new Schema<ITask>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 100,
    },
    description: {
      type: String,
      trim: true,
      maxlength: 500,
      default: "",
    },
    priority: {
      type: String,
      enum: ["LOW", "MEDIUM", "HIGH"],
      default: "MEDIUM",
    },
    status: {
      type: String,
      enum: ["TODO", "IN_PROGRESS", "COMPLETED"],
      default: "TODO",
    },
    dueDate: {
      type: Date,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Index pour améliorer la performance des requêtes
taskSchema.index({ userId: 1, status: 1 });
taskSchema.index({ dueDate: 1 });

const Task = mongoose.model<ITask>("Task", taskSchema);

export default Task;