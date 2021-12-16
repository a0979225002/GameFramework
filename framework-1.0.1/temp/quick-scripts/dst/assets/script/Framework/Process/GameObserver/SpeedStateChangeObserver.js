
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Process/GameObserver/SpeedStateChangeObserver.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXFByb2Nlc3NcXEdhbWVPYnNlcnZlclxcU3BlZWRTdGF0ZUNoYW5nZU9ic2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0dBS0c7QUFDSDtJQU1JLGtDQUFZLE9BQXFDLEVBQUUsSUFBSTtRQUNuRCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUMzQixDQUFDO0lBRUQsbURBQWdCLEdBQWhCLFVBQWlCLFNBQWtCO1FBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELHNCQUFJLGlEQUFXO2FBQWY7WUFDSSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDN0IsQ0FBQzthQUVELFVBQWdCLEtBQWM7WUFDMUIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDOUIsQ0FBQzs7O09BSkE7SUFLTCwrQkFBQztBQUFELENBdkJBLEFBdUJDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQEF1dGhvciBYSUFPLUxJLVBJTlxyXG4gKiBARGVzY3JpcHRpb24g6YGK5oiy5Yqg6YCf54uA5oWL5pS56K6K5pmCLOeVtuacieS6i+S7tuaOqOmAgeaZgizlsIfmnIPlsIfoqbLkuovku7bmjqjmkq3ntabntoHlrprogIVcclxuICogQERhdGUgMjAyMS0wNS0yMSDkuIvljYggMTI6MDBcclxuICogQFZlcnNpb24gMS4wXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcGVlZFN0YXRlQ2hhbmdlT2JzZXJ2ZXIgaW1wbGVtZW50cyBJT2JzZXJ2ZXIge1xyXG5cclxuICAgIHByaXZhdGUgX2lzUGVybWFuZW50OiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBzZWxmOiBhbnk7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNhbGxGdW46IChpc1NwZWVkVXA6IGJvb2xlYW4pID0+IHZvaWQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY2FsbEZ1bjogKGlzU3BlZWRVcDogYm9vbGVhbikgPT4gdm9pZCwgc2VsZikge1xyXG4gICAgICAgIHRoaXMuX2lzUGVybWFuZW50ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zZWxmID0gc2VsZjtcclxuICAgICAgICB0aGlzLmNhbGxGdW4gPSBjYWxsRnVuO1xyXG4gICAgfVxyXG5cclxuICAgIHB1c2hOb3RpZmljYXRpb24oaXNTcGVlZFVwOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5jYWxsRnVuLmNhbGwodGhpcy5zZWxmLCBpc1NwZWVkVXApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpc1Blcm1hbmVudCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXNQZXJtYW5lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGlzUGVybWFuZW50KHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5faXNQZXJtYW5lbnQgPSB2YWx1ZTtcclxuICAgIH1cclxufSJdfQ==