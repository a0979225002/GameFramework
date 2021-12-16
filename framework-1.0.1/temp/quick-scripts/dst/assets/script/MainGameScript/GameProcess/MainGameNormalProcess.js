
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/MainGameScript/GameProcess/MainGameNormalProcess.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxNYWluR2FtZVNjcmlwdFxcR2FtZVByb2Nlc3NcXE1haW5HYW1lTm9ybWFsUHJvY2Vzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9FQUEwRTtBQUMxRSxvSEFBK0c7QUFDL0csd0hBQW1IO0FBQ25ILDJFQUFxRTtBQUNyRSwwRUFBb0U7QUFFcEUsOEVBQTJFO0FBRTNFLHFGQUFpRjtBQUNqRiw4Q0FBNEM7QUFDNUMsK0RBQXlEO0FBQ3pELHVFQUFpRTtBQUNqRSw2REFBdUQ7QUFFdkQ7SUFLSTtRQUNJLElBQUksQ0FBQyxZQUFZO1lBQ2IsdUNBQWtCO2lCQUNiLFFBQVEsRUFBZ0I7aUJBQ3hCLFNBQVMsQ0FBQywyQkFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFTyx3Q0FBUSxHQUFoQjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsMEJBQWdCLENBQUMsUUFBUSxDQUFDLElBQWtCLENBQUM7U0FDakU7SUFDTCxDQUFDO0lBQ00sZ0RBQWdCLEdBQXZCO1FBQUEsaUJBU0M7UUFSRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFPLE9BQU87O2dCQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUNqQyx1QkFBYSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDaEMsd0JBQWMsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQ3ZDLHlCQUFlLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxxQkFBUyxDQUFDLE9BQU8sQ0FBQztnQkFDdkQsT0FBTyxFQUFFLENBQUM7OzthQUNiLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSw0Q0FBWSxH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QUFDO2FBQ3BFO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sNkNBQWEsR0FBcEI7UUFDSSxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNMLDRCQUFDO0FBQUQsQ0FqR0EsQUFpR0MsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7R2FtZVN0YXRlLCBHYW1lVHlwZX0gZnJvbSAnLi4vLi4vRnJhbWV3b3JrL1Byb2Nlc3MvRW51bS9HYW1lU3RhdGUnXHJcbmltcG9ydCBVc2VyTW9uZXlDaGFuZ2VOb3RpZmljYXRpb24gZnJvbSBcIi4uLy4uL0ZyYW1ld29yay9Qcm9jZXNzL0dhbWVOb3RpZmljYXRpb24vVXNlck1vbmV5Q2hhbmdlTm90aWZpY2F0aW9uXCI7XHJcbmltcG9ydCBVc2VyV2luUG9pbnRTdGF0ZU5vdGlmaWNhdGlvbiBmcm9tIFwiLi4vLi4vRnJhbWV3b3JrL1Byb2Nlc3MvR2FtZU5vdGlmaWNhdGlvbi9Vc2VyV2luUG9pbnRTdGF0ZU5vdGlmaWNhdGlvblwiO1xyXG5pbXBvcnQgU2xvdEdhbWVNYW5hZ2VyIGZyb20gJy4uLy4uL0ZyYW1ld29yay9Qcm9jZXNzL1Nsb3RHYW1lTWFuYWdlcidcclxuaW1wb3J0IFNsb3RTdHlsZU1hbmFnZXIgZnJvbSAnLi4vLi4vRnJhbWV3b3JrL1Nsb3QvU2xvdFN0eWxlTWFuYWdlcidcclxuaW1wb3J0IE5vTGluZVNsb3QgZnJvbSAnLi4vLi4vRnJhbWV3b3JrL1Nsb3QvU2xvdFR5cGUvTm9MaW5lU2xvdCdcclxuaW1wb3J0IHtSZXNwb25zZVR5cGV9IGZyb20gXCIuLi8uLi9GcmFtZXdvcmsvV2ViUmVzcG9uc2UvRW51bS9SZXNwb25zZVR5cGVcIjtcclxuaW1wb3J0IE5vTGluZVJlc3VsdCBmcm9tIFwiLi4vLi4vRnJhbWV3b3JrL1dlYlJlc3BvbnNlL1NldmVyRGF0YU1vZGVsL05vcm1hbFJlc3VsdC9Ob0xpbmVSZXN1bHRcIjtcclxuaW1wb3J0IHtXZWJSZXNwb25zZU1hbmFnZXJ9IGZyb20gJy4uLy4uL0ZyYW1ld29yay9XZWJSZXNwb25zZS9XZWJSZXNwb25zZU1hbmFnZXInXHJcbmltcG9ydCB7c29ja2V0SlN9IGZyb20gJy4uLy4uL1NvY2tldC9Tb2NrZXQnXHJcbmltcG9ydCBTbG90Q29udHJvbGxlciBmcm9tICcuLi9Db250cm9sbGVyL1Nsb3RDb250cm9sbGVyJ1xyXG5pbXBvcnQgV2luTGV2ZWxDb250cm9sbGVyIGZyb20gJy4uL0NvbnRyb2xsZXIvV2luTGV2ZWxDb250cm9sbGVyJ1xyXG5pbXBvcnQgTWFpbkdhbWVMYWJlbCBmcm9tICcuLi9MYWJlbEV2ZW50L01haW5HYW1lTGFiZWwnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluR2FtZU5vcm1hbFByb2Nlc3MgaW1wbGVtZW50cyBJU2xvdFByb2NlZHVyZUV4ZWN1dGlvbkNvbnRhaW5lciB7XHJcblxyXG4gICAgcHJpdmF0ZSBzbG90U3R5bGU6IE5vTGluZVNsb3Q7XHJcbiAgICBwcml2YXRlIG5vcm1hbFJlc3VsdDogTm9MaW5lUmVzdWx0O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMubm9ybWFsUmVzdWx0ID1cclxuICAgICAgICAgICAgV2ViUmVzcG9uc2VNYW5hZ2VyXHJcbiAgICAgICAgICAgICAgICAuaW5zdGFuY2U8Tm9MaW5lUmVzdWx0PigpXHJcbiAgICAgICAgICAgICAgICAuZ2V0UmVzdWx0KFJlc3BvbnNlVHlwZS5OT1JNQUwpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25DcmVhdGUoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNsb3RTdHlsZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNsb3RTdHlsZSA9IFNsb3RTdHlsZU1hbmFnZXIuaW5zdGFuY2Uuc2xvdCBhcyBOb0xpbmVTbG90O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBvbkN1c3RvbWl6ZVN0YXJ0KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHRoaXMub25DcmVhdGUoKTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zbG90U3R5bGUuaW5pdGlhbGl6ZVN0YXRlKCk7XHJcbiAgICAgICAgICAgIE1haW5HYW1lTGFiZWwuaW5zdGFuY2UucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIFNsb3RDb250cm9sbGVyLmluc3RhbmNlLmNsb3NlV2luR3JpZCgpO1xyXG4gICAgICAgICAgICBTbG90R2FtZU1hbmFnZXIuaW5zdGFuY2UuZ2FtZVN0YXRlID0gR2FtZVN0YXRlLlBMQVlJTkc7XHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25TaW5lSW5HcmlkKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBzb2NrZXRKUy5TRlNUb1NlcnZlcihcIkJldFwiLCBTbG90R2FtZU1hbmFnZXIuaW5zdGFuY2UudXNlckJldFBvaW50KTtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5zbG90U3R5bGUuc2luZUluU2xvdCgpO1xyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uUnVuR3JpZCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5zbG90U3R5bGUucnVuU2xvdEFuaW1hdGlvbigpO1xyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uU2hvd0Fuc3dlcigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBjYy5sb2coXCJvblNob3dBbnN3ZXJcIik7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5vcm1hbFJlc3VsdC5Ub3RhbFdpblBvaW50ICE9IDApIHtcclxuICAgICAgICAgICAgICAgIFNsb3RDb250cm9sbGVyLmluc3RhbmNlLnNob3dXaW5HcmlkKHRoaXMubm9ybWFsUmVzdWx0LkdyaWRXaW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuY2hlY2tXaW5Qb2ludCgpO1xyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uQ3VzdG9taXplRW5kKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIFNsb3RHYW1lTWFuYWdlci5pbnN0YW5jZS5nYW1lU3RhdGUgPSBHYW1lU3RhdGUuU1RBTkRCWTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHVuZGVmaW5lZCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uQ2hhbmdlU3RhdHVzKCkge1xyXG4gICAgICAgIC8v5aaC5p6c5LiA6Iis5qih5byP5LitcmVzcG9uc2XnmoTlhY3osrvmrKHmlbjkuI3nrYnmlrwwLOmAsuWFpWZyZWXni4DmhYtcclxuICAgICAgICBpZiAodGhpcy5ub3JtYWxSZXN1bHQuRnJlZVNwaW5Db3VudCA+IDApIHtcclxuICAgICAgICAgICAgU2xvdEdhbWVNYW5hZ2VyLmluc3RhbmNlLmdhbWVTdGF0ZSA9IEdhbWVTdGF0ZS5GUkVFSU5HO1xyXG4gICAgICAgICAgICBTbG90R2FtZU1hbmFnZXIuaW5zdGFuY2UuY2hhbmdlUHJvY2VzcyhHYW1lVHlwZS5GUkVFKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNoZWNrV2luUG9pbnQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICBsZXQgd2luUG9pbnQgPSB0aGlzLm5vcm1hbFJlc3VsdC5Ub3RhbFdpblBvaW50O1xyXG4gICAgICAgICAgICBpZiAod2luUG9pbnQgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh3aW5Qb2ludCAhPSAwICYmIHRoaXMubm9ybWFsUmVzdWx0LkJhc2VMZXZlbFdpbiA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAvL+mhr+ekuihsZXZlbDowKeS4gOiIrOeNjuWLleeVq1xyXG4gICAgICAgICAgICAgICAgVXNlcldpblBvaW50U3RhdGVOb3RpZmljYXRpb24uaW5zdGFuY2Uubm90aWZ5KHdpblBvaW50LCAwKTtcclxuICAgICAgICAgICAgICAgIC8v6YWN5ZCI5LiA6Iis542O5YuV55Wr5pmC6ZaTLOmXnOmWieS4gOiIrOeNjuaZgizmm7TmlrAgdXNlciDph5HpoY1cclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIFVzZXJNb25leUNoYW5nZU5vdGlmaWNhdGlvbi5pbnN0YW5jZS5ub3RpZnkodGhpcy5ub3JtYWxSZXN1bHQuVXNlclBvaW50QWZ0ZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSwgOTAwKTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5ub3JtYWxSZXN1bHQuQmFzZUxldmVsV2luID4gMCkge1xyXG4gICAgICAgICAgICAgICAgLy/poa/npLrlpKfnjY7li5XnlatcclxuICAgICAgICAgICAgICAgIGxldCBub3dQb2ludCA9IHRoaXMubm9ybWFsUmVzdWx0LlRvdGFsV2luUG9pbnQ7XHJcbiAgICAgICAgICAgICAgICBXaW5MZXZlbENvbnRyb2xsZXIuaW5zdGFuY2Uuc2hvd1dpbkFib3ZlU3RhdGUobm93UG9pbnQsIHJlc29sdmUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uU2luZU91dEdyaWQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh1bmRlZmluZWQpO1xyXG4gICAgfVxyXG59Il19