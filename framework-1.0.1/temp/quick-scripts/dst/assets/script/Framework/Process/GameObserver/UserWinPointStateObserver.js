
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Process/GameObserver/UserWinPointStateObserver.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXFByb2Nlc3NcXEdhbWVPYnNlcnZlclxcVXNlcldpblBvaW50U3RhdGVPYnNlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7OztHQUtHO0FBQ0g7SUFNSSxtQ0FBWSxPQUFrRCxFQUFFLElBQUk7UUFDaEUsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDM0IsQ0FBQztJQUVELG9EQUFnQixHQUFoQixVQUFpQixRQUFnQixFQUFFLEtBQWE7UUFDNUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELHNCQUFJLGtEQUFXO2FBQWY7WUFDSSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDN0IsQ0FBQzthQUVELFVBQWdCLEtBQWM7WUFDMUIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDOUIsQ0FBQzs7O09BSkE7SUFLTCxnQ0FBQztBQUFELENBdkJBLEFBdUJDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQEF1dGhvciBYSUFPLUxJLVBJTlxyXG4gKiBARGVzY3JpcHRpb24g55So5oi26LSP5YiG5pmC5LqL5Lu25o6o5pKlLOeVtuacieS6i+S7tuaOqOmAgeaZgizlsIfmnIPlsIfoqbLkuovku7bmjqjmkq3ntabntoHlrprogIVcclxuICogQERhdGUgMjAyMS0wNS0yMCDkuIvljYggMDQ6NDBcclxuICogQFZlcnNpb24gMS4wXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyV2luUG9pbnRTdGF0ZU9ic2VydmVyIGltcGxlbWVudHMgSU9ic2VydmVyIHtcclxuXHJcbiAgICBwcml2YXRlIF9pc1Blcm1hbmVudDogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgc2VsZjogYW55O1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBjYWxsRnVuOiAod2luUG9pbnQ6IG51bWJlciwgbGV2ZWw6IG51bWJlcikgPT4gdm9pZDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjYWxsRnVuOiAod2luUG9pbnQ6IG51bWJlciwgbGV2ZWw6IG51bWJlcikgPT4gdm9pZCwgc2VsZikge1xyXG4gICAgICAgIHRoaXMuX2lzUGVybWFuZW50ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zZWxmID0gc2VsZjtcclxuICAgICAgICB0aGlzLmNhbGxGdW4gPSBjYWxsRnVuO1xyXG4gICAgfVxyXG5cclxuICAgIHB1c2hOb3RpZmljYXRpb24od2luUG9pbnQ6IG51bWJlciwgbGV2ZWw6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuY2FsbEZ1bi5jYWxsKHRoaXMuc2VsZiwgd2luUG9pbnQsIGxldmVsKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaXNQZXJtYW5lbnQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzUGVybWFuZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBpc1Blcm1hbmVudCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX2lzUGVybWFuZW50ID0gdmFsdWU7XHJcbiAgICB9XHJcbn0iXX0=