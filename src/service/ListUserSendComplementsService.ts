import { getCustomRepository } from "typeorm"
import { ComplimentRepository } from "../repositories/ComplementRepository";


class ListUserSendComplementsService{
    async execute( user_id: string){
        const complementsRepository = getCustomRepository(ComplimentRepository);

        const complements = await complementsRepository.find({
            where: {
                user_sender: user_id
            }
        })
        return complements;
    }
}
export { ListUserSendComplementsService}