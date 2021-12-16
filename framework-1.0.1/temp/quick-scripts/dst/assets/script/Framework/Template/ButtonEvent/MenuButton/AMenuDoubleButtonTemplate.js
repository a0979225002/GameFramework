
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Template/ButtonEvent/MenuButton/AMenuDoubleButtonTemplate.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ba69aOWjadGFqISE9Dr2H6O', 'AMenuDoubleButtonTemplate');
// script/Framework/Template/ButtonEvent/MenuButton/AMenuDoubleButtonTemplate.ts

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
var ConfigEnum_1 = require("../../../Config/Enum/ConfigEnum");
var ButtonMethod_1 = require("../../../GlobalMethod/ButtonMethod");
var AMenuButtonEvent_1 = require("./AMenuButtonEvent");
var ccclass = cc._decorator.ccclass;
/**
 * @Author XIAO-LI-PIN
 * @Description (抽象類)MENU主頁面,場景方向雙向,按鈕事件監聽綁定(H and V 頁面 兩倍按鈕)
 * @Date 2021-05-26 上午 15:59
 * @Version 1.1
 */
var AMenuDoubleButtonTemplate = /** @class */ (function (_super) {
    __extends(AMenuDoubleButtonTemplate, _super);
    function AMenuDoubleButtonTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AMenuDoubleButtonTemplate.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        //音樂按鈕
        ButtonMethod_1.default.addButtonEvent(this.musicButtonH, "musicEventListener", this);
        ButtonMethod_1.default.addButtonEvent(this.musicButtonV, "musicEventListener", this);
        //效果音按鈕
        ButtonMethod_1.default.addButtonEvent(this.effectButtonH, "effectEventListener", this);
        ButtonMethod_1.default.addButtonEvent(this.effectButtonV, "effectEventListener", this);
        //押住按鈕
        ButtonMethod_1.default.addButtonEvent(this.betUpButtonH, "betUpEventListener", this);
        ButtonMethod_1.default.addButtonEvent(this.betUpButtonV, "betUpEventListener", this);
        ButtonMethod_1.default.addButtonEvent(this.betDownButtonH, "betDownEventListener", this);
        ButtonMethod_1.default.addButtonEvent(this.betDownButtonV, "betDownEventListener", this);
        //自動按鈕
        ButtonMethod_1.default.addButtonEvent(this.auto50ButtonH, "autoButtonEventListener", this, ConfigEnum_1.AutoType.auto50);
        ButtonMethod_1.default.addButtonEvent(this.auto50ButtonV, "autoButtonEventListener", this, ConfigEnum_1.AutoType.auto50);
        ButtonMethod_1.default.addButtonEvent(this.auto100ButtonH, "autoButtonEventListener", this, ConfigEnum_1.AutoType.auto100);
        ButtonMethod_1.default.addButtonEvent(this.auto100ButtonV, "autoButtonEventListener", this, ConfigEnum_1.AutoType.auto100);
        ButtonMethod_1.default.addButtonEvent(this.auto500ButtonH, "autoButtonEventListener", this, ConfigEnum_1.AutoType.auto500);
        ButtonMethod_1.default.addButtonEvent(this.auto500ButtonV, "autoButtonEventListener", this, ConfigEnum_1.AutoType.auto500);
        ButtonMethod_1.default.addButtonEvent(this.auto1000ButtonH, "autoButtonEventListener", this, ConfigEnum_1.AutoType.auto1000);
        ButtonMethod_1.default.addButtonEvent(this.auto1000ButtonV, "autoButtonEventListener", this, ConfigEnum_1.AutoType.auto1000);
        ButtonMethod_1.default.addButtonEvent(this.autoFreeEndButtonH, "autoButtonEventListener", this, ConfigEnum_1.AutoType.freeEnd);
        ButtonMethod_1.default.addButtonEvent(this.autoFreeEndButtonV, "autoButtonEventListener", this, ConfigEnum_1.AutoType.freeEnd);
        ButtonMethod_1.default.addButtonEvent(this.autoButtonH, "autoButtonEventListener", this, ConfigEnum_1.AutoType.auto);
        ButtonMethod_1.default.addButtonEvent(this.autoButtonV, "autoButtonEventListener", this, ConfigEnum_1.AutoType.auto);
        //返回上一頁按鈕
        ButtonMethod_1.default.addButtonEvent(this.goBackButtonH, "goBackTouchEvent", this);
        ButtonMethod_1.default.addButtonEvent(this.goBackButtonV, "goBackTouchEvent", this);
        //返回首頁
        ButtonMethod_1.default.addButtonEvent(this.goHomeButtonH, "goHomeTouchEvent", this);
        ButtonMethod_1.default.addButtonEvent(this.goHomeButtonV, "goHomeTouchEvent", this);
        //紀錄頁按鈕
        ButtonMethod_1.default.addButtonEvent(this.recordButtonH, "recordPageTouchEvent", this);
        ButtonMethod_1.default.addButtonEvent(this.recordButtonV, "recordPageTouchEvent", this);
        //設定頁按鈕
        ButtonMethod_1.default.addButtonEvent(this.settingButtonH, "settingPageTouchEvent", this);
        ButtonMethod_1.default.addButtonEvent(this.settingButtonV, "settingPageTouchEvent", this);
        //說明頁按鈕
        ButtonMethod_1.default.addButtonEvent(this.descriptionPageButtonH, "descriptionPageEvent", this);
        ButtonMethod_1.default.addButtonEvent(this.descriptionPageButtonV, "descriptionPageEvent", this);
    };
    AMenuDoubleButtonTemplate = __decorate([
        ccclass
    ], AMenuDoubleButtonTemplate);
    return AMenuDoubleButtonTemplate;
}(AMenuButtonEvent_1.default));
exports.default = AMenuDoubleButtonTemplate;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXFRlbXBsYXRlXFxCdXR0b25FdmVudFxcTWVudUJ1dHRvblxcQU1lbnVEb3VibGVCdXR0b25UZW1wbGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4REFBd0Q7QUFDeEQsbUVBQTZEO0FBQzdELHVEQUFpRDtBQUUxQyxJQUFBLE9BQU8sR0FBSSxFQUFFLENBQUMsVUFBVSxRQUFqQixDQUFrQjtBQUNoQzs7Ozs7R0FLRztBQUVIO0lBQWdFLDZDQUFnQjtJQUFoRjs7SUFnR0EsQ0FBQztJQS9EYSwwQ0FBTSxHQUFoQjtRQUNJLGlCQUFNLE1BQU0sV0FBRSxDQUFDO1FBQ2YsTUFBTTtRQUNOLHNCQUFZLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0Usc0JBQVksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxvQkFBb0IsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUUzRSxPQUFPO1FBQ1Asc0JBQVksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxxQkFBcUIsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM3RSxzQkFBWSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLHFCQUFxQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTdFLE1BQU07UUFDTixzQkFBWSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLG9CQUFvQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNFLHNCQUFZLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0Usc0JBQVksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxzQkFBc0IsRUFBRSxJQUFJLENBQUMs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QUM7UUFDaEYsc0JBQVksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSx1QkFBdUIsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVoRixPQUFPO1FBQ1Asc0JBQVksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLHNCQUFzQixFQUFFLHNCQUFzQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3ZGLHNCQUFZLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxzQkFBc0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzRixDQUFDO0lBOUZ5Qix5QkFBeUI7UUFEdEQsT0FBTztPQUNzQix5QkFBeUIsQ0FnR3REO0lBQUQsZ0NBQUM7Q0FoR0QsQUFnR0MsQ0FoRytELDBCQUFnQixHQWdHL0U7a0JBaEc2Qix5QkFBeUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0F1dG9UeXBlfSBmcm9tICcuLi8uLi8uLi9Db25maWcvRW51bS9Db25maWdFbnVtJ1xyXG5pbXBvcnQgQnV0dG9uTWV0aG9kIGZyb20gJy4uLy4uLy4uL0dsb2JhbE1ldGhvZC9CdXR0b25NZXRob2QnXHJcbmltcG9ydCBBTWVudUJ1dHRvbkV2ZW50IGZyb20gJy4vQU1lbnVCdXR0b25FdmVudCdcclxuXHJcbmNvbnN0IHtjY2NsYXNzfSA9IGNjLl9kZWNvcmF0b3I7XHJcbi8qKlxyXG4gKiBAQXV0aG9yIFhJQU8tTEktUElOXHJcbiAqIEBEZXNjcmlwdGlvbiAo5oq96LGh6aGeKU1FTlXkuLvpoIHpnaIs5aC05pmv5pa55ZCR6ZuZ5ZCRLOaMiemIleS6i+S7tuebo+iBvee2geWumihIIGFuZCBWIOmggemdoiDlhanlgI3mjInpiJUpXHJcbiAqIEBEYXRlIDIwMjEtMDUtMjYg5LiK5Y2IIDE1OjU5XHJcbiAqIEBWZXJzaW9uIDEuMVxyXG4gKi9cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQU1lbnVEb3VibGVCdXR0b25UZW1wbGF0ZSBleHRlbmRzIEFNZW51QnV0dG9uRXZlbnQge1xyXG5cclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBtdXNpY0J1dHRvbkg6IGNjLkJ1dHRvbjtcclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBtdXNpY0J1dHRvblY6IGNjLkJ1dHRvbjtcclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBlZmZlY3RCdXR0b25IOiBjYy5CdXR0b247XHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgZWZmZWN0QnV0dG9uVjogY2MuQnV0dG9uO1xyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGJldFVwQnV0dG9uSDogY2MuQnV0dG9uO1xyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGJldFVwQnV0dG9uVjogY2MuQnV0dG9uO1xyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGJldERvd25CdXR0b25IOiBjYy5CdXR0b247XHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgYmV0RG93bkJ1dHRvblY6IGNjLkJ1dHRvbjtcclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBhdXRvQnV0dG9uSDogY2MuQnV0dG9uO1xyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGF1dG9CdXR0b25WOiBjYy5CdXR0b247XHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgYXV0bzUwQnV0dG9uSDogY2MuQnV0dG9uO1xyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGF1dG81MEJ1dHRvblY6IGNjLkJ1dHRvbjtcclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBhdXRvMTAwQnV0dG9uSDogY2MuQnV0dG9uO1xyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGF1dG8xMDBCdXR0b25WOiBjYy5CdXR0b247XHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgYXV0bzUwMEJ1dHRvbkg6IGNjLkJ1dHRvbjtcclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBhdXRvNTAwQnV0dG9uVjogY2MuQnV0dG9uO1xyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGF1dG8xMDAwQnV0dG9uSDogY2MuQnV0dG9uO1xyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGF1dG8xMDAwQnV0dG9uVjogY2MuQnV0dG9uO1xyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGF1dG9GcmVlRW5kQnV0dG9uSDogY2MuQnV0dG9uO1xyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGF1dG9GcmVlRW5kQnV0dG9uVjogY2MuQnV0dG9uO1xyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGdvQmFja0J1dHRvbkg6IGNjLkJ1dHRvbjtcclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBnb0JhY2tCdXR0b25WOiBjYy5CdXR0b247XHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgZ29Ib21lQnV0dG9uSDogY2MuQnV0dG9uO1xyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGdvSG9tZUJ1dHRvblY6IGNjLkJ1dHRvbjtcclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCByZWNvcmRCdXR0b25IOiBjYy5CdXR0b247XHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgcmVjb3JkQnV0dG9uVjogY2MuQnV0dG9uO1xyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IHNldHRpbmdCdXR0b25IOiBjYy5CdXR0b247XHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3Qgc2V0dGluZ0J1dHRvblY6IGNjLkJ1dHRvbjtcclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBkZXNjcmlwdGlvblBhZ2VCdXR0b25IOiBjYy5CdXR0b247XHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgZGVzY3JpcHRpb25QYWdlQnV0dG9uVjogY2MuQnV0dG9uO1xyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKSB7XHJcbiAgICAgICAgc3VwZXIub25Mb2FkKCk7XHJcbiAgICAgICAgLy/pn7PmqILmjInpiJVcclxuICAgICAgICBCdXR0b25NZXRob2QuYWRkQnV0dG9uRXZlbnQodGhpcy5tdXNpY0J1dHRvbkgsIFwibXVzaWNFdmVudExpc3RlbmVyXCIsIHRoaXMpO1xyXG4gICAgICAgIEJ1dHRvbk1ldGhvZC5hZGRCdXR0b25FdmVudCh0aGlzLm11c2ljQnV0dG9uViwgXCJtdXNpY0V2ZW50TGlzdGVuZXJcIiwgdGhpcyk7XHJcblxyXG4gICAgICAgIC8v5pWI5p6c6Z+z5oyJ6YiVXHJcbiAgICAgICAgQnV0dG9uTWV0aG9kLmFkZEJ1dHRvbkV2ZW50KHRoaXMuZWZmZWN0QnV0dG9uSCwgXCJlZmZlY3RFdmVudExpc3RlbmVyXCIsIHRoaXMpO1xyXG4gICAgICAgIEJ1dHRvbk1ldGhvZC5hZGRCdXR0b25FdmVudCh0aGlzLmVmZmVjdEJ1dHRvblYsIFwiZWZmZWN0RXZlbnRMaXN0ZW5lclwiLCB0aGlzKTtcclxuXHJcbiAgICAgICAgLy/mirzkvY/mjInpiJVcclxuICAgICAgICBCdXR0b25NZXRob2QuYWRkQnV0dG9uRXZlbnQodGhpcy5iZXRVcEJ1dHRvbkgsIFwiYmV0VXBFdmVudExpc3RlbmVyXCIsIHRoaXMpO1xyXG4gICAgICAgIEJ1dHRvbk1ldGhvZC5hZGRCdXR0b25FdmVudCh0aGlzLmJldFVwQnV0dG9uViwgXCJiZXRVcEV2ZW50TGlzdGVuZXJcIiwgdGhpcyk7XHJcbiAgICAgICAgQnV0dG9uTWV0aG9kLmFkZEJ1dHRvbkV2ZW50KHRoaXMuYmV0RG93bkJ1dHRvbkgsIFwiYmV0RG93bkV2ZW50TGlzdGVuZXJcIiwgdGhpcyk7XHJcbiAgICAgICAgQnV0dG9uTWV0aG9kLmFkZEJ1dHRvbkV2ZW50KHRoaXMuYmV0RG93bkJ1dHRvblYsIFwiYmV0RG93bkV2ZW50TGlzdGVuZXJcIiwgdGhpcyk7XHJcblxyXG4gICAgICAgIC8v6Ieq5YuV5oyJ6YiVXHJcbiAgICAgICAgQnV0dG9uTWV0aG9kLmFkZEJ1dHRvbkV2ZW50KFxyXG4gICAgICAgICAgICB0aGlzLmF1dG81MEJ1dHRvbkgsIFwiYXV0b0J1dHRvbkV2ZW50TGlzdGVuZXJcIiwgdGhpcywgQXV0b1R5cGUuYXV0bzUwKTtcclxuICAgICAgICBCdXR0b25NZXRob2QuYWRkQnV0dG9uRXZlbnQoXHJcbiAgICAgICAgICAgIHRoaXMuYXV0bzUwQnV0dG9uViwgXCJhdXRvQnV0dG9uRXZlbnRMaXN0ZW5lclwiLCB0aGlzLCBBdXRvVHlwZS5hdXRvNTApO1xyXG4gICAgICAgIEJ1dHRvbk1ldGhvZC5hZGRCdXR0b25FdmVudChcclxuICAgICAgICAgICAgdGhpcy5hdXRvMTAwQnV0dG9uSCwgXCJhdXRvQnV0dG9uRXZlbnRMaXN0ZW5lclwiLCB0aGlzLCBBdXRvVHlwZS5hdXRvMTAwKTtcclxuICAgICAgICBCdXR0b25NZXRob2QuYWRkQnV0dG9uRXZlbnQoXHJcbiAgICAgICAgICAgIHRoaXMuYXV0bzEwMEJ1dHRvblYsIFwiYXV0b0J1dHRvbkV2ZW50TGlzdGVuZXJcIiwgdGhpcywgQXV0b1R5cGUuYXV0bzEwMCk7XHJcbiAgICAgICAgQnV0dG9uTWV0aG9kLmFkZEJ1dHRvbkV2ZW50KFxyXG4gICAgICAgICAgICB0aGlzLmF1dG81MDBCdXR0b25ILCBcImF1dG9CdXR0b25FdmVudExpc3RlbmVyXCIsIHRoaXMsIEF1dG9UeXBlLmF1dG81MDApO1xyXG4gICAgICAgIEJ1dHRvbk1ldGhvZC5hZGRCdXR0b25FdmVudChcclxuICAgICAgICAgICAgdGhpcy5hdXRvNTAwQnV0dG9uViwgXCJhdXRvQnV0dG9uRXZlbnRMaXN0ZW5lclwiLCB0aGlzLCBBdXRvVHlwZS5hdXRvNTAwKTtcclxuICAgICAgICBCdXR0b25NZXRob2QuYWRkQnV0dG9uRXZlbnQoXHJcbiAgICAgICAgICAgIHRoaXMuYXV0bzEwMDBCdXR0b25ILCBcImF1dG9CdXR0b25FdmVudExpc3RlbmVyXCIsIHRoaXMsIEF1dG9UeXBlLmF1dG8xMDAwKTtcclxuICAgICAgICBCdXR0b25NZXRob2QuYWRkQnV0dG9uRXZlbnQoXHJcbiAgICAgICAgICAgIHRoaXMuYXV0bzEwMDBCdXR0b25WLCBcImF1dG9CdXR0b25FdmVudExpc3RlbmVyXCIsIHRoaXMsIEF1dG9UeXBlLmF1dG8xMDAwKTtcclxuICAgICAgICBCdXR0b25NZXRob2QuYWRkQnV0dG9uRXZlbnQoXHJcbiAgICAgICAgICAgIHRoaXMuYXV0b0ZyZWVFbmRCdXR0b25ILCBcImF1dG9CdXR0b25FdmVudExpc3RlbmVyXCIsIHRoaXMsIEF1dG9UeXBlLmZyZWVFbmQpO1xyXG4gICAgICAgIEJ1dHRvbk1ldGhvZC5hZGRCdXR0b25FdmVudChcclxuICAgICAgICAgICAgdGhpcy5hdXRvRnJlZUVuZEJ1dHRvblYsIFwiYXV0b0J1dHRvbkV2ZW50TGlzdGVuZXJcIiwgdGhpcywgQXV0b1R5cGUuZnJlZUVuZCk7XHJcbiAgICAgICAgQnV0dG9uTWV0aG9kLmFkZEJ1dHRvbkV2ZW50KFxyXG4gICAgICAgICAgICB0aGlzLmF1dG9CdXR0b25ILCBcImF1dG9CdXR0b25FdmVudExpc3RlbmVyXCIsIHRoaXMsIEF1dG9UeXBlLmF1dG8pO1xyXG4gICAgICAgIEJ1dHRvbk1ldGhvZC5hZGRCdXR0b25FdmVudChcclxuICAgICAgICAgICAgdGhpcy5hdXRvQnV0dG9uViwgXCJhdXRvQnV0dG9uRXZlbnRMaXN0ZW5lclwiLCB0aGlzLCBBdXRvVHlwZS5hdXRvKTtcclxuXHJcbiAgICAgICAgLy/ov5Tlm57kuIrkuIDpoIHmjInpiJVcclxuICAgICAgICBCdXR0b25NZXRob2QuYWRkQnV0dG9uRXZlbnQodGhpcy5nb0JhY2tCdXR0b25ILCBcImdvQmFja1RvdWNoRXZlbnRcIiwgdGhpcyk7XHJcbiAgICAgICAgQnV0dG9uTWV0aG9kLmFkZEJ1dHRvbkV2ZW50KHRoaXMuZ29CYWNrQnV0dG9uViwgXCJnb0JhY2tUb3VjaEV2ZW50XCIsIHRoaXMpO1xyXG5cclxuICAgICAgICAvL+i/lOWbnummlumggVxyXG4gICAgICAgIEJ1dHRvbk1ldGhvZC5hZGRCdXR0b25FdmVudCh0aGlzLmdvSG9tZUJ1dHRvbkgsIFwiZ29Ib21lVG91Y2hFdmVudFwiLCB0aGlzKTtcclxuICAgICAgICBCdXR0b25NZXRob2QuYWRkQnV0dG9uRXZlbnQodGhpcy5nb0hvbWVCdXR0b25WLCBcImdvSG9tZVRvdWNoRXZlbnRcIiwgdGhpcyk7XHJcblxyXG4gICAgICAgIC8v57SA6YyE6aCB5oyJ6YiVXHJcbiAgICAgICAgQnV0dG9uTWV0aG9kLmFkZEJ1dHRvbkV2ZW50KHRoaXMucmVjb3JkQnV0dG9uSCwgXCJyZWNvcmRQYWdlVG91Y2hFdmVudFwiLCB0aGlzKTtcclxuICAgICAgICBCdXR0b25NZXRob2QuYWRkQnV0dG9uRXZlbnQodGhpcy5yZWNvcmRCdXR0b25WLCBcInJlY29yZFBhZ2VUb3VjaEV2ZW50XCIsIHRoaXMpO1xyXG5cclxuICAgICAgICAvL+ioreWumumggeaMiemIlVxyXG4gICAgICAgIEJ1dHRvbk1ldGhvZC5hZGRCdXR0b25FdmVudCh0aGlzLnNldHRpbmdCdXR0b25ILCBcInNldHRpbmdQYWdlVG91Y2hFdmVudFwiLCB0aGlzKTtcclxuICAgICAgICBCdXR0b25NZXRob2QuYWRkQnV0dG9uRXZlbnQodGhpcy5zZXR0aW5nQnV0dG9uViwgXCJzZXR0aW5nUGFnZVRvdWNoRXZlbnRcIiwgdGhpcyk7XHJcblxyXG4gICAgICAgIC8v6Kqq5piO6aCB5oyJ6YiVXHJcbiAgICAgICAgQnV0dG9uTWV0aG9kLmFkZEJ1dHRvbkV2ZW50KHRoaXMuZGVzY3JpcHRpb25QYWdlQnV0dG9uSCwgXCJkZXNjcmlwdGlvblBhZ2VFdmVudFwiLCB0aGlzKTtcclxuICAgICAgICBCdXR0b25NZXRob2QuYWRkQnV0dG9uRXZlbnQodGhpcy5kZXNjcmlwdGlvblBhZ2VCdXR0b25WLCBcImRlc2NyaXB0aW9uUGFnZUV2ZW50XCIsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==