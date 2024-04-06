import { IMessegeClient } from "../interfaces/interfaces";
import { RepositorieMesseges } from "../repositorie/repositorie";
import { z } from "zod";

export class UsecaseMessegeClient {
    private repositorie: RepositorieMesseges;
    constructor(){
        this.repositorie = new RepositorieMesseges()
    }


    async create(data:IMessegeClient){

        const dataMessegeSchema = z.object({
            name: z.string().min(4),
            email: z.string(),
            messege: z.string(),
        });


        const _data = dataMessegeSchema.parse(data);

        const resultRepositorie = await this.repositorie.create(_data);

        const {name, email} = _data;

        return resultRepositorie;
    };

    async getMesseges () {
        const resultRepositorie = await this.repositorie.getMesseges();

        return resultRepositorie;
    }

    async getMessegeId (id:string) {

        if(!id){return "Incomplete parameters!"};


        const resultRepositorie = await this.repositorie.getMessegeId(id);

        return resultRepositorie;

    }
}