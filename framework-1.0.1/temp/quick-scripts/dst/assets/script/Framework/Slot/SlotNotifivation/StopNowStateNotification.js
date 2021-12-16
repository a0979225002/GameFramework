
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Slot/SlotNotifivation/StopNowStateNotification.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bcc10nGfi1GrKDpfJEMWGQF', 'StopNowStateNotification');
// script/Framework/Slot/SlotNotifivation/StopNowStateNotification.ts

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
 * @Description 通知管理器 : 即停事件推播管理器
 * @Date 2021-05-21 上午 11:59
 * @Version 1.0
 */
var StopNowStateNotification = /** @class */ (function () {
    function StopNowStateNotification() {
        this.observer = new Set();
    }
    Object.defineProperty(StopNowStateNotification, "instance", {
        /**
         * 懶漢加載,單例模式
         * @returns {StopNowStateNotification}
         */
        get: function () {
            if (!this._instance) {
                this._instance = new StopNowStateNotification();
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    StopNowStateNotification.prototype.subscribe = function (observer, isPermanent) {
        if (this.observer.has(observer)) {
            ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.SceneFW, observer + " \u8A72\u985E\u5DF2\u8A3B\u518A\u904E\u5373\u505C\u4E8B\u4EF6,\u8ACB\u6AA2\u67E5");
            return;
        }
        observer.isPermanent = isPermanent;
        this.observer.add(observer);
    };
    StopNowStateNotification.prototype.unsubscribe = function (observer) {
        if (this.observer.has(observer)) {
            this.observer.delete(observer);
        }
        else {
            ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.GameProcessFW, observer + " : \u8A72\u89C0\u5BDF\u985E\u5C1A\u672A\u7D81\u5B9A\u904E,\u7121\u9808\u79FB\u9664\u89C0\u5BDF\u5C0D\u8C61");
        }
    };
    /**
     * 即停事件推播
     */
    StopNowStateNotification.prototype.notify = function () {
        var e_1, _a;
        if (this.observer.size > 0) {
            try {
                for (var _b = __values(this.observer), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var observer = _c.value;
                    observer.pushNotification();
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
    StopNowStateNotification.prototype.getSubscribeCount = function () {
        return this.observer.size;
    };
    StopNowStateNotification.prototype.getAllSubscribe = function () {
        return this.observer;
    };
    return StopNowStateNotification;
}());
exports.default = StopNowStateNotification;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXFNsb3RcXFNsb3ROb3RpZml2YXRpb25cXFN0b3BOb3dTdGF0ZU5vdGlmaWNhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0VBQTREO0FBQzVELHlEQUFvRDtBQUdwRDs7Ozs7R0FLRztBQUNIO0lBS0k7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksR0FBRyxFQUF3QixDQUFDO0lBQ3BELENBQUM7SUFNRCxzQkFBa0Isb0NBQVE7UUFKMUI7OztXQUdHO2FBQ0g7WUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLHdCQUF3QixFQUFFLENBQUM7YUFDbkQ7WUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFHRCw0Q0FBUyxHQUFULFVBQVUsUUFBOEIsRUFBRSxXQUFvQjtRQUMxRCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQzdCLHNCQUFZLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyw0QkFBUyxDQUFDLE9BQU8sRUFBSyxRQUFRLHFGQUFpQixDQUFDLENBQUM7WUFDcEYsT0FBTztTQUNWO1FBQ0QsUUFBUSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELDhDQUFXLEdBQVgsVUFBWSxRQUE4QjtRQUN0QyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ2xDO2FBQU07WUFDSCxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsNEJBQVMsQ0FBQyxhQUFhLEVBQUssUUFBUSwrR0FBdUIsQ0FBQyxDQUFDO1NBQ25HO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0gseUNBQU0sR0FBTjs7UUFDSSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRTs7Z0JBQ3hCLEtBQXFCLElBQUEsS0FBQSxTQUFBLElBQUksQ0FBQyxRQUFRLENBQUEsZ0JBQUEsNEJBQUU7b0JBQS9CLElBQUksUUFBUSxXQUFBO29CQUNiLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO29CQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRTt3QkFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztxQkFDOUI7aUJBQ0o7Ozs7Ozs7OztTQUNKO0lBQ0wsQ0FBQztJQUVELG9EQUFpQixHQUFqQjtRQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFDOUIsQ0FBQztJQUVELGtEQUFlLEdBQWY7UUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQztJQUVMLCtCQUFDO0FBQUQsQ0E1REEsQUE0REMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RXJyb3JUeXBlfSBmcm9tIFwiLi4vLi4vRXJyb3IvRW51bS9FcnJvck1hbmFnZXJFbnVtXCI7XHJcbmltcG9ydCBFcnJvck1hbmFnZXIgZnJvbSBcIi4uLy4uL0Vycm9yL0Vycm9yTWFuYWdlclwiO1xyXG5pbXBvcnQgU3RvcE5vd1N0YXRlT2JzZXJ2ZXIgZnJvbSBcIi4uL1Nsb3RPYnNlcnZlci9TdG9wTm93U3RhdGVPYnNlcnZlclwiO1xyXG5cclxuLyoqXHJcbiAqIEBBdXRob3IgWElBTy1MSS1QSU5cclxuICogQERlc2NyaXB0aW9uIOmAmuefpeeuoeeQhuWZqCA6IOWNs+WBnOS6i+S7tuaOqOaSreeuoeeQhuWZqFxyXG4gKiBARGF0ZSAyMDIxLTA1LTIxIOS4iuWNiCAxMTo1OVxyXG4gKiBAVmVyc2lvbiAxLjBcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3BOb3dTdGF0ZU5vdGlmaWNhdGlvbiBpbXBsZW1lbnRzIElOb3RpZmljYXRpb25NYW5hZ2VyIHtcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IG9ic2VydmVyOiBTZXQ8U3RvcE5vd1N0YXRlT2JzZXJ2ZXI+O1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBTdG9wTm93U3RhdGVOb3RpZmljYXRpb247XHJcblxyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm9ic2VydmVyID0gbmV3IFNldDxTdG9wTm93U3RhdGVPYnNlcnZlcj4oKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaHtua8ouWKoOi8iSzllq7kvovmqKHlvI9cclxuICAgICAqIEByZXR1cm5zIHtTdG9wTm93U3RhdGVOb3RpZmljYXRpb259XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGluc3RhbmNlKCk6IFN0b3BOb3dTdGF0ZU5vdGlmaWNhdGlvbiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBTdG9wTm93U3RhdGVOb3RpZmljYXRpb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzdWJzY3JpYmUob2JzZXJ2ZXI6IFN0b3BOb3dTdGF0ZU9ic2VydmVyLCBpc1Blcm1hbmVudDogYm9vbGVhbikge1xyXG4gICAgICAgIGlmICh0aGlzLm9ic2VydmVyLmhhcyhvYnNlcnZlcikpIHtcclxuICAgICAgICAgICAgRXJyb3JNYW5hZ2VyLmluc3RhbmNlLmV4ZWN1dGVFcnJvcihFcnJvclR5cGUuU2NlbmVGVywgYCR7b2JzZXJ2ZXJ9IOipsumhnuW3suiou+WGiumBjuWNs+WBnOS6i+S7tizoq4vmqqLmn6VgKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvYnNlcnZlci5pc1Blcm1hbmVudCA9IGlzUGVybWFuZW50O1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXIuYWRkKG9ic2VydmVyKTtcclxuICAgIH1cclxuXHJcbiAgICB1bnN1YnNjcmliZShvYnNlcnZlcjogU3RvcE5vd1N0YXRlT2JzZXJ2ZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5vYnNlcnZlci5oYXMob2JzZXJ2ZXIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIuZGVsZXRlKG9ic2VydmVyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBFcnJvck1hbmFnZXIuaW5zdGFuY2UuZXhlY3V0ZUVycm9yKEVycm9yVHlwZS5HYW1lUHJvY2Vzc0ZXLCBgJHtvYnNlcnZlcn0gOiDoqbLop4Dlr5/poZ7lsJrmnKrntoHlrprpgY4s54Sh6aCI56e76Zmk6KeA5a+f5bCN6LGhYCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Y2z5YGc5LqL5Lu25o6o5pKtXHJcbiAgICAgKi9cclxuICAgIG5vdGlmeSgpIHtcclxuICAgICAgICBpZiAodGhpcy5vYnNlcnZlci5zaXplID4gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBvYnNlcnZlciBvZiB0aGlzLm9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5wdXNoTm90aWZpY2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIW9ic2VydmVyLmlzUGVybWFuZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZShvYnNlcnZlcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3Vic2NyaWJlQ291bnQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vYnNlcnZlci5zaXplO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFsbFN1YnNjcmliZSgpOiBTZXQ8U3RvcE5vd1N0YXRlT2JzZXJ2ZXI+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vYnNlcnZlcjtcclxuICAgIH1cclxuXHJcbn0iXX0=