"use strict";
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