import { ConfigTypes } from '../types/interface';

const config: ConfigTypes = {
    PORT: process.env.PORT || 3000,
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb+srv://task_manager:5ccW4dBqvc2P1bM>@cluster0.e4laf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    JWT_SECRET: process.env.JWT_SECRET || 'api-key'
}


export default config