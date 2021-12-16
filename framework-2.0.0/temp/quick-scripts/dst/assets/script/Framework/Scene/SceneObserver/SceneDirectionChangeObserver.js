
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Scene/SceneObserver/SceneDirectionChangeObserver.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXFNjZW5lXFxTY2VuZU9ic2VydmVyXFxTY2VuZURpcmVjdGlvbkNoYW5nZU9ic2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7O0dBS0c7QUFDSDtJQUtJLHNDQUFZLE9BQTJDLEVBQUUsSUFBSTtRQUN6RCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUMzQixDQUFDO0lBRUQsdURBQWdCLEdBQWhCLFVBQWlCLElBQXdCO1FBQ3JDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELHNCQUFJLHFEQUFXO2FBQWY7WUFDSSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDN0IsQ0FBQzthQUVELFVBQWdCLEtBQWM7WUFDMUIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDOUIsQ0FBQzs7O09BSkE7SUFLTCxtQ0FBQztBQUFELENBdEJBLEFBc0JDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NjZW5lRGlyZWN0aW9uVHlwZX0gZnJvbSBcIi4uL0VudW0vU2NlbmVTdHlsZVwiO1xyXG5cclxuLyoqXHJcbiAqIEBBdXRob3IgWElBTy1MSS1QSU5cclxuICogQERlc2NyaXB0aW9uIOWgtOaZr+aWueWQkeaUueiuiuingOWvn+iAhSznlbbmnInkuovku7bmjqjpgIHmmYIs5bCH5pyD5bCH6Kmy5LqL5Lu25o6o5pKt57Wm57aB5a6a6ICFXHJcbiAqIEBEYXRlIDIwMjEtMDUtMTkg5LiL5Y2IIDAxOjQ2XHJcbiAqIEBWZXJzaW9uIDEuMFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NlbmVEaXJlY3Rpb25DaGFuZ2VPYnNlcnZlciBpbXBsZW1lbnRzIElPYnNlcnZlciB7XHJcbiAgICBwcml2YXRlIF9pc1Blcm1hbmVudDogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgc2VsZjogYW55O1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBjYWxsRnVuOiAodHlwZTogU2NlbmVEaXJlY3Rpb25UeXBlKSA9PiB2b2lkO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNhbGxGdW46ICh0eXBlOiBTY2VuZURpcmVjdGlvblR5cGUpID0+IHZvaWQsIHNlbGYpIHtcclxuICAgICAgICB0aGlzLl9pc1Blcm1hbmVudCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2VsZiA9IHNlbGY7XHJcbiAgICAgICAgdGhpcy5jYWxsRnVuID0gY2FsbEZ1bjtcclxuICAgIH1cclxuXHJcbiAgICBwdXNoTm90aWZpY2F0aW9uKHR5cGU6IFNjZW5lRGlyZWN0aW9uVHlwZSkge1xyXG4gICAgICAgIHRoaXMuY2FsbEZ1bi5jYWxsKHRoaXMuc2VsZiwgdHlwZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlzUGVybWFuZW50KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc1Blcm1hbmVudDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgaXNQZXJtYW5lbnQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9pc1Blcm1hbmVudCA9IHZhbHVlO1xyXG4gICAgfVxyXG59Il19