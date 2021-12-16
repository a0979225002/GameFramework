"use strict";
cc._RF.push(module, '827e1k1oFJE96jdhg1+phWZ', 'SpeedStateChangeObserver');
// script/Framework/Process/GameObserver/SpeedStateChangeObserver.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @Author XIAO-LI-PIN
 * @Description 遊戲加速狀態改變時,當有事件推送時,將會將該事件推播給綁定者
 * @Date 2021-05-21 下午 12:00
 * @Version 1.0
 */
var SpeedStateChangeObserver = /** @class */ (function () {
    function SpeedStateChangeObserver(callFun, self) {
        this._isPermanent = false;
        this.self = self;
        this.callFun = callFun;
    }
    SpeedStateChangeObserver.prototype.pushNotification = function (isSpeedUp) {
        this.callFun.call(this.self, isSpeedUp);
    };
    Object.defineProperty(SpeedStateChangeObserver.prototype, "isPermanent", {
        get: function () {
            return this._isPermanent;
        },
        set: function (value) {
            this._isPermanent = value;
        },
        enumerable: false,
        configurable: true
    });
    return SpeedStateChangeObserver;
}());
exports.default = SpeedStateChangeObserver;

cc._RF.pop();