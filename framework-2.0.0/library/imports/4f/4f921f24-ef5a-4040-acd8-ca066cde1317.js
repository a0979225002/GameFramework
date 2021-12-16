"use strict";
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