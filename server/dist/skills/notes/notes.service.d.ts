import { Model } from 'mongoose';
import { Note } from './note.schema';
export declare class NotesService {
    private noteModel;
    constructor(noteModel: Model<Note>);
    saveNote(myNote?: string): Promise<string | {
        text: string;
        nextCallback: (text: string) => Promise<string | any>;
    }>;
    searchNotes(searchQuery?: string): Promise<string | import("rxjs").Observable<string>>;
    getAllNotes(): Promise<import("rxjs").Observable<string> | "You have no notes">;
}
