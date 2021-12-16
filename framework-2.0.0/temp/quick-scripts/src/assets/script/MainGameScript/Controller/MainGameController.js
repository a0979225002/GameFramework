"use strict";
cc._RF.push(module, 'd52fd9pc0BLvozApAhgzlIx', 'MainGameController');
// script/MainGameScript/Controller/MainGameController.ts

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
var GameState_1 = require("../../Framework/Process/Enum/GameState");
var SlotGameManager_1 = require("../../Framework/Process/SlotGameManager");
var SceneStyle_1 = require("../../Framework/Scene/Enum/SceneStyle");
var SceneManager_1 = require("../../Framework/Scene/SceneManager");
var SceneDirectionChangeNotification_1 = require("../../Framework/Scene/SceneNotification/SceneDirectionChangeNotification");
var SceneDirectionChangeObserver_1 = require("../../Framework/Scene/SceneObserver/SceneDirectionChangeObserver");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MainGameController = /** @class */ (function (_super) {
    __extends(MainGameController, _super);
    function MainGameController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.freeBGH = null;
        _this.freeBGV = null;
        _this.normalBGH = null;
        _this.normalBGV = null;
        return _this;
    }
    MainGameController_1 = MainGameController;
    MainGameController.prototype.onLoad = function () {
        MainGameController_1.instance = this;
        this.freeBGH.active = false;
        this.freeBGV.active = false;
        SceneDirectionChangeNotification_1.default
            .instance.subscribe(this.sceneDirectionObserverListener(), true);
    };
    MainGameController.prototype.sceneDirectionObserverListener = function () {
        var _this = this;
        return new SceneDirectionChangeObserver_1.default(function (type) {
            if (SlotGameManager_1.default.instance.gameState != GameState_1.GameState.FREEING)
                return;
            switch (type) {
                case SceneStyle_1.SceneDirectionType.PORTRAIT:
                    _this.freeBGV.active = true;
                    break;
            }
        }, this);
    };
    MainGameController.prototype.closeFreeBG = function () {
        this.freeBGH.active = false;
        this.freeBGV.active = false;
    };
    MainGameController.prototype.showFreeBG = function () {
        if (SceneManager_1.default.instance.sceneDirection == SceneStyle_1.SceneDirectionType.LANDSCAPE) {
            this.freeBGH.active = true;
        }
        else {
            this.freeBGH.active = true;
            this.freeBGV.active = true;
        }
    };
    var MainGameController_1, _b, _c, _d, _e;
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_b = typeof cc !== "undefined" && cc.Node) === "function" ? _b : Object)
    ], MainGameController.prototype, "freeBGH", void 0);
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_c = typeof cc !== "undefined" && cc.Node) === "function" ? _c : Object)
    ], MainGameController.prototype, "freeBGV", void 0);
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_d = typeof cc !== "undefined" && cc.Node) === "function" ? _d : Object)
    ], MainGameController.prototype, "normalBGH", void 0);
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_e = typeof cc !== "undefined" && cc.Node) === "function" ? _e : Object)
    ], MainGameController.prototype, "normalBGV", void 0);
    MainGameController = MainGameController_1 = __decorate([
        ccclass
    ], MainGameController);
    return MainGameController;
}(cc.Component));
exports.default = MainGameController;

cc._RF.pop();