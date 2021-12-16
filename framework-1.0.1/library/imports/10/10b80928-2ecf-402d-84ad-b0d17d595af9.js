"use strict";
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