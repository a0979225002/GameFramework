"use strict";
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