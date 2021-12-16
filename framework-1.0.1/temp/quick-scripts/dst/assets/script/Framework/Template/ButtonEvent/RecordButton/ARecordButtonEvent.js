
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Template/ButtonEvent/RecordButton/ARecordButtonEvent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4f9218k71pAQKzYygZs3hMX', 'ARecordButtonEvent');
// script/Framework/Template/ButtonEvent/RecordButton/ARecordButtonEvent.ts

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
exports.DayType = exports.PageChange = void 0;
var ServerEventType_1 = require("../../../Listener/Enum/ServerEventType");
var EventManager_1 = require("../../../Listener/EventManager");
var OverrideComponent_1 = require("../../OverrideComponent");
var ccclass = cc._decorator.ccclass;
var PageChange;
(function (PageChange) {
    PageChange["NEXT"] = "NEXT";
    PageChange["PREVIOUS"] = "PREVIOUS";
})(PageChange || (PageChange = {}));
exports.PageChange = PageChange;
var DayType;
(function (DayType) {
    DayType["ONE_DAY"] = "ONE_DAY";
    DayType["FIVE_DAY"] = "FIVE_DAY";
    DayType["TEN_DAY"] = "TEN_DAY";
})(DayType || (DayType = {}));
exports.DayType = DayType;
/**
 * @Author 蕭立品
 * @Description 說明頁按鈕統一事件名稱命名
 * @Date 2021-05-10 下午 02:20
 * @Version 1.0
 */
