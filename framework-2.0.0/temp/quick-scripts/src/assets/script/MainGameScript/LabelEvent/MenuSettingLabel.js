"use strict";
cc._RF.push(module, '475bcckcmhFIoxEGHs2uU7i', 'MenuSettingLabel');
// script/MainGameScript/LabelEvent/MenuSettingLabel.ts

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
var LanguageMethod_1 = require("../../Framework/GlobalMethod/LanguageMethod");
var AGenericTemplate_1 = require("../../Framework/Template/AGenericTemplate");
var SocketSetting_1 = require("../../Socket/SocketSetting");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MenuSettingLabel = /** @class */ (function (_super) {
    __extends(MenuSettingLabel, _super);
    function MenuSettingLabel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.musicTextH = null;
        _this.musicTextV = null;
        _this.effectTextH = null;
        _this.effectTextV = null;
        _this.betSettingTextH = null;
        _this.betSettingTextV = null;
        _this.lineTextH = null;
        _this.lineTextV = null;
        _this.betMoneyTextH = null;
        _this.betMoneyTextV = null;
        _this.autoFreeTextH = null;
        _this.autoFreeTextV = null;
        _this.autoTextH = null;
        _this.autoTextV = null;
        return _this;
    }
    MenuSettingLabel.prototype.onCreate = function () {
    };
    MenuSettingLabel.prototype.languageSetting = function () {
        //音樂
        this.musicTextH.string = SocketSetting_1.default.t("S_3004");
        this.musicTextV.string = SocketSetting_1.default.t("S_3004");
        //音效
        this.effectTextH.string = SocketSetting_1.default.t("S_3005");
        this.effectTextV.string = SocketSetting_1.default.t("S_3005");
        //押注設定
        this.betSettingTextH.string = SocketSetting_1.default.t("S_2001");
        this.betSettingTextV.string = SocketSetting_1.default.t("S_2001");
        //基礎投注
        this.lineTextH.string = SocketSetting_1.default.t("S_2003");
        this.lineTextV.string = SocketSetting_1.default.t("S_2003");
        //押注金額
        this.betMoneyTextH.string = SocketSetting_1.default.t("S_2002");
        this.betMoneyTextV.string = SocketSetting_1.default.t("S_2002");
        //免費旋轉
        this.autoFreeTextH.string = SocketSetting_1.default.t("S_1002");
        this.autoFreeTextV.string = SocketSetting_1.default.t("S_1002");
        //普通旋轉
        this.autoTextH.string = SocketSetting_1.default.t("S_1001");
        this.autoTextV.string = SocketSetting_1.default.t("S_1001");
        LanguageMethod_1.default.instance
            .updateLabelStyle(this.musicTextH)
            .updateLabelStyle(this.musicTextV)
            .updateLabelStyle(this.effectTextH)
            .updateLabelStyle(this.effectTextV)
            .updateLabelStyle(this.betSettingTextH)
            .updateLabelStyle(this.betSettingTextV)
            .updateLabelStyle(this.lineTextH)
            .updateLabelStyle(this.lineTextV)
            .updateLabelStyle(this.betMoneyTextH)
            .updateLabelStyle(this.betMoneyTextV)
            .updateLabelStyle(this.autoFreeTextH)
            .updateLabelStyle(this.autoFreeTextV)
            .updateLabelStyle(this.autoTextH)
            .updateLabelStyle(this.autoTextV);
    };
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_b = typeof cc !== "undefined" && cc.Label) === "function" ? _b : Object)
    ], MenuSettingLabel.prototype, "musicTextH", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_c = typeof cc !== "undefined" && cc.Label) === "function" ? _c : Object)
    ], MenuSettingLabel.prototype, "musicTextV", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_d = typeof cc !== "undefined" && cc.Label) === "function" ? _d : Object)
    ], MenuSettingLabel.prototype, "effectTextH", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_e = typeof cc !== "undefined" && cc.Label) === "function" ? _e : Object)
    ], MenuSettingLabel.prototype, "effectTextV", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_f = typeof cc !== "undefined" && cc.Label) === "function" ? _f : Object)
    ], MenuSettingLabel.prototype, "betSettingTextH", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_g = typeof cc !== "undefined" && cc.Label) === "function" ? _g : Object)
    ], MenuSettingLabel.prototype, "betSettingTextV", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_h = typeof cc !== "undefined" && cc.Label) === "function" ? _h : Object)
    ], MenuSettingLabel.prototype, "lineTextH", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_j = typeof cc !== "undefined" && cc.Label) === "function" ? _j : Object)
    ], MenuSettingLabel.prototype, "lineTextV", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_k = typeof cc !== "undefined" && cc.Label) === "function" ? _k : Object)
    ], MenuSettingLabel.prototype, "betMoneyTextH", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_l = typeof cc !== "undefined" && cc.Label) === "function" ? _l : Object)
    ], MenuSettingLabel.prototype, "betMoneyTextV", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_m = typeof cc !== "undefined" && cc.Label) === "function" ? _m : Object)
    ], MenuSettingLabel.prototype, "autoFreeTextH", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_o = typeof cc !== "undefined" && cc.Label) === "function" ? _o : Object)
    ], MenuSettingLabel.prototype, "autoFreeTextV", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_p = typeof cc !== "undefined" && cc.Label) === "function" ? _p : Object)
    ], MenuSettingLabel.prototype, "autoTextH", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_q = typeof cc !== "undefined" && cc.Label) === "function" ? _q : Object)
    ], MenuSettingLabel.prototype, "autoTextV", void 0);
    MenuSettingLabel = __decorate([
        ccclass
    ], MenuSettingLabel);
    return MenuSettingLabel;
}(AGenericTemplate_1.default));
exports.default = MenuSettingLabel;

cc._RF.pop();