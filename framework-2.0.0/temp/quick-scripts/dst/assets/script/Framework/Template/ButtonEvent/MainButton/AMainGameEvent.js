
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Template/ButtonEvent/MainButton/AMainGameEvent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c3dc3q2SuJAqZRCRiX68hmL', 'AMainGameEvent');
// script/Framework/Template/ButtonEvent/MainButton/AMainGameEvent.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var SocketSetting_1 = require("../../../../Socket/SocketSetting");
var ErrorManager_1 = require("../../../Error/ErrorManager");
var GameState_1 = require("../../../Process/Enum/GameState");
var AutoStateChangeNotification_1 = require("../../../Process/GameNotification/AutoStateChangeNotification");
var SpeedStateChangeNotification_1 = require("../../../Process/GameNotification/SpeedStateChangeNotification");
var AutoStateChangeObserver_1 = require("../../../Process/GameObserver/AutoStateChangeObserver");
var SlotGameManager_1 = require("../../../Process/SlotGameManager");
var StopNowStateNotification_1 = require("../../../Slot/SlotNotifivation/StopNowStateNotification");
var ResponseType_1 = require("../../../WebResponse/Enum/ResponseType");
var WebResponseManager_1 = require("../../../WebResponse/WebResponseManager");
var OverrideComponent_1 = require("../../OverrideComponent");
/**
 * @Author XIAO-LI-PIN
 * @Description (抽象類)遊戲主頁面按鈕事件
 * @Date 2021-05-26 上午 11:29
 * @Version 1.0
 */
