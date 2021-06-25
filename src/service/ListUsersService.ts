import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm"
import { UsersRepository } from "../repositories/UserRespository"


class ListUserService{
    async execute(){
        const userRespository = getCustomRepository(UsersRepository);
        
        const users = await userRespository.find();

        return classToPlain(users);
    }
}

export { ListUserService }