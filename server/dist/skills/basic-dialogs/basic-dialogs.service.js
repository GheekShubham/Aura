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
const core_1 = require("../../core");
let BasicDialogsService = class BasicDialogsService {
    sayHello() {
        return 'Hello world!';
    }
    whatICanDo() {
        return ['I am Aura and I can do tasks like making notes, greetings, entertaining the users by telling jokes, suggesting certain tasks !'];
    }
    sayGoodbye() {
        return ['Bye', 'Goodbye', 'See you'];
    }
    sayWhoIAm() {
        return {
            text: 'I\'m Aura, and you? What\'s your name?',
            nextCallback: (messageText) => `Nice to meet you, ${messageText}!`,
        };
    }
    niceToMeetYou() {
        return 'Thanks!';
    }
    openWindow() {
        window.open("https://www.google.com", "_blank");
    }
    sayHowIAm() {
        return {
            text: 'I\'m fine, thank you, and you?',
            nextCallback: () => `Nice!`,
        };
    }
    sayGoodMorning(messageText) {
        if (messageText.includes('morning')) {
            return `Good morning`;
        }
        if (messageText.includes('afternoon')) {
            return `Good afternoon`;
        }
        return `Good evening`;
    }
    sayOk() {
        return 'OK';
    }
    whoBuildYou() {
        return ['Thanks to Shubham, Supriya Rani & Sanskar Srivastava, they are just Amazing !'];
    }
    sayYoureWelcome() {
        return ['Glad to help you!', 'You\'re welcome!', 'It\'s nothing!'];
    }
};
__decorate([
    core_1.MessageHandler(['Hello', 'Hi', 'Hey']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BasicDialogsService.prototype, "sayHello", null);
__decorate([
    core_1.MessageHandler(['what can you do ?', 'Tell me your functionalities ?', 'Tell me about yourself ?']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BasicDialogsService.prototype, "whatICanDo", null);
__decorate([
    core_1.MessageHandler(['Bye', 'Goodbye', 'See you']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BasicDialogsService.prototype, "sayGoodbye", null);
__decorate([
    core_1.MessageHandler(['Who are you?', 'What\'s your name']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BasicDialogsService.prototype, "sayWhoIAm", null);
__decorate([
    core_1.MessageHandler('Nice to meet you'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BasicDialogsService.prototype, "niceToMeetYou", null);
__decorate([
    core_1.MessageHandler(['Open browser', 'open google']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BasicDialogsService.prototype, "openWindow", null);
__decorate([
    core_1.MessageHandler(['How are you?', 'What\'s up?', 'How\'s it going?']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BasicDialogsService.prototype, "sayHowIAm", null);
__decorate([
    core_1.MessageHandler(['Good morning', 'Good afternoon', 'Good evening']),
    __param(0, core_1.MessageText()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BasicDialogsService.prototype, "sayGoodMorning", null);
__decorate([
    core_1.MessageHandler('OK'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BasicDialogsService.prototype, "sayOk", null);
__decorate([
    core_1.MessageHandler(['Who developed you', 'who built you', 'tell me about developers']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BasicDialogsService.prototype, "whoBuildYou", null);
__decorate([
    core_1.MessageHandler(['Thank you', 'Thanks']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BasicDialogsService.prototype, "sayYoureWelcome", null);
BasicDialogsService = __decorate([
    common_1.Injectable()
], BasicDialogsService);
exports.BasicDialogsService = BasicDialogsService;
//# sourceMappingURL=basic-dialogs.service.js.map