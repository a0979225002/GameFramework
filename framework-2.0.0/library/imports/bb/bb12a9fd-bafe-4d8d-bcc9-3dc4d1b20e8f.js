"use strict";
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