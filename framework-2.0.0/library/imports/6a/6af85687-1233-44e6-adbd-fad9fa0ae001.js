"use strict";
cc._RF.push(module, '6af85aHEjNE5q29+tn6CuAB', 'FreeOpenController');
// script/MainGameScript/Controller/FreeOpenController.ts

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
var ConfigEnum_1 = require("../../Framework/Config/Enum/ConfigEnum");
var SlotGameManager_1 = require("../../Framework/Process/SlotGameManager");
var AGenericTemplate_1 = require("../../Framework/Template/AGenericTemplate");
var ResponseType_1 = require("../../Framework/WebResponse/Enum/ResponseType");
var WebResponseManager_1 = require("../../Framework/WebResponse/WebResponseManager");
var LoadingDialogController_1 = require("./LoadingDialogController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FreeOpenController = /** @class */ (function (_super) {
    __extends(FreeOpenController, _super);
    function FreeOpenController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.freeCountLabel = null;
        _this.freeAnimation = null;
        _this.freeCount = 0;
        _this.count = 0;
        return _this;
    }
    FreeOpenController_1 = FreeOpenController;
    FreeOpenController.prototype.onCreate = function () {
        FreeOpenController_1.instance = this;
        this.freeResult =
            WebResponseManager_1.WebResponseManager
                .instance()
                .getResult(ResponseType_1.ResponseType.FREE);
        this.initialFreeOpen();
    };
    FreeOpenController.prototype.initialFreeOpen = function () {
        this.CLOSING = false;
        this.freeCountLabel.string = "";
        this.count = 0;
        this.node.active = false;
        this.freeAnimation.node.width = 0;
        this.freeAnimation.node.height = 0;
        this.node.opacity = 255;
    };
    /**
     * 打開free 開場動畫
     * @param {number} freeCount
     * @return {Promise<void>}
     */
    FreeOpenController.prototype.showFreeOpeningAnimation = function (freeCount) {
        var _this = this;
        this.playFreeAnimation(freeCount);
        this.freeAnimation.once('finished', this.freeCountAnimation, this);
        return new Promise(function (resolve) {
            _this.resolve = resolve;
        });
    };
    /**
     * 跑Free 總共次數動畫
     * @private
     */
    FreeOpenController.prototype.freeCountAnimation = function () {
        cc.log("freeCountAnimation");
        if (SlotGameManager_1.default.instance.isAutoState && SlotGameManager_1.default.instance.autoType != ConfigEnum_1.AutoType.freeEnd) {
            this.timer = 3;
        }
        else {
            this.timer = 10;
        }
        if (this.freeResult.FreeToFree != 0) {
            this.timer = 1;
        }
        this.schedule(this.addCountTimer, 0.016 * 5);
    };
    FreeOpenController.prototype.addCountTimer = function () {
        this.count++;
        if (this.count > this.freeCount) {
            this.touchEndListener();
            this.unschedule(this.addCountTimer);
            this.scheduleOnce(this.removeFreeOpeningAnimation, this.timer);
            return;
        }
        this.freeCountLabel.string = String(this.count);
    };
    FreeOpenController.prototype.touchEndListener = function () {
        this.freeAnimation.node.once(cc.Node.EventType.TOUCH_END, this.removeFreeOpeningAnimation, this);
        cc.systemEvent.once(cc.SystemEvent.EventType.KEY_DOWN, this.keyboardEvent, this);
    };
    FreeOpenController.prototype.keyboardEvent = function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.space:
                this.removeFreeOpeningAnimation();
                break;
        }
    };
    FreeOpenController.prototype.playFreeAnimation = function (freeCount) {
        this.node.active = true;
        this.freeCount = freeCount;
        this.freeAnimation.play();
    };
    /**
     * 關閉free開場動畫
     */
    FreeOpenController.prototype.removeFreeOpeningAnimation = function () {
        var _this = this;
        this.unschedule(this.removeFreeOpeningAnimation);
        this.freeAnimation.node.off(cc.Node.EventType.TOUCH_END, this.removeFreeOpeningAnimation, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.keyboardEvent, this);
        cc.tween(this.node)
            .to(0.4, { opacity: 0 })
            .call(function () {
            _this.initialFreeOpen();
            _this.resolve();
        })
            .start();
    };
    FreeOpenController.prototype.languageSetting = function () {
    };
    var FreeOpenController_1, _b, _c, _d;
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_b = typeof cc !== "undefined" && cc.Label) === "function" ? _b : Object)
    ], FreeOpenController.prototype, "freeCountLabel", void 0);
    __decorate([
        property(cc.Animation),
        __metadata("design:type", typeof (_c = typeof cc !== "undefined" && cc.Animation) === "function" ? _c : Object)
    ], FreeOpenController.prototype, "freeAnimation", void 0);
    __decorate([
        LoadingDialogController_1.Loading("prefab"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
    ], FreeOpenController.prototype, "showFreeOpeningAnimation", null);
    __decorate([
        AudioManager_1.Effect("GetWin"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FreeOpenController.prototype, "freeCountAnimation", null);
    __decorate([
        AudioManager_1.Music("GetFG"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], FreeOpenController.prototype, "playFreeAnimation", null);
    __decorate([
        AudioManager_1.Music("FBS"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FreeOpenController.prototype, "removeFreeOpeningAnimation", null);
    FreeOpenController = FreeOpenController_1 = __decorate([
        ccclass
    ], FreeOpenController);
    return FreeOpenController;
}(AGenericTemplate_1.default));
exports.default = FreeOpenController;

cc._RF.pop();