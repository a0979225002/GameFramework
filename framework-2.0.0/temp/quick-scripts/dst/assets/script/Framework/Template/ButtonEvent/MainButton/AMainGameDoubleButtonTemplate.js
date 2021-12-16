
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Template/ButtonEvent/MainButton/AMainGameDoubleButtonTemplate.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bf0deH9cwhDdZ7Pe7KVnJ0Y', 'AMainGameDoubleButtonTemplate');
// script/Framework/Template/ButtonEvent/MainButton/AMainGameDoubleButtonTemplate.ts

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
var ButtonMethod_1 = require("../../../GlobalMethod/ButtonMethod");
var AMainGameEvent_1 = require("./AMainGameEvent");
var ccclass = cc._decorator.ccclass;
var AMainGameDoubleButtonTemplate = /** @class */ (function (_super) {
    __extends(AMainGameDoubleButtonTemplate, _super);
    function AMainGameDoubleButtonTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AMainGameDoubleButtonTemplate.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        ButtonMethod_1.default.addButtonEvent(//自動按鈕監聽添加
        this.autoButtonH, "autoButtonEventListener", this);
        ButtonMethod_1.default.addButtonEvent(//自動按鈕監聽添加
        this.autoButtonV, "autoButtonEventListener", this);
        ButtonMethod_1.default.addButtonEvent(//加速按鈕監聽添加
        this.speedUpButtonH, "speedUpButtonEventListener", this);
        ButtonMethod_1.default.addButtonEvent(//加速按鈕監聽添加
        this.speedUpButtonV, "speedUpButtonEventListener", this);
        ButtonMethod_1.default.addButtonEvent(//押注金額選擇按鈕監聽添加
        this.betSelectionButtonH, "totalBetFrameTouchEventListener", this);
        ButtonMethod_1.default.addButtonEvent(//押注金額選擇按鈕監聽添加
        this.betSelectionButtonV, "totalBetFrameTouchEventListener", this);
        ButtonMethod_1.default.addButtonEvent(//押注金額選擇按鈕監聽添加
        this.menuButtonH, "menuButtonEventListener", this);
        ButtonMethod_1.default.addButtonEvent(//押注金額選擇按鈕監聽添加
        this.menuButtonV, "menuButtonEventListener", this);
    };
    AMainGameDoubleButtonTemplate.prototype.startButtonOnEnable = function () {
        this.startButtonH.node.on(cc.Node.EventType.TOUCH_START, this.startButtonOnTouchStart, this);
        this.startButtonV.node.on(cc.Node.EventType.TOUCH_START, this.startButtonOnTouchStart, this);
        this.startButtonH.node.on(cc.Node.EventType.TOUCH_END, this.startButtonOnTouchEnd, this);
        this.startButtonV.node.on(cc.Node.EventType.TOUCH_END, this.startButtonOnTouchEnd, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.keyboardSpaceTouchStart, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.keyboardSpaceTouchEnd, this);
    };
    AMainGameDoubleButtonTemplate.prototype.startButtonDisable = function () {
        this.startButtonH.node.off(cc.Node.EventType.TOUCH_START, this.startButtonOnTouchStart, this);
        this.startButtonV.node.off(cc.Node.EventType.TOUCH_START, this.startButtonOnTouchStart, this);
        this.startButtonH.node.off(cc.Node.EventType.TOUCH_END, this.startButtonOnTouchEnd, this);
        this.startButtonV.node.off(cc.Node.EventType.TOUCH_END, this.startButtonOnTouchEnd, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.keyboardSpaceTouchStart, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.keyboardSpaceTouchEnd, this);
    };
    AMainGameDoubleButtonTemplate = __decorate([
        ccclass
    ], AMainGameDoubleButtonTemplate);
    return AMainGameDoubleButtonTemplate;
}(AMainGameEvent_1.default));
exports.default = AMainGameDoubleButtonTemplate;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXFRlbXBsYXRlXFxCdXR0b25FdmVudFxcTWFpbkJ1dHRvblxcQU1haW5HYW1lRG91YmxlQnV0dG9uVGVtcGxhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUVBQTZEO0FBQzdELG1EQUE4QztBQUV2QyxJQUFBLE9BQU8sR0FBSSxFQUFFLENBQUMsVUFBVSxRQUFqQixDQUFrQjtBQUdoQztJQUFvRSxpREFBYztJQUFsRjs7SUFnRkEsQ0FBQztJQTlEYSw4Q0FBTSxHQUFoQjtRQUNJLGlCQUFNLE1BQU0sV0FBRSxDQUFDO1FBQ2Ysc0JBQVksQ0FBQyxjQUFjLENBQXlCLFVBQVU7UUFDMUQsSUFBSSxDQUFDLFdBQVcsRUFDaEIseUJBQXlCLEVBQ3pCLElBQUksQ0FDUCxDQUFDO1FBQ0Ysc0JBQVksQ0FBQyxjQUFjLENBQXlCLFVBQVU7UUFDMUQsSUFBSSxDQUFDLFdBQVcsRUFDaEIseUJBQXlCLEVBQ3pCLElBQUksQ0FDUCxDQUFDO1FBQ0Ysc0JBQVksQ0FBQyxjQUFjLENBQTBCLFVBQVU7UUFDM0QsSUFBSSxDQUFDLGNBQWMsRUFDbkIsNEJBQTRCLEVBQzVCLElBQUksQ0FDUCxDQUFDO1FBQ0Ysc0JBQVksQ0FBQyxjQUFjLENBQTBCLFVBQVU7UUFDM0QsSUFBSSxDQUFDLGNBQWMsRUFDbkIsNEJBQTRCLEVBQzVCLElBQUksQ0FDUCxDQUFDO1FBQ0Ysc0JBQVksQ0FBQyxjQUFjLENBQTBCLGNBQWM7UUFDL0QsSUFBSSxDQUFDLG1CQUFtQixFQUN4QixpQ0FBaUMsRUFDakMsSUFBSSxDQUNQLENBQUM7UUFDRixzQkFBWSxDQUFDLGNBQWMsQ0FBMEIsY0FBYztRQUMvRCxJQUFJLENBQUMsbUJBQW1CLEVBQ3hCLGlDQUFpQyxFQUNqQyxJQUFJLENBQ1AsQ0FBQztRQUNGLHNCQUFZLENBQUMsY0FBYyxDQUEwQixjQUFjO1FBQy9ELElB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ZXRob2QgZnJvbSAnLi4vLi4vLi4vR2xvYmFsTWV0aG9kL0J1dHRvbk1ldGhvZCdcclxuaW1wb3J0IEFNYWluR2FtZUV2ZW50IGZyb20gXCIuL0FNYWluR2FtZUV2ZW50XCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzc30gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQU1haW5HYW1lRG91YmxlQnV0dG9uVGVtcGxhdGUgZXh0ZW5kcyBBTWFpbkdhbWVFdmVudCB7XHJcblxyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IHN0YXJ0QnV0dG9uSDogY2MuQnV0dG9uOyAgICAgICAgICAvL+mWi+Wni+mBiuaIsuaMiemIlVxyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IHN0YXJ0QnV0dG9uVjogY2MuQnV0dG9uOyAgICAgICAgICAvL+mWi+Wni+mBiuaIsuaMiemIlVxyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGF1dG9CdXR0b25IOiBjYy5CdXR0b247ICAgICAgICAgICAvL+iHquWLleaMiemIlVxyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGF1dG9CdXR0b25WOiBjYy5CdXR0b247ICAgICAgICAgICAvL+iHquWLleaMiemIlVxyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IHNwZWVkVXBCdXR0b25IOiBjYy5CdXR0b247ICAgICAgICAvL+WKoOmAn+aMiemIlVxyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IHNwZWVkVXBCdXR0b25WOiBjYy5CdXR0b247ICAgICAgICAvL+WKoOmAn+aMiemIlVxyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGJldFNlbGVjdGlvbkJ1dHRvbkg6IGNjLkJ1dHRvbjsgICAvL+aKvOazqOmHkemhjemBuOaTh+aMiemIlVxyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGJldFNlbGVjdGlvbkJ1dHRvblY6IGNjLkJ1dHRvbjsgICAvL+aKvOazqOmHkemhjemBuOaTh+aMiemIlVxyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IG1lbnVCdXR0b25IOiBjYy5CdXR0b24gICAgICAgICAgICAvL+ioreWumumggeaMiemIlVxyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IG1lbnVCdXR0b25WOiBjYy5CdXR0b24gICAgICAgICAgICAvL+ioreWumumggeaMiemIlVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6Ieq6KiC576p5Yid5aeL5YuV5L2cXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBvbkNyZWF0ZSgpO1xyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKSB7XHJcbiAgICAgICAgc3VwZXIub25Mb2FkKCk7XHJcbiAgICAgICAgQnV0dG9uTWV0aG9kLmFkZEJ1dHRvbkV2ZW50KCAgICAgICAgICAgICAgICAgICAgICAgIC8v6Ieq5YuV5oyJ6YiV55uj6IG95re75YqgXHJcbiAgICAgICAgICAgIHRoaXMuYXV0b0J1dHRvbkgsXHJcbiAgICAgICAgICAgIFwiYXV0b0J1dHRvbkV2ZW50TGlzdGVuZXJcIixcclxuICAgICAgICAgICAgdGhpc1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgQnV0dG9uTWV0aG9kLmFkZEJ1dHRvbkV2ZW50KCAgICAgICAgICAgICAgICAgICAgICAgIC8v6Ieq5YuV5oyJ6YiV55uj6IG95re75YqgXHJcbiAgICAgICAgICAgIHRoaXMuYXV0b0J1dHRvblYsXHJcbiAgICAgICAgICAgIFwiYXV0b0J1dHRvbkV2ZW50TGlzdGVuZXJcIixcclxuICAgICAgICAgICAgdGhpc1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgQnV0dG9uTWV0aG9kLmFkZEJ1dHRvbkV2ZW50KCAgICAgICAgICAgICAgICAgICAgICAgICAvL+WKoOmAn+aMiemIleebo+iBvea3u+WKoFxyXG4gICAgICAgICAgICB0aGlzLnNwZWVkVXBCdXR0b25ILFxyXG4gICAgICAgICAgICBcInNwZWVkVXBCdXR0b25FdmVudExpc3RlbmVyXCIsXHJcbiAgICAgICAgICAgIHRoaXNcclxuICAgICAgICApO1xyXG4gICAgICAgIEJ1dHRvbk1ldGhvZC5hZGRCdXR0b25FdmVudCggICAgICAgICAgICAgICAgICAgICAgICAgLy/liqDpgJ/mjInpiJXnm6Pogb3mt7vliqBcclxuICAgICAgICAgICAgdGhpcy5zcGVlZFVwQnV0dG9uVixcclxuICAgICAgICAgICAgXCJzcGVlZFVwQnV0dG9uRXZlbnRMaXN0ZW5lclwiLFxyXG4gICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgKTtcclxuICAgICAgICBCdXR0b25NZXRob2QuYWRkQnV0dG9uRXZlbnQoICAgICAgICAgICAgICAgICAgICAgICAgIC8v5oq85rOo6YeR6aGN6YG45pOH5oyJ6YiV55uj6IG95re75YqgXHJcbiAgICAgICAgICAgIHRoaXMuYmV0U2VsZWN0aW9uQnV0dG9uSCxcclxuICAgICAgICAgICAgXCJ0b3RhbEJldEZyYW1lVG91Y2hFdmVudExpc3RlbmVyXCIsXHJcbiAgICAgICAgICAgIHRoaXNcclxuICAgICAgICApO1xyXG4gICAgICAgIEJ1dHRvbk1ldGhvZC5hZGRCdXR0b25FdmVudCggICAgICAgICAgICAgICAgICAgICAgICAgLy/mirzms6jph5HpoY3pgbjmk4fmjInpiJXnm6Pogb3mt7vliqBcclxuICAgICAgICAgICAgdGhpcy5iZXRTZWxlY3Rpb25CdXR0b25WLFxyXG4gICAgICAgICAgICBcInRvdGFsQmV0RnJhbWVUb3VjaEV2ZW50TGlzdGVuZXJcIixcclxuICAgICAgICAgICAgdGhpc1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgQnV0dG9uTWV0aG9kLmFkZEJ1dHRvbkV2ZW50KCAgICAgICAgICAgICAgICAgICAgICAgICAvL+aKvOazqOmHkemhjemBuOaTh+aMiemIleebo+iBvea3u+WKoFxyXG4gICAgICAgICAgICB0aGlzLm1lbnVCdXR0b25ILFxyXG4gICAgICAgICAgICBcIm1lbnVCdXR0b25FdmVudExpc3RlbmVyXCIsXHJcbiAgICAgICAgICAgIHRoaXNcclxuICAgICAgICApO1xyXG4gICAgICAgIEJ1dHRvbk1ldGhvZC5hZGRCdXR0b25FdmVudCggICAgICAgICAgICAgICAgICAgICAgICAgLy/mirzms6jph5HpoY3pgbjmk4fmjInpiJXnm6Pogb3mt7vliqBcclxuICAgICAgICAgICAgdGhpcy5tZW51QnV0dG9uVixcclxuICAgICAgICAgICAgXCJtZW51QnV0dG9uRXZlbnRMaXN0ZW5lclwiLFxyXG4gICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhcnRCdXR0b25PbkVuYWJsZSgpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0QnV0dG9uSC5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnN0YXJ0QnV0dG9uT25Ub3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgICAgICB0aGlzLnN0YXJ0QnV0dG9uVi5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnN0YXJ0QnV0dG9uT25Ub3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgICAgICB0aGlzLnN0YXJ0QnV0dG9uSC5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5zdGFydEJ1dHRvbk9uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc3RhcnRCdXR0b25WLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnN0YXJ0QnV0dG9uT25Ub3VjaEVuZCwgdGhpcyk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLmtleWJvYXJkU3BhY2VUb3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCB0aGlzLmtleWJvYXJkU3BhY2VUb3VjaEVuZCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXJ0QnV0dG9uRGlzYWJsZSgpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0QnV0dG9uSC5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5zdGFydEJ1dHRvbk9uVG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5zdGFydEJ1dHRvblYubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuc3RhcnRCdXR0b25PblRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc3RhcnRCdXR0b25ILm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5zdGFydEJ1dHRvbk9uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc3RhcnRCdXR0b25WLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5zdGFydEJ1dHRvbk9uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMua2V5Ym9hcmRTcGFjZVRvdWNoU3RhcnQsIHRoaXMpXHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMua2V5Ym9hcmRTcGFjZVRvdWNoRW5kLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbn0iXX0=