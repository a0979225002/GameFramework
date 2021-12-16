
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Template/ButtonEvent/MainButton/AMainGameButtonTemplate.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c6061KO3chMEoq4oQiV0Qxd', 'AMainGameButtonTemplate');
// script/Framework/Template/ButtonEvent/MainButton/AMainGameButtonTemplate.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var ButtonMethod_1 = require("../../../GlobalMethod/ButtonMethod");
var AMainGameEvent_1 = require("./AMainGameEvent");
var AMainGameButtonTemplate = /** @class */ (function (_super) {
    __extends(AMainGameButtonTemplate, _super);
    function AMainGameButtonTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AMainGameButtonTemplate.prototype.onLoad = function () {
        ButtonMethod_1.default.addButtonEvent(//開始按鈕監聽添加
        this.startButton, "startButtonEventListener", this);
        ButtonMethod_1.default.addButtonEvent(//自動按鈕監聽添加
        this.autoButton, "autoButtonEventListener", this);
        ButtonMethod_1.default.addButtonEvent(//加速按鈕監聽添加
        this.speedUpButton, "speedUpButtonEventListener", this);
        ButtonMethod_1.default.addButtonEvent(//押注金額選擇按鈕監聽添加
        this.betSelectionButton, "betSelectionButtonEventListener", this);
        ButtonMethod_1.default.addButtonEvent(//押注金額選擇按鈕監聽添加
        this.menuButton, "menuButtonEventListener", this);
    };
    AMainGameButtonTemplate.prototype.startButtonOnEnable = function () {
        this.startButton.node.on(cc.Node.EventType.TOUCH_START, this.startButtonOnTouchStart, this);
        this.startButton.node.on(cc.Node.EventType.TOUCH_END, this.startButtonOnTouchEnd, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.keyboardSpaceTouchStart, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.keyboardSpaceTouchEnd, this);
    };
    AMainGameButtonTemplate.prototype.startButtonDisable = function () {
        this.startButton.node.off(cc.Node.EventType.TOUCH_START, this.startButtonOnTouchStart, this);
        this.startButton.node.off(cc.Node.EventType.TOUCH_END, this.startButtonOnTouchEnd, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.keyboardSpaceTouchStart, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.keyboardSpaceTouchEnd, this);
    };
    return AMainGameButtonTemplate;
}(AMainGameEvent_1.default));
exports.default = AMainGameButtonTemplate;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXFRlbXBsYXRlXFxCdXR0b25FdmVudFxcTWFpbkJ1dHRvblxcQU1haW5HYW1lQnV0dG9uVGVtcGxhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUVBQTZEO0FBQzdELG1EQUE4QztBQUU5QztJQUE4RCwyQ0FBYztJQUE1RTs7SUFrREEsQ0FBQztJQTFDYSx3Q0FBTSxHQUFoQjtRQUVJLHNCQUFZLENBQUMsY0FBYyxDQUF5QixVQUFVO1FBQzFELElBQUksQ0FBQyxXQUFXLEVBQ2hCLDBCQUEwQixFQUMxQixJQUFJLENBQ1AsQ0FBQztRQUNGLHNCQUFZLENBQUMsY0FBYyxDQUF5QixVQUFVO1FBQzFELElBQUksQ0FBQyxVQUFVLEVBQ2YseUJBQXlCLEVBQ3pCLElBQUksQ0FDUCxDQUFDO1FBQ0Ysc0JBQVksQ0FBQyxjQUFjLENBQTBCLFVBQVU7UUFDM0QsSUFBSSxDQUFDLGFBQWEsRUFDbEIsNEJBQTRCLEVBQzVCLElBQUksQ0FDUCxDQUFDO1FBQ0Ysc0JBQVksQ0FBQyxjQUFjLENBQTBCLGNBQWM7UUFDL0QsSUFBSSxDQUFDLGtCQUFrQixFQUN2QixpQ0FBaUMsRUFDakMsSUFBSSxDQUNQLENBQUM7UUFDRixzQkFBWSxDQUFDLGNBQWMsQ0FBMEIsY0FBYztRQUMvRCxJQUFJLENBQUMsVUFBVSxFQUNmLHlCQUF5QixFQUN6QixJQUFJLENBQ1AsQ0FBQTtJQUNMLENBQUM7SUFFTSxxREFBbUIsR0FBMUI7UUFDSSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1RixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN4RixFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLHVCQUF1QixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pGLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDekYsQ0FBQztJQUVNLG9EQUFrQixHQUF6QjtRQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLHVCQUF1QixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzdGLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pGLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDekYsRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMxRixDQUFDO0lBQ0wsOEJBQUM7QUFBRCxDQWxEQSxBQWtEQyxDQWxENkQsd0JBQWMsR0FrRDNFIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJ1dHRvbk1ldGhvZCBmcm9tICcuLi8uLi8uLi9HbG9iYWxNZXRob2QvQnV0dG9uTWV0aG9kJ1xyXG5pbXBvcnQgQU1haW5HYW1lRXZlbnQgZnJvbSBcIi4vQU1haW5HYW1lRXZlbnRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEFNYWluR2FtZUJ1dHRvblRlbXBsYXRlIGV4dGVuZHMgQU1haW5HYW1lRXZlbnQge1xyXG5cclxuICAgIGFic3RyYWN0IHN0YXJ0QnV0dG9uOiBjYy5CdXR0b247ICAgICAgICAgICAgICAgIC8v6ZaL5aeL6YGK5oiy5oyJ6YiVXHJcbiAgICBhYnN0cmFjdCBhdXRvQnV0dG9uOiBjYy5CdXR0b247ICAgICAgICAgICAgICAgICAvL+iHquWLleaMiemIlVxyXG4gICAgYWJzdHJhY3Qgc3BlZWRVcEJ1dHRvbjogY2MuQnV0dG9uOyAgICAgICAgICAgICAgLy/liqDpgJ/mjInpiJVcclxuICAgIGFic3RyYWN0IGJldFNlbGVjdGlvbkJ1dHRvbjogY2MuQnV0dG9uOyAgICAgICAgIC8v5oq85rOo6YeR6aGN6YG45pOH5oyJ6YiVXHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgbWVudUJ1dHRvbjogY2MuQnV0dG9uICAgICAgICAvL+ioreWumumggeaMiemIlVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKSB7XHJcblxyXG4gICAgICAgIEJ1dHRvbk1ldGhvZC5hZGRCdXR0b25FdmVudCggICAgICAgICAgICAgICAgICAgICAgICAvL+mWi+Wni+aMiemIleebo+iBvea3u+WKoFxyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0QnV0dG9uLFxyXG4gICAgICAgICAgICBcInN0YXJ0QnV0dG9uRXZlbnRMaXN0ZW5lclwiLFxyXG4gICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgKTtcclxuICAgICAgICBCdXR0b25NZXRob2QuYWRkQnV0dG9uRXZlbnQoICAgICAgICAgICAgICAgICAgICAgICAgLy/oh6rli5XmjInpiJXnm6Pogb3mt7vliqBcclxuICAgICAgICAgICAgdGhpcy5hdXRvQnV0dG9uLFxyXG4gICAgICAgICAgICBcImF1dG9CdXR0b25FdmVudExpc3RlbmVyXCIsXHJcbiAgICAgICAgICAgIHRoaXNcclxuICAgICAgICApO1xyXG4gICAgICAgIEJ1dHRvbk1ldGhvZC5hZGRCdXR0b25FdmVudCggICAgICAgICAgICAgICAgICAgICAgICAgLy/liqDpgJ/mjInpiJXnm6Pogb3mt7vliqBcclxuICAgICAgICAgICAgdGhpcy5zcGVlZFVwQnV0dG9uLFxyXG4gICAgICAgICAgICBcInNwZWVkVXBCdXR0b25FdmVudExpc3RlbmVyXCIsXHJcbiAgICAgICAgICAgIHRoaXNcclxuICAgICAgICApO1xyXG4gICAgICAgIEJ1dHRvbk1ldGhvZC5hZGRCdXR0b25FdmVudCggICAgICAgICAgICAgICAgICAgICAgICAgLy/mirzms6jph5HpoY3pgbjmk4fmjInpiJXnm6Pogb3mt7vliqBcclxuICAgICAgICAgICAgdGhpcy5iZXRTZWxlY3Rpb25CdXR0b24sXHJcbiAgICAgICAgICAgIFwiYmV0U2VsZWN0aW9uQnV0dG9uRXZlbnRMaXN0ZW5lclwiLFxyXG4gICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgKTtcclxuICAgICAgICBCdXR0b25NZXRob2QuYWRkQnV0dG9uRXZlbnQoICAgICAgICAgICAgICAgICAgICAgICAgIC8v5oq85rOo6YeR6aGN6YG45pOH5oyJ6YiV55uj6IG95re75YqgXHJcbiAgICAgICAgICAgIHRoaXMubWVudUJ1dHRvbixcclxuICAgICAgICAgICAgXCJtZW51QnV0dG9uRXZlbnRMaXN0ZW5lclwiLFxyXG4gICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGFydEJ1dHRvbk9uRW5hYmxlKCkge1xyXG4gICAgICAgIHRoaXMuc3RhcnRCdXR0b24ubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5zdGFydEJ1dHRvbk9uVG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5zdGFydEJ1dHRvbi5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5zdGFydEJ1dHRvbk9uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5rZXlib2FyZFNwYWNlVG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgdGhpcy5rZXlib2FyZFNwYWNlVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGFydEJ1dHRvbkRpc2FibGUoKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydEJ1dHRvbi5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5zdGFydEJ1dHRvbk9uVG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5zdGFydEJ1dHRvbi5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMuc3RhcnRCdXR0b25PblRvdWNoRW5kLCB0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLmtleWJvYXJkU3BhY2VUb3VjaFN0YXJ0LCB0aGlzKVxyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCB0aGlzLmtleWJvYXJkU3BhY2VUb3VjaEVuZCwgdGhpcyk7XHJcbiAgICB9XHJcbn0iXX0=