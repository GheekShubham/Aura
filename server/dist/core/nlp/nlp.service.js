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
const node_nlp_1 = require("node-nlp");
const constants_1 = require("../constants");
let NlpService = class NlpService {
    constructor(options) {
        this.language = options.language;
        this.nlpManager = new node_nlp_1.NlpManager({ languages: [this.language] });
    }
    addTrimEntity(name, options) {
        if (options.after) {
            this.nlpManager.addAfterCondition(this.language, name, options.after);
        }
        else if (options.afterFirst) {
            this.nlpManager.addAfterFirstCondition(this.language, name, options.afterFirst);
        }
        else if (options.afterLast) {
            this.nlpManager.addAfterLastCondition(this.language, name, options.afterLast);
        }
        else if (options.before) {
            this.nlpManager.addBeforeCondition(this.language, name, options.before);
        }
        else if (options.beforeFirst) {
            this.nlpManager.addBeforeFirstCondition(this.language, name, options.beforeFirst);
        }
        else if (options.beforeLast) {
            this.nlpManager.addBeforeLastCondition(this.language, name, options.beforeLast);
        }
        else if (options.between) {
            this.nlpManager.addBetweenCondition(this.language, name, options.between[0], options.between[1]);
        }
    }
    addDocument(utterance, intent) {
        this.nlpManager.addDocument(this.language, utterance, intent);
    }
    train() {
        return this.nlpManager.train();
    }
    process(utterance) {
        return this.nlpManager.process(this.language, utterance);
    }
};
NlpService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(constants_1.CORE_MODULE_OPTIONS)),
    __metadata("design:paramtypes", [Object])
], NlpService);
exports.NlpService = NlpService;
//# sourceMappingURL=nlp.service.js.map