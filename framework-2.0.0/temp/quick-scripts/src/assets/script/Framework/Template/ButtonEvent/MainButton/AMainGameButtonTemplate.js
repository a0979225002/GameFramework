"use strict";
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