var AMainGameEvent = /** @class */ (function (_super) {
    __extends(AMainGameEvent, _super);
    function AMainGameEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AMainGameEvent.prototype.onLoad = function () {
        this.isShowTotalBetFrame = false; //當前是否開啟總押注視窗
        this.keyboardListener = false; //當前是否常壓空白建
        this.tableInfo =
            WebResponseManager_1.WebResponseManager
                .instance()
                .getResult(ResponseType_1.ResponseType.TABLE_INFO);
        AutoStateChangeNotification_1.default //自動按鈕推播事件綁定
            .instance.subscribe(this.getAutoStateChangeObserver(), true);
        this.makeTotalBetButtonToListener(); //總押注視窗中按鈕監聽事件
        this.onCreate(); //初始自訂狀態
    };
    AMainGameEvent.prototype.start = function () {
        this.languageSetting(); //更換字體樣式與語系
    };
    /**
     * 觸控按壓時監聽
     * @private
     */
    AMainGameEvent.prototype.startButtonOnTouchStart = function () {
        this.unschedule(this.longTouchTimer); //清除計時器事件
        //如果該遊戲正在自動模式,將先取消自動狀態
        if (SlotGameManager_1.default.instance.isAutoState) {
            //推播auto事件
            this.autoNotify(false, SlotGameManager_1.default.instance.autoType);
            return;
        }
        this.scheduleOnce(this.longTouchTimer, 0.5);
    };
    /**
     * 長壓計時器事件,如果當前非auto狀態,將會開啟auto 並開始遊戲
     * @returns {Promise<void>}
     * @private
     */
    AMainGameEvent.prototype.longTouchTimer = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //推播auto事件
                        this.autoNotify(true, SlotGameManager_1.default.instance.autoType);
                        if (!SlotGameManager_1.default.instance.isAutoState) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.startButtonEvent()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 推播auto事件
     * @private
     */
    AMainGameEvent.prototype.autoNotify = function (isAuto, autoType) {
        AutoStateChangeNotification_1.default
            .instance.notify(isAuto, autoType, autoType);
    };
    /**
     * start監聽抬起時狀態
     * 取消長壓計時器事件,並進入開始遊戲事件
     * @private
     */
    AMainGameEvent.prototype.startButtonOnTouchEnd = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.unschedule(this.longTouchTimer);
                        return [4 /*yield*/, this.startButtonEvent()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 鍵盤空白鍵壓下時監聽
     * @param event
     * @private
     */
    AMainGameEvent.prototype.keyboardSpaceTouchStart = function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.space:
                if (!this.keyboardListener) {
                    this.keyboardListener = true;
                    this.startButtonOnTouchStart();
                }
                break;
        }
    };
    /**
     * 鍵盤空白鍵抬起時監聽
     * @param event
     * @private
     */
    AMainGameEvent.prototype.keyboardSpaceTouchEnd = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = event.keyCode;
                        switch (_a) {
                            case cc.macro.KEY.space: return [3 /*break*/, 1];
                        }
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.startButtonOnTouchEnd()];
                    case 2:
                        _b.sent();
                        this.keyboardListener = false;
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 自動狀態監聽者
     * 如有需求可自行override or 獲取監聽對象做關閉操作
     * @returns {AutoStateChangeObserver}
     * @protected
     */
    AMainGameEvent.prototype.getAutoStateChangeObserver = function () {
        var _this = this;
        if (!this._autoStateChangeObserver) {
            this._autoStateChangeObserver =
                new AutoStateChangeObserver_1.default(function (isAutomaticState, beforeAutoCount, afterAutoCount) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                this.autoEvent(isAutomaticState, afterAutoCount);
                                if (!isAutomaticState) return [3 /*break*/, 2];
                                return [4 /*yield*/, this.startButtonEvent()];
                            case 1:
                                _a.sent();
                                _a.label = 2;
                            case 2: return [2 /*return*/];
                        }
                    });
                }); }, this);
        }
        return this._autoStateChangeObserver;
    };
    /**
     * 開始遊戲監聽事件
     * @returns {Promise<void>}
     * @protected
     */
    AMainGameEvent.prototype.startButtonEvent = function () {
        return __awaiter(this, void 0, void 0, function () {
            var nowUserBetIndex, userBet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //如果當下總押注視窗開啟中,更改為執行關閉總押注視窗
                        if (this.isShowTotalBetFrame) {
                            this.isShowTotalBetFrame = !this.isShowTotalBetFrame;
                            this.totalBetFrameTouchEvent(false);
                            return [2 /*return*/];
                        }
                        //如果遊戲為執行中狀態,將可以即停操作
                        if (SlotGameManager_1.default.instance.gameState != GameState_1.GameState.STANDBY && SlotGameManager_1.default.instance.gameState != GameState_1.GameState.FREEING) {
                            //推播即停事件
                            StopNowStateNotification_1.default.instance.notify();
                            return [2 /*return*/];
                        }
                        nowUserBetIndex = SlotGameManager_1.default.instance.userBetPoint.LineBet;
                        userBet = this.tableInfo.LineTotalBet[nowUserBetIndex];
                        //如果用戶金額不足的情況
                        if (SlotGameManager_1.default.instance.userMoney - userBet < 0) {
                            ErrorManager_1.default.instance.serverError(false, SocketSetting_1.default.t("S_9003"));
                            return [2 /*return*/];
                        }
                        this.startEvent();
                        return [4 /*yield*/, SlotGameManager_1.default.instance.play()];
                    case 1:
                        _a.sent();
                        this.endEvent();
                        _a.label = 2;
                    case 2:
                        if (SlotGameManager_1.default.instance.isAutoState || SlotGameManager_1.default.instance.gameState === GameState_1.GameState.FREEING) return [3 /*break*/, 0];
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 自動按鈕監聽事件
     * 如果當前押注視窗開啟中,將更換為關閉視窗方法
     * 正常情況,推播當前auto狀態事件
     * @private
     */
    AMainGameEvent.prototype.autoButtonEventListener = function () {
        return __awaiter(this, void 0, void 0, function () {
            var isAuto;
            return __generator(this, function (_a) {
                this.unschedule(this.longTouchTimer); //將長案事件失效
                //如果當前押注視窗開啟中,將更換為關閉視窗方法
                if (this.isShowTotalBetFrame) {
                    this.isShowTotalBetFrame = !this.isShowTotalBetFrame;
                    this.totalBetFrameTouchEvent(false);
                    return [2 /*return*/];
                }
                isAuto = SlotGameManager_1.default.instance.isAutoState;
                this.autoNotify(!isAuto, SlotGameManager_1.default.instance.autoType);
                return [2 /*return*/];
            });
        });
    };
    /**
     * 加速按鈕監聽事件
     * @protected
     */
    AMainGameEvent.prototype.speedUpButtonEventListener = function () {
        var isSpeedUp = SlotGameManager_1.default.instance.isSpeedUp;
        SpeedStateChangeNotification_1.default.instance.notify(!isSpeedUp);
        this.speedUpEvent(SlotGameManager_1.default.instance.isSpeedUp);
    };
    /**
     * 打開或開關閉押注金額選擇框
     * 如果當前在遊戲中,將方法更改為顯示警告視窗
     * @protected
     */
    AMainGameEvent.prototype.totalBetFrameTouchEventListener = function () {
        //如果當前在遊戲中,將無法打開總押注視窗
        if (SlotGameManager_1.default.instance.gameState != GameState_1.GameState.STANDBY) {
            this.warningEvent();
            return;
        }
        this.isShowTotalBetFrame = !this.isShowTotalBetFrame;
        this.totalBetFrameTouchEvent(this.isShowTotalBetFrame);
    };
    /**
     * menu按鈕監聽事件
     * 如果當前在遊戲中,將方法更改為顯示警告視窗
     * @protected
     */
    AMainGameEvent.prototype.menuButtonEventListener = function () {
        if (SlotGameManager_1.default.instance.gameState != GameState_1.GameState.STANDBY) {
            this.warningEvent();
            return;
        }
        this.menuEvent();
    };
    return AMainGameEvent;
}(OverrideComponent_1.default));
exports.default = AMainGameEvent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXFRlbXBsYXRlXFxCdXR0b25FdmVudFxcTWFpbkJ1dHRvblxcQU1haW5HYW1lRXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0VBQTZEO0FBRTdELDREQUF1RDtBQUN2RCw2REFBMEQ7QUFDMUQsNkdBQXdHO0FBQ3hHLCtHQUEwRztBQUMxRyxpR0FBNEY7QUFDNUYsb0VBQStEO0FBQy9ELG9HQUErRjtBQUMvRix1RUFBb0U7QUFDcEUsOEVBQTJFO0FBQzNFLDZEQUF3RDtBQUV4RDs7Ozs7R0FLRztBQUNIO0lBQXFELGtDQUFpQjtJQUF0RTs7SUFpVEEsQ0FBQztJQTVSYSwrQkFBTSxHQUFoQjtRQUNJLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENBQUMsQ0FBMkMsYUFBYTtRQUN6RixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLENBQThDLFdBQVc7UUFDdkYsSUFBSSxDQUFDLFNBQVM7WUFDVix1Q0FBa0I7aUJBQ2IsUUFBUSxFQUFtQjtpQkFDM0IsU0FBUyxDQUFDLDJCQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDNUMscUNBQTJCLENBQWlELFlBQVk7YUFDbkYsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsMEJBQTBCLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsNEJBQTRCLEVBQUUsQ0FBQyxDQUF3QyxjQUFjO1FBQzFGLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUE0RCxRQUFRO0lBQ3hGLENBQUM7SUFFUyw4QkFBSyxHQUFmO1FBQ0ksSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQWEsV0FBVztJQUNuRCxDQUFDO0lBK0VEOzs7T0FHRztJQUNPLGdEQUF1QixHQUFqQztRQUNJLElBQUksQ0FBQyxV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QUFPLEVBQUU7WUFDekQsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3BCLE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQWpUQSxBQWlUQyxDQWpUb0QsMkJBQWlCLEdBaVRyRSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTb2NrZXRTZXR0aW5nIGZyb20gXCIuLi8uLi8uLi8uLi9Tb2NrZXQvU29ja2V0U2V0dGluZ1wiO1xyXG5pbXBvcnQge0F1dG9UeXBlfSBmcm9tIFwiLi4vLi4vLi4vQ29uZmlnL0VudW0vQ29uZmlnRW51bVwiO1xyXG5pbXBvcnQgRXJyb3JNYW5hZ2VyIGZyb20gXCIuLi8uLi8uLi9FcnJvci9FcnJvck1hbmFnZXJcIjtcclxuaW1wb3J0IHtHYW1lU3RhdGV9IGZyb20gXCIuLi8uLi8uLi9Qcm9jZXNzL0VudW0vR2FtZVN0YXRlXCI7XHJcbmltcG9ydCBBdXRvU3RhdGVDaGFuZ2VOb3RpZmljYXRpb24gZnJvbSBcIi4uLy4uLy4uL1Byb2Nlc3MvR2FtZU5vdGlmaWNhdGlvbi9BdXRvU3RhdGVDaGFuZ2VOb3RpZmljYXRpb25cIjtcclxuaW1wb3J0IFNwZWVkU3RhdGVDaGFuZ2VOb3RpZmljYXRpb24gZnJvbSBcIi4uLy4uLy4uL1Byb2Nlc3MvR2FtZU5vdGlmaWNhdGlvbi9TcGVlZFN0YXRlQ2hhbmdlTm90aWZpY2F0aW9uXCI7XHJcbmltcG9ydCBBdXRvU3RhdGVDaGFuZ2VPYnNlcnZlciBmcm9tIFwiLi4vLi4vLi4vUHJvY2Vzcy9HYW1lT2JzZXJ2ZXIvQXV0b1N0YXRlQ2hhbmdlT2JzZXJ2ZXJcIjtcclxuaW1wb3J0IFNsb3RHYW1lTWFuYWdlciBmcm9tIFwiLi4vLi4vLi4vUHJvY2Vzcy9TbG90R2FtZU1hbmFnZXJcIjtcclxuaW1wb3J0IFN0b3BOb3dTdGF0ZU5vdGlmaWNhdGlvbiBmcm9tIFwiLi4vLi4vLi4vU2xvdC9TbG90Tm90aWZpdmF0aW9uL1N0b3BOb3dTdGF0ZU5vdGlmaWNhdGlvblwiO1xyXG5pbXBvcnQge1Jlc3BvbnNlVHlwZX0gZnJvbSBcIi4uLy4uLy4uL1dlYlJlc3BvbnNlL0VudW0vUmVzcG9uc2VUeXBlXCI7XHJcbmltcG9ydCB7V2ViUmVzcG9uc2VNYW5hZ2VyfSBmcm9tIFwiLi4vLi4vLi4vV2ViUmVzcG9uc2UvV2ViUmVzcG9uc2VNYW5hZ2VyXCI7XHJcbmltcG9ydCBPdmVycmlkZUNvbXBvbmVudCBmcm9tIFwiLi4vLi4vT3ZlcnJpZGVDb21wb25lbnRcIjtcclxuXHJcbi8qKlxyXG4gKiBAQXV0aG9yIFhJQU8tTEktUElOXHJcbiAqIEBEZXNjcmlwdGlvbiAo5oq96LGh6aGeKemBiuaIsuS4u+mggemdouaMiemIleS6i+S7tlxyXG4gKiBARGF0ZSAyMDIxLTA1LTI2IOS4iuWNiCAxMToyOVxyXG4gKiBAVmVyc2lvbiAxLjBcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEFNYWluR2FtZUV2ZW50IGV4dGVuZHMgT3ZlcnJpZGVDb21wb25lbnQge1xyXG4gICAgLyoqXHJcbiAgICAgKiDnlbbliY3mmK/lkKbplovllZ/nuL3mirzms6joppbnqpdcclxuICAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgaXNTaG93VG90YWxCZXRGcmFtZTogYm9vbGVhbjtcclxuICAgIC8qKlxyXG4gICAgICog55W25YmN5piv5ZCm5bi45aOT56m655m95bu6XHJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgICAqIEBwcm90ZWN0ZWRcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGtleWJvYXJkTGlzdGVuZXI6IGJvb2xlYW47XHJcbiAgICAvKipcclxuICAgICAqIOiHquWLleeLgOaFi+S6i+S7tue2geWumuiAhVxyXG4gICAgICogQHR5cGUge0F1dG9TdGF0ZUNoYW5nZU9ic2VydmVyfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfYXV0b1N0YXRlQ2hhbmdlT2JzZXJ2ZXI6IEF1dG9TdGF0ZUNoYW5nZU9ic2VydmVyO1xyXG4gICAgcHJvdGVjdGVkIHRhYmxlSW5mbzogSVRhYmxlSW5mb01vZGVsO1xyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5pc1Nob3dUb3RhbEJldEZyYW1lID0gZmFsc2U7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v55W25YmN5piv5ZCm6ZaL5ZWf57i95oq85rOo6KaW56qXXHJcbiAgICAgICAgdGhpcy5rZXlib2FyZExpc3RlbmVyID0gZmFsc2U7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v55W25YmN5piv5ZCm5bi45aOT56m655m95bu6XHJcbiAgICAgICAgdGhpcy50YWJsZUluZm8gPVxyXG4gICAgICAgICAgICBXZWJSZXNwb25zZU1hbmFnZXJcclxuICAgICAgICAgICAgICAgIC5pbnN0YW5jZTxJVGFibGVJbmZvTW9kZWw+KClcclxuICAgICAgICAgICAgICAgIC5nZXRSZXN1bHQoUmVzcG9uc2VUeXBlLlRBQkxFX0lORk8pO1xyXG4gICAgICAgIEF1dG9TdGF0ZUNoYW5nZU5vdGlmaWNhdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+iHquWLleaMiemIleaOqOaSreS6i+S7tue2geWumlxyXG4gICAgICAgICAgICAuaW5zdGFuY2Uuc3Vic2NyaWJlKHRoaXMuZ2V0QXV0b1N0YXRlQ2hhbmdlT2JzZXJ2ZXIoKSwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5tYWtlVG90YWxCZXRCdXR0b25Ub0xpc3RlbmVyKCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v57i95oq85rOo6KaW56qX5Lit5oyJ6YiV55uj6IG95LqL5Lu2XHJcbiAgICAgICAgdGhpcy5vbkNyZWF0ZSgpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Yid5aeL6Ieq6KiC54uA5oWLXHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMubGFuZ3VhZ2VTZXR0aW5nKCk7ICAgICAgICAgICAgIC8v5pu05o+b5a2X6auU5qij5byP6IiH6Kqe57O7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4voh6roqILni4DmhYtcclxuICAgICAqIOazqOaEjzrnm6Hph4/kuI3opoHkvb/nlKhjb2NvcyDlhafnmoRvbkxvYWQoKTvmraTmlrnms5XljIXlkKvlnKjlhbbkuK1cclxuICAgICAqIEBwcm90ZWN0ZWRcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IG9uQ3JlYXRlKCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlpoLmnpzmnInpnIDopoHmm7Tmj5vlrZfpq5TmqKPlvI/oiIfoqp7ns7ss6KuL5Zyo6YCZ6KOh5L2/55SoXHJcbiAgICAgKiBAcHJvdGVjdGVkXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBsYW5ndWFnZVNldHRpbmcoKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOaJk+mWi+mWi+Wni+mBiuaIsuS6i+S7tuebo+iBvVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWJzdHJhY3Qgc3RhcnRCdXR0b25PbkVuYWJsZSgpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6Zec6ZaJ6ZaL5aeL6YGK5oiy5LqL5Lu255uj6IG9XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBzdGFydEJ1dHRvbkRpc2FibGUoKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOm7nuaTiiAo5omT6ZaL5oiW6Zec6ZaJKSDnuL3mirzms6joppbnqpfmjInpiJVcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNTaG93VG90YWxCZXRGcmFtZSA6IOaJk+mWi+aIlumXnOmWiVxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgdG90YWxCZXRGcmFtZVRvdWNoRXZlbnQoaXNTaG93VG90YWxCZXRGcmFtZTogYm9vbGVhbik7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDoh6rooYzmt7vliqDmirzms6joppbnqpflhafmiYDmnInmirzms6jmjInpiJXnm6Pogb1cclxuICAgICAqIEBwcm90ZWN0ZWRcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IG1ha2VUb3RhbEJldEJ1dHRvblRvTGlzdGVuZXIoKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOeVtuS4i+aYr+WQpijplovllZ/miJbpl5zplokp5Yqg6YCf54uA5oWL5LqL5Lu2XHJcbiAgICAgKiDmraTmlrnms5Xlt7LntpPntoHlrprmjqjmkq3kuovku7ZcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNTcGVlZFVwIDog6ZaL5ZWf5oiW6Zec6ZaJXHJcbiAgICAgKiBAcHJvdGVjdGVkXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBzcGVlZFVwRXZlbnQoaXNTcGVlZFVwOiBib29sZWFuKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOeVtuS4i+aYr+WQpijplovllZ/miJbpl5zplokp6Ieq5YuV54uA5oWL5LqL5Lu2XHJcbiAgICAgKiDmraTmlrnms5Xlt7LntpPntoHlrprmjqjmkq3kuovku7ZcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNBdXRvbWF0aWNTdGF0ZSA6XHJcbiAgICAgKiBAcGFyYW0ge0F1dG9UeXBlfSBhdXRvVHlwZVxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgYXV0b0V2ZW50KGlzQXV0b21hdGljU3RhdGU6IGJvb2xlYW4sIGF1dG9UeXBlOiBBdXRvVHlwZSk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpgYrmiLLplovlp4vln7fooYzmtYHnqIvliY3kuovku7ZcclxuICAgICAqIEBwcm90ZWN0ZWRcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IHN0YXJ0RXZlbnQoKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOmBiuaIsumWi+Wni+Wft+ihjOa1geeoi+WujOaIkOW+jOS6i+S7tlxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgZW5kRXZlbnQoKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOaJk+mWi+mBiuaIsuiPnOWWrlxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgbWVudUV2ZW50KCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorablkYrkuovku7ZcclxuICAgICAqIEBwcm90ZWN0ZWRcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IHdhcm5pbmdFdmVudCgpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6Ke45o6n5oyJ5aOT5pmC55uj6IG9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnRCdXR0b25PblRvdWNoU3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMubG9uZ1RvdWNoVGltZXIpOy8v5riF6Zmk6KiI5pmC5Zmo5LqL5Lu2XHJcbiAgICAgICAgLy/lpoLmnpzoqbLpgYrmiLLmraPlnKjoh6rli5XmqKHlvI8s5bCH5YWI5Y+W5raI6Ieq5YuV54uA5oWLXHJcbiAgICAgICAgaWYgKFNsb3RHYW1lTWFuYWdlci5pbnN0YW5jZS5pc0F1dG9TdGF0ZSkge1xyXG4gICAgICAgICAgICAvL+aOqOaSrWF1dG/kuovku7ZcclxuICAgICAgICAgICAgdGhpcy5hdXRvTm90aWZ5KGZhbHNlLCBTbG90R2FtZU1hbmFnZXIuaW5zdGFuY2UuYXV0b1R5cGUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKHRoaXMubG9uZ1RvdWNoVGltZXIsIDAuNSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOmVt+Wjk+ioiOaZguWZqOS6i+S7tizlpoLmnpznlbbliY3pnZ5hdXRv54uA5oWLLOWwh+acg+mWi+WVn2F1dG8g5Lim6ZaL5aeL6YGK5oiyXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgYXN5bmMgbG9uZ1RvdWNoVGltZXIoKSB7XHJcbiAgICAgICAgLy/mjqjmkq1hdXRv5LqL5Lu2XHJcbiAgICAgICAgdGhpcy5hdXRvTm90aWZ5KHRydWUsIFNsb3RHYW1lTWFuYWdlci5pbnN0YW5jZS5hdXRvVHlwZSk7XHJcbiAgICAgICAgaWYgKFNsb3RHYW1lTWFuYWdlci5pbnN0YW5jZS5pc0F1dG9TdGF0ZSkge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnN0YXJ0QnV0dG9uRXZlbnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmjqjmkq1hdXRv5LqL5Lu2XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGF1dG9Ob3RpZnkoaXNBdXRvOiBib29sZWFuLCBhdXRvVHlwZTogQXV0b1R5cGUpIHtcclxuICAgICAgICBBdXRvU3RhdGVDaGFuZ2VOb3RpZmljYXRpb25cclxuICAgICAgICAgICAgLmluc3RhbmNlLm5vdGlmeShpc0F1dG8sIGF1dG9UeXBlLCBhdXRvVHlwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzdGFydOebo+iBveaKrOi1t+aZgueLgOaFi1xyXG4gICAgICog5Y+W5raI6ZW35aOT6KiI5pmC5Zmo5LqL5Lu2LOS4pumAsuWFpemWi+Wni+mBiuaIsuS6i+S7tlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGFzeW5jIHN0YXJ0QnV0dG9uT25Ub3VjaEVuZCgpIHtcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5sb25nVG91Y2hUaW1lcik7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5zdGFydEJ1dHRvbkV2ZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpjbXnm6Tnqbrnmb3pjbXlo5PkuIvmmYLnm6Pogb1cclxuICAgICAqIEBwYXJhbSBldmVudFxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGtleWJvYXJkU3BhY2VUb3VjaFN0YXJ0KGV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnNwYWNlOlxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmtleWJvYXJkTGlzdGVuZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmtleWJvYXJkTGlzdGVuZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRCdXR0b25PblRvdWNoU3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmNteebpOepuueZvemNteaKrOi1t+aZguebo+iBvVxyXG4gICAgICogQHBhcmFtIGV2ZW50XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgYXN5bmMga2V5Ym9hcmRTcGFjZVRvdWNoRW5kKGV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnNwYWNlOlxyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5zdGFydEJ1dHRvbk9uVG91Y2hFbmQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMua2V5Ym9hcmRMaXN0ZW5lciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6Ieq5YuV54uA5oWL55uj6IG96ICFXHJcbiAgICAgKiDlpoLmnInpnIDmsYLlj6/oh6rooYxvdmVycmlkZSBvciDnjbLlj5bnm6Pogb3lsI3osaHlgZrpl5zplonmk43kvZxcclxuICAgICAqIEByZXR1cm5zIHtBdXRvU3RhdGVDaGFuZ2VPYnNlcnZlcn1cclxuICAgICAqIEBwcm90ZWN0ZWRcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGdldEF1dG9TdGF0ZUNoYW5nZU9ic2VydmVyKCk6IEF1dG9TdGF0ZUNoYW5nZU9ic2VydmVyIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2F1dG9TdGF0ZUNoYW5nZU9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2F1dG9TdGF0ZUNoYW5nZU9ic2VydmVyID1cclxuICAgICAgICAgICAgICAgIG5ldyBBdXRvU3RhdGVDaGFuZ2VPYnNlcnZlcihhc3luYyAoaXNBdXRvbWF0aWNTdGF0ZSwgYmVmb3JlQXV0b0NvdW50LCBhZnRlckF1dG9Db3VudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0b0V2ZW50KGlzQXV0b21hdGljU3RhdGUsIGFmdGVyQXV0b0NvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNBdXRvbWF0aWNTdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnN0YXJ0QnV0dG9uRXZlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F1dG9TdGF0ZUNoYW5nZU9ic2VydmVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6ZaL5aeL6YGK5oiy55uj6IG95LqL5Lu2XHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cclxuICAgICAqIEBwcm90ZWN0ZWRcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGFzeW5jIHN0YXJ0QnV0dG9uRXZlbnQoKSB7XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAvL+WmguaenOeVtuS4i+e4veaKvOazqOimlueql+mWi+WVn+S4rSzmm7TmlLnngrrln7fooYzpl5zplonnuL3mirzms6joppbnqpdcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNTaG93VG90YWxCZXRGcmFtZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1Nob3dUb3RhbEJldEZyYW1lID0gIXRoaXMuaXNTaG93VG90YWxCZXRGcmFtZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudG90YWxCZXRGcmFtZVRvdWNoRXZlbnQoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v5aaC5p6c6YGK5oiy54K65Z+36KGM5Lit54uA5oWLLOWwh+WPr+S7peWNs+WBnOaTjeS9nFxyXG4gICAgICAgICAgICBpZiAoU2xvdEdhbWVNYW5hZ2VyLmluc3RhbmNlLmdhbWVTdGF0ZSAhPSBHYW1lU3RhdGUuU1RBTkRCWSAmJiBTbG90R2FtZU1hbmFnZXIuaW5zdGFuY2UuZ2FtZVN0YXRlICE9IEdhbWVTdGF0ZS5GUkVFSU5HKSB7XHJcbiAgICAgICAgICAgICAgICAvL+aOqOaSreWNs+WBnOS6i+S7tlxyXG4gICAgICAgICAgICAgICAgU3RvcE5vd1N0YXRlTm90aWZpY2F0aW9uLmluc3RhbmNlLm5vdGlmeSgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v5Yik5pa355W25YmN5piv6YeR6aGN6Laz5aSgXHJcbiAgICAgICAgICAgIGxldCBub3dVc2VyQmV0SW5kZXggPSBTbG90R2FtZU1hbmFnZXIuaW5zdGFuY2UudXNlckJldFBvaW50LkxpbmVCZXQ7XHJcbiAgICAgICAgICAgIGxldCB1c2VyQmV0ID0gdGhpcy50YWJsZUluZm8uTGluZVRvdGFsQmV0W25vd1VzZXJCZXRJbmRleF07XHJcblxyXG4gICAgICAgICAgICAvL+WmguaenOeUqOaItumHkemhjeS4jei2s+eahOaDheazgVxyXG4gICAgICAgICAgICBpZiAoU2xvdEdhbWVNYW5hZ2VyLmluc3RhbmNlLnVzZXJNb25leSAtIHVzZXJCZXQgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBFcnJvck1hbmFnZXIuaW5zdGFuY2Uuc2VydmVyRXJyb3IoZmFsc2UsIFNvY2tldFNldHRpbmcudChcIlNfOTAwM1wiKSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRFdmVudCgpO1xyXG4gICAgICAgICAgICBhd2FpdCBTbG90R2FtZU1hbmFnZXIuaW5zdGFuY2UucGxheSgpO1xyXG4gICAgICAgICAgICB0aGlzLmVuZEV2ZW50KCk7XHJcblxyXG4gICAgICAgIH0gd2hpbGUgKFNsb3RHYW1lTWFuYWdlci5pbnN0YW5jZS5pc0F1dG9TdGF0ZSB8fCBTbG90R2FtZU1hbmFnZXIuaW5zdGFuY2UuZ2FtZVN0YXRlID09PSBHYW1lU3RhdGUuRlJFRUlORyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDoh6rli5XmjInpiJXnm6Pogb3kuovku7ZcclxuICAgICAqIOWmguaenOeVtuWJjeaKvOazqOimlueql+mWi+WVn+S4rSzlsIfmm7Tmj5vngrrpl5zplonoppbnqpfmlrnms5VcclxuICAgICAqIOato+W4uOaDheazgSzmjqjmkq3nlbbliY1hdXRv54uA5oWL5LqL5Lu2XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgYXN5bmMgYXV0b0J1dHRvbkV2ZW50TGlzdGVuZXIoKSB7XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMubG9uZ1RvdWNoVGltZXIpOy8v5bCH6ZW35qGI5LqL5Lu25aSx5pWIXHJcbiAgICAgICAgLy/lpoLmnpznlbbliY3mirzms6joppbnqpfplovllZ/kuK0s5bCH5pu05o+b54K66Zec6ZaJ6KaW56qX5pa55rOVXHJcbiAgICAgICAgaWYgKHRoaXMuaXNTaG93VG90YWxCZXRGcmFtZSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzU2hvd1RvdGFsQmV0RnJhbWUgPSAhdGhpcy5pc1Nob3dUb3RhbEJldEZyYW1lO1xyXG4gICAgICAgICAgICB0aGlzLnRvdGFsQmV0RnJhbWVUb3VjaEV2ZW50KGZhbHNlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaXNBdXRvID0gU2xvdEdhbWVNYW5hZ2VyLmluc3RhbmNlLmlzQXV0b1N0YXRlO1xyXG4gICAgICAgIHRoaXMuYXV0b05vdGlmeSghaXNBdXRvLCBTbG90R2FtZU1hbmFnZXIuaW5zdGFuY2UuYXV0b1R5cGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6YCf5oyJ6YiV55uj6IG95LqL5Lu2XHJcbiAgICAgKiBAcHJvdGVjdGVkXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBzcGVlZFVwQnV0dG9uRXZlbnRMaXN0ZW5lcigpIHtcclxuXHJcbiAgICAgICAgbGV0IGlzU3BlZWRVcCA9IFNsb3RHYW1lTWFuYWdlci5pbnN0YW5jZS5pc1NwZWVkVXA7XHJcblxyXG4gICAgICAgIFNwZWVkU3RhdGVDaGFuZ2VOb3RpZmljYXRpb24uaW5zdGFuY2Uubm90aWZ5KCFpc1NwZWVkVXApO1xyXG5cclxuICAgICAgICB0aGlzLnNwZWVkVXBFdmVudChTbG90R2FtZU1hbmFnZXIuaW5zdGFuY2UuaXNTcGVlZFVwKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmiZPplovmiJbplovpl5zplonmirzms6jph5HpoY3pgbjmk4fmoYZcclxuICAgICAqIOWmguaenOeVtuWJjeWcqOmBiuaIsuS4rSzlsIfmlrnms5Xmm7TmlLnngrrpoa/npLrorablkYroppbnqpdcclxuICAgICAqIEBwcm90ZWN0ZWRcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIHRvdGFsQmV0RnJhbWVUb3VjaEV2ZW50TGlzdGVuZXIoKSB7XHJcbiAgICAgICAgLy/lpoLmnpznlbbliY3lnKjpgYrmiLLkuK0s5bCH54Sh5rOV5omT6ZaL57i95oq85rOo6KaW56qXXHJcbiAgICAgICAgaWYgKFNsb3RHYW1lTWFuYWdlci5pbnN0YW5jZS5nYW1lU3RhdGUgIT0gR2FtZVN0YXRlLlNUQU5EQlkpIHtcclxuICAgICAgICAgICAgdGhpcy53YXJuaW5nRXZlbnQoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlzU2hvd1RvdGFsQmV0RnJhbWUgPSAhdGhpcy5pc1Nob3dUb3RhbEJldEZyYW1lO1xyXG4gICAgICAgIHRoaXMudG90YWxCZXRGcmFtZVRvdWNoRXZlbnQodGhpcy5pc1Nob3dUb3RhbEJldEZyYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIG1lbnXmjInpiJXnm6Pogb3kuovku7ZcclxuICAgICAqIOWmguaenOeVtuWJjeWcqOmBiuaIsuS4rSzlsIfmlrnms5Xmm7TmlLnngrrpoa/npLrorablkYroppbnqpdcclxuICAgICAqIEBwcm90ZWN0ZWRcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIG1lbnVCdXR0b25FdmVudExpc3RlbmVyKCkge1xyXG4gICAgICAgIGlmIChTbG90R2FtZU1hbmFnZXIuaW5zdGFuY2UuZ2FtZVN0YXRlICE9IEdhbWVTdGF0ZS5TVEFOREJZKSB7XHJcbiAgICAgICAgICAgIHRoaXMud2FybmluZ0V2ZW50KCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tZW51RXZlbnQoKTtcclxuICAgIH1cclxufSJdfQ==