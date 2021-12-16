
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/MainGameScript/LabelEvent/DescriptionPageLabel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '272adwLOvpKkZVRlErlh7Rs', 'DescriptionPageLabel');
// script/MainGameScript/LabelEvent/DescriptionPageLabel.ts

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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var LanguageMethod_1 = require("../../Framework/GlobalMethod/LanguageMethod");
var LoadResManager_1 = require("../../Framework/LoadResources/LoadResManager");
var AGenericTemplate_1 = require("../../Framework/Template/AGenericTemplate");
var ResponseType_1 = require("../../Framework/WebResponse/Enum/ResponseType");
var WebResponseManager_1 = require("../../Framework/WebResponse/WebResponseManager");
var SocketSetting_1 = require("../../Socket/SocketSetting");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DescriptionPageLabel = /** @class */ (function (_super) {
    __extends(DescriptionPageLabel, _super);
    function DescriptionPageLabel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.page1FreeIconH = null;
        _this.page1FreeIconV = null;
        _this.page1WildIconH = null;
        _this.page1WildIconV = null;
        _this.page1FreeTextH = null;
        _this.page1FreeTextV = null;
        _this.page1WildTextH = null;
        _this.page1WildTextV = null;
        _this.page2GridIconH = [];
        _this.page2GridIconV = [];
        _this.page2GridIconPointH = [];
        _this.page2GridIconPointV = [];
        _this.page3LineTextV = null;
        _this.page3WinDescriptionTextH = null;
        _this.page3WinDescriptionTextV = null;
        _this.page3WinTextH = null;
        _this.page3WinTextV = null;
        _this.page3NotWinTextH = null;
        _this.page3NotWinTextV = null;
        _this.page3WinningCalculationH = null;
        _this.page3WinningCalculationV = null;
        _this.page3WinningIconH = null;
        _this.page3WinningIconV = null;
        _this.page3WinPointH = [];
        _this.page3WinPointV = [];
        _this.page3ExampleTextH = null;
        _this.page3WinOddsTextV = null;
        _this.page3ExampleTextV = null;
        _this.page3ExampleText2V = null;
        _this.page3ExampleAnswerH = null;
        _this.page3ExampleAnswerV = null;
        return _this;
    }
    DescriptionPageLabel.prototype.onCreate = function () {
        this.tableInfo =
            WebResponseManager_1.WebResponseManager
                .instance()
                .getResult(ResponseType_1.ResponseType.TABLE_INFO);
        this.gridImg = LoadResManager_1.default.instance.imgRes.get("gridImg");
        this.payTable = this.tableInfo.PayTable;
        this.initializePage1();
        this.initializePage2();
        this.initializePage3();
    };
    DescriptionPageLabel.prototype.initializePage1 = function () {
        this.page1FreeIconH.spriteFrame = this.gridImg.get("10");
        this.page1FreeIconV.spriteFrame = this.gridImg.get("10");
        this.page1WildIconH.spriteFrame = this.gridImg.get("9");
        this.page1WildIconV.spriteFrame = this.gridImg.get("9");
    };
    DescriptionPageLabel.prototype.initializePage2 = function () {
        this.updatePage2GridImg();
        this.updatePage2GridPoint();
    };
    DescriptionPageLabel.prototype.initializePage3 = function () {
        this.updatePage3Img();
        this.updatePage3Point();
    };
    DescriptionPageLabel.prototype.updatePage2GridImg = function () {
        var gridIndex = 0;
        var start = this.page2GridIconH.length - 1;
        for (var i = start; i >= 0; i--) {
            this.page2GridIconH[gridIndex].spriteFrame = this.gridImg.get(String(i));
            this.page2GridIconV[gridIndex].spriteFrame = this.gridImg.get(String(i));
            gridIndex++;
        }
    };
    DescriptionPageLabel.prototype.updatePage2GridPoint = function () {
        var e_1, _a;
        var start = this.page2GridIconPointH.length - 1;
        var gridIndex = 0;
        for (var i = start; i >= 0; i--) {
            var points = this.payTable[i];
            var pointsToValues = Object.values(points);
            var nodeIndex = 2;
            try {
                for (var pointsToValues_1 = (e_1 = void 0, __values(pointsToValues)), pointsToValues_1_1 = pointsToValues_1.next(); !pointsToValues_1_1.done; pointsToValues_1_1 = pointsToValues_1.next()) {
                    var point = pointsToValues_1_1.value;
                    this.page2GridIconPointH[gridIndex]
                        .children[nodeIndex].getComponent(cc.Label).string = point;
                    this.page2GridIconPointV[gridIndex]
                        .children[nodeIndex].getComponent(cc.Label).string = point;
                    nodeIndex--;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (pointsToValues_1_1 && !pointsToValues_1_1.done && (_a = pointsToValues_1.return)) _a.call(pointsToValues_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            gridIndex++;
        }
    };
    DescriptionPageLabel.prototype.updatePage3Img = function () {
        this.page3WinningIconH.spriteFrame = this.gridImg.get("0");
        this.page3WinningIconV.spriteFrame = this.gridImg.get("0");
    };
    DescriptionPageLabel.prototype.updatePage3Point = function () {
        var points = this.payTable[0];
        var pointIndex = 3;
        var start = 3;
        var end = start + 3;
        for (start; start < end; start++) {
            pointIndex--;
            this.page3WinPointH[pointIndex].string = points[start];
            this.page3WinPointV[pointIndex].string = points[start];
        }
    };
    DescriptionPageLabel.prototype.languageSetting = function () {
        this.page1Language();
        this.page3Language();
    };
    DescriptionPageLabel.prototype.page1Language = function () {
        //免費解說
        this.page1FreeTextH.string = SocketSetting_1.default.t("4_101");
        this.page1FreeTextV.string = SocketSetting_1.default.t("4_101");
        //百搭解說
        this.page1WildTextH.string = SocketSetting_1.default.t("4_102");
        this.page1WildTextV.string = SocketSetting_1.default.t("4_102");
        LanguageMethod_1.default.instance
            .updateLabelStyle(this.page1FreeTextH)
            .updateLabelStyle(this.page1FreeTextV)
            .updateLabelStyle(this.page1WildTextH)
            .updateLabelStyle(this.page1WildTextV);
    };
    DescriptionPageLabel.prototype.page3Language = function () {
        //路
        this.page3LineTextV.string = SocketSetting_1.default.t("4_008");
        //中獎路金額按照左至右派發
        this.page3WinDescriptionTextH.string = SocketSetting_1.default.t("243_002");
        this.page3WinDescriptionTextV.string = SocketSetting_1.default.t("243_002");
        //得獎
        this.page3WinTextH.string = SocketSetting_1.default.t("243_003");
        this.page3WinTextV.string = SocketSetting_1.default.t("243_003");
        //未得獎
        this.page3NotWinTextH.string = SocketSetting_1.default.t("243_004");
        this.page3NotWinTextV.string = SocketSetting_1.default.t("243_004");
        //中獎金額計算方式
        this.page3WinningCalculationH.string = SocketSetting_1.default.t("243_005");
        this.page3WinningCalculationV.string = SocketSetting_1.default.t("243_005");
        //本例中的贏獎
        this.page3ExampleTextH.string = SocketSetting_1.default.t("243_008");
        this.page3ExampleTextV.string = SocketSetting_1.default.t("243_008");
        //參考以上例子,本例中的贏獎:
        this.page3ExampleText2V.string = SocketSetting_1.default.t("243_010");
        //例子計算
        var exampleAnswer = 3 * 2 * this.payTable[0][3];
        this.page3ExampleAnswerH.string = "1 x 3 x 2 x " + this.payTable[0][3] + " = " + exampleAnswer;
        this.page3ExampleAnswerV.string = "1 x 3 x 2 x " + this.payTable[0][3] + " = " + exampleAnswer;
        //獲勝符號的賠付
        this.page3WinOddsTextV.string = SocketSetting_1.default.t("243_007");
        LanguageMethod_1.default.instance
            .updateLabelStyle(this.page3LineTextV)
            .updateLabelStyle(this.page3WinDescriptionTextH)
            .updateLabelStyle(this.page3WinDescriptionTextV)
            .updateLabelStyle(this.page3WinTextH)
            .updateLabelStyle(this.page3WinTextV)
            .updateLabelStyle(this.page3NotWinTextH)
            .updateLabelStyle(this.page3NotWinTextV)
            .updateLabelStyle(this.page3WinningCalculationH)
            .updateLabelStyle(this.page3WinningCalculationV)
            .updateLabelStyle(this.page3ExampleTextH)
            .updateLabelStyle(this.page3ExampleTextV)
            .updateLabelStyle(this.page3ExampleText2V)
            .updateLabelStyle(this.page3ExampleAnswerH)
            .updateLabelStyle(this.page3ExampleAnswerV)
            .updateLabelStyle(this.page3WinOddsTextV);
    };
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1;
    __decorate([
        property(cc.Sprite),
        __metadata("design:type", typeof (_b = typeof cc !== "undefined" && cc.Sprite) === "function" ? _b : Object)
    ], DescriptionPageLabel.prototype, "page1FreeIconH", void 0);
    __decorate([
        property(cc.Sprite),
        __metadata("design:type", typeof (_c = typeof cc !== "undefined" && cc.Sprite) === "function" ? _c : Object)
    ], DescriptionPageLabel.prototype, "page1FreeIconV", void 0);
    __decorate([
        property(cc.Sprite),
        __metadata("design:type", typeof (_d = typeof cc !== "undefined" && cc.Sprite) === "function" ? _d : Object)
    ], DescriptionPageLabel.prototype, "page1WildIconH", void 0);
    __decorate([
        property(cc.Sprite),
        __metadata("design:type", typeof (_e = typeof cc !== "undefined" && cc.Sprite) === "function" ? _e : Object)
    ], DescriptionPageLabel.prototype, "page1WildIconV", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_f = typeof cc !== "undefined" && cc.Label) === "function" ? _f : Object)
    ], DescriptionPageLabel.prototype, "page1FreeTextH", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_g = typeof cc !== "undefined" && cc.Label) === "function" ? _g : Object)
    ], DescriptionPageLabel.prototype, "page1FreeTextV", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_h = typeof cc !== "undefined" && cc.Label) === "function" ? _h : Object)
    ], DescriptionPageLabel.prototype, "page1WildTextH", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_j = typeof cc !== "undefined" && cc.Label) === "function" ? _j : Object)
    ], DescriptionPageLabel.prototype, "page1WildTextV", void 0);
    __decorate([
        property(cc.Sprite),
        __metadata("design:type", Array)
    ], DescriptionPageLabel.prototype, "page2GridIconH", void 0);
    __decorate([
        property(cc.Sprite),
        __metadata("design:type", Array)
    ], DescriptionPageLabel.prototype, "page2GridIconV", void 0);
    __decorate([
        property(cc.Node),
        __metadata("design:type", Array)
    ], DescriptionPageLabel.prototype, "page2GridIconPointH", void 0);
    __decorate([
        property(cc.Node),
        __metadata("design:type", Array)
    ], DescriptionPageLabel.prototype, "page2GridIconPointV", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_k = typeof cc !== "undefined" && cc.Label) === "function" ? _k : Object)
    ], DescriptionPageLabel.prototype, "page3LineTextV", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_l = typeof cc !== "undefined" && cc.Label) === "function" ? _l : Object)
    ], DescriptionPageLabel.prototype, "page3WinDescriptionTextH", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_m = typeof cc !== "undefined" && cc.Label) === "function" ? _m : Object)
    ], DescriptionPageLabel.prototype, "page3WinDescriptionTextV", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_o = typeof cc !== "undefined" && cc.Label) === "function" ? _o : Object)
    ], DescriptionPageLabel.prototype, "page3WinTextH", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_p = typeof cc !== "undefined" && cc.Label) === "function" ? _p : Object)
    ], DescriptionPageLabel.prototype, "page3WinTextV", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_q = typeof cc !== "undefined" && cc.Label) === "function" ? _q : Object)
    ], DescriptionPageLabel.prototype, "page3NotWinTextH", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_r = typeof cc !== "undefined" && cc.Label) === "function" ? _r : Object)
    ], DescriptionPageLabel.prototype, "page3NotWinTextV", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_s = typeof cc !== "undefined" && cc.Label) === "function" ? _s : Object)
    ], DescriptionPageLabel.prototype, "page3WinningCalculationH", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_t = typeof cc !== "undefined" && cc.Label) === "function" ? _t : Object)
    ], DescriptionPageLabel.prototype, "page3WinningCalculationV", void 0);
    __decorate([
        property(cc.Sprite),
        __metadata("design:type", typeof (_u = typeof cc !== "undefined" && cc.Sprite) === "function" ? _u : Object)
    ], DescriptionPageLabel.prototype, "page3WinningIconH", void 0);
    __decorate([
        property(cc.Sprite),
        __metadata("design:type", typeof (_v = typeof cc !== "undefined" && cc.Sprite) === "function" ? _v : Object)
    ], DescriptionPageLabel.prototype, "page3WinningIconV", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", Array)
    ], DescriptionPageLabel.prototype, "page3WinPointH", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", Array)
    ], DescriptionPageLabel.prototype, "page3WinPointV", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_w = typeof cc !== "undefined" && cc.Label) === "function" ? _w : Object)
    ], DescriptionPageLabel.prototype, "page3ExampleTextH", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_x = typeof cc !== "undefined" && cc.Label) === "function" ? _x : Object)
    ], DescriptionPageLabel.prototype, "page3WinOddsTextV", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_y = typeof cc !== "undefined" && cc.Label) === "function" ? _y : Object)
    ], DescriptionPageLabel.prototype, "page3ExampleTextV", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_z = typeof cc !== "undefined" && cc.Label) === "function" ? _z : Object)
    ], DescriptionPageLabel.prototype, "page3ExampleText2V", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_0 = typeof cc !== "undefined" && cc.Label) === "function" ? _0 : Object)
    ], DescriptionPageLabel.prototype, "page3ExampleAnswerH", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_1 = typeof cc !== "undefined" && cc.Label) === "function" ? _1 : Object)
    ], DescriptionPageLabel.prototype, "page3ExampleAnswerV", void 0);
    DescriptionPageLabel = __decorate([
        ccclass
    ], DescriptionPageLabel);
    return DescriptionPageLabel;
}(AGenericTemplate_1.default));
exports.default = DescriptionPageLabel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxNYWluR2FtZVNjcmlwdFxcTGFiZWxFdmVudFxcRGVzY3JpcHRpb25QYWdlTGFiZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4RUFBeUU7QUFDekUsK0VBQXlFO0FBQ3pFLDhFQUF3RTtBQUN4RSw4RUFBMkU7QUFFM0UscUZBQWtGO0FBQ2xGLDREQUFzRDtBQUVoRCxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFrRCx3Q0FBZ0I7SUFBbEU7UUFBQSxxRUErTkM7UUE1Tlcsb0JBQWMsR0FBYyxJQUFJLENBQUM7UUFFakMsb0JBQWMsR0FBYyxJQUFJLENBQUM7UUFFakMsb0JBQWMsR0FBYyxJQUFJLENBQUM7UUFFakMsb0JBQWMsR0FBYyxJQUFJLENBQUM7UUFFakMsb0JBQWMsR0FBYSxJQUFJLENBQUM7UUFFaEMsb0JBQWMsR0FBYSxJQUFJLENBQUM7UUFFaEMsb0JBQWMsR0FBYSxJQUFJLENBQUM7UUFFaEMsb0JBQWMsR0FBYSxJQUFJLENBQUM7UUFFaEMsb0JBQWMsR0FBZ0IsRUFBRSxDQUFDO1FBRWpDLG9CQUFjLEdBQWdCLEVBQUUsQ0FBQztRQUVqQyx5QkFBbUIsR0FBYyxFQUFFLENBQUM7UUFFcEMseUJBQW1CLEdBQWMsRUFBRSxDQUFDO1FBRXBDLG9CQUFjLEdBQWEsSUFBSSxDQUFDO1FBRWhDLDhCQUF3QixHQUFhLElBQUksQ0FBQztRQUUxQyw4QkFBd0IsR0FBYSxJQUFJLENBQUM7UUFFMUMsbUJBQWEsR0FBYSxJQUFJLENBQUM7UUFFL0IsbUJBQWEsR0FBYSxJQUFJLENBQUM7UUFFL0Isc0JBQWdCLEdBQWEsSUFBSSxDQUFDO1FBRWxDLHNCQUFnQixHQUFhLElBQUksQ0FBQztRQUVsQyw4QkFBd0IsR0FBYSxJQUFJLENBQUM7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QVE7SUFFNUM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztzREFDTyxFQUFFLG9CQUFGLEVBQUUsQ0FBQyxNQUFNO21FQUFRO0lBRTVDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7O2dFQUNxQjtJQUV4QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOztnRUFDcUI7SUFFeEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztzREFDUSxFQUFFLG9CQUFGLEVBQUUsQ0FBQyxLQUFLO21FQUFRO0lBRTNDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7c0RBQ1EsRUFBRSxvQkFBRixFQUFFLENBQUMsS0FBSzttRUFBUTtJQUUzQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3NEQUNRLEVBQUUsb0JBQUYsRUFBRSxDQUFDLEtBQUs7bUVBQVE7SUFFM0M7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztzREFDUyxFQUFFLG9CQUFGLEVBQUUsQ0FBQyxLQUFLO29FQUFRO0lBRTVDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7c0RBQ1UsRUFBRSxvQkFBRixFQUFFLENBQUMsS0FBSztxRUFBUTtJQUU3QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3NEQUNVLEVBQUUsb0JBQUYsRUFBRSxDQUFDLEtBQUs7cUVBQVE7SUEvRDVCLG9CQUFvQjtRQUR4QyxPQUFPO09BQ2Esb0JBQW9CLENBK054QztJQUFELDJCQUFDO0NBL05ELEFBK05DLENBL05pRCwwQkFBZ0IsR0ErTmpFO2tCQS9Ob0Isb0JBQW9CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExhbmd1YWdlTWV0aG9kIGZyb20gXCIuLi8uLi9GcmFtZXdvcmsvR2xvYmFsTWV0aG9kL0xhbmd1YWdlTWV0aG9kXCI7XHJcbmltcG9ydCBMb2FkUmVzTWFuYWdlciBmcm9tICcuLi8uLi9GcmFtZXdvcmsvTG9hZFJlc291cmNlcy9Mb2FkUmVzTWFuYWdlcidcclxuaW1wb3J0IEFHZW5lcmljVGVtcGxhdGUgZnJvbSAnLi4vLi4vRnJhbWV3b3JrL1RlbXBsYXRlL0FHZW5lcmljVGVtcGxhdGUnXHJcbmltcG9ydCB7UmVzcG9uc2VUeXBlfSBmcm9tIFwiLi4vLi4vRnJhbWV3b3JrL1dlYlJlc3BvbnNlL0VudW0vUmVzcG9uc2VUeXBlXCI7XHJcbmltcG9ydCBOb0xpbmVUYWJsZUluZm8gZnJvbSBcIi4uLy4uL0ZyYW1ld29yay9XZWJSZXNwb25zZS9TZXZlckRhdGFNb2RlbC9UYWJsZUluZm8vTm9MaW5lVGFibGVJbmZvXCI7XHJcbmltcG9ydCB7V2ViUmVzcG9uc2VNYW5hZ2VyfSBmcm9tIFwiLi4vLi4vRnJhbWV3b3JrL1dlYlJlc3BvbnNlL1dlYlJlc3BvbnNlTWFuYWdlclwiO1xyXG5pbXBvcnQgU29ja2V0U2V0dGluZyBmcm9tICcuLi8uLi9Tb2NrZXQvU29ja2V0U2V0dGluZydcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVzY3JpcHRpb25QYWdlTGFiZWwgZXh0ZW5kcyBBR2VuZXJpY1RlbXBsYXRlIHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgcHJpdmF0ZSBwYWdlMUZyZWVJY29uSDogY2MuU3ByaXRlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBwcml2YXRlIHBhZ2UxRnJlZUljb25WOiBjYy5TcHJpdGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIHByaXZhdGUgcGFnZTFXaWxkSWNvbkg6IGNjLlNwcml0ZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgcHJpdmF0ZSBwYWdlMVdpbGRJY29uVjogY2MuU3ByaXRlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHByaXZhdGUgcGFnZTFGcmVlVGV4dEg6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHByaXZhdGUgcGFnZTFGcmVlVGV4dFY6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHByaXZhdGUgcGFnZTFXaWxkVGV4dEg6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHByaXZhdGUgcGFnZTFXaWxkVGV4dFY6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBwcml2YXRlIHBhZ2UyR3JpZEljb25IOiBjYy5TcHJpdGVbXSA9IFtdO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIHByaXZhdGUgcGFnZTJHcmlkSWNvblY6IGNjLlNwcml0ZVtdID0gW107XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgcGFnZTJHcmlkSWNvblBvaW50SDogY2MuTm9kZVtdID0gW107XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgcGFnZTJHcmlkSWNvblBvaW50VjogY2MuTm9kZVtdID0gW107XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwcml2YXRlIHBhZ2UzTGluZVRleHRWOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwcml2YXRlIHBhZ2UzV2luRGVzY3JpcHRpb25UZXh0SDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcHJpdmF0ZSBwYWdlM1dpbkRlc2NyaXB0aW9uVGV4dFY6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHByaXZhdGUgcGFnZTNXaW5UZXh0SDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcHJpdmF0ZSBwYWdlM1dpblRleHRWOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwcml2YXRlIHBhZ2UzTm90V2luVGV4dEg6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHByaXZhdGUgcGFnZTNOb3RXaW5UZXh0VjogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcHJpdmF0ZSBwYWdlM1dpbm5pbmdDYWxjdWxhdGlvbkg6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHByaXZhdGUgcGFnZTNXaW5uaW5nQ2FsY3VsYXRpb25WOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgcHJpdmF0ZSBwYWdlM1dpbm5pbmdJY29uSDogY2MuU3ByaXRlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBwcml2YXRlIHBhZ2UzV2lubmluZ0ljb25WOiBjYy5TcHJpdGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcHJpdmF0ZSBwYWdlM1dpblBvaW50SDogY2MuTGFiZWxbXSA9IFtdO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcHJpdmF0ZSBwYWdlM1dpblBvaW50VjogY2MuTGFiZWxbXSA9IFtdO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcHJpdmF0ZSBwYWdlM0V4YW1wbGVUZXh0SDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcHJpdmF0ZSBwYWdlM1dpbk9kZHNUZXh0VjogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcHJpdmF0ZSBwYWdlM0V4YW1wbGVUZXh0VjogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcHJpdmF0ZSBwYWdlM0V4YW1wbGVUZXh0MlY6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHByaXZhdGUgcGFnZTNFeGFtcGxlQW5zd2VySDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcHJpdmF0ZSBwYWdlM0V4YW1wbGVBbnN3ZXJWOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBncmlkSW1nOiBNYXA8c3RyaW5nLCBjYy5TcHJpdGVGcmFtZT47XHJcbiAgICBwcml2YXRlIHBheVRhYmxlOiBvYmplY3Q7XHJcbiAgICBwcm90ZWN0ZWQgdGFibGVJbmZvOiBOb0xpbmVUYWJsZUluZm87XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uQ3JlYXRlKCkge1xyXG4gICAgICAgIHRoaXMudGFibGVJbmZvID1cclxuICAgICAgICAgICAgV2ViUmVzcG9uc2VNYW5hZ2VyXHJcbiAgICAgICAgICAgICAgICAuaW5zdGFuY2U8Tm9MaW5lVGFibGVJbmZvPigpXHJcbiAgICAgICAgICAgICAgICAuZ2V0UmVzdWx0KFJlc3BvbnNlVHlwZS5UQUJMRV9JTkZPKTtcclxuXHJcbiAgICAgICAgdGhpcy5ncmlkSW1nID0gTG9hZFJlc01hbmFnZXIuaW5zdGFuY2UuaW1nUmVzLmdldChcImdyaWRJbWdcIik7XHJcbiAgICAgICAgdGhpcy5wYXlUYWJsZSA9IHRoaXMudGFibGVJbmZvLlBheVRhYmxlO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZVBhZ2UxKCk7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplUGFnZTIoKTtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemVQYWdlMygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdGlhbGl6ZVBhZ2UxKCkge1xyXG5cclxuICAgICAgICB0aGlzLnBhZ2UxRnJlZUljb25ILnNwcml0ZUZyYW1lID0gdGhpcy5ncmlkSW1nLmdldChcIjEwXCIpO1xyXG4gICAgICAgIHRoaXMucGFnZTFGcmVlSWNvblYuc3ByaXRlRnJhbWUgPSB0aGlzLmdyaWRJbWcuZ2V0KFwiMTBcIik7XHJcbiAgICAgICAgdGhpcy5wYWdlMVdpbGRJY29uSC5zcHJpdGVGcmFtZSA9IHRoaXMuZ3JpZEltZy5nZXQoXCI5XCIpO1xyXG4gICAgICAgIHRoaXMucGFnZTFXaWxkSWNvblYuc3ByaXRlRnJhbWUgPSB0aGlzLmdyaWRJbWcuZ2V0KFwiOVwiKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0aWFsaXplUGFnZTIoKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVQYWdlMkdyaWRJbWcoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVBhZ2UyR3JpZFBvaW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0aWFsaXplUGFnZTMoKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVQYWdlM0ltZygpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUGFnZTNQb2ludCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlUGFnZTJHcmlkSW1nKCkge1xyXG4gICAgICAgIGxldCBncmlkSW5kZXggPSAwO1xyXG4gICAgICAgIGxldCBzdGFydCA9IHRoaXMucGFnZTJHcmlkSWNvbkgubGVuZ3RoIC0gMTtcclxuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZTJHcmlkSWNvbkhbZ3JpZEluZGV4XS5zcHJpdGVGcmFtZSA9IHRoaXMuZ3JpZEltZy5nZXQoU3RyaW5nKGkpKTtcclxuICAgICAgICAgICAgdGhpcy5wYWdlMkdyaWRJY29uVltncmlkSW5kZXhdLnNwcml0ZUZyYW1lID0gdGhpcy5ncmlkSW1nLmdldChTdHJpbmcoaSkpO1xyXG4gICAgICAgICAgICBncmlkSW5kZXgrKztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVQYWdlMkdyaWRQb2ludCgpIHtcclxuICAgICAgICBsZXQgc3RhcnQgPSB0aGlzLnBhZ2UyR3JpZEljb25Qb2ludEgubGVuZ3RoIC0gMTtcclxuICAgICAgICBsZXQgZ3JpZEluZGV4ID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIGxldCBwb2ludHM6IE1hcDxudW1iZXIsIG51bWJlcj4gPSB0aGlzLnBheVRhYmxlW2ldO1xyXG4gICAgICAgICAgICBsZXQgcG9pbnRzVG9WYWx1ZXMgPSBPYmplY3QudmFsdWVzKHBvaW50cyk7XHJcbiAgICAgICAgICAgIGxldCBub2RlSW5kZXggPSAyO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBwb2ludCBvZiBwb2ludHNUb1ZhbHVlcykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlMkdyaWRJY29uUG9pbnRIW2dyaWRJbmRleF1cclxuICAgICAgICAgICAgICAgICAgICAuY2hpbGRyZW5bbm9kZUluZGV4XS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHBvaW50O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlMkdyaWRJY29uUG9pbnRWW2dyaWRJbmRleF1cclxuICAgICAgICAgICAgICAgICAgICAuY2hpbGRyZW5bbm9kZUluZGV4XS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHBvaW50O1xyXG4gICAgICAgICAgICAgICAgbm9kZUluZGV4LS07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZ3JpZEluZGV4Kys7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlUGFnZTNJbWcoKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlM1dpbm5pbmdJY29uSC5zcHJpdGVGcmFtZSA9IHRoaXMuZ3JpZEltZy5nZXQoXCIwXCIpO1xyXG4gICAgICAgIHRoaXMucGFnZTNXaW5uaW5nSWNvblYuc3ByaXRlRnJhbWUgPSB0aGlzLmdyaWRJbWcuZ2V0KFwiMFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZVBhZ2UzUG9pbnQoKSB7XHJcblxyXG4gICAgICAgIGxldCBwb2ludHMgPSB0aGlzLnBheVRhYmxlWzBdO1xyXG5cclxuICAgICAgICBsZXQgcG9pbnRJbmRleCA9IDM7XHJcbiAgICAgICAgbGV0IHN0YXJ0ID0gMztcclxuICAgICAgICBsZXQgZW5kID0gc3RhcnQgKyAzO1xyXG4gICAgICAgIGZvciAoc3RhcnQ7IHN0YXJ0IDwgZW5kOyBzdGFydCsrKSB7XHJcbiAgICAgICAgICAgIHBvaW50SW5kZXgtLTtcclxuICAgICAgICAgICAgdGhpcy5wYWdlM1dpblBvaW50SFtwb2ludEluZGV4XS5zdHJpbmcgPSBwb2ludHNbc3RhcnRdO1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2UzV2luUG9pbnRWW3BvaW50SW5kZXhdLnN0cmluZyA9IHBvaW50c1tzdGFydF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBsYW5ndWFnZVNldHRpbmcoKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlMUxhbmd1YWdlKCk7XHJcbiAgICAgICAgdGhpcy5wYWdlM0xhbmd1YWdlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwYWdlMUxhbmd1YWdlKCkge1xyXG5cclxuICAgICAgICAvL+WFjeiyu+ino+iqqlxyXG4gICAgICAgIHRoaXMucGFnZTFGcmVlVGV4dEguc3RyaW5nID0gU29ja2V0U2V0dGluZy50KFwiNF8xMDFcIik7XHJcbiAgICAgICAgdGhpcy5wYWdlMUZyZWVUZXh0Vi5zdHJpbmcgPSBTb2NrZXRTZXR0aW5nLnQoXCI0XzEwMVwiKTtcclxuICAgICAgICAvL+eZvuaQreino+iqqlxyXG4gICAgICAgIHRoaXMucGFnZTFXaWxkVGV4dEguc3RyaW5nID0gU29ja2V0U2V0dGluZy50KFwiNF8xMDJcIik7XHJcbiAgICAgICAgdGhpcy5wYWdlMVdpbGRUZXh0Vi5zdHJpbmcgPSBTb2NrZXRTZXR0aW5nLnQoXCI0XzEwMlwiKTtcclxuXHJcbiAgICAgICAgTGFuZ3VhZ2VNZXRob2QuaW5zdGFuY2VcclxuICAgICAgICAgICAgLnVwZGF0ZUxhYmVsU3R5bGUodGhpcy5wYWdlMUZyZWVUZXh0SClcclxuICAgICAgICAgICAgLnVwZGF0ZUxhYmVsU3R5bGUodGhpcy5wYWdlMUZyZWVUZXh0VilcclxuICAgICAgICAgICAgLnVwZGF0ZUxhYmVsU3R5bGUodGhpcy5wYWdlMVdpbGRUZXh0SClcclxuICAgICAgICAgICAgLnVwZGF0ZUxhYmVsU3R5bGUodGhpcy5wYWdlMVdpbGRUZXh0Vik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwYWdlM0xhbmd1YWdlKCkge1xyXG4gICAgICAgIC8v6LevXHJcbiAgICAgICAgdGhpcy5wYWdlM0xpbmVUZXh0Vi5zdHJpbmcgPSBTb2NrZXRTZXR0aW5nLnQoXCI0XzAwOFwiKTtcclxuXHJcbiAgICAgICAgLy/kuK3njY7ot6/ph5HpoY3mjInnhaflt6boh7Plj7PmtL7nmbxcclxuICAgICAgICB0aGlzLnBhZ2UzV2luRGVzY3JpcHRpb25UZXh0SC5zdHJpbmcgPSBTb2NrZXRTZXR0aW5nLnQoXCIyNDNfMDAyXCIpO1xyXG4gICAgICAgIHRoaXMucGFnZTNXaW5EZXNjcmlwdGlvblRleHRWLnN0cmluZyA9IFNvY2tldFNldHRpbmcudChcIjI0M18wMDJcIik7XHJcblxyXG4gICAgICAgIC8v5b6X542OXHJcbiAgICAgICAgdGhpcy5wYWdlM1dpblRleHRILnN0cmluZyA9IFNvY2tldFNldHRpbmcudChcIjI0M18wMDNcIik7XHJcbiAgICAgICAgdGhpcy5wYWdlM1dpblRleHRWLnN0cmluZyA9IFNvY2tldFNldHRpbmcudChcIjI0M18wMDNcIik7XHJcblxyXG4gICAgICAgIC8v5pyq5b6X542OXHJcbiAgICAgICAgdGhpcy5wYWdlM05vdFdpblRleHRILnN0cmluZyA9IFNvY2tldFNldHRpbmcudChcIjI0M18wMDRcIik7XHJcbiAgICAgICAgdGhpcy5wYWdlM05vdFdpblRleHRWLnN0cmluZyA9IFNvY2tldFNldHRpbmcudChcIjI0M18wMDRcIik7XHJcblxyXG4gICAgICAgIC8v5Lit542O6YeR6aGN6KiI566X5pa55byPXHJcbiAgICAgICAgdGhpcy5wYWdlM1dpbm5pbmdDYWxjdWxhdGlvbkguc3RyaW5nID0gU29ja2V0U2V0dGluZy50KFwiMjQzXzAwNVwiKTtcclxuICAgICAgICB0aGlzLnBhZ2UzV2lubmluZ0NhbGN1bGF0aW9uVi5zdHJpbmcgPSBTb2NrZXRTZXR0aW5nLnQoXCIyNDNfMDA1XCIpO1xyXG5cclxuICAgICAgICAvL+acrOS+i+S4reeahOi0j+eNjlxyXG4gICAgICAgIHRoaXMucGFnZTNFeGFtcGxlVGV4dEguc3RyaW5nID0gU29ja2V0U2V0dGluZy50KFwiMjQzXzAwOFwiKTtcclxuICAgICAgICB0aGlzLnBhZ2UzRXhhbXBsZVRleHRWLnN0cmluZyA9IFNvY2tldFNldHRpbmcudChcIjI0M18wMDhcIik7XHJcblxyXG4gICAgICAgIC8v5Y+D6ICD5Lul5LiK5L6L5a2QLOacrOS+i+S4reeahOi0j+eNjjpcclxuICAgICAgICB0aGlzLnBhZ2UzRXhhbXBsZVRleHQyVi5zdHJpbmcgPSBTb2NrZXRTZXR0aW5nLnQoXCIyNDNfMDEwXCIpO1xyXG5cclxuICAgICAgICAvL+S+i+WtkOioiOeul1xyXG4gICAgICAgIGxldCBleGFtcGxlQW5zd2VyOiBudW1iZXIgPSAzICogMiAqIHRoaXMucGF5VGFibGVbMF1bM107XHJcbiAgICAgICAgdGhpcy5wYWdlM0V4YW1wbGVBbnN3ZXJILnN0cmluZyA9IGAxIHggMyB4IDIgeCAke3RoaXMucGF5VGFibGVbMF1bM119ID0gJHtleGFtcGxlQW5zd2VyfWA7XHJcbiAgICAgICAgdGhpcy5wYWdlM0V4YW1wbGVBbnN3ZXJWLnN0cmluZyA9IGAxIHggMyB4IDIgeCAke3RoaXMucGF5VGFibGVbMF1bM119ID0gJHtleGFtcGxlQW5zd2VyfWA7XHJcblxyXG4gICAgICAgIC8v542y5Yud56ym6Jmf55qE6LOg5LuYXHJcbiAgICAgICAgdGhpcy5wYWdlM1dpbk9kZHNUZXh0Vi5zdHJpbmcgPSBTb2NrZXRTZXR0aW5nLnQoXCIyNDNfMDA3XCIpO1xyXG5cclxuICAgICAgICBMYW5ndWFnZU1ldGhvZC5pbnN0YW5jZVxyXG4gICAgICAgICAgICAudXBkYXRlTGFiZWxTdHlsZSh0aGlzLnBhZ2UzTGluZVRleHRWKVxyXG4gICAgICAgICAgICAudXBkYXRlTGFiZWxTdHlsZSh0aGlzLnBhZ2UzV2luRGVzY3JpcHRpb25UZXh0SClcclxuICAgICAgICAgICAgLnVwZGF0ZUxhYmVsU3R5bGUodGhpcy5wYWdlM1dpbkRlc2NyaXB0aW9uVGV4dFYpXHJcbiAgICAgICAgICAgIC51cGRhdGVMYWJlbFN0eWxlKHRoaXMucGFnZTNXaW5UZXh0SClcclxuICAgICAgICAgICAgLnVwZGF0ZUxhYmVsU3R5bGUodGhpcy5wYWdlM1dpblRleHRWKVxyXG4gICAgICAgICAgICAudXBkYXRlTGFiZWxTdHlsZSh0aGlzLnBhZ2UzTm90V2luVGV4dEgpXHJcbiAgICAgICAgICAgIC51cGRhdGVMYWJlbFN0eWxlKHRoaXMucGFnZTNOb3RXaW5UZXh0VilcclxuICAgICAgICAgICAgLnVwZGF0ZUxhYmVsU3R5bGUodGhpcy5wYWdlM1dpbm5pbmdDYWxjdWxhdGlvbkgpXHJcbiAgICAgICAgICAgIC51cGRhdGVMYWJlbFN0eWxlKHRoaXMucGFnZTNXaW5uaW5nQ2FsY3VsYXRpb25WKVxyXG4gICAgICAgICAgICAudXBkYXRlTGFiZWxTdHlsZSh0aGlzLnBhZ2UzRXhhbXBsZVRleHRIKVxyXG4gICAgICAgICAgICAudXBkYXRlTGFiZWxTdHlsZSh0aGlzLnBhZ2UzRXhhbXBsZVRleHRWKVxyXG4gICAgICAgICAgICAudXBkYXRlTGFiZWxTdHlsZSh0aGlzLnBhZ2UzRXhhbXBsZVRleHQyVilcclxuICAgICAgICAgICAgLnVwZGF0ZUxhYmVsU3R5bGUodGhpcy5wYWdlM0V4YW1wbGVBbnN3ZXJIKVxyXG4gICAgICAgICAgICAudXBkYXRlTGFiZWxTdHlsZSh0aGlzLnBhZ2UzRXhhbXBsZUFuc3dlclYpXHJcbiAgICAgICAgICAgIC51cGRhdGVMYWJlbFN0eWxlKHRoaXMucGFnZTNXaW5PZGRzVGV4dFYpO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuIl19