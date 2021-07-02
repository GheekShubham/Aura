"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
core_1.NestFactory.create(app_module_1.AppModule).then(app => app.listen(3001));
//# sourceMappingURL=main.js.map