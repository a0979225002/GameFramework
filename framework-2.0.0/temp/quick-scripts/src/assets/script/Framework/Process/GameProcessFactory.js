"use strict";
cc._RF.push(module, '79d7eye33JHKaBHAtfFDfTQ', 'GameProcessFactory');
// script/Framework/Process/GameProcessFactory.ts

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
/**
 * @Author XIAO-LI-PIN
 * @Description 流程工廠 : 更新,獲取,加入,變更等..
 * @Date 2021-05-13 下午 06:17
 * @Version 1.1
 */
var GameProcessFactory = /** @class */ (function () {
    function GameProcessFactory(gameManager) {
        this.gameManager = gameManager;
        this.processToMap = new Map();
    }
    /**
     * 添加流程
     * @param {string | GameType} processName
     * @param {IProcess} process
     */
    GameProcessFactory.prototype.setProcess = function (processName, process) {
        this.processToMap.set(processName, process);
    };
    /**
     * 獲取該流程
     * @param {string | GameType} processName
     * @param {IProcess} process
     * @returns {IProcess}
     */
    GameProcessFactory.prototype.getProcess = function (processName, process) {
        return this.processToMap.get(processName);
    };
    /**
     * 改變流程
     * @param {string | GameType} processName
     */
    GameProcessFactory.prototype.changeProcess = function (processName) {
        if (!this.processToMap.has(processName)) {
            ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.GameProcessFW, processName + " \u641C\u5C0B\u4E0D\u5230\u6B64\u6D41\u7A0B,\u8ACB\u6AA2\u67E5\u6D41\u7A0B\u662F\u5426\u6DFB\u52A0");
            return;
        }
        this.process = this.processToMap.get(processName);
    };
    /**
     * 執行流程
     * @returns {Promise<void>}
     */
    GameProcessFactory.prototype.useProcess = function () {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.process.start()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return GameProcessFactory;
}());
exports.default = GameProcessFactory;

cc._RF.pop();