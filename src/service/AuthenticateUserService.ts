import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UserRespository";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken"



interface IAuthenticateRequest{
    email : string,
    password: string,
}

class AuthenticateUserService {
    async execute( {email , password } : IAuthenticateRequest){
        const userRepository = getCustomRepository(UsersRepository);
        //Verifica se o email existe
        const user = await userRepository.findOne({email});

        if(!user){
            throw new Error("Email/Password Incorrect")
        }
        //Verifica se senha esta correta
        const passwordMatch = await compare(password,user.password);

        if(!passwordMatch){
            throw new Error("Email/Password Incorrect")
        }
        //Gerar Token

        const token = sign({
            email : user.email
        }, "55d9189e564f29905855bd4cfc52289f", {
            subject : user.id,
            expiresIn: "1d"
        });

        return token;
    }
}

export { AuthenticateUserService }