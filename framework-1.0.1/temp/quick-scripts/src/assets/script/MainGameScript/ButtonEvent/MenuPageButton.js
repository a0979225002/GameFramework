"use strict";
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