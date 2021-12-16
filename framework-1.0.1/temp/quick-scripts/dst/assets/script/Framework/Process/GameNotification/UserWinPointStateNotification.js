
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Process/GameNotification/UserWinPointStateNotification.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '76cdeqkn0xDxL1LR80tSVM7', 'UserWinPointStateNotification');
// script/Framework/Process/GameNotification/UserWinPointStateNotification.ts

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
 * @Description 通知管理器 : 用戶贏分時事件推播管理器
 * @Date 2021-05-20 下午 04:38
 * @Version 1.0
 */
var UserWinPointStateNotification = /** @class */ (function () {
    function UserWinPointStateNotification() {
        this.observer = new Set();
    }
    Object.defineProperty(UserWinPointStateNotification, "instance", {
        /**
         * 懶漢加載,單例模式
         * @returns {UserTotalBetChangeNotification}
         */
        get: function () {
            if (!this._instance) {
                this._instance = new UserWinPointStateNotification();
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    UserWinPointStateNotification.prototype.subscribe = function (observer, isPermanent) {
        if (this.observer.has(observer)) {
            ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.SceneFW, observer + " \u8A72\u985E\u5DF2\u8A3B\u518A\u904E\u7528\u6236\u8D0F\u5206\u6642\u72C0\u614B\u63A8\u64AD\u4E8B\u4EF6,\u8ACB\u6AA2\u5BDF");
            return;
        }
        observer.isPermanent = isPermanent;
        this.observer.add(observer);
    };
    UserWinPointStateNotification.prototype.unsubscribe = function (observer) {
        if (this.observer.has(observer)) {
            this.observer.delete(observer);
        }
        else {
            ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.GameProcessFW, observer + " : \u8A72\u89C0\u5BDF\u985E\u5C1A\u672A\u7D81\u5B9A\u904E,\u7121\u9808\u79FB\u9664\u89C0\u5BDF\u5C0D\u8C61");
        }
    };
    /**
     * 當用戶有贏分時推波當前贏分分數
     * @param {number} winPoint : 當前贏分分數
     * @param {number} level : 當前贏分等級
     */
    UserWinPointStateNotification.prototype.notify = function (winPoint, level) {
        var e_1, _a;
        if (this.observer.size > 0) {
            try {
                for (var _b = __values(this.observer), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var observer = _c.value;
                    observer.pushNotification(winPoint, level);
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
    UserWinPointStateNotification.prototype.getSubscribeCount = function () {
        return this.observer.size;
    };
    UserWinPointStateNotification.prototype.getAllSubscribe = function () {
        return this.observer;
    };
    return UserWinPointStateNotification;
}());
exports.default = UserWinPointStateNotification;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXFByb2Nlc3NcXEdhbWVOb3RpZmljYXRpb25cXFVzZXJXaW5Qb2ludFN0YXRlTm90aWZpY2F0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzRUFBNEQ7QUFDNUQseURBQW9EO0FBR3BEOzs7OztHQUtHO0FBQ0g7SUFNSTtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxHQUFHLEVBQTZCLENBQUM7SUFDekQsQ0FBQztJQU1ELHNCQUFrQix5Q0FBUTtRQUoxQjs7O1dBR0c7YUFDSDtZQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksNkJBQTZCLEVBQUUsQ0FBQzthQUN4RDtZQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUVELGlEQUFTLEdBQVQsVUFBVSxRQUFtQyxFQUFFLFdBQW9CO1FBQy9ELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDN0Isc0JBQVksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLDRCQUFTLENBQUMsT0FBTyxFQUFLLFFBQVEsK0hBQXdCLENBQUMsQ0FBQTtZQUMxRixPQUFPO1NBQ1Y7UUFDRCxRQUFRLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsbURBQVcsR0FBWCxVQUFZLFFBQW1DO1FBQzNDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDbEM7YUFBTTtZQUNILHNCQUFZLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyw0QkFBUyxDQUFDLGFBQWEsRUFBSyxRQUFRLCtHQUF1QixDQUFDLENBQUM7U0FDbkc7SUFDTCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILDhDQUFNLEdBQU4sVUFBTyxRQUFnQixFQUFFLEtBQWE7O1FBQ2xDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFOztnQkFDeEIsS0FBcUIsSUFBQSxLQUFBLFNBQUEsSUFBSSxDQUFDLFFBQVEsQ0FBQSxnQkFBQSw0QkFBRTtvQkFBL0IsSUFBSSxRQUFRLFdBQUE7b0JBQ2IsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDM0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUU7d0JBQ3ZCLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7cUJBQzlCO2lCQUNKOzs7Ozs7Ozs7U0FDSjtJQUNMLENBQUM7SUFFRCx5REFBaUIsR0FBakI7UUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO0lBQzlCLENBQUM7SUFFRCx1REFBZSxHQUFmO1FBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFDTCxvQ0FBQztBQUFELENBN0RBLEFBNkRDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Vycm9yVHlwZX0gZnJvbSBcIi4uLy4uL0Vycm9yL0VudW0vRXJyb3JNYW5hZ2VyRW51bVwiO1xyXG5pbXBvcnQgRXJyb3JNYW5hZ2VyIGZyb20gXCIuLi8uLi9FcnJvci9FcnJvck1hbmFnZXJcIjtcclxuaW1wb3J0IFVzZXJXaW5Qb2ludFN0YXRlT2JzZXJ2ZXIgZnJvbSBcIi4uL0dhbWVPYnNlcnZlci9Vc2VyV2luUG9pbnRTdGF0ZU9ic2VydmVyXCI7XHJcblxyXG4vKipcclxuICogQEF1dGhvciBYSUFPLUxJLVBJTlxyXG4gKiBARGVzY3JpcHRpb24g6YCa55+l566h55CG5ZmoIDog55So5oi26LSP5YiG5pmC5LqL5Lu25o6o5pKt566h55CG5ZmoXHJcbiAqIEBEYXRlIDIwMjEtMDUtMjAg5LiL5Y2IIDA0OjM4XHJcbiAqIEBWZXJzaW9uIDEuMFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlcldpblBvaW50U3RhdGVOb3RpZmljYXRpb24gaW1wbGVtZW50cyBJTm90aWZpY2F0aW9uTWFuYWdlciB7XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBvYnNlcnZlcjogU2V0PFVzZXJXaW5Qb2ludFN0YXRlT2JzZXJ2ZXI+O1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogVXNlcldpblBvaW50U3RhdGVOb3RpZmljYXRpb247XHJcblxyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm9ic2VydmVyID0gbmV3IFNldDxVc2VyV2luUG9pbnRTdGF0ZU9ic2VydmVyPigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5oe25ryi5Yqg6LyJLOWWruS+i+aooeW8j1xyXG4gICAgICogQHJldHVybnMge1VzZXJUb3RhbEJldENoYW5nZU5vdGlmaWNhdGlvbn1cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgaW5zdGFuY2UoKTogVXNlcldpblBvaW50U3RhdGVOb3RpZmljYXRpb24ge1xyXG4gICAgICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgVXNlcldpblBvaW50U3RhdGVOb3RpZmljYXRpb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHN1YnNjcmliZShvYnNlcnZlcjogVXNlcldpblBvaW50U3RhdGVPYnNlcnZlciwgaXNQZXJtYW5lbnQ6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAodGhpcy5vYnNlcnZlci5oYXMob2JzZXJ2ZXIpKSB7XHJcbiAgICAgICAgICAgIEVycm9yTWFuYWdlci5pbnN0YW5jZS5leGVjdXRlRXJyb3IoRXJyb3JUeXBlLlNjZW5lRlcsIGAke29ic2VydmVyfSDoqbLpoZ7lt7LoqLvlhorpgY7nlKjmiLbotI/liIbmmYLni4DmhYvmjqjmkq3kuovku7Ys6KuL5qqi5a+fYClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvYnNlcnZlci5pc1Blcm1hbmVudCA9IGlzUGVybWFuZW50O1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXIuYWRkKG9ic2VydmVyKTtcclxuICAgIH1cclxuXHJcbiAgICB1bnN1YnNjcmliZShvYnNlcnZlcjogVXNlcldpblBvaW50U3RhdGVPYnNlcnZlcikge1xyXG4gICAgICAgIGlmICh0aGlzLm9ic2VydmVyLmhhcyhvYnNlcnZlcikpIHtcclxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlci5kZWxldGUob2JzZXJ2ZXIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIEVycm9yTWFuYWdlci5pbnN0YW5jZS5leGVjdXRlRXJyb3IoRXJyb3JUeXBlLkdhbWVQcm9jZXNzRlcsIGAke29ic2VydmVyfSA6IOipsuingOWvn+mhnuWwmuacque2geWumumBjiznhKHpoIjnp7vpmaTop4Dlr5/lsI3osaFgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnlbbnlKjmiLbmnInotI/liIbmmYLmjqjms6LnlbbliY3otI/liIbliIbmlbhcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB3aW5Qb2ludCA6IOeVtuWJjei0j+WIhuWIhuaVuFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGxldmVsIDog55W25YmN6LSP5YiG562J57SaXHJcbiAgICAgKi9cclxuICAgIG5vdGlmeSh3aW5Qb2ludDogbnVtYmVyLCBsZXZlbDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMub2JzZXJ2ZXIuc2l6ZSA+IDApIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgb2JzZXJ2ZXIgb2YgdGhpcy5vYnNlcnZlcikge1xyXG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIucHVzaE5vdGlmaWNhdGlvbih3aW5Qb2ludCwgbGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFvYnNlcnZlci5pc1Blcm1hbmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUob2JzZXJ2ZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFN1YnNjcmliZUNvdW50KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub2JzZXJ2ZXIuc2l6ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBbGxTdWJzY3JpYmUoKTogU2V0PFVzZXJXaW5Qb2ludFN0YXRlT2JzZXJ2ZXI+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vYnNlcnZlcjtcclxuICAgIH1cclxufSJdfQ==