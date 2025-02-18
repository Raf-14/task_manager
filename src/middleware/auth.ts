import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/Users';
import { IUser } from '../types/interface';

interface IAutRequest extends Request {
    user?: IUser;
    token?: string;
}

export const auth = async ( req: IAutRequest, res: Response, next: NextFunction)  =>{

    try {
        const token = req.cookies.token || req.header('Authorization')?.replace('Barrer', '');
        if(!token){
            throw new Error('Authentification required');
        }


        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: string};
        const user = await User.findById(decoded.userId);

        if(!user){
            throw new Error('User not found');
        }
    }
    catch(err){
    }
}
