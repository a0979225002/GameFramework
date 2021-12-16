
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/MainGameScript/ButtonEvent/MenuPageButton.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '443f41PEVhC8pcLSMOv8E4c', 'MenuPageButton');
// script/MainGameScript/ButtonEvent/MenuPageButton.ts

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
var SlotGameManager_1 = require("../../Framework/Process/SlotGameManager");
var SceneStyle_1 = require("../../Framework/Scene/Enum/SceneStyle");
var SceneManager_1 = require("../../Framework/Scene/SceneManager");
var SceneDirectionChangeNotification_1 = require("../../Framework/Scene/SceneNotification/SceneDirectionChangeNotification");
var SceneDirectionChangeObserver_1 = require("../../Framework/Scene/SceneObserver/SceneDirectionChangeObserver");
var AMenuDoubleButtonTemplate_1 = require("../../Framework/Template/ButtonEvent/MenuButton/AMenuDoubleButtonTemplate");
var WebRequestManager_1 = require("../../Framework/WebRequest/WebRequestManager");
var ResponseType_1 = require("../../Framework/WebResponse/Enum/ResponseType");
var WebResponseManager_1 = require("../../Framework/WebResponse/WebResponseManager");
var Socket_1 = require("../../Socket/Socket");
var MainGameButton_1 = require("./MainGameButton");
var RecordPageButton_1 = require("./RecordPageButton");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UserNowPage;
(function (UserNowPage) {
    /**
     * 紀錄頁
     * @type {UserNowPage.RECORD_PAGE}
     */
    UserNowPage["RECORD_PAGE"] = "RECORD_PAGE";
    /**
     * 設定頁
     * @type {UserNowPage.SETTING_PAGE}
     */
    UserNowPage["SETTING_PAGE"] = "SETTING_PAGE";
    /**
     * 說明頁
     * @type {UserNowPage.DESCRIPTION_PAGE}
     */
    UserNowPage["DESCRIPTION_PAGE"] = "DESCRIPTION_PAGE";
})(UserNowPage || (UserNowPage = {}));
var MenuPageButton = /** @class */ (function (_super) {
    __extends(MenuPageButton, _super);
    function MenuPageButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.menuNodeH = null;
        _this.menuNodeV = null;
        _this.musicButtonH = null;
        _this.musicButtonV = null;
        _this.effectButtonH = null;
        _this.effectButtonV = null;
        _this.betDownButtonH = null;
        _this.betDownButtonV = null;
        _this.betUpButtonH = null;
        _this.betUpButtonV = null;
        _this.autoButtonH = null;
        _this.autoButtonV = null;
        _this.auto50ButtonH = null;
        _this.auto50ButtonV = null;
        _this.auto100ButtonH = null;
        _this.auto100ButtonV = null;
        _this.auto500ButtonH = null;
        _this.auto500ButtonV = null;
        _this.auto1000ButtonH = null;
        _this.auto1000ButtonV = null;
        _this.autoFreeEndButtonH = null;
        _this.autoFreeEndButtonV = null;
        _this.goBackButtonH = null;
        _this.goBackButtonV = null;
        _this.goHomeButtonH = null;
        _this.goHomeButtonV = null;
        _this.recordButtonH = null;
        _this.recordButtonV = null;
        _this.settingButtonH = null;
        _this.settingButtonV = null;
        _this.descriptionPageButtonH = null;
        _this.descriptionPageButtonV = null;
        //---------------自訂義------------------------------
        _this.gameInfoNodeH = null;
        _this.gameInfoNodeV = null;
        _this.gameInfoNextPageButtonH = null;
        _this.gameInfoNextPageButtonV = null;
        _this.gameInfoPreviousPageButtonH = null;
        _this.gameInfoPreviousPageButtonV = null;
        _this.settingPageH = null;
        _this.settingPageV = null;
        _this.descriptionPageH = null;
        _this.descriptionPageV = null;
        _this.musicIconH = null;
        _this.musicIconV = null;
        _this.effectIconH = null;
        _this.effectIconV = null;
        _this.lineBetLabelH = null;
        _this.lineBetLabelV = null;
        _this.lineLabelH = null;
        _this.lineLabelV = null;
        _this.lineBetMoneyLabelH = null;
        _this.lineBetMoneyLabelV = null;
        _this.icon = [];
        return _this;
    }
    MenuPageButton_1 = MenuPageButton;
    MenuPageButton.prototype.onCreate = function () {
        MenuPageButton_1.instance = this;
        this.tableInfo =
            WebResponseManager_1.WebResponseManager
                .instance()
                .getResult(ResponseType_1.ResponseType.TABLE_INFO);
        this.color = {
            YELLOW: cc.color().fromHEX("#FFC000"),
            COAL_BLACK: cc.color().fromHEX("#191919"),
            GREY: cc.color().fromHEX("#646464"),
            PALE_GREY: cc.color().fromHEX("#C5C5C5"),
            WHITE: cc.color().fromHEX("#FFFFFF"),
            BLACK: cc.color().fromHEX("#000000"),
            BROWN: cc.color().fromHEX("#5E4F43"),
        };
        this.autoIcon = {
            SHORT_CLOSE: this.icon[0],
            SHORT_OPEN: this.icon[1],
            LONG_CLOSE: this.icon[2],
            LONG_OPEN: this.icon[3] //長按鈕打開時圖案
        };
        if (!WebRequestManager_1.default.instance.backHomeURL) { //檢查是否有返回首頁URL,如果沒有,將返回首頁按鈕關閉
            this.goHomeButtonH.node.active = false;
            this.goHomeButtonV.node.active = false;
        }
        SceneDirectionChangeNotification_1.default
            .instance.subscribe(this.sceneDirectionObserverListener(), true); //註冊直橫式監聽
        this.initialize(); //初始設定頁按鈕
        this.setDescriptionButtonListener(); //說明頁按鈕監聽事件添加
        this.nowPage = UserNowPage.DESCRIPTION_PAGE; //初始默認有直即可,隨機一個,都可
        this.closeMenu(); //初始關閉menu
    };
    /**
     * 說明頁按鈕監聽事件添加
     */
    MenuPageButton.prototype.setDescriptionButtonListener = function () {
        //上一頁按鈕
        ButtonMethod_1.default.addButtonEvent(this.gameInfoPreviousPageButtonH, "descriptionButtonEvent", this, "previous");
        ButtonMethod_1.default.addButtonEvent(this.gameInfoPreviousPageButtonV, "descriptionButtonEvent", this, "previous");
        //下一頁按鈕
        ButtonMethod_1.default.addButtonEvent(this.gameInfoNextPageButtonH, "descriptionButtonEvent", this, "next");
        ButtonMethod_1.default.addButtonEvent(this.gameInfoNextPageButtonV, "descriptionButtonEvent", this, "next");
    };
    /**
     * 更換說明頁頁數按鈕,上一頁,下一頁
     * @param event
     * @param callBack
     */
    MenuPageButton.prototype.descriptionButtonEvent = function (event, callBack) {
        if (callBack === "previous") {
            var pageIndexH = this.descriptionPageH.getCurrentPageIndex() - 1;
            var pageIndexV = this.descriptionPageV.getCurrentPageIndex() - 1;
            this.descriptionPageH.setCurrentPageIndex(pageIndexH);
            this.descriptionPageV.setCurrentPageIndex(pageIndexV);
            return;
        }
        if (callBack === "next") {
            var pageIndexH = this.descriptionPageH.getCurrentPageIndex() + 1;
            var pageIndexV = this.descriptionPageV.getCurrentPageIndex() + 1;
            this.descriptionPageH.setCurrentPageIndex(pageIndexH);
            this.descriptionPageV.setCurrentPageIndex(pageIndexV);
            return;
        }
    };
    /**
     * 初始setting 按鈕
     */
    MenuPageButton.prototype.initialize = function () {
        //初始背景音樂按鈕位置
        if (AudioManager_1.default.instance.musicOnMute) {
            this.musicIconH.x = -50;
            this.musicIconV.x = -50;
            this.musicIconH.color = this.color.COAL_BLACK;
            this.musicIconV.color = this.color.COAL_BLACK;
        }
        else {
            this.musicIconH.x = 50;
            this.musicIconV.x = 50;
            this.musicIconH.color = this.color.YELLOW;
            this.musicIconV.color = this.color.YELLOW;
        }
        //初始效果音樂按鈕位置
        if (AudioManager_1.default.instance.effectOnMute) {
            this.effectIconH.x = -50;
            this.effectIconV.x = -50;
            this.effectIconH.color = this.color.COAL_BLACK;
            this.effectIconV.color = this.color.COAL_BLACK;
        }
        else {
            this.effectIconH.x = 50;
            this.effectIconV.x = 50;
            this.effectIconH.color = this.color.YELLOW;
            this.effectIconV.color = this.color.YELLOW;
        }
        //初始化自動模式按鈕樣式
        this.checkAutoNode(SlotGameManager_1.default.instance.autoType, true);
        //拿取初始的押住index
        var betIndex = SlotGameManager_1.default.instance.userBetPoint.LineBet;
        //更新當前押注倍率
        this.lineBetLabelH.string =
            String(this.tableInfo.LineBet[betIndex]);
        this.lineBetLabelV.string =
            String(this.tableInfo.LineBet[betIndex]);
        //更新當前押注總金額
        this.lineBetMoneyLabelH.string =
            String(this.tableInfo.LineTotalBet[betIndex]);
        this.lineBetMoneyLabelV.string =
            String(this.tableInfo.LineTotalBet[betIndex]);
    };
    /**
     * 直橫向監聽器
     */
    MenuPageButton.prototype.sceneDirectionObserverListener = function () {
        var _this = this;
        return new SceneDirectionChangeObserver_1.default(function (type) {
            if (!_this.menuNodeH.active && !_this.menuNodeV.active)
                return;
            if (type == SceneStyle_1.SceneDirectionType.LANDSCAPE) {
                _this.menuNodeH.active = true;
                _this.menuNodeV.active = false;
            }
            else if (type == SceneStyle_1.SceneDirectionType.PORTRAIT) {
                _this.menuNodeH.active = false;
                _this.menuNodeV.active = true;
            }
            else {
                cc.log("MainGameSetting sceneDirectionEvent() \u6709\u932F\u8AA4 : " + type);
            }
        }, this);
    };
    /**
     * 背景音事件
     * @param isOnMute
     * @protected
     */
    MenuPageButton.prototype.musicEvent = function (isOnMute) {
        if (isOnMute) {
            this.audioButtonSettingAnimation(this.musicIconH, -50, this.color.COAL_BLACK);
            this.audioButtonSettingAnimation(this.musicIconV, -50, this.color.COAL_BLACK);
        }
        else {
            this.audioButtonSettingAnimation(this.musicIconH, 50, this.color.YELLOW);
            this.audioButtonSettingAnimation(this.musicIconV, 50, this.color.YELLOW);
        }
    };
    /**
     * 效果音事件
     * @param isOnMute
     * @protected
     */
    MenuPageButton.prototype.effectEvent = function (isOnMute) {
        if (isOnMute) {
            this.audioButtonSettingAnimation(this.effectIconH, -50, this.color.COAL_BLACK);
            this.audioButtonSettingAnimation(this.effectIconV, -50, this.color.COAL_BLACK);
        }
        else {
            this.audioButtonSettingAnimation(this.effectIconH, 50, this.color.YELLOW);
            this.audioButtonSettingAnimation(this.effectIconV, 50, this.color.YELLOW);
        }
    };
    /**
     * 音樂按鈕點擊時動畫
     * @param node
     * @param x
     * @param color
     * @private
     */
    MenuPageButton.prototype.audioButtonSettingAnimation = function (node, x, color) {
        cc.tween(node)
            .to(0.3, { x: x, color: color }, { easing: "" })
            .start();
    };
    MenuPageButton.prototype.autoEvent = function (beforeAutoCount, afterAutoCount) {
        this.checkAutoNode(beforeAutoCount, false);
        this.checkAutoNode(afterAutoCount, true);
        this.closeMenu();
        MainGameButton_1.default.instance.startButtonOnEnable();
    };
    MenuPageButton.prototype.checkAutoNode = function (autoType, isOpen) {
        switch (autoType) {
            case ConfigEnum_1.AutoType.auto:
                isOpen ? this.updateAutoImg(this.autoButtonH, this.autoIcon.LONG_OPEN, true) :
                    this.updateAutoImg(this.autoButtonH, this.autoIcon.LONG_CLOSE, false);
                isOpen ? this.updateAutoImg(this.autoButtonV, this.autoIcon.LONG_OPEN, true) :
                    this.updateAutoImg(this.autoButtonV, this.autoIcon.LONG_CLOSE, false);
                return;
        }
        switch (autoType) {
            case ConfigEnum_1.AutoType.auto50:
                isOpen ? this.updateAutoImg(this.auto50ButtonH, this.autoIcon.SHORT_OPEN, true) :
                    this.updateAutoImg(this.auto50ButtonH, this.autoIcon.SHORT_CLOSE, false);
                isOpen ? this.updateAutoImg(this.auto50ButtonV, this.autoIcon.SHORT_OPEN, true) :
                    this.updateAutoImg(this.auto50ButtonV, this.autoIcon.SHORT_CLOSE, false);
                return;
        }
        switch (autoType) {
            case ConfigEnum_1.AutoType.auto100:
                isOpen ? this.updateAutoImg(this.auto100ButtonH, this.autoIcon.SHORT_OPEN, true) :
                    this.updateAutoImg(this.auto100ButtonH, this.autoIcon.SHORT_CLOSE, false);
                isOpen ? this.updateAutoImg(this.auto100ButtonV, this.autoIcon.SHORT_OPEN, true) :
                    this.updateAutoImg(this.auto100ButtonV, this.autoIcon.SHORT_CLOSE, false);
                return;
        }
        switch (autoType) {
            case ConfigEnum_1.AutoType.auto500:
                isOpen ? this.updateAutoImg(this.auto500ButtonH, this.autoIcon.SHORT_OPEN, true) :
                    this.updateAutoImg(this.auto500ButtonH, this.autoIcon.SHORT_CLOSE, false);
                isOpen ? this.updateAutoImg(this.auto500ButtonV, this.autoIcon.SHORT_OPEN, true) :
                    this.updateAutoImg(this.auto500ButtonV, this.autoIcon.SHORT_CLOSE, false);
                return;
        }
        switch (autoType) {
            case ConfigEnum_1.AutoType.auto1000:
                isOpen ? this.updateAutoImg(this.auto1000ButtonH, this.autoIcon.SHORT_OPEN, true) :
                    this.updateAutoImg(this.auto1000ButtonH, this.autoIcon.SHORT_CLOSE, false);
                isOpen ? this.updateAutoImg(this.auto1000ButtonV, this.autoIcon.SHORT_OPEN, true) :
                    this.updateAutoImg(this.auto1000ButtonV, this.autoIcon.SHORT_CLOSE, false);
                return;
        }
        switch (autoType) {
            case ConfigEnum_1.AutoType.freeEnd:
                isOpen ? this.updateAutoImg(this.autoFreeEndButtonH, this.autoIcon.LONG_OPEN, true) :
                    this.updateAutoImg(this.autoFreeEndButtonH, this.autoIcon.LONG_CLOSE, false);
                isOpen ? this.updateAutoImg(this.autoFreeEndButtonV, this.autoIcon.LONG_OPEN, true) :
                    this.updateAutoImg(this.autoFreeEndButtonV, this.autoIcon.LONG_CLOSE, false);
                return;
        }
        throw Error("\u81EA\u52D5\u53C3\u6578\u932F\u8AA4 " + autoType);
    };
    /**
     * 當用戶點擊auto按鈕時,更換該按鈕顏色
     * @param buttonToSprite
     * @param img
     * @param isOpen
     * @private
     */
    MenuPageButton.prototype.updateAutoImg = function (buttonToSprite, img, isOpen) {
        var sprite = buttonToSprite.getComponent(cc.Sprite);
        if (isOpen) {
            buttonToSprite.node.children[0].color = this.color.BLACK;
        }
        else {
            buttonToSprite.node.children[0].color = this.color.WHITE;
        }
        sprite.spriteFrame = img;
    };
    /**
     * 返回首頁
     * @protected
     */
    MenuPageButton.prototype.goHomeTouchEvent = function () {
        Socket_1.socketJS.backHome();
    };
    /**
     * 祥單
     * @protected
     */
    MenuPageButton.prototype.recordPageTouchEvent = function () {
        var beforePage = this.nowPage;
        var afterPage = (this.nowPage = UserNowPage.RECORD_PAGE);
        this.changePage(beforePage, false);
        this.changePage(afterPage, true);
    };
    /**
     * 設定頁
     * @protected
     */
    MenuPageButton.prototype.settingPageTouchEvent = function () {
        var beforePage = this.nowPage;
        var afterPage = (this.nowPage = UserNowPage.SETTING_PAGE);
        this.changePage(beforePage, false);
        this.changePage(afterPage, true);
    };
    /**
     * 說明頁
     * @protected
     */
    MenuPageButton.prototype.descriptionPageEvent = function () {
        var beforePage = this.nowPage;
        var afterPage = (this.nowPage = UserNowPage.DESCRIPTION_PAGE);
        this.changePage(beforePage, false);
        this.changePage(afterPage, true);
    };
    /**
     * 返回遊戲頁面
     * @protected
     */
    MenuPageButton.prototype.goBackTouchEvent = function () {
        this.closeMenu();
        MainGameButton_1.default.instance.startButtonOnEnable();
    };
    /**
     * 更新底部 換頁,(PageButton)更換顏色
     */
    MenuPageButton.prototype.changePage = function (pageType, isOpen) {
        switch (pageType) {
            case UserNowPage.RECORD_PAGE:
                if (isOpen) {
                    this.makePageButtonToColorH(this.recordButtonH, true);
                    this.makePageButtonToColorV(this.recordButtonV, true);
                    RecordPageButton_1.default.instance.showRecordPage().then();
                    this.closeMenu();
                }
                else {
                    this.makePageButtonToColorH(this.recordButtonH, false);
                    this.makePageButtonToColorV(this.recordButtonV, false);
                }
                break;
            case UserNowPage.SETTING_PAGE:
                if (isOpen) {
                    this.makePageButtonToColorH(this.settingButtonH, true);
                    this.makePageButtonToColorV(this.settingButtonV, true);
                    this.settingPageH.active = true;
                    this.settingPageV.active = true;
                }
                else {
                    this.makePageButtonToColorH(this.settingButtonH, false);
                    this.makePageButtonToColorV(this.settingButtonV, false);
                    this.settingPageH.active = false;
                    this.settingPageV.active = false;
                }
                break;
            case UserNowPage.DESCRIPTION_PAGE:
                if (isOpen) {
                    this.makePageButtonToColorH(this.descriptionPageButtonH, true);
                    this.makePageButtonToColorV(this.descriptionPageButtonV, true);
                    this.descriptionPageH.node.active = true;
                    this.descriptionPageV.node.active = true;
                    this.gameInfoNodeH.active = true;
                    this.gameInfoNodeV.active = true;
                }
                else {
                    this.makePageButtonToColorH(this.descriptionPageButtonH, false);
                    this.makePageButtonToColorV(this.descriptionPageButtonV, false);
                    this.descriptionPageH.node.active = false;
                    this.descriptionPageV.node.active = false;
                    this.gameInfoNodeH.active = false;
                    this.gameInfoNodeV.active = false;
                }
                break;
            default:
                cc.log("MenuButton.updatePageButtonColor() 有錯誤", pageType);
        }
    };
    /**
     * 當user點擊button時更換底部換頁Button 背景顏色
     * @param button
     * @param isOpen
     * @private
     */
    MenuPageButton.prototype.makePageButtonToColorH = function (button, isOpen) {
        var bg = button.node.children[0];
        var icon = bg.children[0];
        if (isOpen) {
            button.hoverColor = this.color.WHITE;
            button.normalColor = this.color.WHITE;
            bg.color = this.color.BROWN;
            icon.color = this.color.WHITE;
        }
        else {
            button.hoverColor = this.color.PALE_GREY;
            button.normalColor = this.color.GREY;
            bg.color = this.color.BLACK;
            icon.color = this.color.YELLOW;
        }
    };
    /**
     * 當user點擊button時更換底部換頁Button 背景顏色
     * @param button
     * @param isOpen
     * @private
     */
    MenuPageButton.prototype.makePageButtonToColorV = function (button, isOpen) {
        var icon = button.node.children[0];
        if (isOpen) {
            button.hoverColor = this.color.WHITE;
            button.normalColor = this.color.WHITE;
            icon.color = this.color.WHITE;
        }
        else {
            button.hoverColor = this.color.PALE_GREY;
            button.normalColor = this.color.GREY;
            icon.color = this.color.YELLOW;
        }
    };
    /**
     * 由抽象類綁定
     * 當user有更動押住分數時,透過觀察者模式自動更新
     * @param beforeIndex
     * @param afterIndex
     * @protected
     */
    MenuPageButton.prototype.totalBetChangeEvent = function (beforeIndex, afterIndex) {
        var lineBetValue = String(this.tableInfo.LineBet[afterIndex]);
        var lineTotalBetValue = String(this.tableInfo.LineTotalBet[afterIndex]);
        this.lineBetLabelH.string = lineBetValue;
        this.lineBetLabelV.string = lineBetValue;
        this.lineBetMoneyLabelH.string = lineTotalBetValue;
        this.lineBetMoneyLabelV.string = lineTotalBetValue;
    };
    /**
     * 顯示menu組件
     */
    MenuPageButton.prototype.showMenu = function () {
        MainGameButton_1.default.instance.startButtonDisable();
        var direction = SceneManager_1.default.instance.sceneDirection;
        if (direction == SceneStyle_1.SceneDirectionType.LANDSCAPE) {
            this.menuNodeH.active = true;
            this.menuNodeV.active = false;
        }
        else if (direction == SceneStyle_1.SceneDirectionType.PORTRAIT) {
            this.menuNodeH.active = false;
            this.menuNodeV.active = true;
        }
        else {
            cc.log("有錯誤:", direction);
        }
    };
    /**
     * 關閉menu 組件,並初始化下次打開時的狀態
     * @private
     */
    MenuPageButton.prototype.closeMenu = function () {
        this.changePage(this.nowPage, false);
        this.changePage(UserNowPage.SETTING_PAGE, true);
        this.nowPage = UserNowPage.SETTING_PAGE;
        this.menuNodeH.active = false;
        this.menuNodeV.active = false;
        this.descriptionPageH.setCurrentPageIndex(0);
        this.descriptionPageV.setCurrentPageIndex(0);
    };
    var MenuPageButton_1, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30;
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_b = typeof cc !== "undefined" && cc.Node) === "function" ? _b : Object)
    ], MenuPageButton.prototype, "menuNodeH", void 0);
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_c = typeof cc !== "undefined" && cc.Node) === "function" ? _c : Object)
    ], MenuPageButton.prototype, "menuNodeV", void 0);
    __decorate([
        property(cc.Button),
        __metadata("design:type", typeof (_d = typeof cc !== "undefined" && cc.Button) === "function" ? _d : Object)
    ], MenuPageButton.prototype, "musicButtonH", void 0);
    __decorate([
        property(cc.Button),
        __metadata("design:type", typeof (_e = typeof cc !== "undefined" && cc.Button) === "function" ? _e : Object)
    ], MenuPageButton.prototype, "musicButtonV", void 0);
    __decorate([
        property(cc.Button),
        __metadata("design:type", typeof (_f = typeof cc !== "undefined" && cc.Button) === "function" ? _f : Object)
    ], MenuPageButton.prototype, "effectButtonH", void 0);
    __decorate([
        property(cc.Button),
        __metadata("design:type", typeof (_g = typeof cc !== "undefined" && cc.Button) === "function" ? _g : Object)
    ], MenuPageButton.prototype, "effectButtonV", void 0);
    __decorate([
        property(cc.Button),
        __metadata("design:type", typeof (_h = typeof cc !== "undefined" && cc.Button) === "function" ? _h : Object)
    ], MenuPageButton.prototype, "betDownButtonH", void 0);
    __decorate([
        property(cc.Button),
        __metadata("design:type", typeof (_j = typeof cc !== "undefined" && cc.Button) === "function" ? _j : Object)
    ], MenuPageButton.prototype, "betDownButtonV", void 0);
    __decorate([
        property(cc.Button),
        __metadata("design:type", typeof (_k = typeof cc !== "undefined" && cc.Button) === "function" ? _k : Object)
    ], MenuPageButton.prototype, "betUpButtonH", void 0);
    __decorate([
        property(cc.Button),
        __metadata("design:type", typeof (_l = typeof cc !== "undefined" && cc.Button) === "function" ? _l : Object)
    ], MenuPageButton.prototype, "betUpButtonV", void 0);
    __decorate([
        property(cc.Button),
        __metadata("design:type", typeof (_m = typeof cc !== "undefined" && cc.Button) === "function" ? _m : Object)
    ], MenuPageButton.prototype, "autoButtonH", void 0);
    __decorate([
        property(cc.Button),
        __metadata("design:type", typeof (_o = typeof cc !== "undefined" && cc.Button) === "function" ? _o : Object)
    ], MenuPageButton.prototype, "autoButtonV", void 0);
    __decorate([
        property(cc.Button),
        __metadata("design:type", typeof (_p = typeof cc !== "undefined" && cc.Button) === "function" ? _p : Object)
    ], MenuPageButton.prototype, "auto50ButtonH", void 0);
    __decorate([
        property(cc.Button),
        __metadata("design:type", typeof (_q = typeof cc !== "undefined" && cc.Button) === "function" ? _q : Object)
    ], MenuPageButton.prototype, "auto50ButtonV", void 0);
    __decorate([
        property(cc.Button),
        __metadata("design:type", typeof (_r = typeof cc !== "undefined" && cc.Button) === "function" ? _r : Object)
    ], MenuPageButton.prototype, "auto100ButtonH", void 0);
    __decorate([
        property(cc.Button),
        __metadata("design:type", typeof (_s = typeof cc !== "undefined" && cc.Button) === "function" ? _s : Object)
    ], MenuPageButton.prototype, "auto100ButtonV", void 0);
    __decorate([
        property(cc.Button),
        __metadata("design:type", typeof (_t = typeof cc !== "undefined" && cc.Button) === "function" ? _t : Object)
    ], MenuPageButton.prototype, "auto500ButtonH", void 0);
    __decorate([
        property(cc.Button),
        __metadata("design:type", typeof (_u = typeof cc !== "undefined" && cc.Button) === "function" ? _u : Object)
    ], MenuPageButton.prototype, "auto500ButtonV", void 0);
    __decorate([
        property(cc.Button),
        __metadata("design:type", typeof (_v = typeof cc !== "undefined" && cc.Button) === "function" ? _v : Object)
    ], MenuPageButton.prototype, "auto1000ButtonH", void 0);
    __decorate([
        property(cc.Button),
        __metadata("design:type", typeof (_w = typeof cc !== "undefined" && cc.Button) === "function" ? _w : Object)
    ], MenuPageButton.prototype, "auto1000ButtonV", void 0);
    __decorate([
        property(cc.Button),
        __metadata("design:type", typeof (_x = typeof cc !== "undefined" && cc.Button) === "function" ? _x : Object)
    ], MenuPageButton.prototype, "autoFreeEndButtonH", void 0);
    __decorate([
        property(cc.Button),
        __metadata("design:type", typeof (_y = typeof cc !== "undefined" && cc.Button) === "function" ? _y : Object)
    ], MenuPageButton.prototype, "autoFreeEndButtonV", void 0);
    __decorate([
        property(cc.Button),
        __metadata("design:type", typeof (_z = typeof cc !== "undefined" && cc.Button) === "function" ? _z : Object)
    ], MenuPageButton.prototype, "goBackButtonH", void 0);
    __decorate([
        property(cc.Button),
        __metadata("design:type", typeof (_0 = typeof cc !== "undefined" && cc.Button) === "function" ? _0 : Object)
    ], MenuPageButton.prototype, "goBackButtonV", void 0);
    __decorate([
        property(cc.Button),
        __metadata("design:type", typeof (_1 = typeof cc !== "undefined" && cc.Button) === "function" ? _1 : Object)
    ], MenuPageButton.prototype, "goHomeButtonH", void 0);
    __decorate([
        property(cc.Button),
        __metadata("design:type", typeof (_2 = typeof cc !== "undefined" && cc.Button) === "function" ? _2 : Object)
    ], MenuPageButton.prototype, "goHomeButtonV", void 0);
    __decorate([
        property(cc.Button),
        __metadata("design:type", typeof (_3 = typeof cc !== "undefined" && cc.Button) === "function" ? _3 : Object)
    ], MenuPageButton.prototype, "recordButtonH", void 0);
    __decorate([
        property(cc.Button),
        __metadata("design:type", typeof (_4 = typeof cc !== "undefined" && cc.Button) === "function" ? _4 : Object)
    ], MenuPageButton.prototype, "recordButtonV", void 0);
    __decorate([
        property(cc.Button),
        __metadata("design:type", typeof (_5 = typeof cc !== "undefined" && cc.Button) === "function" ? _5 : Object)
    ], MenuPageButton.prototype, "settingButtonH", void 0);
    __decorate([
        property(cc.Button),
        __metadata("design:type", typeof (_6 = typeof cc !== "undefined" && cc.Button) === "function" ? _6 : Object)
    ], MenuPageButton.prototype, "settingButtonV", void 0);
    __decorate([
        property(cc.Button),
        __metadata("design:type", typeof (_7 = typeof cc !== "undefined" && cc.Button) === "function" ? _7 : Object)
    ], MenuPageButton.prototype, "descriptionPageButtonH", void 0);
    __decorate([
        property(cc.Button),
        __metadata("design:type", typeof (_8 = typeof cc !== "undefined" && cc.Button) === "function" ? _8 : Object)
    ], MenuPageButton.prototype, "descriptionPageButtonV", void 0);
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_9 = typeof cc !== "undefined" && cc.Node) === "function" ? _9 : Object)
    ], MenuPageButton.prototype, "gameInfoNodeH", void 0);
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_10 = typeof cc !== "undefined" && cc.Node) === "function" ? _10 : Object)
    ], MenuPageButton.prototype, "gameInfoNodeV", void 0);
    __decorate([
        property(cc.Button),
        __metadata("design:type", typeof (_11 = typeof cc !== "undefined" && cc.Button) === "function" ? _11 : Object)
    ], MenuPageButton.prototype, "gameInfoNextPageButtonH", void 0);
    __decorate([
        property(cc.Button),
        __metadata("design:type", typeof (_12 = typeof cc !== "undefined" && cc.Button) === "function" ? _12 : Object)
    ], MenuPageButton.prototype, "gameInfoNextPageButtonV", void 0);
    __decorate([
        property(cc.Button),
        __metadata("design:type", typeof (_13 = typeof cc !== "undefined" && cc.Button) === "function" ? _13 : Object)
    ], MenuPageButton.prototype, "gameInfoPreviousPageButtonH", void 0);
    __decorate([
        property(cc.Button),
        __metadata("design:type", typeof (_14 = typeof cc !== "undefined" && cc.Button) === "function" ? _14 : Object)
    ], MenuPageButton.prototype, "gameInfoPreviousPageButtonV", void 0);
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_15 = typeof cc !== "undefined" && cc.Node) === "function" ? _15 : Object)
    ], MenuPageButton.prototype, "settingPageH", void 0);
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_16 = typeof cc !== "undefined" && cc.Node) === "function" ? _16 : Object)
    ], MenuPageButton.prototype, "settingPageV", void 0);
    __decorate([
        property(cc.PageView),
        __metadata("design:type", typeof (_17 = typeof cc !== "undefined" && cc.PageView) === "function" ? _17 : Object)
    ], MenuPageButton.prototype, "descriptionPageH", void 0);
    __decorate([
        property(cc.PageView),
        __metadata("design:type", typeof (_18 = typeof cc !== "undefined" && cc.PageView) === "function" ? _18 : Object)
    ], MenuPageButton.prototype, "descriptionPageV", void 0);
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_19 = typeof cc !== "undefined" && cc.Node) === "function" ? _19 : Object)
    ], MenuPageButton.prototype, "musicIconH", void 0);
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_20 = typeof cc !== "undefined" && cc.Node) === "function" ? _20 : Object)
    ], MenuPageButton.prototype, "musicIconV", void 0);
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_21 = typeof cc !== "undefined" && cc.Node) === "function" ? _21 : Object)
    ], MenuPageButton.prototype, "effectIconH", void 0);
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_22 = typeof cc !== "undefined" && cc.Node) === "function" ? _22 : Object)
    ], MenuPageButton.prototype, "effectIconV", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_23 = typeof cc !== "undefined" && cc.Label) === "function" ? _23 : Object)
    ], MenuPageButton.prototype, "lineBetLabelH", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_24 = typeof cc !== "undefined" && cc.Label) === "function" ? _24 : Object)
    ], MenuPageButton.prototype, "lineBetLabelV", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_25 = typeof cc !== "undefined" && cc.Label) === "function" ? _25 : Object)
    ], MenuPageButton.prototype, "lineLabelH", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_26 = typeof cc !== "undefined" && cc.Label) === "function" ? _26 : Object)
    ], MenuPageButton.prototype, "lineLabelV", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_27 = typeof cc !== "undefined" && cc.Label) === "function" ? _27 : Object)
    ], MenuPageButton.prototype, "lineBetMoneyLabelH", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_28 = typeof cc !== "undefined" && cc.Label) === "function" ? _28 : Object)
    ], MenuPageButton.prototype, "lineBetMoneyLabelV", void 0);
    __decorate([
        property(cc.SpriteFrame),
        __metadata("design:type", Array)
    ], MenuPageButton.prototype, "icon", void 0);
    __decorate([
        AudioManager_1.Music("NBS"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], MenuPageButton.prototype, "musicEvent", null);
    __decorate([
        AudioManager_1.Effect("BtnClick"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], MenuPageButton.prototype, "effectEvent", null);
    __decorate([
        AudioManager_1.Effect("BtnClick"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_29 = typeof ConfigEnum_1.AutoType !== "undefined" && ConfigEnum_1.AutoType) === "function" ? _29 : Object, typeof (_30 = typeof ConfigEnum_1.AutoType !== "undefined" && ConfigEnum_1.AutoType) === "function" ? _30 : Object]),
        __metadata("design:returntype", void 0)
    ], MenuPageButton.prototype, "autoEvent", null);
    __decorate([
        AudioManager_1.Effect("BtnClick"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MenuPageButton.prototype, "goHomeTouchEvent", null);
    __decorate([
        AudioManager_1.Effect("BtnClick"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MenuPageButton.prototype, "recordPageTouchEvent", null);
    __decorate([
        AudioManager_1.Effect("BtnClick"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MenuPageButton.prototype, "settingPageTouchEvent", null);
    __decorate([
        AudioManager_1.Effect("BtnClick"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MenuPageButton.prototype, "descriptionPageEvent", null);
    __decorate([
        AudioManager_1.Effect("BtnClick"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MenuPageButton.prototype, "goBackTouchEvent", null);
    MenuPageButton = MenuPageButton_1 = __decorate([
        ccclass
    ], MenuPageButton);
    return MenuPageButton;
}(AMenuDoubleButtonTemplate_1.default));
exports.default = MenuPageButton;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxNYWluR2FtZVNjcmlwdFxcQnV0dG9uRXZlbnRcXE1lbnVQYWdlQnV0dG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1FQUE4RTtBQUM5RSxxRUFBK0Q7QUFDL0QsMEVBQXFFO0FBQ3JFLDJFQUFxRTtBQUNyRSxvRUFBd0U7QUFDeEUsbUVBQTZEO0FBQzdELDZIQUF3SDtBQUN4SCxpSEFBNEc7QUFDNUcsdUhBQWlIO0FBQ2pILGtGQUE0RTtBQUM1RSw4RUFBMkU7QUFFM0UscUZBQWlGO0FBQ2pGLDhDQUE0QztBQUM1QyxtREFBNkM7QUFDN0MsdURBQWtEO0FBRTVDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRTFDLElBQUssV0FtQko7QUFuQkQsV0FBSyxXQUFXO0lBRVo7OztPQUdHO0lBQ0gsMENBQTJCLENBQUE7SUFFM0I7OztPQUdHO0lBQ0gsNENBQTZCLENBQUE7SUFFN0I7OztPQUdHO0lBQ0gsb0RBQXFDLENBQUE7QUFDekMsQ0FBQyxFQW5CSSxXQUFXLEtBQVgsV0FBVyxRQW1CZjtBQUdEO0lBQTRDLGtDQUF5QjtJQUFyRTtRQUFBLHFFQW1sQkM7UUFobEJXLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUV4QixrQkFBWSxHQUFjLElBQUksQ0FBQztRQUUvQixrQkFBWSxHQUFjLElBQUksQ0FBQztRQUUvQixtQkFBYSxHQUFjLElBQUksQ0FBQztRQUVoQyxtQkFBYSxHQUFjLElBQUksQ0FBQztRQUVoQyxvQkFBYyxHQUFjLElBQUksQ0FBQztRQUVqQyxvQkFBYyxHQUFjLElBQUksQ0FBQztRQUVqQyxrQkFBWSxHQUFjLElBQUksQ0FBQztRQUUvQixrQkFBWSxHQUFjLElBQUksQ0FBQztRQUUvQixpQkFBVyxHQUFjLElB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QUVwQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3VEQUNTLEVBQUUsb0JBQUYsRUFBRSxDQUFDLEtBQUs7OERBQVE7SUFFNUM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt1REFDUyxFQUFFLG9CQUFGLEVBQUUsQ0FBQyxLQUFLOzhEQUFRO0lBRTVDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7O2dEQUNXO0lBbUtwQztRQURDLG9CQUFLLENBQUMsS0FBSyxDQUFDOzs7O29EQVNaO0lBUUQ7UUFEQyxxQkFBTSxDQUFDLFVBQVUsQ0FBQzs7OztxREFVbEI7SUFnQkQ7UUFEQyxxQkFBTSxDQUFDLFVBQVUsQ0FBQzs7OERBQ2tCLHFCQUFRLG9CQUFSLHFCQUFRLHNEQUFrQixxQkFBUSxvQkFBUixxQkFBUTs7bURBS3RFO0lBd0ZEO1FBREMscUJBQU0sQ0FBQyxVQUFVLENBQUM7Ozs7MERBR2xCO0lBT0Q7UUFEQyxxQkFBTSxDQUFDLFVBQVUsQ0FBQzs7Ozs4REFNbEI7SUFPRDtRQURDLHFCQUFNLENBQUMsVUFBVSxDQUFDOzs7OytEQU1sQjtJQU9EO1FBREMscUJBQU0sQ0FBQyxVQUFVLENBQUM7Ozs7OERBTWxCO0lBT0Q7UUFEQyxxQkFBTSxDQUFDLFVBQVUsQ0FBQzs7OzswREFJbEI7SUFyY2dCLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0FtbEJsQztJQUFELHFCQUFDO0NBbmxCRCxBQW1sQkMsQ0FubEIyQyxtQ0FBeUIsR0FtbEJwRTtrQkFubEJvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEF1ZGlvTWFuYWdlciwge0VmZmVjdCwgTXVzaWN9IGZyb20gJy4uLy4uL0ZyYW1ld29yay9BdWRpby9BdWRpb01hbmFnZXInXHJcbmltcG9ydCB7QXV0b1R5cGV9IGZyb20gJy4uLy4uL0ZyYW1ld29yay9Db25maWcvRW51bS9Db25maWdFbnVtJ1xyXG5pbXBvcnQgQnV0dG9uTWV0aG9kIGZyb20gXCIuLi8uLi9GcmFtZXdvcmsvR2xvYmFsTWV0aG9kL0J1dHRvbk1ldGhvZFwiO1xyXG5pbXBvcnQgU2xvdEdhbWVNYW5hZ2VyIGZyb20gJy4uLy4uL0ZyYW1ld29yay9Qcm9jZXNzL1Nsb3RHYW1lTWFuYWdlcidcclxuaW1wb3J0IHtTY2VuZURpcmVjdGlvblR5cGV9IGZyb20gJy4uLy4uL0ZyYW1ld29yay9TY2VuZS9FbnVtL1NjZW5lU3R5bGUnXHJcbmltcG9ydCBTY2VuZU1hbmFnZXIgZnJvbSAnLi4vLi4vRnJhbWV3b3JrL1NjZW5lL1NjZW5lTWFuYWdlcidcclxuaW1wb3J0IFNjZW5lRGlyZWN0aW9uQ2hhbmdlTm90aWZpY2F0aW9uIGZyb20gXCIuLi8uLi9GcmFtZXdvcmsvU2NlbmUvU2NlbmVOb3RpZmljYXRpb24vU2NlbmVEaXJlY3Rpb25DaGFuZ2VOb3RpZmljYXRpb25cIjtcclxuaW1wb3J0IFNjZW5lRGlyZWN0aW9uQ2hhbmdlT2JzZXJ2ZXIgZnJvbSBcIi4uLy4uL0ZyYW1ld29yay9TY2VuZS9TY2VuZU9ic2VydmVyL1NjZW5lRGlyZWN0aW9uQ2hhbmdlT2JzZXJ2ZXJcIjtcclxuaW1wb3J0IEFNZW51RG91YmxlQnV0dG9uVGVtcGxhdGUgZnJvbSAnLi4vLi4vRnJhbWV3b3JrL1RlbXBsYXRlL0J1dHRvbkV2ZW50L01lbnVCdXR0b24vQU1lbnVEb3VibGVCdXR0b25UZW1wbGF0ZSdcclxuaW1wb3J0IFdlYlJlcXVlc3RNYW5hZ2VyIGZyb20gJy4uLy4uL0ZyYW1ld29yay9XZWJSZXF1ZXN0L1dlYlJlcXVlc3RNYW5hZ2VyJ1xyXG5pbXBvcnQge1Jlc3BvbnNlVHlwZX0gZnJvbSBcIi4uLy4uL0ZyYW1ld29yay9XZWJSZXNwb25zZS9FbnVtL1Jlc3BvbnNlVHlwZVwiO1xyXG5pbXBvcnQgTm9MaW5lVGFibGVJbmZvIGZyb20gXCIuLi8uLi9GcmFtZXdvcmsvV2ViUmVzcG9uc2UvU2V2ZXJEYXRhTW9kZWwvVGFibGVJbmZvL05vTGluZVRhYmxlSW5mb1wiO1xyXG5pbXBvcnQge1dlYlJlc3BvbnNlTWFuYWdlcn0gZnJvbSAnLi4vLi4vRnJhbWV3b3JrL1dlYlJlc3BvbnNlL1dlYlJlc3BvbnNlTWFuYWdlcidcclxuaW1wb3J0IHtzb2NrZXRKU30gZnJvbSAnLi4vLi4vU29ja2V0L1NvY2tldCdcclxuaW1wb3J0IE1haW5HYW1lQnV0dG9uIGZyb20gJy4vTWFpbkdhbWVCdXR0b24nXHJcbmltcG9ydCBSZWNvcmRQYWdlQnV0dG9uIGZyb20gXCIuL1JlY29yZFBhZ2VCdXR0b25cIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuZW51bSBVc2VyTm93UGFnZSB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDntIDpjITpoIFcclxuICAgICAqIEB0eXBlIHtVc2VyTm93UGFnZS5SRUNPUkRfUEFHRX1cclxuICAgICAqL1xyXG4gICAgUkVDT1JEX1BBR0UgPSAnUkVDT1JEX1BBR0UnLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6Kit5a6a6aCBXHJcbiAgICAgKiBAdHlwZSB7VXNlck5vd1BhZ2UuU0VUVElOR19QQUdFfVxyXG4gICAgICovXHJcbiAgICBTRVRUSU5HX1BBR0UgPSAnU0VUVElOR19QQUdFJyxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOiqquaYjumggVxyXG4gICAgICogQHR5cGUge1VzZXJOb3dQYWdlLkRFU0NSSVBUSU9OX1BBR0V9XHJcbiAgICAgKi9cclxuICAgIERFU0NSSVBUSU9OX1BBR0UgPSAnREVTQ1JJUFRJT05fUEFHRScsXHJcbn1cclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnVQYWdlQnV0dG9uIGV4dGVuZHMgQU1lbnVEb3VibGVCdXR0b25UZW1wbGF0ZSB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIG1lbnVOb2RlSDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgbWVudU5vZGVWOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBwcm90ZWN0ZWQgbXVzaWNCdXR0b25IOiBjYy5CdXR0b24gPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIHByb3RlY3RlZCBtdXNpY0J1dHRvblY6IGNjLkJ1dHRvbiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgcHJvdGVjdGVkIGVmZmVjdEJ1dHRvbkg6IGNjLkJ1dHRvbiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgcHJvdGVjdGVkIGVmZmVjdEJ1dHRvblY6IGNjLkJ1dHRvbiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgcHJvdGVjdGVkIGJldERvd25CdXR0b25IOiBjYy5CdXR0b24gPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIHByb3RlY3RlZCBiZXREb3duQnV0dG9uVjogY2MuQnV0dG9uID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBwcm90ZWN0ZWQgYmV0VXBCdXR0b25IOiBjYy5CdXR0b24gPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIHByb3RlY3RlZCBiZXRVcEJ1dHRvblY6IGNjLkJ1dHRvbiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgcHJvdGVjdGVkIGF1dG9CdXR0b25IOiBjYy5CdXR0b24gPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIHByb3RlY3RlZCBhdXRvQnV0dG9uVjogY2MuQnV0dG9uID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBwcm90ZWN0ZWQgYXV0bzUwQnV0dG9uSDogY2MuQnV0dG9uID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBwcm90ZWN0ZWQgYXV0bzUwQnV0dG9uVjogY2MuQnV0dG9uID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBwcm90ZWN0ZWQgYXV0bzEwMEJ1dHRvbkg6IGNjLkJ1dHRvbiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgcHJvdGVjdGVkIGF1dG8xMDBCdXR0b25WOiBjYy5CdXR0b24gPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIHByb3RlY3RlZCBhdXRvNTAwQnV0dG9uSDogY2MuQnV0dG9uID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBwcm90ZWN0ZWQgYXV0bzUwMEJ1dHRvblY6IGNjLkJ1dHRvbiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgcHJvdGVjdGVkIGF1dG8xMDAwQnV0dG9uSDogY2MuQnV0dG9uID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBwcm90ZWN0ZWQgYXV0bzEwMDBCdXR0b25WOiBjYy5CdXR0b24gPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIHByb3RlY3RlZCBhdXRvRnJlZUVuZEJ1dHRvbkg6IGNjLkJ1dHRvbiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgcHJvdGVjdGVkIGF1dG9GcmVlRW5kQnV0dG9uVjogY2MuQnV0dG9uID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBwcm90ZWN0ZWQgZ29CYWNrQnV0dG9uSDogY2MuQnV0dG9uID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBwcm90ZWN0ZWQgZ29CYWNrQnV0dG9uVjogY2MuQnV0dG9uID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBwcm90ZWN0ZWQgZ29Ib21lQnV0dG9uSDogY2MuQnV0dG9uID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBwcm90ZWN0ZWQgZ29Ib21lQnV0dG9uVjogY2MuQnV0dG9uID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBwcm90ZWN0ZWQgcmVjb3JkQnV0dG9uSDogY2MuQnV0dG9uID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBwcm90ZWN0ZWQgcmVjb3JkQnV0dG9uVjogY2MuQnV0dG9uID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBwcm90ZWN0ZWQgc2V0dGluZ0J1dHRvbkg6IGNjLkJ1dHRvbiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgcHJvdGVjdGVkIHNldHRpbmdCdXR0b25WOiBjYy5CdXR0b24gPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIHByb3RlY3RlZCBkZXNjcmlwdGlvblBhZ2VCdXR0b25IOiBjYy5CdXR0b24gPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIHByb3RlY3RlZCBkZXNjcmlwdGlvblBhZ2VCdXR0b25WOiBjYy5CdXR0b24gPSBudWxsO1xyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS3oh6roqILnvqktLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBnYW1lSW5mb05vZGVIOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBnYW1lSW5mb05vZGVWOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBwcml2YXRlIGdhbWVJbmZvTmV4dFBhZ2VCdXR0b25IOiBjYy5CdXR0b24gPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIHByaXZhdGUgZ2FtZUluZm9OZXh0UGFnZUJ1dHRvblY6IGNjLkJ1dHRvbiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgcHJpdmF0ZSBnYW1lSW5mb1ByZXZpb3VzUGFnZUJ1dHRvbkg6IGNjLkJ1dHRvbiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgcHJpdmF0ZSBnYW1lSW5mb1ByZXZpb3VzUGFnZUJ1dHRvblY6IGNjLkJ1dHRvbiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgc2V0dGluZ1BhZ2VIOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBzZXR0aW5nUGFnZVY6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlBhZ2VWaWV3KVxyXG4gICAgcHJpdmF0ZSBkZXNjcmlwdGlvblBhZ2VIOiBjYy5QYWdlVmlldyA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuUGFnZVZpZXcpXHJcbiAgICBwcml2YXRlIGRlc2NyaXB0aW9uUGFnZVY6IGNjLlBhZ2VWaWV3ID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBtdXNpY0ljb25IOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBtdXNpY0ljb25WOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBlZmZlY3RJY29uSDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgZWZmZWN0SWNvblY6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcHJpdmF0ZSBsaW5lQmV0TGFiZWxIOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwcml2YXRlIGxpbmVCZXRMYWJlbFY6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHByaXZhdGUgbGluZUxhYmVsSDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcHJpdmF0ZSBsaW5lTGFiZWxWOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwcml2YXRlIGxpbmVCZXRNb25leUxhYmVsSDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcHJpdmF0ZSBsaW5lQmV0TW9uZXlMYWJlbFY6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIHByaXZhdGUgaWNvbjogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xyXG4gICAgcHJvdGVjdGVkIHRhYmxlSW5mbzogTm9MaW5lVGFibGVJbmZvO1xyXG4gICAgcHJpdmF0ZSBhdXRvSWNvbjogeyBMT05HX09QRU46IGNjLlNwcml0ZUZyYW1lOyBMT05HX0NMT1NFOiBjYy5TcHJpdGVGcmFtZTsgU0hPUlRfT1BFTjogY2MuU3ByaXRlRnJhbWU7IFNIT1JUX0NMT1NFOiBjYy5TcHJpdGVGcmFtZSB9XHJcbiAgICBwcml2YXRlIGNvbG9yOiB7IFdISVRFOiBjYy5Db2xvcjsgUEFMRV9HUkVZOiBjYy5Db2xvcjsgQ09BTF9CTEFDSzogY2MuQ29sb3I7IEJMQUNLOiBjYy5Db2xvcjsgWUVMTE9XOiBjYy5Db2xvcjsgR1JFWTogY2MuQ29sb3I7IEJST1dOOiBjYy5Db2xvciB9XHJcbiAgICBwcml2YXRlIG5vd1BhZ2U6IFVzZXJOb3dQYWdlO1xyXG4gICAgcHVibGljIHN0YXRpYyBpbnN0YW5jZTogTWVudVBhZ2VCdXR0b247XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uQ3JlYXRlKCkge1xyXG4gICAgICAgIE1lbnVQYWdlQnV0dG9uLmluc3RhbmNlID0gdGhpcztcclxuICAgICAgICB0aGlzLnRhYmxlSW5mbyA9XHJcbiAgICAgICAgICAgIFdlYlJlc3BvbnNlTWFuYWdlclxyXG4gICAgICAgICAgICAgICAgLmluc3RhbmNlPE5vTGluZVRhYmxlSW5mbz4oKVxyXG4gICAgICAgICAgICAgICAgLmdldFJlc3VsdChSZXNwb25zZVR5cGUuVEFCTEVfSU5GTyk7XHJcblxyXG4gICAgICAgIHRoaXMuY29sb3IgPSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL21lbnXpoIHpnaLpnIDnlKjliLDnmoTpoY/oibJcclxuICAgICAgICAgICAgWUVMTE9XOiBjYy5jb2xvcigpLmZyb21IRVgoXCIjRkZDMDAwXCIpLFxyXG4gICAgICAgICAgICBDT0FMX0JMQUNLOiBjYy5jb2xvcigpLmZyb21IRVgoXCIjMTkxOTE5XCIpLFxyXG4gICAgICAgICAgICBHUkVZOiBjYy5jb2xvcigpLmZyb21IRVgoXCIjNjQ2NDY0XCIpLFxyXG4gICAgICAgICAgICBQQUxFX0dSRVk6IGNjLmNvbG9yKCkuZnJvbUhFWChcIiNDNUM1QzVcIiksXHJcbiAgICAgICAgICAgIFdISVRFOiBjYy5jb2xvcigpLmZyb21IRVgoXCIjRkZGRkZGXCIpLFxyXG4gICAgICAgICAgICBCTEFDSzogY2MuY29sb3IoKS5mcm9tSEVYKFwiIzAwMDAwMFwiKSxcclxuICAgICAgICAgICAgQlJPV046IGNjLmNvbG9yKCkuZnJvbUhFWChcIiM1RTRGNDNcIiksXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmF1dG9JY29uID0ge1xyXG4gICAgICAgICAgICBTSE9SVF9DTE9TRTogdGhpcy5pY29uWzBdLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/nn63mjInpiJXpl5zplonmmYLlnJbmoYhcclxuICAgICAgICAgICAgU0hPUlRfT1BFTjogdGhpcy5pY29uWzFdLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v55+t5oyJ6YiV5omT6ZaL5pmC5ZyW5qGIXHJcbiAgICAgICAgICAgIExPTkdfQ0xPU0U6IHRoaXMuaWNvblsyXSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+mVt+aMiemIlemXnOmWieaZguWcluahiFxyXG4gICAgICAgICAgICBMT05HX09QRU46IHRoaXMuaWNvblszXSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/plbfmjInpiJXmiZPplovmmYLlnJbmoYhcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghV2ViUmVxdWVzdE1hbmFnZXIuaW5zdGFuY2UuYmFja0hvbWVVUkwpIHsgICAgICAgICAgICAgICAgICAgICAgLy/mqqLmn6XmmK/lkKbmnInov5Tlm57pppbpoIFVUkws5aaC5p6c5rKS5pyJLOWwh+i/lOWbnummlumggeaMiemIlemXnOmWiVxyXG4gICAgICAgICAgICB0aGlzLmdvSG9tZUJ1dHRvbkgubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5nb0hvbWVCdXR0b25WLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBTY2VuZURpcmVjdGlvbkNoYW5nZU5vdGlmaWNhdGlvblxyXG4gICAgICAgICAgICAuaW5zdGFuY2Uuc3Vic2NyaWJlKHRoaXMuc2NlbmVEaXJlY3Rpb25PYnNlcnZlckxpc3RlbmVyKCksIHRydWUpOyAgICAgLy/oqLvlhornm7TmqavlvI/nm6Pogb1cclxuXHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/liJ3lp4voqK3lrprpoIHmjInpiJVcclxuICAgICAgICB0aGlzLnNldERlc2NyaXB0aW9uQnV0dG9uTGlzdGVuZXIoKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+iqquaYjumggeaMiemIleebo+iBveS6i+S7tua3u+WKoFxyXG4gICAgICAgIHRoaXMubm93UGFnZSA9IFVzZXJOb3dQYWdlLkRFU0NSSVBUSU9OX1BBR0U7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Yid5aeL6buY6KqN5pyJ55u05Y2z5Y+vLOmaqOapn+S4gOWAiyzpg73lj69cclxuICAgICAgICB0aGlzLmNsb3NlTWVudSgpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WIneWni+mXnOmWiW1lbnVcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiqquaYjumggeaMiemIleebo+iBveS6i+S7tua3u+WKoFxyXG4gICAgICovXHJcbiAgICBzZXREZXNjcmlwdGlvbkJ1dHRvbkxpc3RlbmVyKCkge1xyXG4gICAgICAgIC8v5LiK5LiA6aCB5oyJ6YiVXHJcbiAgICAgICAgQnV0dG9uTWV0aG9kLmFkZEJ1dHRvbkV2ZW50KFxyXG4gICAgICAgICAgICB0aGlzLmdhbWVJbmZvUHJldmlvdXNQYWdlQnV0dG9uSCwgXCJkZXNjcmlwdGlvbkJ1dHRvbkV2ZW50XCIsIHRoaXMsIFwicHJldmlvdXNcIik7XHJcbiAgICAgICAgQnV0dG9uTWV0aG9kLmFkZEJ1dHRvbkV2ZW50KFxyXG4gICAgICAgICAgICB0aGlzLmdhbWVJbmZvUHJldmlvdXNQYWdlQnV0dG9uViwgXCJkZXNjcmlwdGlvbkJ1dHRvbkV2ZW50XCIsIHRoaXMsIFwicHJldmlvdXNcIik7XHJcblxyXG4gICAgICAgIC8v5LiL5LiA6aCB5oyJ6YiVXHJcbiAgICAgICAgQnV0dG9uTWV0aG9kLmFkZEJ1dHRvbkV2ZW50KFxyXG4gICAgICAgICAgICB0aGlzLmdhbWVJbmZvTmV4dFBhZ2VCdXR0b25ILCBcImRlc2NyaXB0aW9uQnV0dG9uRXZlbnRcIiwgdGhpcywgXCJuZXh0XCIpO1xyXG4gICAgICAgIEJ1dHRvbk1ldGhvZC5hZGRCdXR0b25FdmVudChcclxuICAgICAgICAgICAgdGhpcy5nYW1lSW5mb05leHRQYWdlQnV0dG9uViwgXCJkZXNjcmlwdGlvbkJ1dHRvbkV2ZW50XCIsIHRoaXMsIFwibmV4dFwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOabtOaPm+iqquaYjumggemggeaVuOaMiemIlSzkuIrkuIDpoIEs5LiL5LiA6aCBXHJcbiAgICAgKiBAcGFyYW0gZXZlbnRcclxuICAgICAqIEBwYXJhbSBjYWxsQmFja1xyXG4gICAgICovXHJcbiAgICBkZXNjcmlwdGlvbkJ1dHRvbkV2ZW50KGV2ZW50OiBhbnksIGNhbGxCYWNrOiBzdHJpbmcpIHtcclxuXHJcbiAgICAgICAgaWYgKGNhbGxCYWNrID09PSBcInByZXZpb3VzXCIpIHtcclxuICAgICAgICAgICAgbGV0IHBhZ2VJbmRleEggPSB0aGlzLmRlc2NyaXB0aW9uUGFnZUguZ2V0Q3VycmVudFBhZ2VJbmRleCgpIC0gMTtcclxuICAgICAgICAgICAgbGV0IHBhZ2VJbmRleFYgPSB0aGlzLmRlc2NyaXB0aW9uUGFnZVYuZ2V0Q3VycmVudFBhZ2VJbmRleCgpIC0gMTtcclxuICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvblBhZ2VILnNldEN1cnJlbnRQYWdlSW5kZXgocGFnZUluZGV4SCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb25QYWdlVi5zZXRDdXJyZW50UGFnZUluZGV4KHBhZ2VJbmRleFYpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2FsbEJhY2sgPT09IFwibmV4dFwiKSB7XHJcbiAgICAgICAgICAgIGxldCBwYWdlSW5kZXhIID0gdGhpcy5kZXNjcmlwdGlvblBhZ2VILmdldEN1cnJlbnRQYWdlSW5kZXgoKSArIDE7XHJcbiAgICAgICAgICAgIGxldCBwYWdlSW5kZXhWID0gdGhpcy5kZXNjcmlwdGlvblBhZ2VWLmdldEN1cnJlbnRQYWdlSW5kZXgoKSArIDE7XHJcbiAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb25QYWdlSC5zZXRDdXJyZW50UGFnZUluZGV4KHBhZ2VJbmRleEgpO1xyXG4gICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uUGFnZVYuc2V0Q3VycmVudFBhZ2VJbmRleChwYWdlSW5kZXhWKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni3NldHRpbmcg5oyJ6YiVXHJcbiAgICAgKi9cclxuICAgIGluaXRpYWxpemUoKSB7XHJcbiAgICAgICAgLy/liJ3lp4vog4zmma/pn7PmqILmjInpiJXkvY3nva5cclxuICAgICAgICBpZiAoQXVkaW9NYW5hZ2VyLmluc3RhbmNlLm11c2ljT25NdXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubXVzaWNJY29uSC54ID0gLTUwXHJcbiAgICAgICAgICAgIHRoaXMubXVzaWNJY29uVi54ID0gLTUwXHJcbiAgICAgICAgICAgIHRoaXMubXVzaWNJY29uSC5jb2xvciA9IHRoaXMuY29sb3IuQ09BTF9CTEFDSztcclxuICAgICAgICAgICAgdGhpcy5tdXNpY0ljb25WLmNvbG9yID0gdGhpcy5jb2xvci5DT0FMX0JMQUNLO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubXVzaWNJY29uSC54ID0gNTBcclxuICAgICAgICAgICAgdGhpcy5tdXNpY0ljb25WLnggPSA1MFxyXG4gICAgICAgICAgICB0aGlzLm11c2ljSWNvbkguY29sb3IgPSB0aGlzLmNvbG9yLllFTExPVztcclxuICAgICAgICAgICAgdGhpcy5tdXNpY0ljb25WLmNvbG9yID0gdGhpcy5jb2xvci5ZRUxMT1c7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5Yid5aeL5pWI5p6c6Z+z5qiC5oyJ6YiV5L2N572uXHJcbiAgICAgICAgaWYgKEF1ZGlvTWFuYWdlci5pbnN0YW5jZS5lZmZlY3RPbk11dGUpIHtcclxuICAgICAgICAgICAgdGhpcy5lZmZlY3RJY29uSC54ID0gLTUwXHJcbiAgICAgICAgICAgIHRoaXMuZWZmZWN0SWNvblYueCA9IC01MFxyXG4gICAgICAgICAgICB0aGlzLmVmZmVjdEljb25ILmNvbG9yID0gdGhpcy5jb2xvci5DT0FMX0JMQUNLO1xyXG4gICAgICAgICAgICB0aGlzLmVmZmVjdEljb25WLmNvbG9yID0gdGhpcy5jb2xvci5DT0FMX0JMQUNLO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWZmZWN0SWNvbkgueCA9IDUwXHJcbiAgICAgICAgICAgIHRoaXMuZWZmZWN0SWNvblYueCA9IDUwXHJcbiAgICAgICAgICAgIHRoaXMuZWZmZWN0SWNvbkguY29sb3IgPSB0aGlzLmNvbG9yLllFTExPVztcclxuICAgICAgICAgICAgdGhpcy5lZmZlY3RJY29uVi5jb2xvciA9IHRoaXMuY29sb3IuWUVMTE9XO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/liJ3lp4vljJboh6rli5XmqKHlvI/mjInpiJXmqKPlvI9cclxuICAgICAgICB0aGlzLmNoZWNrQXV0b05vZGUoU2xvdEdhbWVNYW5hZ2VyLmluc3RhbmNlLmF1dG9UeXBlLCB0cnVlKTtcclxuXHJcbiAgICAgICAgLy/mi7/lj5bliJ3lp4vnmoTmirzkvY9pbmRleFxyXG4gICAgICAgIGxldCBiZXRJbmRleCA9IFNsb3RHYW1lTWFuYWdlci5pbnN0YW5jZS51c2VyQmV0UG9pbnQuTGluZUJldDtcclxuXHJcbiAgICAgICAgLy/mm7TmlrDnlbbliY3mirzms6jlgI3njodcclxuICAgICAgICB0aGlzLmxpbmVCZXRMYWJlbEguc3RyaW5nID1cclxuICAgICAgICAgICAgU3RyaW5nKHRoaXMudGFibGVJbmZvLkxpbmVCZXRbYmV0SW5kZXhdKTtcclxuICAgICAgICB0aGlzLmxpbmVCZXRMYWJlbFYuc3RyaW5nID1cclxuICAgICAgICAgICAgU3RyaW5nKHRoaXMudGFibGVJbmZvLkxpbmVCZXRbYmV0SW5kZXhdKTtcclxuICAgICAgICAvL+abtOaWsOeVtuWJjeaKvOazqOe4vemHkemhjVxyXG4gICAgICAgIHRoaXMubGluZUJldE1vbmV5TGFiZWxILnN0cmluZyA9XHJcbiAgICAgICAgICAgIFN0cmluZyh0aGlzLnRhYmxlSW5mby5MaW5lVG90YWxCZXRbYmV0SW5kZXhdKTtcclxuICAgICAgICB0aGlzLmxpbmVCZXRNb25leUxhYmVsVi5zdHJpbmcgPVxyXG4gICAgICAgICAgICBTdHJpbmcodGhpcy50YWJsZUluZm8uTGluZVRvdGFsQmV0W2JldEluZGV4XSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog55u05qmr5ZCR55uj6IG95ZmoXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc2NlbmVEaXJlY3Rpb25PYnNlcnZlckxpc3RlbmVyKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgU2NlbmVEaXJlY3Rpb25DaGFuZ2VPYnNlcnZlcigodHlwZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMubWVudU5vZGVILmFjdGl2ZSAmJiAhdGhpcy5tZW51Tm9kZVYuYWN0aXZlKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZSA9PSBTY2VuZURpcmVjdGlvblR5cGUuTEFORFNDQVBFKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5tZW51Tm9kZUguYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubWVudU5vZGVWLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09IFNjZW5lRGlyZWN0aW9uVHlwZS5QT1JUUkFJVCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMubWVudU5vZGVILmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tZW51Tm9kZVYuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coYE1haW5HYW1lU2V0dGluZyBzY2VuZURpcmVjdGlvbkV2ZW50KCkg5pyJ6Yyv6KqkIDogJHt0eXBlfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgdGhpcylcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiDjOaZr+mfs+S6i+S7tlxyXG4gICAgICogQHBhcmFtIGlzT25NdXRlXHJcbiAgICAgKiBAcHJvdGVjdGVkXHJcbiAgICAgKi9cclxuICAgIEBNdXNpYyhcIk5CU1wiKVxyXG4gICAgcHJvdGVjdGVkIG11c2ljRXZlbnQoaXNPbk11dGU6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAoaXNPbk11dGUpIHtcclxuICAgICAgICAgICAgdGhpcy5hdWRpb0J1dHRvblNldHRpbmdBbmltYXRpb24odGhpcy5tdXNpY0ljb25ILCAtNTAsIHRoaXMuY29sb3IuQ09BTF9CTEFDSylcclxuICAgICAgICAgICAgdGhpcy5hdWRpb0J1dHRvblNldHRpbmdBbmltYXRpb24odGhpcy5tdXNpY0ljb25WLCAtNTAsIHRoaXMuY29sb3IuQ09BTF9CTEFDSylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmF1ZGlvQnV0dG9uU2V0dGluZ0FuaW1hdGlvbih0aGlzLm11c2ljSWNvbkgsIDUwLCB0aGlzLmNvbG9yLllFTExPVylcclxuICAgICAgICAgICAgdGhpcy5hdWRpb0J1dHRvblNldHRpbmdBbmltYXRpb24odGhpcy5tdXNpY0ljb25WLCA1MCwgdGhpcy5jb2xvci5ZRUxMT1cpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pWI5p6c6Z+z5LqL5Lu2XHJcbiAgICAgKiBAcGFyYW0gaXNPbk11dGVcclxuICAgICAqIEBwcm90ZWN0ZWRcclxuICAgICAqL1xyXG4gICAgQEVmZmVjdChcIkJ0bkNsaWNrXCIpXHJcbiAgICBwcm90ZWN0ZWQgZWZmZWN0RXZlbnQoaXNPbk11dGU6IGJvb2xlYW4pIHtcclxuXHJcbiAgICAgICAgaWYgKGlzT25NdXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXVkaW9CdXR0b25TZXR0aW5nQW5pbWF0aW9uKHRoaXMuZWZmZWN0SWNvbkgsIC01MCwgdGhpcy5jb2xvci5DT0FMX0JMQUNLKTtcclxuICAgICAgICAgICAgdGhpcy5hdWRpb0J1dHRvblNldHRpbmdBbmltYXRpb24odGhpcy5lZmZlY3RJY29uViwgLTUwLCB0aGlzLmNvbG9yLkNPQUxfQkxBQ0spO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXVkaW9CdXR0b25TZXR0aW5nQW5pbWF0aW9uKHRoaXMuZWZmZWN0SWNvbkgsIDUwLCB0aGlzLmNvbG9yLllFTExPVyk7XHJcbiAgICAgICAgICAgIHRoaXMuYXVkaW9CdXR0b25TZXR0aW5nQW5pbWF0aW9uKHRoaXMuZWZmZWN0SWNvblYsIDUwLCB0aGlzLmNvbG9yLllFTExPVyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6Z+z5qiC5oyJ6YiV6bue5pOK5pmC5YuV55WrXHJcbiAgICAgKiBAcGFyYW0gbm9kZVxyXG4gICAgICogQHBhcmFtIHhcclxuICAgICAqIEBwYXJhbSBjb2xvclxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBhdWRpb0J1dHRvblNldHRpbmdBbmltYXRpb24obm9kZTogY2MuTm9kZSwgeDogbnVtYmVyLCBjb2xvcjogY2MuQ29sb3IpIHtcclxuICAgICAgICBjYy50d2Vlbihub2RlKVxyXG4gICAgICAgICAgICAudG8oMC4zLCB7eDogeCwgY29sb3I6IGNvbG9yfSwge2Vhc2luZzogXCJcIn0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIEBFZmZlY3QoXCJCdG5DbGlja1wiKVxyXG4gICAgcHJvdGVjdGVkIGF1dG9FdmVudChiZWZvcmVBdXRvQ291bnQ6IEF1dG9UeXBlLCBhZnRlckF1dG9Db3VudDogQXV0b1R5cGUpIHtcclxuICAgICAgICB0aGlzLmNoZWNrQXV0b05vZGUoYmVmb3JlQXV0b0NvdW50LCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5jaGVja0F1dG9Ob2RlKGFmdGVyQXV0b0NvdW50LCB0cnVlKTtcclxuICAgICAgICB0aGlzLmNsb3NlTWVudSgpO1xyXG4gICAgICAgIE1haW5HYW1lQnV0dG9uLmluc3RhbmNlLnN0YXJ0QnV0dG9uT25FbmFibGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNoZWNrQXV0b05vZGUoYXV0b1R5cGU6IEF1dG9UeXBlLCBpc09wZW46IGJvb2xlYW4pIHtcclxuXHJcbiAgICAgICAgc3dpdGNoIChhdXRvVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIEF1dG9UeXBlLmF1dG86XHJcbiAgICAgICAgICAgICAgICBpc09wZW4gPyB0aGlzLnVwZGF0ZUF1dG9JbWcodGhpcy5hdXRvQnV0dG9uSCwgdGhpcy5hdXRvSWNvbi5MT05HX09QRU4sIHRydWUpIDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUF1dG9JbWcodGhpcy5hdXRvQnV0dG9uSCwgdGhpcy5hdXRvSWNvbi5MT05HX0NMT1NFLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBpc09wZW4gPyB0aGlzLnVwZGF0ZUF1dG9JbWcodGhpcy5hdXRvQnV0dG9uViwgdGhpcy5hdXRvSWNvbi5MT05HX09QRU4sIHRydWUpIDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUF1dG9JbWcodGhpcy5hdXRvQnV0dG9uViwgdGhpcy5hdXRvSWNvbi5MT05HX0NMT1NFLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzd2l0Y2ggKGF1dG9UeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgQXV0b1R5cGUuYXV0bzUwOlxyXG4gICAgICAgICAgICAgICAgaXNPcGVuID8gdGhpcy51cGRhdGVBdXRvSW1nKHRoaXMuYXV0bzUwQnV0dG9uSCwgdGhpcy5hdXRvSWNvbi5TSE9SVF9PUEVOLCB0cnVlKSA6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVBdXRvSW1nKHRoaXMuYXV0bzUwQnV0dG9uSCwgdGhpcy5hdXRvSWNvbi5TSE9SVF9DTE9TRSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgaXNPcGVuID8gdGhpcy51cGRhdGVBdXRvSW1nKHRoaXMuYXV0bzUwQnV0dG9uViwgdGhpcy5hdXRvSWNvbi5TSE9SVF9PUEVOLCB0cnVlKSA6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVBdXRvSW1nKHRoaXMuYXV0bzUwQnV0dG9uViwgdGhpcy5hdXRvSWNvbi5TSE9SVF9DTE9TRSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3dpdGNoIChhdXRvVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIEF1dG9UeXBlLmF1dG8xMDA6XHJcbiAgICAgICAgICAgICAgICBpc09wZW4gPyB0aGlzLnVwZGF0ZUF1dG9JbWcodGhpcy5hdXRvMTAwQnV0dG9uSCwgdGhpcy5hdXRvSWNvbi5TSE9SVF9PUEVOLCB0cnVlKSA6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVBdXRvSW1nKHRoaXMuYXV0bzEwMEJ1dHRvbkgsIHRoaXMuYXV0b0ljb24uU0hPUlRfQ0xPU0UsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGlzT3BlbiA/IHRoaXMudXBkYXRlQXV0b0ltZyh0aGlzLmF1dG8xMDBCdXR0b25WLCB0aGlzLmF1dG9JY29uLlNIT1JUX09QRU4sIHRydWUpIDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUF1dG9JbWcodGhpcy5hdXRvMTAwQnV0dG9uViwgdGhpcy5hdXRvSWNvbi5TSE9SVF9DTE9TRSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3dpdGNoIChhdXRvVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIEF1dG9UeXBlLmF1dG81MDA6XHJcbiAgICAgICAgICAgICAgICBpc09wZW4gPyB0aGlzLnVwZGF0ZUF1dG9JbWcodGhpcy5hdXRvNTAwQnV0dG9uSCwgdGhpcy5hdXRvSWNvbi5TSE9SVF9PUEVOLCB0cnVlKSA6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVBdXRvSW1nKHRoaXMuYXV0bzUwMEJ1dHRvbkgsIHRoaXMuYXV0b0ljb24uU0hPUlRfQ0xPU0UsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGlzT3BlbiA/IHRoaXMudXBkYXRlQXV0b0ltZyh0aGlzLmF1dG81MDBCdXR0b25WLCB0aGlzLmF1dG9JY29uLlNIT1JUX09QRU4sIHRydWUpIDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUF1dG9JbWcodGhpcy5hdXRvNTAwQnV0dG9uViwgdGhpcy5hdXRvSWNvbi5TSE9SVF9DTE9TRSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3dpdGNoIChhdXRvVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIEF1dG9UeXBlLmF1dG8xMDAwOlxyXG4gICAgICAgICAgICAgICAgaXNPcGVuID8gdGhpcy51cGRhdGVBdXRvSW1nKHRoaXMuYXV0bzEwMDBCdXR0b25ILCB0aGlzLmF1dG9JY29uLlNIT1JUX09QRU4sIHRydWUpIDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUF1dG9JbWcodGhpcy5hdXRvMTAwMEJ1dHRvbkgsIHRoaXMuYXV0b0ljb24uU0hPUlRfQ0xPU0UsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGlzT3BlbiA/IHRoaXMudXBkYXRlQXV0b0ltZyh0aGlzLmF1dG8xMDAwQnV0dG9uViwgdGhpcy5hdXRvSWNvbi5TSE9SVF9PUEVOLCB0cnVlKSA6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVBdXRvSW1nKHRoaXMuYXV0bzEwMDBCdXR0b25WLCB0aGlzLmF1dG9JY29uLlNIT1JUX0NMT1NFLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzd2l0Y2ggKGF1dG9UeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgQXV0b1R5cGUuZnJlZUVuZDpcclxuICAgICAgICAgICAgICAgIGlzT3BlbiA/IHRoaXMudXBkYXRlQXV0b0ltZyh0aGlzLmF1dG9GcmVlRW5kQnV0dG9uSCwgdGhpcy5hdXRvSWNvbi5MT05HX09QRU4sIHRydWUpIDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUF1dG9JbWcodGhpcy5hdXRvRnJlZUVuZEJ1dHRvbkgsIHRoaXMuYXV0b0ljb24uTE9OR19DTE9TRSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgaXNPcGVuID8gdGhpcy51cGRhdGVBdXRvSW1nKHRoaXMuYXV0b0ZyZWVFbmRCdXR0b25WLCB0aGlzLmF1dG9JY29uLkxPTkdfT1BFTiwgdHJ1ZSkgOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQXV0b0ltZyh0aGlzLmF1dG9GcmVlRW5kQnV0dG9uViwgdGhpcy5hdXRvSWNvbi5MT05HX0NMT1NFLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aHJvdyBFcnJvcihg6Ieq5YuV5Y+D5pW46Yyv6KqkICR7YXV0b1R5cGV9YCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog55W255So5oi26bue5pOKYXV0b+aMiemIleaZgizmm7Tmj5voqbLmjInpiJXpoY/oibJcclxuICAgICAqIEBwYXJhbSBidXR0b25Ub1Nwcml0ZVxyXG4gICAgICogQHBhcmFtIGltZ1xyXG4gICAgICogQHBhcmFtIGlzT3BlblxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVBdXRvSW1nKGJ1dHRvblRvU3ByaXRlOiBjYy5CdXR0b24sIGltZzogY2MuU3ByaXRlRnJhbWUsIGlzT3BlbjogYm9vbGVhbikge1xyXG5cclxuICAgICAgICBsZXQgc3ByaXRlID0gYnV0dG9uVG9TcHJpdGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcblxyXG4gICAgICAgIGlmIChpc09wZW4pIHtcclxuICAgICAgICAgICAgYnV0dG9uVG9TcHJpdGUubm9kZS5jaGlsZHJlblswXS5jb2xvciA9IHRoaXMuY29sb3IuQkxBQ0tcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBidXR0b25Ub1Nwcml0ZS5ub2RlLmNoaWxkcmVuWzBdLmNvbG9yID0gdGhpcy5jb2xvci5XSElURVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gaW1nO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOi/lOWbnummlumggVxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICovXHJcbiAgICBARWZmZWN0KFwiQnRuQ2xpY2tcIilcclxuICAgIHByb3RlY3RlZCBnb0hvbWVUb3VjaEV2ZW50KCkge1xyXG4gICAgICAgIHNvY2tldEpTLmJhY2tIb21lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnpaXllq5cclxuICAgICAqIEBwcm90ZWN0ZWRcclxuICAgICAqL1xyXG4gICAgQEVmZmVjdChcIkJ0bkNsaWNrXCIpXHJcbiAgICBwcm90ZWN0ZWQgcmVjb3JkUGFnZVRvdWNoRXZlbnQoKSB7XHJcbiAgICAgICAgbGV0IGJlZm9yZVBhZ2U6IFVzZXJOb3dQYWdlID0gdGhpcy5ub3dQYWdlO1xyXG4gICAgICAgIGxldCBhZnRlclBhZ2U6IFVzZXJOb3dQYWdlID0gKHRoaXMubm93UGFnZSA9IFVzZXJOb3dQYWdlLlJFQ09SRF9QQUdFKTtcclxuICAgICAgICB0aGlzLmNoYW5nZVBhZ2UoYmVmb3JlUGFnZSwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlUGFnZShhZnRlclBhZ2UsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6Kit5a6a6aCBXHJcbiAgICAgKiBAcHJvdGVjdGVkXHJcbiAgICAgKi9cclxuICAgIEBFZmZlY3QoXCJCdG5DbGlja1wiKVxyXG4gICAgcHJvdGVjdGVkIHNldHRpbmdQYWdlVG91Y2hFdmVudCgpIHtcclxuICAgICAgICBsZXQgYmVmb3JlUGFnZTogVXNlck5vd1BhZ2UgPSB0aGlzLm5vd1BhZ2U7XHJcbiAgICAgICAgbGV0IGFmdGVyUGFnZTogVXNlck5vd1BhZ2UgPSAodGhpcy5ub3dQYWdlID0gVXNlck5vd1BhZ2UuU0VUVElOR19QQUdFKTtcclxuICAgICAgICB0aGlzLmNoYW5nZVBhZ2UoYmVmb3JlUGFnZSwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlUGFnZShhZnRlclBhZ2UsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6Kqq5piO6aCBXHJcbiAgICAgKiBAcHJvdGVjdGVkXHJcbiAgICAgKi9cclxuICAgIEBFZmZlY3QoXCJCdG5DbGlja1wiKVxyXG4gICAgcHJvdGVjdGVkIGRlc2NyaXB0aW9uUGFnZUV2ZW50KCkge1xyXG4gICAgICAgIGxldCBiZWZvcmVQYWdlOiBVc2VyTm93UGFnZSA9IHRoaXMubm93UGFnZTtcclxuICAgICAgICBsZXQgYWZ0ZXJQYWdlOiBVc2VyTm93UGFnZSA9ICh0aGlzLm5vd1BhZ2UgPSBVc2VyTm93UGFnZS5ERVNDUklQVElPTl9QQUdFKTtcclxuICAgICAgICB0aGlzLmNoYW5nZVBhZ2UoYmVmb3JlUGFnZSwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlUGFnZShhZnRlclBhZ2UsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6L+U5Zue6YGK5oiy6aCB6Z2iXHJcbiAgICAgKiBAcHJvdGVjdGVkXHJcbiAgICAgKi9cclxuICAgIEBFZmZlY3QoXCJCdG5DbGlja1wiKVxyXG4gICAgcHJvdGVjdGVkIGdvQmFja1RvdWNoRXZlbnQoKSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZU1lbnUoKTtcclxuICAgICAgICBNYWluR2FtZUJ1dHRvbi5pbnN0YW5jZS5zdGFydEJ1dHRvbk9uRW5hYmxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmm7TmlrDlupXpg6gg5o+b6aCBLChQYWdlQnV0dG9uKeabtOaPm+mhj+iJslxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNoYW5nZVBhZ2UocGFnZVR5cGU6IFVzZXJOb3dQYWdlLCBpc09wZW46IGJvb2xlYW4pIHtcclxuICAgICAgICBzd2l0Y2ggKHBhZ2VUeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgVXNlck5vd1BhZ2UuUkVDT1JEX1BBR0U6XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNPcGVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWtlUGFnZUJ1dHRvblRvQ29sb3JIKHRoaXMucmVjb3JkQnV0dG9uSCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWtlUGFnZUJ1dHRvblRvQ29sb3JWKHRoaXMucmVjb3JkQnV0dG9uViwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgUmVjb3JkUGFnZUJ1dHRvbi5pbnN0YW5jZS5zaG93UmVjb3JkUGFnZSgpLnRoZW4oKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlTWVudSgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1ha2VQYWdlQnV0dG9uVG9Db2xvckgodGhpcy5yZWNvcmRCdXR0b25ILCBmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1ha2VQYWdlQnV0dG9uVG9Db2xvclYodGhpcy5yZWNvcmRCdXR0b25WLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBVc2VyTm93UGFnZS5TRVRUSU5HX1BBR0U6XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNPcGVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWtlUGFnZUJ1dHRvblRvQ29sb3JIKHRoaXMuc2V0dGluZ0J1dHRvbkgsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFrZVBhZ2VCdXR0b25Ub0NvbG9yVih0aGlzLnNldHRpbmdCdXR0b25WLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdQYWdlSC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ1BhZ2VWLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFrZVBhZ2VCdXR0b25Ub0NvbG9ySCh0aGlzLnNldHRpbmdCdXR0b25ILCBmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1ha2VQYWdlQnV0dG9uVG9Db2xvclYodGhpcy5zZXR0aW5nQnV0dG9uViwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ1BhZ2VILmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ1BhZ2VWLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVXNlck5vd1BhZ2UuREVTQ1JJUFRJT05fUEFHRTpcclxuICAgICAgICAgICAgICAgIGlmIChpc09wZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1ha2VQYWdlQnV0dG9uVG9Db2xvckgodGhpcy5kZXNjcmlwdGlvblBhZ2VCdXR0b25ILCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1ha2VQYWdlQnV0dG9uVG9Db2xvclYodGhpcy5kZXNjcmlwdGlvblBhZ2VCdXR0b25WLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uUGFnZUgubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb25QYWdlVi5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lSW5mb05vZGVILmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lSW5mb05vZGVWLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFrZVBhZ2VCdXR0b25Ub0NvbG9ySCh0aGlzLmRlc2NyaXB0aW9uUGFnZUJ1dHRvbkgsIGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFrZVBhZ2VCdXR0b25Ub0NvbG9yVih0aGlzLmRlc2NyaXB0aW9uUGFnZUJ1dHRvblYsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uUGFnZUgubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uUGFnZVYubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVJbmZvTm9kZUguYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lSW5mb05vZGVWLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coXCJNZW51QnV0dG9uLnVwZGF0ZVBhZ2VCdXR0b25Db2xvcigpIOaciemMr+iqpFwiLCBwYWdlVHlwZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog55W2dXNlcum7nuaTimJ1dHRvbuaZguabtOaPm+W6lemDqOaPm+mggUJ1dHRvbiDog4zmma/poY/oibJcclxuICAgICAqIEBwYXJhbSBidXR0b25cclxuICAgICAqIEBwYXJhbSBpc09wZW5cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgbWFrZVBhZ2VCdXR0b25Ub0NvbG9ySChidXR0b246IGNjLkJ1dHRvbiwgaXNPcGVuOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGJnOiBjYy5Ob2RlID0gYnV0dG9uLm5vZGUuY2hpbGRyZW5bMF07XHJcbiAgICAgICAgbGV0IGljb24gPSBiZy5jaGlsZHJlblswXTtcclxuICAgICAgICBpZiAoaXNPcGVuKSB7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5ob3ZlckNvbG9yID0gdGhpcy5jb2xvci5XSElURTtcclxuICAgICAgICAgICAgYnV0dG9uLm5vcm1hbENvbG9yID0gdGhpcy5jb2xvci5XSElURTtcclxuICAgICAgICAgICAgYmcuY29sb3IgPSB0aGlzLmNvbG9yLkJST1dOO1xyXG4gICAgICAgICAgICBpY29uLmNvbG9yID0gdGhpcy5jb2xvci5XSElURTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBidXR0b24uaG92ZXJDb2xvciA9IHRoaXMuY29sb3IuUEFMRV9HUkVZO1xyXG4gICAgICAgICAgICBidXR0b24ubm9ybWFsQ29sb3IgPSB0aGlzLmNvbG9yLkdSRVk7XHJcbiAgICAgICAgICAgIGJnLmNvbG9yID0gdGhpcy5jb2xvci5CTEFDSztcclxuICAgICAgICAgICAgaWNvbi5jb2xvciA9IHRoaXMuY29sb3IuWUVMTE9XO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOeVtnVzZXLpu57mk4pidXR0b27mmYLmm7Tmj5vlupXpg6jmj5vpoIFCdXR0b24g6IOM5pmv6aGP6ImyXHJcbiAgICAgKiBAcGFyYW0gYnV0dG9uXHJcbiAgICAgKiBAcGFyYW0gaXNPcGVuXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIG1ha2VQYWdlQnV0dG9uVG9Db2xvclYoYnV0dG9uOiBjYy5CdXR0b24sIGlzT3BlbjogYm9vbGVhbikge1xyXG5cclxuICAgICAgICBsZXQgaWNvbiA9IGJ1dHRvbi5ub2RlLmNoaWxkcmVuWzBdO1xyXG4gICAgICAgIGlmIChpc09wZW4pIHtcclxuICAgICAgICAgICAgYnV0dG9uLmhvdmVyQ29sb3IgPSB0aGlzLmNvbG9yLldISVRFO1xyXG4gICAgICAgICAgICBidXR0b24ubm9ybWFsQ29sb3IgPSB0aGlzLmNvbG9yLldISVRFO1xyXG4gICAgICAgICAgICBpY29uLmNvbG9yID0gdGhpcy5jb2xvci5XSElURTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBidXR0b24uaG92ZXJDb2xvciA9IHRoaXMuY29sb3IuUEFMRV9HUkVZO1xyXG4gICAgICAgICAgICBidXR0b24ubm9ybWFsQ29sb3IgPSB0aGlzLmNvbG9yLkdSRVk7XHJcbiAgICAgICAgICAgIGljb24uY29sb3IgPSB0aGlzLmNvbG9yLllFTExPVztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnlLHmir3osaHpoZ7ntoHlrppcclxuICAgICAqIOeVtnVzZXLmnInmm7Tli5XmirzkvY/liIbmlbjmmYIs6YCP6YGO6KeA5a+f6ICF5qih5byP6Ieq5YuV5pu05pawXHJcbiAgICAgKiBAcGFyYW0gYmVmb3JlSW5kZXhcclxuICAgICAqIEBwYXJhbSBhZnRlckluZGV4XHJcbiAgICAgKiBAcHJvdGVjdGVkXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCB0b3RhbEJldENoYW5nZUV2ZW50KGJlZm9yZUluZGV4LCBhZnRlckluZGV4KSB7XHJcblxyXG4gICAgICAgIGxldCBsaW5lQmV0VmFsdWUgPSBTdHJpbmcodGhpcy50YWJsZUluZm8uTGluZUJldFthZnRlckluZGV4XSk7XHJcbiAgICAgICAgbGV0IGxpbmVUb3RhbEJldFZhbHVlID0gU3RyaW5nKHRoaXMudGFibGVJbmZvLkxpbmVUb3RhbEJldFthZnRlckluZGV4XSk7XHJcbiAgICAgICAgdGhpcy5saW5lQmV0TGFiZWxILnN0cmluZyA9IGxpbmVCZXRWYWx1ZTtcclxuICAgICAgICB0aGlzLmxpbmVCZXRMYWJlbFYuc3RyaW5nID0gbGluZUJldFZhbHVlO1xyXG4gICAgICAgIHRoaXMubGluZUJldE1vbmV5TGFiZWxILnN0cmluZyA9IGxpbmVUb3RhbEJldFZhbHVlO1xyXG4gICAgICAgIHRoaXMubGluZUJldE1vbmV5TGFiZWxWLnN0cmluZyA9IGxpbmVUb3RhbEJldFZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6aGv56S6bWVudee1hOS7tlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2hvd01lbnUoKSB7XHJcbiAgICAgICAgTWFpbkdhbWVCdXR0b24uaW5zdGFuY2Uuc3RhcnRCdXR0b25EaXNhYmxlKCk7XHJcbiAgICAgICAgbGV0IGRpcmVjdGlvbiA9IFNjZW5lTWFuYWdlci5pbnN0YW5jZS5zY2VuZURpcmVjdGlvbjtcclxuICAgICAgICBpZiAoZGlyZWN0aW9uID09IFNjZW5lRGlyZWN0aW9uVHlwZS5MQU5EU0NBUEUpIHtcclxuICAgICAgICAgICAgdGhpcy5tZW51Tm9kZUguYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5tZW51Tm9kZVYuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT0gU2NlbmVEaXJlY3Rpb25UeXBlLlBPUlRSQUlUKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWVudU5vZGVILmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLm1lbnVOb2RlVi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIuaciemMr+iqpDpcIiwgZGlyZWN0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpl5zploltZW51IOe1hOS7tizkuKbliJ3lp4vljJbkuIvmrKHmiZPplovmmYLnmoTni4DmhYtcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY2xvc2VNZW51KCkge1xyXG4gICAgICAgIHRoaXMuY2hhbmdlUGFnZSh0aGlzLm5vd1BhZ2UsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLmNoYW5nZVBhZ2UoVXNlck5vd1BhZ2UuU0VUVElOR19QQUdFLCB0cnVlKTtcclxuICAgICAgICB0aGlzLm5vd1BhZ2UgPSBVc2VyTm93UGFnZS5TRVRUSU5HX1BBR0U7XHJcbiAgICAgICAgdGhpcy5tZW51Tm9kZUguYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5tZW51Tm9kZVYuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvblBhZ2VILnNldEN1cnJlbnRQYWdlSW5kZXgoMCk7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvblBhZ2VWLnNldEN1cnJlbnRQYWdlSW5kZXgoMCk7XHJcbiAgICB9XHJcbn1cclxuIl19