
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Template/LookAtFrame/ALookAtTemplate.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '343a4nBKDtC+Lj7wvNk9n5w', 'ALookAtTemplate');
// script/Framework/Template/LookAtFrame/ALookAtTemplate.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ScrollFocusStateNotification_1 = require("../../Slot/SlotNotifivation/ScrollFocusStateNotification");
var ScrollFocusStateObserver_1 = require("../../Slot/SlotObserver/ScrollFocusStateObserver");
var OverrideComponent_1 = require("../OverrideComponent");
var ccclass = cc._decorator.ccclass;
/**
 * @Author XIAO-LI-PIN
 * @Description (抽象類)瞇排模板
 * @Date 2021-05-26 下午 17:24
 * @Version 1.1
 */
var ALookAtTemplate = /** @class */ (function (_super) {
    __extends(ALookAtTemplate, _super);
    function ALookAtTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ALookAtTemplate.prototype.onLoad = function () {
        this.onCreate();
        ScrollFocusStateNotification_1.default.instance
            .subscribe(this.getScrollFocusStateObserver(), true);
    };
    /**
     * 瞇排事件訂閱者
     * @private
     */
    ALookAtTemplate.prototype.getScrollFocusStateObserver = function () {
        var _this = this;
        this._scrollFocusStateObserver = new ScrollFocusStateObserver_1.default(function (index, isShow) {
            if (isShow) {
                if (_this.allLookAtEffect[index].node.active)
                    return;
                _this.showLookAtEffect(index);
            }
            else {
                if (!_this.allLookAtEffect[index].node.active)
                    return;
                _this.removeLookAtEffect(index);
            }
        }, this);
        return this._scrollFocusStateObserver;
    };
    ALookAtTemplate = __decorate([
        ccclass
    ], ALookAtTemplate);
    return ALookAtTemplate;
}(OverrideComponent_1.default));
exports.default = ALookAtTemplate;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXFRlbXBsYXRlXFxMb29rQXRGcmFtZVxcQUxvb2tBdFRlbXBsYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlHQUFvRztBQUNwRyw2RkFBd0Y7QUFDeEYsMERBQXFEO0FBRTlDLElBQUEsT0FBTyxHQUFJLEVBQUUsQ0FBQyxVQUFVLFFBQWpCLENBQWtCO0FBRWhDOzs7OztHQUtHO0FBRUg7SUFBc0QsbUNBQWlCO0lBQXZFOztJQStDQSxDQUFDO0lBdEJhLGdDQUFNLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hCLHNDQUE0QixDQUFDLFFBQVE7YUFDaEMsU0FBUyxDQUFDLElBQUksQ0FBQywyQkFBMkIsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRDs7O09BR0c7SUFDSyxxREFBMkIsR0FBbkM7UUFBQSxpQkFXQztRQVZHLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxJQUFJLGtDQUF3QixDQUFDLFVBQUMsS0FBSyxFQUFFLE1BQU07WUFDeEUsSUFBSSxNQUFNLEVBQUU7Z0JBQ1IsSUFBSSxLQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNO29CQUFFLE9BQU87Z0JBQ3BELEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNoQztpQkFBTTtnQkFDSCxJQUFJLENBQUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTTtvQkFBRSxPQUFPO2dCQUNyRCxLQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDbEM7UUFDTCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDVCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQztJQUMxQyxDQUFDO0lBOUN5QixlQUFlO1FBRDVDLE9BQU87T0FDc0IsZUFBZSxDQStDNUM7SUFBRCxzQkFBQztDQS9DRCxBQStDQyxDQS9DcUQsMkJBQWlCLEdBK0N0RTtrQkEvQzZCLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2Nyb2xsRm9jdXNTdGF0ZU5vdGlmaWNhdGlvbiBmcm9tIFwiLi4vLi4vU2xvdC9TbG90Tm90aWZpdmF0aW9uL1Njcm9sbEZvY3VzU3RhdGVOb3RpZmljYXRpb25cIjtcclxuaW1wb3J0IFNjcm9sbEZvY3VzU3RhdGVPYnNlcnZlciBmcm9tIFwiLi4vLi4vU2xvdC9TbG90T2JzZXJ2ZXIvU2Nyb2xsRm9jdXNTdGF0ZU9ic2VydmVyXCI7XHJcbmltcG9ydCBPdmVycmlkZUNvbXBvbmVudCBmcm9tIFwiLi4vT3ZlcnJpZGVDb21wb25lbnRcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG4vKipcclxuICogQEF1dGhvciBYSUFPLUxJLVBJTlxyXG4gKiBARGVzY3JpcHRpb24gKOaKveixoemhninnnofmjpLmqKHmnb9cclxuICogQERhdGUgMjAyMS0wNS0yNiDkuIvljYggMTc6MjRcclxuICogQFZlcnNpb24gMS4xXHJcbiAqL1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBBTG9va0F0VGVtcGxhdGUgZXh0ZW5kcyBPdmVycmlkZUNvbXBvbmVudCB7XHJcblxyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGFsbExvb2tBdEVmZmVjdDogQXJyYXk8Y2MuQW5pbWF0aW9uPjtcclxuICAgIHByaXZhdGUgX3Njcm9sbEZvY3VzU3RhdGVPYnNlcnZlcjogU2Nyb2xsRm9jdXNTdGF0ZU9ic2VydmVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6Ieq5oeJ576p5Yid5aeL5YyWXHJcbiAgICAgKiBAcHJvdGVjdGVkXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBvbkNyZWF0ZSgpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6aGv56S6556H5o6S54m55pWIXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXg656ys5bm+5YiXXHJcbiAgICAgKiBAcHJvdGVjdGVkXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBzaG93TG9va0F0RWZmZWN0KGluZGV4OiBudW1iZXIpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6Zec6ZaJ556H5o6S54m55pWIXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggOiDnrKzlub7liJdcclxuICAgICAqIEBwcm90ZWN0ZWRcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IHJlbW92ZUxvb2tBdEVmZmVjdChpbmRleDogbnVtYmVyKTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMub25DcmVhdGUoKTtcclxuICAgICAgICBTY3JvbGxGb2N1c1N0YXRlTm90aWZpY2F0aW9uLmluc3RhbmNlXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUodGhpcy5nZXRTY3JvbGxGb2N1c1N0YXRlT2JzZXJ2ZXIoKSwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnnofmjpLkuovku7boqILplrHogIVcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZ2V0U2Nyb2xsRm9jdXNTdGF0ZU9ic2VydmVyKCk6IFNjcm9sbEZvY3VzU3RhdGVPYnNlcnZlciB7XHJcbiAgICAgICAgdGhpcy5fc2Nyb2xsRm9jdXNTdGF0ZU9ic2VydmVyID0gbmV3IFNjcm9sbEZvY3VzU3RhdGVPYnNlcnZlcigoaW5kZXgsIGlzU2hvdykgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXNTaG93KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hbGxMb29rQXRFZmZlY3RbaW5kZXhdLm5vZGUuYWN0aXZlKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dMb29rQXRFZmZlY3QoaW5kZXgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmFsbExvb2tBdEVmZmVjdFtpbmRleF0ubm9kZS5hY3RpdmUpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlTG9va0F0RWZmZWN0KGluZGV4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zY3JvbGxGb2N1c1N0YXRlT2JzZXJ2ZXI7XHJcbiAgICB9XHJcbn0iXX0=