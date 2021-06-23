import {Request, Response, NextFunction} from "express";


export function ensure(request: Request, response: Response, next: NextFunction){
    //Verifica se o usuário é um adm
    const admin = true;

    if(admin){
        return next();
    }

    return response.status(401).json({
        error: "Unauthorized user",
    });
}