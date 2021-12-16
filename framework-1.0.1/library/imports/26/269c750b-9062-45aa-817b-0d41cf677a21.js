"use strict";
cc._RF.push(module, '269c7ULkGJFqoF7DUHPZ3oh', 'UserMoenyChangeObserver');
// script/Framework/Process/GameObserver/UserMoenyChangeObserver.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @Author XIAO-LI-PIN
 * @Description 當有用戶金額變更,發送推波事件進來時,將會將該事件推播給綁定者
 * @Date 2021-05-20 下午 03:02
 * @Version 1.0
 */
var UserMoneyChangeObserver = /** @class */ (function () {
    function UserMoneyChangeObserver(callFun, self) {
        this._isPermanent = false;
        this.self = self;
        this.callFun = callFun;
    }
    UserMoneyChangeObserver.prototype.pushNotification = function (money) {
        this.callFun.call(this.self, money);
    };
    Object.defineProperty(UserMoneyChangeObserver.prototype, "isPermanent", {
        get: function () {
            return this._isPermanent;
        },
        set: function (value) {
            this._isPermanent = value;
        },
        enumerable: false,
        configurable: true
    });
    return UserMoneyChangeObserver;
}());
exports.default = UserMoneyChangeObserver;

cc._RF.pop();