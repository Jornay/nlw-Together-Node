import { Exclude } from "class-transformer";
import {Column, CreateDateColumn, Entity, Exclusion, PrimaryColumn} from "typeorm";
import {v4 as uuid} from "uuid"

@Entity("users")
class User {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Exclude()
    @Column()
    password: string;
    
    @Column()
    email: string;

    @Column()
    admin: boolean;

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    updated_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}

export { User }; 