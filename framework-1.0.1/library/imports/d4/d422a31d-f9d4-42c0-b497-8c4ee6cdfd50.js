"use strict";
cc._RF.push(module, 'd422aMd+dRCwLSXjE7mzf1Q', 'SceneDirectionChangeNotification');
// script/Framework/Scene/SceneNotification/SceneDirectionChangeNotification.ts

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
 * @Description 場景方向改變通知管理器
 * @Date 2021-05-19 下午 01:57
 * @Version 1.0
 */
var SceneDirectionChangeNotification = /** @class */ (function () {
    function SceneDirectionChangeNotification() {
        this.observer = new Set();
    }
    Object.defineProperty(SceneDirectionChangeNotification, "instance", {
        /**
         * 懶漢加載,單例模式
         * @returns {SceneDirectionChangeNotification}
         */
        get: function () {
            if (!this._instance) {
                this._instance = new SceneDirectionChangeNotification();
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 添加scene,更換方向時,推播事件
     * @param {SceneDirectionChangeObserver} observer : 推撥對象
     * @param {boolean} isPermanent
     */
    SceneDirectionChangeNotification.prototype.subscribe = function (observer, isPermanent) {
        if (this.observer.has(observer)) {
            ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.SceneFW, observer + " \u8A72\u985E\u5DF2\u8A3B\u518A\u904E\u8A72scene\u65B9\u5411\u66F4\u6539\u76E3\u807D\u4E8B\u4EF6,\u8ACB\u6AA2\u5BDF");
            return;
        }
        observer.isPermanent = isPermanent;
        this.observer.add(observer);
    };
    SceneDirectionChangeNotification.prototype.unsubscribe = function (observer) {
        if (this.observer.has(observer)) {
            this.observer.delete(observer);
        }
        else {
            ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.GameProcessFW, observer + " : \u8A72\u89C0\u5BDF\u985E\u5C1A\u672A\u7D81\u5B9A\u904E,\u7121\u9808\u79FB\u9664\u89C0\u5BDF\u5C0D\u8C61");
        }
    };
    SceneDirectionChangeNotification.prototype.notify = function (type) {
        var e_1, _a;
        if (this.observer.size > 0) {
            try {
                for (var _b = __values(this.observer), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var observer = _c.value;
                    observer.pushNotification(type);
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
    SceneDirectionChangeNotification.prototype.getSubscribeCount = function () {
        return this.observer.size;
    };
    SceneDirectionChangeNotification.prototype.getAllSubscribe = function () {
        return this.observer;
    };
    return SceneDirectionChangeNotification;
}());
exports.default = SceneDirectionChangeNotification;

cc._RF.pop();