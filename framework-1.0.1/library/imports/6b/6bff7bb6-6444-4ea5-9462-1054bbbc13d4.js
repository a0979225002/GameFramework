"use strict";
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