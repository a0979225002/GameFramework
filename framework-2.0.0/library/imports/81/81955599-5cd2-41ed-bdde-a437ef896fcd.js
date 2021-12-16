"use strict";
cc._RF.push(module, '81955WZXNJB7b3epDfviW/N', 'WarningController');
// script/MainGameScript/Controller/WarningController.ts

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
var SceneStyle_1 = require("../../Framework/Scene/Enum/SceneStyle");
var SceneManager_1 = require("../../Framework/Scene/SceneManager");
var SceneDirectionChangeNotification_1 = require("../../Framework/Scene/SceneNotification/SceneDirectionChangeNotification");
var SceneDirectionChangeObserver_1 = require("../../Framework/Scene/SceneObserver/SceneDirectionChangeObserver");
var AGenericTemplate_1 = require("../../Framework/Template/AGenericTemplate");
var SocketSetting_1 = require("../../Socket/SocketSetting");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var WarningController = /** @class */ (function (_super) {
    __extends(WarningController, _super);
    function WarningController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.warningH = null;
        _this.warningV = null;
        _this.warningTextH = null;
        _this.warningTextV = null;
        return _this;
    }
    WarningController_1 = WarningController;
    WarningController.prototype.onCreate = function () {
        WarningController_1.instance = this;
        this.timer = null;
        this.warningH.active = false;
        this.warningV.active = false;
        SceneDirectionChangeNotification_1.default
            .instance.subscribe(this.SceneDirectionObserverListener(), true); //註冊直橫式監聽
    };
    WarningController.prototype.languageSetting = function () {
        this.warningTextH.string = SocketSetting_1.default.t("S_9017");
        this.warningTextV.string = SocketSetting_1.default.t("S_9017");
        LanguageMethod_1.default.instance
            .updateLabelStyle(this.warningTextH)
            .updateLabelStyle(this.warningTextV);
    };
    WarningController.prototype.showWarning = function () {
        var _this = this;
        if (this.timer) {
            clearTimeout(this.timer);
        }
        else {
            this.checkScene(SceneManager_1.default.instance.sceneDirection);
            this.isShowWarning = true;
        }
        this.timer = window.setTimeout(function () {
            _this.warningH.active = false;
            _this.warningV.active = false;
            _this.isShowWarning = false;
            _this.timer = null;
        }, 1500);
    };
    WarningController.prototype.SceneDirectionObserverListener = function () {
        var _this = this;
        return new SceneDirectionChangeObserver_1.default(function (type) {
            if (_this.isShowWarning) {
                _this.checkScene(type);
            }
        }, this);
    };
    /**
     * 確認當前方向
     * @param {SceneDirectionType} type
     * @protected
     */
    WarningController.prototype.checkScene = function (type) {
        switch (type) {
            case SceneStyle_1.SceneDirectionType.LANDSCAPE:
                this.warningH.active = true;
                this.warningV.active = false;
                break;
            case SceneStyle_1.SceneDirectionType.PORTRAIT:
                this.warningH.active = false;
                this.warningV.active = true;
                break;
        }
    };
    var WarningController_1, _b, _c, _d, _e;
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_b = typeof cc !== "undefined" && cc.Node) === "function" ? _b : Object)
    ], WarningController.prototype, "warningH", void 0);
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_c = typeof cc !== "undefined" && cc.Node) === "function" ? _c : Object)
    ], WarningController.prototype, "warningV", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_d = typeof cc !== "undefined" && cc.Label) === "function" ? _d : Object)
    ], WarningController.prototype, "warningTextH", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_e = typeof cc !== "undefined" && cc.Label) === "function" ? _e : Object)
    ], WarningController.prototype, "warningTextV", void 0);
    WarningController = WarningController_1 = __decorate([
        ccclass
    ], WarningController);
    return WarningController;
}(AGenericTemplate_1.default));
exports.default = WarningController;

cc._RF.pop();