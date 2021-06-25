import { Request, Response } from "express";
import { ListUserReceiveComplementsService } from "../service/ListUserReceivesComplementsService";

class ListUserReceiveComplementsController{
    async handle( request: Request, response: Response){
        const { user_id } = request;
        
        const listUserReceiveComplementService = new ListUserReceiveComplementsService();

        const compliments = await listUserReceiveComplementService.execute( user_id );

        return response.json(compliments)
    }
}

export {ListUserReceiveComplementsController}