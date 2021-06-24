import { getCustomRepository } from "typeorm"
import { ComplimentRepository } from "../repositories/ComplementRepository"
import { UsersRepository } from "../repositories/UserRespository";

interface IComplimentRequest{
    tag_id: string;
    user_sender: string;
    user_receiver: string;
    message: string;
}


class CreateComplimentService{
    async execute({ tag_id, user_sender, user_receiver, message} : IComplimentRequest){
        const complimentsRepositories = getCustomRepository(ComplimentRepository);
        const usersRepositories = getCustomRepository(UsersRepository);

        if(user_sender === user_receiver){
            throw new Error("Incorrect User Receiver"); 
        }

        const userReceiverExists = await usersRepositories.findOne({
            id: user_receiver
        })

        if(!userReceiverExists){
            throw new Error("User Receiver does not Exists");
        }

        const compliment = complimentsRepositories.create({
            tag_id,
            user_receiver,
            user_sender,
            message
        })

        await complimentsRepositories.save(compliment)

        return compliment
        
    }
}

export { CreateComplimentService}