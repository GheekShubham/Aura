"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const core_1 = require("../../core");
const note_schema_1 = require("./note.schema");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
let NotesService = class NotesService {
    constructor(noteModel) {
        this.noteModel = noteModel;
    }
    async saveNote(myNote) {
        if (!myNote) {
            return {
                text: `Write the note you want to save`,
                nextCallback: (text) => this.saveNote(text),
            };
        }
        const note = new this.noteModel();
        note.text = myNote;
        await note.save();
        return `Your note "${myNote}" has been saved!`;
    }
    async searchNotes(searchQuery) {
        const notes = await this.noteModel.find({
            text: { $regex: searchQuery || '', $options: 'i' },
        });
        if (!notes.length) {
            return `No notes about "${searchQuery}" were found`;
        }
        const response$ = rxjs_1.of(`I found ${notes.length} note${notes.length > 1 ? 's' : ''} about "${searchQuery}"!`, ...notes.map(note => note.text)).pipe(operators_1.concatMap(text => rxjs_1.of(text).pipe(operators_1.delay(500))));
        return response$;
    }
    async getAllNotes() {
        const notes = await this.noteModel.find();
        if (!notes.length) {
            return `You have no notes`;
        }
        const response$ = rxjs_1.of(`I found ${notes.length} note${notes.length > 1 ? 's' : ''}!`, ...notes.map(note => note.text)).pipe(operators_1.concatMap(text => rxjs_1.of(text).pipe(operators_1.delay(500))));
        return response$;
    }
};
__decorate([
    core_1.MessageHandler([
        'Save note %myNote%',
        'Keep note %myNote%',
    ]),
    __param(0, core_1.TrimEntity('myNote', {
        afterFirst: 'note',
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotesService.prototype, "saveNote", null);
__decorate([
    core_1.MessageHandler([
        'Find notes about %searchQuery%',
        'Look for notes about %searchQuery%',
    ]),
    __param(0, core_1.TrimEntity('searchQuery', {
        afterFirst: 'about',
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotesService.prototype, "searchNotes", null);
__decorate([
    core_1.MessageHandler([
        'Find my notes',
        'Find all my notes',
        'Get all my notes',
    ]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NotesService.prototype, "getAllNotes", null);
NotesService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(note_schema_1.Note.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], NotesService);
exports.NotesService = NotesService;
//# sourceMappingURL=notes.service.js.map