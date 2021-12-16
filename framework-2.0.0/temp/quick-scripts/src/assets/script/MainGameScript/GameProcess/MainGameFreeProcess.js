"use strict";
cc._RF.push(module, 'b5892QJ/IdHwaNeGQOT9Cjq', 'MainGameFreeProcess');
// script/MainGameScript/GameProcess/MainGameFreeProcess.ts

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
var ConfigEnum_1 = require("../../Framework/Config/Enum/ConfigEnum");
var GameState_1 = require("../../Framework/Process/Enum/GameState");
var AutoStateChangeNotification_1 = require("../../Framework/Process/GameNotification/AutoStateChangeNotification");
var UserMoneyChangeNotification_1 = require("../../Framework/Process/GameNotification/UserMoneyChangeNotification");
var UserWinPointStateNotification_1 = require("../../Framework/Process/GameNotification/UserWinPointStateNotification");
var SlotGameManager_1 = require("../../Framework/Process/SlotGameManager");
var SlotStyleManager_1 = require("../../Framework/Slot/SlotStyleManager");
var ResponseType_1 = require("../../Framework/WebResponse/Enum/ResponseType");
var WebResponseManager_1 = require("../../Framework/WebResponse/WebResponseManager");
var Socket_1 = require("../../Socket/Socket");
var MainGameButton_1 = require("../ButtonEvent/MainGameButton");
var FreeEndController_1 = require("../Controller/FreeEndController");
var FreeOpenController_1 = require("../Controller/FreeOpenController");
var MainGameController_1 = require("../Controller/MainGameController");
var SlotController_1 = require("../Controller/SlotController");
var WinLevelController_1 = require("../Controller/WinLevelController");
var MainGameLabel_1 = require("../LabelEvent/MainGameLabel");
var MainGameFreeProcess = /** @class */ (function () {
    function MainGameFreeProcess() {
        this.normalResult =
            WebResponseManager_1.WebResponseManager
                .instance()
                .getResult(ResponseType_1.ResponseType.NORMAL);
        this.freeResult =
            WebResponseManager_1.WebResponseManager
                .instance()
                .getResult(ResponseType_1.ResponseType.FREE);
    }
    MainGameFreeProcess.prototype.onCreate = function () {
        if (!this.slotStyle) {
            this.slotStyle = SlotStyleManager_1.default.instance.slot;
        }
    };
    MainGameFreeProcess.prototype.onCustomizeStart = function () {
        return __awaiter(this, void 0, Promise, function () {
            var count;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.onCreate();
                        this.slotStyle.initializeState();
                        SlotController_1.default.instance.closeWinGrid();
                        count = this.freeResult.Count - 1;
                        return [4 /*yield*/, this.normalToFree(count)];
                    case 1:
                        count = _a.sent();
                        return [4 /*yield*/, this.freeToFree(count)];
                    case 2:
                        count = _a.sent();
                        MainGameLabel_1.default.instance.updateFreeTitle(count);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 由一般模式進入free時
     * @param {number} count
     * @returns {Promise<number>}
     * @private
     */
    MainGameFreeProcess.prototype.normalToFree = function (count) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.normalResult.FreeSpinCount != 0)) return [3 /*break*/, 2];
                        MainGameLabel_1.default.instance.remove();
                        MainGameButton_1.default.instance.switchButton(false);
                        MainGameController_1.default.instance.showFreeBG();
                        return [4 /*yield*/, FreeOpenController_1.default.instance.showFreeOpeningAnimation(this.normalResult.FreeSpinCount)];
                    case 1:
                        _a.sent();
                        count = this.normalResult.FreeSpinCount - 1;
                        //清空一般responseModel 的 free狀態,避免重複近來
                        this.normalResult.FreeSpinCount = 0;
                        _a.label = 2;
                    case 2: return [2 /*return*/, count];
                }
            });
        });
    };
    /**
     * 進入freeToFree時
     * @param {number} count
     * @returns {Promise<number>}
     * @private
     */
    MainGameFreeProcess.prototype.freeToFree = function (count) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.freeResult.FreeToFree != 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, FreeOpenController_1.default.instance.showFreeOpeningAnimation(this.freeResult.FreeToFree)];
                    case 1:
                        _a.sent();
                        count = this.freeResult.Count + this.freeResult.FreeToFree - 1;
                        _a.label = 2;
                    case 2: return [2 /*return*/, count];
                }
            });
        });
    };
    MainGameFreeProcess.prototype.onSineInGrid = function () {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Socket_1.socketJS.SFSToServer("FreeSpin", "");
                        return [4 /*yield*/, this.slotStyle.sineInSlot()];
                    case 1:
                        _a.sent();
                        resolve();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    MainGameFreeProcess.prototype.onRunGrid = function () {
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
    MainGameFreeProcess.prototype.onShowAnswer = function () {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.freeResult.TotalWinPoint != 0) {
                            SlotController_1.default.instance.showWinGrid(this.freeResult.GridWin);
                        }
                        return [4 /*yield*/, this.checkWinPoint(this.freeResult.TotalWinPoint)];
                    case 1:
                        _a.sent();
                        resolve();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    MainGameFreeProcess.prototype.onCustomizeEnd = function () {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var point, autoType;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.freeResult.FreeToFree == 0 && this.freeResult.Count == 0)) return [3 /*break*/, 2];
                        point = this.freeResult.FreeSpinWin;
                        return [4 /*yield*/, FreeEndController_1.default.instance.showFreeEnd(point, 4)];
                    case 1:
                        _a.sent();
                        //關閉 free 背景
                        MainGameController_1.default.instance.closeFreeBG();
                        //關閉 free 標題
                        MainGameLabel_1.default.instance.closeFreeTitle();
                        //打開一般模式所有按鈕
                        MainGameButton_1.default.instance.switchButton(true);
                        SlotGameManager_1.default.instance.gameState = GameState_1.GameState.STANDBY;
                        //如果是自動狀態是free結束,將在結束時關閉auto狀態
                        if (SlotGameManager_1.default.instance.autoType == ConfigEnum_1.AutoType.freeEnd && SlotGameManager_1.default.instance.isAutoState) {
                            autoType = SlotGameManager_1.default.instance.autoType;
                            AutoStateChangeNotification_1.default.instance.notify(false, autoType, autoType);
                        }
                        _a.label = 2;
                    case 2:
                        resolve();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    MainGameFreeProcess.prototype.onChangeStatus = function () {
        if (this.freeResult.FreeToFree == 0 && this.freeResult.Count == 0) {
            SlotGameManager_1.default.instance.changeProcess(GameState_1.GameType.NORMAL);
        }
    };
    MainGameFreeProcess.prototype.checkWinPoint = function (spinWin) {
        var _this = this;
        return new Promise(function (resolve) {
            if (spinWin == 0) {
                resolve();
                return;
            }
            var winPoint = _this.freeResult.FreeSpinWin;
            if (spinWin != 0 && _this.freeResult.BaseLevelWin == 0) {
                //推播 一般獎動畫事件
                UserWinPointStateNotification_1.default.instance.notify(winPoint, 0);
                //配合一般獎動畫時間,關閉一般獎時,更新 user 金額
                setTimeout(function () {
                    var userMoney = _this.normalResult.UserPointAfter;
                    UserMoneyChangeNotification_1.default.instance.notify(userMoney);
                    resolve();
                }, 900);
            }
            else if (_this.freeResult.BaseLevelWin > 0) {
                WinLevelController_1.default.instance.showWinAboveState(spinWin, resolve);
            }
        });
    };
    MainGameFreeProcess.prototype.onSineOutGrid = function () {
        return undefined;
    };
    return MainGameFreeProcess;
}());
exports.default = MainGameFreeProcess;

cc._RF.pop();