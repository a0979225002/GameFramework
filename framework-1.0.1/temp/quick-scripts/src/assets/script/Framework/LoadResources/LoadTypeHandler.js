"use strict";
cc._RF.push(module, '452c20FX9FOYJDbMg0fNKi/', 'LoadTypeHandler');
// script/Framework/LoadResources/LoadTypeHandler.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorManagerEnum_1 = require("../Error/Enum/ErrorManagerEnum");
var ErrorManager_1 = require("../Error/ErrorManager");
var LoadResManager_1 = require("./LoadResManager");
var LoadTypeFactory_1 = require("./LoadTypeFactory");
var LoadTypeHandler = /** @class */ (function () {
    function LoadTypeHandler() {
        this.factory = new LoadTypeFactory_1.default();
    }
    /**
     * 檢測當前Type,做各自對應的加載動作
     * @param name
     * @param type
     * @param url
     */
    LoadTypeHandler.prototype.executeLoad = function (name, type, url) {
        this.checkRepeatTheName(name);
        LoadResManager_1.default.instance.initialLoadState.set(name, null);
        this.factory.executeLoad(name, type, url);
    };
    /**
     * 執行Bundle載入動作
     * @param name
     * @param type
     * @param url
     */
    LoadTypeHandler.prototype.executeLoadBundle = function (name, type, url) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.checkRepeatTheName(name);
                        LoadResManager_1.default.instance.secondaryLoadState.set(name, null);
                        return [4 /*yield*/, this.factory.executeLoadBundle(name, type, url)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoadTypeHandler.prototype.checkRepeatTheName = function (name) {
        if (LoadResManager_1.default.instance.initialLoadState.has(name)) {
            ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.LoadErrorFW, name + " \u6B64(\u4E3B\u8CC7\u6E90)\u5DF2\u8F09\u5165\u904E\u4E86,\u6216\u540D\u7A31\u91CD\u8907,\u8ACB\u6AA2\u5BDF");
        }
        if (LoadResManager_1.default.instance.secondaryLoadState.has(name)) {
            ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.LoadErrorFW, name + " \u6B64(\u6B21\u8CC7\u6E90)\u5DF2\u8F09\u5165\u904E\u4E86,\u6216\u540D\u7A31\u91CD\u8907,\u8ACB\u6AA2\u5BDF");
        }
    };
    /**
     * 加載外部腳本
     * @param {string} name
     * @param {LoadType} type
     * @param {string} url
     */
    LoadTypeHandler.prototype.executeLoadExternalScript = function (name, type, url) {
        this.factory.executeLoadExternalScript(name, type, url);
    };
    return LoadTypeHandler;
}());
exports.default = LoadTypeHandler;

cc._RF.pop();