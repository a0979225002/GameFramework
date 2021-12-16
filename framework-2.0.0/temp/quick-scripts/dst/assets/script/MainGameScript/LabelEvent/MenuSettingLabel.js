
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/MainGameScript/LabelEvent/MenuSettingLabel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxNYWluR2FtZVNjcmlwdFxcTGFiZWxFdmVudFxcTWVudVNldHRpbmdMYWJlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4RUFBeUU7QUFDekUsOEVBQXdFO0FBQ3hFLDREQUFzRDtBQUVoRCxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE4QyxvQ0FBZ0I7SUFBOUQ7UUFBQSxxRUFrRkM7UUEvRVcsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFFNUIsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFFNUIsaUJBQVcsR0FBYSxJQUFJLENBQUM7UUFFN0IsaUJBQVcsR0FBYSxJQUFJLENBQUM7UUFFN0IscUJBQWUsR0FBYSxJQUFJLENBQUM7UUFFakMscUJBQWUsR0FBYSxJQUFJLENBQUM7UUFFakMsZUFBUyxHQUFhLElBQUksQ0FBQztRQUUzQixlQUFTLEdBQWEsSUFBSSxDQUFDO1FBRTNCLG1CQUFhLEdBQWEsSUFBSSxDQUFDO1FBRS9CLG1CQUFhLEdBQWEsSUFBSSxDQUFDO1FBRS9CLG1CQUFhLEdBQWEsSUFBSSxDQUFDO1FBRS9CLG1CQUFhLEdBQWEsSUFBSSxDQUFDO1FBRS9CLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFFM0IsZUFBUyxHQUFhLElBQUksQ0FBQzs7SUFxRHZDLENBQUM7SUFuRGEsbUNBQVEsR0FBbEI7SUFFQSxDQUFDO0lBRVMsMENBQWUsR0FBekI7UUFFSSxJQUFJO1FBQ0osSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsdUJBQWEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsdUJBQWEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFbkQsSUFBSTtRQUNKLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLHVCQUFhLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLHVCQUFhLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXBELE1BQU07UUFDTixJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyx1QkFBYSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyx1QkFBYSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV4RCxNQUFNO1FBQ04sSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsdUJBQWEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsdUJBQWEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFbEQsTUFBTTtRQUNOLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLHVCQUFhLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLHVCQUFhLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXRELE1BQU07UUFDTixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyx1QkFBYSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyx1QkFBYSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV0RCxNQUFNO1FBQ04sSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsdUJBQWEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsdUJBQWEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFbEQsd0JBQWMsQ0FBQyxRQUFRO2FBQ2xCLGdCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7YUFDakMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQzthQUNqQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ2xDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDbEMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQzthQUN0QyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO2FBQ3RDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDaEMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUNoQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO2FBQ3BDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7YUFDcEMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQzthQUNwQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO2FBQ3BDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDaEMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7O0lBN0VEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7c0RBQ0MsRUFBRSxvQkFBRixFQUFFLENBQUMsS0FBSzt3REFBUTtJQUVwQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3NEQUNDLEVBQUUsb0JBQUYsRUFBRSxDQUFDLEtBQUs7d0RBQVE7SUFFcEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztzREFDRSxFQUFFLG9CQUFGLEVBQUUsQ0FBQyxLQUFLO3lEQUFRO0lBRXJDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7c0RBQ0UsRUFBRSxvQkFBRixFQUFFLENBQUMsS0FBSzt5REFBUTtJQUVyQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3NEQUNNLEVBQUUsb0JBQUYsRUFBRSxDQUFDLEtBQUs7NkRBQVE7SUFFekM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztzREFDTSxFQUFFLG9CQUFGLEVBQUUsQ0FBQyxLQUFLOzZEQUFRO0lBRXpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7c0RBQ0EsRUFBRSxvQkFBRixFQUFFLENBQUMsS0FBSzt1REFBUTtJQUVuQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3NEQUNBLEVBQUUsb0JBQUYsRUFBRSxDQUFDLEtBQUs7dURBQVE7SUFFbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztzREFDSSxFQUFFLG9CQUFGLEVBQUUsQ0FBQyxLQUFLOzJEQUFRO0lBRXZDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7c0RBQ0ksRUFBRSxvQkFBRixFQUFFLENBQUMsS0FBSzsyREFBUTtJQUV2QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3NEQUNJLEVBQUUsb0JBQUYsRUFBRSxDQUFDLEtBQUs7MkRBQVE7SUFFdkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztzREFDSSxFQUFFLG9CQUFGLEVBQUUsQ0FBQyxLQUFLOzJEQUFRO0lBRXZDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7c0RBQ0EsRUFBRSxvQkFBRixFQUFFLENBQUMsS0FBSzt1REFBUTtJQUVuQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3NEQUNBLEVBQUUsb0JBQUYsRUFBRSxDQUFDLEtBQUs7dURBQVE7SUE3QmxCLGdCQUFnQjtRQURwQyxPQUFPO09BQ2EsZ0JBQWdCLENBa0ZwQztJQUFELHVCQUFDO0NBbEZELEFBa0ZDLENBbEY2QywwQkFBZ0IsR0FrRjdEO2tCQWxGb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExhbmd1YWdlTWV0aG9kIGZyb20gXCIuLi8uLi9GcmFtZXdvcmsvR2xvYmFsTWV0aG9kL0xhbmd1YWdlTWV0aG9kXCI7XHJcbmltcG9ydCBBR2VuZXJpY1RlbXBsYXRlIGZyb20gJy4uLy4uL0ZyYW1ld29yay9UZW1wbGF0ZS9BR2VuZXJpY1RlbXBsYXRlJ1xyXG5pbXBvcnQgU29ja2V0U2V0dGluZyBmcm9tICcuLi8uLi9Tb2NrZXQvU29ja2V0U2V0dGluZydcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudVNldHRpbmdMYWJlbCBleHRlbmRzIEFHZW5lcmljVGVtcGxhdGUge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHByaXZhdGUgbXVzaWNUZXh0SDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcHJpdmF0ZSBtdXNpY1RleHRWOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwcml2YXRlIGVmZmVjdFRleHRIOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwcml2YXRlIGVmZmVjdFRleHRWOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwcml2YXRlIGJldFNldHRpbmdUZXh0SDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcHJpdmF0ZSBiZXRTZXR0aW5nVGV4dFY6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHByaXZhdGUgbGluZVRleHRIOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwcml2YXRlIGxpbmVUZXh0VjogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcHJpdmF0ZSBiZXRNb25leVRleHRIOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwcml2YXRlIGJldE1vbmV5VGV4dFY6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHByaXZhdGUgYXV0b0ZyZWVUZXh0SDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcHJpdmF0ZSBhdXRvRnJlZVRleHRWOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwcml2YXRlIGF1dG9UZXh0SDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcHJpdmF0ZSBhdXRvVGV4dFY6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25DcmVhdGUoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBsYW5ndWFnZVNldHRpbmcoKSB7XHJcblxyXG4gICAgICAgIC8v6Z+z5qiCXHJcbiAgICAgICAgdGhpcy5tdXNpY1RleHRILnN0cmluZyA9IFNvY2tldFNldHRpbmcudChcIlNfMzAwNFwiKTtcclxuICAgICAgICB0aGlzLm11c2ljVGV4dFYuc3RyaW5nID0gU29ja2V0U2V0dGluZy50KFwiU18zMDA0XCIpO1xyXG5cclxuICAgICAgICAvL+mfs+aViFxyXG4gICAgICAgIHRoaXMuZWZmZWN0VGV4dEguc3RyaW5nID0gU29ja2V0U2V0dGluZy50KFwiU18zMDA1XCIpO1xyXG4gICAgICAgIHRoaXMuZWZmZWN0VGV4dFYuc3RyaW5nID0gU29ja2V0U2V0dGluZy50KFwiU18zMDA1XCIpO1xyXG5cclxuICAgICAgICAvL+aKvOazqOioreWumlxyXG4gICAgICAgIHRoaXMuYmV0U2V0dGluZ1RleHRILnN0cmluZyA9IFNvY2tldFNldHRpbmcudChcIlNfMjAwMVwiKTtcclxuICAgICAgICB0aGlzLmJldFNldHRpbmdUZXh0Vi5zdHJpbmcgPSBTb2NrZXRTZXR0aW5nLnQoXCJTXzIwMDFcIik7XHJcblxyXG4gICAgICAgIC8v5Z+656SO5oqV5rOoXHJcbiAgICAgICAgdGhpcy5saW5lVGV4dEguc3RyaW5nID0gU29ja2V0U2V0dGluZy50KFwiU18yMDAzXCIpO1xyXG4gICAgICAgIHRoaXMubGluZVRleHRWLnN0cmluZyA9IFNvY2tldFNldHRpbmcudChcIlNfMjAwM1wiKTtcclxuXHJcbiAgICAgICAgLy/mirzms6jph5HpoY1cclxuICAgICAgICB0aGlzLmJldE1vbmV5VGV4dEguc3RyaW5nID0gU29ja2V0U2V0dGluZy50KFwiU18yMDAyXCIpO1xyXG4gICAgICAgIHRoaXMuYmV0TW9uZXlUZXh0Vi5zdHJpbmcgPSBTb2NrZXRTZXR0aW5nLnQoXCJTXzIwMDJcIik7XHJcblxyXG4gICAgICAgIC8v5YWN6LK75peL6L2JXHJcbiAgICAgICAgdGhpcy5hdXRvRnJlZVRleHRILnN0cmluZyA9IFNvY2tldFNldHRpbmcudChcIlNfMTAwMlwiKTtcclxuICAgICAgICB0aGlzLmF1dG9GcmVlVGV4dFYuc3RyaW5nID0gU29ja2V0U2V0dGluZy50KFwiU18xMDAyXCIpO1xyXG5cclxuICAgICAgICAvL+aZrumAmuaXi+i9iVxyXG4gICAgICAgIHRoaXMuYXV0b1RleHRILnN0cmluZyA9IFNvY2tldFNldHRpbmcudChcIlNfMTAwMVwiKTtcclxuICAgICAgICB0aGlzLmF1dG9UZXh0Vi5zdHJpbmcgPSBTb2NrZXRTZXR0aW5nLnQoXCJTXzEwMDFcIik7XHJcblxyXG4gICAgICAgIExhbmd1YWdlTWV0aG9kLmluc3RhbmNlXHJcbiAgICAgICAgICAgIC51cGRhdGVMYWJlbFN0eWxlKHRoaXMubXVzaWNUZXh0SClcclxuICAgICAgICAgICAgLnVwZGF0ZUxhYmVsU3R5bGUodGhpcy5tdXNpY1RleHRWKVxyXG4gICAgICAgICAgICAudXBkYXRlTGFiZWxTdHlsZSh0aGlzLmVmZmVjdFRleHRIKVxyXG4gICAgICAgICAgICAudXBkYXRlTGFiZWxTdHlsZSh0aGlzLmVmZmVjdFRleHRWKVxyXG4gICAgICAgICAgICAudXBkYXRlTGFiZWxTdHlsZSh0aGlzLmJldFNldHRpbmdUZXh0SClcclxuICAgICAgICAgICAgLnVwZGF0ZUxhYmVsU3R5bGUodGhpcy5iZXRTZXR0aW5nVGV4dFYpXHJcbiAgICAgICAgICAgIC51cGRhdGVMYWJlbFN0eWxlKHRoaXMubGluZVRleHRIKVxyXG4gICAgICAgICAgICAudXBkYXRlTGFiZWxTdHlsZSh0aGlzLmxpbmVUZXh0VilcclxuICAgICAgICAgICAgLnVwZGF0ZUxhYmVsU3R5bGUodGhpcy5iZXRNb25leVRleHRIKVxyXG4gICAgICAgICAgICAudXBkYXRlTGFiZWxTdHlsZSh0aGlzLmJldE1vbmV5VGV4dFYpXHJcbiAgICAgICAgICAgIC51cGRhdGVMYWJlbFN0eWxlKHRoaXMuYXV0b0ZyZWVUZXh0SClcclxuICAgICAgICAgICAgLnVwZGF0ZUxhYmVsU3R5bGUodGhpcy5hdXRvRnJlZVRleHRWKVxyXG4gICAgICAgICAgICAudXBkYXRlTGFiZWxTdHlsZSh0aGlzLmF1dG9UZXh0SClcclxuICAgICAgICAgICAgLnVwZGF0ZUxhYmVsU3R5bGUodGhpcy5hdXRvVGV4dFYpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==