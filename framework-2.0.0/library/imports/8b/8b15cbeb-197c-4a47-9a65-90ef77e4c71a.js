"use strict";
cc._RF.push(module, '8b15cvrGXxKR5plkO935Mca', 'MainGameNormalProcess');
// script/MainGameScript/GameProcess/MainGameNormalProcess.ts

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
var GameState_1 = require("../../Framework/Process/Enum/GameState");
var UserMoneyChangeNotification_1 = require("../../Framework/Process/GameNotification/UserMoneyChangeNotification");
var UserWinPointStateNotification_1 = require("../../Framework/Process/GameNotification/UserWinPointStateNotification");
var SlotGameManager_1 = require("../../Framework/Process/SlotGameManager");
var SlotStyleManager_1 = require("../../Framework/Slot/SlotStyleManager");
var ResponseType_1 = require("../../Framework/WebResponse/Enum/ResponseType");
var WebResponseManager_1 = require("../../Framework/WebResponse/WebResponseManager");
var Socket_1 = require("../../Socket/Socket");
var SlotController_1 = require("../Controller/SlotController");
var WinLevelController_1 = require("../Controller/WinLevelController");
var MainGameLabel_1 = require("../LabelEvent/MainGameLabel");
var MainGameNormalProcess = /** @class */ (function () {
    function MainGameNormalProcess() {
        this.normalResult =
            WebResponseManager_1.WebResponseManager
                .instance()
                .getResult(ResponseType_1.ResponseType.NORMAL);
    }
    MainGameNormalProcess.prototype.onCreate = function () {
        if (!this.slotStyle) {
            this.slotStyle = SlotStyleManager_1.default.instance.slot;
        }
    };
    MainGameNormalProcess.prototype.onCustomizeStart = function () {
        var _this = this;
        this.onCreate();
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.slotStyle.initializeState();
                MainGameLabel_1.default.instance.remove();
                SlotController_1.default.instance.closeWinGrid();
                SlotGameManager_1.default.instance.gameState = GameState_1.GameState.PLAYING;
                resolve();
                return [2 /*return*/];
            });
        }); });
    };
    MainGameNormalProcess.prototype.onSineInGrid = function () {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Socket_1.socketJS.SFSToServer("Bet", SlotGameManager_1.default.instance.userBetPoint);
                        return [4 /*yield*/, this.slotStyle.sineInSlot()];
                    case 1:
                        _a.sent();
                        resolve();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    MainGameNormalProcess.prototype.onRunGrid = function () {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.slotStyle.runSlotAnimation()];
                    case 1:
                        _a.sent();
                        resolve();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    MainGameNormalProcess.prototype.onShowAnswer = function () {
        var _this = this;
        cc.log("onShowAnswer");
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.normalResult.TotalWinPoint != 0) {
                            SlotController_1.default.instance.showWinGrid(this.normalResult.GridWin);
                        }
                        return [4 /*yield*/, this.checkWinPoint()];
                    case 1:
                        _a.sent();
                        resolve();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    MainGameNormalProcess.prototype.onCustomizeEnd = function () {
        SlotGameManager_1.default.instance.gameState = GameState_1.GameState.STANDBY;
        return Promise.resolve(undefined);
    };
    MainGameNormalProcess.prototype.onChangeStatus = function () {
        //如果一般模式中response的免費次數不等於0,進入free狀態
        if (this.normalResult.FreeSpinCount > 0) {
            SlotGameManager_1.default.instance.gameState = GameState_1.GameState.FREEING;
            SlotGameManager_1.default.instance.changeProcess(GameState_1.GameType.FREE);
            return;
        }
    };
    MainGameNormalProcess.prototype.checkWinPoint = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var winPoint = _this.normalResult.TotalWinPoint;
            if (winPoint == 0) {
                resolve();
                return;
            }
            if (winPoint != 0 && _this.normalResult.BaseLevelWin == 0) {
                //顯示(level:0)一般獎動畫
                UserWinPointStateNotification_1.default.instance.notify(winPoint, 0);
                //配合一般獎動畫時間,關閉一般獎時,更新 user 金額
                setTimeout(function () {
                    UserMoneyChangeNotification_1.default.instance.notify(_this.normalResult.UserPointAfter);
                    resolve();
                }, 900);
            }
            else if (_this.normalResult.BaseLevelWin > 0) {
                //顯示大獎動畫
                var nowPoint = _this.normalResult.TotalWinPoint;
                WinLevelController_1.default.instance.showWinAboveState(nowPoint, resolve);
            }
        });
    };
    MainGameNormalProcess.prototype.onSineOutGrid = function () {
        return Promise.resolve(undefined);
    };
    return MainGameNormalProcess;
}());
exports.default = MainGameNormalProcess;

cc._RF.pop();