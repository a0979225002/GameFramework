
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Slot/SlotObserver/ScrollFocusStateObserver.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b872ekRjlRKP4caFumdEAm0', 'ScrollFocusStateObserver');
// script/Framework/Slot/SlotObserver/ScrollFocusStateObserver.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @Author XIAO-LI-PIN
 * @Description 當出現需要瞇排事件,當有事件推送時,將會將該事件推播給綁定者
 * @Date 2021-05-21 下午 12:08
 * @Version 1.0
 */
var ScrollFocusStateObserver = /** @class */ (function () {
    function ScrollFocusStateObserver(callFun, self) {
        this._isPermanent = false;
        this.self = self;
        this.callFun = callFun;
    }
    ScrollFocusStateObserver.prototype.pushNotification = function (index, isShow) {
        this.callFun.call(this.self, index, isShow);
    };
    Object.defineProperty(ScrollFocusStateObserver.prototype, "isPermanent", {
        get: function () {
            return this._isPermanent;
        },
        set: function (value) {
            this._isPermanent = value;
        },
        enumerable: false,
        configurable: true
    });
    return ScrollFocusStateObserver;
}());
exports.default = ScrollFocusStateObserver;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXFNsb3RcXFNsb3RPYnNlcnZlclxcU2Nyb2xsRm9jdXNTdGF0ZU9ic2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0dBS0c7QUFDSDtJQUtJLGtDQUFZLE9BQWlELEVBQUUsSUFBSTtRQUMvRCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUMzQixDQUFDO0lBRUQsbURBQWdCLEdBQWhCLFVBQWlCLEtBQWEsRUFBRSxNQUFlO1FBQzNDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCxzQkFBSSxpREFBVzthQUFmO1lBQ0ksT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzdCLENBQUM7YUFFRCxVQUFnQixLQUFjO1lBQzFCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzlCLENBQUM7OztPQUpBO0lBS0wsK0JBQUM7QUFBRCxDQXRCQSxBQXNCQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBBdXRob3IgWElBTy1MSS1QSU5cclxuICogQERlc2NyaXB0aW9uIOeVtuWHuuePvumcgOimgeeeh+aOkuS6i+S7tiznlbbmnInkuovku7bmjqjpgIHmmYIs5bCH5pyD5bCH6Kmy5LqL5Lu25o6o5pKt57Wm57aB5a6a6ICFXHJcbiAqIEBEYXRlIDIwMjEtMDUtMjEg5LiL5Y2IIDEyOjA4XHJcbiAqIEBWZXJzaW9uIDEuMFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Nyb2xsRm9jdXNTdGF0ZU9ic2VydmVyIGltcGxlbWVudHMgSU9ic2VydmVyIHtcclxuICAgIHByaXZhdGUgX2lzUGVybWFuZW50OiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBzZWxmOiBhbnk7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNhbGxGdW46IChpbmRleDogbnVtYmVyLCBpc1Nob3c6IGJvb2xlYW4pID0+IHZvaWQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY2FsbEZ1bjogKGluZGV4OiBudW1iZXIsIGlzU2hvdzogYm9vbGVhbikgPT4gdm9pZCwgc2VsZikge1xyXG4gICAgICAgIHRoaXMuX2lzUGVybWFuZW50ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zZWxmID0gc2VsZjtcclxuICAgICAgICB0aGlzLmNhbGxGdW4gPSBjYWxsRnVuO1xyXG4gICAgfVxyXG5cclxuICAgIHB1c2hOb3RpZmljYXRpb24oaW5kZXg6IG51bWJlciwgaXNTaG93OiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5jYWxsRnVuLmNhbGwodGhpcy5zZWxmLCBpbmRleCwgaXNTaG93KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaXNQZXJtYW5lbnQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzUGVybWFuZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBpc1Blcm1hbmVudCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX2lzUGVybWFuZW50ID0gdmFsdWU7XHJcbiAgICB9XHJcbn0iXX0=