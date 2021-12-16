
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Process/SlotGameManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5ab12hTtxNNRL4payEp6ksx', 'SlotGameManager');
// script/Framework/Process/SlotGameManager.ts

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
var GameState_1 = require("./Enum/GameState");
var AutoStateChangeNotification_1 = require("./GameNotification/AutoStateChangeNotification");
var SpeedStateChangeNotification_1 = require("./GameNotification/SpeedStateChangeNotification");
var UserMoneyChangeNotification_1 = require("./GameNotification/UserMoneyChangeNotification");
var UserTotalBetChangeNotification_1 = require("./GameNotification/UserTotalBetChangeNotification");
var AutoStateChangeObserver_1 = require("./GameObserver/AutoStateChangeObserver");
var SpeedStateChangeObserver_1 = require("./GameObserver/SpeedStateChangeObserver");
var UserMoenyChangeObserver_1 = require("./GameObserver/UserMoenyChangeObserver");
var UserTotalBetChangeObserver_1 = require("./GameObserver/UserTotalBetChangeObserver");
var GameProcessFactory_1 = require("./GameProcessFactory");
/**
 * @Author XIAO-LI-PIN
 * @Description (介面)遊戲管理器,管理當前流程,遊戲當前狀態
 * @Date 2021-05-14 下午 03:44
 * @Version 1.1
 */
