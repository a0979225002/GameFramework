
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Process/GameNotification/UserTotalBetChangeNotification.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bb12an9uv5NjbzJPcTRsg6P', 'UserTotalBetChangeNotification');
// script/Framework/Process/GameNotification/UserTotalBetChangeNotification.ts

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
 * @Description 通知管理器 : 用戶更換的押住金額事件推播管理器
 * @Date 2021-05-20 下午 04:11
 * @Version 1.0
 */
var UserTotalBetChangeNotification = /** @class */ (function () {
    function UserTotalBetChangeNotification() {
        this.observer = new Set();
    }
    Object.defineProperty(UserTotalBetChangeNotification, "instance", {
        /**
         * 懶漢加載,單例模式
         * @returns {UserTotalBetChangeNotification}
         */
        get: function () {
            if (!this._instance) {
                this._instance = new UserTotalBetChangeNotification();
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    UserTotalBetChangeNotification.prototype.subscribe = function (observer, isPermanent) {
        if (this.observer.has(observer)) {
            ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.SceneFW, observer + " \u8A72\u985E\u5DF2\u8A3B\u518A\u904E\u7528\u6236\u66F4\u63DB\u7684\u62BC\u4F4F\u91D1\u984D\u76E3\u807D\u4E8B\u4EF6,\u8ACB\u6AA2\u5BDF");
            return;
        }
        observer.isPermanent = isPermanent;
        this.observer.add(observer);
    };
    UserTotalBetChangeNotification.prototype.unsubscribe = function (observer) {
        if (this.observer.has(observer)) {
            this.observer.delete(observer);
        }
        else {
            ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.GameProcessFW, observer + " : \u8A72\u89C0\u5BDF\u985E\u5C1A\u672A\u7D81\u5B9A\u904E,\u7121\u9808\u79FB\u9664\u89C0\u5BDF\u5C0D\u8C61");
        }
    };
    /**
     * 推波用戶更換的押住金額index
     * @param {number} beforeIndex
     * @param {number} afterIndex
     */
    UserTotalBetChangeNotification.prototype.notify = function (beforeIndex, afterIndex) {
        var e_1, _a;
        if (this.observer.size > 0) {
            try {
                for (var _b = __values(this.observer), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var observer = _c.value;
                    observer.pushNotification(beforeIndex, afterIndex);
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
    UserTotalBetChangeNotification.prototype.getSubscribeCount = function () {
        return this.observer.size;
    };
    UserTotalBetChangeNotification.prototype.getAllSubscribe = function () {
        return this.observer;
    };
    return UserTotalBetChangeNotification;
}());
exports.default = UserTotalBetChangeNotification;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXFByb2Nlc3NcXEdhbWVOb3RpZmljYXRpb25cXFVzZXJUb3RhbEJldENoYW5nZU5vdGlmaWNhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0VBQTREO0FBQzVELHlEQUFvRDtBQUdwRDs7Ozs7R0FLRztBQUNIO0lBTUk7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksR0FBRyxFQUE4QixDQUFDO0lBQzFELENBQUM7SUFNRCxzQkFBa0IsMENBQVE7UUFKMUI7OztXQUdHO2FBQ0g7WUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLDhCQUE4QixFQUFFLENBQUM7YUFDekQ7WUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFFRCxrREFBUyxHQUFULFVBQVUsUUFBb0MsRUFBRSxXQUFvQjtRQUNoRSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQzdCLHNCQUFZLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyw0QkFBUyxDQUFDLE9BQU8sRUFBSyxRQUFRLDJJQUEwQixDQUFDLENBQUE7WUFDNUYsT0FBTztTQUNWO1FBQ0QsUUFBUSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELG9EQUFXLEdBQVgsVUFBWSxRQUFvQztRQUM1QyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ2xDO2FBQU07WUFDSCxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsNEJBQVMsQ0FBQyxhQUFhLEVBQUssUUFBUSwrR0FBdUIsQ0FBQyxDQUFDO1NBQ25HO0lBQ0wsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCwrQ0FBTSxHQUFOLFVBQU8sV0FBbUIsRUFBRSxVQUFrQjs7UUFDMUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUU7O2dCQUN4QixLQUFxQixJQUFBLEtBQUEsU0FBQSxJQUFJLENBQUMsUUFBUSxDQUFBLGdCQUFBLDRCQUFFO29CQUEvQixJQUFJLFFBQVEsV0FBQTtvQkFDYixRQUFRLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQyxDQUFDO29CQUNuRCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRTt3QkFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztxQkFDOUI7aUJBQ0o7Ozs7Ozs7OztTQUNKO0lBQ0wsQ0FBQztJQUVELDBEQUFpQixHQUFqQjtRQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFDOUIsQ0FBQztJQUVELHdEQUFlLEdBQWY7UUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQztJQUNMLHFDQUFDO0FBQUQsQ0E3REEsQUE2REMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RXJyb3JUeXBlfSBmcm9tIFwiLi4vLi4vRXJyb3IvRW51bS9FcnJvck1hbmFnZXJFbnVtXCI7XHJcbmltcG9ydCBFcnJvck1hbmFnZXIgZnJvbSBcIi4uLy4uL0Vycm9yL0Vycm9yTWFuYWdlclwiO1xyXG5pbXBvcnQgVXNlclRvdGFsQmV0Q2hhbmdlT2JzZXJ2ZXIgZnJvbSBcIi4uL0dhbWVPYnNlcnZlci9Vc2VyVG90YWxCZXRDaGFuZ2VPYnNlcnZlclwiO1xyXG5cclxuLyoqXHJcbiAqIEBBdXRob3IgWElBTy1MSS1QSU5cclxuICogQERlc2NyaXB0aW9uIOmAmuefpeeuoeeQhuWZqCA6IOeUqOaItuabtOaPm+eahOaKvOS9j+mHkemhjeS6i+S7tuaOqOaSreeuoeeQhuWZqFxyXG4gKiBARGF0ZSAyMDIxLTA1LTIwIOS4i+WNiCAwNDoxMVxyXG4gKiBAVmVyc2lvbiAxLjBcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJUb3RhbEJldENoYW5nZU5vdGlmaWNhdGlvbiBpbXBsZW1lbnRzIElOb3RpZmljYXRpb25NYW5hZ2VyIHtcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IG9ic2VydmVyOiBTZXQ8VXNlclRvdGFsQmV0Q2hhbmdlT2JzZXJ2ZXI+O1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogVXNlclRvdGFsQmV0Q2hhbmdlTm90aWZpY2F0aW9uO1xyXG5cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlciA9IG5ldyBTZXQ8VXNlclRvdGFsQmV0Q2hhbmdlT2JzZXJ2ZXI+KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmh7bmvKLliqDovIks5Zau5L6L5qih5byPXHJcbiAgICAgKiBAcmV0dXJucyB7VXNlclRvdGFsQmV0Q2hhbmdlTm90aWZpY2F0aW9ufVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBpbnN0YW5jZSgpOiBVc2VyVG90YWxCZXRDaGFuZ2VOb3RpZmljYXRpb24ge1xyXG4gICAgICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgVXNlclRvdGFsQmV0Q2hhbmdlTm90aWZpY2F0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBzdWJzY3JpYmUob2JzZXJ2ZXI6IFVzZXJUb3RhbEJldENoYW5nZU9ic2VydmVyLCBpc1Blcm1hbmVudDogYm9vbGVhbikge1xyXG4gICAgICAgIGlmICh0aGlzLm9ic2VydmVyLmhhcyhvYnNlcnZlcikpIHtcclxuICAgICAgICAgICAgRXJyb3JNYW5hZ2VyLmluc3RhbmNlLmV4ZWN1dGVFcnJvcihFcnJvclR5cGUuU2NlbmVGVywgYCR7b2JzZXJ2ZXJ9IOipsumhnuW3suiou+WGiumBjueUqOaItuabtOaPm+eahOaKvOS9j+mHkemhjeebo+iBveS6i+S7tizoq4vmqqLlr59gKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9ic2VydmVyLmlzUGVybWFuZW50ID0gaXNQZXJtYW5lbnQ7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlci5hZGQob2JzZXJ2ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHVuc3Vic2NyaWJlKG9ic2VydmVyOiBVc2VyVG90YWxCZXRDaGFuZ2VPYnNlcnZlcikge1xyXG4gICAgICAgIGlmICh0aGlzLm9ic2VydmVyLmhhcyhvYnNlcnZlcikpIHtcclxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlci5kZWxldGUob2JzZXJ2ZXIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIEVycm9yTWFuYWdlci5pbnN0YW5jZS5leGVjdXRlRXJyb3IoRXJyb3JUeXBlLkdhbWVQcm9jZXNzRlcsIGAke29ic2VydmVyfSA6IOipsuingOWvn+mhnuWwmuacque2geWumumBjiznhKHpoIjnp7vpmaTop4Dlr5/lsI3osaFgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmjqjms6LnlKjmiLbmm7Tmj5vnmoTmirzkvY/ph5HpoY1pbmRleFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGJlZm9yZUluZGV4XHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gYWZ0ZXJJbmRleFxyXG4gICAgICovXHJcbiAgICBub3RpZnkoYmVmb3JlSW5kZXg6IG51bWJlciwgYWZ0ZXJJbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMub2JzZXJ2ZXIuc2l6ZSA+IDApIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgb2JzZXJ2ZXIgb2YgdGhpcy5vYnNlcnZlcikge1xyXG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIucHVzaE5vdGlmaWNhdGlvbihiZWZvcmVJbmRleCwgYWZ0ZXJJbmRleCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIW9ic2VydmVyLmlzUGVybWFuZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZShvYnNlcnZlcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3Vic2NyaWJlQ291bnQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vYnNlcnZlci5zaXplO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFsbFN1YnNjcmliZSgpOiBTZXQ8VXNlclRvdGFsQmV0Q2hhbmdlT2JzZXJ2ZXI+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vYnNlcnZlcjtcclxuICAgIH1cclxufSJdfQ==