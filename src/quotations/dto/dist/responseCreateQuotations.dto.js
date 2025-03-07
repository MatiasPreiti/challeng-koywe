"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ResponseCreateQuotationDTO = void 0;
var class_validator_1 = require("class-validator");
var swagger_1 = require("@nestjs/swagger");
var CryptoCurrency_enum_1 = require("src/utils/enum/CryptoCurrency.enum");
var ResponseCreateQuotationDTO = /** @class */ (function () {
    function ResponseCreateQuotationDTO() {
    }
    __decorate([
        swagger_1.ApiProperty({ example: 'a1b2c3d4' }),
        class_validator_1.IsUUID(),
        class_validator_1.IsNotEmpty()
    ], ResponseCreateQuotationDTO.prototype, "id");
    __decorate([
        swagger_1.ApiProperty({ example: 'ARS' }),
        class_validator_1.IsIn(Object.values(CryptoCurrency_enum_1.Currency)),
        class_validator_1.IsNotEmpty()
    ], ResponseCreateQuotationDTO.prototype, "from");
    __decorate([
        swagger_1.ApiProperty({ example: 'ETH' }),
        class_validator_1.IsIn(Object.values(CryptoCurrency_enum_1.Currency)),
        class_validator_1.IsNotEmpty()
    ], ResponseCreateQuotationDTO.prototype, "to");
    __decorate([
        swagger_1.ApiProperty({ example: 1000000 }),
        class_validator_1.IsNumber(),
        class_validator_1.IsNotEmpty()
    ], ResponseCreateQuotationDTO.prototype, "amount");
    __decorate([
        swagger_1.ApiProperty({ example: 0.0000023 }),
        class_validator_1.IsNumber(),
        class_validator_1.IsNotEmpty()
    ], ResponseCreateQuotationDTO.prototype, "rate");
    __decorate([
        swagger_1.ApiProperty({ example: 2.3 }),
        class_validator_1.IsNumber(),
        class_validator_1.IsNotEmpty()
    ], ResponseCreateQuotationDTO.prototype, "convertedAmount");
    __decorate([
        swagger_1.ApiProperty({ example: '2025-02-03T12:00:00Z' }),
        class_validator_1.IsNotEmpty()
    ], ResponseCreateQuotationDTO.prototype, "timestamp");
    __decorate([
        swagger_1.ApiProperty({ example: '2025-02-03T12:05:00Z' }),
        class_validator_1.IsNotEmpty()
    ], ResponseCreateQuotationDTO.prototype, "expiresAt");
    return ResponseCreateQuotationDTO;
}());
exports.ResponseCreateQuotationDTO = ResponseCreateQuotationDTO;
