"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RequestCreateQuotationDTO = void 0;
var class_validator_1 = require("class-validator");
var swagger_1 = require("@nestjs/swagger");
var CryptoCurrency_enum_1 = require("src/utils/enum/CryptoCurrency.enum");
var RequestCreateQuotationDTO = /** @class */ (function () {
    function RequestCreateQuotationDTO() {
    }
    __decorate([
        swagger_1.ApiProperty({ example: 100000 }),
        class_validator_1.IsNumber(),
        class_validator_1.IsNotEmpty()
    ], RequestCreateQuotationDTO.prototype, "amount");
    __decorate([
        swagger_1.ApiProperty({ example: 'ARS' }),
        class_validator_1.IsIn(Object.values(CryptoCurrency_enum_1.Currency)),
        class_validator_1.IsNotEmpty()
    ], RequestCreateQuotationDTO.prototype, "from");
    __decorate([
        swagger_1.ApiProperty({ example: 'ETH' }),
        class_validator_1.IsIn(Object.values(CryptoCurrency_enum_1.Currency)),
        class_validator_1.IsNotEmpty()
    ], RequestCreateQuotationDTO.prototype, "to");
    return RequestCreateQuotationDTO;
}());
exports.RequestCreateQuotationDTO = RequestCreateQuotationDTO;
