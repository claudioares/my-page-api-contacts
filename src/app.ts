import fastify, { FastifyInstance } from "fastify"
import { CreteEvents } from "./routes/create.messege.client";
import { GetMesseges } from "./routes/getMesseges.client";
import { getMessegeId } from "./routes/getMessege.client.id";
import cors from "@fastify/cors";


export class App {
    private app: FastifyInstance;
    constructor() {
        this.app = fastify()
    }


    listen(){
        this.app.listen({port:3333}).then(()=>console.log("HTTP Server running..."));
    };

    register(){
        this.app.register(cors, {
            origin: true,
            methods: ['GET', 'POST']
        })
        this.app.register(CreteEvents);
        this.app.register(GetMesseges);
        this.app.register(getMessegeId);
    }
}