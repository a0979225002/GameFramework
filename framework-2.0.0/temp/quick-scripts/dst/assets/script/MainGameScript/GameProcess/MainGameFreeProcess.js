
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/MainGameScript/GameProcess/MainGameFreeProcess.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxNYWluR2FtZVNjcmlwdFxcR2FtZVByb2Nlc3NcXE1haW5HYW1lRnJlZVByb2Nlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxRUFBK0Q7QUFDL0Qsb0VBQTBFO0FBQzFFLG9IQUErRztBQUMvRyxvSEFBK0c7QUFDL0csd0hBQW1IO0FBQ25ILDJFQUFxRTtBQUNyRSwwRUFBb0U7QUFFcEUsOEVBQTJFO0FBRzNFLHFGQUFpRjtBQUNqRiw4Q0FBNEM7QUFDNUMsZ0VBQTBEO0FBQzFELHFFQUErRDtBQUMvRCx1RUFBaUU7QUFDakUsdUVBQWlFO0FBQ2pFLCtEQUF5RDtBQUN6RCx1RUFBaUU7QUFDakUsNkRBQXVEO0FBRXZEO0lBTUk7UUFFSSxJQUFJLENBQUMsWUFBWTtZQUNiLHVDQUFrQjtpQkFDYixRQUFRLEVBQWdCO2lCQUN4QixTQUFTLENBQUMsMkJBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUV4QyxJQUFJLENBQUMsVUFBVTtZQUNYLHVDQUFrQjtpQkFDYixRQUFRLEVBQW9CO2lCQUM1QixTQUFTLENBQUMsMkJBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRU8sc0NBQVEsR0FBaEI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLDBCQUFnQixDQUFDLFFBQVEsQ0FBQyxJQUFrQixDQUFDO1NBQ2pFO0lBQ0wsQ0FBQztJQUVZLDhDQUFnQixHQUE3Qjt1Q0FBaUMsT0FBTzs7Ozs7d0JBRXBDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQzt3QkFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUUsQ0FBQzt3QkFDakMsd0JBQWMsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUM7d0JBRW5DLEtBQUssR0FBVyxJQUFJLENB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O0lBQ3JCLENBQUM7SUFDTCwwQkFBQztBQUFELENBdkpBLEFBdUpDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0F1dG9UeXBlfSBmcm9tICcuLi8uLi9GcmFtZXdvcmsvQ29uZmlnL0VudW0vQ29uZmlnRW51bSdcclxuaW1wb3J0IHtHYW1lU3RhdGUsIEdhbWVUeXBlfSBmcm9tICcuLi8uLi9GcmFtZXdvcmsvUHJvY2Vzcy9FbnVtL0dhbWVTdGF0ZSdcclxuaW1wb3J0IEF1dG9TdGF0ZUNoYW5nZU5vdGlmaWNhdGlvbiBmcm9tIFwiLi4vLi4vRnJhbWV3b3JrL1Byb2Nlc3MvR2FtZU5vdGlmaWNhdGlvbi9BdXRvU3RhdGVDaGFuZ2VOb3RpZmljYXRpb25cIjtcclxuaW1wb3J0IFVzZXJNb25leUNoYW5nZU5vdGlmaWNhdGlvbiBmcm9tIFwiLi4vLi4vRnJhbWV3b3JrL1Byb2Nlc3MvR2FtZU5vdGlmaWNhdGlvbi9Vc2VyTW9uZXlDaGFuZ2VOb3RpZmljYXRpb25cIjtcclxuaW1wb3J0IFVzZXJXaW5Qb2ludFN0YXRlTm90aWZpY2F0aW9uIGZyb20gXCIuLi8uLi9GcmFtZXdvcmsvUHJvY2Vzcy9HYW1lTm90aWZpY2F0aW9uL1VzZXJXaW5Qb2ludFN0YXRlTm90aWZpY2F0aW9uXCI7XHJcbmltcG9ydCBTbG90R2FtZU1hbmFnZXIgZnJvbSAnLi4vLi4vRnJhbWV3b3JrL1Byb2Nlc3MvU2xvdEdhbWVNYW5hZ2VyJ1xyXG5pbXBvcnQgU2xvdFN0eWxlTWFuYWdlciBmcm9tICcuLi8uLi9GcmFtZXdvcmsvU2xvdC9TbG90U3R5bGVNYW5hZ2VyJ1xyXG5pbXBvcnQgTm9MaW5lU2xvdCBmcm9tICcuLi8uLi9GcmFtZXdvcmsvU2xvdC9TbG90VHlwZS9Ob0xpbmVTbG90J1xyXG5pbXBvcnQge1Jlc3BvbnNlVHlwZX0gZnJvbSBcIi4uLy4uL0ZyYW1ld29yay9XZWJSZXNwb25zZS9FbnVtL1Jlc3BvbnNlVHlwZVwiO1xyXG5pbXBvcnQgTm9MaW5lRnJlZVJlc3VsdCBmcm9tIFwiLi4vLi4vRnJhbWV3b3JrL1dlYlJlc3BvbnNlL1NldmVyRGF0YU1vZGVsL0ZyZWVSZXN1bHQvTm9MaW5lRnJlZVJlc3VsdFwiO1xyXG5pbXBvcnQgTm9MaW5lUmVzdWx0IGZyb20gXCIuLi8uLi9GcmFtZXdvcmsvV2ViUmVzcG9uc2UvU2V2ZXJEYXRhTW9kZWwvTm9ybWFsUmVzdWx0L05vTGluZVJlc3VsdFwiO1xyXG5pbXBvcnQge1dlYlJlc3BvbnNlTWFuYWdlcn0gZnJvbSAnLi4vLi4vRnJhbWV3b3JrL1dlYlJlc3BvbnNlL1dlYlJlc3BvbnNlTWFuYWdlcidcclxuaW1wb3J0IHtzb2NrZXRKU30gZnJvbSAnLi4vLi4vU29ja2V0L1NvY2tldCdcclxuaW1wb3J0IE1haW5HYW1lQnV0dG9uIGZyb20gJy4uL0J1dHRvbkV2ZW50L01haW5HYW1lQnV0dG9uJ1xyXG5pbXBvcnQgRnJlZUVuZENvbnRyb2xsZXIgZnJvbSAnLi4vQ29udHJvbGxlci9GcmVlRW5kQ29udHJvbGxlcidcclxuaW1wb3J0IEZyZWVPcGVuQ29udHJvbGxlciBmcm9tICcuLi9Db250cm9sbGVyL0ZyZWVPcGVuQ29udHJvbGxlcidcclxuaW1wb3J0IE1haW5HYW1lQ29udHJvbGxlciBmcm9tICcuLi9Db250cm9sbGVyL01haW5HYW1lQ29udHJvbGxlcidcclxuaW1wb3J0IFNsb3RDb250cm9sbGVyIGZyb20gJy4uL0NvbnRyb2xsZXIvU2xvdENvbnRyb2xsZXInXHJcbmltcG9ydCBXaW5MZXZlbENvbnRyb2xsZXIgZnJvbSAnLi4vQ29udHJvbGxlci9XaW5MZXZlbENvbnRyb2xsZXInXHJcbmltcG9ydCBNYWluR2FtZUxhYmVsIGZyb20gJy4uL0xhYmVsRXZlbnQvTWFpbkdhbWVMYWJlbCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5HYW1lRnJlZVByb2Nlc3MgaW1wbGVtZW50cyBJU2xvdFByb2NlZHVyZUV4ZWN1dGlvbkNvbnRhaW5lciB7XHJcblxyXG4gICAgcHJpdmF0ZSBzbG90U3R5bGU6IE5vTGluZVNsb3Q7XHJcbiAgICBwcml2YXRlIG5vcm1hbFJlc3VsdDogTm9MaW5lUmVzdWx0O1xyXG4gICAgcHJpdmF0ZSBmcmVlUmVzdWx0OiBOb0xpbmVGcmVlUmVzdWx0O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgICAgICB0aGlzLm5vcm1hbFJlc3VsdCA9XHJcbiAgICAgICAgICAgIFdlYlJlc3BvbnNlTWFuYWdlclxyXG4gICAgICAgICAgICAgICAgLmluc3RhbmNlPE5vTGluZVJlc3VsdD4oKVxyXG4gICAgICAgICAgICAgICAgLmdldFJlc3VsdChSZXNwb25zZVR5cGUuTk9STUFMKTtcclxuXHJcbiAgICAgICAgdGhpcy5mcmVlUmVzdWx0ID1cclxuICAgICAgICAgICAgV2ViUmVzcG9uc2VNYW5hZ2VyXHJcbiAgICAgICAgICAgICAgICAuaW5zdGFuY2U8Tm9MaW5lRnJlZVJlc3VsdD4oKVxyXG4gICAgICAgICAgICAgICAgLmdldFJlc3VsdChSZXNwb25zZVR5cGUuRlJFRSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkNyZWF0ZSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc2xvdFN0eWxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2xvdFN0eWxlID0gU2xvdFN0eWxlTWFuYWdlci5pbnN0YW5jZS5zbG90IGFzIE5vTGluZVNsb3Q7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBvbkN1c3RvbWl6ZVN0YXJ0KCk6IFByb21pc2U8dm9pZD4ge1xyXG5cclxuICAgICAgICB0aGlzLm9uQ3JlYXRlKCk7XHJcbiAgICAgICAgdGhpcy5zbG90U3R5bGUuaW5pdGlhbGl6ZVN0YXRlKCk7XHJcbiAgICAgICAgU2xvdENvbnRyb2xsZXIuaW5zdGFuY2UuY2xvc2VXaW5HcmlkKCk7XHJcbiAgICAgICAgLy8tMSDngrrpgJnmrKHlianppJjmrKHmlbgs5Zug54K66LOH5paZ5piv5LiK5bGA6LOH5paZXHJcbiAgICAgICAgbGV0IGNvdW50OiBudW1iZXIgPSB0aGlzLmZyZWVSZXN1bHQuQ291bnQgLSAxO1xyXG4gICAgICAgIGNvdW50ID0gYXdhaXQgdGhpcy5ub3JtYWxUb0ZyZWUoY291bnQpO1xyXG4gICAgICAgIGNvdW50ID0gYXdhaXQgdGhpcy5mcmVlVG9GcmVlKGNvdW50KTtcclxuICAgICAgICBNYWluR2FtZUxhYmVsLmluc3RhbmNlLnVwZGF0ZUZyZWVUaXRsZShjb3VudCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnlLHkuIDoiKzmqKHlvI/pgLLlhaVmcmVl5pmCXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY291bnRcclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPG51bWJlcj59XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGFzeW5jIG5vcm1hbFRvRnJlZShjb3VudDogbnVtYmVyKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgICAgICAvL+esrOS4gOasoemAsuWFpUZyZWXni4DmhYtcclxuICAgICAgICBpZiAodGhpcy5ub3JtYWxSZXN1bHQuRnJlZVNwaW5Db3VudCAhPSAwKSB7XHJcbiAgICAgICAgICAgIE1haW5HYW1lTGFiZWwuaW5zdGFuY2UucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIE1haW5HYW1lQnV0dG9uLmluc3RhbmNlLnN3aXRjaEJ1dHRvbihmYWxzZSk7XHJcbiAgICAgICAgICAgIE1haW5HYW1lQ29udHJvbGxlci5pbnN0YW5jZS5zaG93RnJlZUJHKCk7XHJcbiAgICAgICAgICAgIGF3YWl0IEZyZWVPcGVuQ29udHJvbGxlci5pbnN0YW5jZS5zaG93RnJlZU9wZW5pbmdBbmltYXRpb24oXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vcm1hbFJlc3VsdC5GcmVlU3BpbkNvdW50KTtcclxuICAgICAgICAgICAgY291bnQgPSB0aGlzLm5vcm1hbFJlc3VsdC5GcmVlU3BpbkNvdW50IC0gMTtcclxuICAgICAgICAgICAgLy/muIXnqbrkuIDoiKxyZXNwb25zZU1vZGVsIOeahCBmcmVl54uA5oWLLOmBv+WFjemHjeikh+i/keS+hlxyXG4gICAgICAgICAgICB0aGlzLm5vcm1hbFJlc3VsdC5GcmVlU3BpbkNvdW50ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNvdW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6YCy5YWlZnJlZVRvRnJlZeaZglxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNvdW50XHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxudW1iZXI+fVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBhc3luYyBmcmVlVG9GcmVlKGNvdW50OiBudW1iZXIpOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgICAgIC8vRlJFRSBUTyBGUkVFIOWIpOaWt+aYr+WQpuWinuWKoCDmm7TmlrBjb3VudOaVuFxyXG4gICAgICAgIGlmICh0aGlzLmZyZWVSZXN1bHQuRnJlZVRvRnJlZSAhPSAwKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IEZyZWVPcGVuQ29udHJvbGxlci5pbnN0YW5jZS5zaG93RnJlZU9wZW5pbmdBbmltYXRpb24odGhpcy5mcmVlUmVzdWx0LkZyZWVUb0ZyZWUpO1xyXG4gICAgICAgICAgICBjb3VudCA9IHRoaXMuZnJlZVJlc3VsdC5Db3VudCArIHRoaXMuZnJlZVJlc3VsdC5GcmVlVG9GcmVlIC0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNvdW50O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblNpbmVJbkdyaWQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KGFzeW5jIChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIHNvY2tldEpTLlNGU1RvU2VydmVyKFwiRnJlZVNwaW5cIiwgXCJcIik7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2xvdFN0eWxlLnNpbmVJblNsb3QoKTtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblJ1bkdyaWQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2xvdFN0eWxlLnJ1blNsb3RBbmltYXRpb24oKTtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblNob3dBbnN3ZXIoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZyZWVSZXN1bHQuVG90YWxXaW5Qb2ludCAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICBTbG90Q29udHJvbGxlci5pbnN0YW5jZS5zaG93V2luR3JpZCh0aGlzLmZyZWVSZXN1bHQuR3JpZFdpbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5jaGVja1dpblBvaW50KHRoaXMuZnJlZVJlc3VsdC5Ub3RhbFdpblBvaW50KTtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkN1c3RvbWl6ZUVuZCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oYXN5bmMgKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZnJlZVJlc3VsdC5GcmVlVG9GcmVlID09IDAgJiYgdGhpcy5mcmVlUmVzdWx0LkNvdW50ID09IDApIHtcclxuICAgICAgICAgICAgICAgIGxldCBwb2ludCA9IHRoaXMuZnJlZVJlc3VsdC5GcmVlU3BpbldpbjtcclxuICAgICAgICAgICAgICAgIGF3YWl0IEZyZWVFbmRDb250cm9sbGVyLmluc3RhbmNlLnNob3dGcmVlRW5kKHBvaW50LCA0KTtcclxuICAgICAgICAgICAgICAgIC8v6Zec6ZaJIGZyZWUg6IOM5pmvXHJcbiAgICAgICAgICAgICAgICBNYWluR2FtZUNvbnRyb2xsZXIuaW5zdGFuY2UuY2xvc2VGcmVlQkcoKTtcclxuICAgICAgICAgICAgICAgIC8v6Zec6ZaJIGZyZWUg5qiZ6aGMXHJcbiAgICAgICAgICAgICAgICBNYWluR2FtZUxhYmVsLmluc3RhbmNlLmNsb3NlRnJlZVRpdGxlKCk7XHJcbiAgICAgICAgICAgICAgICAvL+aJk+mWi+S4gOiIrOaooeW8j+aJgOacieaMiemIlVxyXG4gICAgICAgICAgICAgICAgTWFpbkdhbWVCdXR0b24uaW5zdGFuY2Uuc3dpdGNoQnV0dG9uKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgU2xvdEdhbWVNYW5hZ2VyLmluc3RhbmNlLmdhbWVTdGF0ZSA9IEdhbWVTdGF0ZS5TVEFOREJZO1xyXG4gICAgICAgICAgICAgICAgLy/lpoLmnpzmmK/oh6rli5Xni4DmhYvmmK9mcmVl57WQ5p2fLOWwh+WcqOe1kOadn+aZgumXnOmWiWF1dG/ni4DmhYtcclxuICAgICAgICAgICAgICAgIGlmIChTbG90R2FtZU1hbmFnZXIuaW5zdGFuY2UuYXV0b1R5cGUgPT0gQXV0b1R5cGUuZnJlZUVuZCAmJiBTbG90R2FtZU1hbmFnZXIuaW5zdGFuY2UuaXNBdXRvU3RhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYXV0b1R5cGUgPSBTbG90R2FtZU1hbmFnZXIuaW5zdGFuY2UuYXV0b1R5cGU7XHJcbiAgICAgICAgICAgICAgICAgICAgQXV0b1N0YXRlQ2hhbmdlTm90aWZpY2F0aW9uLmluc3RhbmNlLm5vdGlmeShmYWxzZSwgYXV0b1R5cGUsIGF1dG9UeXBlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZVN0YXR1cygpIHtcclxuICAgICAgICBpZiAodGhpcy5mcmVlUmVzdWx0LkZyZWVUb0ZyZWUgPT0gMCAmJiB0aGlzLmZyZWVSZXN1bHQuQ291bnQgPT0gMCkge1xyXG4gICAgICAgICAgICBTbG90R2FtZU1hbmFnZXIuaW5zdGFuY2UuY2hhbmdlUHJvY2VzcyhHYW1lVHlwZS5OT1JNQUwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNoZWNrV2luUG9pbnQoc3BpbldpbjogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc3BpbldpbiA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHdpblBvaW50ID0gdGhpcy5mcmVlUmVzdWx0LkZyZWVTcGluV2luO1xyXG4gICAgICAgICAgICBpZiAoc3BpbldpbiAhPSAwICYmIHRoaXMuZnJlZVJlc3VsdC5CYXNlTGV2ZWxXaW4gPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgLy/mjqjmkq0g5LiA6Iis542O5YuV55Wr5LqL5Lu2XHJcbiAgICAgICAgICAgICAgICBVc2VyV2luUG9pbnRTdGF0ZU5vdGlmaWNhdGlvbi5pbnN0YW5jZS5ub3RpZnkod2luUG9pbnQsIDApO1xyXG4gICAgICAgICAgICAgICAgLy/phY3lkIjkuIDoiKznjY7li5XnlavmmYLplpMs6Zec6ZaJ5LiA6Iis542O5pmCLOabtOaWsCB1c2VyIOmHkemhjVxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHVzZXJNb25leSA9IHRoaXMubm9ybWFsUmVzdWx0LlVzZXJQb2ludEFmdGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIFVzZXJNb25leUNoYW5nZU5vdGlmaWNhdGlvbi5pbnN0YW5jZS5ub3RpZnkodXNlck1vbmV5KVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0sIDkwMCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5mcmVlUmVzdWx0LkJhc2VMZXZlbFdpbiA+IDApIHtcclxuICAgICAgICAgICAgICAgIFdpbkxldmVsQ29udHJvbGxlci5pbnN0YW5jZS5zaG93V2luQWJvdmVTdGF0ZShzcGluV2luLCByZXNvbHZlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblNpbmVPdXRHcmlkKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbn1cclxuIl19