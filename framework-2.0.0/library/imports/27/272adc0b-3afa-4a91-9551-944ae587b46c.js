"use strict";
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