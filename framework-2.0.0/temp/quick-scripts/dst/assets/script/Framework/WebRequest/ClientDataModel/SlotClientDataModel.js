
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/WebRequest/ClientDataModel/SlotClientDataModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXFdlYlJlcXVlc3RcXENsaWVudERhdGFNb2RlbFxcU2xvdENsaWVudERhdGFNb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUEwRDtBQUcxRDs7Ozs7R0FLRztBQUNIO0lBb0JJO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxpQkFBaUIsQ0FBQztRQUNyQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztRQUMxQixJQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQztRQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsdUJBQXVCLEdBQUcsRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLGFBQWEsR0FBRyx5QkFBWSxDQUFDLE9BQU8sQ0FBQztRQUMxQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsMkNBQWEsR0FBYixVQUFj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QU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQ2pDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksNkNBQVk7YUFBaEI7WUFDSSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDOUIsQ0FBQzs7O09BQUE7SUFDTCwwQkFBQztBQUFELENBdk1BLEFBdU1DLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0xhbmd1YWdlVHlwZX0gZnJvbSBcIi4uLy4uL0NvbmZpZy9FbnVtL0NvbmZpZ0VudW1cIjtcclxuaW1wb3J0IHtJU2xvdENsaWVudERhdGFNb2RlbH0gZnJvbSBcIi4vSU1vZGVsL0lTbG90Q2xpZW50RGF0YU1vZGVsXCI7XHJcblxyXG4vKipcclxuICogQEF1dGhvciBYSUFPLUxJLVBJTlxyXG4gKiBARGVzY3JpcHRpb24gVE9ET1xyXG4gKiBARGF0ZSAyMDIxLTA2LTA3IOS4iuWNiCAxMTowOFxyXG4gKiBAVmVyc2lvbiAxLjBcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsb3RDbGllbnREYXRhTW9kZWwgaW1wbGVtZW50cyBJU2xvdENsaWVudERhdGFNb2RlbCB7XHJcblxyXG4gICAgcHJpdmF0ZSBfc2VydmVySG9zdDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfc2VydmVyUG9ydDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfYWNjb3VudDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfcGFzc3dvcmQ6IHN0cmluZztcclxuICAgIHByaXZhdGUgX2xvZ2luU3RhdGU6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX3doZXJlUm9vbTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfc2VydmVyWm9uZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfdXNlckNvZGU6IHN0cmluZztcclxuICAgIHByaXZhdGUgX3VzZXJDaGFubmVsSUQ6IHN0cmluZztcclxuICAgIHByaXZhdGUgX3VzZXJHYW1lSUQ6IHN0cmluZztcclxuICAgIHByaXZhdGUgX3VzZXJUb2tlbjogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfdXNlckxhbmc6IHN0cmluZztcclxuICAgIHByaXZhdGUgX3VzZXJHYW1lTWFrZXI6IHN0cmluZztcclxuICAgIHByaXZhdGUgX2JhY2tIb21lVVJMOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF9sb2FkTGFuZ3VhZ2VEZWZhdWx0VVJMOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF9sb2FkTGFuZ3VhZ2VVUkw6IHN0cmluZztcclxuICAgIHByaXZhdGUgX3VzZXJMYW5ndWFnZTogTGFuZ3VhZ2VUeXBlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX3NlcnZlckhvc3QgPSBcIjIxMC4yNDEuMjQzLjIwNlwiO1xyXG4gICAgICAgIHRoaXMuX3NlcnZlclBvcnQgPSA4MDgwO1xyXG4gICAgICAgIHRoaXMuX2FjY291bnQgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuX3Bhc3N3b3JkID0gXCJcIjtcclxuICAgICAgICB0aGlzLl9sb2dpblN0YXRlID0gMjtcclxuICAgICAgICB0aGlzLl93aGVyZVJvb20gPSBcImxvYmJ5XCI7XHJcbiAgICAgICAgdGhpcy5fc2VydmVyWm9uZSA9IFwiSDVHYW1lXCI7XHJcbiAgICAgICAgdGhpcy5fdXNlckNvZGUgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuX3VzZXJDaGFubmVsSUQgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuX3VzZXJHYW1lSUQgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuX3VzZXJUb2tlbiA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5fdXNlckxhbmcgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuX3VzZXJHYW1lTWFrZXIgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuX2JhY2tIb21lVVJMID0gXCJcIjtcclxuICAgICAgICB0aGlzLl9sb2FkTGFuZ3VhZ2VEZWZhdWx0VVJMID0gXCJcIjtcclxuICAgICAgICB0aGlzLl9sb2FkTGFuZ3VhZ2VVUkwgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuX3VzZXJMYW5ndWFnZSA9IExhbmd1YWdlVHlwZS5DaGluZXNlO1xyXG4gICAgICAgIE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOa4rOippuS9v+eUqCA6IHNldmVyIFVSTFxyXG4gICAgICogQGRlZmF1bHQgOiAyMTAuMjQxLjI0My4yMDY7XHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2VydmVySG9zdFxyXG4gICAgICogQHJldHVybnMge3RoaXN9XHJcbiAgICAgKi9cclxuICAgIHNldFNlcnZlckhvc3Qoc2VydmVySG9zdDogc3RyaW5nKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy5fc2VydmVySG9zdCA9IHNlcnZlckhvc3Q7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U2VydmVyUG9ydChzZXJ2ZXJQb3J0OiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLl9zZXJ2ZXJQb3J0ID0gc2VydmVyUG9ydDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzZXRBY2NvdW50KGFjY291bnQ6IHN0cmluZyk6IHRoaXMge1xyXG4gICAgICAgIHRoaXMuX2FjY291bnQgPSBhY2NvdW50O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFBhc3N3b3JkKHBhc3N3b3JkOiBzdHJpbmcpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLl9wYXNzd29yZCA9IHBhc3N3b3JkO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldExvZ2luU3RhdGUobG9naW5TdGF0ZTogbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy5fbG9naW5TdGF0ZSA9IGxvZ2luU3RhdGU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0V2hlcmVSb29tKHdoZXJlUm9vbTogc3RyaW5nKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy5fd2hlcmVSb29tID0gd2hlcmVSb29tO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFNlcnZlclpvbmUoc2VydmVyWm9uZTogc3RyaW5nKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy5fc2VydmVyWm9uZSA9IHNlcnZlclpvbmU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VXNlckNvZGUodXNlckNvZGU6IHN0cmluZyk6IHRoaXMge1xyXG4gICAgICAgIHRoaXMuX3VzZXJDb2RlID0gdXNlckNvZGU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VXNlckNoYW5uZWxJRCh1c2VyQ2hhbm5lbElEOiBzdHJpbmcpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLl91c2VyQ2hhbm5lbElEID0gdXNlckNoYW5uZWxJRDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzZXRVc2VyR2FtZUlEKHVzZXJHYW1lSUQ6IHN0cmluZyk6IHRoaXMge1xyXG4gICAgICAgIHRoaXMuX3VzZXJHYW1lSUQgPSB1c2VyR2FtZUlEO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFVzZXJUb2tlbih1c2VyVG9rZW46IHN0cmluZyk6IHRoaXMge1xyXG4gICAgICAgIHRoaXMuX3VzZXJUb2tlbiA9IHVzZXJUb2tlbjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzZXRVc2VyTGFuZyh1c2VyTGFuZzogc3RyaW5nKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy5fdXNlckxhbmcgPSB1c2VyTGFuZztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzZXRVc2VyR2FtZU1ha2VyKHVzZXJHYW1lTWFrZXI6IHN0cmluZyk6IHRoaXMge1xyXG4gICAgICAgIHRoaXMuX3VzZXJHYW1lTWFrZXIgPSB1c2VyR2FtZU1ha2VyO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEJhY2tIb21lVVJMKGJhY2tIb21lVVJMOiBzdHJpbmcpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLl9iYWNrSG9tZVVSTCA9IGJhY2tIb21lVVJMO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldExvYWRMYW5ndWFnZURlZmF1bHRVUkwobG9hZExhbmd1YWdlRGVmYXVsdFVSTDogc3RyaW5nKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy5fbG9hZExhbmd1YWdlRGVmYXVsdFVSTCA9IGxvYWRMYW5ndWFnZURlZmF1bHRVUkw7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TG9hZExhbmd1YWdlVVJMKGxvYWRMYW5ndWFnZVVSTDogc3RyaW5nKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy5fbG9hZExhbmd1YWdlVVJMID0gbG9hZExhbmd1YWdlVVJMO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFVzZXJMYW5ndWFnZSh1c2VyTGFuZ3VhZ2U6IExhbmd1YWdlVHlwZSk6IHRoaXMge1xyXG4gICAgICAgIHRoaXMuX3VzZXJMYW5ndWFnZSA9IHVzZXJMYW5ndWFnZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc2VydmVySG9zdCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXJ2ZXJIb3N0O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzZXJ2ZXJQb3J0KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlcnZlclBvcnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGFjY291bnQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYWNjb3VudDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcGFzc3dvcmQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcGFzc3dvcmQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGxvZ2luU3RhdGUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbG9naW5TdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgd2hlcmVSb29tKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3doZXJlUm9vbTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc2VydmVyWm9uZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXJ2ZXJab25lO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB1c2VyQ29kZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl91c2VyQ29kZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdXNlckNoYW5uZWxJRCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl91c2VyQ2hhbm5lbElEO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB1c2VyR2FtZUlEKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXJHYW1lSUQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHVzZXJUb2tlbigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl91c2VyVG9rZW47XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHVzZXJMYW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXJMYW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB1c2VyR2FtZU1ha2VyKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXJHYW1lTWFrZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGJhY2tIb21lVVJMKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JhY2tIb21lVVJMO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBsb2FkTGFuZ3VhZ2VEZWZhdWx0VVJMKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRMYW5ndWFnZURlZmF1bHRVUkw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGxvYWRMYW5ndWFnZVVSTCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sb2FkTGFuZ3VhZ2VVUkw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHVzZXJMYW5ndWFnZSgpOiBMYW5ndWFnZVR5cGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl91c2VyTGFuZ3VhZ2U7XHJcbiAgICB9XHJcbn0iXX0=