"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var CoreModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const discovery_1 = require("@nestjs-plus/discovery");
const mongoose_1 = require("@nestjs/mongoose");
const nlp_service_1 = require("./nlp/nlp.service");
const core_service_1 = require("./core.service");
const messages_gateway_1 = require("./messages/messages.gateway");
const message_schema_1 = require("./messages/message.schema");
const messages_service_1 = require("./messages/messages.service");
const constants_1 = require("./constants");
let CoreModule = CoreModule_1 = class CoreModule {
    static register(options) {
        return {
            module: CoreModule_1,
            imports: [
                mongoose_1.MongooseModule.forFeature([{ name: message_schema_1.Message.name, schema: message_schema_1.MessageSchema }]),
                discovery_1.DiscoveryModule,
            ],
            providers: [
                { provide: constants_1.CORE_MODULE_OPTIONS, useValue: options },
                nlp_service_1.NlpService,
                messages_service_1.MessagesService,
                messages_gateway_1.MessagesGateway,
                core_service_1.CoreService,
            ]
        };
    }
};
CoreModule = CoreModule_1 = __decorate([
    common_1.Module({})
], CoreModule);
exports.CoreModule = CoreModule;
//# sourceMappingURL=core.module.js.map