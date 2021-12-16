
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/WebRequest/WebRequestManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXFdlYlJlcXVlc3RcXFdlYlJlcXVlc3RNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7SUE4Qkk7UUFFSSxrQ0FBa0M7UUFDbEMsc0JBQXNCO1FBQ3RCLGtDQUFrQztRQUNsQyw4QkFBOEI7UUFDOUIsZ0NBQWdDO1FBQ2hDLHNCQUFzQjtRQUN0QixvQ0FBb0M7UUFDcEMsa0NBQWtDO1FBQ2xDLDBCQUEwQjtRQUMxQixrQ0FBa0M7UUFDbEMsb0NBQW9DO1FBQ3BDLDhDQUE4QztRQUM5Qyx3REFBd0Q7UUFDeEQsNEJBQTRCO1FBQzVCLDhDQUE4QztRQUM5QyxnQ0FBZ0M7UUFDaEMsZ0NBQWdDO1FBQ2hDLHdDQUF3QztRQUN4Qyw0QkFBNEI7UUFDNUIsc0NBQXNDO1FBQ3RDLGtDQUFrQztRQUNsQyw0QkFBNEI7UUFDNUIsOEJBQThCO1FBQzlCLDhCQUE4QjtJQUNsQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ1csNkJBQVcsR0FBekIsVUFBMEIsYUFBNkI7UUFDbkQsTUFBTTtJQUNWLENBQUM7SUFLRCxzQkFBa0IsNkJBQVE7UUFIMUI7O1dBRUc7YUFDSDtZQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksaUJBQWlCLEVBQUUsQ0FBQzthQUM1QztZQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUdELHNCQUFJLHlDQUFVO2FBQWQ7WUFDSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUE7UUFDM0IsQ0FBQzthQUVELFVBQWUsS0FBYztZQUN6QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQTtRQUM1QixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLDBDQUFXO2FBQWY7WUFDSSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUE7UUFDNUIsQ0FBQzthQUVELFVBQWdC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QUFHLEtBQUssQ0FBQTtRQUMxQixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLHdDQUFTO2FBQWI7WUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUE7UUFDMUIsQ0FBQzthQUVELFVBQWMsS0FBYTtZQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQTtRQUMzQixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLHdDQUFTO2FBQWI7WUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUE7UUFDMUIsQ0FBQzthQUVELFVBQWMsS0FBYTtZQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQTtRQUMzQixDQUFDOzs7T0FKQTtJQUtMLHdCQUFDO0FBQUQsQ0E1UUEsQUE0UUMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SUNvbmZpZ01hbmFnZXJ9IGZyb20gXCIuLi9Db25maWcvSUNvbmZpZy9JQ29uZmlnTWFuYWdlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2ViUmVxdWVzdE1hbmFnZXIgaW1wbGVtZW50cyBJV2ViUmVxdWVzdE1hbmFnZXIge1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogSVdlYlJlcXVlc3RNYW5hZ2VyO1xyXG4gICAgcHJpdmF0ZSBjb25maWdNYW5hZ2VyOiBJQ29uZmlnTWFuYWdlcjtcclxuICAgIHByaXZhdGUgX0NvY29zRGVidWc6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIF9Db2Nvc0RlYnVnMjogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfTG9naW5EYXRhOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF9Mb2dpblN0YXRlOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF9SYXRpbzogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfVXNlckxhbmd1YWdlOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF9XYXJuaW5nVGV4dDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfYWNjb3VudDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfYmFja0hvbWVVUkw6IHN0cmluZztcclxuICAgIHByaXZhdGUgX2xvYWRMYW5ndWFnZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfbG9hZExhbmd1YWdlQ291bnQ6IHN0cmluZztcclxuICAgIHByaXZhdGUgX2xvYWRMYW5ndWFnZURlZmF1bHRVUkw6IHN0cmluZztcclxuICAgIHByaXZhdGUgX3Bhc3N3b3JkOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF9zZXJ2ZXJHYW1lR3JvdXBJRDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfc2VydmVySG9zdDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfc2VydmVyUG9ydDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfc2VydmVyWm9uZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfdXNlckNoYW5uZWxfSWQ6IHN0cmluZztcclxuICAgIHByaXZhdGUgX3VzZXJDb2RlOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF91c2VyR2FtZU1ha2VyOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF91c2VyR2FtZV9pZDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfdXNlckxhbmc6IHN0cmluZztcclxuICAgIHByaXZhdGUgX3VzZXJUb2tlbjogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfd2hlcmVSb29tOiBzdHJpbmc7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgICAgICAvLyB0aGlzLnNlcnZlckhvc3QgPSBcIjEwLjEwLjAuNDhcIjtcclxuICAgICAgICAvLyB0aGlzLkNvY29zRGVidWcgPSA7XHJcbiAgICAgICAgLy8gdGhpcy5Db2Nvc0RlYnVnMiA9IENvY29zRGVidWcyO1xyXG4gICAgICAgIC8vIHRoaXMuTG9naW5EYXRhID0gTG9naW5EYXRhO1xyXG4gICAgICAgIC8vIHRoaXMuTG9naW5TdGF0ZSA9IExvZ2luU3RhdGU7XHJcbiAgICAgICAgLy8gdGhpcy5SYXRpbyA9IFJhdGlvO1xyXG4gICAgICAgIC8vIHRoaXMuVXNlckxhbmd1YWdlID0gVXNlckxhbmd1YWdlO1xyXG4gICAgICAgIC8vIHRoaXMuV2FybmluZ1RleHQgPSBXYXJuaW5nVGV4dDtcclxuICAgICAgICAvLyB0aGlzLmFjY291bnQgPSBhY2NvdW50O1xyXG4gICAgICAgIC8vIHRoaXMuYmFja0hvbWVVUkwgPSBiYWNrSG9tZVVSTDtcclxuICAgICAgICAvLyB0aGlzLmxvYWRMYW5ndWFnZSA9IGxvYWRMYW5ndWFnZTtcclxuICAgICAgICAvLyB0aGlzLmxvYWRMYW5ndWFnZUNvdW50ID0gbG9hZExhbmd1YWdlQ291bnQ7XHJcbiAgICAgICAgLy8gdGhpcy5sb2FkTGFuZ3VhZ2VEZWZhdWx0VVJMID0gbG9hZExhbmd1YWdlRGVmYXVsdFVSTDtcclxuICAgICAgICAvLyB0aGlzLnBhc3N3b3JkID0gcGFzc3dvcmQ7XHJcbiAgICAgICAgLy8gdGhpcy5zZXJ2ZXJHYW1lR3JvdXBJRCA9IHNlcnZlckdhbWVHcm91cElEO1xyXG4gICAgICAgIC8vIHRoaXMuc2VydmVyUG9ydCA9IHNlcnZlclBvcnQ7XHJcbiAgICAgICAgLy8gdGhpcy5zZXJ2ZXJab25lID0gc2VydmVyWm9uZTtcclxuICAgICAgICAvLyB0aGlzLnVzZXJDaGFubmVsX0lkID0gdXNlckNoYW5uZWxfSWQ7XHJcbiAgICAgICAgLy8gdGhpcy51c2VyQ29kZSA9IHVzZXJDb2RlO1xyXG4gICAgICAgIC8vIHRoaXMudXNlckdhbWVNYWtlciA9IHVzZXJHYW1lTWFrZXI7XHJcbiAgICAgICAgLy8gdGhpcy51c2VyR2FtZV9pZCA9IHVzZXJHYW1lX2lkO1xyXG4gICAgICAgIC8vIHRoaXMudXNlckxhbmcgPSB1c2VyTGFuZztcclxuICAgICAgICAvLyB0aGlzLnVzZXJUb2tlbiA9IHVzZXJUb2tlbjtcclxuICAgICAgICAvLyB0aGlzLndoZXJlUm9vbSA9IHdoZXJlUm9vbTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqICDmh7bmvKLliqDovIlcclxuICAgICAqICDliJ3lp4vljJYs5Y+q6K6T5LiA5YCL5bCI5qGI55Si55Sf5LiA5qyh6KmyY2xhc3NcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzZXRJbnN0YW5jZShjb25maWdNYW5hZ2VyOiBJQ29uZmlnTWFuYWdlcikge1xyXG4gICAgICAgIC8vVE9ET1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogIOeNsuWPluW3sue2k+WIneWni+WMlueahOmdnOaFi+WvpuS+i2NsYXNzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGluc3RhbmNlKCk6IElXZWJSZXF1ZXN0TWFuYWdlciB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBXZWJSZXF1ZXN0TWFuYWdlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldCBDb2Nvc0RlYnVnKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9Db2Nvc0RlYnVnXHJcbiAgICB9XHJcblxyXG4gICAgc2V0IENvY29zRGVidWcodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9Db2Nvc0RlYnVnID0gdmFsdWVcclxuICAgIH1cclxuXHJcbiAgICBnZXQgQ29jb3NEZWJ1ZzIoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fQ29jb3NEZWJ1ZzJcclxuICAgIH1cclxuXHJcbiAgICBzZXQgQ29jb3NEZWJ1ZzIodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX0NvY29zRGVidWcyID0gdmFsdWVcclxuICAgIH1cclxuXHJcbiAgICBnZXQgTG9naW5EYXRhKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0xvZ2luRGF0YVxyXG4gICAgfVxyXG5cclxuICAgIHNldCBMb2dpbkRhdGEodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX0xvZ2luRGF0YSA9IHZhbHVlXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IExvZ2luU3RhdGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fTG9naW5TdGF0ZVxyXG4gICAgfVxyXG5cclxuICAgIHNldCBMb2dpblN0YXRlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9Mb2dpblN0YXRlID0gdmFsdWVcclxuICAgIH1cclxuXHJcbiAgICBnZXQgUmF0aW8oKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fUmF0aW9cclxuICAgIH1cclxuXHJcbiAgICBzZXQgUmF0aW8odmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX1JhdGlvID0gdmFsdWVcclxuICAgIH1cclxuXHJcbiAgICBnZXQgVXNlckxhbmd1YWdlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX1VzZXJMYW5ndWFnZVxyXG4gICAgfVxyXG5cclxuICAgIHNldCBVc2VyTGFuZ3VhZ2UodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX1VzZXJMYW5ndWFnZSA9IHZhbHVlXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IFdhcm5pbmdUZXh0KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX1dhcm5pbmdUZXh0XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IFdhcm5pbmdUZXh0KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9XYXJuaW5nVGV4dCA9IHZhbHVlXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGFjY291bnQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYWNjb3VudFxyXG4gICAgfVxyXG5cclxuICAgIHNldCBhY2NvdW50KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9hY2NvdW50ID0gdmFsdWVcclxuICAgIH1cclxuXHJcbiAgICBnZXQgYmFja0hvbWVVUkwoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYmFja0hvbWVVUkxcclxuICAgIH1cclxuXHJcbiAgICBzZXQgYmFja0hvbWVVUkwodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX2JhY2tIb21lVVJMID0gdmFsdWVcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbG9hZExhbmd1YWdlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRMYW5ndWFnZVxyXG4gICAgfVxyXG5cclxuICAgIHNldCBsb2FkTGFuZ3VhZ2UodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX2xvYWRMYW5ndWFnZSA9IHZhbHVlXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGxvYWRMYW5ndWFnZUNvdW50KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRMYW5ndWFnZUNvdW50XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGxvYWRMYW5ndWFnZUNvdW50KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9sb2FkTGFuZ3VhZ2VDb3VudCA9IHZhbHVlXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGxvYWRMYW5ndWFnZURlZmF1bHRVUkwoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbG9hZExhbmd1YWdlRGVmYXVsdFVSTFxyXG4gICAgfVxyXG5cclxuICAgIHNldCBsb2FkTGFuZ3VhZ2VEZWZhdWx0VVJMKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9sb2FkTGFuZ3VhZ2VEZWZhdWx0VVJMID0gdmFsdWVcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcGFzc3dvcmQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcGFzc3dvcmRcclxuICAgIH1cclxuXHJcbiAgICBzZXQgcGFzc3dvcmQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3Bhc3N3b3JkID0gdmFsdWVcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc2VydmVyR2FtZUdyb3VwSUQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2VydmVyR2FtZUdyb3VwSURcclxuICAgIH1cclxuXHJcbiAgICBzZXQgc2VydmVyR2FtZUdyb3VwSUQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NlcnZlckdhbWVHcm91cElEID0gdmFsdWVcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc2VydmVySG9zdCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXJ2ZXJIb3N0XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHNlcnZlckhvc3QodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3NlcnZlckhvc3QgPSB2YWx1ZVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBzZXJ2ZXJQb3J0KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlcnZlclBvcnRcclxuICAgIH1cclxuXHJcbiAgICBzZXQgc2VydmVyUG9ydCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2VydmVyUG9ydCA9IHZhbHVlXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNlcnZlclpvbmUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2VydmVyWm9uZVxyXG4gICAgfVxyXG5cclxuICAgIHNldCBzZXJ2ZXJab25lKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9zZXJ2ZXJab25lID0gdmFsdWVcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdXNlckNoYW5uZWxfSWQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdXNlckNoYW5uZWxfSWRcclxuICAgIH1cclxuXHJcbiAgICBzZXQgdXNlckNoYW5uZWxfSWQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3VzZXJDaGFubmVsX0lkID0gdmFsdWVcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdXNlckNvZGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdXNlckNvZGVcclxuICAgIH1cclxuXHJcbiAgICBzZXQgdXNlckNvZGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3VzZXJDb2RlID0gdmFsdWVcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdXNlckdhbWVNYWtlcigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl91c2VyR2FtZU1ha2VyXHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHVzZXJHYW1lTWFrZXIodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3VzZXJHYW1lTWFrZXIgPSB2YWx1ZVxyXG4gICAgfVxyXG5cclxuICAgIGdldCB1c2VyR2FtZV9pZCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl91c2VyR2FtZV9pZFxyXG4gICAgfVxyXG5cclxuICAgIHNldCB1c2VyR2FtZV9pZCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fdXNlckdhbWVfaWQgPSB2YWx1ZVxyXG4gICAgfVxyXG5cclxuICAgIGdldCB1c2VyTGFuZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl91c2VyTGFuZ1xyXG4gICAgfVxyXG5cclxuICAgIHNldCB1c2VyTGFuZyh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fdXNlckxhbmcgPSB2YWx1ZVxyXG4gICAgfVxyXG5cclxuICAgIGdldCB1c2VyVG9rZW4oKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdXNlclRva2VuXHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHVzZXJUb2tlbih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fdXNlclRva2VuID0gdmFsdWVcclxuICAgIH1cclxuXHJcbiAgICBnZXQgd2hlcmVSb29tKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3doZXJlUm9vbVxyXG4gICAgfVxyXG5cclxuICAgIHNldCB3aGVyZVJvb20odmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3doZXJlUm9vbSA9IHZhbHVlXHJcbiAgICB9XHJcbn0iXX0=