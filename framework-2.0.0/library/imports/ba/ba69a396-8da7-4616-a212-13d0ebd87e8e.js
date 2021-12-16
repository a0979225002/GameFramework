"use strict";
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