"use strict";
cc._RF.push(module, '4e0236Q5AlEqJPSEU1+73eT', 'SceneDirectionChangeObserver');
// script/Framework/Scene/SceneObserver/SceneDirectionChangeObserver.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @Author XIAO-LI-PIN
 * @Description 場景方向改變觀察者,當有事件推送時,將會將該事件推播給綁定者
 * @Date 2021-05-19 下午 01:46
 * @Version 1.0
 */
var SceneDirectionChangeObserver = /** @class */ (function () {
    function SceneDirectionChangeObserver(callFun, self) {
        this._isPermanent = false;
        this.self = self;
        this.callFun = callFun;
    }
    SceneDirectionChangeObserver.prototype.pushNotification = function (type) {
        this.callFun.call(this.self, type);
    };
    Object.defineProperty(SceneDirectionChangeObserver.prototype, "isPermanent", {
        get: function () {
            return this._isPermanent;
        },
        set: function (value) {
            this._isPermanent = value;
        },
        enumerable: false,
        configurable: true
    });
    return SceneDirectionChangeObserver;
}());
exports.default = SceneDirectionChangeObserver;

cc._RF.pop();