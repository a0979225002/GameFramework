
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/MainGameScript/ButtonEvent/MainGameButton.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1f0deujUgJAsoXfR7Eo7PI8', 'MainGameButton');
// script/MainGameScript/ButtonEvent/MainGameButton.ts

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
var ButtonMethod_1 = require("../../Framework/GlobalMethod/ButtonMethod");
var LanguageMethod_1 = require("../../Framework/GlobalMethod/LanguageMethod");
var GameState_1 = require("../../Framework/Process/Enum/GameState");
var AutoStateChangeNotification_1 = require("../../Framework/Process/GameNotification/AutoStateChangeNotification");
var UserTotalBetChangeNotification_1 = require("../../Framework/Process/GameNotification/UserTotalBetChangeNotification");
var UserTotalBetChangeObserver_1 = require("../../Framework/Process/GameObserver/UserTotalBetChangeObserver");
var SlotGameManager_1 = require("../../Framework/Process/SlotGameManager");
var AMainGameDoubleButtonTemplate_1 = require("../../Framework/Template/ButtonEvent/MainButton/AMainGameDoubleButtonTemplate");
var ResponseType_1 = require("../../Framework/WebResponse/Enum/ResponseType");
var WebResponseManager_1 = require("../../Framework/WebResponse/WebResponseManager");
var SocketSetting_1 = require("../../Socket/SocketSetting");
var SlotController_1 = require("../Controller/SlotController");
var WarningController_1 = require("../Controller/WarningController");
var MainGameLabel_1 = require("../LabelEvent/MainGameLabel");
var MenuPageButton_1 = require("./MenuPageButton");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MainGameButton = /** @class */ (function (_super) {
    __extends(MainGameButton, _super);
    function MainGameButton() {
        var _this = _super.call(this) || this;
        _this.autoButtonH = null;
        _this.autoButtonV = null;
        _this.betSelectionButtonH = null;
        _this.betSelectionButtonV = null;
        _this.speedUpButtonH = null;
        _this.speedUpButtonV = null;
        _this.startButtonH = null;
        _this.startButtonV = null;
        _this.startButtonImgH = null;
        _this.startButtonImgV = null;
        _this.menuButtonH = null;
        _this.menuButtonV = null;
        _this.betButton = null;
        _this.totalFrameNode = null;
        _this.startAutoNodeH = null;
        _this.startAutoNodeV = null;
        _this.startAutoCountH = null;
        _this.startAutoCountV = null;
        _this.startAutoIconH = null;
        _this.startAutoIconV = null;
        _this.titleText = null;
        _this.buttonSpriteAtlas = null;
        _this.betButtonToArray = new Array();
        _this.color = {
            YELLOW: cc.color().fromHEX("#FFE000"),
            GRAY: cc.color().fromHEX("#8B8787"),
            WHITE: cc.color().fromHEX("#FFFCFC"),
        };
        return _this;
    }
    MainGameButton_1 = MainGameButton;
    MainGameButton.prototype.onCreate = function () {
        MainGameButton_1.instance = this;
        this.tableInfo =
            WebResponseManager_1.WebResponseManager
                .instance()
                .getResult(ResponseType_1.ResponseType.TABLE_INFO);
        this.startButtonDisable();
        this.autoCount = SlotGameManager_1.default.instance.autoType;
        this.buttonSpriteFrame = {
            SPEED_ON: this.buttonSpriteAtlas.getSpriteFrame("FastOn"),
            SPEED_OFF: this.buttonSpriteAtlas.getSpriteFrame("FastOff"),
            AUTO_ON: this.buttonSpriteAtlas.getSpriteFrame("btn_auto_on"),
            AUTO_OFF: this.buttonSpriteAtlas.getSpriteFrame("btn_auto"),
            STANDBY: this.buttonSpriteAtlas.getSpriteFrame("Spin_ICON"),
            PLAYING: this.buttonSpriteAtlas.getSpriteFrame("Stop_ICON"),
        };
        this.offBetFrameButtonAnimation(this.betSelectionButtonH.node.children[0]);
        this.offBetFrameButtonAnimation(this.betSelectionButtonV.node.children[0]);
        this.buttonStanByAnimation(this.startButtonImgH.node);
        this.buttonStanByAnimation(this.startButtonImgV.node);
        UserTotalBetChangeNotification_1.default //押注事件推播綁定
            .instance.subscribe(this.getUserTotalBetChangeObserver(), true);
        this.totalFrameNode.active = false;
        this.startAutoNodeH.active = false;
        this.startAutoNodeV.active = false;
    };
    MainGameButton.prototype.languageSetting = function () {
        //請選擇下注
        this.titleText.string = SocketSetting_1.default.t("S_9016");
        LanguageMethod_1.default.instance.updateLabelStyle(this.titleText);
    };
    MainGameButton.prototype.autoEvent = function (isAutoState, autoType) {
        if (isAutoState) {
            this.autoButtonH.node.children[0]
                .getComponent(cc.Sprite).spriteFrame = this.buttonSpriteFrame.AUTO_ON;
            this.autoButtonV.node.children[0]
                .getComponent(cc.Sprite).spriteFrame = this.buttonSpriteFrame.AUTO_ON;
            //自動按鈕開啟時關閉特效
            this.autoButtonH.node.children[1].active = false;
            this.autoButtonV.node.children[1].active = false;
            this.checkAutoTypeToButton(autoType);
        }
        else {
            this.autoButtonH.node.children[0]
                .getComponent(cc.Sprite).spriteFrame = this.buttonSpriteFrame.AUTO_OFF;
            this.autoButtonV.node.children[0]
                .getComponent(cc.Sprite).spriteFrame = this.buttonSpriteFrame.AUTO_OFF;
            //自動按鈕未開啟時特效
            this.autoButtonH.node.children[1].active = true;
            this.autoButtonV.node.children[1].active = true;
            this.startButtonImgH.node.active = true;
            this.startButtonImgV.node.active = true;
            this.startAutoNodeH.active = false;
            this.startAutoNodeV.active = false;
            if (SlotGameManager_1.default.instance.gameState == GameState_1.GameState.PLAYING) {
                this.startButtonImgH.spriteFrame = this.buttonSpriteFrame.PLAYING;
                this.startButtonImgV.spriteFrame = this.buttonSpriteFrame.PLAYING;
            }
        }
    };
    MainGameButton.prototype.checkAutoTypeToButton = function (autoType) {
        this.startAutoNodeH.active = true;
        this.startAutoNodeV.active = true;
        this.startButtonImgH.node.active = false;
        this.startButtonImgV.node.active = false;
        switch (autoType) {
            case ConfigEnum_1.AutoType.auto:
                this.startAutoCountH.node.active = false;
                this.startAutoCountV.node.active = false;
                this.startAutoIconH.active = true;
                this.startAutoIconV.active = true;
                break;
            case ConfigEnum_1.AutoType.freeEnd:
                this.startAutoCountH.node.active = false;
                this.startAutoCountV.node.active = false;
                this.startAutoIconH.active = false;
                this.startAutoIconV.active = false;
                break;
            default:
                this.startAutoCountH.node.active = true;
                this.startAutoCountV.node.active = true;
                this.startAutoIconH.active = false;
                this.startAutoIconV.active = false;
                this.startAutoCountH.string = String(autoType);
                this.startAutoCountV.string = String(autoType);
                this.autoCount = autoType;
        }
    };
    MainGameButton.prototype.totalBetFrameTouchEvent = function (isShowTotalBetFrame) {
        if (isShowTotalBetFrame) {
            this.showBetFrameButtonAnimation(this.betSelectionButtonH.node.children[0]);
            this.showBetFrameButtonAnimation(this.betSelectionButtonV.node.children[0]);
            this.totalFrameNode.active = true;
        }
        else {
            this.offBetFrameButtonAnimation(this.betSelectionButtonH.node.children[0]);
            this.offBetFrameButtonAnimation(this.betSelectionButtonV.node.children[0]);
            this.totalFrameNode.active = false;
        }
    };
    //旋轉180度 下上方式持續跳動
    MainGameButton.prototype.showBetFrameButtonAnimation = function (node) {
        cc.Tween.stopAllByTarget(node);
        node.y = 0;
        cc.tween(node)
            .to(0.3, { angle: -180 }, { easing: "smooth" })
            .repeatForever(cc.tween()
            .to(0.5, { y: -10 }, { easing: "quintOut" })
            .to(0.5, { y: 0 }, { easing: "quintIn" })).start();
    };
    //轉正0度 上下方式持續跳動
    MainGameButton.prototype.offBetFrameButtonAnimation = function (node) {
        cc.Tween.stopAllByTarget(node);
        node.y = 0;
        cc.tween(node)
            .to(0.3, { angle: 0 }, { easing: "smooth" })
            .repeatForever(cc.tween()
            .to(0.5, { y: 10 }, { easing: "quintIn" })
            .to(0.5, { y: 0 }, { easing: "quintOut" })).start();
    };
    MainGameButton.prototype.speedUpEvent = function (isSpeedUp) {
        if (isSpeedUp) {
            this.speedUpButtonH.node.children[0]
                .getComponent(cc.Sprite).spriteFrame = this.buttonSpriteFrame.SPEED_ON;
            this.speedUpButtonV.node.children[0]
                .getComponent(cc.Sprite).spriteFrame = this.buttonSpriteFrame.SPEED_ON;
        }
        else {
            this.speedUpButtonH.node.children[0]
                .getComponent(cc.Sprite).spriteFrame = this.buttonSpriteFrame.SPEED_OFF;
            this.speedUpButtonV.node.children[0]
                .getComponent(cc.Sprite).spriteFrame = this.buttonSpriteFrame.SPEED_OFF;
        }
    };
    /**
     * 流程開始前 UI事件
     * @protected
     */
    MainGameButton.prototype.startEvent = function () {
        this.startButtonImgH.node.angle = 0;
        this.startButtonImgV.node.angle = 0;
        cc.Tween.stopAllByTarget(this.startButtonImgV.node);
        cc.Tween.stopAllByTarget(this.startButtonImgH.node);
        //如果該局狀態不是auto狀態,才給予按鈕聲音
        if (!SlotGameManager_1.default.instance.isAutoState) {
            this.startButtonImgH.spriteFrame = this.buttonSpriteFrame.PLAYING;
            this.startButtonImgV.spriteFrame = this.buttonSpriteFrame.PLAYING;
            AudioManager_1.default.instance.effectPlay("BtnClick");
            return;
        }
        //如果當前auto狀態是有次數的,將減去該局次數
        if (SlotGameManager_1.default.instance.isAutoState &&
            SlotGameManager_1.default.instance.autoType != ConfigEnum_1.AutoType.auto &&
            SlotGameManager_1.default.instance.autoType != ConfigEnum_1.AutoType.freeEnd) {
            this.autoCount--;
            this.startAutoCountH.string = String(this.autoCount);
            this.startAutoCountV.string = String(this.autoCount);
        }
    };
    /**
     * 當流程結束時 UI事件
     * @protected
     */
    MainGameButton.prototype.endEvent = function () {
        if (SlotGameManager_1.default.instance.isAutoState && this.autoCount == 0) {
            var autoType = SlotGameManager_1.default.instance.autoType;
            AutoStateChangeNotification_1.default.instance.notify(false, autoType, autoType);
        }
        if (!SlotGameManager_1.default.instance.isAutoState) {
            this.buttonStanByAnimation(this.startButtonImgV.node);
            this.buttonStanByAnimation(this.startButtonImgH.node);
        }
    };
    /**
     * 待機模式下 button動畫
     * @param {cc.Node} node
     * @private
     */
    MainGameButton.prototype.buttonStanByAnimation = function (node) {
        this.startButtonImgH.spriteFrame = this.buttonSpriteFrame.STANDBY;
        this.startButtonImgV.spriteFrame = this.buttonSpriteFrame.STANDBY;
        cc.tween(node)
            .repeatForever(cc.tween()
            .to(0.8, { angle: -50 }, { easing: "bounceOut" })
            .to(0.8, { angle: 50 }, { easing: "backOut" })).start();
    };
    /**
     * 押注視窗按鈕實現
     * @protected
     */
    MainGameButton.prototype.makeTotalBetButtonToListener = function () {
        var lineBetLength = this.tableInfo.LineTotalBet.length;
        var containerNode = this.betButton.node.parent;
        for (var i = 0; i < lineBetLength; i++) {
            //複製按鈕
            var node = cc.instantiate(this.betButton.node);
            node.name = "Bet" + i + "_Button";
            var lineBetValue = this.tableInfo.LineTotalBet[i];
            //更新該bet button內的數字
            var label = node.getChildByName("betNumber_Label").getComponent(cc.Label);
            label.string = String(lineBetValue);
            containerNode.addChild(node);
            this.betButtonToArray.push(node);
            //綁定全部按鈕點擊事件
            ButtonMethod_1.default.addButtonEvent(node.getComponent(cc.Button), "betButtonTouchEvent", this, i);
        }
        var nowBetIndex = SlotGameManager_1.default.instance.userBetPoint.LineBet;
        var initialBetImg = this.betButtonToArray[nowBetIndex].getComponent(cc.Button);
        initialBetImg.normalColor = this.color.YELLOW;
        initialBetImg.hoverColor = this.color.YELLOW;
        //當全部按鈕添加完,刪除複製用的按鈕
        this.betButton.node.destroy();
    };
    /**
     * 總押住視窗中,各別押住按鈕點時 推播事件
     * @param event
     * @param callback
     */
    MainGameButton.prototype.betButtonTouchEvent = function (event, callback) {
        var beforeIndex = SlotGameManager_1.default.instance.userBetPoint.LineBet;
        UserTotalBetChangeNotification_1.default.instance.notify(beforeIndex, callback);
    };
    /**
     * 監聽 如果有更換押注金額 將更新當前狀態
     * @private
     */
    MainGameButton.prototype.getUserTotalBetChangeObserver = function () {
        var _this = this;
        if (!this.userTotalBetChangeObserver) {
            this.userTotalBetChangeObserver = new UserTotalBetChangeObserver_1.default(function (beforeIndex, afterIndex) {
                _this.updateTotalBetEvent(beforeIndex, afterIndex);
            }, this);
        }
        return this.userTotalBetChangeObserver;
    };
    /**
     * 更新 用戶押住事件
     * @param beforeIndex{number} : 更新前的押住位置
     * @param afterIndex{number} : 更新後的押住位置
     * @private
     */
    MainGameButton.prototype.updateTotalBetEvent = function (beforeIndex, afterIndex) {
        var beforeBetNode = this.betButtonToArray[beforeIndex].getComponent(cc.Button);
        var afterBetNode = this.betButtonToArray[afterIndex].getComponent(cc.Button);
        beforeBetNode.normalColor = this.color.GRAY;
        beforeBetNode.hoverColor = this.color.WHITE;
        afterBetNode.normalColor = this.color.YELLOW;
        afterBetNode.hoverColor = this.color.YELLOW;
        SlotController_1.default.instance.closeWinGrid();
        MainGameLabel_1.default.instance.remove();
    };
    MainGameButton.prototype.menuEvent = function () {
        MenuPageButton_1.default.instance.showMenu();
    };
    /**
     * 警告事件
     * @protected
     */
    MainGameButton.prototype.warningEvent = function () {
        WarningController_1.default.instance.showWarning();
    };
    /**
     * 一般狀態與免費狀態中切換顯示button
     * @param {boolean} isShow
     */
    MainGameButton.prototype.switchButton = function (isShow) {
        this.startButtonH.node.active = isShow;
        this.startButtonV.node.active = isShow;
        this.autoButtonH.node.active = isShow;
        this.autoButtonV.node.active = isShow;
        this.menuButtonH.node.active = isShow;
        this.menuButtonV.node.active = isShow;
        this.betSelectionButtonH.node.active = isShow;
        this.betSelectionButtonV.node.active = isShow;
        if (isShow) {
            this.startButtonOnEnable();
        }
        else {
            this.startButtonDisable();
        }
    };
    var MainGameButton_1, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y;
    __decorate([
        property(cc.Button),
        __metadata("design:type", typeof (_b = typeof cc !== "undefined" && cc.Button) === "function" ? _b : Object)
    ], MainGameButton.prototype, "autoButtonH", void 0);
    __decorate([
        property(cc.Button),
        __metadata("design:type", typeof (_c = typeof cc !== "undefined" && cc.Button) === "function" ? _c : Object)
    ], MainGameButton.prototype, "autoButtonV", void 0);
    __decorate([
        property(cc.Button),
        __metadata("design:type", typeof (_d = typeof cc !== "undefined" && cc.Button) === "function" ? _d : Object)
    ], MainGameButton.prototype, "betSelectionButtonH", void 0);
    __decorate([
        property(cc.Button),
        __metadata("design:type", typeof (_e = typeof cc !== "undefined" && cc.Button) === "function" ? _e : Object)
    ], MainGameButton.prototype, "betSelectionButtonV", void 0);
    __decorate([
        property(cc.Button),
        __metadata("design:type", typeof (_f = typeof cc !== "undefined" && cc.Button) === "function" ? _f : Object)
    ], MainGameButton.prototype, "speedUpButtonH", void 0);
    __decorate([
        property(cc.Button),
        __metadata("design:type", typeof (_g = typeof cc !== "undefined" && cc.Button) === "function" ? _g : Object)
    ], MainGameButton.prototype, "speedUpButtonV", void 0);
    __decorate([
        property(cc.Button),
        __metadata("design:type", typeof (_h = typeof cc !== "undefined" && cc.Button) === "function" ? _h : Object)
    ], MainGameButton.prototype, "startButtonH", void 0);
    __decorate([
        property(cc.Button),
        __metadata("design:type", typeof (_j = typeof cc !== "undefined" && cc.Button) === "function" ? _j : Object)
    ], MainGameButton.prototype, "startButtonV", void 0);
    __decorate([
        property(cc.Sprite),
        __metadata("design:type", typeof (_k = typeof cc !== "undefined" && cc.Sprite) === "function" ? _k : Object)
    ], MainGameButton.prototype, "startButtonImgH", void 0);
    __decorate([
        property(cc.Sprite),
        __metadata("design:type", typeof (_l = typeof cc !== "undefined" && cc.Sprite) === "function" ? _l : Object)
    ], MainGameButton.prototype, "startButtonImgV", void 0);
    __decorate([
        property(cc.Button),
        __metadata("design:type", typeof (_m = typeof cc !== "undefined" && cc.Button) === "function" ? _m : Object)
    ], MainGameButton.prototype, "menuButtonH", void 0);
    __decorate([
        property(cc.Button),
        __metadata("design:type", typeof (_o = typeof cc !== "undefined" && cc.Button) === "function" ? _o : Object)
    ], MainGameButton.prototype, "menuButtonV", void 0);
    __decorate([
        property(cc.Button),
        __metadata("design:type", typeof (_p = typeof cc !== "undefined" && cc.Button) === "function" ? _p : Object)
    ], MainGameButton.prototype, "betButton", void 0);
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_q = typeof cc !== "undefined" && cc.Node) === "function" ? _q : Object)
    ], MainGameButton.prototype, "totalFrameNode", void 0);
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_r = typeof cc !== "undefined" && cc.Node) === "function" ? _r : Object)
    ], MainGameButton.prototype, "startAutoNodeH", void 0);
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_s = typeof cc !== "undefined" && cc.Node) === "function" ? _s : Object)
    ], MainGameButton.prototype, "startAutoNodeV", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_t = typeof cc !== "undefined" && cc.Label) === "function" ? _t : Object)
    ], MainGameButton.prototype, "startAutoCountH", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_u = typeof cc !== "undefined" && cc.Label) === "function" ? _u : Object)
    ], MainGameButton.prototype, "startAutoCountV", void 0);
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_v = typeof cc !== "undefined" && cc.Node) === "function" ? _v : Object)
    ], MainGameButton.prototype, "startAutoIconH", void 0);
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_w = typeof cc !== "undefined" && cc.Node) === "function" ? _w : Object)
    ], MainGameButton.prototype, "startAutoIconV", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_x = typeof cc !== "undefined" && cc.Label) === "function" ? _x : Object)
    ], MainGameButton.prototype, "titleText", void 0);
    __decorate([
        property(cc.SpriteAtlas),
        __metadata("design:type", typeof (_y = typeof cc !== "undefined" && cc.SpriteAtlas) === "function" ? _y : Object)
    ], MainGameButton.prototype, "buttonSpriteAtlas", void 0);
    __decorate([
        AudioManager_1.Effect("BtnClick"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean, Object]),
        __metadata("design:returntype", void 0)
    ], MainGameButton.prototype, "autoEvent", null);
    __decorate([
        AudioManager_1.Effect("BtnClick"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], MainGameButton.prototype, "totalBetFrameTouchEvent", null);
    __decorate([
        AudioManager_1.Effect("BtnClick"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], MainGameButton.prototype, "speedUpEvent", null);
    __decorate([
        AudioManager_1.Effect("BtnClick"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Number]),
        __metadata("design:returntype", void 0)
    ], MainGameButton.prototype, "betButtonTouchEvent", null);
    __decorate([
        AudioManager_1.Effect("BtnClick"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], MainGameButton.prototype, "updateTotalBetEvent", null);
    __decorate([
        AudioManager_1.Effect("OpenMenu"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MainGameButton.prototype, "menuEvent", null);
    MainGameButton = MainGameButton_1 = __decorate([
        ccclass,
        __metadata("design:paramtypes", [])
    ], MainGameButton);
    return MainGameButton;
}(AMainGameDoubleButtonTemplate_1.default));
exports.default = MainGameButton;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxNYWluR2FtZVNjcmlwdFxcQnV0dG9uRXZlbnRcXE1haW5HYW1lQnV0dG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1FQUF1RTtBQUN2RSxxRUFBK0Q7QUFDL0QsMEVBQW9FO0FBQ3BFLDhFQUF5RTtBQUN6RSxvRUFBZ0U7QUFDaEUsb0hBQStHO0FBQy9HLDBIQUFxSDtBQUNySCw4R0FBeUc7QUFDekcsMkVBQXFFO0FBQ3JFLCtIQUN3RjtBQUN4Riw4RUFBMkU7QUFFM0UscUZBQWlGO0FBQ2pGLDREQUFzRDtBQUN0RCwrREFBeUQ7QUFDekQscUVBQStEO0FBQy9ELDZEQUF1RDtBQUN2RCxtREFBNkM7QUFFdkMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBNEMsa0NBQTZCO0lBdURyRTtRQUFBLFlBQ0ksaUJBQU8sU0FPVjtRQTVEUyxpQkFBVyxHQUFjLElBQUksQ0FBQTtRQUU3QixpQkFBVyxHQUFjLElBQUksQ0FBQTtRQUU3Qix5QkFBbUIsR0FBYyxJQUFJLENBQUE7UUFFckMseUJBQW1CLEdBQWMsSUFBSSxDQUFBO1FBRXJDLG9CQUFjLEdBQWMsSUFBSSxDQUFBO1FBRWhDLG9CQUFjLEdBQWMsSUFBSSxDQUFBO1FBRWhDLGtCQUFZLEdBQWMsSUFBSSxDQUFBO1FBRTlCLGtCQUFZLEdBQWMsSUFBSSxDQUFBO1FBRTlCLHFCQUFlLEdBQWMsSUFBSSxDQUFDO1FBRWxDLHFCQUFlLEdBQWMsSUFBSSxDQUFDO1FBRWxDLGlCQUFXLEdBQWMsSUFBSSxDQUFBO1FBRTdCLGlCQUFXLEdBQWMsSUFBSSxDQUFBO1FBRTdCLGVBQVMsR0FBYyxJQUFJLENBQUM7UUFFNUIsb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFFL0Isb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFFL0Isb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFFL0IscUJBQWUsR0FBYSxJQUFJLENBQUM7UUFFakMscUJBQWUsR0FBYSxJQUFJLENBQUM7UUFFakMsb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFFL0Isb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFFL0IsZUFBUyxHQUFhLElBQUksQ0FBQztRQUUzQix1QkFBaUIsR0FBbUIsSUFBSSxDQUFDO1FBWS9DLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLEtBQUssRUFBVyxDQUFDO1FBQzdDLEtBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVCxNQUFNLEVBQUUsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7WUFDckMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO1lBQ25DLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztTQUN2QyxDQUFBOztJQUNMLENBQUM7dUJBL0RnQixjQUFjO0lBZ0VyQixpQ0FBUSxHQUFsQjtRQUNJLGdCQUFjLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUUvQixJQUFJLENBQUMsU0FBUztZQUNWLHVDQUFrQjtpQkFDYixRQUFRLEVBQW1CO2lCQUMzQixTQUFTLENBQUMsMkJBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUU1QyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLHlCQUFlLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztRQUNuRCxJQUFJLENBQUMsaUJBQWlCLEdBQUc7WUFDckIsUUFBUSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDO1lBQ3pELFNBQVMsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQztZQUMzRCxPQUFPLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUM7WUFDN0QsUUFBUSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDO1lBQzNELE9BQU8sRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQztZQUMzRCxPQUFPLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUM7U0FDOUQsQ0FBQTtRQUNELElBQUksQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXRELHdDQUE4QixDQUFrRCxVQUFVO2FBQ3JGLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLDZCQUE2QixFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ25DLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNuQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdkMsQ0FBQztJQUVTLHdDQUFlLEdBQXpCO1FBQ0ksT0FBTztRQUNQLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLHVCQUFhLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ2pELHdCQUFjLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBSVMsa0NBQVMsR0FBbkIsVUFBb0IsV0FBb0IsRUFBRSxRQUFRO1FBQzlDLElBQUksV0FBVyxFQUFFO1lBQ2IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztpQkFDNUIsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQTtZQUN6RSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2lCQUM1QixZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFBO1lBQ3pFLGFBQWE7WUFDYixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNqRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNqRCxJQUFJLENBQUMscUJBQXFCLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDeEM7YUFBTTtZQUNILElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7aUJBQzVCLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUE7WUFDMUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztpQkFDNUIsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQTtZQUUxRSxZQUFZO1lBQ1osSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDaEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFFaEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUN4QyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNuQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFFbkMsSUFBSSx5QkFBZSxDQUFDLFFBQVEsQ0FBQyxTQUFTLElBQUkscUJBQVMsQ0FBQyxPQUFPLEVBQUU7Z0JBQ3pELElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUM7Z0JBQ2xFLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUM7YUFDckU7U0FDSjtJQUNMLENBQUM7SUFFTyw4Q0FBcUIsR0FBN0IsVUFBOEIsUUFBa0I7UUFFNUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNsQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFFekMsUUFBUSxRQUFRLEVBQUU7WUFDZCxLQUFLLHFCQUFRLENBQUMsSUFBSTtnQkFDZCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUN6QyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUN6QyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ2xDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDbEMsTUFBTTtZQUNWLEtBQUsscUJBQVEsQ0FBQyxPQUFPO2dCQUNqQixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUN6QyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUN6QyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQ25DLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDbkMsTUFBTTtZQUNWO2dCQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ3hDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ3hDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDbkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNuQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQy9DLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDL0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7U0FDakM7SUFDTCxDQUFDO0lBR1MsZ0RBQXVCLEdBQWpDLFVBQWtDLG1CQUE0QjtRQUUxRCxJQUFJLG1CQUFtQixFQUFFO1lBQ3JCLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVFLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVFLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUNyQzthQUFNO1lBQ0gsSUFBSSxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDMUUsSUFBSSxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3RDO0lBRUwsQ0FBQztJQUVELGlCQUFpQjtJQUNQLG9EQUEyQixHQUFyQyxVQUFzQyxJQUFhO1FBQy9DLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQzlCLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7YUFDVCxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFDLEVBQUUsRUFBQyxNQUFNLEVBQUUsUUFBUSxFQUFDLENBQUM7YUFDMUMsYUFBYSxDQUNWLEVBQUUsQ0FBQyxLQUFLLEVBQUU7YUFDTCxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxNQUFNLEVBQUUsVUFBVSxFQUFDLENBQUM7YUFDdkMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFDLENBQUMsRUFBRSxDQUFDLEVBQUMsRUFBRSxFQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUMsQ0FBQyxDQUM1QyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxlQUFlO0lBQ0wsbURBQTBCLEdBQXBDLFVBQXFDLElBQWE7UUFDOUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWCxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQzthQUNULEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBQyxLQUFLLEVBQUUsQ0FBQyxFQUFDLEVBQUUsRUFBQyxNQUFNLEVBQUUsUUFBUSxFQUFDLENBQUM7YUFDdkMsYUFBYSxDQUNWLEVBQUUsQ0FBQyxLQUFLLEVBQUU7YUFDTCxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBQyxFQUFFLEVBQUMsTUFBTSxFQUFFLFNBQVMsRUFBQyxDQUFDO2FBQ3JDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFDLEVBQUUsRUFBQyxNQUFNLEVBQUUsVUFBVSxFQUFDLENBQUMsQ0FDN0MsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBR1MscUNBQVksR0FBdEIsVUFBdUIsU0FBa0I7UUFFckMsSUFBSSxTQUFTLEVBQUU7WUFDWCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2lCQUMvQixZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDO1lBQzNFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7aUJBQy9CLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUM7U0FDOUU7YUFBTTtZQUNILElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7aUJBQy9CLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUM7WUFDNUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztpQkFDL0IsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQztTQUMvRTtJQUNMLENBQUM7SUFFRDs7O09BR0c7SUFDTyxtQ0FBVSxHQUFwQjtRQUVJLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUVwQyxFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BELEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFcEQsd0JBQXdCO1FBQ3hCLElBQUksQ0FBQyx5QkFBZSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUU7WUFDdkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQztZQUNsRSxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDO1lBQ2xFLHNCQUFZLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUM3QyxPQUFPO1NBQ1Y7UUFFRCx5QkFBeUI7UUFDekIsSUFBSSx5QkFBZSxDQUFDLFFBQVEsQ0FBQyxXQUFXO1lBQ3BDLHlCQUFlLENBQUMsUUFBUSxDQUFDLFFBQVEsSUFBSSxxQkFBUSxDQUFDLElBQUk7WUFDbEQseUJBQWUsQ0FBQyxRQUFRLENBQUMsUUFBUSxJQUFJLHFCQUFRLENBQUMsT0FBTyxFQUN2RDtZQUNFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDeEQ7SUFDTCxDQUFDO0lBRUQ7OztPQUdHO0lBQ08saUNBQVEsR0FBbEI7UUFDSSxJQUFJLHlCQUFlLENBQUMsUUFBUSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsRUFBRTtZQUM3RCxJQUFJLFFBQVEsR0FBRyx5QkFBZSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7WUFDakQscUNBQTJCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQzFFO1FBQ0QsSUFBSSxDQUFDLHlCQUFlLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRTtZQUN2QyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0RCxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN6RDtJQUVMLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ssOENBQXFCLEdBQTdCLFVBQThCLElBQWE7UUFFdkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQztRQUNsRSxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDO1FBRWxFLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2FBQ1QsYUFBYSxDQUNWLEVBQUUsQ0FBQyxLQUFLLEVBQUU7YUFDTCxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxNQUFNLEVBQUUsV0FBVyxFQUFDLENBQUM7YUFDNUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFDLEtBQUssRUFBRSxFQUFFLEVBQUMsRUFBRSxFQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUMsQ0FBQyxDQUNqRCxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7O09BR0c7SUFDTyxxREFBNEIsR0FBdEM7UUFFSSxJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7UUFDdkQsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRS9DLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDcEMsTUFBTTtZQUNOLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMvQyxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDO1lBQ2xDLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRWxELG1CQUFtQjtZQUNuQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMxRSxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQTtZQUNuQyxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakMsWUFBWTtZQUNaLHNCQUFZLENBQUMsY0FBYyxDQUN2QixJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFDNUIscUJBQXFCLEVBQ3JCLElBQUksRUFDSixDQUFDLENBQ0osQ0FBQztTQUNMO1FBRUQsSUFBSSxXQUFXLEdBQUcseUJBQWUsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQztRQUNoRSxJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUvRSxhQUFhLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQzlDLGFBQWEsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFFN0MsbUJBQW1CO1FBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7OztPQUlHO0lBRU8sNENBQW1CLEdBQTdCLFVBQThCLEtBQUssRUFBRSxRQUFnQjtRQUNqRCxJQUFJLFdBQVcsR0FBRyx5QkFBZSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDO1FBQ2hFLHdDQUE4QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFRDs7O09BR0c7SUFDSyxzREFBNkIsR0FBckM7UUFBQSxpQkFRQztRQVBHLElBQUksQ0FBQyxJQUFJLENBQUMsMEJBQTBCLEVBQUU7WUFDbEMsSUFBSSxDQUFDLDBCQUEwQixHQUFHLElBQUksb0NBQTBCLENBQzVELFVBQUMsV0FBVyxFQUFFLFVBQVU7Z0JBQ3BCLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDdEQsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ2hCO1FBQ0QsT0FBTyxJQUFJLENBQUMsMEJBQTBCLENBQUM7SUFDM0MsQ0FBQztJQUVEOzs7OztPQUtHO0lBRUssNENBQW1CLEdBQTNCLFVBQTRCLFdBQW1CLEVBQUUsVUFBa0I7UUFDL0QsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0UsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFN0UsYUFBYSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztRQUM1QyxhQUFhLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBRTVDLFlBQVksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDN0MsWUFBWSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUU1Qyx3QkFBYyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN2Qyx1QkFBYSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUVwQyxDQUFDO0lBR1Msa0NBQVMsR0FBbkI7UUFDSSx3QkFBYyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBRUQ7OztPQUdHO0lBQ08scUNBQVksR0FBdEI7UUFDSSwyQkFBaUIsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDN0MsQ0FBQztJQUVEOzs7T0FHRztJQUNJLHFDQUFZLEdBQW5CLFVBQW9CLE1BQWU7UUFDL0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN2QyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDdEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN0QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDdEMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQzlDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUM5QyxJQUFJLE1BQU0sRUFBRTtZQUNSLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1NBQzlCO2FBQU07WUFDSCxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztTQUM3QjtJQUNMLENBQUM7O0lBalpEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7c0RBQ0csRUFBRSxvQkFBRixFQUFFLENBQUMsTUFBTTt1REFBTztJQUV2QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3NEQUNHLEVBQUUsb0JBQUYsRUFBRSxDQUFDLE1BQU07dURBQU87SUFFdkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztzREFDVyxFQUFFLG9CQUFGLEVBQUUsQ0FBQyxNQUFNOytEQUFPO0lBRS9DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7c0RBQ1csRUFBRSxvQkFBRixFQUFFLENBQUMsTUFBTTsrREFBTztJQUUvQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3NEQUNNLEVBQUUsb0JBQUYsRUFBRSxDQUFDLE1BQU07MERBQU87SUFFMUM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztzREFDTSxFQUFFLG9CQUFGLEVBQUUsQ0FBQyxNQUFNOzBEQUFPO0lBRTFDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7c0RBQ0ksRUFBRSxvQkFBRixFQUFFLENBQUMsTUFBTTt3REFBTztJQUV4QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3NEQUNJLEVBQUUsb0JBQUYsRUFBRSxDQUFDLE1BQU07d0RBQU87SUFFeEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztzREFDTyxFQUFFLG9CQUFGLEVBQUUsQ0FBQyxNQUFNOzJEQUFRO0lBRTVDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7c0RBQ08sRUFBRSxvQkFBRixFQUFFLENBQUMsTUFBTTsyREFBUTtJQUU1QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3NEQUNHLEVBQUUsb0JBQUYsRUFBRSxDQUFDLE1BQU07dURBQU87SUFFdkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztzREFDRyxFQUFFLG9CQUFGLEVBQUUsQ0FBQyxNQUFNO3VEQUFPO0lBRXZDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7c0RBQ0MsRUFBRSxvQkFBRixFQUFFLENBQUMsTUFBTTtxREFBUTtJQUV0QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NEQUNRLEVBQUUsb0JBQUYsRUFBRSxDQUFDLElBQUk7MERBQVE7SUFFekM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztzREFDUSxFQUFFLG9CQUFGLEVBQUUsQ0FBQyxJQUFJOzBEQUFRO0lBRXpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7c0RBQ1EsRUFBRSxvQkFBRixFQUFFLENBQUMsSUFBSTswREFBUTtJQUV6QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3NEQUNRLEVBQUUsb0JBQUYsRUFBRSxDQUFDLEtBQUs7MkRBQVE7SUFFM0M7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztzREFDUSxFQUFFLG9CQUFGLEVBQUUsQ0FBQyxLQUFLOzJEQUFRO0lBRTNDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7c0RBQ1EsRUFBRSxvQkFBRixFQUFFLENBQUMsSUFBSTswREFBUTtJQUV6QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NEQUNRLEVBQUUsb0JBQUYsRUFBRSxDQUFDLElBQUk7MERBQVE7SUFFekM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztzREFDRSxFQUFFLG9CQUFGLEVBQUUsQ0FBQyxLQUFLO3FEQUFRO0lBRXJDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7c0RBQ0ksRUFBRSxvQkFBRixFQUFFLENBQUMsV0FBVzs2REFBUTtJQXlEbkQ7UUFEQyxxQkFBTSxDQUFDLFVBQVUsQ0FBQzs7OzttREErQmxCO0lBa0NEO1FBREMscUJBQU0sQ0FBQyxVQUFVLENBQUM7Ozs7aUVBYWxCO0lBNkJEO1FBREMscUJBQU0sQ0FBQyxVQUFVLENBQUM7Ozs7c0RBY2xCO0lBZ0hEO1FBREMscUJBQU0sQ0FBQyxVQUFVLENBQUM7Ozs7NkRBSWxCO0lBdUJEO1FBREMscUJBQU0sQ0FBQyxVQUFVLENBQUM7Ozs7NkRBY2xCO0lBR0Q7UUFEQyxxQkFBTSxDQUFDLFVBQVUsQ0FBQzs7OzttREFHbEI7SUF4WGdCLGNBQWM7UUFEbEMsT0FBTzs7T0FDYSxjQUFjLENBcVpsQztJQUFELHFCQUFDO0NBclpELEFBcVpDLENBcloyQyx1Q0FBNkIsR0FxWnhFO2tCQXJab0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBdWRpb01hbmFnZXIsIHtFZmZlY3R9IGZyb20gJy4uLy4uL0ZyYW1ld29yay9BdWRpby9BdWRpb01hbmFnZXInXHJcbmltcG9ydCB7QXV0b1R5cGV9IGZyb20gJy4uLy4uL0ZyYW1ld29yay9Db25maWcvRW51bS9Db25maWdFbnVtJ1xyXG5pbXBvcnQgQnV0dG9uTWV0aG9kIGZyb20gJy4uLy4uL0ZyYW1ld29yay9HbG9iYWxNZXRob2QvQnV0dG9uTWV0aG9kJ1xyXG5pbXBvcnQgTGFuZ3VhZ2VNZXRob2QgZnJvbSBcIi4uLy4uL0ZyYW1ld29yay9HbG9iYWxNZXRob2QvTGFuZ3VhZ2VNZXRob2RcIjtcclxuaW1wb3J0IHtHYW1lU3RhdGV9IGZyb20gJy4uLy4uL0ZyYW1ld29yay9Qcm9jZXNzL0VudW0vR2FtZVN0YXRlJ1xyXG5pbXBvcnQgQXV0b1N0YXRlQ2hhbmdlTm90aWZpY2F0aW9uIGZyb20gXCIuLi8uLi9GcmFtZXdvcmsvUHJvY2Vzcy9HYW1lTm90aWZpY2F0aW9uL0F1dG9TdGF0ZUNoYW5nZU5vdGlmaWNhdGlvblwiO1xyXG5pbXBvcnQgVXNlclRvdGFsQmV0Q2hhbmdlTm90aWZpY2F0aW9uIGZyb20gXCIuLi8uLi9GcmFtZXdvcmsvUHJvY2Vzcy9HYW1lTm90aWZpY2F0aW9uL1VzZXJUb3RhbEJldENoYW5nZU5vdGlmaWNhdGlvblwiO1xyXG5pbXBvcnQgVXNlclRvdGFsQmV0Q2hhbmdlT2JzZXJ2ZXIgZnJvbSBcIi4uLy4uL0ZyYW1ld29yay9Qcm9jZXNzL0dhbWVPYnNlcnZlci9Vc2VyVG90YWxCZXRDaGFuZ2VPYnNlcnZlclwiO1xyXG5pbXBvcnQgU2xvdEdhbWVNYW5hZ2VyIGZyb20gJy4uLy4uL0ZyYW1ld29yay9Qcm9jZXNzL1Nsb3RHYW1lTWFuYWdlcidcclxuaW1wb3J0IEFNYWluR2FtZURvdWJsZUJ1dHRvblRlbXBsYXRlXHJcbiAgICBmcm9tICcuLi8uLi9GcmFtZXdvcmsvVGVtcGxhdGUvQnV0dG9uRXZlbnQvTWFpbkJ1dHRvbi9BTWFpbkdhbWVEb3VibGVCdXR0b25UZW1wbGF0ZSdcclxuaW1wb3J0IHtSZXNwb25zZVR5cGV9IGZyb20gXCIuLi8uLi9GcmFtZXdvcmsvV2ViUmVzcG9uc2UvRW51bS9SZXNwb25zZVR5cGVcIjtcclxuaW1wb3J0IE5vTGluZVRhYmxlSW5mbyBmcm9tIFwiLi4vLi4vRnJhbWV3b3JrL1dlYlJlc3BvbnNlL1NldmVyRGF0YU1vZGVsL1RhYmxlSW5mby9Ob0xpbmVUYWJsZUluZm9cIjtcclxuaW1wb3J0IHtXZWJSZXNwb25zZU1hbmFnZXJ9IGZyb20gJy4uLy4uL0ZyYW1ld29yay9XZWJSZXNwb25zZS9XZWJSZXNwb25zZU1hbmFnZXInXHJcbmltcG9ydCBTb2NrZXRTZXR0aW5nIGZyb20gJy4uLy4uL1NvY2tldC9Tb2NrZXRTZXR0aW5nJ1xyXG5pbXBvcnQgU2xvdENvbnRyb2xsZXIgZnJvbSAnLi4vQ29udHJvbGxlci9TbG90Q29udHJvbGxlcidcclxuaW1wb3J0IFdhcm5pbmdDb250cm9sbGVyIGZyb20gJy4uL0NvbnRyb2xsZXIvV2FybmluZ0NvbnRyb2xsZXInXHJcbmltcG9ydCBNYWluR2FtZUxhYmVsIGZyb20gJy4uL0xhYmVsRXZlbnQvTWFpbkdhbWVMYWJlbCdcclxuaW1wb3J0IE1lbnVQYWdlQnV0dG9uIGZyb20gJy4vTWVudVBhZ2VCdXR0b24nXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5HYW1lQnV0dG9uIGV4dGVuZHMgQU1haW5HYW1lRG91YmxlQnV0dG9uVGVtcGxhdGUge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBwcm90ZWN0ZWQgYXV0b0J1dHRvbkg6IGNjLkJ1dHRvbiA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBwcm90ZWN0ZWQgYXV0b0J1dHRvblY6IGNjLkJ1dHRvbiA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBwcm90ZWN0ZWQgYmV0U2VsZWN0aW9uQnV0dG9uSDogY2MuQnV0dG9uID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIHByb3RlY3RlZCBiZXRTZWxlY3Rpb25CdXR0b25WOiBjYy5CdXR0b24gPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgcHJvdGVjdGVkIHNwZWVkVXBCdXR0b25IOiBjYy5CdXR0b24gPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgcHJvdGVjdGVkIHNwZWVkVXBCdXR0b25WOiBjYy5CdXR0b24gPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0QnV0dG9uSDogY2MuQnV0dG9uID0gbnVsbFxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIHByb3RlY3RlZCBzdGFydEJ1dHRvblY6IGNjLkJ1dHRvbiA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnRCdXR0b25JbWdIOiBjYy5TcHJpdGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIHByb3RlY3RlZCBzdGFydEJ1dHRvbkltZ1Y6IGNjLlNwcml0ZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgcHJvdGVjdGVkIG1lbnVCdXR0b25IOiBjYy5CdXR0b24gPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgcHJvdGVjdGVkIG1lbnVCdXR0b25WOiBjYy5CdXR0b24gPSBudWxsXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgcHJvdGVjdGVkIGJldEJ1dHRvbjogY2MuQnV0dG9uID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJvdGVjdGVkIHRvdGFsRnJhbWVOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0QXV0b05vZGVIOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0QXV0b05vZGVWOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHByb3RlY3RlZCBzdGFydEF1dG9Db3VudEg6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHByb3RlY3RlZCBzdGFydEF1dG9Db3VudFY6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0QXV0b0ljb25IOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0QXV0b0ljb25WOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHByb3RlY3RlZCB0aXRsZVRleHQ6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVBdGxhcylcclxuICAgIHByb3RlY3RlZCBidXR0b25TcHJpdGVBdGxhczogY2MuU3ByaXRlQXRsYXMgPSBudWxsO1xyXG4gICAgcHJvdGVjdGVkIHRhYmxlSW5mbzogTm9MaW5lVGFibGVJbmZvO1xyXG4gICAgcHJvdGVjdGVkIGF1dG9Db3VudDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBidXR0b25TcHJpdGVGcmFtZTogeyBTUEVFRF9PRkY6IGNjLlNwcml0ZUZyYW1lOyBBVVRPX09GRjogY2MuU3ByaXRlRnJhbWU7IFNQRUVEX09OOiBjYy5TcHJpdGVGcmFtZTsgQVVUT19PTjogY2MuU3ByaXRlRnJhbWU7IFNUQU5EQlk6IGNjLlNwcml0ZUZyYW1lOyBQTEFZSU5HOiBjYy5TcHJpdGVGcmFtZSB9XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGJldEJ1dHRvblRvQXJyYXk6IEFycmF5PGNjLk5vZGU+Oy8v5omA5pyJ5oq85rOo5oyJ6YiVXHJcblxyXG4gICAgcHJpdmF0ZSB1c2VyVG90YWxCZXRDaGFuZ2VPYnNlcnZlcjogVXNlclRvdGFsQmV0Q2hhbmdlT2JzZXJ2ZXI7XHJcbiAgICBwdWJsaWMgc3RhdGljIGluc3RhbmNlOiBNYWluR2FtZUJ1dHRvbjtcclxuICAgIHByaXZhdGUgY29sb3I6IHsgR1JBWTogY2MuQ29sb3I7IFdISVRFOiBjYy5Db2xvcjsgWUVMTE9XOiBjYy5Db2xvciB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5iZXRCdXR0b25Ub0FycmF5ID0gbmV3IEFycmF5PGNjLk5vZGU+KCk7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IHtcclxuICAgICAgICAgICAgWUVMTE9XOiBjYy5jb2xvcigpLmZyb21IRVgoXCIjRkZFMDAwXCIpLFxyXG4gICAgICAgICAgICBHUkFZOiBjYy5jb2xvcigpLmZyb21IRVgoXCIjOEI4Nzg3XCIpLFxyXG4gICAgICAgICAgICBXSElURTogY2MuY29sb3IoKS5mcm9tSEVYKFwiI0ZGRkNGQ1wiKSxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgb25DcmVhdGUoKSB7XHJcbiAgICAgICAgTWFpbkdhbWVCdXR0b24uaW5zdGFuY2UgPSB0aGlzO1xyXG5cclxuICAgICAgICB0aGlzLnRhYmxlSW5mbyA9XHJcbiAgICAgICAgICAgIFdlYlJlc3BvbnNlTWFuYWdlclxyXG4gICAgICAgICAgICAgICAgLmluc3RhbmNlPE5vTGluZVRhYmxlSW5mbz4oKVxyXG4gICAgICAgICAgICAgICAgLmdldFJlc3VsdChSZXNwb25zZVR5cGUuVEFCTEVfSU5GTyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhcnRCdXR0b25EaXNhYmxlKCk7XHJcbiAgICAgICAgdGhpcy5hdXRvQ291bnQgPSBTbG90R2FtZU1hbmFnZXIuaW5zdGFuY2UuYXV0b1R5cGU7XHJcbiAgICAgICAgdGhpcy5idXR0b25TcHJpdGVGcmFtZSA9IHtcclxuICAgICAgICAgICAgU1BFRURfT046IHRoaXMuYnV0dG9uU3ByaXRlQXRsYXMuZ2V0U3ByaXRlRnJhbWUoXCJGYXN0T25cIiksXHJcbiAgICAgICAgICAgIFNQRUVEX09GRjogdGhpcy5idXR0b25TcHJpdGVBdGxhcy5nZXRTcHJpdGVGcmFtZShcIkZhc3RPZmZcIiksXHJcbiAgICAgICAgICAgIEFVVE9fT046IHRoaXMuYnV0dG9uU3ByaXRlQXRsYXMuZ2V0U3ByaXRlRnJhbWUoXCJidG5fYXV0b19vblwiKSxcclxuICAgICAgICAgICAgQVVUT19PRkY6IHRoaXMuYnV0dG9uU3ByaXRlQXRsYXMuZ2V0U3ByaXRlRnJhbWUoXCJidG5fYXV0b1wiKSxcclxuICAgICAgICAgICAgU1RBTkRCWTogdGhpcy5idXR0b25TcHJpdGVBdGxhcy5nZXRTcHJpdGVGcmFtZShcIlNwaW5fSUNPTlwiKSxcclxuICAgICAgICAgICAgUExBWUlORzogdGhpcy5idXR0b25TcHJpdGVBdGxhcy5nZXRTcHJpdGVGcmFtZShcIlN0b3BfSUNPTlwiKSxcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vZmZCZXRGcmFtZUJ1dHRvbkFuaW1hdGlvbih0aGlzLmJldFNlbGVjdGlvbkJ1dHRvbkgubm9kZS5jaGlsZHJlblswXSk7XHJcbiAgICAgICAgdGhpcy5vZmZCZXRGcmFtZUJ1dHRvbkFuaW1hdGlvbih0aGlzLmJldFNlbGVjdGlvbkJ1dHRvblYubm9kZS5jaGlsZHJlblswXSk7XHJcbiAgICAgICAgdGhpcy5idXR0b25TdGFuQnlBbmltYXRpb24odGhpcy5zdGFydEJ1dHRvbkltZ0gubm9kZSk7XHJcbiAgICAgICAgdGhpcy5idXR0b25TdGFuQnlBbmltYXRpb24odGhpcy5zdGFydEJ1dHRvbkltZ1Yubm9kZSk7XHJcblxyXG4gICAgICAgIFVzZXJUb3RhbEJldENoYW5nZU5vdGlmaWNhdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/mirzms6jkuovku7bmjqjmkq3ntoHlrppcclxuICAgICAgICAgICAgLmluc3RhbmNlLnN1YnNjcmliZSh0aGlzLmdldFVzZXJUb3RhbEJldENoYW5nZU9ic2VydmVyKCksIHRydWUpO1xyXG4gICAgICAgIHRoaXMudG90YWxGcmFtZU5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zdGFydEF1dG9Ob2RlSC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnN0YXJ0QXV0b05vZGVWLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBsYW5ndWFnZVNldHRpbmcoKSB7XHJcbiAgICAgICAgLy/oq4vpgbjmk4fkuIvms6hcclxuICAgICAgICB0aGlzLnRpdGxlVGV4dC5zdHJpbmcgPSBTb2NrZXRTZXR0aW5nLnQoXCJTXzkwMTZcIilcclxuICAgICAgICBMYW5ndWFnZU1ldGhvZC5pbnN0YW5jZS51cGRhdGVMYWJlbFN0eWxlKHRoaXMudGl0bGVUZXh0KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgQEVmZmVjdChcIkJ0bkNsaWNrXCIpXHJcbiAgICBwcm90ZWN0ZWQgYXV0b0V2ZW50KGlzQXV0b1N0YXRlOiBib29sZWFuLCBhdXRvVHlwZSkge1xyXG4gICAgICAgIGlmIChpc0F1dG9TdGF0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmF1dG9CdXR0b25ILm5vZGUuY2hpbGRyZW5bMF1cclxuICAgICAgICAgICAgICAgIC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuYnV0dG9uU3ByaXRlRnJhbWUuQVVUT19PTlxyXG4gICAgICAgICAgICB0aGlzLmF1dG9CdXR0b25WLm5vZGUuY2hpbGRyZW5bMF1cclxuICAgICAgICAgICAgICAgIC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuYnV0dG9uU3ByaXRlRnJhbWUuQVVUT19PTlxyXG4gICAgICAgICAgICAvL+iHquWLleaMiemIlemWi+WVn+aZgumXnOmWieeJueaViFxyXG4gICAgICAgICAgICB0aGlzLmF1dG9CdXR0b25ILm5vZGUuY2hpbGRyZW5bMV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0b0J1dHRvblYubm9kZS5jaGlsZHJlblsxXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5jaGVja0F1dG9UeXBlVG9CdXR0b24oYXV0b1R5cGUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0b0J1dHRvbkgubm9kZS5jaGlsZHJlblswXVxyXG4gICAgICAgICAgICAgICAgLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5idXR0b25TcHJpdGVGcmFtZS5BVVRPX09GRlxyXG4gICAgICAgICAgICB0aGlzLmF1dG9CdXR0b25WLm5vZGUuY2hpbGRyZW5bMF1cclxuICAgICAgICAgICAgICAgIC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuYnV0dG9uU3ByaXRlRnJhbWUuQVVUT19PRkZcclxuXHJcbiAgICAgICAgICAgIC8v6Ieq5YuV5oyJ6YiV5pyq6ZaL5ZWf5pmC54m55pWIXHJcbiAgICAgICAgICAgIHRoaXMuYXV0b0J1dHRvbkgubm9kZS5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmF1dG9CdXR0b25WLm5vZGUuY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRCdXR0b25JbWdILm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zdGFydEJ1dHRvbkltZ1Yubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0QXV0b05vZGVILmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0QXV0b05vZGVWLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgaWYgKFNsb3RHYW1lTWFuYWdlci5pbnN0YW5jZS5nYW1lU3RhdGUgPT0gR2FtZVN0YXRlLlBMQVlJTkcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRCdXR0b25JbWdILnNwcml0ZUZyYW1lID0gdGhpcy5idXR0b25TcHJpdGVGcmFtZS5QTEFZSU5HO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydEJ1dHRvbkltZ1Yuc3ByaXRlRnJhbWUgPSB0aGlzLmJ1dHRvblNwcml0ZUZyYW1lLlBMQVlJTkc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjaGVja0F1dG9UeXBlVG9CdXR0b24oYXV0b1R5cGU6IEF1dG9UeXBlKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhcnRBdXRvTm9kZUguYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnN0YXJ0QXV0b05vZGVWLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zdGFydEJ1dHRvbkltZ0gubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnN0YXJ0QnV0dG9uSW1nVi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKGF1dG9UeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgQXV0b1R5cGUuYXV0bzpcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRBdXRvQ291bnRILm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0QXV0b0NvdW50Vi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydEF1dG9JY29uSC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydEF1dG9JY29uVi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQXV0b1R5cGUuZnJlZUVuZDpcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRBdXRvQ291bnRILm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0QXV0b0NvdW50Vi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydEF1dG9JY29uSC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRBdXRvSWNvblYuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRBdXRvQ291bnRILm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRBdXRvQ291bnRWLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRBdXRvSWNvbkguYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0QXV0b0ljb25WLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydEF1dG9Db3VudEguc3RyaW5nID0gU3RyaW5nKGF1dG9UeXBlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRBdXRvQ291bnRWLnN0cmluZyA9IFN0cmluZyhhdXRvVHlwZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dG9Db3VudCA9IGF1dG9UeXBlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBARWZmZWN0KFwiQnRuQ2xpY2tcIilcclxuICAgIHByb3RlY3RlZCB0b3RhbEJldEZyYW1lVG91Y2hFdmVudChpc1Nob3dUb3RhbEJldEZyYW1lOiBib29sZWFuKSB7XHJcblxyXG4gICAgICAgIGlmIChpc1Nob3dUb3RhbEJldEZyYW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0JldEZyYW1lQnV0dG9uQW5pbWF0aW9uKHRoaXMuYmV0U2VsZWN0aW9uQnV0dG9uSC5ub2RlLmNoaWxkcmVuWzBdKTtcclxuICAgICAgICAgICAgdGhpcy5zaG93QmV0RnJhbWVCdXR0b25BbmltYXRpb24odGhpcy5iZXRTZWxlY3Rpb25CdXR0b25WLm5vZGUuY2hpbGRyZW5bMF0pO1xyXG4gICAgICAgICAgICB0aGlzLnRvdGFsRnJhbWVOb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5vZmZCZXRGcmFtZUJ1dHRvbkFuaW1hdGlvbih0aGlzLmJldFNlbGVjdGlvbkJ1dHRvbkgubm9kZS5jaGlsZHJlblswXSlcclxuICAgICAgICAgICAgdGhpcy5vZmZCZXRGcmFtZUJ1dHRvbkFuaW1hdGlvbih0aGlzLmJldFNlbGVjdGlvbkJ1dHRvblYubm9kZS5jaGlsZHJlblswXSk7XHJcbiAgICAgICAgICAgIHRoaXMudG90YWxGcmFtZU5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvL+aXi+i9iTE4MOW6piDkuIvkuIrmlrnlvI/mjIHnuozot7Pli5VcclxuICAgIHByb3RlY3RlZCBzaG93QmV0RnJhbWVCdXR0b25BbmltYXRpb24obm9kZTogY2MuTm9kZSkge1xyXG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChub2RlKVxyXG4gICAgICAgIG5vZGUueSA9IDA7XHJcbiAgICAgICAgY2MudHdlZW4obm9kZSlcclxuICAgICAgICAgICAgLnRvKDAuMywge2FuZ2xlOiAtMTgwfSwge2Vhc2luZzogXCJzbW9vdGhcIn0pXHJcbiAgICAgICAgICAgIC5yZXBlYXRGb3JldmVyKFxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4oKVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjUsIHt5OiAtMTB9LCB7ZWFzaW5nOiBcInF1aW50T3V0XCJ9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjUsIHt5OiAwfSwge2Vhc2luZzogXCJxdWludEluXCJ9KVxyXG4gICAgICAgICAgICApLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/ovYnmraMw5bqmIOS4iuS4i+aWueW8j+aMgee6jOi3s+WLlVxyXG4gICAgcHJvdGVjdGVkIG9mZkJldEZyYW1lQnV0dG9uQW5pbWF0aW9uKG5vZGU6IGNjLk5vZGUpIHtcclxuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQobm9kZSk7XHJcbiAgICAgICAgbm9kZS55ID0gMDtcclxuICAgICAgICBjYy50d2Vlbihub2RlKVxyXG4gICAgICAgICAgICAudG8oMC4zLCB7YW5nbGU6IDB9LCB7ZWFzaW5nOiBcInNtb290aFwifSlcclxuICAgICAgICAgICAgLnJlcGVhdEZvcmV2ZXIoXHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbigpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuNSwge3k6IDEwfSwge2Vhc2luZzogXCJxdWludEluXCJ9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjUsIHt5OiAwfSwge2Vhc2luZzogXCJxdWludE91dFwifSlcclxuICAgICAgICAgICAgKS5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIEBFZmZlY3QoXCJCdG5DbGlja1wiKVxyXG4gICAgcHJvdGVjdGVkIHNwZWVkVXBFdmVudChpc1NwZWVkVXA6IGJvb2xlYW4pIHtcclxuXHJcbiAgICAgICAgaWYgKGlzU3BlZWRVcCkge1xyXG4gICAgICAgICAgICB0aGlzLnNwZWVkVXBCdXR0b25ILm5vZGUuY2hpbGRyZW5bMF1cclxuICAgICAgICAgICAgICAgIC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuYnV0dG9uU3ByaXRlRnJhbWUuU1BFRURfT047XHJcbiAgICAgICAgICAgIHRoaXMuc3BlZWRVcEJ1dHRvblYubm9kZS5jaGlsZHJlblswXVxyXG4gICAgICAgICAgICAgICAgLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5idXR0b25TcHJpdGVGcmFtZS5TUEVFRF9PTjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNwZWVkVXBCdXR0b25ILm5vZGUuY2hpbGRyZW5bMF1cclxuICAgICAgICAgICAgICAgIC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuYnV0dG9uU3ByaXRlRnJhbWUuU1BFRURfT0ZGO1xyXG4gICAgICAgICAgICB0aGlzLnNwZWVkVXBCdXR0b25WLm5vZGUuY2hpbGRyZW5bMF1cclxuICAgICAgICAgICAgICAgIC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuYnV0dG9uU3ByaXRlRnJhbWUuU1BFRURfT0ZGO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOa1geeoi+mWi+Wni+WJjSBVSeS6i+S7tlxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnRFdmVudCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5zdGFydEJ1dHRvbkltZ0gubm9kZS5hbmdsZSA9IDA7XHJcbiAgICAgICAgdGhpcy5zdGFydEJ1dHRvbkltZ1Yubm9kZS5hbmdsZSA9IDA7XHJcblxyXG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLnN0YXJ0QnV0dG9uSW1nVi5ub2RlKTtcclxuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5zdGFydEJ1dHRvbkltZ0gubm9kZSk7XHJcblxyXG4gICAgICAgIC8v5aaC5p6c6Kmy5bGA54uA5oWL5LiN5pivYXV0b+eLgOaFiyzmiY3ntabkuojmjInpiJXogbLpn7NcclxuICAgICAgICBpZiAoIVNsb3RHYW1lTWFuYWdlci5pbnN0YW5jZS5pc0F1dG9TdGF0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0QnV0dG9uSW1nSC5zcHJpdGVGcmFtZSA9IHRoaXMuYnV0dG9uU3ByaXRlRnJhbWUuUExBWUlORztcclxuICAgICAgICAgICAgdGhpcy5zdGFydEJ1dHRvbkltZ1Yuc3ByaXRlRnJhbWUgPSB0aGlzLmJ1dHRvblNwcml0ZUZyYW1lLlBMQVlJTkc7XHJcbiAgICAgICAgICAgIEF1ZGlvTWFuYWdlci5pbnN0YW5jZS5lZmZlY3RQbGF5KFwiQnRuQ2xpY2tcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v5aaC5p6c55W25YmNYXV0b+eLgOaFi+aYr+acieasoeaVuOeahCzlsIfmuJvljrvoqbLlsYDmrKHmlbhcclxuICAgICAgICBpZiAoU2xvdEdhbWVNYW5hZ2VyLmluc3RhbmNlLmlzQXV0b1N0YXRlICYmXHJcbiAgICAgICAgICAgIFNsb3RHYW1lTWFuYWdlci5pbnN0YW5jZS5hdXRvVHlwZSAhPSBBdXRvVHlwZS5hdXRvICYmXHJcbiAgICAgICAgICAgIFNsb3RHYW1lTWFuYWdlci5pbnN0YW5jZS5hdXRvVHlwZSAhPSBBdXRvVHlwZS5mcmVlRW5kXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0b0NvdW50LS07XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRBdXRvQ291bnRILnN0cmluZyA9IFN0cmluZyh0aGlzLmF1dG9Db3VudCk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRBdXRvQ291bnRWLnN0cmluZyA9IFN0cmluZyh0aGlzLmF1dG9Db3VudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog55W25rWB56iL57WQ5p2f5pmCIFVJ5LqL5Lu2XHJcbiAgICAgKiBAcHJvdGVjdGVkXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBlbmRFdmVudCgpIHtcclxuICAgICAgICBpZiAoU2xvdEdhbWVNYW5hZ2VyLmluc3RhbmNlLmlzQXV0b1N0YXRlICYmIHRoaXMuYXV0b0NvdW50ID09IDApIHtcclxuICAgICAgICAgICAgbGV0IGF1dG9UeXBlID0gU2xvdEdhbWVNYW5hZ2VyLmluc3RhbmNlLmF1dG9UeXBlO1xyXG4gICAgICAgICAgICBBdXRvU3RhdGVDaGFuZ2VOb3RpZmljYXRpb24uaW5zdGFuY2Uubm90aWZ5KGZhbHNlLCBhdXRvVHlwZSwgYXV0b1R5cGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIVNsb3RHYW1lTWFuYWdlci5pbnN0YW5jZS5pc0F1dG9TdGF0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvblN0YW5CeUFuaW1hdGlvbih0aGlzLnN0YXJ0QnV0dG9uSW1nVi5ub2RlKTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b25TdGFuQnlBbmltYXRpb24odGhpcy5zdGFydEJ1dHRvbkltZ0gubm9kZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW+heapn+aooeW8j+S4iyBidXR0b27li5XnlatcclxuICAgICAqIEBwYXJhbSB7Y2MuTm9kZX0gbm9kZVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBidXR0b25TdGFuQnlBbmltYXRpb24obm9kZTogY2MuTm9kZSkge1xyXG5cclxuICAgICAgICB0aGlzLnN0YXJ0QnV0dG9uSW1nSC5zcHJpdGVGcmFtZSA9IHRoaXMuYnV0dG9uU3ByaXRlRnJhbWUuU1RBTkRCWTtcclxuICAgICAgICB0aGlzLnN0YXJ0QnV0dG9uSW1nVi5zcHJpdGVGcmFtZSA9IHRoaXMuYnV0dG9uU3ByaXRlRnJhbWUuU1RBTkRCWTtcclxuXHJcbiAgICAgICAgY2MudHdlZW4obm9kZSlcclxuICAgICAgICAgICAgLnJlcGVhdEZvcmV2ZXIoXHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbigpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvKDAuOCwge2FuZ2xlOiAtNTB9LCB7ZWFzaW5nOiBcImJvdW5jZU91dFwifSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oMC44LCB7YW5nbGU6IDUwfSwge2Vhc2luZzogXCJiYWNrT3V0XCJ9KVxyXG4gICAgICAgICAgICApLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmirzms6joppbnqpfmjInpiJXlr6bnj75cclxuICAgICAqIEBwcm90ZWN0ZWRcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIG1ha2VUb3RhbEJldEJ1dHRvblRvTGlzdGVuZXIoKSB7XHJcblxyXG4gICAgICAgIGxldCBsaW5lQmV0TGVuZ3RoID0gdGhpcy50YWJsZUluZm8uTGluZVRvdGFsQmV0Lmxlbmd0aDtcclxuICAgICAgICBsZXQgY29udGFpbmVyTm9kZSA9IHRoaXMuYmV0QnV0dG9uLm5vZGUucGFyZW50O1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVCZXRMZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAvL+ikh+ijveaMiemIlVxyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYmV0QnV0dG9uLm5vZGUpO1xyXG4gICAgICAgICAgICBub2RlLm5hbWUgPSBcIkJldFwiICsgaSArIFwiX0J1dHRvblwiO1xyXG4gICAgICAgICAgICBsZXQgbGluZUJldFZhbHVlID0gdGhpcy50YWJsZUluZm8uTGluZVRvdGFsQmV0W2ldO1xyXG5cclxuICAgICAgICAgICAgLy/mm7TmlrDoqbJiZXQgYnV0dG9u5YWn55qE5pW45a2XXHJcbiAgICAgICAgICAgIGxldCBsYWJlbCA9IG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiZXROdW1iZXJfTGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICAgICAgbGFiZWwuc3RyaW5nID0gU3RyaW5nKGxpbmVCZXRWYWx1ZSlcclxuICAgICAgICAgICAgY29udGFpbmVyTm9kZS5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgdGhpcy5iZXRCdXR0b25Ub0FycmF5LnB1c2gobm9kZSk7XHJcbiAgICAgICAgICAgIC8v57aB5a6a5YWo6YOo5oyJ6YiV6bue5pOK5LqL5Lu2XHJcbiAgICAgICAgICAgIEJ1dHRvbk1ldGhvZC5hZGRCdXR0b25FdmVudChcclxuICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbiksXHJcbiAgICAgICAgICAgICAgICBcImJldEJ1dHRvblRvdWNoRXZlbnRcIixcclxuICAgICAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgICAgICAgICBpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbm93QmV0SW5kZXggPSBTbG90R2FtZU1hbmFnZXIuaW5zdGFuY2UudXNlckJldFBvaW50LkxpbmVCZXQ7XHJcbiAgICAgICAgbGV0IGluaXRpYWxCZXRJbWcgPSB0aGlzLmJldEJ1dHRvblRvQXJyYXlbbm93QmV0SW5kZXhdLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG5cclxuICAgICAgICBpbml0aWFsQmV0SW1nLm5vcm1hbENvbG9yID0gdGhpcy5jb2xvci5ZRUxMT1c7XHJcbiAgICAgICAgaW5pdGlhbEJldEltZy5ob3ZlckNvbG9yID0gdGhpcy5jb2xvci5ZRUxMT1c7XHJcblxyXG4gICAgICAgIC8v55W25YWo6YOo5oyJ6YiV5re75Yqg5a6MLOWIqumZpOikh+ijveeUqOeahOaMiemIlVxyXG4gICAgICAgIHRoaXMuYmV0QnV0dG9uLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog57i95oq85L2P6KaW56qX5LitLOWQhOWIpeaKvOS9j+aMiemIlem7nuaZgiDmjqjmkq3kuovku7ZcclxuICAgICAqIEBwYXJhbSBldmVudFxyXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXHJcbiAgICAgKi9cclxuICAgIEBFZmZlY3QoXCJCdG5DbGlja1wiKVxyXG4gICAgcHJvdGVjdGVkIGJldEJ1dHRvblRvdWNoRXZlbnQoZXZlbnQsIGNhbGxiYWNrOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgYmVmb3JlSW5kZXggPSBTbG90R2FtZU1hbmFnZXIuaW5zdGFuY2UudXNlckJldFBvaW50LkxpbmVCZXQ7XHJcbiAgICAgICAgVXNlclRvdGFsQmV0Q2hhbmdlTm90aWZpY2F0aW9uLmluc3RhbmNlLm5vdGlmeShiZWZvcmVJbmRleCwgY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog55uj6IG9IOWmguaenOacieabtOaPm+aKvOazqOmHkemhjSDlsIfmm7TmlrDnlbbliY3ni4DmhYtcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZ2V0VXNlclRvdGFsQmV0Q2hhbmdlT2JzZXJ2ZXIoKTogVXNlclRvdGFsQmV0Q2hhbmdlT2JzZXJ2ZXIge1xyXG4gICAgICAgIGlmICghdGhpcy51c2VyVG90YWxCZXRDaGFuZ2VPYnNlcnZlcikge1xyXG4gICAgICAgICAgICB0aGlzLnVzZXJUb3RhbEJldENoYW5nZU9ic2VydmVyID0gbmV3IFVzZXJUb3RhbEJldENoYW5nZU9ic2VydmVyKFxyXG4gICAgICAgICAgICAgICAgKGJlZm9yZUluZGV4LCBhZnRlckluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVUb3RhbEJldEV2ZW50KGJlZm9yZUluZGV4LCBhZnRlckluZGV4KTtcclxuICAgICAgICAgICAgICAgIH0sIHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy51c2VyVG90YWxCZXRDaGFuZ2VPYnNlcnZlcjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOabtOaWsCDnlKjmiLbmirzkvY/kuovku7ZcclxuICAgICAqIEBwYXJhbSBiZWZvcmVJbmRleHtudW1iZXJ9IDog5pu05paw5YmN55qE5oq85L2P5L2N572uXHJcbiAgICAgKiBAcGFyYW0gYWZ0ZXJJbmRleHtudW1iZXJ9IDog5pu05paw5b6M55qE5oq85L2P5L2N572uXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBARWZmZWN0KFwiQnRuQ2xpY2tcIilcclxuICAgIHByaXZhdGUgdXBkYXRlVG90YWxCZXRFdmVudChiZWZvcmVJbmRleDogbnVtYmVyLCBhZnRlckluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgYmVmb3JlQmV0Tm9kZSA9IHRoaXMuYmV0QnV0dG9uVG9BcnJheVtiZWZvcmVJbmRleF0uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICAgICAgbGV0IGFmdGVyQmV0Tm9kZSA9IHRoaXMuYmV0QnV0dG9uVG9BcnJheVthZnRlckluZGV4XS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuXHJcbiAgICAgICAgYmVmb3JlQmV0Tm9kZS5ub3JtYWxDb2xvciA9IHRoaXMuY29sb3IuR1JBWTtcclxuICAgICAgICBiZWZvcmVCZXROb2RlLmhvdmVyQ29sb3IgPSB0aGlzLmNvbG9yLldISVRFO1xyXG5cclxuICAgICAgICBhZnRlckJldE5vZGUubm9ybWFsQ29sb3IgPSB0aGlzLmNvbG9yLllFTExPVztcclxuICAgICAgICBhZnRlckJldE5vZGUuaG92ZXJDb2xvciA9IHRoaXMuY29sb3IuWUVMTE9XO1xyXG5cclxuICAgICAgICBTbG90Q29udHJvbGxlci5pbnN0YW5jZS5jbG9zZVdpbkdyaWQoKTtcclxuICAgICAgICBNYWluR2FtZUxhYmVsLmluc3RhbmNlLnJlbW92ZSgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBARWZmZWN0KFwiT3Blbk1lbnVcIilcclxuICAgIHByb3RlY3RlZCBtZW51RXZlbnQoKSB7XHJcbiAgICAgICAgTWVudVBhZ2VCdXR0b24uaW5zdGFuY2Uuc2hvd01lbnUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOitpuWRiuS6i+S7tlxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgd2FybmluZ0V2ZW50KCkge1xyXG4gICAgICAgIFdhcm5pbmdDb250cm9sbGVyLmluc3RhbmNlLnNob3dXYXJuaW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDkuIDoiKzni4DmhYvoiIflhY3osrvni4DmhYvkuK3liIfmj5vpoa/npLpidXR0b25cclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNTaG93XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzd2l0Y2hCdXR0b24oaXNTaG93OiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydEJ1dHRvbkgubm9kZS5hY3RpdmUgPSBpc1Nob3c7XHJcbiAgICAgICAgdGhpcy5zdGFydEJ1dHRvblYubm9kZS5hY3RpdmUgPSBpc1Nob3c7XHJcbiAgICAgICAgdGhpcy5hdXRvQnV0dG9uSC5ub2RlLmFjdGl2ZSA9IGlzU2hvdztcclxuICAgICAgICB0aGlzLmF1dG9CdXR0b25WLm5vZGUuYWN0aXZlID0gaXNTaG93O1xyXG4gICAgICAgIHRoaXMubWVudUJ1dHRvbkgubm9kZS5hY3RpdmUgPSBpc1Nob3c7XHJcbiAgICAgICAgdGhpcy5tZW51QnV0dG9uVi5ub2RlLmFjdGl2ZSA9IGlzU2hvdztcclxuICAgICAgICB0aGlzLmJldFNlbGVjdGlvbkJ1dHRvbkgubm9kZS5hY3RpdmUgPSBpc1Nob3c7XHJcbiAgICAgICAgdGhpcy5iZXRTZWxlY3Rpb25CdXR0b25WLm5vZGUuYWN0aXZlID0gaXNTaG93O1xyXG4gICAgICAgIGlmIChpc1Nob3cpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydEJ1dHRvbk9uRW5hYmxlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydEJ1dHRvbkRpc2FibGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19