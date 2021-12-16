
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/MainGameScript/LabelEvent/RecordPageLabel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7e285UD8/JK4qY//fe5XHNZ', 'RecordPageLabel');
// script/MainGameScript/LabelEvent/RecordPageLabel.ts

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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ccclass = cc._decorator.ccclass;
var property = cc._decorator.property;
var LanguageMethod_1 = require("../../Framework/GlobalMethod/LanguageMethod");
var AGenericTemplate_1 = require("../../Framework/Template/AGenericTemplate");
var SocketSetting_1 = require("../../Socket/SocketSetting");
/**
 * @Author XIAO-LI-PIN
 * @Description TODO
 * @Date 2021-05-11 下午 03:15
 * @Version 1.0
 */
var RecordPageLabel = /** @class */ (function (_super) {
    __extends(RecordPageLabel, _super);
    function RecordPageLabel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dateTextH = null;
        _this.dateTextV = null;
        _this.betNumberTextH = null;
        _this.betNumberTextV = null;
        _this.bettingTextH = null;
        _this.bettingTextV = null;
        _this.profitAndLossTextH = null;
        _this.profitAndLossTextV = null;
        _this.dateRangeTextH = null;
        _this.dateRangeTextV = null;
        _this.oneDayTextH = null;
        _this.oneDayTextV = null;
        _this.fiveDayTextH = null;
        _this.fiveDayTextV = null;
        _this.tenDayTextH = null;
        _this.tenDayTextV = null;
        _this.loadingTextH = null;
        _this.loadingTextV = null;
        return _this;
    }
    RecordPageLabel.prototype.onCreate = function () {
    };
    RecordPageLabel.prototype.languageSetting = function () {
        //日期
        this.dateTextH.string = SocketSetting_1.default.t("S_9069");
        this.dateTextV.string = SocketSetting_1.default.t("S_9069");
        //注單單號
        this.betNumberTextH.string = SocketSetting_1.default.t("S_9070");
        this.betNumberTextV.string = SocketSetting_1.default.t("S_9070");
        //投注
        this.bettingTextH.string = SocketSetting_1.default.t("S_9071");
        this.bettingTextV.string = SocketSetting_1.default.t("S_9071");
        //盈虧
        this.profitAndLossTextH.string = SocketSetting_1.default.t("S_9081");
        this.profitAndLossTextV.string = SocketSetting_1.default.t("S_9081");
        //日期範圍
        this.dateRangeTextH.string = SocketSetting_1.default.t("S_9068");
        this.dateRangeTextV.string = SocketSetting_1.default.t("S_9068");
        //1日
        this.oneDayTextH.string = SocketSetting_1.default.t("B_1009");
        this.oneDayTextV.string = SocketSetting_1.default.t("B_1009");
        //5日
        this.fiveDayTextH.string = SocketSetting_1.default.t("B_1010");
        this.fiveDayTextV.string = SocketSetting_1.default.t("B_1010");
        //10日
        this.tenDayTextH.string = SocketSetting_1.default.t("B_1011");
        this.tenDayTextV.string = SocketSetting_1.default.t("B_1011");
        //載入中
        this.loadingTextH.string = SocketSetting_1.default.t("LOAD_000");
        this.loadingTextV.string = SocketSetting_1.default.t("LOAD_000");
        LanguageMethod_1.default.instance
            .updateLabelStyle(this.dateTextH)
            .updateLabelStyle(this.dateTextV)
            .updateLabelStyle(this.betNumberTextH)
            .updateLabelStyle(this.betNumberTextV)
            .updateLabelStyle(this.bettingTextH)
            .updateLabelStyle(this.bettingTextV)
            .updateLabelStyle(this.profitAndLossTextH)
            .updateLabelStyle(this.profitAndLossTextV)
            .updateLabelStyle(this.dateRangeTextH)
            .updateLabelStyle(this.dateRangeTextV)
            .updateLabelStyle(this.oneDayTextH)
            .updateLabelStyle(this.oneDayTextV)
            .updateLabelStyle(this.fiveDayTextH)
            .updateLabelStyle(this.fiveDayTextV)
            .updateLabelStyle(this.tenDayTextH)
            .updateLabelStyle(this.tenDayTextV)
            .updateLabelStyle(this.loadingTextH)
            .updateLabelStyle(this.loadingTextV);
    };
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_a = typeof cc !== "undefined" && cc.Label) === "function" ? _a : Object)
    ], RecordPageLabel.prototype, "dateTextH", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_b = typeof cc !== "undefined" && cc.Label) === "function" ? _b : Object)
    ], RecordPageLabel.prototype, "dateTextV", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_c = typeof cc !== "undefined" && cc.Label) === "function" ? _c : Object)
    ], RecordPageLabel.prototype, "betNumberTextH", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_d = typeof cc !== "undefined" && cc.Label) === "function" ? _d : Object)
    ], RecordPageLabel.prototype, "betNumberTextV", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_e = typeof cc !== "undefined" && cc.Label) === "function" ? _e : Object)
    ], RecordPageLabel.prototype, "bettingTextH", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_f = typeof cc !== "undefined" && cc.Label) === "function" ? _f : Object)
    ], RecordPageLabel.prototype, "bettingTextV", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_g = typeof cc !== "undefined" && cc.Label) === "function" ? _g : Object)
    ], RecordPageLabel.prototype, "profitAndLossTextH", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_h = typeof cc !== "undefined" && cc.Label) === "function" ? _h : Object)
    ], RecordPageLabel.prototype, "profitAndLossTextV", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_j = typeof cc !== "undefined" && cc.Label) === "function" ? _j : Object)
    ], RecordPageLabel.prototype, "dateRangeTextH", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_k = typeof cc !== "undefined" && cc.Label) === "function" ? _k : Object)
    ], RecordPageLabel.prototype, "dateRangeTextV", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_l = typeof cc !== "undefined" && cc.Label) === "function" ? _l : Object)
    ], RecordPageLabel.prototype, "oneDayTextH", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_m = typeof cc !== "undefined" && cc.Label) === "function" ? _m : Object)
    ], RecordPageLabel.prototype, "oneDayTextV", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_o = typeof cc !== "undefined" && cc.Label) === "function" ? _o : Object)
    ], RecordPageLabel.prototype, "fiveDayTextH", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_p = typeof cc !== "undefined" && cc.Label) === "function" ? _p : Object)
    ], RecordPageLabel.prototype, "fiveDayTextV", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_q = typeof cc !== "undefined" && cc.Label) === "function" ? _q : Object)
    ], RecordPageLabel.prototype, "tenDayTextH", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_r = typeof cc !== "undefined" && cc.Label) === "function" ? _r : Object)
    ], RecordPageLabel.prototype, "tenDayTextV", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_s = typeof cc !== "undefined" && cc.Label) === "function" ? _s : Object)
    ], RecordPageLabel.prototype, "loadingTextH", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_t = typeof cc !== "undefined" && cc.Label) === "function" ? _t : Object)
    ], RecordPageLabel.prototype, "loadingTextV", void 0);
    RecordPageLabel = __decorate([
        ccclass
    ], RecordPageLabel);
    return RecordPageLabel;
}(AGenericTemplate_1.default));
exports.default = RecordPageLabel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxNYWluR2FtZVNjcmlwdFxcTGFiZWxFdmVudFxcUmVjb3JkUGFnZUxhYmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU8sT0FBTyxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO0FBQ3ZDLElBQU8sUUFBUSxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO0FBQ3pDLDhFQUF5RTtBQUN6RSw4RUFBeUU7QUFDekUsNERBQXVEO0FBRXZEOzs7OztHQUtHO0FBRUg7SUFBNkMsbUNBQWdCO0lBQTdEO1FBQUEscUVBc0dDO1FBbkdHLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFFM0IsZUFBUyxHQUFhLElBQUksQ0FBQztRQUUzQixvQkFBYyxHQUFhLElBQUksQ0FBQztRQUVoQyxvQkFBYyxHQUFhLElBQUksQ0FBQztRQUVoQyxrQkFBWSxHQUFhLElBQUksQ0FBQztRQUU5QixrQkFBWSxHQUFhLElBQUksQ0FBQztRQUU5Qix3QkFBa0IsR0FBYSxJQUFJLENBQUM7UUFFcEMsd0JBQWtCLEdBQWEsSUFBSSxDQUFDO1FBRXBDLG9CQUFjLEdBQWEsSUFBSSxDQUFDO1FBRWhDLG9CQUFjLEdBQWEsSUFBSSxDQUFDO1FBRWhDLGlCQUFXLEdBQWEsSUFBSSxDQUFDO1FBRTdCLGlCQUFXLEdBQWEsSUFBSSxDQUFDO1FBRTdCLGtCQUFZLEdBQWEsSUFBSSxDQUFDO1FBRTlCLGtCQUFZLEdBQWEsSUFBSSxDQUFDO1FBRTlCLGlCQUFXLEdBQWEsSUFBSSxDQUFDO1FBRTdCLGlCQUFXLEdBQWEsSUFBSSxDQUFDO1FBRTdCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRTdCLGtCQUFZLEdBQVksSUFBSSxDQUFDOztJQWlFakMsQ0FBQztJQS9EYSxrQ0FBUSxHQUFsQjtJQUNBLENBQUM7SUFFUyx5Q0FBZSxHQUF6QjtRQUVJLElBQUk7UUFD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LEdBc0c1RDtrQkF0R29CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2NjbGFzcyA9IGNjLl9kZWNvcmF0b3IuY2NjbGFzcztcclxuaW1wb3J0IHByb3BlcnR5ID0gY2MuX2RlY29yYXRvci5wcm9wZXJ0eTtcclxuaW1wb3J0IExhbmd1YWdlTWV0aG9kIGZyb20gXCIuLi8uLi9GcmFtZXdvcmsvR2xvYmFsTWV0aG9kL0xhbmd1YWdlTWV0aG9kXCI7XHJcbmltcG9ydCBBR2VuZXJpY1RlbXBsYXRlIGZyb20gXCIuLi8uLi9GcmFtZXdvcmsvVGVtcGxhdGUvQUdlbmVyaWNUZW1wbGF0ZVwiO1xyXG5pbXBvcnQgU29ja2V0U2V0dGluZyBmcm9tIFwiLi4vLi4vU29ja2V0L1NvY2tldFNldHRpbmdcIjtcclxuXHJcbi8qKlxyXG4gKiBAQXV0aG9yIFhJQU8tTEktUElOXHJcbiAqIEBEZXNjcmlwdGlvbiBUT0RPXHJcbiAqIEBEYXRlIDIwMjEtMDUtMTEg5LiL5Y2IIDAzOjE1XHJcbiAqIEBWZXJzaW9uIDEuMFxyXG4gKi9cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjb3JkUGFnZUxhYmVsIGV4dGVuZHMgQUdlbmVyaWNUZW1wbGF0ZSB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgZGF0ZVRleHRIOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBkYXRlVGV4dFY6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGJldE51bWJlclRleHRIOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBiZXROdW1iZXJUZXh0VjogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgYmV0dGluZ1RleHRIOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBiZXR0aW5nVGV4dFY6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHByb2ZpdEFuZExvc3NUZXh0SDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcHJvZml0QW5kTG9zc1RleHRWOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBkYXRlUmFuZ2VUZXh0SDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgZGF0ZVJhbmdlVGV4dFY6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIG9uZURheVRleHRIOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBvbmVEYXlUZXh0VjogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgZml2ZURheVRleHRIOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBmaXZlRGF5VGV4dFY6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHRlbkRheVRleHRIOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICB0ZW5EYXlUZXh0VjogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbG9hZGluZ1RleHRIOmNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxvYWRpbmdUZXh0VjpjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uQ3JlYXRlKCkge1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBsYW5ndWFnZVNldHRpbmcoKSB7XHJcblxyXG4gICAgICAgIC8v5pel5pyfXHJcbiAgICAgICAgdGhpcy5kYXRlVGV4dEguc3RyaW5nID0gU29ja2V0U2V0dGluZy50KFwiU185MDY5XCIpO1xyXG4gICAgICAgIHRoaXMuZGF0ZVRleHRWLnN0cmluZyA9IFNvY2tldFNldHRpbmcudChcIlNfOTA2OVwiKTtcclxuXHJcbiAgICAgICAgLy/ms6jllq7llq7omZ9cclxuICAgICAgICB0aGlzLmJldE51bWJlclRleHRILnN0cmluZyA9IFNvY2tldFNldHRpbmcudChcIlNfOTA3MFwiKTtcclxuICAgICAgICB0aGlzLmJldE51bWJlclRleHRWLnN0cmluZyA9IFNvY2tldFNldHRpbmcudChcIlNfOTA3MFwiKTtcclxuXHJcbiAgICAgICAgLy/mipXms6hcclxuICAgICAgICB0aGlzLmJldHRpbmdUZXh0SC5zdHJpbmcgPSBTb2NrZXRTZXR0aW5nLnQoXCJTXzkwNzFcIik7XHJcbiAgICAgICAgdGhpcy5iZXR0aW5nVGV4dFYuc3RyaW5nID0gU29ja2V0U2V0dGluZy50KFwiU185MDcxXCIpO1xyXG5cclxuICAgICAgICAvL+ebiOiZp1xyXG4gICAgICAgIHRoaXMucHJvZml0QW5kTG9zc1RleHRILnN0cmluZyA9IFNvY2tldFNldHRpbmcudChcIlNfOTA4MVwiKTtcclxuICAgICAgICB0aGlzLnByb2ZpdEFuZExvc3NUZXh0Vi5zdHJpbmcgPSBTb2NrZXRTZXR0aW5nLnQoXCJTXzkwODFcIik7XHJcblxyXG4gICAgICAgIC8v5pel5pyf56+E5ZyNXHJcbiAgICAgICAgdGhpcy5kYXRlUmFuZ2VUZXh0SC5zdHJpbmcgPSBTb2NrZXRTZXR0aW5nLnQoXCJTXzkwNjhcIik7XHJcbiAgICAgICAgdGhpcy5kYXRlUmFuZ2VUZXh0Vi5zdHJpbmcgPSBTb2NrZXRTZXR0aW5nLnQoXCJTXzkwNjhcIik7XHJcblxyXG4gICAgICAgIC8vMeaXpVxyXG4gICAgICAgIHRoaXMub25lRGF5VGV4dEguc3RyaW5nID0gU29ja2V0U2V0dGluZy50KFwiQl8xMDA5XCIpO1xyXG4gICAgICAgIHRoaXMub25lRGF5VGV4dFYuc3RyaW5nID0gU29ja2V0U2V0dGluZy50KFwiQl8xMDA5XCIpO1xyXG5cclxuICAgICAgICAvLzXml6VcclxuICAgICAgICB0aGlzLmZpdmVEYXlUZXh0SC5zdHJpbmcgPSBTb2NrZXRTZXR0aW5nLnQoXCJCXzEwMTBcIik7XHJcbiAgICAgICAgdGhpcy5maXZlRGF5VGV4dFYuc3RyaW5nID0gU29ja2V0U2V0dGluZy50KFwiQl8xMDEwXCIpO1xyXG5cclxuICAgICAgICAvLzEw5pelXHJcbiAgICAgICAgdGhpcy50ZW5EYXlUZXh0SC5zdHJpbmcgPSBTb2NrZXRTZXR0aW5nLnQoXCJCXzEwMTFcIik7XHJcbiAgICAgICAgdGhpcy50ZW5EYXlUZXh0Vi5zdHJpbmcgPSBTb2NrZXRTZXR0aW5nLnQoXCJCXzEwMTFcIik7XHJcblxyXG4gICAgICAgIC8v6LyJ5YWl5LitXHJcbiAgICAgICAgdGhpcy5sb2FkaW5nVGV4dEguc3RyaW5nID0gU29ja2V0U2V0dGluZy50KFwiTE9BRF8wMDBcIik7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nVGV4dFYuc3RyaW5nID0gU29ja2V0U2V0dGluZy50KFwiTE9BRF8wMDBcIik7XHJcblxyXG4gICAgICAgIExhbmd1YWdlTWV0aG9kLmluc3RhbmNlXHJcbiAgICAgICAgICAgIC51cGRhdGVMYWJlbFN0eWxlKHRoaXMuZGF0ZVRleHRIKVxyXG4gICAgICAgICAgICAudXBkYXRlTGFiZWxTdHlsZSh0aGlzLmRhdGVUZXh0VilcclxuICAgICAgICAgICAgLnVwZGF0ZUxhYmVsU3R5bGUodGhpcy5iZXROdW1iZXJUZXh0SClcclxuICAgICAgICAgICAgLnVwZGF0ZUxhYmVsU3R5bGUodGhpcy5iZXROdW1iZXJUZXh0VilcclxuICAgICAgICAgICAgLnVwZGF0ZUxhYmVsU3R5bGUodGhpcy5iZXR0aW5nVGV4dEgpXHJcbiAgICAgICAgICAgIC51cGRhdGVMYWJlbFN0eWxlKHRoaXMuYmV0dGluZ1RleHRWKVxyXG4gICAgICAgICAgICAudXBkYXRlTGFiZWxTdHlsZSh0aGlzLnByb2ZpdEFuZExvc3NUZXh0SClcclxuICAgICAgICAgICAgLnVwZGF0ZUxhYmVsU3R5bGUodGhpcy5wcm9maXRBbmRMb3NzVGV4dFYpXHJcbiAgICAgICAgICAgIC51cGRhdGVMYWJlbFN0eWxlKHRoaXMuZGF0ZVJhbmdlVGV4dEgpXHJcbiAgICAgICAgICAgIC51cGRhdGVMYWJlbFN0eWxlKHRoaXMuZGF0ZVJhbmdlVGV4dFYpXHJcbiAgICAgICAgICAgIC51cGRhdGVMYWJlbFN0eWxlKHRoaXMub25lRGF5VGV4dEgpXHJcbiAgICAgICAgICAgIC51cGRhdGVMYWJlbFN0eWxlKHRoaXMub25lRGF5VGV4dFYpXHJcbiAgICAgICAgICAgIC51cGRhdGVMYWJlbFN0eWxlKHRoaXMuZml2ZURheVRleHRIKVxyXG4gICAgICAgICAgICAudXBkYXRlTGFiZWxTdHlsZSh0aGlzLmZpdmVEYXlUZXh0VilcclxuICAgICAgICAgICAgLnVwZGF0ZUxhYmVsU3R5bGUodGhpcy50ZW5EYXlUZXh0SClcclxuICAgICAgICAgICAgLnVwZGF0ZUxhYmVsU3R5bGUodGhpcy50ZW5EYXlUZXh0VilcclxuICAgICAgICAgICAgLnVwZGF0ZUxhYmVsU3R5bGUodGhpcy5sb2FkaW5nVGV4dEgpXHJcbiAgICAgICAgICAgIC51cGRhdGVMYWJlbFN0eWxlKHRoaXMubG9hZGluZ1RleHRWKTtcclxuICAgIH1cclxuXHJcblxyXG59Il19