"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const basic_dialogs_module_1 = require("./basic-dialogs/basic-dialogs.module");
const notes_module_1 = require("./notes/notes.module");
const bored_module_1 = require("./bored/bored.module");
const jokes_module_1 = require("./jokes/jokes.module");
const open_browser_service_1 = require("./open-browser/open-browser.service");
let SkillsModule = class SkillsModule {
};
SkillsModule = __decorate([
    common_1.Module({
        imports: [
            basic_dialogs_module_1.BasicDialogsModule,
            bored_module_1.BoredModule,
            jokes_module_1.JokesModule,
            notes_module_1.NotesModule,
        ],
        providers: [open_browser_service_1.OpenBrowserService]
    })
], SkillsModule);
exports.SkillsModule = SkillsModule;
//# sourceMappingURL=skills.module.js.map