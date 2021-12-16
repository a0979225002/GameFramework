"use strict";
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