"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.QuotationsModule = void 0;
var common_1 = require("@nestjs/common");
var quotations_service_1 = require("./quotations.service");
var prisma_module_1 = require("prisma/prisma.module");
var QuotationsModule = /** @class */ (function () {
    function QuotationsModule() {
    }
    QuotationsModule = __decorate([
        common_1.Module({
            imports: [prisma_module_1.PrismaModule],
            providers: [quotations_service_1.QuotationsService],
            exports: [quotations_service_1.QuotationsService]
        })
    ], QuotationsModule);
    return QuotationsModule;
}());
exports.QuotationsModule = QuotationsModule;
