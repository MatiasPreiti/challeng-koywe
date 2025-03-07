"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.QuotationsService = void 0;
var common_1 = require("@nestjs/common");
var QuotationsService = /** @class */ (function () {
    function QuotationsService(prisma) {
        this.prisma = prisma;
    }
    QuotationsService.prototype.createQuotation = function (data) {
        return __awaiter(this, void 0, Promise, function () {
            var from, to, amount, rate, convertedAmount, timestamp, expiresAt;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        from = data.from, to = data.to, amount = data.amount;
                        console.log(data);
                        return [4 /*yield*/, this.getRate(from, to)];
                    case 1:
                        rate = _a.sent();
                        convertedAmount = amount * rate;
                        timestamp = new Date();
                        expiresAt = new Date(timestamp.getTime() + 5 * 60000);
                        return [2 /*return*/, this.prisma.quotation.create({
                                data: {
                                    from: from,
                                    to: to,
                                    amount: amount,
                                    rate: rate,
                                    convertedAmount: convertedAmount,
                                    timestamp: timestamp,
                                    expiresAt: expiresAt
                                }
                            })];
                }
            });
        });
    };
    QuotationsService.prototype.getQuotations = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.prisma.quotation.findMany()];
            });
        });
    };
    QuotationsService.prototype.getRate = function (from, to) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                //EN ESTA FUNCION SE IMPLEMENTARIA LA FUNCION AXION PARA HACER FETCH A EL SERVICIO EXTERNO
                // Tambien en caso de que el servicio externo requiera mas complicaciones seria idea crear un modulo dedidado a este
                /*  const response = await axios.get(
                    `https://api.exchange.cryptomkt.com/api/3/public/price/rate?from=${to}&to=${from}`,
                  );
                  return response.data.rate; */
                //EN VIRTUD DE NECESITAR CUENTA Y APIKEY PARA EL USO DE APIS QUE ACEPTEN DOS TIPOS DE DIVISA COMO TO Y FROM SE PROCEDE A CREAR MOCK
                return [2 /*return*/, 100];
            });
        });
    };
    QuotationsService.prototype.getQuotationById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var quotation, currentTime;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prisma.quotation.findUnique({ where: { id: id } })];
                    case 1:
                        quotation = _a.sent();
                        if (!quotation) {
                            throw new common_1.NotFoundException('Quotation not found');
                        }
                        currentTime = new Date();
                        if (currentTime > new Date(quotation.expiresAt)) {
                            throw new common_1.NotFoundException('Quotation has expired');
                        }
                        return [2 /*return*/, __assign(__assign({}, quotation), { timestamp: new Date(quotation.timestamp), expiresAt: new Date(quotation.expiresAt) })];
                }
            });
        });
    };
    QuotationsService = __decorate([
        common_1.Injectable()
    ], QuotationsService);
    return QuotationsService;
}());
exports.QuotationsService = QuotationsService;
