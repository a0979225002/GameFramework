
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Process/GameNotification/SpeedStateChangeNotification.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '10b80koLs9ALYStsNF9WVr5', 'SpeedStateChangeNotification');
// script/Framework/Process/GameNotification/SpeedStateChangeNotification.ts

"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorManagerEnum_1 = require("../../Error/Enum/ErrorManagerEnum");
var ErrorManager_1 = require("../../Error/ErrorManager");
/**
 * @Author XIAO-LI-PIN
 * @Description 通知管理器 :當前遊戲速度狀態改變時事件推播管理器
 * @Date 2021-05-21 上午 11:56
 * @Version 1.0
 */
var SpeedStateChangeNotification = /** @class */ (function () {
    function SpeedStateChangeNotification() {
        this.observer = new Set();
    }
    Object.defineProperty(SpeedStateChangeNotification, "instance", {
        /**
         * 懶漢加載,單例模式
         * @returns {SpeedStateChangeNotification}
         */
        get: function () {
            if (!this._instance) {
                this._instance = new SpeedStateChangeNotification();
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    SpeedStateChangeNotification.prototype.subscribe = function (observer, isPermanent) {
        if (this.observer.has(observer)) {
            ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.SceneFW, observer + " \u8A72\u985E\u5DF2\u5C07\u8A72\u985E\u8A3B\u518A\u904E\u904A\u6232\u901F\u5EA6\u72C0\u614B\u6539\u8B8A\u6642\u4E8B\u4EF6\u63A8\u64AD\u4E8B\u4EF6\u4E86,\u8ACB\u6AA2\u67E5");
            return;
        }
        observer.isPermanent = isPermanent;
        this.observer.add(observer);
    };
    SpeedStateChangeNotification.prototype.unsubscribe = function (observer) {
        if (this.observer.has(observer)) {
            this.observer.delete(observer);
        }
        else {
            ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.GameProcessFW, observer + " : \u8A72\u89C0\u5BDF\u985E\u5C1A\u672A\u7D81\u5B9A\u904E,\u7121\u9808\u79FB\u9664\u89C0\u5BDF\u5C0D\u8C61");
        }
    };
    /**
     * 推送當前加速狀態
     * @param {boolean} isSpeedUp : 要開啟加速,還是關閉加速
     */
    SpeedStateChangeNotification.prototype.notify = function (isSpeedUp) {
        var e_1, _a;
        if (this.observer.size > 0) {
            try {
                for (var _b = __values(this.observer), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var observer = _c.value;
                    observer.pushNotification(isSpeedUp);
                    if (!observer.isPermanent) {
                        this.unsubscribe(observer);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
    };
    SpeedStateChangeNotification.prototype.getSubscribeCount = function () {
        return this.observer.size;
    };
    SpeedStateChangeNotification.prototype.getAllSubscribe = function () {
        return this.observer;
    };
    return SpeedStateChangeNotification;
}());
exports.default = SpeedStateChangeNotification;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXFByb2Nlc3NcXEdhbWVOb3RpZmljYXRpb25cXFNwZWVkU3RhdGVDaGFuZ2VOb3RpZmljYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNFQUE0RDtBQUM1RCx5REFBb0Q7QUFHcEQ7Ozs7O0dBS0c7QUFDSDtJQU1JO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEdBQUcsRUFBNEIsQ0FBQztJQUN4RCxDQUFDO0lBTUQsc0JBQWtCLHdDQUFRO1FBSjFCOzs7V0FHRzthQUNIO1lBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSw0QkFBNEIsRUFBRSxDQUFDO2FBQ3ZEO1lBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBRUQsZ0RBQVMsR0FBVCxVQUFVLFFBQWtDLEVBQUUsV0FBb0I7UUFDOUQsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUM3QixzQkFBWSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsNEJBQVMsQ0FBQyxPQUFPLEVBQUssUUFBUSwrS0FBZ0MsQ0FBQyxDQUFBO1lBQ2xHLE9BQU87U0FDVjtRQUNELFFBQVEsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxrREFBVyxHQUFYLFVBQVksUUFBa0M7UUFDMUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNsQzthQUFNO1lBQ0gsc0JBQVksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLDRCQUFTLENBQUMsYUFBYSxFQUFLLFFBQVEsK0dBQXVCLENBQUMsQ0FBQztTQUNuRztJQUVMLENBQUM7SUFFRDs7O09BR0c7SUFDSCw2Q0FBTSxHQUFOLFVBQU8sU0FBa0I7O1FBQ3JCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFOztnQkFDeEIsS0FBcUIsSUFBQSxLQUFBLFNBQUEsSUFBSSxDQUFDLFFBQVEsQ0FBQSxnQkFBQSw0QkFBRTtvQkFBL0IsSUFBSSxRQUFRLFdBQUE7b0JBQ2IsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUNyQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRTt3QkFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztxQkFDOUI7aUJBQ0o7Ozs7Ozs7OztTQUNKO0lBQ0wsQ0FBQztJQUVELHdEQUFpQixHQUFqQjtRQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFDOUIsQ0FBQztJQUVELHNEQUFlLEdBQWY7UUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQztJQUNMLG1DQUFDO0FBQUQsQ0E3REEsQUE2REMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RXJyb3JUeXBlfSBmcm9tIFwiLi4vLi4vRXJyb3IvRW51bS9FcnJvck1hbmFnZXJFbnVtXCI7XHJcbmltcG9ydCBFcnJvck1hbmFnZXIgZnJvbSBcIi4uLy4uL0Vycm9yL0Vycm9yTWFuYWdlclwiO1xyXG5pbXBvcnQgU3BlZWRTdGF0ZUNoYW5nZU9ic2VydmVyIGZyb20gXCIuLi9HYW1lT2JzZXJ2ZXIvU3BlZWRTdGF0ZUNoYW5nZU9ic2VydmVyXCI7XHJcblxyXG4vKipcclxuICogQEF1dGhvciBYSUFPLUxJLVBJTlxyXG4gKiBARGVzY3JpcHRpb24g6YCa55+l566h55CG5ZmoIDrnlbbliY3pgYrmiLLpgJ/luqbni4DmhYvmlLnorormmYLkuovku7bmjqjmkq3nrqHnkIblmahcclxuICogQERhdGUgMjAyMS0wNS0yMSDkuIrljYggMTE6NTZcclxuICogQFZlcnNpb24gMS4wXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcGVlZFN0YXRlQ2hhbmdlTm90aWZpY2F0aW9uIGltcGxlbWVudHMgSU5vdGlmaWNhdGlvbk1hbmFnZXIge1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgb2JzZXJ2ZXI6IFNldDxTcGVlZFN0YXRlQ2hhbmdlT2JzZXJ2ZXI+O1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogU3BlZWRTdGF0ZUNoYW5nZU5vdGlmaWNhdGlvbjtcclxuXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBuZXcgU2V0PFNwZWVkU3RhdGVDaGFuZ2VPYnNlcnZlcj4oKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaHtua8ouWKoOi8iSzllq7kvovmqKHlvI9cclxuICAgICAqIEByZXR1cm5zIHtTcGVlZFN0YXRlQ2hhbmdlTm90aWZpY2F0aW9ufVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBpbnN0YW5jZSgpOiBTcGVlZFN0YXRlQ2hhbmdlTm90aWZpY2F0aW9uIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2luc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IFNwZWVkU3RhdGVDaGFuZ2VOb3RpZmljYXRpb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHN1YnNjcmliZShvYnNlcnZlcjogU3BlZWRTdGF0ZUNoYW5nZU9ic2VydmVyLCBpc1Blcm1hbmVudDogYm9vbGVhbikge1xyXG4gICAgICAgIGlmICh0aGlzLm9ic2VydmVyLmhhcyhvYnNlcnZlcikpIHtcclxuICAgICAgICAgICAgRXJyb3JNYW5hZ2VyLmluc3RhbmNlLmV4ZWN1dGVFcnJvcihFcnJvclR5cGUuU2NlbmVGVywgYCR7b2JzZXJ2ZXJ9IOipsumhnuW3suWwh+ipsumhnuiou+WGiumBjumBiuaIsumAn+W6pueLgOaFi+aUueiuiuaZguS6i+S7tuaOqOaSreS6i+S7tuS6hizoq4vmqqLmn6VgKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9ic2VydmVyLmlzUGVybWFuZW50ID0gaXNQZXJtYW5lbnQ7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlci5hZGQob2JzZXJ2ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHVuc3Vic2NyaWJlKG9ic2VydmVyOiBTcGVlZFN0YXRlQ2hhbmdlT2JzZXJ2ZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5vYnNlcnZlci5oYXMob2JzZXJ2ZXIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIuZGVsZXRlKG9ic2VydmVyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBFcnJvck1hbmFnZXIuaW5zdGFuY2UuZXhlY3V0ZUVycm9yKEVycm9yVHlwZS5HYW1lUHJvY2Vzc0ZXLCBgJHtvYnNlcnZlcn0gOiDoqbLop4Dlr5/poZ7lsJrmnKrntoHlrprpgY4s54Sh6aCI56e76Zmk6KeA5a+f5bCN6LGhYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaOqOmAgeeVtuWJjeWKoOmAn+eLgOaFi1xyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBpc1NwZWVkVXAgOiDopoHplovllZ/liqDpgJ8s6YKE5piv6Zec6ZaJ5Yqg6YCfXHJcbiAgICAgKi9cclxuICAgIG5vdGlmeShpc1NwZWVkVXA6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAodGhpcy5vYnNlcnZlci5zaXplID4gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBvYnNlcnZlciBvZiB0aGlzLm9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5wdXNoTm90aWZpY2F0aW9uKGlzU3BlZWRVcCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIW9ic2VydmVyLmlzUGVybWFuZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZShvYnNlcnZlcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3Vic2NyaWJlQ291bnQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vYnNlcnZlci5zaXplO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFsbFN1YnNjcmliZSgpOiBTZXQ8U3BlZWRTdGF0ZUNoYW5nZU9ic2VydmVyPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub2JzZXJ2ZXI7XHJcbiAgICB9XHJcbn0iXX0=