import { Request, Response } from "express";
import { ListUserSendComplementsService } from "../service/ListUserSendComplementsService";

class ListUserSendComplementsController{
    async handle( request: Request, response: Response){
        const { user_id } = request;
        
        const listUserSendComplementService = new ListUserSendComplementsService();
        const compliments = await listUserSendComplementService.execute( user_id );

        return response.json(compliments)
    }
}

export {ListUserSendComplementsController}