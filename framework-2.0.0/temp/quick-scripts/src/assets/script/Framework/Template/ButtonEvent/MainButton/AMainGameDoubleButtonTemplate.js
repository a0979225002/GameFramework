"use strict";
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