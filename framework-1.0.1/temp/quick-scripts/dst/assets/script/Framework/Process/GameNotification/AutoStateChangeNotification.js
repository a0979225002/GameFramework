
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Process/GameNotification/AutoStateChangeNotification.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd1a5a1Ip6BG9YBQYFiVvvHh', 'AutoStateChangeNotification');
// script/Framework/Process/GameNotification/AutoStateChangeNotification.ts

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
 * @Description 通知管理器 : 自動狀態改變時事件推播管理器
 * @Date 2021-05-20 下午 05:05
 * @Version 1.0
 */
var AutoStateChangeNotification = /** @class */ (function () {
    function AutoStateChangeNotification() {
        this.observer = new Set();
    }
    Object.defineProperty(AutoStateChangeNotification, "instance", {
        /**
         * 懶漢加載,單例模式
         * @returns {AutoStateChangeNotification}
         */
        get: function () {
            if (!this._instance) {
                this._instance = new AutoStateChangeNotification();
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 訂閱該事件
     * @param {AutoStateChangeObserver} observer : 關注者
     * @param {boolean} isPermanent : 是否常駐
     */
    AutoStateChangeNotification.prototype.subscribe = function (observer, isPermanent) {
        if (this.observer.has(observer)) {
            ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.SceneFW, observer + " \u8A72\u985E\u5DF2\u8A3B\u518A\u904E\u81EA\u52D5\u72C0\u614B\u6539\u8B8A\u6642\u4E8B\u4EF6,\u8ACB\u6AA2\u67E5");
            return;
        }
        observer.isPermanent = isPermanent;
        this.observer.add(observer);
    };
    AutoStateChangeNotification.prototype.unsubscribe = function (observer) {
        if (this.observer.has(observer)) {
            this.observer.delete(observer);
        }
        else {
            ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.GameProcessFW, observer + " : \u8A72\u89C0\u5BDF\u985E\u5C1A\u672A\u7D81\u5B9A\u904E,\u7121\u9808\u79FB\u9664\u89C0\u5BDF\u5C0D\u8C61");
        }
    };
    /**
     * 發送自動狀態通知
     * @param {boolean} isAutomaticState - 更改後的狀態是否是自動狀態
     * @param {AutoType} beforeAutoCount - 更改前的auto類型
     * @param {AutoType} afterAutoCount  - 更改後的auto類型
     */
    AutoStateChangeNotification.prototype.notify = function (isAutomaticState, beforeAutoCount, afterAutoCount) {
        var e_1, _a;
        if (this.observer.size > 0) {
            try {
                for (var _b = __values(this.observer), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var observer = _c.value;
                    observer.pushNotification(isAutomaticState, beforeAutoCount, afterAutoCount);
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
    AutoStateChangeNotification.prototype.getSubscribeCount = function () {
        return this.observer.size;
    };
    AutoStateChangeNotification.prototype.getAllSubscribe = function () {
        return this.observer;
    };
    return AutoStateChangeNotification;
}());
exports.default = AutoStateChangeNotification;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXFByb2Nlc3NcXEdhbWVOb3RpZmljYXRpb25cXEF1dG9TdGF0ZUNoYW5nZU5vdGlmaWNhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esc0VBQTREO0FBQzVELHlEQUFvRDtBQUdwRDs7Ozs7R0FLRztBQUNIO0lBTUk7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksR0FBRyxFQUEyQixDQUFDO0lBQ3ZELENBQUM7SUFNRCxzQkFBa0IsdUNBQVE7UUFKMUI7OztXQUdHO2FBQ0g7WUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLDJCQUEyQixFQUFFLENBQUM7YUFDdEQ7WUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFFRDs7OztPQUlHO0lBQ0gsK0NBQVMsR0FBVCxVQUFVLFFBQWlDLEVBQUUsV0FBb0I7UUFDN0QsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUM3QixzQkFBWSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsNEJBQVMsQ0FBQyxPQUFPLEVBQUssUUFBUSxtSEFBc0IsQ0FBQyxDQUFBO1lBQ3hGLE9BQU87U0FDVjtRQUNELFFBQVEsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxpREFBVyxHQUFYLFVBQVksUUFBaUM7UUFDekMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNsQzthQUFNO1lBQ0gsc0JBQVksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLDRCQUFTLENBQUMsYUFBYSxFQUFLLFFBQVEsK0dBQXVCLENBQUMsQ0FBQztTQUNuRztJQUNMLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILDRDQUFNLEdBQU4sVUFBTyxnQkFBeUIsRUFBRSxlQUF5QixFQUFFLGNBQXdCOztRQUNqRixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRTs7Z0JBQ3hCLEtBQXFCLElBQUEsS0FBQSxTQUFBLElBQUksQ0FBQyxRQUFRLENBQUEsZ0JBQUEsNEJBQUU7b0JBQS9CLElBQUksUUFBUSxXQUFBO29CQUNiLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsY0FBYyxDQUFDLENBQUM7b0JBQzdFLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFO3dCQUN2QixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO3FCQUM5QjtpQkFDSjs7Ozs7Ozs7O1NBQ0o7SUFDTCxDQUFDO0lBRUQsdURBQWlCLEdBQWpCO1FBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztJQUM5QixDQUFDO0lBRUQscURBQWUsR0FBZjtRQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBR0wsa0NBQUM7QUFBRCxDQXJFQSxBQXFFQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBdXRvVHlwZX0gZnJvbSBcIi4uLy4uL0NvbmZpZy9FbnVtL0NvbmZpZ0VudW1cIjtcclxuaW1wb3J0IHtFcnJvclR5cGV9IGZyb20gXCIuLi8uLi9FcnJvci9FbnVtL0Vycm9yTWFuYWdlckVudW1cIjtcclxuaW1wb3J0IEVycm9yTWFuYWdlciBmcm9tIFwiLi4vLi4vRXJyb3IvRXJyb3JNYW5hZ2VyXCI7XHJcbmltcG9ydCBBdXRvU3RhdGVDaGFuZ2VPYnNlcnZlciBmcm9tIFwiLi4vR2FtZU9ic2VydmVyL0F1dG9TdGF0ZUNoYW5nZU9ic2VydmVyXCI7XHJcblxyXG4vKipcclxuICogQEF1dGhvciBYSUFPLUxJLVBJTlxyXG4gKiBARGVzY3JpcHRpb24g6YCa55+l566h55CG5ZmoIDog6Ieq5YuV54uA5oWL5pS56K6K5pmC5LqL5Lu25o6o5pKt566h55CG5ZmoXHJcbiAqIEBEYXRlIDIwMjEtMDUtMjAg5LiL5Y2IIDA1OjA1XHJcbiAqIEBWZXJzaW9uIDEuMFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0b1N0YXRlQ2hhbmdlTm90aWZpY2F0aW9uIGltcGxlbWVudHMgSU5vdGlmaWNhdGlvbk1hbmFnZXIge1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgb2JzZXJ2ZXI6IFNldDxBdXRvU3RhdGVDaGFuZ2VPYnNlcnZlcj47XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBBdXRvU3RhdGVDaGFuZ2VOb3RpZmljYXRpb247XHJcblxyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm9ic2VydmVyID0gbmV3IFNldDxBdXRvU3RhdGVDaGFuZ2VPYnNlcnZlcj4oKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaHtua8ouWKoOi8iSzllq7kvovmqKHlvI9cclxuICAgICAqIEByZXR1cm5zIHtBdXRvU3RhdGVDaGFuZ2VOb3RpZmljYXRpb259XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGluc3RhbmNlKCk6IEF1dG9TdGF0ZUNoYW5nZU5vdGlmaWNhdGlvbiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBBdXRvU3RhdGVDaGFuZ2VOb3RpZmljYXRpb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6KiC6Zax6Kmy5LqL5Lu2XHJcbiAgICAgKiBAcGFyYW0ge0F1dG9TdGF0ZUNoYW5nZU9ic2VydmVyfSBvYnNlcnZlciA6IOmXnOazqOiAhVxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBpc1Blcm1hbmVudCA6IOaYr+WQpuW4uOmnkFxyXG4gICAgICovXHJcbiAgICBzdWJzY3JpYmUob2JzZXJ2ZXI6IEF1dG9TdGF0ZUNoYW5nZU9ic2VydmVyLCBpc1Blcm1hbmVudDogYm9vbGVhbikge1xyXG4gICAgICAgIGlmICh0aGlzLm9ic2VydmVyLmhhcyhvYnNlcnZlcikpIHtcclxuICAgICAgICAgICAgRXJyb3JNYW5hZ2VyLmluc3RhbmNlLmV4ZWN1dGVFcnJvcihFcnJvclR5cGUuU2NlbmVGVywgYCR7b2JzZXJ2ZXJ9IOipsumhnuW3suiou+WGiumBjuiHquWLleeLgOaFi+aUueiuiuaZguS6i+S7tizoq4vmqqLmn6VgKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9ic2VydmVyLmlzUGVybWFuZW50ID0gaXNQZXJtYW5lbnQ7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlci5hZGQob2JzZXJ2ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHVuc3Vic2NyaWJlKG9ic2VydmVyOiBBdXRvU3RhdGVDaGFuZ2VPYnNlcnZlcikge1xyXG4gICAgICAgIGlmICh0aGlzLm9ic2VydmVyLmhhcyhvYnNlcnZlcikpIHtcclxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlci5kZWxldGUob2JzZXJ2ZXIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIEVycm9yTWFuYWdlci5pbnN0YW5jZS5leGVjdXRlRXJyb3IoRXJyb3JUeXBlLkdhbWVQcm9jZXNzRlcsIGAke29ic2VydmVyfSA6IOipsuingOWvn+mhnuWwmuacque2geWumumBjiznhKHpoIjnp7vpmaTop4Dlr5/lsI3osaFgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnmbzpgIHoh6rli5Xni4DmhYvpgJrnn6VcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNBdXRvbWF0aWNTdGF0ZSAtIOabtOaUueW+jOeahOeLgOaFi+aYr+WQpuaYr+iHquWLleeLgOaFi1xyXG4gICAgICogQHBhcmFtIHtBdXRvVHlwZX0gYmVmb3JlQXV0b0NvdW50IC0g5pu05pS55YmN55qEYXV0b+mhnuWei1xyXG4gICAgICogQHBhcmFtIHtBdXRvVHlwZX0gYWZ0ZXJBdXRvQ291bnQgIC0g5pu05pS55b6M55qEYXV0b+mhnuWei1xyXG4gICAgICovXHJcbiAgICBub3RpZnkoaXNBdXRvbWF0aWNTdGF0ZTogYm9vbGVhbiwgYmVmb3JlQXV0b0NvdW50OiBBdXRvVHlwZSwgYWZ0ZXJBdXRvQ291bnQ6IEF1dG9UeXBlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMub2JzZXJ2ZXIuc2l6ZSA+IDApIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgb2JzZXJ2ZXIgb2YgdGhpcy5vYnNlcnZlcikge1xyXG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIucHVzaE5vdGlmaWNhdGlvbihpc0F1dG9tYXRpY1N0YXRlLCBiZWZvcmVBdXRvQ291bnQsIGFmdGVyQXV0b0NvdW50KTtcclxuICAgICAgICAgICAgICAgIGlmICghb2JzZXJ2ZXIuaXNQZXJtYW5lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKG9ic2VydmVyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRTdWJzY3JpYmVDb3VudCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9ic2VydmVyLnNpemU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWxsU3Vic2NyaWJlKCk6IFNldDxBdXRvU3RhdGVDaGFuZ2VPYnNlcnZlcj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9ic2VydmVyO1xyXG4gICAgfVxyXG5cclxuXHJcbn0iXX0=