var SlotGameManager = /** @class */ (function () {
    function SlotGameManager(configManager) {
        this.configManager = configManager; //獲取ConfigManger,雙向綁定
        this.gameProcessFactory = new GameProcessFactory_1.default(this); //初始化流程工廠
        this._gameState = GameState_1.GameState.STANDBY; //初始遊戲狀態
        this._autoType = this.configManager.autoCount; //初始自動次數
        this._isAutoState = this.configManager.isAuto; //初始自否自動
        this._isSpeedUp = this.configManager.isSpeedUp; //初始是否加速
        this._automaticRemainingCount = this.configManager.autoCount; //初始自動剩餘次數
        this._userBetPoint = this.configManager.userBet; //初始玩家押住
        this._isResultOk = false; //初始尚未獲取server 該局資料
        this.inExecution = false; //初始尚未開使執行流程
        UserMoneyChangeNotification_1.default //訂閱用戶更新金額時,回傳推播事件
            .instance.subscribe(this.getUserMoneyChangeObserver(), true);
        UserTotalBetChangeNotification_1.default //訂閱用戶更新更換押注時,回傳推播事件
            .instance.subscribe(this.getUserTotalBetChangeObserver(), true);
        AutoStateChangeNotification_1.default //訂閱用戶更動自動狀態時,回傳推播事件
            .instance.subscribe(this.getAutoStateChangeObserver(), true);
        SpeedStateChangeNotification_1.default //訂閱用戶更新自動狀態時,回傳推播事件
            .instance.subscribe(this.getSpeedStateChangeObserver(), true);
    }
    /**
     *  懶漢加載
     *  初始化,只讓一個專案只有一次產生此class
     */
    SlotGameManager.setInstance = function (configManager) {
        if (!this._instance) {
            this._instance = new SlotGameManager(configManager);
        }
    };
    Object.defineProperty(SlotGameManager, "instance", {
        /**
         *  獲取已經初始化的靜態實例class
         */
        get: function () {
            if (!this._instance) {
                ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.GameProcessFW, "該類尚未實例化");
                return;
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    SlotGameManager.prototype.setProcess = function (gameType, process) {
        this.gameProcessFactory.setProcess(gameType, process);
        return this;
    };
    SlotGameManager.prototype.setInitialProcess = function (gameType) {
        this.gameProcessFactory.changeProcess(gameType);
    };
    SlotGameManager.prototype.changeProcess = function (gameType) {
        this.gameProcessFactory.changeProcess(gameType);
    };
    SlotGameManager.prototype.play = function () {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.inExecution) return [3 /*break*/, 2];
                        this.processState(true); //流程開始
                        return [4 /*yield*/, this.gameProcessFactory.useProcess()];
                    case 1:
                        _a.sent();
                        this.processState(false); //流程循環結束
                        resolve();
                        return [3 /*break*/, 3];
                    case 2:
                        ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.ProcedureFW, "流程尚未結束,請勿重複執行");
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    ;
    /**
     * 遊戲流程開始與結束時的狀態
     * @param {boolean} state : 流程開始 or 流程結束
     * @private
     */
    SlotGameManager.prototype.processState = function (state) {
        if (state) {
            this._isResultOk = false;
            this.inExecution = true;
        }
        else {
            this.inExecution = false;
            this._isResultOk = false;
        }
    };
    /**
     * 拿取Framework內用戶更新金額時,推播給框架的綁定者
     * 注意:如果取消框架內的訂閱者,框架內的參數將無法自動更新,需手動自行更新
     */
    SlotGameManager.prototype.getUserMoneyChangeObserver = function () {
        var _this = this;
        if (!this.userMoneyChangeObserver) {
            this.userMoneyChangeObserver = new UserMoenyChangeObserver_1.default(function (money) {
                _this._userMoney = money;
            }, this);
        }
        return this.userMoneyChangeObserver;
    };
    /**
     * 拿取Framework內用戶更換押注時,推播給框架的綁定者
     * 注意:如果取消框架內的訂閱者,框架內的參數將無法自動更新,需手動自行更新
     */
    SlotGameManager.prototype.getUserTotalBetChangeObserver = function () {
        var _this = this;
        if (!this.userTotalBetChangeObserver) {
            this.userTotalBetChangeObserver = new UserTotalBetChangeObserver_1.default(function (beforeIndex, afterIndex) {
                _this._userBetPoint.LineBet = afterIndex;
            }, this);
        }
        return this.userTotalBetChangeObserver;
    };
    /**
     * 拿取Framework內用戶更新auto狀態時,推播給框架的綁定者
     * 注意:如果取消框架內的訂閱者,框架內的參數將無法自動更新,需手動自行更新
     */
    SlotGameManager.prototype.getAutoStateChangeObserver = function () {
        var _this = this;
        if (!this.autoStateChangeObserver) {
            this.autoStateChangeObserver = new AutoStateChangeObserver_1.default(function (isAutomaticState, beforeAutoCount, afterAutoCount) {
                _this._autoType = afterAutoCount;
                _this._isAutoState = isAutomaticState;
            }, this);
        }
        return this.autoStateChangeObserver;
    };
    /**
     * 拿取Framework內用戶更新加速狀態時,推播給框架的綁定者
     * 注意:如果取消框架內的訂閱者,框架內的參數將無法自動更新,需手動自行更新
     */
    SlotGameManager.prototype.getSpeedStateChangeObserver = function () {
        var _this = this;
        if (!this.speedStateChangeObserver) {
            this.speedStateChangeObserver = new SpeedStateChangeObserver_1.default(function (isSpeedUp) {
                _this._isSpeedUp = isSpeedUp;
            }, this);
        }
        return this.speedStateChangeObserver;
    };
    /**
     * 更新當前玩家押注金額
     * 如需同步,建議使用推播事件更新
     * @param {number} betIndex
     * @returns {UserBetPoint}
     */
    SlotGameManager.prototype.updateUserBetPoint = function (betIndex) {
        this._userBetPoint.LineBet = betIndex;
        return this._userBetPoint;
    };
    /**
     * 更新當前auto次數
     * 如果需要同步所有auto次數,建議使用推播事件更新
     * @param {AutoType} autoType
     * @returns {AutoType}
     */
    SlotGameManager.prototype.updateAutoCount = function (autoType) {
        this._autoType = autoType;
        return this._autoType;
    };
    /**
     * 更動當前自動狀態
     * 如果是自動狀態,將會更動為非自動
     * 如果是非自動狀態,將會更動自動
     * 如果需要同步所有auto狀態,建議綁定推播事件更新
     * @returns {boolean}
     */
    SlotGameManager.prototype.updateAuto = function () {
        this._isAutoState = !this._isAutoState;
        if (this._isAutoState) {
            this._automaticRemainingCount = this._autoType;
        }
        return this.isAutoState;
    };
    /**
     * 更新當前速度
     * 如果是加速狀態,將會更動為不加速
     * 如果無加速狀態,將會更動加速狀態
     * 如果需要同步所有auto狀態,建議綁定推播事件更新
     * @returns {boolean}
     */
    SlotGameManager.prototype.updateSpeed = function () {
        this._isSpeedUp = !this._isSpeedUp;
        return this._isSpeedUp;
    };
    /**
     * 清除堵塞狀態
     * 注意:清除該狀態後,該次的流程即使尚未執行完,也能執行下次流程
     */
    SlotGameManager.prototype.remake = function () {
        this.processState(false);
    };
    Object.defineProperty(SlotGameManager.prototype, "gameState", {
        get: function () {
            return this._gameState;
        },
        set: function (value) {
            this._gameState = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SlotGameManager.prototype, "autoType", {
        get: function () {
            return this._autoType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SlotGameManager.prototype, "isAutoState", {
        get: function () {
            return this._isAutoState;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SlotGameManager.prototype, "isSpeedUp", {
        get: function () {
            return this._isSpeedUp;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SlotGameManager.prototype, "automaticRemainingCount", {
        get: function () {
            return this._automaticRemainingCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SlotGameManager.prototype, "userBetPoint", {
        get: function () {
            return this._userBetPoint;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SlotGameManager.prototype, "userMoney", {
        get: function () {
            return this._userMoney;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SlotGameManager.prototype, "isResultOk", {
        get: function () {
            return this._isResultOk;
        },
        set: function (value) {
            this._isResultOk = value;
        },
        enumerable: false,
        configurable: true
    });
    return SlotGameManager;
}());
exports.default = SlotGameManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXFByb2Nlc3NcXFNsb3RHYW1lTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLG1FQUF3RDtBQUN4RCxzREFBZ0Q7QUFDaEQsOENBQW9EO0FBQ3BELDhGQUF5RjtBQUN6RixnR0FBMkY7QUFDM0YsOEZBQXlGO0FBQ3pGLG9HQUErRjtBQUMvRixrRkFBNkU7QUFDN0Usb0ZBQStFO0FBQy9FLGtGQUE2RTtBQUM3RSx3RkFBbUY7QUFDbkYsMkRBQXNEO0FBSXREOzs7OztHQUtHO0FBQ0g7SUFtQkkseUJBQW9CLGFBQWlDO1FBRWpELElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDLENBQTZELHFCQUFxQjtRQUNySCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSw0QkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUF5QyxTQUFTO1FBQ3pHLElBQUksQ0FBQyxVQUFVLEdBQUcscUJBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBNEQsUUFBUTtRQUN4RyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQWtELFFBQVE7UUFDeEcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFrRCxRQUFRO1FBQ3hHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBaUQsUUFBUTtRQUN4RyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBbUMsVUFBVTtRQUMxRyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQWdELFFBQVE7UUFDeEcsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENB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SSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUE7UUFDM0IsQ0FBQzs7O09BQUE7SUFNRCxzQkFBVyxxQ0FBUTthQUFuQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQTtRQUN6QixDQUFDOzs7T0FBQTtJQUVELHNCQUFXLHdDQUFXO2FBQXRCO1lBQ0ksT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFBO1FBQzVCLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsc0NBQVM7YUFBcEI7WUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUE7UUFDMUIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyxvREFBdUI7YUFBbEM7WUFDSSxPQUFPLElBQUksQ0FBQyx3QkFBd0IsQ0FBQTtRQUN4QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFXLHlDQUFZO2FBQXZCO1lBQ0ksT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFBO1FBQzdCLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsc0NBQVM7YUFBcEI7WUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUE7UUFDMUIsQ0FBQzs7O09BQUE7SUFHRCxzQkFBSSx1Q0FBVTthQUFkO1lBQ0ksT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzVCLENBQUM7YUFFRCxVQUFlLEtBQWM7WUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDN0IsQ0FBQzs7O09BSkE7SUFLTCxzQkFBQztBQUFELENBOVBBLEFBOFBDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0F1dG9UeXBlfSBmcm9tICcuLi9Db25maWcvRW51bS9Db25maWdFbnVtJ1xyXG5pbXBvcnQge1VzZXJCZXRQb2ludCwgSVNsb3RDb25maWdNYW5hZ2VyfSBmcm9tIFwiLi4vQ29uZmlnL0lDb25maWcvSVNsb3RDb25maWdNYW5hZ2VyXCI7XHJcbmltcG9ydCB7RXJyb3JUeXBlfSBmcm9tICcuLi9FcnJvci9FbnVtL0Vycm9yTWFuYWdlckVudW0nXHJcbmltcG9ydCBFcnJvck1hbmFnZXIgZnJvbSAnLi4vRXJyb3IvRXJyb3JNYW5hZ2VyJ1xyXG5pbXBvcnQge0dhbWVTdGF0ZSwgR2FtZVR5cGV9IGZyb20gJy4vRW51bS9HYW1lU3RhdGUnXHJcbmltcG9ydCBBdXRvU3RhdGVDaGFuZ2VOb3RpZmljYXRpb24gZnJvbSBcIi4vR2FtZU5vdGlmaWNhdGlvbi9BdXRvU3RhdGVDaGFuZ2VOb3RpZmljYXRpb25cIjtcclxuaW1wb3J0IFNwZWVkU3RhdGVDaGFuZ2VOb3RpZmljYXRpb24gZnJvbSBcIi4vR2FtZU5vdGlmaWNhdGlvbi9TcGVlZFN0YXRlQ2hhbmdlTm90aWZpY2F0aW9uXCI7XHJcbmltcG9ydCBVc2VyTW9uZXlDaGFuZ2VOb3RpZmljYXRpb24gZnJvbSBcIi4vR2FtZU5vdGlmaWNhdGlvbi9Vc2VyTW9uZXlDaGFuZ2VOb3RpZmljYXRpb25cIjtcclxuaW1wb3J0IFVzZXJUb3RhbEJldENoYW5nZU5vdGlmaWNhdGlvbiBmcm9tIFwiLi9HYW1lTm90aWZpY2F0aW9uL1VzZXJUb3RhbEJldENoYW5nZU5vdGlmaWNhdGlvblwiO1xyXG5pbXBvcnQgQXV0b1N0YXRlQ2hhbmdlT2JzZXJ2ZXIgZnJvbSBcIi4vR2FtZU9ic2VydmVyL0F1dG9TdGF0ZUNoYW5nZU9ic2VydmVyXCI7XHJcbmltcG9ydCBTcGVlZFN0YXRlQ2hhbmdlT2JzZXJ2ZXIgZnJvbSBcIi4vR2FtZU9ic2VydmVyL1NwZWVkU3RhdGVDaGFuZ2VPYnNlcnZlclwiO1xyXG5pbXBvcnQgVXNlck1vbmV5Q2hhbmdlT2JzZXJ2ZXIgZnJvbSBcIi4vR2FtZU9ic2VydmVyL1VzZXJNb2VueUNoYW5nZU9ic2VydmVyXCI7XHJcbmltcG9ydCBVc2VyVG90YWxCZXRDaGFuZ2VPYnNlcnZlciBmcm9tIFwiLi9HYW1lT2JzZXJ2ZXIvVXNlclRvdGFsQmV0Q2hhbmdlT2JzZXJ2ZXJcIjtcclxuaW1wb3J0IEdhbWVQcm9jZXNzRmFjdG9yeSBmcm9tIFwiLi9HYW1lUHJvY2Vzc0ZhY3RvcnlcIjtcclxuaW1wb3J0IHtJR2FtZVByb2Nlc3NGYWN0b3J5fSBmcm9tIFwiLi9JR2FtZVByb2Nlc3NGYWN0b3J5XCI7XHJcbmltcG9ydCBJU2xvdEdhbWVNYW5hZ2VyIGZyb20gJy4vSVNsb3RHYW1lTWFuYWdlcidcclxuXHJcbi8qKlxyXG4gKiBAQXV0aG9yIFhJQU8tTEktUElOXHJcbiAqIEBEZXNjcmlwdGlvbiAo5LuL6Z2iKemBiuaIsueuoeeQhuWZqCznrqHnkIbnlbbliY3mtYHnqIss6YGK5oiy55W25YmN54uA5oWLXHJcbiAqIEBEYXRlIDIwMjEtMDUtMTQg5LiL5Y2IIDAzOjQ0XHJcbiAqIEBWZXJzaW9uIDEuMVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xvdEdhbWVNYW5hZ2VyIGltcGxlbWVudHMgSVNsb3RHYW1lTWFuYWdlciB7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBJU2xvdEdhbWVNYW5hZ2VyXHJcbiAgICBwcml2YXRlIGNvbmZpZ01hbmFnZXI6IElTbG90Q29uZmlnTWFuYWdlcjtcclxuICAgIHByaXZhdGUgX2dhbWVTdGF0ZTogR2FtZVN0YXRlO1xyXG4gICAgcHJpdmF0ZSBfYXV0b1R5cGU6IEF1dG9UeXBlO1xyXG4gICAgcHJpdmF0ZSBfaXNBdXRvU3RhdGU6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIF9pc1NwZWVkVXA6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIF9hdXRvbWF0aWNSZW1haW5pbmdDb3VudDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfdXNlck1vbmV5OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF91c2VyQmV0UG9pbnQ6IFVzZXJCZXRQb2ludDtcclxuICAgIHByaXZhdGUgX2lzUmVzdWx0T2s6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIGluRXhlY3V0aW9uOiBib29sZWFuXHJcbiAgICBwcml2YXRlIGdhbWVQcm9jZXNzRmFjdG9yeTogSUdhbWVQcm9jZXNzRmFjdG9yeTtcclxuICAgIHByaXZhdGUgdXNlck1vbmV5Q2hhbmdlT2JzZXJ2ZXI6IFVzZXJNb25leUNoYW5nZU9ic2VydmVyO1xyXG4gICAgcHJpdmF0ZSB1c2VyVG90YWxCZXRDaGFuZ2VPYnNlcnZlcjogVXNlclRvdGFsQmV0Q2hhbmdlT2JzZXJ2ZXI7XHJcbiAgICBwcml2YXRlIGF1dG9TdGF0ZUNoYW5nZU9ic2VydmVyOiBBdXRvU3RhdGVDaGFuZ2VPYnNlcnZlcjtcclxuICAgIHByaXZhdGUgc3BlZWRTdGF0ZUNoYW5nZU9ic2VydmVyOiBTcGVlZFN0YXRlQ2hhbmdlT2JzZXJ2ZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcihjb25maWdNYW5hZ2VyOiBJU2xvdENvbmZpZ01hbmFnZXIpIHtcclxuXHJcbiAgICAgICAgdGhpcy5jb25maWdNYW5hZ2VyID0gY29uZmlnTWFuYWdlcjsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/njbLlj5ZDb25maWdNYW5nZXIs6ZuZ5ZCR57aB5a6aXHJcbiAgICAgICAgdGhpcy5nYW1lUHJvY2Vzc0ZhY3RvcnkgPSBuZXcgR2FtZVByb2Nlc3NGYWN0b3J5KHRoaXMpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/liJ3lp4vljJbmtYHnqIvlt6Xlu6BcclxuICAgICAgICB0aGlzLl9nYW1lU3RhdGUgPSBHYW1lU3RhdGUuU1RBTkRCWTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WIneWni+mBiuaIsueLgOaFi1xyXG4gICAgICAgIHRoaXMuX2F1dG9UeXBlID0gdGhpcy5jb25maWdNYW5hZ2VyLmF1dG9Db3VudDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Yid5aeL6Ieq5YuV5qyh5pW4XHJcbiAgICAgICAgdGhpcy5faXNBdXRvU3RhdGUgPSB0aGlzLmNvbmZpZ01hbmFnZXIuaXNBdXRvOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/liJ3lp4voh6rlkKboh6rli5VcclxuICAgICAgICB0aGlzLl9pc1NwZWVkVXAgPSB0aGlzLmNvbmZpZ01hbmFnZXIuaXNTcGVlZFVwOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WIneWni+aYr+WQpuWKoOmAn1xyXG4gICAgICAgIHRoaXMuX2F1dG9tYXRpY1JlbWFpbmluZ0NvdW50ID0gdGhpcy5jb25maWdNYW5hZ2VyLmF1dG9Db3VudDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Yid5aeL6Ieq5YuV5Ymp6aSY5qyh5pW4XHJcbiAgICAgICAgdGhpcy5fdXNlckJldFBvaW50ID0gdGhpcy5jb25maWdNYW5hZ2VyLnVzZXJCZXQ7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/liJ3lp4vnjqnlrrbmirzkvY9cclxuICAgICAgICB0aGlzLl9pc1Jlc3VsdE9rID0gZmFsc2U7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WIneWni+WwmuacqueNsuWPlnNlcnZlciDoqbLlsYDos4fmlplcclxuICAgICAgICB0aGlzLmluRXhlY3V0aW9uID0gZmFsc2U7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WIneWni+WwmuacqumWi+S9v+Wft+ihjOa1geeoi1xyXG4gICAgICAgIFVzZXJNb25leUNoYW5nZU5vdGlmaWNhdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6KiC6Zax55So5oi25pu05paw6YeR6aGN5pmCLOWbnuWCs+aOqOaSreS6i+S7tlxyXG4gICAgICAgICAgICAuaW5zdGFuY2Uuc3Vic2NyaWJlKHRoaXMuZ2V0VXNlck1vbmV5Q2hhbmdlT2JzZXJ2ZXIoKSwgdHJ1ZSk7XHJcbiAgICAgICAgVXNlclRvdGFsQmV0Q2hhbmdlTm90aWZpY2F0aW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/oqILplrHnlKjmiLbmm7TmlrDmm7Tmj5vmirzms6jmmYIs5Zue5YKz5o6o5pKt5LqL5Lu2XHJcbiAgICAgICAgICAgIC5pbnN0YW5jZS5zdWJzY3JpYmUodGhpcy5nZXRVc2VyVG90YWxCZXRDaGFuZ2VPYnNlcnZlcigpLCB0cnVlKTtcclxuICAgICAgICBBdXRvU3RhdGVDaGFuZ2VOb3RpZmljYXRpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+iogumWseeUqOaItuabtOWLleiHquWLleeLgOaFi+aZgizlm57lgrPmjqjmkq3kuovku7ZcclxuICAgICAgICAgICAgLmluc3RhbmNlLnN1YnNjcmliZSh0aGlzLmdldEF1dG9TdGF0ZUNoYW5nZU9ic2VydmVyKCksIHRydWUpO1xyXG4gICAgICAgIFNwZWVkU3RhdGVDaGFuZ2VOb3RpZmljYXRpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6KiC6Zax55So5oi25pu05paw6Ieq5YuV54uA5oWL5pmCLOWbnuWCs+aOqOaSreS6i+S7tlxyXG4gICAgICAgICAgICAuaW5zdGFuY2Uuc3Vic2NyaWJlKHRoaXMuZ2V0U3BlZWRTdGF0ZUNoYW5nZU9ic2VydmVyKCksIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogIOaHtua8ouWKoOi8iVxyXG4gICAgICogIOWIneWni+WMlizlj6rorpPkuIDlgIvlsIjmoYjlj6rmnInkuIDmrKHnlKLnlJ/mraRjbGFzc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldEluc3RhbmNlKGNvbmZpZ01hbmFnZXI6IElTbG90Q29uZmlnTWFuYWdlcikge1xyXG4gICAgICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgU2xvdEdhbWVNYW5hZ2VyKGNvbmZpZ01hbmFnZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAg542y5Y+W5bey57aT5Yid5aeL5YyW55qE6Z2c5oWL5a+m5L6LY2xhc3NcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgaW5zdGFuY2UoKTogSVNsb3RHYW1lTWFuYWdlciB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICBFcnJvck1hbmFnZXIuaW5zdGFuY2UuZXhlY3V0ZUVycm9yKEVycm9yVHlwZS5HYW1lUHJvY2Vzc0ZXLCBcIuipsumhnuWwmuacquWvpuS+i+WMllwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UHJvY2VzcyhnYW1lVHlwZTogR2FtZVR5cGUgfCBzdHJpbmcsIHByb2Nlc3M6IElQcm9jZXNzKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy5nYW1lUHJvY2Vzc0ZhY3Rvcnkuc2V0UHJvY2VzcyhnYW1lVHlwZSwgcHJvY2Vzcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SW5pdGlhbFByb2Nlc3MoZ2FtZVR5cGU6IEdhbWVUeXBlIHwgc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lUHJvY2Vzc0ZhY3RvcnkuY2hhbmdlUHJvY2VzcyhnYW1lVHlwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlUHJvY2VzcyhnYW1lVHlwZTogR2FtZVR5cGUgfCBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmdhbWVQcm9jZXNzRmFjdG9yeS5jaGFuZ2VQcm9jZXNzKGdhbWVUeXBlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGxheSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oYXN5bmMgKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmluRXhlY3V0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NTdGF0ZSh0cnVlKTsvL+a1geeoi+mWi+Wni1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5nYW1lUHJvY2Vzc0ZhY3RvcnkudXNlUHJvY2VzcygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzU3RhdGUoZmFsc2UpOy8v5rWB56iL5b6q55Kw57WQ5p2fXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBFcnJvck1hbmFnZXIuaW5zdGFuY2UuZXhlY3V0ZUVycm9yKEVycm9yVHlwZS5Qcm9jZWR1cmVGVywgXCLmtYHnqIvlsJrmnKrntZDmnZ8s6KuL5Yu/6YeN6KSH5Z+36KGMXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6YGK5oiy5rWB56iL6ZaL5aeL6IiH57WQ5p2f5pmC55qE54uA5oWLXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHN0YXRlIDog5rWB56iL6ZaL5aeLIG9yIOa1geeoi+e1kOadn1xyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBwcm9jZXNzU3RhdGUoc3RhdGU6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAoc3RhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5faXNSZXN1bHRPayA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmluRXhlY3V0aW9uID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmluRXhlY3V0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzUmVzdWx0T2sgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmi7/lj5ZGcmFtZXdvcmvlhafnlKjmiLbmm7TmlrDph5HpoY3mmYIs5o6o5pKt57Wm5qGG5p6255qE57aB5a6a6ICFXHJcbiAgICAgKiDms6jmhI865aaC5p6c5Y+W5raI5qGG5p625YWn55qE6KiC6Zax6ICFLOahhuaetuWFp+eahOWPg+aVuOWwh+eEoeazleiHquWLleabtOaWsCzpnIDmiYvli5Xoh6rooYzmm7TmlrBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldFVzZXJNb25leUNoYW5nZU9ic2VydmVyKCk6IFVzZXJNb25leUNoYW5nZU9ic2VydmVyIHtcclxuICAgICAgICBpZiAoIXRoaXMudXNlck1vbmV5Q2hhbmdlT2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy51c2VyTW9uZXlDaGFuZ2VPYnNlcnZlciA9IG5ldyBVc2VyTW9uZXlDaGFuZ2VPYnNlcnZlcigobW9uZXkpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3VzZXJNb25leSA9IG1vbmV5O1xyXG4gICAgICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudXNlck1vbmV5Q2hhbmdlT2JzZXJ2ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmi7/lj5ZGcmFtZXdvcmvlhafnlKjmiLbmm7Tmj5vmirzms6jmmYIs5o6o5pKt57Wm5qGG5p6255qE57aB5a6a6ICFXHJcbiAgICAgKiDms6jmhI865aaC5p6c5Y+W5raI5qGG5p625YWn55qE6KiC6Zax6ICFLOahhuaetuWFp+eahOWPg+aVuOWwh+eEoeazleiHquWLleabtOaWsCzpnIDmiYvli5Xoh6rooYzmm7TmlrBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldFVzZXJUb3RhbEJldENoYW5nZU9ic2VydmVyKCk6IFVzZXJUb3RhbEJldENoYW5nZU9ic2VydmVyIHtcclxuICAgICAgICBpZiAoIXRoaXMudXNlclRvdGFsQmV0Q2hhbmdlT2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy51c2VyVG90YWxCZXRDaGFuZ2VPYnNlcnZlciA9IG5ldyBVc2VyVG90YWxCZXRDaGFuZ2VPYnNlcnZlcigoYmVmb3JlSW5kZXgsIGFmdGVySW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3VzZXJCZXRQb2ludC5MaW5lQmV0ID0gYWZ0ZXJJbmRleDtcclxuICAgICAgICAgICAgfSwgdGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnVzZXJUb3RhbEJldENoYW5nZU9ic2VydmVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5ou/5Y+WRnJhbWV3b3Jr5YWn55So5oi25pu05pawYXV0b+eLgOaFi+aZgizmjqjmkq3ntabmoYbmnrbnmoTntoHlrprogIVcclxuICAgICAqIOazqOaEjzrlpoLmnpzlj5bmtojmoYbmnrblhafnmoToqILplrHogIUs5qGG5p625YWn55qE5Y+D5pW45bCH54Sh5rOV6Ieq5YuV5pu05pawLOmcgOaJi+WLleiHquihjOabtOaWsFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0QXV0b1N0YXRlQ2hhbmdlT2JzZXJ2ZXIoKTogQXV0b1N0YXRlQ2hhbmdlT2JzZXJ2ZXIge1xyXG4gICAgICAgIGlmICghdGhpcy5hdXRvU3RhdGVDaGFuZ2VPYnNlcnZlcikge1xyXG4gICAgICAgICAgICB0aGlzLmF1dG9TdGF0ZUNoYW5nZU9ic2VydmVyID0gbmV3IEF1dG9TdGF0ZUNoYW5nZU9ic2VydmVyKChpc0F1dG9tYXRpY1N0YXRlLCBiZWZvcmVBdXRvQ291bnQsIGFmdGVyQXV0b0NvdW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hdXRvVHlwZSA9IGFmdGVyQXV0b0NvdW50O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faXNBdXRvU3RhdGUgPSBpc0F1dG9tYXRpY1N0YXRlO1xyXG4gICAgICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0b1N0YXRlQ2hhbmdlT2JzZXJ2ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmi7/lj5ZGcmFtZXdvcmvlhafnlKjmiLbmm7TmlrDliqDpgJ/ni4DmhYvmmYIs5o6o5pKt57Wm5qGG5p6255qE57aB5a6a6ICFXHJcbiAgICAgKiDms6jmhI865aaC5p6c5Y+W5raI5qGG5p625YWn55qE6KiC6Zax6ICFLOahhuaetuWFp+eahOWPg+aVuOWwh+eEoeazleiHquWLleabtOaWsCzpnIDmiYvli5Xoh6rooYzmm7TmlrBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldFNwZWVkU3RhdGVDaGFuZ2VPYnNlcnZlcigpOiBTcGVlZFN0YXRlQ2hhbmdlT2JzZXJ2ZXIge1xyXG4gICAgICAgIGlmICghdGhpcy5zcGVlZFN0YXRlQ2hhbmdlT2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5zcGVlZFN0YXRlQ2hhbmdlT2JzZXJ2ZXIgPSBuZXcgU3BlZWRTdGF0ZUNoYW5nZU9ic2VydmVyKChpc1NwZWVkVXApID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2lzU3BlZWRVcCA9IGlzU3BlZWRVcDtcclxuICAgICAgICAgICAgfSwgdGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnNwZWVkU3RhdGVDaGFuZ2VPYnNlcnZlcjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOabtOaWsOeVtuWJjeeOqeWutuaKvOazqOmHkemhjVxyXG4gICAgICog5aaC6ZyA5ZCM5q2lLOW7uuitsOS9v+eUqOaOqOaSreS6i+S7tuabtOaWsFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGJldEluZGV4XHJcbiAgICAgKiBAcmV0dXJucyB7VXNlckJldFBvaW50fVxyXG4gICAgICovXHJcbiAgICB1cGRhdGVVc2VyQmV0UG9pbnQoYmV0SW5kZXg6IG51bWJlcik6IFVzZXJCZXRQb2ludCB7XHJcbiAgICAgICAgdGhpcy5fdXNlckJldFBvaW50LkxpbmVCZXQgPSBiZXRJbmRleDtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdXNlckJldFBvaW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pu05paw55W25YmNYXV0b+asoeaVuFxyXG4gICAgICog5aaC5p6c6ZyA6KaB5ZCM5q2l5omA5pyJYXV0b+asoeaVuCzlu7rorbDkvb/nlKjmjqjmkq3kuovku7bmm7TmlrBcclxuICAgICAqIEBwYXJhbSB7QXV0b1R5cGV9IGF1dG9UeXBlXHJcbiAgICAgKiBAcmV0dXJucyB7QXV0b1R5cGV9XHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZUF1dG9Db3VudChhdXRvVHlwZTogQXV0b1R5cGUpOiBBdXRvVHlwZSB7XHJcbiAgICAgICAgdGhpcy5fYXV0b1R5cGUgPSBhdXRvVHlwZTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXV0b1R5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmm7Tli5XnlbbliY3oh6rli5Xni4DmhYtcclxuICAgICAqIOWmguaenOaYr+iHquWLleeLgOaFiyzlsIfmnIPmm7Tli5XngrrpnZ7oh6rli5VcclxuICAgICAqIOWmguaenOaYr+mdnuiHquWLleeLgOaFiyzlsIfmnIPmm7Tli5Xoh6rli5VcclxuICAgICAqIOWmguaenOmcgOimgeWQjOatpeaJgOaciWF1dG/ni4DmhYss5bu66K2w57aB5a6a5o6o5pKt5LqL5Lu25pu05pawXHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgdXBkYXRlQXV0bygpOiBib29sZWFuIHtcclxuICAgICAgICB0aGlzLl9pc0F1dG9TdGF0ZSA9ICF0aGlzLl9pc0F1dG9TdGF0ZTtcclxuICAgICAgICBpZiAodGhpcy5faXNBdXRvU3RhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5fYXV0b21hdGljUmVtYWluaW5nQ291bnQgPSB0aGlzLl9hdXRvVHlwZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNBdXRvU3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmm7TmlrDnlbbliY3pgJ/luqZcclxuICAgICAqIOWmguaenOaYr+WKoOmAn+eLgOaFiyzlsIfmnIPmm7Tli5XngrrkuI3liqDpgJ9cclxuICAgICAqIOWmguaenOeEoeWKoOmAn+eLgOaFiyzlsIfmnIPmm7Tli5XliqDpgJ/ni4DmhYtcclxuICAgICAqIOWmguaenOmcgOimgeWQjOatpeaJgOaciWF1dG/ni4DmhYss5bu66K2w57aB5a6a5o6o5pKt5LqL5Lu25pu05pawXHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgdXBkYXRlU3BlZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgdGhpcy5faXNTcGVlZFVwID0gIXRoaXMuX2lzU3BlZWRVcDtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXNTcGVlZFVwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5riF6Zmk5aC15aGe54uA5oWLXHJcbiAgICAgKiDms6jmhI865riF6Zmk6Kmy54uA5oWL5b6MLOipsuasoeeahOa1geeoi+WNs+S9v+WwmuacquWft+ihjOWujCzkuZ/og73ln7fooYzkuIvmrKHmtYHnqItcclxuICAgICAqL1xyXG4gICAgcmVtYWtlKCkge1xyXG4gICAgICAgIHRoaXMucHJvY2Vzc1N0YXRlKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGdhbWVTdGF0ZSh2YWx1ZTogR2FtZVN0YXRlKSB7XHJcbiAgICAgICAgdGhpcy5fZ2FtZVN0YXRlID0gdmFsdWVcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGdhbWVTdGF0ZSgpOiBHYW1lU3RhdGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nYW1lU3RhdGVcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGF1dG9UeXBlKCk6IEF1dG9UeXBlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXV0b1R5cGVcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGlzQXV0b1N0YXRlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc0F1dG9TdGF0ZVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgaXNTcGVlZFVwKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc1NwZWVkVXBcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGF1dG9tYXRpY1JlbWFpbmluZ0NvdW50KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F1dG9tYXRpY1JlbWFpbmluZ0NvdW50XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB1c2VyQmV0UG9pbnQoKTogVXNlckJldFBvaW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdXNlckJldFBvaW50XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB1c2VyTW9uZXkoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdXNlck1vbmV5XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldCBpc1Jlc3VsdE9rKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc1Jlc3VsdE9rO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBpc1Jlc3VsdE9rKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5faXNSZXN1bHRPayA9IHZhbHVlO1xyXG4gICAgfVxyXG59Il19