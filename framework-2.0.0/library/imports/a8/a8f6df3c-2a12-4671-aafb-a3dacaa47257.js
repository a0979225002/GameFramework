"use strict";
cc._RF.push(module, 'a8f6d88KhJGcar7o9rKpHJX', 'InstructionController');
// script/MainGameScript/Controller/InstructionController.ts

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
var ButtonMethod_1 = require("../../Framework/GlobalMethod/ButtonMethod");
var LanguageMethod_1 = require("../../Framework/GlobalMethod/LanguageMethod");
var SceneStyle_1 = require("../../Framework/Scene/Enum/SceneStyle");
var SceneDirectionChangeNotification_1 = require("../../Framework/Scene/SceneNotification/SceneDirectionChangeNotification");
var SceneDirectionChangeObserver_1 = require("../../Framework/Scene/SceneObserver/SceneDirectionChangeObserver");
var SceneManager_1 = require("../../Framework/Scene/SceneManager");
var AGenericTemplate_1 = require("../../Framework/Template/AGenericTemplate");
var SocketSetting_1 = require("../../Socket/SocketSetting");
var MainGameButton_1 = require("../ButtonEvent/MainGameButton");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var InstructionController = /** @class */ (function (_super) {
    __extends(InstructionController, _super);
    function InstructionController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pageH = null;
        _this.pageV = null;
        _this.userMoneyTextH = null;
        _this.userMoneyTextV = null;
        _this.menuTextH = null;
        _this.menuTextV = null;
        _this.startButtonAutoTextH = null;
        _this.startButtonAutoTextV = null;
        _this.autoTextH = null;
        _this.autoTextV = null;
        _this.speedTextH = null;
        _this.speedTextV = null;
        return _this;
    }
    InstructionController_1 = InstructionController;
    InstructionController.prototype.onCreate = function () {
        InstructionController_1.instance = this;
        switch (SceneManager_1.default.instance.sceneDirection) {
            case SceneStyle_1.SceneDirectionType.LANDSCAPE:
                this.pageH.active = true;
                this.pageV.active = false;
                break;
            case SceneStyle_1.SceneDirectionType.PORTRAIT:
                this.pageV.active = true;
                this.pageH.active = false;
                break;
        }
        ButtonMethod_1.default.addButtonEvent(this.pageH.getComponent(cc.Button), "pageTouchListener", this);
        ButtonMethod_1.default.addButtonEvent(this.pageV.getComponent(cc.Button), "pageTouchListener", this);
        this.sceneDirectionChangeObserver = this.sceneDirectionObserverListener();
        SceneDirectionChangeNotification_1.default.instance.subscribe(this.sceneDirectionChangeObserver, true);
    };
    InstructionController.prototype.languageSetting = function () {
        this.userMoneyTextH.string = SocketSetting_1.default.t("HELP_001");
        this.userMoneyTextV.string = SocketSetting_1.default.t("HELP_001");
        this.menuTextH.string = SocketSetting_1.default.t("HELP_005");
        this.menuTextV.string = SocketSetting_1.default.t("HELP_005");
        this.startButtonAutoTextH.string = SocketSetting_1.default.t("HELP_008");
        this.startButtonAutoTextV.string = SocketSetting_1.default.t("HELP_008");
        this.autoTextH.string = SocketSetting_1.default.t("S_1001");
        this.autoTextV.string = SocketSetting_1.default.t("S_1001");
        this.speedTextH.string = SocketSetting_1.default.t("HELP_004");
        this.speedTextV.string = SocketSetting_1.default.t("HELP_004");
        LanguageMethod_1.default.instance
            .updateLabelStyle(this.userMoneyTextH)
            .updateLabelStyle(this.userMoneyTextV)
            .updateLabelStyle(this.menuTextH)
            .updateLabelStyle(this.menuTextV)
            .updateLabelStyle(this.startButtonAutoTextH)
            .updateLabelStyle(this.startButtonAutoTextV)
            .updateLabelStyle(this.autoTextH)
            .updateLabelStyle(this.autoTextV)
            .updateLabelStyle(this.speedTextH)
            .updateLabelStyle(this.speedTextV);
    };
    /**
     * 離開說明頁進入遊戲遊玩待機模式
     * @private
     */
    InstructionController.prototype.pageTouchListener = function () {
        MainGameButton_1.default.instance.startButtonOnEnable();
        this.node.destroy();
    };
    InstructionController.prototype.sceneDirectionObserverListener = function () {
        var _this = this;
        return new SceneDirectionChangeObserver_1.default(function (type) {
            if (type == SceneStyle_1.SceneDirectionType.LANDSCAPE) {
                _this.pageH.active = true;
                _this.pageV.active = false;
            }
            else if (type == SceneStyle_1.SceneDirectionType.PORTRAIT) {
                _this.pageV.active = true;
                _this.pageH.active = false;
            }
            else {
                cc.log("MainGameSetting sceneDirectionEvent() \u6709\u932F\u8AA4 : " + type);
            }
        }, this);
    };
    InstructionController.prototype.onDestroy = function () {
        SceneDirectionChangeNotification_1.default.instance.unsubscribe(this.sceneDirectionChangeObserver);
    };
    var InstructionController_1, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_b = typeof cc !== "undefined" && cc.Node) === "function" ? _b : Object)
    ], InstructionController.prototype, "pageH", void 0);
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_c = typeof cc !== "undefined" && cc.Node) === "function" ? _c : Object)
    ], InstructionController.prototype, "pageV", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_d = typeof cc !== "undefined" && cc.Label) === "function" ? _d : Object)
    ], InstructionController.prototype, "userMoneyTextH", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_e = typeof cc !== "undefined" && cc.Label) === "function" ? _e : Object)
    ], InstructionController.prototype, "userMoneyTextV", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_f = typeof cc !== "undefined" && cc.Label) === "function" ? _f : Object)
    ], InstructionController.prototype, "menuTextH", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_g = typeof cc !== "undefined" && cc.Label) === "function" ? _g : Object)
    ], InstructionController.prototype, "menuTextV", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_h = typeof cc !== "undefined" && cc.Label) === "function" ? _h : Object)
    ], InstructionController.prototype, "startButtonAutoTextH", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_j = typeof cc !== "undefined" && cc.Label) === "function" ? _j : Object)
    ], InstructionController.prototype, "startButtonAutoTextV", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_k = typeof cc !== "undefined" && cc.Label) === "function" ? _k : Object)
    ], InstructionController.prototype, "autoTextH", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_l = typeof cc !== "undefined" && cc.Label) === "function" ? _l : Object)
    ], InstructionController.prototype, "autoTextV", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_m = typeof cc !== "undefined" && cc.Label) === "function" ? _m : Object)
    ], InstructionController.prototype, "speedTextH", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_o = typeof cc !== "undefined" && cc.Label) === "function" ? _o : Object)
    ], InstructionController.prototype, "speedTextV", void 0);
    __decorate([
        AudioManager_1.Music("NBS"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], InstructionController.prototype, "pageTouchListener", null);
    InstructionController = InstructionController_1 = __decorate([
        ccclass
    ], InstructionController);
    return InstructionController;
}(AGenericTemplate_1.default));
exports.default = InstructionController;

cc._RF.pop();