
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Slot/SlotObserver/StopNowStateObserver.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXFNsb3RcXFNsb3RPYnNlcnZlclxcU3RvcE5vd1N0YXRlT2JzZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7R0FLRztBQUNIO0lBTUksOEJBQVksT0FBbUIsRUFBRSxJQUFJO1FBQ2pDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQzNCLENBQUM7SUFFRCwrQ0FBZ0IsR0FBaEI7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELHNCQUFJLDZDQUFXO2FBQWY7WUFDSSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDN0IsQ0FBQzthQUVELFVBQWdCLEtBQWM7WUFDMUIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDOUIsQ0FBQzs7O09BSkE7SUFLTCwyQkFBQztBQUFELENBdkJBLEFBdUJDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQEF1dGhvciBYSUFPLUxJLVBJTlxyXG4gKiBARGVzY3JpcHRpb24g5Y2z5YGc54uA5oWL6YCa55+l5pmCLOeVtuacieS6i+S7tuaOqOmAgeaZgizlsIfmnIPlsIfoqbLkuovku7bmjqjmkq3ntabntoHlrprogIVcclxuICogQERhdGUgMjAyMS0wNS0yMSDkuIrljYggMTE6NTlcclxuICogQFZlcnNpb24gMS4wXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9wTm93U3RhdGVPYnNlcnZlciBpbXBsZW1lbnRzIElPYnNlcnZlciB7XHJcbiAgICBwcml2YXRlIF9pc1Blcm1hbmVudDogYm9vbGVhbjtcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNlbGY6IGFueTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgY2FsbEZ1bjogKCkgPT4gdm9pZDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjYWxsRnVuOiAoKSA9PiB2b2lkLCBzZWxmKSB7XHJcbiAgICAgICAgdGhpcy5faXNQZXJtYW5lbnQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNlbGYgPSBzZWxmO1xyXG4gICAgICAgIHRoaXMuY2FsbEZ1biA9IGNhbGxGdW47XHJcbiAgICB9XHJcblxyXG4gICAgcHVzaE5vdGlmaWNhdGlvbigpIHtcclxuICAgICAgICB0aGlzLmNhbGxGdW4uY2FsbCh0aGlzLnNlbGYpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpc1Blcm1hbmVudCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXNQZXJtYW5lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGlzUGVybWFuZW50KHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5faXNQZXJtYW5lbnQgPSB2YWx1ZTtcclxuICAgIH1cclxufSJdfQ==