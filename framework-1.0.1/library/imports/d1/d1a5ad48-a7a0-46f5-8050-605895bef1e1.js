"use strict";
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