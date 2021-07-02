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
const websockets_1 = require("@nestjs/websockets");
const core_service_1 = require("../core.service");
const messages_service_1 = require("./messages.service");
const common_1 = require("@nestjs/common");
const constants_1 = require("../constants");
const rxjs_1 = require("rxjs");
let MessagesGateway = class MessagesGateway {
    constructor(messagesService, coreService, coreModuleOptions) {
        this.messagesService = messagesService;
        this.coreService = coreService;
        this.coreModuleOptions = coreModuleOptions;
    }
    async onMessage(data) {
        const userMessage = await this.messagesService.create({
            text: data.text,
            fromUser: true,
        });
        this.io.emit('message', userMessage);
        const [response] = await Promise.all([
            this.coreService.runMessageHandler(userMessage.text),
            new Promise(resolve => setTimeout(resolve, this.coreModuleOptions.responseDelay)),
        ]);
        if (response instanceof rxjs_1.Observable) {
            response.subscribe(text => this.createAndEmitReponse(text));
        }
        else {
            this.createAndEmitReponse(response);
        }
    }
    async createAndEmitReponse(text) {
        const responseMessage = await this.messagesService.create({ text });
        this.io.emit('message', responseMessage);
    }
};
__decorate([
    websockets_1.WebSocketServer(),
    __metadata("design:type", Object)
], MessagesGateway.prototype, "io", void 0);
__decorate([
    websockets_1.SubscribeMessage('message'),
    __param(0, websockets_1.MessageBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MessagesGateway.prototype, "onMessage", null);
MessagesGateway = __decorate([
    websockets_1.WebSocketGateway(),
    __param(2, common_1.Inject(constants_1.CORE_MODULE_OPTIONS)),
    __metadata("design:paramtypes", [messages_service_1.MessagesService,
        core_service_1.CoreService, Object])
], MessagesGateway);
exports.MessagesGateway = MessagesGateway;
//# sourceMappingURL=messages.gateway.js.map