"use strict";
cc._RF.push(module, 'a60d0hEUxRCR4Gw2ks9MYsV', 'UserTotalBetChangeObserver');
// script/Framework/Process/GameObserver/UserTotalBetChangeObserver.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @Author XIAO-LI-PIN
 * @Description 用戶更換的押住時,發送推波事件進來時,將會將該事件推播給綁定者
 * @Date 2021-05-20 下午 04:12
 * @Version 1.0
 */
var UserTotalBetChangeObserver = /** @class */ (function () {
    function UserTotalBetChangeObserver(callFun, self) {
        this._isPermanent = false;
        this.self = self;
        this.callFun = callFun;
    }
    UserTotalBetChangeObserver.prototype.pushNotification = function (beforeIndex, afterIndex) {
        this.callFun.call(this.self, beforeIndex, afterIndex);
    };
    Object.defineProperty(UserTotalBetChangeObserver.prototype, "isPermanent", {
        get: function () {
            return this._isPermanent;
        },
        set: function (value) {
            this._isPermanent = value;
        },
        enumerable: false,
        configurable: true
    });
    return UserTotalBetChangeObserver;
}());
exports.default = UserTotalBetChangeObserver;

cc._RF.pop();