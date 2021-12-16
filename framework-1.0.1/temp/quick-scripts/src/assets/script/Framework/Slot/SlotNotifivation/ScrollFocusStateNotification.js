"use strict";
cc._RF.push(module, '993d5+EUWREy64HcRP9yV8E', 'ScrollFocusStateNotification');
// script/Framework/Slot/SlotNotifivation/ScrollFocusStateNotification.ts

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
 * @Description 通知管理器 : 瞇牌時的狀態事件推播管理
 * @Date 2021-05-21 下午 12:08
 * @Version 1.0
 */
var ScrollFocusStateNotification = /** @class */ (function () {
    function ScrollFocusStateNotification() {
        this.observer = new Set();
    }
    Object.defineProperty(ScrollFocusStateNotification, "instance", {
        /**
         * 懶漢加載,單例模式
         * @returns {ScrollFocusStateNotification}
         */
        get: function () {
            if (!this._instance) {
                this._instance = new ScrollFocusStateNotification();
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    ScrollFocusStateNotification.prototype.subscribe = function (observer, isPermanent) {
        if (this.observer.has(observer)) {
            ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.SceneFW, observer + " \u8A72\u985E\u5DF2\u7D93\u8A3B\u518A\u904E\u7787\u724C\u6642\u7684\u72C0\u614B\u4E8B\u4EF6,\u8ACB\u6AA2\u67E5");
            return;
        }
        observer.isPermanent = isPermanent;
        this.observer.add(observer);
    };
    ScrollFocusStateNotification.prototype.unsubscribe = function (observer) {
        if (this.observer.has(observer)) {
            this.observer.delete(observer);
        }
        else {
            ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.GameProcessFW, observer + " : \u8A72\u89C0\u5BDF\u985E\u5C1A\u672A\u7D81\u5B9A\u904E,\u7121\u9808\u79FB\u9664\u89C0\u5BDF\u5C0D\u8C61");
        }
    };
    /**
     * 推送瞇排事件
     * @param {number} index : 需要操作哪個列
     * @param {boolean} isShow : 要顯示還關閉
     */
    ScrollFocusStateNotification.prototype.notify = function (index, isShow) {
        var e_1, _a;
        if (this.observer.size > 0) {
            try {
                for (var _b = __values(this.observer), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var observer = _c.value;
                    observer.pushNotification(index, isShow);
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
    ScrollFocusStateNotification.prototype.getSubscribeCount = function () {
        return this.observer.size;
    };
    ScrollFocusStateNotification.prototype.getAllSubscribe = function () {
        return this.observer;
    };
    return ScrollFocusStateNotification;
}());
exports.default = ScrollFocusStateNotification;

cc._RF.pop();