"use strict";
cc._RF.push(module, '8d1077U38BJC6CJA2OVglzA', 'FreeEndController');
// script/MainGameScript/Controller/FreeEndController.ts

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
var AudioManager_1 = require("../../Framework/Audio/AudioManager");
var LoadingDialogController_1 = require("./LoadingDialogController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FreeEndController = /** @class */ (function (_super) {
    __extends(FreeEndController, _super);
    function FreeEndController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.totalWinPoint = null;
        return _this;
    }
    FreeEndController_1 = FreeEndController;
    FreeEndController.prototype.onLoad = function () {
        FreeEndController_1.instance = this;
        this.node.active = false;
        this.numberFormat = new Intl.NumberFormat();
    };
    FreeEndController.prototype.initializeFreeEnd = function () {
        this.resolve = null;
        this.startNum = 0;
        this.totalWinPoint.string = "";
    };
    FreeEndController.prototype.showFreeEnd = function (point, time) {
        var _this = this;
        this.initializeFreeEnd();
        this.node.active = true;
        this.point = point;
        this.time = time;
        return new Promise(function (resolve) {
            _this.runPoint();
            _this.resolve = resolve;
        });
    };
    FreeEndController.prototype.closeFreeEnd = function () {
        var _this = this;
        this.startNum = this.point;
        this.isCanRunPoint = false;
        this.totalWinPoint.string = "$" + this.numberFormat.format(this.startNum);
        setTimeout(function () {
            _this.node.active = false;
            AudioManager_1.default.instance.musicPlay("NBS");
            _this.resolve();
        }, 3000);
    };
    FreeEndController.prototype.runPoint = function () {
        this.isCanRunPoint = true;
    };
    FreeEndController.prototype.update = function (dt) {
        if (this.isCanRunPoint) {
            this.startNum += this.point / this.time * dt;
            if (this.startNum > this.point) {
                this.closeFreeEnd();
                return;
            }
            var nowPoint = this.numberFormat.format(Math.floor(this.startNum * 10) / 10);
            if (nowPoint.indexOf(".") == -1) {
                nowPoint = nowPoint + ".0";
            }
            this.totalWinPoint.string = "$" + nowPoint;
        }
    };
    var FreeEndController_1, _b, _c;
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_b = typeof cc !== "undefined" && cc.Label) === "function" ? _b : Object)
    ], FreeEndController.prototype, "totalWinPoint", void 0);
    __decorate([
        LoadingDialogController_1.Loading("prefab"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
    ], FreeEndController.prototype, "showFreeEnd", null);
    __decorate([
        AudioManager_1.EffectStop("runPoint"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FreeEndController.prototype, "closeFreeEnd", null);
    __decorate([
        AudioManager_1.Effect("runPoint"),
        AudioManager_1.Music("FGBigWin"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FreeEndController.prototype, "runPoint", null);
    FreeEndController = FreeEndController_1 = __decorate([
        ccclass
    ], FreeEndController);
    return FreeEndController;
}(cc.Component));
exports.default = FreeEndController;

cc._RF.pop();