"use strict";
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