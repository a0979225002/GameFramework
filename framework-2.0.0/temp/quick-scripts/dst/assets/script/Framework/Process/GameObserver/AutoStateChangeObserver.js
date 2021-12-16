
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Process/GameObserver/AutoStateChangeObserver.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '58069JiyINEy5P2HYe5uKpq', 'AutoStateChangeObserver');
// script/Framework/Process/GameObserver/AutoStateChangeObserver.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @Author XIAO-LI-PIN
 * @Description 自動狀態改變時,當有事件推送時,將會將該事件推播給綁定者
 * @Date 2021-05-20 下午 05:08
 * @Version 1.0
 */
var AutoStateChangeObserver = /** @class */ (function () {
    function AutoStateChangeObserver(callFun, self) {
        this._isPermanent = false;
        this.self = self;
        this.callFun = callFun;
    }
    AutoStateChangeObserver.prototype.pushNotification = function (isAutomaticState, beforeAutoCount, afterAutoCount) {
        this.callFun.call(this.self, isAutomaticState, beforeAutoCount, afterAutoCount);
    };
    Object.defineProperty(AutoStateChangeObserver.prototype, "isPermanent", {
        get: function () {
            return this._isPermanent;
        },
        set: function (value) {
            this._isPermanent = value;
        },
        enumerable: false,
        configurable: true
    });
    return AutoStateChangeObserver;
}());
exports.default = AutoStateChangeObserver;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXFByb2Nlc3NcXEdhbWVPYnNlcnZlclxcQXV0b1N0YXRlQ2hhbmdlT2JzZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7R0FLRztBQUNIO0lBTUksaUNBQVksT0FBaUcsRUFBRSxJQUFJO1FBQy9HLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQzNCLENBQUM7SUFFRCxrREFBZ0IsR0FBaEIsVUFBaUIsZ0JBQXlCLEVBQUUsZUFBeUIsRUFBRSxjQUF3QjtRQUMzRixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxjQUFjLENBQUMsQ0FBQztJQUNwRixDQUFDO0lBRUQsc0JBQUksZ0RBQVc7YUFBZjtZQUNJLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztRQUM3QixDQUFDO2FBRUQsVUFBZ0IsS0FBYztZQUMxQixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUM5QixDQUFDOzs7T0FKQTtJQUtMLDhCQUFDO0FBQUQsQ0F2QkEsQUF1QkMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXV0b1R5cGV9IGZyb20gXCIuLi8uLi9Db25maWcvRW51bS9Db25maWdFbnVtXCI7XHJcblxyXG4vKipcclxuICogQEF1dGhvciBYSUFPLUxJLVBJTlxyXG4gKiBARGVzY3JpcHRpb24g6Ieq5YuV54uA5oWL5pS56K6K5pmCLOeVtuacieS6i+S7tuaOqOmAgeaZgizlsIfmnIPlsIfoqbLkuovku7bmjqjmkq3ntabntoHlrprogIVcclxuICogQERhdGUgMjAyMS0wNS0yMCDkuIvljYggMDU6MDhcclxuICogQFZlcnNpb24gMS4wXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRvU3RhdGVDaGFuZ2VPYnNlcnZlciBpbXBsZW1lbnRzIElPYnNlcnZlciB7XHJcblxyXG4gICAgcHJpdmF0ZSBfaXNQZXJtYW5lbnQ6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNlbGY6IGFueTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgY2FsbEZ1bjogKGlzQXV0b21hdGljU3RhdGU6IGJvb2xlYW4sIGJlZm9yZUF1dG9Db3VudDogQXV0b1R5cGUsIGFmdGVyQXV0b0NvdW50OiBBdXRvVHlwZSkgPT4gdm9pZDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjYWxsRnVuOiAoaXNBdXRvbWF0aWNTdGF0ZTogYm9vbGVhbiwgYmVmb3JlQXV0b0NvdW50OiBBdXRvVHlwZSwgYWZ0ZXJBdXRvQ291bnQ6IEF1dG9UeXBlKSA9PiB2b2lkLCBzZWxmKSB7XHJcbiAgICAgICAgdGhpcy5faXNQZXJtYW5lbnQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNlbGYgPSBzZWxmO1xyXG4gICAgICAgIHRoaXMuY2FsbEZ1biA9IGNhbGxGdW47XHJcbiAgICB9XHJcblxyXG4gICAgcHVzaE5vdGlmaWNhdGlvbihpc0F1dG9tYXRpY1N0YXRlOiBib29sZWFuLCBiZWZvcmVBdXRvQ291bnQ6IEF1dG9UeXBlLCBhZnRlckF1dG9Db3VudDogQXV0b1R5cGUpIHtcclxuICAgICAgICB0aGlzLmNhbGxGdW4uY2FsbCh0aGlzLnNlbGYsIGlzQXV0b21hdGljU3RhdGUsIGJlZm9yZUF1dG9Db3VudCwgYWZ0ZXJBdXRvQ291bnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpc1Blcm1hbmVudCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXNQZXJtYW5lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGlzUGVybWFuZW50KHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5faXNQZXJtYW5lbnQgPSB2YWx1ZTtcclxuICAgIH1cclxufSJdfQ==