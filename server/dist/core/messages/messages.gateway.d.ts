import { Server } from "socket.io";
import { CoreService } from "../core.service";
import { MessagesService } from "./messages.service";
import { CoreModuleOptions } from "../core.module";
export declare class MessagesGateway {
    private messagesService;
    private coreService;
    private coreModuleOptions;
    constructor(messagesService: MessagesService, coreService: CoreService, coreModuleOptions: CoreModuleOptions);
    io: Server;
    onMessage(data: any): Promise<void>;
    createAndEmitReponse(text: string): Promise<void>;
}
