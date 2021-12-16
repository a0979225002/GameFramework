
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Error/ErrorManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXEVycm9yXFxFcnJvck1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSwrQ0FBMEM7QUFJMUM7SUFpQkksc0JBQW9CLGFBQTZCO1FBQzdDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxzQkFBWSxFQUFFLENBQUM7UUFDbEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsQ0FBNEMsZUFBZTtRQUN2RixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLENBQTBDLGVBQWU7UUFDdkYsWUFBWSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsQ0FBdUMsZ0JBQWdCO1FBQ3hGLFlBQVksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLENBQXFDLFlBQVk7UUFDcEYsSUFBSSxDQUFDLHFCQUFxQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFVLDZCQUE2QjtJQUN6RyxDQUFDO0lBRUQ7OztPQUdHO0lBQ1csd0JBQVcsR0FBekIsVUFBMEIsYUFBNkI7UUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUNwRDtJQUNMLENBQUM7SUFLRCxzQkFBa0Isd0JBQVE7UUFIMUI7O1dBRUc7YUFDSDtZQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNqQixNQUFNLElBQUksS0FBSyxDQUFDLDhFQUE0QixDQUFDLENBQUE7YUFDaEQ7WUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FB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aEI7WUFDSSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDOUIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxvQ0FBVTthQUFkO1lBQ0ksT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzVCLENBQUM7OztPQUFBO0lBR0Qsc0JBQUksd0NBQWM7YUFBbEI7WUFDSSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDaEMsQ0FBQzs7O09BQUE7SUFHRCxzQkFBSSwwQ0FBZ0I7YUFBcEI7WUFDSSxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTtJQUdELHNCQUFJLDhDQUFvQjthQUF4QjtZQUVJLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDO1FBQ3RDLENBQUM7OztPQUFBO0lBR0wsbUJBQUM7QUFBRCxDQXRPQSxBQXNPQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJQ29uZmlnTWFuYWdlcn0gZnJvbSBcIi4uL0NvbmZpZy9JQ29uZmlnL0lDb25maWdNYW5hZ2VyXCI7XHJcbmltcG9ydCB7RXJyb3JUeXBlfSBmcm9tIFwiLi9FbnVtL0Vycm9yTWFuYWdlckVudW1cIjtcclxuaW1wb3J0IEVycm9ySGFuZGxlciBmcm9tIFwiLi9FcnJvckhhbmRsZXJcIjtcclxuaW1wb3J0IElFcnJvckhhbmRsZXIgZnJvbSBcIi4vSUVycm9ySGFuZGxlclwiO1xyXG5pbXBvcnQgSUVycm9yTWFuYWdlciBmcm9tIFwiLi9JRXJyb3JNYW5hZ2VyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcnJvck1hbmFnZXIgaW1wbGVtZW50cyBJRXJyb3JNYW5hZ2VyIHtcclxuXHJcbiAgICBwcml2YXRlIGNvbmZpZ01hbmFnZXI6IElDb25maWdNYW5hZ2VyO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBJRXJyb3JNYW5hZ2VyO1xyXG4gICAgcHJpdmF0ZSBoYW5kbGVyOiBJRXJyb3JIYW5kbGVyO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2Vycm9yU3RhdGU6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfd2FybmluZ1N0YXRlOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBfZXJyb3JEZWxheVRpbWU6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2Vycm9yTGFiZWw6IGNjLkxhYmVsO1xyXG4gICAgcHJpdmF0ZSBfZXJyb3JOb2RlOiBjYy5Ob2RlO1xyXG4gICAgcHJpdmF0ZSBfd2FybmluZ0xhYmVsOiBjYy5MYWJlbDtcclxuICAgIHByaXZhdGUgX3dhcm5pbmdOb2RlOiBjYy5Ob2RlO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfaXNTaG93QmFja0hvbWVCdXR0b246IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIF9lcnJvckJ1dHRvbjogY2MuTm9kZTtcclxuICAgIHB1YmxpYyBlcnJvckJ1dHRvbkxhYmVsOiBjYy5MYWJlbFxyXG4gICAgcHJpdmF0ZSBfd2FybmluZ0RlbGF5VGltZTogbnVtYmVyO1xyXG5cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoY29uZmlnTWFuYWdlcjogSUNvbmZpZ01hbmFnZXIpIHtcclxuICAgICAgICB0aGlzLmhhbmRsZXIgPSBuZXcgRXJyb3JIYW5kbGVyKCk7XHJcbiAgICAgICAgdGhpcy5jb25maWdNYW5hZ2VyID0gY29uZmlnTWFuYWdlcjtcclxuICAgICAgICB0aGlzLl9lcnJvck5vZGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX2Vycm9yTGFiZWwgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX2Vycm9yRGVsYXlUaW1lID0gMjAwMDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6Yyv6Kqk6KiK5oGv6aGv56S65pmC6ZaTIDogMuenklxyXG4gICAgICAgIHRoaXMuX3dhcm5pbmdEZWxheVRpbWUgPSAxMDAwOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6K2m5ZGK6KiK5oGv6aGv56S65pmC6ZaTIDogMeenklxyXG4gICAgICAgIEVycm9yTWFuYWdlci5fZXJyb3JTdGF0ZSA9IGZhbHNlOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v55W25YmN5piv5ZCm5q2j5Zyo6aGv56S6IEVycm9yXHJcbiAgICAgICAgRXJyb3JNYW5hZ2VyLl93YXJuaW5nU3RhdGUgPSBmYWxzZTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/nlbbliY3mmK/lkKbmraPlnKjpoa/npLrorablkYpcclxuICAgICAgICB0aGlzLl9pc1Nob3dCYWNrSG9tZUJ1dHRvbiA9ICEhdGhpcy5jb25maWdNYW5hZ2VyLmJhY2tIb21lVVJMOyAgICAgICAgICAvL+aqouafpeeVtuWJjeaYr+WQpuWbnummlumggVVSTCzlsIfkuYvos6bkuoh0cnVlOmZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAg5oe25ryi5Yqg6LyJXHJcbiAgICAgKiAg5Yid5aeL5YyWLOWPquiuk+S4gOWAi+WwiOahiOeUoueUn+S4gOasoeipsmNsYXNzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0SW5zdGFuY2UoY29uZmlnTWFuYWdlcjogSUNvbmZpZ01hbmFnZXIpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2luc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IEVycm9yTWFuYWdlcihjb25maWdNYW5hZ2VyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAg542y5Y+W5bey57aT5Yid5aeL5YyW55qE6Z2c5oWL5a+m5L6LY2xhc3NcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgaW5zdGFuY2UoKTogSUVycm9yTWFuYWdlciB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yTWFuYWdlcumhnumMr+iqpCA6ICDoqbLpoZ7lsJrmnKrlr6bkvovljJZgKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDosqzku7vpj4jmqKHlvI9cclxuICAgICAqIOmhr+ekuumMr+iqpOioiuaBryzog73lgZrlpJrlgIvnianku7bmqqLmuKxcclxuICAgICAqIEBwYXJhbXtzdHJpbmcgfCBFcnJvclR5cGUgfW1lc3NhZ2VcclxuICAgICAqIEBwYXJhbSBvYmpcclxuICAgICAqL1xyXG4gICAgZXhlY3V0ZUVycm9yKG1lc3NhZ2U6IHN0cmluZyB8IEVycm9yVHlwZSwgb2JqOiBhbnkpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlci5jaGVja0Vycm9yVHlwZShtZXNzYWdlLCBvYmopO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmhr+ekuumMr+iqpOimlueql1xyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBwZXJtYW5lbnRTdGF0ZSA6IOaYr+WQpuW4uOmnkFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgIDog6Yyv6Kqk6KiK5oGvXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYnV0dG9uVGV4dCA6IGJ1dHRvbuaWh+Wtl1xyXG4gICAgICovXHJcbiAgICBzZXJ2ZXJFcnJvcihwZXJtYW5lbnRTdGF0ZTogYm9vbGVhbiwgbWVzc2FnZTogc3RyaW5nLCBidXR0b25UZXh0Pzogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVyLmNoZWNrU2VydmVyRXJyb3IocGVybWFuZW50U3RhdGUsIG1lc3NhZ2UsIGJ1dHRvblRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6aGv56S66K2m5ZGKLOWwh+acg+iqv+eUqOW3suS/neWtmOeahOitpuWRik5vZGVcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcGVybWFuZW50U3RhdGUgOiDmmK/lkKbluLjpp5BcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlICA6IOmMr+iqpOioiuaBr1xyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGJ1dHRvblRleHQgOiBidXR0b27mloflrZdcclxuICAgICAqL1xyXG4gICAgd2FybmluZyhwZXJtYW5lbnRTdGF0ZTogYm9vbGVhbiwgbWVzc2FnZTogc3RyaW5nLCBidXR0b25UZXh0Pzogc3RyaW5nKSB7XHJcblxyXG4gICAgICAgIHRoaXMuaGFuZGxlci5jaGVja1dhcm5pbmcocGVybWFuZW50U3RhdGUsIG1lc3NhZ2UsIGJ1dHRvblRleHQpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOa3u+WKoOimgee2geWumueahEVycm9y57WE5Lu2XHJcbiAgICAgKiBAcGFyYW0gbm9kZVxyXG4gICAgICovXHJcbiAgICBzZXRFcnJvck5vZGUobm9kZTogY2MuTm9kZSk6IHRoaXMge1xyXG5cclxuICAgICAgICB0aGlzLl9lcnJvck5vZGUgPSBub2RlO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOa3u+WKoOimgemhr+ekukVycm9y6KiK5oGv55qETGFiZWxcclxuICAgICAqIEBwYXJhbSBsYWJlbFxyXG4gICAgICovXHJcbiAgICBzZXRFcnJvckxhYmVsKGxhYmVsOiBjYy5MYWJlbCk6IHRoaXMge1xyXG5cclxuICAgICAgICB0aGlzLl9lcnJvckxhYmVsID0gbGFiZWw7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5re75YqgZXJyb3JCdXR0b27ntoHlrppcclxuICAgICAqIEBwYXJhbSBub2RlXHJcbiAgICAgKi9cclxuICAgIHNldEVycm9yQnV0dG9uKG5vZGU6IGNjLk5vZGUpOiB0aGlzIHtcclxuXHJcbiAgICAgICAgdGhpcy5fZXJyb3JCdXR0b24gPSBub2RlO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOa3u+WKoOimgemhr+ekuueahOaZgumWkyznm67liY3lj6rlsI0oRXJyb3JUeXBlLmJldCnnlJ/mlYhcclxuICAgICAqIEBwYXJhbSB0aW1lXHJcbiAgICAgKi9cclxuICAgIHNldEVycm9yRGVsYXlUaW1lKHRpbWU6IG51bWJlcik6IHRoaXMge1xyXG5cclxuICAgICAgICB0aGlzLl9lcnJvckRlbGF5VGltZSA9IHRpbWU7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5re75Yqg6K2m5ZGK6KaB6aGv56S655qE5pmC6ZaTXHJcbiAgICAgKi9cclxuICAgIHNldFdhcm5pbmdEZWxheVRpbWUodGltZTogbnVtYmVyKTogdGhpcyB7XHJcblxyXG4gICAgICAgIHRoaXMuX3dhcm5pbmdEZWxheVRpbWUgPSB0aW1lO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOa3u+WKoOimgemhr+ekuuitpuWRiueahE5vZGVcclxuICAgICAqIEBwYXJhbSBub2RlXHJcbiAgICAgKi9cclxuICAgIHNldFdhcm5pbmdOb2RlKG5vZGU6IGNjLk5vZGUpOiB0aGlzIHtcclxuXHJcbiAgICAgICAgdGhpcy5fd2FybmluZ05vZGUgPSBub2RlO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOa3u+WKoOimgemhr+ekuuitpuWRiueahE5vZGVcclxuICAgICAqIEBwYXJhbSBsYWJlbFxyXG4gICAgICovXHJcbiAgICBzZXRXYXJuaW5nTGFiZWwobGFiZWw6IGNjLkxhYmVsKTogdGhpcyB7XHJcblxyXG4gICAgICAgIHRoaXMuX3dhcm5pbmdMYWJlbCA9IGxhYmVsO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOa3u+WKoOimgemhr+ekuumMr+iqpOimlueql+S4reaMiemIleeahGxhYmVsXHJcbiAgICAgKiBAcGFyYW0ge2NjLkxhYmVsfSBsYWJlbFxyXG4gICAgICogQHJldHVybiB7dGhpc31cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldEVycm9yQnV0dG9uTGFiZWwobGFiZWw6IGNjLkxhYmVsKTogdGhpcyB7XHJcblxyXG4gICAgICAgIHRoaXMuZXJyb3JCdXR0b25MYWJlbCA9IGxhYmVsO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IGVycm9yU3RhdGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Vycm9yU3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNldCBlcnJvclN0YXRlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fZXJyb3JTdGF0ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzdGF0aWMgZ2V0IHdhcm5pbmdTdGF0ZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fd2FybmluZ1N0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzZXQgd2FybmluZ1N0YXRlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fd2FybmluZ1N0YXRlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8v5pqr5pmC5bCH5YC86Y6W5L2PLOeEoeazleW+nuWklumDqOabtOaUuSzml6XlvozopoHkvb/nlKjogIXmm7Tmj5vmmYLlho3lgZrmiZPplotcclxuXHJcbiAgICBnZXQgZXJyb3JOb2RlKCk6IGNjLk5vZGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9lcnJvck5vZGU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldCB3YXJuaW5nTm9kZSgpOiBjYy5Ob2RlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fd2FybmluZ05vZGU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldCBlcnJvckJ1dHRvbigpOiBjYy5Ob2RlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZXJyb3JCdXR0b247XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHdhcm5pbmdMYWJlbCgpOiBjYy5MYWJlbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dhcm5pbmdMYWJlbDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZXJyb3JMYWJlbCgpOiBjYy5MYWJlbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Vycm9yTGFiZWw7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldCBlcnJvckRlbGF5VGltZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9lcnJvckRlbGF5VGltZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0IHdhcm5pbmdEZWxheVRpbWUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fd2FybmluZ0RlbGF5VGltZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0IGlzU2hvd0JhY2tIb21lQnV0dG9uKCk6IGJvb2xlYW4ge1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5faXNTaG93QmFja0hvbWVCdXR0b247XHJcbiAgICB9XHJcblxyXG5cclxufSJdfQ==