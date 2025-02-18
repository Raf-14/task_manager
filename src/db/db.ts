import mongoose from 'mongoose';
import config from '../config/config';

const MongooseDB = async () => {

  try{
      await mongoose.connect(config.MONGODB_URI)
      .then(() => console.log('MongoDB Connected...'))
  } catch(err){
    console.log('MongoDB connection error:',err);
  }
}

export default MongooseDB;