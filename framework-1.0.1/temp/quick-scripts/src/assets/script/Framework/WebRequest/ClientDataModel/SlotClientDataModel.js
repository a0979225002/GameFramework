"use strict";
cc._RF.push(module, 'faad10S4lNAJJlINTPLqAiU', 'SlotClientDataModel');
// script/Framework/WebRequest/ClientDataModel/SlotClientDataModel.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConfigEnum_1 = require("../../Config/Enum/ConfigEnum");
/**
 * @Author XIAO-LI-PIN
 * @Description TODO
 * @Date 2021-06-07 上午 11:08
 * @Version 1.0
 */
var SlotClientDataModel = /** @class */ (function () {
    function SlotClientDataModel() {
        this._serverHost = "210.241.243.206";
        this._serverPort = 8080;
        this._account = "";
        this._password = "";
        this._loginState = 2;
        this._whereRoom = "lobby";
        this._serverZone = "H5Game";
        this._userCode = "";
        this._userChannelID = "";
        this._userGameID = "";
        this._userToken = "";
        this._userLang = "";
        this._userGameMaker = "";
        this._backHomeURL = "";
        this._loadLanguageDefaultURL = "";
        this._loadLanguageURL = "";
        this._userLanguage = ConfigEnum_1.LanguageType.Chinese;
        Object.preventExtensions(this);
    }
    /**
     * 測試使用 : sever URL
     * @default : 210.241.243.206;
     * @param {string} serverHost
     * @returns {this}
     */
    SlotClientDataModel.prototype.setServerHost = function (serverHost) {
        this._serverHost = serverHost;
        return this;
    };
    SlotClientDataModel.prototype.setServerPort = function (serverPort) {
        this._serverPort = serverPort;
        return this;
    };
    SlotClientDataModel.prototype.setAccount = function (account) {
        this._account = account;
        return this;
    };
    SlotClientDataModel.prototype.setPassword = function (password) {
        this._password = password;
        return this;
    };
    SlotClientDataModel.prototype.setLoginState = function (loginState) {
        this._loginState = loginState;
        return this;
    };
    SlotClientDataModel.prototype.setWhereRoom = function (whereRoom) {
        this._whereRoom = whereRoom;
        return this;
    };
    SlotClientDataModel.prototype.setServerZone = function (serverZone) {
        this._serverZone = serverZone;
        return this;
    };
    SlotClientDataModel.prototype.setUserCode = function (userCode) {
        this._userCode = userCode;
        return this;
    };
    SlotClientDataModel.prototype.setUserChannelID = function (userChannelID) {
        this._userChannelID = userChannelID;
        return this;
    };
    SlotClientDataModel.prototype.setUserGameID = function (userGameID) {
        this._userGameID = userGameID;
        return this;
    };
    SlotClientDataModel.prototype.setUserToken = function (userToken) {
        this._userToken = userToken;
        return this;
    };
    SlotClientDataModel.prototype.setUserLang = function (userLang) {
        this._userLang = userLang;
        return this;
    };
    SlotClientDataModel.prototype.setUserGameMaker = function (userGameMaker) {
        this._userGameMaker = userGameMaker;
        return this;
    };
    SlotClientDataModel.prototype.setBackHomeURL = function (backHomeURL) {
        this._backHomeURL = backHomeURL;
        return this;
    };
    SlotClientDataModel.prototype.setLoadLanguageDefaultURL = function (loadLanguageDefaultURL) {
        this._loadLanguageDefaultURL = loadLanguageDefaultURL;
        return this;
    };
    SlotClientDataModel.prototype.setLoadLanguageURL = function (loadLanguageURL) {
        this._loadLanguageURL = loadLanguageURL;
        return this;
    };
    SlotClientDataModel.prototype.setUserLanguage = function (userLanguage) {
        this._userLanguage = userLanguage;
        return this;
    };
    Object.defineProperty(SlotClientDataModel.prototype, "serverHost", {
        get: function () {
            return this._serverHost;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SlotClientDataModel.prototype, "serverPort", {
        get: function () {
            return this._serverPort;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SlotClientDataModel.prototype, "account", {
        get: function () {
            return this._account;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SlotClientDataModel.prototype, "password", {
        get: function () {
            return this._password;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SlotClientDataModel.prototype, "loginState", {
        get: function () {
            return this._loginState;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SlotClientDataModel.prototype, "whereRoom", {
        get: function () {
            return this._whereRoom;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SlotClientDataModel.prototype, "serverZone", {
        get: function () {
            return this._serverZone;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SlotClientDataModel.prototype, "userCode", {
        get: function () {
            return this._userCode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SlotClientDataModel.prototype, "userChannelID", {
        get: function () {
            return this._userChannelID;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SlotClientDataModel.prototype, "userGameID", {
        get: function () {
            return this._userGameID;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SlotClientDataModel.prototype, "userToken", {
        get: function () {
            return this._userToken;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SlotClientDataModel.prototype, "userLang", {
        get: function () {
            return this._userLang;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SlotClientDataModel.prototype, "userGameMaker", {
        get: function () {
            return this._userGameMaker;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SlotClientDataModel.prototype, "backHomeURL", {
        get: function () {
            return this._backHomeURL;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SlotClientDataModel.prototype, "loadLanguageDefaultURL", {
        get: function () {
            return this._loadLanguageDefaultURL;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SlotClientDataModel.prototype, "loadLanguageURL", {
        get: function () {
            return this._loadLanguageURL;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SlotClientDataModel.prototype, "userLanguage", {
        get: function () {
            return this._userLanguage;
        },
        enumerable: false,
        configurable: true
    });
    return SlotClientDataModel;
}());
exports.default = SlotClientDataModel;

cc._RF.pop();