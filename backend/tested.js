"use strict";
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
var crypto_1 = require("crypto");
;
var RANDOM_BYTES_KEY = 32;
var RANDOM_BYTES_IV = 16;
var HEX = "hex";
var ALGO = "aes-256-cbc";
var Encrypt = /** @class */ (function () {
    function Encrypt() {
    }
    Encrypt.prototype.encrypt = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var cipher, encrypted;
            return __generator(this, function (_a) {
                try {
                    cipher = crypto_1.createCipheriv(ALGO, Buffer.from(Encrypt.key), Encrypt.iv);
                    encrypted = cipher.update(text);
                    encrypted = Buffer.concat([encrypted, cipher.final()]);
                    return [2 /*return*/, ({
                            iv: Encrypt.iv.toString(HEX),
                            encryptedData: encrypted.toString(HEX)
                        })];
                }
                catch (error) {
                    console.log(error);
                    return [2 /*return*/, null];
                }
                return [2 /*return*/];
            });
        });
    };
    Encrypt.prototype.decrypt = function (_a) {
        var iv = _a.iv, encryptedData = _a.encryptedData;
        return __awaiter(this, void 0, void 0, function () {
            var _iv_, encryptedText, decipher, decrypted;
            return __generator(this, function (_b) {
                _iv_ = Buffer.from(iv, HEX);
                encryptedText = Buffer.from(encryptedData, 'hex');
                decipher = crypto_1.createDecipheriv(ALGO, Buffer.from(Encrypt.key), _iv_);
                decrypted = decipher.update(encryptedText);
                decrypted = Buffer.concat([decrypted, decipher.final()]);
                return [2 /*return*/, decrypted.toString()];
            });
        });
    };
    Encrypt.key = crypto_1.randomBytes(RANDOM_BYTES_KEY);
    Encrypt.iv = crypto_1.randomBytes(RANDOM_BYTES_IV);
    return Encrypt;
}());
var enc = new Encrypt();
var hashed = enc.encrypt("super secret");
console.log(hashed);
