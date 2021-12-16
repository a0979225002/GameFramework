
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Slot/SlotNotifivation/ScrollFocusStateNotification.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXFNsb3RcXFNsb3ROb3RpZml2YXRpb25cXFNjcm9sbEZvY3VzU3RhdGVOb3RpZmljYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNFQUE0RDtBQUM1RCx5REFBb0Q7QUFHcEQ7Ozs7O0dBS0c7QUFDSDtJQU1JO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEdBQUcsRUFBNEIsQ0FBQztJQUN4RCxDQUFDO0lBTUQsc0JBQWtCLHdDQUFRO1FBSjFCOzs7V0FHRzthQUNIO1lBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSw0QkFBNEIsRUFBRSxDQUFDO2FBQ3ZEO1lBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBRUQsZ0RBQVMsR0FBVCxVQUFVLFFBQWtDLEVBQUUsV0FBb0I7UUFDOUQsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUM3QixzQkFBWSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsNEJBQVMsQ0FBQyxPQUFPLEVBQUssUUFBUSxtSEFBc0IsQ0FBQyxDQUFBO1lBQ3hGLE9BQU87U0FDVjtRQUNELFFBQVEsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRWhDLENBQUM7SUFFRCxrREFBVyxHQUFYLFVBQVksUUFBa0M7UUFFMUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNsQzthQUFNO1lBQ0gsc0JBQVksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLDRCQUFTLENBQUMsYUFBYSxFQUFLLFFBQVEsK0dBQXVCLENBQUMsQ0FBQztTQUNuRztJQUNMLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsNkNBQU0sR0FBTixVQUFPLEtBQVksRUFBQyxNQUFlOztRQUMvQixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRTs7Z0JBQ3hCLEtBQXFCLElBQUEsS0FBQSxTQUFBLElBQUksQ0FBQyxRQUFRLENBQUEsZ0JBQUEsNEJBQUU7b0JBQS9CLElBQUksUUFBUSxXQUFBO29CQUNiLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7b0JBQ3pDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFO3dCQUN2QixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO3FCQUM5QjtpQkFDSjs7Ozs7Ozs7O1NBQ0o7SUFDTCxDQUFDO0lBRUQsd0RBQWlCLEdBQWpCO1FBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztJQUM5QixDQUFDO0lBRUQsc0RBQWUsR0FBZjtRQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBQ0wsbUNBQUM7QUFBRCxDQS9EQSxBQStEQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFcnJvclR5cGV9IGZyb20gXCIuLi8uLi9FcnJvci9FbnVtL0Vycm9yTWFuYWdlckVudW1cIjtcclxuaW1wb3J0IEVycm9yTWFuYWdlciBmcm9tIFwiLi4vLi4vRXJyb3IvRXJyb3JNYW5hZ2VyXCI7XHJcbmltcG9ydCBTY3JvbGxGb2N1c1N0YXRlT2JzZXJ2ZXIgZnJvbSBcIi4uL1Nsb3RPYnNlcnZlci9TY3JvbGxGb2N1c1N0YXRlT2JzZXJ2ZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBAQXV0aG9yIFhJQU8tTEktUElOXHJcbiAqIEBEZXNjcmlwdGlvbiDpgJrnn6XnrqHnkIblmaggOiDnnofniYzmmYLnmoTni4DmhYvkuovku7bmjqjmkq3nrqHnkIZcclxuICogQERhdGUgMjAyMS0wNS0yMSDkuIvljYggMTI6MDhcclxuICogQFZlcnNpb24gMS4wXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JvbGxGb2N1c1N0YXRlTm90aWZpY2F0aW9uIGltcGxlbWVudHMgSU5vdGlmaWNhdGlvbk1hbmFnZXIge1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgb2JzZXJ2ZXI6IFNldDxTY3JvbGxGb2N1c1N0YXRlT2JzZXJ2ZXI+O1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogU2Nyb2xsRm9jdXNTdGF0ZU5vdGlmaWNhdGlvbjtcclxuXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBuZXcgU2V0PFNjcm9sbEZvY3VzU3RhdGVPYnNlcnZlcj4oKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaHtua8ouWKoOi8iSzllq7kvovmqKHlvI9cclxuICAgICAqIEByZXR1cm5zIHtTY3JvbGxGb2N1c1N0YXRlTm90aWZpY2F0aW9ufVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBpbnN0YW5jZSgpOiBTY3JvbGxGb2N1c1N0YXRlTm90aWZpY2F0aW9uIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2luc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IFNjcm9sbEZvY3VzU3RhdGVOb3RpZmljYXRpb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHN1YnNjcmliZShvYnNlcnZlcjogU2Nyb2xsRm9jdXNTdGF0ZU9ic2VydmVyLCBpc1Blcm1hbmVudDogYm9vbGVhbikge1xyXG4gICAgICAgIGlmICh0aGlzLm9ic2VydmVyLmhhcyhvYnNlcnZlcikpIHtcclxuICAgICAgICAgICAgRXJyb3JNYW5hZ2VyLmluc3RhbmNlLmV4ZWN1dGVFcnJvcihFcnJvclR5cGUuU2NlbmVGVywgYCR7b2JzZXJ2ZXJ9IOipsumhnuW3sue2k+iou+WGiumBjueeh+eJjOaZgueahOeLgOaFi+S6i+S7tizoq4vmqqLmn6VgKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9ic2VydmVyLmlzUGVybWFuZW50ID0gaXNQZXJtYW5lbnQ7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlci5hZGQob2JzZXJ2ZXIpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1bnN1YnNjcmliZShvYnNlcnZlcjogU2Nyb2xsRm9jdXNTdGF0ZU9ic2VydmVyKSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm9ic2VydmVyLmhhcyhvYnNlcnZlcikpIHtcclxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlci5kZWxldGUob2JzZXJ2ZXIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIEVycm9yTWFuYWdlci5pbnN0YW5jZS5leGVjdXRlRXJyb3IoRXJyb3JUeXBlLkdhbWVQcm9jZXNzRlcsIGAke29ic2VydmVyfSA6IOipsuingOWvn+mhnuWwmuacque2geWumumBjiznhKHpoIjnp7vpmaTop4Dlr5/lsI3osaFgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmjqjpgIHnnofmjpLkuovku7ZcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCA6IOmcgOimgeaTjeS9nOWTquWAi+WIl1xyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBpc1Nob3cgOiDopoHpoa/npLrpgoTpl5zplolcclxuICAgICAqL1xyXG4gICAgbm90aWZ5KGluZGV4Om51bWJlcixpc1Nob3c6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAodGhpcy5vYnNlcnZlci5zaXplID4gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBvYnNlcnZlciBvZiB0aGlzLm9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5wdXNoTm90aWZpY2F0aW9uKGluZGV4LCBpc1Nob3cpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFvYnNlcnZlci5pc1Blcm1hbmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUob2JzZXJ2ZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFN1YnNjcmliZUNvdW50KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub2JzZXJ2ZXIuc2l6ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBbGxTdWJzY3JpYmUoKTogU2V0PFNjcm9sbEZvY3VzU3RhdGVPYnNlcnZlcj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9ic2VydmVyO1xyXG4gICAgfVxyXG59Il19