import { Document } from 'mongoose';
export declare class Message extends Document {
    text: string;
    fromUser: boolean;
    createdAt: Date;
}
export declare const MessageSchema: import("mongoose").Schema<any>;
