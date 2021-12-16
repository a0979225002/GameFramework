"use strict";
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