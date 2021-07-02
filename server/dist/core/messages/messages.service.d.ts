import { Model } from "mongoose";
import { Message } from "./message.schema";
export declare class MessagesService {
    private messageModel;
    constructor(messageModel: Model<Message>);
    create(data: {
        text: string;
        fromUser?: boolean;
    }): Promise<Message>;
}
