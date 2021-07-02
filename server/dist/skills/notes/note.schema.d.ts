import { Document } from 'mongoose';
export declare class Note extends Document {
    text: string;
    createdAt: Date;
}
export declare const NoteSchema: import("mongoose").Schema<any>;
