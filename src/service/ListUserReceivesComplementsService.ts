import { getCustomRepository } from "typeorm"
import { ComplimentRepository } from "../repositories/ComplementRepository";


class ListUserReceiveComplementsService{
    async execute( user_id: string){
        const complementsRepository = getCustomRepository(ComplimentRepository);

        const complements = await complementsRepository.find({
            where: {
                user_receiver: user_id
            },
            relations: [ "userSender", "userReceiver", "tag"]
        })
        return complements;
    }
}
export { ListUserReceiveComplementsService}