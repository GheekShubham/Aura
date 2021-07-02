"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
function MessageHandler(message) {
    return function (target, key, descriptor) {
        Reflect.defineMetadata(constants_1.MESSAGE_HANDLER_METADATA, message, descriptor.value);
        return descriptor;
    };
}
exports.MessageHandler = MessageHandler;
;
function getMessageHandlerParamsMetadata(target, key) {
    return Reflect.getOwnMetadata(constants_1.MESSAGE_HANDLER_PARAMS_METADATA, target, key) || [];
}
function MessageText() {
    return function (target, key, parameterIndex) {
        const params = getMessageHandlerParamsMetadata(target, key);
        params[parameterIndex] = {
            type: constants_1.MessageHandlerParamsTypes.MESSAGE_TEXT,
        };
        Reflect.defineMetadata(constants_1.MESSAGE_HANDLER_PARAMS_METADATA, params, target, key);
    };
}
exports.MessageText = MessageText;
function TrimEntity(name, options) {
    return (target, key, parameterIndex) => {
        const params = getMessageHandlerParamsMetadata(target, key);
        params[parameterIndex] = {
            type: constants_1.MessageHandlerParamsTypes.TRIM_ENTITY,
            data: { name, options },
        };
        Reflect.defineMetadata(constants_1.MESSAGE_HANDLER_PARAMS_METADATA, params, target, key);
    };
}
exports.TrimEntity = TrimEntity;
//# sourceMappingURL=decorators.js.map