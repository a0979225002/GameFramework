"use strict";
cc._RF.push(module, '58069JiyINEy5P2HYe5uKpq', 'AutoStateChangeObserver');
// script/Framework/Process/GameObserver/AutoStateChangeObserver.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @Author XIAO-LI-PIN
 * @Description 自動狀態改變時,當有事件推送時,將會將該事件推播給綁定者
 * @Date 2021-05-20 下午 05:08
 * @Version 1.0
 */
var AutoStateChangeObserver = /** @class */ (function () {
    function AutoStateChangeObserver(callFun, self) {
        this._isPermanent = false;
        this.self = self;
        this.callFun = callFun;
    }
    AutoStateChangeObserver.prototype.pushNotification = function (isAutomaticState, beforeAutoCount, afterAutoCount) {
        this.callFun.call(this.self, isAutomaticState, beforeAutoCount, afterAutoCount);
    };
    Object.defineProperty(AutoStateChangeObserver.prototype, "isPermanent", {
        get: function () {
            return this._isPermanent;
        },
        set: function (value) {
            this._isPermanent = value;
        },
        enumerable: false,
        configurable: true
    });
    return AutoStateChangeObserver;
}());
exports.default = AutoStateChangeObserver;

cc._RF.pop();