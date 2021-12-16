"use strict";
cc._RF.push(module, '39351Qb0m5NwJWG5oF4qes+', 'WebRequestManager');
// script/Framework/WebRequest/WebRequestManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WebRequestManager = /** @class */ (function () {
    function WebRequestManager() {
        // this.serverHost = "10.10.0.48";
        // this.CocosDebug = ;
        // this.CocosDebug2 = CocosDebug2;
        // this.LoginData = LoginData;
        // this.LoginState = LoginState;
        // this.Ratio = Ratio;
        // this.UserLanguage = UserLanguage;
        // this.WarningText = WarningText;
        // this.account = account;
        // this.backHomeURL = backHomeURL;
        // this.loadLanguage = loadLanguage;
        // this.loadLanguageCount = loadLanguageCount;
        // this.loadLanguageDefaultURL = loadLanguageDefaultURL;
        // this.password = password;
        // this.serverGameGroupID = serverGameGroupID;
        // this.serverPort = serverPort;
        // this.serverZone = serverZone;
        // this.userChannel_Id = userChannel_Id;
        // this.userCode = userCode;
        // this.userGameMaker = userGameMaker;
        // this.userGame_id = userGame_id;
        // this.userLang = userLang;
        // this.userToken = userToken;
        // this.whereRoom = whereRoom;
    }
    /**
     *  懶漢加載
     *  初始化,只讓一個專案產生一次該class
     */
    WebRequestManager.setInstance = function (configManager) {
        //TODO
    };
    Object.defineProperty(WebRequestManager, "instance", {
        /**
         *  獲取已經初始化的靜態實例class
         */
        get: function () {
            if (!this._instance) {
                this._instance = new WebRequestManager();
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebRequestManager.prototype, "CocosDebug", {
        get: function () {
            return this._CocosDebug;
        },
        set: function (value) {
            this._CocosDebug = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebRequestManager.prototype, "CocosDebug2", {
        get: function () {
            return this._CocosDebug2;
        },
        set: function (value) {
            this._CocosDebug2 = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebRequestManager.prototype, "LoginData", {
        get: function () {
            return this._LoginData;
        },
        set: function (value) {
            this._LoginData = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebRequestManager.prototype, "LoginState", {
        get: function () {
            return this._LoginState;
        },
        set: function (value) {
            this._LoginState = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebRequestManager.prototype, "Ratio", {
        get: function () {
            return this._Ratio;
        },
        set: function (value) {
            this._Ratio = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebRequestManager.prototype, "UserLanguage", {
        get: function () {
            return this._UserLanguage;
        },
        set: function (value) {
            this._UserLanguage = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebRequestManager.prototype, "WarningText", {
        get: function () {
            return this._WarningText;
        },
        set: function (value) {
            this._WarningText = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebRequestManager.prototype, "account", {
        get: function () {
            return this._account;
        },
        set: function (value) {
            this._account = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebRequestManager.prototype, "backHomeURL", {
        get: function () {
            return this._backHomeURL;
        },
        set: function (value) {
            this._backHomeURL = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebRequestManager.prototype, "loadLanguage", {
        get: function () {
            return this._loadLanguage;
        },
        set: function (value) {
            this._loadLanguage = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebRequestManager.prototype, "loadLanguageCount", {
        get: function () {
            return this._loadLanguageCount;
        },
        set: function (value) {
            this._loadLanguageCount = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebRequestManager.prototype, "loadLanguageDefaultURL", {
        get: function () {
            return this._loadLanguageDefaultURL;
        },
        set: function (value) {
            this._loadLanguageDefaultURL = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebRequestManager.prototype, "password", {
        get: function () {
            return this._password;
        },
        set: function (value) {
            this._password = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebRequestManager.prototype, "serverGameGroupID", {
        get: function () {
            return this._serverGameGroupID;
        },
        set: function (value) {
            this._serverGameGroupID = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebRequestManager.prototype, "serverHost", {
        get: function () {
            return this._serverHost;
        },
        set: function (value) {
            this._serverHost = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebRequestManager.prototype, "serverPort", {
        get: function () {
            return this._serverPort;
        },
        set: function (value) {
            this._serverPort = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebRequestManager.prototype, "serverZone", {
        get: function () {
            return this._serverZone;
        },
        set: function (value) {
            this._serverZone = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebRequestManager.prototype, "userChannel_Id", {
        get: function () {
            return this._userChannel_Id;
        },
        set: function (value) {
            this._userChannel_Id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebRequestManager.prototype, "userCode", {
        get: function () {
            return this._userCode;
        },
        set: function (value) {
            this._userCode = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebRequestManager.prototype, "userGameMaker", {
        get: function () {
            return this._userGameMaker;
        },
        set: function (value) {
            this._userGameMaker = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebRequestManager.prototype, "userGame_id", {
        get: function () {
            return this._userGame_id;
        },
        set: function (value) {
            this._userGame_id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebRequestManager.prototype, "userLang", {
        get: function () {
            return this._userLang;
        },
        set: function (value) {
            this._userLang = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebRequestManager.prototype, "userToken", {
        get: function () {
            return this._userToken;
        },
        set: function (value) {
            this._userToken = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebRequestManager.prototype, "whereRoom", {
        get: function () {
            return this._whereRoom;
        },
        set: function (value) {
            this._whereRoom = value;
        },
        enumerable: false,
        configurable: true
    });
    return WebRequestManager;
}());
exports.default = WebRequestManager;

cc._RF.pop();