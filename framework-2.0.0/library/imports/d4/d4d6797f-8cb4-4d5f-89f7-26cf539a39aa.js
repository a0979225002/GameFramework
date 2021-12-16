"use strict";
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