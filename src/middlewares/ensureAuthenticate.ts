import {Request, Response, NextFunction} from "express";
import { verify } from "jsonwebtoken";

interface IPayload{
    sub: string;
}

export function ensureAuthenticated(
    request: Request, 
    response: Response, 
    next: NextFunction
    ){
        //Receber o token
    const authToken = request.headers.authorization

        //Validar se o token esta preenchido

    if(!authToken){
        return response.status(401).end();
    }

    const [, token] = authToken.split(" ")
        //Validar se o token é valido
    try{
        const { sub } = verify(token, "55d9189e564f29905855bd4cfc52289f") as IPayload;
        
        request.user_id = sub;
        
        return next();

    }catch(err){
        return response.status(401).end

    }
        

}