var ARecordButtonEvent = /** @class */ (function (_super) {
    __extends(ARecordButtonEvent, _super);
    function ARecordButtonEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ARecordButtonEvent.prototype.gameHistoryResultEventListener = function () {
        var _this = this;
        EventManager_1.default.instance.serverEventListener(ServerEventType_1.ServerEventType.GET_GAME_HISTORY_RESULT, function (gameHistoryData) {
            _this.gameHistoryResultEvent(gameHistoryData);
            _this.isResultOK = true;
        }, false);
    };
    ARecordButtonEvent = __decorate([
        ccclass
    ], ARecordButtonEvent);
    return ARecordButtonEvent;
}(OverrideComponent_1.default));
exports.default = ARecordButtonEvent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXFRlbXBsYXRlXFxCdXR0b25FdmVudFxcUmVjb3JkQnV0dG9uXFxBUmVjb3JkQnV0dG9uRXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBFQUF1RTtBQUN2RSwrREFBMEQ7QUFFMUQsNkRBQXdEO0FBRWpELElBQUEsT0FBTyxHQUFJLEVBQUUsQ0FBQyxVQUFVLFFBQWpCLENBQWtCO0FBRWhDLElBQUssVUFHSjtBQUhELFdBQUssVUFBVTtJQUNYLDJCQUFhLENBQUE7SUFDYixtQ0FBcUIsQ0FBQTtBQUN6QixDQUFDLEVBSEksVUFBVSxLQUFWLFVBQVUsUUFHZDtBQVFPLGdDQUFVO0FBTmxCLElBQUssT0FJSjtBQUpELFdBQUssT0FBTztJQUNSLDhCQUFtQixDQUFBO0lBQ25CLGdDQUFxQixDQUFBO0lBQ3JCLDhCQUFtQixDQUFBO0FBQ3ZCLENBQUMsRUFKSSxPQUFPLEtBQVAsT0FBTyxRQUlYO0FBRW1CLDBCQUFPO0FBZTNCOzs7OztHQUtHO0FBRUg7SUFBeUQsc0NBQWlCO0lBQTFFOztJQStDQSxDQUFDO0lBM0NHLDJEQUE4QixHQUE5QjtRQUFBLGlCQUtDO1FBSkcsc0JBQVksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsaUNBQWUsQ0FBQyx1QkFBdUIsRUFBRSxVQUFDLGVBQWdDO1lBQ2hILEtBQUksQ0FBQyxzQkFBc0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUM3QyxLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUMzQixDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDZCxDQUFDO0lBVHlCLGtCQUFrQjtRQUQvQyxPQUFPO09BQ3NCLGtCQUFrQixDQStDL0M7SUFBRCx5QkFBQztDQS9DRCxBQStDQyxDQS9Dd0QsMkJBQWlCLEdBK0N6RTtrQkEvQzZCLGtCQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2VydmVyRXZlbnRUeXBlfSBmcm9tIFwiLi4vLi4vLi4vTGlzdGVuZXIvRW51bS9TZXJ2ZXJFdmVudFR5cGVcIjtcclxuaW1wb3J0IEV2ZW50TWFuYWdlciBmcm9tIFwiLi4vLi4vLi4vTGlzdGVuZXIvRXZlbnRNYW5hZ2VyXCI7XHJcbmltcG9ydCB7U2NlbmVEaXJlY3Rpb25UeXBlfSBmcm9tIFwiLi4vLi4vLi4vU2NlbmUvRW51bS9TY2VuZVN0eWxlXCI7XHJcbmltcG9ydCBPdmVycmlkZUNvbXBvbmVudCBmcm9tIFwiLi4vLi4vT3ZlcnJpZGVDb21wb25lbnRcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5lbnVtIFBhZ2VDaGFuZ2Uge1xyXG4gICAgTkVYVCA9IFwiTkVYVFwiLFxyXG4gICAgUFJFVklPVVMgPSBcIlBSRVZJT1VTXCJcclxufVxyXG5cclxuZW51bSBEYXlUeXBlIHtcclxuICAgIE9ORV9EQVkgPSBcIk9ORV9EQVlcIixcclxuICAgIEZJVkVfREFZID0gXCJGSVZFX0RBWVwiLFxyXG4gICAgVEVOX0RBWSA9IFwiVEVOX0RBWVwiLFxyXG59XHJcblxyXG5leHBvcnQge1BhZ2VDaGFuZ2UsIERheVR5cGV9O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBIaXN0b3J5RGF0YSB7XHJcbiAgICBCZXQ6IG51bWJlcjtcclxuICAgIEJldElEOiBudW1iZXI7XHJcbiAgICBHYW1lTnVtYmVyOiBudW1iZXI7XHJcbiAgICBUaW1lOiBzdHJpbmc7XHJcbiAgICBXaW5Mb3NlOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgR2FtZUhpc3RvcnlEYXRhIHtcclxuICAgIFN0YXRlOiBudW1iZXI7XHJcbiAgICBIaXN0b3J5OiBIaXN0b3J5RGF0YVtdO1xyXG59XHJcblxyXG4vKipcclxuICogQEF1dGhvciDola3nq4vlk4FcclxuICogQERlc2NyaXB0aW9uIOiqquaYjumggeaMiemIlee1seS4gOS6i+S7tuWQjeeoseWRveWQjVxyXG4gKiBARGF0ZSAyMDIxLTA1LTEwIOS4i+WNiCAwMjoyMFxyXG4gKiBAVmVyc2lvbiAxLjBcclxuICovXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEFSZWNvcmRCdXR0b25FdmVudCBleHRlbmRzIE92ZXJyaWRlQ29tcG9uZW50IHtcclxuXHJcbiAgICBwcm90ZWN0ZWQgaXNSZXN1bHRPSzogYm9vbGVhbjtcclxuXHJcbiAgICBnYW1lSGlzdG9yeVJlc3VsdEV2ZW50TGlzdGVuZXIoKSB7XHJcbiAgICAgICAgRXZlbnRNYW5hZ2VyLmluc3RhbmNlLnNlcnZlckV2ZW50TGlzdGVuZXIoU2VydmVyRXZlbnRUeXBlLkdFVF9HQU1FX0hJU1RPUllfUkVTVUxULCAoZ2FtZUhpc3RvcnlEYXRhOiBHYW1lSGlzdG9yeURhdGEpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lSGlzdG9yeVJlc3VsdEV2ZW50KGdhbWVIaXN0b3J5RGF0YSk7XHJcbiAgICAgICAgICAgIHRoaXMuaXNSZXN1bHRPSyA9IHRydWU7XHJcbiAgICAgICAgfSwgZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6Ieq6KiC5Yid5aeL5YyWXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBvbkNyZWF0ZSgpO1xyXG5cclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBnYW1lSGlzdG9yeVJlc3VsdEV2ZW50KGdhbWVIaXN0b3J5RGF0YTogR2FtZUhpc3RvcnlEYXRhKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOi/lOWbnuS4iuS4gOmggeS6i+S7tlxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgZ29CYWNrVG91Y2hFdmVudChldmVudCwgc2NlbmVEaXJlY3Rpb246IFNjZW5lRGlyZWN0aW9uVHlwZSk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpoa/npLrnpaXllq7poIHpnaJcclxuICAgICAqIEBwcm90ZWN0ZWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFic3RyYWN0IHNob3dSZWNvcmRQYWdlKCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmuIXpmaTnpaXllq7os4foqIpcclxuICAgICAqIEBwcm90ZWN0ZWRcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IHJlbW92ZVJlY29yZFVJKCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmr4/mrKHmi7/lj5blvoznq69hcGnmmYIs5Z+36KGM6YCy5bqm5qKdXHJcbiAgICAgKiBAcHJvdGVjdGVkXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBydW5Qcm9ncmVzcygpOiBQcm9taXNlPHZvaWQ+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog57SA6YyE5o+b6aCB5LqL5Lu2XHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBuZXh0QW5kTGFzdEJ1dHRvblRvdWNoRXZlbnQoZXZlbnQ6IGFueSwgY2FsbEJhY2s6IFBhZ2VDaGFuZ2UpO1xyXG5cclxufSJdfQ==