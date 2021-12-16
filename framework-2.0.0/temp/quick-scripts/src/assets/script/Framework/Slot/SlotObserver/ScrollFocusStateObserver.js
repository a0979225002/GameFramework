"use strict";
cc._RF.push(module, 'b872ekRjlRKP4caFumdEAm0', 'ScrollFocusStateObserver');
// script/Framework/Slot/SlotObserver/ScrollFocusStateObserver.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @Author XIAO-LI-PIN
 * @Description 當出現需要瞇排事件,當有事件推送時,將會將該事件推播給綁定者
 * @Date 2021-05-21 下午 12:08
 * @Version 1.0
 */
var ScrollFocusStateObserver = /** @class */ (function () {
    function ScrollFocusStateObserver(callFun, self) {
        this._isPermanent = false;
        this.self = self;
        this.callFun = callFun;
    }
    ScrollFocusStateObserver.prototype.pushNotification = function (index, isShow) {
        this.callFun.call(this.self, index, isShow);
    };
    Object.defineProperty(ScrollFocusStateObserver.prototype, "isPermanent", {
        get: function () {
            return this._isPermanent;
        },
        set: function (value) {
            this._isPermanent = value;
        },
        enumerable: false,
        configurable: true
    });
    return ScrollFocusStateObserver;
}());
exports.default = ScrollFocusStateObserver;

cc._RF.pop();