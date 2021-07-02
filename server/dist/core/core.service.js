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
const discovery_1 = require("@nestjs-plus/discovery");
const constants_1 = require("./constants");
const nlp_service_1 = require("./nlp/nlp.service");
const rxjs_1 = require("rxjs");
let CoreService = class CoreService {
    constructor(nlpService, discovery, coreModuleOptions) {
        this.nlpService = nlpService;
        this.discovery = discovery;
        this.coreModuleOptions = coreModuleOptions;
        this.instancesMap = new Map();
        this.nextCallback = null;
    }
    async onApplicationBootstrap() {
        const methods = await this.discovery.providerMethodsWithMetaAtKey(constants_1.MESSAGE_HANDLER_METADATA);
        methods.forEach(method => this.registerMessageHandler(method));
        await this.nlpService.train();
    }
    registerMessageHandler(method) {
        var _a;
        const { methodName, parentClass } = method.discoveredMethod;
        const intentName = `${parentClass.name}.${methodName}`;
        if (Array.isArray(method.meta)) {
            method.meta.forEach((utterance) => {
                this.nlpService.addDocument(utterance, intentName);
            });
        }
        else if (typeof method.meta === 'string') {
            this.nlpService.addDocument(method.meta, intentName);
        }
        (_a = Reflect.getMetadata(constants_1.MESSAGE_HANDLER_PARAMS_METADATA, parentClass.instance, methodName)) === null || _a === void 0 ? void 0 : _a.forEach((paramMetadata) => {
            const { type, data } = paramMetadata;
            if (type === constants_1.MessageHandlerParamsTypes.TRIM_ENTITY) {
                this.nlpService.addTrimEntity(data.name, data.options);
            }
        });
        this.instancesMap.set(parentClass.name, parentClass.instance);
    }
    async runMessageHandler(text) {
        var _a;
        if (this.nextCallback) {
            const response = await this.nextCallback(text);
            this.nextCallback = null;
            return this.getResponseText(response);
        }
        const nlpResult = await this.nlpService.process(text);
        console.log('new message', {
            message: text,
            intent: nlpResult.intent,
        });
        const [instanceName, methodName] = nlpResult.intent.split('.');
        const instance = this.instancesMap.get(instanceName);
        if (!instance) {
            return this.dontKnowWhatToSay(text);
        }
        const args = ((_a = Reflect.getMetadata(constants_1.MESSAGE_HANDLER_PARAMS_METADATA, instance, methodName)) === null || _a === void 0 ? void 0 : _a.map((param) => {
            var _a;
            switch (param.type) {
                case constants_1.MessageHandlerParamsTypes.MESSAGE_TEXT:
                    return text;
                case constants_1.MessageHandlerParamsTypes.TRIM_ENTITY:
                    return (_a = nlpResult.entities.find(item => {
                        var _a;
                        return (item.type === 'trim' &&
                            item.entity === ((_a = param.data) === null || _a === void 0 ? void 0 : _a.name));
                    })) === null || _a === void 0 ? void 0 : _a.utteranceText;
            }
        })) || [];
        const response = await instance[methodName](...args);
        if (response instanceof rxjs_1.Observable) {
            return response;
        }
        if (Array.isArray(response) || typeof response === 'string') {
            return this.getResponseText(response);
        }
        if (response.text && response.nextCallback) {
            this.nextCallback = response.nextCallback;
            return response.text;
        }
    }
    getResponseText(response) {
        if (typeof response === 'string') {
            return response;
        }
        return response[Math.floor(Math.random() * response.length)];
    }
    dontKnowWhatToSay(text) {
        if (text.slice(-1) === '?') {
            return this.coreModuleOptions.notKnowMessage;
        }
        return this.coreModuleOptions.notUnderstandMessage;
    }
};
CoreService = __decorate([
    common_1.Injectable(),
    __param(2, common_1.Inject(constants_1.CORE_MODULE_OPTIONS)),
    __metadata("design:paramtypes", [nlp_service_1.NlpService,
        discovery_1.DiscoveryService, Object])
], CoreService);
exports.CoreService = CoreService;
//# sourceMappingURL=core.service.js.map