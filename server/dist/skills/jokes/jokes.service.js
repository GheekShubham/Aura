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
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("../../core");
let JokesService = class JokesService {
    constructor(http) {
        this.http = http;
    }
    async tellJoke() {
        const { data } = await this.http.get('https://official-joke-api.appspot.com/jokes/random').toPromise();
        return {
            text: data.setup,
            nextCallback: () => data.punchline,
        };
    }
};
__decorate([
    core_1.MessageHandler([
        'Tell me a joke',
        'Tell jokes',
        'Say something funny',
    ]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], JokesService.prototype, "tellJoke", null);
JokesService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [common_1.HttpService])
], JokesService);
exports.JokesService = JokesService;
//# sourceMappingURL=jokes.service.js.map