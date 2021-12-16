"use strict";
cc._RF.push(module, '7eb3348kdND6a7ZOOAoDrNb', 'ErrorManager');
// script/Framework/Error/ErrorManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorHandler_1 = require("./ErrorHandler");
var ErrorManager = /** @class */ (function () {
    function ErrorManager(configManager) {
        this.handler = new ErrorHandler_1.default();
        this.configManager = configManager;
        this._errorNode = null;
        this._errorLabel = null;
        this._errorDelayTime = 2000; //錯誤訊息顯示時間 : 2秒
        this._warningDelayTime = 1000; //警告訊息顯示時間 : 1秒
        ErrorManager._errorState = false; //當前是否正在顯示 Error
        ErrorManager._warningState = false; //當前是否正在顯示警告
        this._isShowBackHomeButton = !!this.configManager.backHomeURL; //檢查當前是否回首頁URL,將之賦予true:false
    }
    /**
     *  懶漢加載
     *  初始化,只讓一個專案產生一次該class
     */
    ErrorManager.setInstance = function (configManager) {
        if (!this._instance) {
            this._instance = new ErrorManager(configManager);
        }
    };
    Object.defineProperty(ErrorManager, "instance", {
        /**
         *  獲取已經初始化的靜態實例class
         */
        get: function () {
            if (!this._instance) {
                throw new Error("ErrorManager\u985E\u932F\u8AA4 :  \u8A72\u985E\u5C1A\u672A\u5BE6\u4F8B\u5316");
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 責任鏈模式
     * 顯示錯誤訊息,能做多個物件檢測
     * @param{string | ErrorType }message
     * @param obj
     */
    ErrorManager.prototype.executeError = function (message, obj) {
        return this.handler.checkErrorType(message, obj);
    };
    /**
     * 顯示錯誤視窗
     * @param {boolean} permanentState : 是否常駐
     * @param {string} message  : 錯誤訊息
     * @param {string} buttonText : button文字
     */
    ErrorManager.prototype.serverError = function (permanentState, message, buttonText) {
        this.handler.checkServerError(permanentState, message, buttonText);
    };
    /**
     * 顯示警告,將會調用已保存的警告Node
     * @param {boolean} permanentState : 是否常駐
     * @param {string} message  : 錯誤訊息
     * @param {string} buttonText : button文字
     */
    ErrorManager.prototype.warning = function (permanentState, message, buttonText) {
        this.handler.checkWarning(permanentState, message, buttonText);
    };
    /**
     * 添加要綁定的Error組件
     * @param node
     */
    ErrorManager.prototype.setErrorNode = function (node) {
        this._errorNode = node;
        return this;
    };
    /**
     * 添加要顯示Error訊息的Label
     * @param label
     */
    ErrorManager.prototype.setErrorLabel = function (label) {
        this._errorLabel = label;
        return this;
    };
    /**
     * 添加errorButton綁定
     * @param node
     */
    ErrorManager.prototype.setErrorButton = function (node) {
        this._errorButton = node;
        return this;
    };
    /**
     * 添加要顯示的時間,目前只對(ErrorType.bet)生效
     * @param time
     */
    ErrorManager.prototype.setErrorDelayTime = function (time) {
        this._errorDelayTime = time;
        return this;
    };
    /**
     * 添加警告要顯示的時間
     */
    ErrorManager.prototype.setWarningDelayTime = function (time) {
        this._warningDelayTime = time;
        return this;
    };
    /**
     * 添加要顯示警告的Node
     * @param node
     */
    ErrorManager.prototype.setWarningNode = function (node) {
        this._warningNode = node;
        return this;
    };
    /**
     * 添加要顯示警告的Node
     * @param label
     */
    ErrorManager.prototype.setWarningLabel = function (label) {
        this._warningLabel = label;
        return this;
    };
    /**
     * 添加要顯示錯誤視窗中按鈕的label
     * @param {cc.Label} label
     * @return {this}
     */
    ErrorManager.prototype.setErrorButtonLabel = function (label) {
        this.errorButtonLabel = label;
        return this;
    };
    Object.defineProperty(ErrorManager, "errorState", {
        get: function () {
            return this._errorState;
        },
        set: function (value) {
            this._errorState = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ErrorManager, "warningState", {
        get: function () {
            return this._warningState;
        },
        set: function (value) {
            this._warningState = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ErrorManager.prototype, "errorNode", {
        //暫時將值鎖住,無法從外部更改,日後要使用者更換時再做打開
        get: function () {
            return this._errorNode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ErrorManager.prototype, "warningNode", {
        get: function () {
            return this._warningNode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ErrorManager.prototype, "errorButton", {
        get: function () {
            return this._errorButton;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ErrorManager.prototype, "warningLabel", {
        get: function () {
            return this._warningLabel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ErrorManager.prototype, "errorLabel", {
        get: function () {
            return this._errorLabel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ErrorManager.prototype, "errorDelayTime", {
        get: function () {
            return this._errorDelayTime;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ErrorManager.prototype, "warningDelayTime", {
        get: function () {
            return this._warningDelayTime;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ErrorManager.prototype, "isShowBackHomeButton", {
        get: function () {
            return this._isShowBackHomeButton;
        },
        enumerable: false,
        configurable: true
    });
    return ErrorManager;
}());
exports.default = ErrorManager;

cc._RF.pop();