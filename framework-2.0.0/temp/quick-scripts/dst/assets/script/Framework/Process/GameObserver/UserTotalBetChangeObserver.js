
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Process/GameObserver/UserTotalBetChangeObserver.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXFByb2Nlc3NcXEdhbWVPYnNlcnZlclxcVXNlclRvdGFsQmV0Q2hhbmdlT2JzZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7R0FLRztBQUNIO0lBS0ksb0NBQVksT0FBMEQsRUFBRSxJQUFJO1FBQ3hFLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQzNCLENBQUM7SUFFRCxxREFBZ0IsR0FBaEIsVUFBaUIsV0FBbUIsRUFBRSxVQUFrQjtRQUNwRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsc0JBQUksbURBQVc7YUFBZjtZQUNJLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztRQUM3QixDQUFDO2FBRUQsVUFBZ0IsS0FBYztZQUMxQixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUM5QixDQUFDOzs7T0FKQTtJQUtMLGlDQUFDO0FBQUQsQ0F0QkEsQUFzQkMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAQXV0aG9yIFhJQU8tTEktUElOXHJcbiAqIEBEZXNjcmlwdGlvbiDnlKjmiLbmm7Tmj5vnmoTmirzkvY/mmYIs55m86YCB5o6o5rOi5LqL5Lu26YCy5L6G5pmCLOWwh+acg+Wwh+ipsuS6i+S7tuaOqOaSree1pue2geWumuiAhVxyXG4gKiBARGF0ZSAyMDIxLTA1LTIwIOS4i+WNiCAwNDoxMlxyXG4gKiBAVmVyc2lvbiAxLjBcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJUb3RhbEJldENoYW5nZU9ic2VydmVyIGltcGxlbWVudHMgSU9ic2VydmVyIHtcclxuICAgIHByaXZhdGUgX2lzUGVybWFuZW50OiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBzZWxmOiBhbnk7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNhbGxGdW46IChiZWZvcmVJbmRleDogbnVtYmVyLCBhZnRlckluZGV4OiBudW1iZXIpID0+IHZvaWQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY2FsbEZ1bjogKGJlZm9yZUluZGV4OiBudW1iZXIsIGFmdGVySW5kZXg6IG51bWJlcikgPT4gdm9pZCwgc2VsZikge1xyXG4gICAgICAgIHRoaXMuX2lzUGVybWFuZW50ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zZWxmID0gc2VsZjtcclxuICAgICAgICB0aGlzLmNhbGxGdW4gPSBjYWxsRnVuO1xyXG4gICAgfVxyXG5cclxuICAgIHB1c2hOb3RpZmljYXRpb24oYmVmb3JlSW5kZXg6IG51bWJlciwgYWZ0ZXJJbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5jYWxsRnVuLmNhbGwodGhpcy5zZWxmLCBiZWZvcmVJbmRleCwgYWZ0ZXJJbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlzUGVybWFuZW50KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc1Blcm1hbmVudDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgaXNQZXJtYW5lbnQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9pc1Blcm1hbmVudCA9IHZhbHVlO1xyXG4gICAgfVxyXG59Il19