
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Scene/SceneNotification/SceneDirectionChangeNotification.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXFNjZW5lXFxTY2VuZU5vdGlmaWNhdGlvblxcU2NlbmVEaXJlY3Rpb25DaGFuZ2VOb3RpZmljYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNFQUE0RDtBQUM1RCx5REFBb0Q7QUFJcEQ7Ozs7O0dBS0c7QUFDSDtJQU1JO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEdBQUcsRUFBZ0MsQ0FBQztJQUM1RCxDQUFDO0lBTUQsc0JBQWtCLDRDQUFRO1FBSjFCOzs7V0FHRzthQUNIO1lBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxnQ0FBZ0MsRUFBRSxDQUFDO2FBQzNEO1lBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBRUQ7Ozs7T0FJRztJQUNILG9EQUFTLEdBQVQsVUFBVSxRQUFzQyxFQUFFLFdBQW9CO1FBQ2xFLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDN0Isc0JBQVksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLDRCQUFTLENBQUMsT0FBTyxFQUFLLFFBQVEsd0hBQTJCLENBQUMsQ0FBQTtZQUM3RixPQUFPO1NBQ1Y7UUFDRCxRQUFRLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsc0RBQVcsR0FBWCxVQUFZLFFBQXNDO1FBQzlDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDbEM7YUFBSztZQUNGLHNCQUFZLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyw0QkFBUyxDQUFDLGFBQWEsRUFBSSxRQUFRLCtHQUF1QixDQUFDLENBQUM7U0FDbEc7SUFDTCxDQUFDO0lBRUQsaURBQU0sR0FBTixVQUFPLElBQXdCOztRQUMzQixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRTs7Z0JBQ3hCLEtBQXFCLElBQUEsS0FBQSxTQUFBLElBQUksQ0FBQyxRQUFRLENBQUEsZ0JBQUEsNEJBQUU7b0JBQS9CLElBQUksUUFBUSxXQUFBO29CQUNiLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUU7d0JBQ3ZCLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7cUJBQzlCO2lCQUNKOzs7Ozs7Ozs7U0FDSjtJQUNMLENBQUM7SUFFRCw0REFBaUIsR0FBakI7UUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO0lBQzlCLENBQUM7SUFFRCwwREFBZSxHQUFmO1FBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFDTCx1Q0FBQztBQUFELENBN0RBLEFBNkRDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Vycm9yVHlwZX0gZnJvbSBcIi4uLy4uL0Vycm9yL0VudW0vRXJyb3JNYW5hZ2VyRW51bVwiO1xyXG5pbXBvcnQgRXJyb3JNYW5hZ2VyIGZyb20gXCIuLi8uLi9FcnJvci9FcnJvck1hbmFnZXJcIjtcclxuaW1wb3J0IHtTY2VuZURpcmVjdGlvblR5cGV9IGZyb20gXCIuLi9FbnVtL1NjZW5lU3R5bGVcIjtcclxuaW1wb3J0IFNjZW5lRGlyZWN0aW9uQ2hhbmdlT2JzZXJ2ZXIgZnJvbSBcIi4uL1NjZW5lT2JzZXJ2ZXIvU2NlbmVEaXJlY3Rpb25DaGFuZ2VPYnNlcnZlclwiO1xyXG5cclxuLyoqXHJcbiAqIEBBdXRob3IgWElBTy1MSS1QSU5cclxuICogQERlc2NyaXB0aW9uIOWgtOaZr+aWueWQkeaUueiuiumAmuefpeeuoeeQhuWZqFxyXG4gKiBARGF0ZSAyMDIxLTA1LTE5IOS4i+WNiCAwMTo1N1xyXG4gKiBAVmVyc2lvbiAxLjBcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjZW5lRGlyZWN0aW9uQ2hhbmdlTm90aWZpY2F0aW9uIGltcGxlbWVudHMgSU5vdGlmaWNhdGlvbk1hbmFnZXIge1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgb2JzZXJ2ZXI6IFNldDxTY2VuZURpcmVjdGlvbkNoYW5nZU9ic2VydmVyPjtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IFNjZW5lRGlyZWN0aW9uQ2hhbmdlTm90aWZpY2F0aW9uO1xyXG5cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlciA9IG5ldyBTZXQ8U2NlbmVEaXJlY3Rpb25DaGFuZ2VPYnNlcnZlcj4oKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaHtua8ouWKoOi8iSzllq7kvovmqKHlvI9cclxuICAgICAqIEByZXR1cm5zIHtTY2VuZURpcmVjdGlvbkNoYW5nZU5vdGlmaWNhdGlvbn1cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgaW5zdGFuY2UoKTogU2NlbmVEaXJlY3Rpb25DaGFuZ2VOb3RpZmljYXRpb24ge1xyXG4gICAgICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgU2NlbmVEaXJlY3Rpb25DaGFuZ2VOb3RpZmljYXRpb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5re75Yqgc2NlbmUs5pu05o+b5pa55ZCR5pmCLOaOqOaSreS6i+S7tlxyXG4gICAgICogQHBhcmFtIHtTY2VuZURpcmVjdGlvbkNoYW5nZU9ic2VydmVyfSBvYnNlcnZlciA6IOaOqOaSpeWwjeixoVxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBpc1Blcm1hbmVudFxyXG4gICAgICovXHJcbiAgICBzdWJzY3JpYmUob2JzZXJ2ZXI6IFNjZW5lRGlyZWN0aW9uQ2hhbmdlT2JzZXJ2ZXIsIGlzUGVybWFuZW50OiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKHRoaXMub2JzZXJ2ZXIuaGFzKG9ic2VydmVyKSkge1xyXG4gICAgICAgICAgICBFcnJvck1hbmFnZXIuaW5zdGFuY2UuZXhlY3V0ZUVycm9yKEVycm9yVHlwZS5TY2VuZUZXLCBgJHtvYnNlcnZlcn0g6Kmy6aGe5bey6Ki75YaK6YGO6Kmyc2NlbmXmlrnlkJHmm7TmlLnnm6Pogb3kuovku7Ys6KuL5qqi5a+fYClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvYnNlcnZlci5pc1Blcm1hbmVudCA9IGlzUGVybWFuZW50O1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXIuYWRkKG9ic2VydmVyKTtcclxuICAgIH1cclxuXHJcbiAgICB1bnN1YnNjcmliZShvYnNlcnZlcjogU2NlbmVEaXJlY3Rpb25DaGFuZ2VPYnNlcnZlcikge1xyXG4gICAgICAgIGlmICh0aGlzLm9ic2VydmVyLmhhcyhvYnNlcnZlcikpIHtcclxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlci5kZWxldGUob2JzZXJ2ZXIpO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgRXJyb3JNYW5hZ2VyLmluc3RhbmNlLmV4ZWN1dGVFcnJvcihFcnJvclR5cGUuR2FtZVByb2Nlc3NGVyxgJHtvYnNlcnZlcn0gOiDoqbLop4Dlr5/poZ7lsJrmnKrntoHlrprpgY4s54Sh6aCI56e76Zmk6KeA5a+f5bCN6LGhYCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5vdGlmeSh0eXBlOiBTY2VuZURpcmVjdGlvblR5cGUpIHtcclxuICAgICAgICBpZiAodGhpcy5vYnNlcnZlci5zaXplID4gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBvYnNlcnZlciBvZiB0aGlzLm9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5wdXNoTm90aWZpY2F0aW9uKHR5cGUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFvYnNlcnZlci5pc1Blcm1hbmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUob2JzZXJ2ZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFN1YnNjcmliZUNvdW50KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub2JzZXJ2ZXIuc2l6ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBbGxTdWJzY3JpYmUoKTogU2V0PFNjZW5lRGlyZWN0aW9uQ2hhbmdlT2JzZXJ2ZXI+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vYnNlcnZlcjtcclxuICAgIH1cclxufSJdfQ==