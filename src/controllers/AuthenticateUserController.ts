import { Request, response, Response } from "express"
import { AuthenticateUserService } from "../service/AuthenticateUserService"

class AuthenticateUserController{
    async handle(request: Request, response: Response){
        const { email, password } = request.body;
        const authenticateUserService = new AuthenticateUserService();

        const token = await authenticateUserService.execute({
            email,
            password,
        });

        return response.json({
            message: "User Authenticated"
        })
    }
}

export { AuthenticateUserController }