"use strict";
cc._RF.push(module, '22bban/thtBp4xDO8y0fhSx', 'UserWinPointStateObserver');
// script/Framework/Process/GameObserver/UserWinPointStateObserver.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @Author XIAO-LI-PIN
 * @Description 用戶贏分時事件推撥,當有事件推送時,將會將該事件推播給綁定者
 * @Date 2021-05-20 下午 04:40
 * @Version 1.0
 */
var UserWinPointStateObserver = /** @class */ (function () {
    function UserWinPointStateObserver(callFun, self) {
        this._isPermanent = false;
        this.self = self;
        this.callFun = callFun;
    }
    UserWinPointStateObserver.prototype.pushNotification = function (winPoint, level) {
        this.callFun.call(this.self, winPoint, level);
    };
    Object.defineProperty(UserWinPointStateObserver.prototype, "isPermanent", {
        get: function () {
            return this._isPermanent;
        },
        set: function (value) {
            this._isPermanent = value;
        },
        enumerable: false,
        configurable: true
    });
    return UserWinPointStateObserver;
}());
exports.default = UserWinPointStateObserver;

cc._RF.pop();