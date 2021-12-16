
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Config/SlotConfigManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4c974saRwNMTL6vUq6yA1bY', 'SlotConfigManager');
// script/Framework/Config/SlotConfigManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AudioManager_1 = require("../Audio/AudioManager");
var ErrorManager_1 = require("../Error/ErrorManager");
var EventManager_1 = require("../Listener/EventManager");
var LoadResManager_1 = require("../LoadResources/LoadResManager");
var SlotGameManager_1 = require("../Process/SlotGameManager");
var SceneManager_1 = require("../Scene/SceneManager");
var SlotStyleManager_1 = require("../Slot/SlotStyleManager");
var WebRequestManager_1 = require("../WebRequest/WebRequestManager");
var WebResponseManager_1 = require("../WebResponse/WebResponseManager");
var ConfigEnum_1 = require("./Enum/ConfigEnum");
/**
 * @Author XIAO-LI-PIN
 * @Description 遊戲初始設定,並透過builder加載所有Manager
 * @Date 2021-05-13 上午 10:24
 * @Version 1.1
 */
var SlotConfigManager = /** @class */ (function () {
    function SlotConfigManager() {
        this._gameNumber = null; //該遊戲名稱
        this._externallyLoadURL = ""; //預設測試使用
        this._isAuto = false; //是否自動
        this._isSpeedUp = false; //是否加速
        this._autoCount = ConfigEnum_1.AutoType.auto; //初始自動狀態
        this._musicVolume = 1; //遊戲音量
        this._effectVolume = 1; //效果音量
        this._isMusicOnMute = false; //是否打開背景音效
        this._isEffectOnMute = false; //是否打開效果音校
        this._userBet = { LineBet: 0 }; //初始user倍率
        this._language = ConfigEnum_1.LanguageType.Chinese; //初始當前語系,將依據該語系,載入所有耦合圖檔
        this._backHomeURL = undefined; //初始返回首頁URL
        this._isFrameworkDebug = false; //是否要開啟框架的Debug模式
    }
    Object.defineProperty(SlotConfigManager, "instance", {
        /**
         * 懶漢加載
         * 初始化,只讓一個專案只有一次產生此class
         * @returns {SlotConfigManager}
         */
        get: function () {
            if (!this._instance) {
                this._instance = new SlotConfigManager();
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 添加遊戲名稱
     * @param {number} name : 遊戲名稱
     * @returns {this}
     */
    SlotConfigManager.prototype.setGameNumber = function (name) {
        this._gameNumber = name;
        return this;
    };
    /**
     * 設置初始預設音量
     * @param {number} number : 音量 0~1
     * @returns {this}
     */
    SlotConfigManager.prototype.setMusicVolume = function (number) {
        this._musicVolume = number;
        return this;
    };
    /**
     * 設置初始預設效果音量
     * @param {number} number : 音量 0~1
     * @returns {this}
     */
    SlotConfigManager.prototype.setEffectVolume = function (number) {
        this._effectVolume = number;
        return this;
    };
    /**
     * 設置初始User倍率
     * @param {UserBetPoint | number} lineBet : 參數可以直接使用倍率的index or 給予 實例化的UserBetPoint Object
     * @returns {this}
     */
    SlotConfigManager.prototype.setUserBet = function (lineBet) {
        if (lineBet instanceof Object) {
            this._userBet = lineBet;
        }
        else {
            this._userBet = {
                LineBet: lineBet,
            };
        }
        return this;
    };
    /**
     * 初始遊戲最初的auto次數
     * @param {AutoType} type
     * @returns {this}
     */
    SlotConfigManager.prototype.setAutoCont = function (type) {
        this._autoCount = type;
        return this;
    };
    /**
     * 初始要從外部拿取資源的URL
     * 注意:此URL為開發中生效
     * @param {string} url : 獲取外部資源的URL
     * @returns {this}
     */
    SlotConfigManager.prototype.setExternallyLoadURL = function (url) {
        this._externallyLoadURL = url;
        return this;
    };
    /**
     * 貫穿整個遊戲,到destroy前遊戲語系
     * 注意:當前使用無效
     * @param {LanguageType} languageType : 語系
     * @returns {this}
     */
    SlotConfigManager.prototype.setLanguage = function (languageType) {
        this._language = languageType;
        return this;
    };
    /**
     * 初始進入遊戲時Auto狀態
     * @param {boolean} isAuto : 是否在遊戲進入後開啟auto狀態
     * @returns {this}
     */
    SlotConfigManager.prototype.setAutoState = function (isAuto) {
        this._isAuto = isAuto;
        return this;
    };
    /**
     * 是否在遊戲進入後是加速的狀態
     * @param {boolean} isSpeedUp
     * @returns {this}
     */
    SlotConfigManager.prototype.setSpeedState = function (isSpeedUp) {
        this._isSpeedUp = isSpeedUp;
        return this;
    };
    /**
     * 初始將背景音樂靜音
     * @param {boolean} OnMute : 是否靜音
     * @returns {this}
     */
    SlotConfigManager.prototype.setMusicOnMute = function (OnMute) {
        this._isMusicOnMute = OnMute;
        return this;
    };
    /**
     * 初始是否將效果音效靜音
     * @param {boolean} OnMute : 是否靜音
     * @returns {this}
     */
    SlotConfigManager.prototype.setEffectOnMute = function (OnMute) {
        this._isEffectOnMute = OnMute;
        return this;
    };
    /**
     * 是否要開啟Framework Debug模式
     * 注意:遊戲正式上線須關閉
     * @param {boolean} use
     * @returns {this}
     */
    SlotConfigManager.prototype.setFrameWorkDebug = function (use) {
        this._isFrameworkDebug = use;
        return this;
    };
    SlotConfigManager.prototype.setBackHomeURL = function (url) {
        this._backHomeURL = url;
        return this;
    };
    /**
     * 實例化所有Manager class;
     */
    SlotConfigManager.prototype.builder = function () {
        AudioManager_1.default.setInstance(this);
        ErrorManager_1.default.setInstance(this);
        EventManager_1.default.setInstance(this);
        LoadResManager_1.default.setInstance(this);
        SlotGameManager_1.default.setInstance(this);
        SceneManager_1.default.setInstance(this);
        SlotStyleManager_1.default.setInstance(this);
        WebResponseManager_1.WebResponseManager.setInstance(this);
        WebRequestManager_1.default.setInstance(this);
    };
    Object.defineProperty(SlotConfigManager.prototype, "userBet", {
        // get -----------------------------------------------------------------
        get: function () {
            return this._userBet;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SlotConfigManager.prototype, "externallyLoadURL", {
        get: function () {
            return this._externallyLoadURL;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SlotConfigManager.prototype, "gameNumber", {
        get: function () {
            return this._gameNumber;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SlotConfigManager.prototype, "isAuto", {
        get: function () {
            return this._isAuto;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SlotConfigManager.prototype, "autoCount", {
        get: function () {
            return this._autoCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SlotConfigManager.prototype, "isSpeedUp", {
        get: function () {
            return this._isSpeedUp;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SlotConfigManager.prototype, "musicVolume", {
        get: function () {
            return this._musicVolume;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SlotConfigManager.prototype, "effectVolume", {
        get: function () {
            return this._effectVolume;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SlotConfigManager.prototype, "language", {
        get: function () {
            return this._language;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SlotConfigManager.prototype, "isFrameworkDebug", {
        get: function () {
            return this._isFrameworkDebug;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SlotConfigManager.prototype, "isEffectOnMute", {
        get: function () {
            return this._isEffectOnMute;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SlotConfigManager.prototype, "isMusicOnMute", {
        get: function () {
            return this._isMusicOnMute;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SlotConfigManager.prototype, "backHomeURL", {
        get: function () {
            return this._backHomeURL;
        },
        enumerable: false,
        configurable: true
    });
    return SlotConfigManager;
}());
exports.default = SlotConfigManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXENvbmZpZ1xcU2xvdENvbmZpZ01hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzREFBZ0Q7QUFDaEQsc0RBQWdEO0FBQ2hELHlEQUFtRDtBQUNuRCxrRUFBNEQ7QUFDNUQsOERBQXdEO0FBQ3hELHNEQUFnRDtBQUNoRCw2REFBdUQ7QUFDdkQscUVBQStEO0FBQy9ELHdFQUFvRTtBQUNwRSxnREFBeUQ7QUFHekQ7Ozs7O0dBS0c7QUFDSDtJQThGSTtRQUVJLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLENBQWdDLE9BQU87UUFDL0QsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEVBQUUsQ0FBQSxDQUE0QixRQUFRO1FBQ2hFLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLENBQW1DLE1BQU07UUFDOUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsQ0FBZ0MsTUFBTTtRQUM5RCxJQUFJLENBQUMsVUFBVSxHQUFHLHFCQUFRLENBQUMsSUFBSSxDQUFDLENBQXdCLFFBQVE7UUFDaEUsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBa0MsTUFBTTtRQUM5RCxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxDQUFpQyxNQUFNO1FBQzlELElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFBLENBQTZCLFVBQVU7UUFDbEUsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUEsQ0FBNEIsVUFBVTtRQUNsRSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQTJCLFVBQVU7UUFDbEUsSUFBSSxDQUFDLFNBQVMsR0FBRyx5QkFBWSxDQUFDLE9BQU8sQ0FBQSxDQUFtQix3QkFBd0I7UUFDaEYsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUEsQ0FBMkIsV0FBVztRQUNuRSxJQUFJLENB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QztRQUM5QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHVDQUFRO2FBQVo7WUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwrQ0FBZ0I7YUFBcEI7WUFDSSxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDZDQUFjO2FBQWxCO1lBQ0ksT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFBO1FBQy9CLENBQUM7OztPQUFBO0lBRUQsc0JBQUksNENBQWE7YUFBakI7WUFDSSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDL0IsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwwQ0FBVzthQUFmO1lBQ0ksT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzdCLENBQUM7OztPQUFBO0lBQ0wsd0JBQUM7QUFBRCxDQXZWQSxBQXVWQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tICcuLi9BdWRpby9BdWRpb01hbmFnZXInXHJcbmltcG9ydCBFcnJvck1hbmFnZXIgZnJvbSAnLi4vRXJyb3IvRXJyb3JNYW5hZ2VyJ1xyXG5pbXBvcnQgRXZlbnRNYW5hZ2VyIGZyb20gJy4uL0xpc3RlbmVyL0V2ZW50TWFuYWdlcidcclxuaW1wb3J0IExvYWRSZXNNYW5hZ2VyIGZyb20gJy4uL0xvYWRSZXNvdXJjZXMvTG9hZFJlc01hbmFnZXInXHJcbmltcG9ydCBTbG90R2FtZU1hbmFnZXIgZnJvbSAnLi4vUHJvY2Vzcy9TbG90R2FtZU1hbmFnZXInXHJcbmltcG9ydCBTY2VuZU1hbmFnZXIgZnJvbSAnLi4vU2NlbmUvU2NlbmVNYW5hZ2VyJ1xyXG5pbXBvcnQgU2xvdFN0eWxlTWFuYWdlciBmcm9tICcuLi9TbG90L1Nsb3RTdHlsZU1hbmFnZXInXHJcbmltcG9ydCBXZWJSZXF1ZXN0TWFuYWdlciBmcm9tICcuLi9XZWJSZXF1ZXN0L1dlYlJlcXVlc3RNYW5hZ2VyJ1xyXG5pbXBvcnQge1dlYlJlc3BvbnNlTWFuYWdlcn0gZnJvbSAnLi4vV2ViUmVzcG9uc2UvV2ViUmVzcG9uc2VNYW5hZ2VyJ1xyXG5pbXBvcnQge0F1dG9UeXBlLCBMYW5ndWFnZVR5cGV9IGZyb20gXCIuL0VudW0vQ29uZmlnRW51bVwiO1xyXG5pbXBvcnQge0lTbG90Q29uZmlnTWFuYWdlciwgVXNlckJldFBvaW50fSBmcm9tIFwiLi9JQ29uZmlnL0lTbG90Q29uZmlnTWFuYWdlclwiO1xyXG5cclxuLyoqXHJcbiAqIEBBdXRob3IgWElBTy1MSS1QSU5cclxuICogQERlc2NyaXB0aW9uIOmBiuaIsuWIneWni+ioreWumizkuKbpgI/pgY5idWlsZGVy5Yqg6LyJ5omA5pyJTWFuYWdlclxyXG4gKiBARGF0ZSAyMDIxLTA1LTEzIOS4iuWNiCAxMDoyNFxyXG4gKiBAVmVyc2lvbiAxLjFcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsb3RDb25maWdNYW5hZ2VyIGltcGxlbWVudHMgSVNsb3RDb25maWdNYW5hZ2VyIHtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IElTbG90Q29uZmlnTWFuYWdlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOi8ieWFpeWklumDqOizh+a6kFVSTCjlj6rmnInplovnmbzmqKHlvI/kuK3mnInmlYgpXHJcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfZXh0ZXJuYWxseUxvYWRVUkw6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIOeVtuWJjemBiuaIsuWQjeeosVxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX2dhbWVOdW1iZXI6IG51bWJlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOaYr+WQpuWcqOmBiuaIsumAsuWFpeW+jOmWi+WVn2F1dG/ni4DmhYtcclxuICAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfaXNBdXRvOiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL6YGK5oiy5pyA5Yid55qEYXV0b+asoeaVuFxyXG4gICAgICogQHR5cGUge0F1dG9UeXBlfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfYXV0b0NvdW50OiBBdXRvVHlwZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOaYr+WQpuWcqOmBiuaIsumAsuWFpeW+jOaYr+WKoOmAn+eahOeLgOaFi1xyXG4gICAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9pc1NwZWVkVXA6IGJvb2xlYW47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vog4zmma/pn7PmqILpn7Pph48o6Kmy6Z+z6YeP5bCH5pyD5oiQ54K6QXVkaW9NYW5hZ2Vy5YWn6aCQ6Kit6Z+z6YePKVxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX211c2ljVm9sdW1lOiBudW1iZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vlsIfog4zmma/pn7PmqILpnZzpn7NcclxuICAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfaXNNdXNpY09uTXV0ZTogYm9vbGVhbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+aViOaenOmfs+mHjyjoqbLpn7Pph4/lsIfmnIPmiJDngrpBdWRpb01hbmFnZXLlhafpoJDoqK3pn7Pph48pXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfZWZmZWN0Vm9sdW1lOiBudW1iZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vlsIfmlYjmnpzpn7PmlYjpnZzpn7NcclxuICAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfaXNFZmZlY3RPbk11dGU6IGJvb2xlYW47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vpgYrmiLLplovlp4vliY3nmoTnlKjmiLbmirzms6jlgI3njodcclxuICAgICAqIEB0eXBlIHtVc2VyQmV0UG9pbnR9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF91c2VyQmV0OiBVc2VyQmV0UG9pbnQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vnlbbliY3oqp7ns7so5Y+q5pyJ6ZaL55m85qih5byP5Lit5pyJ5pWIKVxyXG4gICAgICog5rOo5oSPOuebruWJjeatpOaWueazleWkseaViFxyXG4gICAgICogQHR5cGUge0xhbmd1YWdlVHlwZX1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX2xhbmd1YWdlOiBMYW5ndWFnZVR5cGU7XHJcbiAgICAvKipcclxuICAgICAqIOi/lOWbnummlumggVVSTFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9iYWNrSG9tZVVSTDogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5piv5ZCm6KaB6ZaL5ZWfRnJhbWV3b3JrIERlYnVn5qih5byPXHJcbiAgICAgKiDms6jmhI866YGK5oiy5q2j5byP5LiK57ea6aCI6Zec6ZaJXHJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX2lzRnJhbWV3b3JrRGVidWc6IGJvb2xlYW47XHJcblxyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICAgICAgdGhpcy5fZ2FtZU51bWJlciA9IG51bGw7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+ipsumBiuaIsuWQjeeosVxyXG4gICAgICAgIHRoaXMuX2V4dGVybmFsbHlMb2FkVVJMID0gXCJcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+mgkOiorea4rOippuS9v+eUqFxyXG4gICAgICAgIHRoaXMuX2lzQXV0byA9IGZhbHNlOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/mmK/lkKboh6rli5VcclxuICAgICAgICB0aGlzLl9pc1NwZWVkVXAgPSBmYWxzZTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5piv5ZCm5Yqg6YCfXHJcbiAgICAgICAgdGhpcy5fYXV0b0NvdW50ID0gQXV0b1R5cGUuYXV0bzsgICAgICAgICAgICAgICAgICAgICAgICAvL+WIneWni+iHquWLleeLgOaFi1xyXG4gICAgICAgIHRoaXMuX211c2ljVm9sdW1lID0gMTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/pgYrmiLLpn7Pph49cclxuICAgICAgICB0aGlzLl9lZmZlY3RWb2x1bWUgPSAxOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5pWI5p6c6Z+z6YePXHJcbiAgICAgICAgdGhpcy5faXNNdXNpY09uTXV0ZSA9IGZhbHNlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+aYr+WQpuaJk+mWi+iDjOaZr+mfs+aViFxyXG4gICAgICAgIHRoaXMuX2lzRWZmZWN0T25NdXRlID0gZmFsc2UgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/mmK/lkKbmiZPplovmlYjmnpzpn7PmoKFcclxuICAgICAgICB0aGlzLl91c2VyQmV0ID0ge0xpbmVCZXQ6IDB9OyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Yid5aeLdXNlcuWAjeeOh1xyXG4gICAgICAgIHRoaXMuX2xhbmd1YWdlID0gTGFuZ3VhZ2VUeXBlLkNoaW5lc2UgICAgICAgICAgICAgICAgICAgLy/liJ3lp4vnlbbliY3oqp7ns7ss5bCH5L6d5pOa6Kmy6Kqe57O7LOi8ieWFpeaJgOacieiApuWQiOWcluaqlFxyXG4gICAgICAgIHRoaXMuX2JhY2tIb21lVVJMID0gdW5kZWZpbmVkICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/liJ3lp4vov5Tlm57pppbpoIFVUkxcclxuICAgICAgICB0aGlzLl9pc0ZyYW1ld29ya0RlYnVnID0gZmFsc2U7ICAgICAgICAgICAgICAgICAgICAgICAgIC8v5piv5ZCm6KaB6ZaL5ZWf5qGG5p6255qERGVidWfmqKHlvI9cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmh7bmvKLliqDovIlcclxuICAgICAqIOWIneWni+WMlizlj6rorpPkuIDlgIvlsIjmoYjlj6rmnInkuIDmrKHnlKLnlJ/mraRjbGFzc1xyXG4gICAgICogQHJldHVybnMge1Nsb3RDb25maWdNYW5hZ2VyfVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBpbnN0YW5jZSgpOiBJU2xvdENvbmZpZ01hbmFnZXIge1xyXG4gICAgICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgU2xvdENvbmZpZ01hbmFnZXIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOa3u+WKoOmBiuaIsuWQjeeosVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG5hbWUgOiDpgYrmiLLlkI3nqLFcclxuICAgICAqIEByZXR1cm5zIHt0aGlzfVxyXG4gICAgICovXHJcbiAgICBzZXRHYW1lTnVtYmVyKG5hbWU6IG51bWJlcikge1xyXG5cclxuICAgICAgICB0aGlzLl9nYW1lTnVtYmVyID0gbmFtZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDoqK3nva7liJ3lp4vpoJDoqK3pn7Pph49cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXIgOiDpn7Pph48gMH4xXHJcbiAgICAgKiBAcmV0dXJucyB7dGhpc31cclxuICAgICAqL1xyXG4gICAgc2V0TXVzaWNWb2x1bWUobnVtYmVyOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9tdXNpY1ZvbHVtZSA9IG51bWJlclxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOioree9ruWIneWni+mgkOioreaViOaenOmfs+mHj1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG51bWJlciA6IOmfs+mHjyAwfjFcclxuICAgICAqIEByZXR1cm5zIHt0aGlzfVxyXG4gICAgICovXHJcbiAgICBzZXRFZmZlY3RWb2x1bWUobnVtYmVyOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9lZmZlY3RWb2x1bWUgPSBudW1iZXI7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDoqK3nva7liJ3lp4tVc2Vy5YCN546HXHJcbiAgICAgKiBAcGFyYW0ge1VzZXJCZXRQb2ludCB8IG51bWJlcn0gbGluZUJldCA6IOWPg+aVuOWPr+S7peebtOaOpeS9v+eUqOWAjeeOh+eahGluZGV4IG9yIOe1puS6iCDlr6bkvovljJbnmoRVc2VyQmV0UG9pbnQgT2JqZWN0XHJcbiAgICAgKiBAcmV0dXJucyB7dGhpc31cclxuICAgICAqL1xyXG4gICAgc2V0VXNlckJldChsaW5lQmV0OiBVc2VyQmV0UG9pbnQgfCBudW1iZXIpIHtcclxuXHJcbiAgICAgICAgaWYgKGxpbmVCZXQgaW5zdGFuY2VvZiBPYmplY3QpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3VzZXJCZXQgPSBsaW5lQmV0O1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl91c2VyQmV0ID0ge1xyXG4gICAgICAgICAgICAgICAgTGluZUJldDogbGluZUJldCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vpgYrmiLLmnIDliJ3nmoRhdXRv5qyh5pW4XHJcbiAgICAgKiBAcGFyYW0ge0F1dG9UeXBlfSB0eXBlXHJcbiAgICAgKiBAcmV0dXJucyB7dGhpc31cclxuICAgICAqL1xyXG4gICAgc2V0QXV0b0NvbnQodHlwZTogQXV0b1R5cGUpIHtcclxuICAgICAgICB0aGlzLl9hdXRvQ291bnQgPSB0eXBlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+imgeW+nuWklumDqOaLv+WPluizh+a6kOeahFVSTFxyXG4gICAgICog5rOo5oSPOuatpFVSTOeCuumWi+eZvOS4reeUn+aViFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybCA6IOeNsuWPluWklumDqOizh+a6kOeahFVSTFxyXG4gICAgICogQHJldHVybnMge3RoaXN9XHJcbiAgICAgKi9cclxuICAgIHNldEV4dGVybmFsbHlMb2FkVVJMKHVybDogc3RyaW5nKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy5fZXh0ZXJuYWxseUxvYWRVUkwgPSB1cmw7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDosqvnqb/mlbTlgIvpgYrmiLIs5YiwZGVzdHJveeWJjemBiuaIsuiqnuezu1xyXG4gICAgICog5rOo5oSPOueVtuWJjeS9v+eUqOeEoeaViFxyXG4gICAgICogQHBhcmFtIHtMYW5ndWFnZVR5cGV9IGxhbmd1YWdlVHlwZSA6IOiqnuezu1xyXG4gICAgICogQHJldHVybnMge3RoaXN9XHJcbiAgICAgKi9cclxuICAgIHNldExhbmd1YWdlKGxhbmd1YWdlVHlwZTogTGFuZ3VhZ2VUeXBlKTogdGhpcyB7XHJcblxyXG4gICAgICAgIHRoaXMuX2xhbmd1YWdlID0gbGFuZ3VhZ2VUeXBlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL6YCy5YWl6YGK5oiy5pmCQXV0b+eLgOaFi1xyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBpc0F1dG8gOiDmmK/lkKblnKjpgYrmiLLpgLLlhaXlvozplovllZ9hdXRv54uA5oWLXHJcbiAgICAgKiBAcmV0dXJucyB7dGhpc31cclxuICAgICAqL1xyXG4gICAgc2V0QXV0b1N0YXRlKGlzQXV0bzogYm9vbGVhbik6IHRoaXMge1xyXG4gICAgICAgIHRoaXMuX2lzQXV0byA9IGlzQXV0bztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaYr+WQpuWcqOmBiuaIsumAsuWFpeW+jOaYr+WKoOmAn+eahOeLgOaFi1xyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBpc1NwZWVkVXBcclxuICAgICAqIEByZXR1cm5zIHt0aGlzfVxyXG4gICAgICovXHJcbiAgICBzZXRTcGVlZFN0YXRlKGlzU3BlZWRVcDogYm9vbGVhbik6IHRoaXMge1xyXG5cclxuICAgICAgICB0aGlzLl9pc1NwZWVkVXAgPSBpc1NwZWVkVXA7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5bCH6IOM5pmv6Z+z5qiC6Z2c6Z+zXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IE9uTXV0ZSA6IOaYr+WQpumdnOmfs1xyXG4gICAgICogQHJldHVybnMge3RoaXN9XHJcbiAgICAgKi9cclxuICAgIHNldE11c2ljT25NdXRlKE9uTXV0ZTogYm9vbGVhbik6IHRoaXMge1xyXG5cclxuICAgICAgICB0aGlzLl9pc011c2ljT25NdXRlID0gT25NdXRlO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+aYr+WQpuWwh+aViOaenOmfs+aViOmdnOmfs1xyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBPbk11dGUgOiDmmK/lkKbpnZzpn7NcclxuICAgICAqIEByZXR1cm5zIHt0aGlzfVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0RWZmZWN0T25NdXRlKE9uTXV0ZTogYm9vbGVhbik6IHRoaXMge1xyXG5cclxuICAgICAgICB0aGlzLl9pc0VmZmVjdE9uTXV0ZSA9IE9uTXV0ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmmK/lkKbopoHplovllZ9GcmFtZXdvcmsgRGVidWfmqKHlvI9cclxuICAgICAqIOazqOaEjzrpgYrmiLLmraPlvI/kuIrnt5rpoIjpl5zplolcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gdXNlXHJcbiAgICAgKiBAcmV0dXJucyB7dGhpc31cclxuICAgICAqL1xyXG4gICAgc2V0RnJhbWVXb3JrRGVidWcodXNlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5faXNGcmFtZXdvcmtEZWJ1ZyA9IHVzZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzZXRCYWNrSG9tZVVSTCh1cmw6IHN0cmluZyk6IHRoaXMge1xyXG4gICAgICAgIHRoaXMuX2JhY2tIb21lVVJMID0gdXJsO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWvpuS+i+WMluaJgOaciU1hbmFnZXIgY2xhc3M7XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBidWlsZGVyKCkge1xyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5zZXRJbnN0YW5jZSh0aGlzKTtcclxuICAgICAgICBFcnJvck1hbmFnZXIuc2V0SW5zdGFuY2UodGhpcyk7XHJcbiAgICAgICAgRXZlbnRNYW5hZ2VyLnNldEluc3RhbmNlKHRoaXMpO1xyXG4gICAgICAgIExvYWRSZXNNYW5hZ2VyLnNldEluc3RhbmNlKHRoaXMpO1xyXG4gICAgICAgIFNsb3RHYW1lTWFuYWdlci5zZXRJbnN0YW5jZSh0aGlzKTtcclxuICAgICAgICBTY2VuZU1hbmFnZXIuc2V0SW5zdGFuY2UodGhpcyk7XHJcbiAgICAgICAgU2xvdFN0eWxlTWFuYWdlci5zZXRJbnN0YW5jZSh0aGlzKTtcclxuICAgICAgICBXZWJSZXNwb25zZU1hbmFnZXIuc2V0SW5zdGFuY2UodGhpcyk7XHJcbiAgICAgICAgV2ViUmVxdWVzdE1hbmFnZXIuc2V0SW5zdGFuY2UodGhpcyk7XHJcbiAgICB9XHJcblxyXG4vLyBnZXQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICBnZXQgdXNlckJldCgpOiBVc2VyQmV0UG9pbnQge1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fdXNlckJldDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZXh0ZXJuYWxseUxvYWRVUkwoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZXh0ZXJuYWxseUxvYWRVUkw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGdhbWVOdW1iZXIoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2FtZU51bWJlcjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaXNBdXRvKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc0F1dG87XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGF1dG9Db3VudCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hdXRvQ291bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlzU3BlZWRVcCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXNTcGVlZFVwO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBtdXNpY1ZvbHVtZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tdXNpY1ZvbHVtZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZWZmZWN0Vm9sdW1lKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VmZmVjdFZvbHVtZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbGFuZ3VhZ2UoKTogTGFuZ3VhZ2VUeXBlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbGFuZ3VhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlzRnJhbWV3b3JrRGVidWcoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzRnJhbWV3b3JrRGVidWc7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlzRWZmZWN0T25NdXRlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc0VmZmVjdE9uTXV0ZVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBpc011c2ljT25NdXRlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc011c2ljT25NdXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBiYWNrSG9tZVVSTCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9iYWNrSG9tZVVSTDtcclxuICAgIH1cclxufSJdfQ==