
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Process/GameNotification/UserMoneyChangeNotification.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6bff7u2ZEROpZRiEFS7vBPU', 'UserMoneyChangeNotification');
// script/Framework/Process/GameNotification/UserMoneyChangeNotification.ts

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
 * @Description 通知管理器 : 用戶金額變更時事件推播管理器
 * @Date 2021-05-20 下午 03:02
 * @Version 1.0
 */
var UserMoneyChangeNotification = /** @class */ (function () {
    function UserMoneyChangeNotification() {
        this.observer = new Set();
    }
    Object.defineProperty(UserMoneyChangeNotification, "instance", {
        /**
         * 懶漢加載,單例模式
         * @returns {UserMoneyChangeNotification}
         */
        get: function () {
            if (!this._instance) {
                this._instance = new UserMoneyChangeNotification();
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    UserMoneyChangeNotification.prototype.subscribe = function (observer, isPermanent) {
        if (this.observer.has(observer)) {
            ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.SceneFW, observer + " : \u5DF2\u8A3B\u518A\u904E\u8A72\u7528\u6236\u91D1\u984D\u8B8A\u66F4\u6642\u4E8B\u4EF6,\u8ACB\u6AA2\u5BDF");
            return;
        }
        observer.isPermanent = isPermanent;
        this.observer.add(observer);
    };
    UserMoneyChangeNotification.prototype.unsubscribe = function (observer) {
        if (this.observer.has(observer)) {
            this.observer.delete(observer);
        }
        else {
            ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.GameProcessFW, observer + " : \u8A72\u89C0\u5BDF\u985E\u5C1A\u672A\u7D81\u5B9A\u904E,\u7121\u9808\u79FB\u9664\u89C0\u5BDF\u5C0D\u8C61");
        }
    };
    UserMoneyChangeNotification.prototype.notify = function (money) {
        var e_1, _a;
        if (this.observer.size > 0) {
            try {
                for (var _b = __values(this.observer), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var observer = _c.value;
                    observer.pushNotification(money);
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
    UserMoneyChangeNotification.prototype.getSubscribeCount = function () {
        return this.observer.size;
    };
    UserMoneyChangeNotification.prototype.getAllSubscribe = function () {
        return this.observer;
    };
    return UserMoneyChangeNotification;
}());
exports.default = UserMoneyChangeNotification;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXFByb2Nlc3NcXEdhbWVOb3RpZmljYXRpb25cXFVzZXJNb25leUNoYW5nZU5vdGlmaWNhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0VBQTREO0FBQzVELHlEQUFvRDtBQUdwRDs7Ozs7R0FLRztBQUNIO0lBS0k7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksR0FBRyxFQUEyQixDQUFDO0lBQ3ZELENBQUM7SUFNRCxzQkFBa0IsdUNBQVE7UUFKMUI7OztXQUdHO2FBQ0g7WUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLDJCQUEyQixFQUFFLENBQUM7YUFDdEQ7WUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFFRCwrQ0FBUyxHQUFULFVBQVUsUUFBaUMsRUFBRSxXQUFvQjtRQUM3RCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQzdCLHNCQUFZLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyw0QkFBUyxDQUFDLE9BQU8sRUFBSyxRQUFRLCtHQUF1QixDQUFDLENBQUE7WUFDekYsT0FBTztTQUNWO1FBQ0QsUUFBUSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELGlEQUFXLEdBQVgsVUFBWSxRQUFpQztRQUN6QyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ2xDO2FBQU07WUFDSCxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsNEJBQVMsQ0FBQyxhQUFhLEVBQUssUUFBUSwrR0FBdUIsQ0FBQyxDQUFDO1NBQ25HO0lBQ0wsQ0FBQztJQUVELDRDQUFNLEdBQU4sVUFBTyxLQUFhOztRQUNoQixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRTs7Z0JBQ3hCLEtBQXFCLElBQUEsS0FBQSxTQUFBLElBQUksQ0FBQyxRQUFRLENBQUEsZ0JBQUEsNEJBQUU7b0JBQS9CLElBQUksUUFBUSxXQUFBO29CQUNiLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDakMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUU7d0JBQ3ZCLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7cUJBQzlCO2lCQUNKOzs7Ozs7Ozs7U0FDSjtJQUNMLENBQUM7SUFFRCx1REFBaUIsR0FBakI7UUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO0lBQzlCLENBQUM7SUFFRCxxREFBZSxHQUFmO1FBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFFTCxrQ0FBQztBQUFELENBeERBLEFBd0RDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Vycm9yVHlwZX0gZnJvbSBcIi4uLy4uL0Vycm9yL0VudW0vRXJyb3JNYW5hZ2VyRW51bVwiO1xyXG5pbXBvcnQgRXJyb3JNYW5hZ2VyIGZyb20gXCIuLi8uLi9FcnJvci9FcnJvck1hbmFnZXJcIjtcclxuaW1wb3J0IFVzZXJNb25leUNoYW5nZU9ic2VydmVyIGZyb20gXCIuLi9HYW1lT2JzZXJ2ZXIvVXNlck1vZW55Q2hhbmdlT2JzZXJ2ZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBAQXV0aG9yIFhJQU8tTEktUElOXHJcbiAqIEBEZXNjcmlwdGlvbiDpgJrnn6XnrqHnkIblmaggOiDnlKjmiLbph5HpoY3orormm7TmmYLkuovku7bmjqjmkq3nrqHnkIblmahcclxuICogQERhdGUgMjAyMS0wNS0yMCDkuIvljYggMDM6MDJcclxuICogQFZlcnNpb24gMS4wXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyTW9uZXlDaGFuZ2VOb3RpZmljYXRpb24gaW1wbGVtZW50cyBJTm90aWZpY2F0aW9uTWFuYWdlciB7XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBvYnNlcnZlcjogU2V0PFVzZXJNb25leUNoYW5nZU9ic2VydmVyPjtcclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogVXNlck1vbmV5Q2hhbmdlTm90aWZpY2F0aW9uO1xyXG5cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlciA9IG5ldyBTZXQ8VXNlck1vbmV5Q2hhbmdlT2JzZXJ2ZXI+KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmh7bmvKLliqDovIks5Zau5L6L5qih5byPXHJcbiAgICAgKiBAcmV0dXJucyB7VXNlck1vbmV5Q2hhbmdlTm90aWZpY2F0aW9ufVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBpbnN0YW5jZSgpOiBVc2VyTW9uZXlDaGFuZ2VOb3RpZmljYXRpb24ge1xyXG4gICAgICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgVXNlck1vbmV5Q2hhbmdlTm90aWZpY2F0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBzdWJzY3JpYmUob2JzZXJ2ZXI6IFVzZXJNb25leUNoYW5nZU9ic2VydmVyLCBpc1Blcm1hbmVudDogYm9vbGVhbikge1xyXG4gICAgICAgIGlmICh0aGlzLm9ic2VydmVyLmhhcyhvYnNlcnZlcikpIHtcclxuICAgICAgICAgICAgRXJyb3JNYW5hZ2VyLmluc3RhbmNlLmV4ZWN1dGVFcnJvcihFcnJvclR5cGUuU2NlbmVGVywgYCR7b2JzZXJ2ZXJ9IDog5bey6Ki75YaK6YGO6Kmy55So5oi26YeR6aGN6K6K5pu05pmC5LqL5Lu2LOiri+aqouWvn2ApXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgb2JzZXJ2ZXIuaXNQZXJtYW5lbnQgPSBpc1Blcm1hbmVudDtcclxuICAgICAgICB0aGlzLm9ic2VydmVyLmFkZChvYnNlcnZlcik7XHJcbiAgICB9XHJcblxyXG4gICAgdW5zdWJzY3JpYmUob2JzZXJ2ZXI6IFVzZXJNb25leUNoYW5nZU9ic2VydmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMub2JzZXJ2ZXIuaGFzKG9ic2VydmVyKSkge1xyXG4gICAgICAgICAgICB0aGlzLm9ic2VydmVyLmRlbGV0ZShvYnNlcnZlcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgRXJyb3JNYW5hZ2VyLmluc3RhbmNlLmV4ZWN1dGVFcnJvcihFcnJvclR5cGUuR2FtZVByb2Nlc3NGVywgYCR7b2JzZXJ2ZXJ9IDog6Kmy6KeA5a+f6aGe5bCa5pyq57aB5a6a6YGOLOeEoemgiOenu+mZpOingOWvn+WwjeixoWApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBub3RpZnkobW9uZXk6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLm9ic2VydmVyLnNpemUgPiAwKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IG9ic2VydmVyIG9mIHRoaXMub2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgICAgIG9ic2VydmVyLnB1c2hOb3RpZmljYXRpb24obW9uZXkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFvYnNlcnZlci5pc1Blcm1hbmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUob2JzZXJ2ZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFN1YnNjcmliZUNvdW50KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub2JzZXJ2ZXIuc2l6ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBbGxTdWJzY3JpYmUoKTogU2V0PFVzZXJNb25leUNoYW5nZU9ic2VydmVyPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub2JzZXJ2ZXI7XHJcbiAgICB9XHJcblxyXG59Il19