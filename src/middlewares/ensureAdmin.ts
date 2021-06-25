import {Request, Response, NextFunction} from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UserRespository";


export async function ensure(request: Request, response: Response, next: NextFunction){
    const { user_id } = request;
    
    const userRepositories = getCustomRepository(UsersRepository);

    const user = await userRepositories.findOne(user_id);
    //Verifica se o usuário é um adm
    
    if(user?.admin){
        return next();
    }

    return response.status(401).json({
        error: "Unauthorized user",
    });
}