"use strict";
cc._RF.push(module, '971370M/ZVFFKGwGQf+g/I6', 'StopNowStateObserver');
// script/Framework/Slot/SlotObserver/StopNowStateObserver.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @Author XIAO-LI-PIN
 * @Description 即停狀態通知時,當有事件推送時,將會將該事件推播給綁定者
 * @Date 2021-05-21 上午 11:59
 * @Version 1.0
 */
var StopNowStateObserver = /** @class */ (function () {
    function StopNowStateObserver(callFun, self) {
        this._isPermanent = false;
        this.self = self;
        this.callFun = callFun;
    }
    StopNowStateObserver.prototype.pushNotification = function () {
        this.callFun.call(this.self);
    };
    Object.defineProperty(StopNowStateObserver.prototype, "isPermanent", {
        get: function () {
            return this._isPermanent;
        },
        set: function (value) {
            this._isPermanent = value;
        },
        enumerable: false,
        configurable: true
    });
    return StopNowStateObserver;
}());
exports.default = StopNowStateObserver;

cc._RF.pop();