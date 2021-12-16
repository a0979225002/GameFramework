
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Template/ButtonEvent/RecordButton/ARecordDoubleButtonTemplate.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd4d67l/jLRNX4n3Js9Tmjmq', 'ARecordDoubleButtonTemplate');
// script/Framework/Template/ButtonEvent/RecordButton/ARecordDoubleButtonTemplate.ts

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
var SceneStyle_1 = require("../../../Scene/Enum/SceneStyle");
var ARecordButtonEvent_1 = require("./ARecordButtonEvent");
var ARecordDoubleButtonTemplate = /** @class */ (function (_super) {
    __extends(ARecordDoubleButtonTemplate, _super);
    function ARecordDoubleButtonTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ARecordDoubleButtonTemplate.prototype.onLoad = function () {
        //反回上一頁按鈕事件綁定
        ButtonMethod_1.default
            .addButtonEvent(this.goBackButtonH, "goBackTouchEvent", this, SceneStyle_1.SceneDirectionType.LANDSCAPE);
        ButtonMethod_1.default
            .addButtonEvent(this.goBackButtonV, "goBackTouchEvent", this, SceneStyle_1.SceneDirectionType.PORTRAIT);
        ButtonMethod_1.default
            .addButtonEvent(this.oneDayRecordButtonH, "daysRecordTouchEvent", this, ARecordButtonEvent_1.DayType.ONE_DAY);
        ButtonMethod_1.default
            .addButtonEvent(this.oneDayRecordButtonV, "daysRecordTouchEvent", this, ARecordButtonEvent_1.DayType.ONE_DAY);
        //獲取一日內紀錄按鈕事件綁定
        ButtonMethod_1.default
            .addButtonEvent(this.oneDayRecordButtonH, "daysRecordTouchEventH", this, ARecordButtonEvent_1.DayType.ONE_DAY);
        ButtonMethod_1.default
            .addButtonEvent(this.oneDayRecordButtonV, "daysRecordTouchEventV", this, ARecordButtonEvent_1.DayType.ONE_DAY);
        //獲取五日內紀錄按鈕事件綁定
        ButtonMethod_1.default
            .addButtonEvent(this.fiveDayRecordButtonH, "daysRecordTouchEventH", this, ARecordButtonEvent_1.DayType.FIVE_DAY);
        ButtonMethod_1.default
            .addButtonEvent(this.fiveDayRecordButtonV, "daysRecordTouchEventV", this, ARecordButtonEvent_1.DayType.FIVE_DAY);
        //獲取十日內紀錄按鈕事件綁定
        ButtonMethod_1.default
            .addButtonEvent(this.tenDayRecordButtonH, "daysRecordTouchEventH", this, ARecordButtonEvent_1.DayType.TEN_DAY);
        ButtonMethod_1.default
            .addButtonEvent(this.tenDayRecordButtonV, "daysRecordTouchEventV", this, ARecordButtonEvent_1.DayType.TEN_DAY);
        //前往下一頁紀錄按鈕事件綁定
        ButtonMethod_1.default
            .addButtonEvent(this.nextRecordButtonH, "nextAndLastButtonTouchEvent", this, ARecordButtonEvent_1.PageChange.NEXT);
        ButtonMethod_1.default
            .addButtonEvent(this.nextRecordButtonV, "nextAndLastButtonTouchEvent", this, ARecordButtonEvent_1.PageChange.NEXT);
        //前往下一頁紀錄按鈕事件綁定
        ButtonMethod_1.default
            .addButtonEvent(this.previousRecordButtonH, "nextAndLastButtonTouchEvent", this, ARecordButtonEvent_1.PageChange.PREVIOUS);
        ButtonMethod_1.default
            .addButtonEvent(this.previousRecordButtonV, "nextAndLastButtonTouchEvent", this, ARecordButtonEvent_1.PageChange.PREVIOUS);
        this.isResultOK = false;
        this.gameHistoryResultEventListener();
        this.onCreate();
    };
    return ARecordDoubleButtonTemplate;
}(ARecordButtonEvent_1.default));
exports.default = ARecordDoubleButtonTemplate;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXFRlbXBsYXRlXFxCdXR0b25FdmVudFxcUmVjb3JkQnV0dG9uXFxBUmVjb3JkRG91YmxlQnV0dG9uVGVtcGxhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUVBQThEO0FBQzlELDZEQUFrRTtBQUNsRSwyREFBNkU7QUFFN0U7SUFBa0UsK0NBQWtCO0lBQXBGOztJQTJFQSxDQUFDO0lBNURhLDRDQUFNLEdBQWhCO1FBRUksYUFBYTtRQUNiLHNCQUFZO2FBQ1AsY0FBYyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLCtCQUFrQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2hHLHNCQUFZO2FBQ1AsY0FBYyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLCtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRS9GLHNCQUFZO2FBQ1AsY0FBYyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxzQkFBc0IsRUFBRSxJQUFJLEVBQUUsNEJBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3RixzQkFBWTthQUNQLGNBQWMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsc0JBQXNCLEVBQUUsSUFBSSxFQUFFLDRCQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFN0YsZUFBZTtRQUNmLHNCQUFZO2FBQ1AsY0FBYyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSx1QkFBdUIsRUFBRSxJQUFJLEVBQUUsNEJBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5RixzQkFBWTthQUNQLGNBQWMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsdUJBQXVCLEVBQUUsSUFBSSxFQUFFLDRCQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFOUYsZUFBZTtRQUNmLHNCQUFZO2FBQ1AsY0FBYyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSx1QkFBdUIsRUFBRSxJQUFJLEVBQUUsNEJBQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoRyxzQkFBWTthQUNQLGNBQWMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsdUJBQXVCLEVBQUUsSUFBSSxFQUFFLDRCQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFaEcsZUFBZTtRQUNmLHNCQUFZO2FBQ1AsY0FBYyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSx1QkFBdUIsRUFBRSxJQUFJLEVBQUUsNEJBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5RixzQkFBWTthQUNQLGNBQWMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsdUJBQXVCLEVBQUUsSUFBSSxFQUFFLDRCQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFOUYsZUFBZTtRQUNmLHNCQUFZO2FBQ1AsY0FBYyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSw2QkFBNkIsRUFBRSxJQUFJLEVBQUUsK0JBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRyxzQkFBWTthQUNQLGNBQWMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsNkJBQTZCLEVBQUUsSUFBSSxFQUFFLCtCQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFbEcsZUFBZTtRQUNmLHNCQUFZO2FBQ1AsY0FBYyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSw2QkFBNkIsRUFBRSxJQUFJLEVBQUUsK0JBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMxRyxzQkFBWTthQUNQLGNBQWMsQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsNkJBQTZCLEVBQUUsSUFBSSxFQUFFLCtCQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFMUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLDhCQUE4QixFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFjTCxrQ0FBQztBQUFELENBM0VBLEFBMkVDLENBM0VpRSw0QkFBa0IsR0EyRW5GIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJ1dHRvbk1ldGhvZCBmcm9tIFwiLi4vLi4vLi4vR2xvYmFsTWV0aG9kL0J1dHRvbk1ldGhvZFwiO1xyXG5pbXBvcnQge1NjZW5lRGlyZWN0aW9uVHlwZX0gZnJvbSBcIi4uLy4uLy4uL1NjZW5lL0VudW0vU2NlbmVTdHlsZVwiO1xyXG5pbXBvcnQgQVJlY29yZEJ1dHRvbkV2ZW50LCB7RGF5VHlwZSwgUGFnZUNoYW5nZX0gZnJvbSBcIi4vQVJlY29yZEJ1dHRvbkV2ZW50XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBBUmVjb3JkRG91YmxlQnV0dG9uVGVtcGxhdGUgZXh0ZW5kcyBBUmVjb3JkQnV0dG9uRXZlbnQge1xyXG5cclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBnb0JhY2tCdXR0b25IOiBjYy5CdXR0b247XHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgZ29CYWNrQnV0dG9uVjogY2MuQnV0dG9uO1xyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IG9uZURheVJlY29yZEJ1dHRvbkg6IGNjLkJ1dHRvbjtcclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBvbmVEYXlSZWNvcmRCdXR0b25WOiBjYy5CdXR0b247XHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgZml2ZURheVJlY29yZEJ1dHRvbkg6IGNjLkJ1dHRvbjtcclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBmaXZlRGF5UmVjb3JkQnV0dG9uVjogY2MuQnV0dG9uO1xyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IHRlbkRheVJlY29yZEJ1dHRvbkg6IGNjLkJ1dHRvbjtcclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCB0ZW5EYXlSZWNvcmRCdXR0b25WOiBjYy5CdXR0b247XHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgbmV4dFJlY29yZEJ1dHRvbkg6IGNjLkJ1dHRvbjtcclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBuZXh0UmVjb3JkQnV0dG9uVjogY2MuQnV0dG9uO1xyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IHByZXZpb3VzUmVjb3JkQnV0dG9uSDogY2MuQnV0dG9uO1xyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IHByZXZpb3VzUmVjb3JkQnV0dG9uVjogY2MuQnV0dG9uO1xyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKSB7XHJcblxyXG4gICAgICAgIC8v5Y+N5Zue5LiK5LiA6aCB5oyJ6YiV5LqL5Lu257aB5a6aXHJcbiAgICAgICAgQnV0dG9uTWV0aG9kXHJcbiAgICAgICAgICAgIC5hZGRCdXR0b25FdmVudCh0aGlzLmdvQmFja0J1dHRvbkgsIFwiZ29CYWNrVG91Y2hFdmVudFwiLCB0aGlzLCBTY2VuZURpcmVjdGlvblR5cGUuTEFORFNDQVBFKTtcclxuICAgICAgICBCdXR0b25NZXRob2RcclxuICAgICAgICAgICAgLmFkZEJ1dHRvbkV2ZW50KHRoaXMuZ29CYWNrQnV0dG9uViwgXCJnb0JhY2tUb3VjaEV2ZW50XCIsIHRoaXMsIFNjZW5lRGlyZWN0aW9uVHlwZS5QT1JUUkFJVCk7XHJcblxyXG4gICAgICAgIEJ1dHRvbk1ldGhvZFxyXG4gICAgICAgICAgICAuYWRkQnV0dG9uRXZlbnQodGhpcy5vbmVEYXlSZWNvcmRCdXR0b25ILCBcImRheXNSZWNvcmRUb3VjaEV2ZW50XCIsIHRoaXMsIERheVR5cGUuT05FX0RBWSk7XHJcbiAgICAgICAgQnV0dG9uTWV0aG9kXHJcbiAgICAgICAgICAgIC5hZGRCdXR0b25FdmVudCh0aGlzLm9uZURheVJlY29yZEJ1dHRvblYsIFwiZGF5c1JlY29yZFRvdWNoRXZlbnRcIiwgdGhpcywgRGF5VHlwZS5PTkVfREFZKTtcclxuXHJcbiAgICAgICAgLy/njbLlj5bkuIDml6XlhafntIDpjITmjInpiJXkuovku7bntoHlrppcclxuICAgICAgICBCdXR0b25NZXRob2RcclxuICAgICAgICAgICAgLmFkZEJ1dHRvbkV2ZW50KHRoaXMub25lRGF5UmVjb3JkQnV0dG9uSCwgXCJkYXlzUmVjb3JkVG91Y2hFdmVudEhcIiwgdGhpcywgRGF5VHlwZS5PTkVfREFZKTtcclxuICAgICAgICBCdXR0b25NZXRob2RcclxuICAgICAgICAgICAgLmFkZEJ1dHRvbkV2ZW50KHRoaXMub25lRGF5UmVjb3JkQnV0dG9uViwgXCJkYXlzUmVjb3JkVG91Y2hFdmVudFZcIiwgdGhpcywgRGF5VHlwZS5PTkVfREFZKTtcclxuXHJcbiAgICAgICAgLy/njbLlj5bkupTml6XlhafntIDpjITmjInpiJXkuovku7bntoHlrppcclxuICAgICAgICBCdXR0b25NZXRob2RcclxuICAgICAgICAgICAgLmFkZEJ1dHRvbkV2ZW50KHRoaXMuZml2ZURheVJlY29yZEJ1dHRvbkgsIFwiZGF5c1JlY29yZFRvdWNoRXZlbnRIXCIsIHRoaXMsIERheVR5cGUuRklWRV9EQVkpO1xyXG4gICAgICAgIEJ1dHRvbk1ldGhvZFxyXG4gICAgICAgICAgICAuYWRkQnV0dG9uRXZlbnQodGhpcy5maXZlRGF5UmVjb3JkQnV0dG9uViwgXCJkYXlzUmVjb3JkVG91Y2hFdmVudFZcIiwgdGhpcywgRGF5VHlwZS5GSVZFX0RBWSk7XHJcblxyXG4gICAgICAgIC8v542y5Y+W5Y2B5pel5YWn57SA6YyE5oyJ6YiV5LqL5Lu257aB5a6aXHJcbiAgICAgICAgQnV0dG9uTWV0aG9kXHJcbiAgICAgICAgICAgIC5hZGRCdXR0b25FdmVudCh0aGlzLnRlbkRheVJlY29yZEJ1dHRvbkgsIFwiZGF5c1JlY29yZFRvdWNoRXZlbnRIXCIsIHRoaXMsIERheVR5cGUuVEVOX0RBWSk7XHJcbiAgICAgICAgQnV0dG9uTWV0aG9kXHJcbiAgICAgICAgICAgIC5hZGRCdXR0b25FdmVudCh0aGlzLnRlbkRheVJlY29yZEJ1dHRvblYsIFwiZGF5c1JlY29yZFRvdWNoRXZlbnRWXCIsIHRoaXMsIERheVR5cGUuVEVOX0RBWSk7XHJcblxyXG4gICAgICAgIC8v5YmN5b6A5LiL5LiA6aCB57SA6YyE5oyJ6YiV5LqL5Lu257aB5a6aXHJcbiAgICAgICAgQnV0dG9uTWV0aG9kXHJcbiAgICAgICAgICAgIC5hZGRCdXR0b25FdmVudCh0aGlzLm5leHRSZWNvcmRCdXR0b25ILCBcIm5leHRBbmRMYXN0QnV0dG9uVG91Y2hFdmVudFwiLCB0aGlzLCBQYWdlQ2hhbmdlLk5FWFQpO1xyXG4gICAgICAgIEJ1dHRvbk1ldGhvZFxyXG4gICAgICAgICAgICAuYWRkQnV0dG9uRXZlbnQodGhpcy5uZXh0UmVjb3JkQnV0dG9uViwgXCJuZXh0QW5kTGFzdEJ1dHRvblRvdWNoRXZlbnRcIiwgdGhpcywgUGFnZUNoYW5nZS5ORVhUKTtcclxuXHJcbiAgICAgICAgLy/liY3lvoDkuIvkuIDpoIHntIDpjITmjInpiJXkuovku7bntoHlrppcclxuICAgICAgICBCdXR0b25NZXRob2RcclxuICAgICAgICAgICAgLmFkZEJ1dHRvbkV2ZW50KHRoaXMucHJldmlvdXNSZWNvcmRCdXR0b25ILCBcIm5leHRBbmRMYXN0QnV0dG9uVG91Y2hFdmVudFwiLCB0aGlzLCBQYWdlQ2hhbmdlLlBSRVZJT1VTKTtcclxuICAgICAgICBCdXR0b25NZXRob2RcclxuICAgICAgICAgICAgLmFkZEJ1dHRvbkV2ZW50KHRoaXMucHJldmlvdXNSZWNvcmRCdXR0b25WLCBcIm5leHRBbmRMYXN0QnV0dG9uVG91Y2hFdmVudFwiLCB0aGlzLCBQYWdlQ2hhbmdlLlBSRVZJT1VTKTtcclxuXHJcbiAgICAgICAgdGhpcy5pc1Jlc3VsdE9LID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5nYW1lSGlzdG9yeVJlc3VsdEV2ZW50TGlzdGVuZXIoKTtcclxuICAgICAgICB0aGlzLm9uQ3JlYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmiYDmnInlpKnmlbjmjInpiJXntbHkuIDnm6Pogb1cclxuICAgICAqIEBwcm90ZWN0ZWRcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGRheXNSZWNvcmRUb3VjaEV2ZW50SChldmVudCwgY2FsbEJhY2s6IERheVR5cGUpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5omA5pyJ5aSp5pW45oyJ6YiV57Wx5LiA55uj6IG9XHJcbiAgICAgKiBAcHJvdGVjdGVkXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBkYXlzUmVjb3JkVG91Y2hFdmVudFYoZXZlbnQsIGNhbGxCYWNrOiBEYXlUeXBlKTtcclxuXHJcbn0iXX0=