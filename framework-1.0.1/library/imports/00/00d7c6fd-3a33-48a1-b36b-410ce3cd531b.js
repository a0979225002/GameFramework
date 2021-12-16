"use strict";
cc._RF.push(module, '00d7cb9OjNIobNrQQzjzVMb', 'MainGameLabel');
// script/MainGameScript/LabelEvent/MainGameLabel.ts

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
var LanguageMethod_1 = require("../../Framework/GlobalMethod/LanguageMethod");
var ServerEventType_1 = require("../../Framework/Listener/Enum/ServerEventType");
var EventManager_1 = require("../../Framework/Listener/EventManager");
var GameState_1 = require("../../Framework/Process/Enum/GameState");
var UserMoneyChangeNotification_1 = require("../../Framework/Process/GameNotification/UserMoneyChangeNotification");
var UserTotalBetChangeNotification_1 = require("../../Framework/Process/GameNotification/UserTotalBetChangeNotification");
var UserWinPointStateNotification_1 = require("../../Framework/Process/GameNotification/UserWinPointStateNotification");
var UserMoenyChangeObserver_1 = require("../../Framework/Process/GameObserver/UserMoenyChangeObserver");
var UserTotalBetChangeObserver_1 = require("../../Framework/Process/GameObserver/UserTotalBetChangeObserver");
var UserWinPointStateObserver_1 = require("../../Framework/Process/GameObserver/UserWinPointStateObserver");
var SlotGameManager_1 = require("../../Framework/Process/SlotGameManager");
var AGenericTemplate_1 = require("../../Framework/Template/AGenericTemplate");
var ResponseType_1 = require("../../Framework/WebResponse/Enum/ResponseType");
var WebResponseManager_1 = require("../../Framework/WebResponse/WebResponseManager");
var SocketSetting_1 = require("../../Socket/SocketSetting");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MainGameLabel = /** @class */ (function (_super) {
    __extends(MainGameLabel, _super);
    function MainGameLabel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.userMoneyLabelH = null;
        _this.userMoneyLabelV = null;
        _this.gameLineLabelH = null;
        _this.gameLineLabelV = null;
        _this.gameLineTextH = null;
        _this.gameLineTextV = null;
        _this.userTotalBetLabelH = null;
        _this.userTotalBetTextH = null;
        _this.userTotalBetLabelV = null;
        _this.userTotalBetTextV = null;
        _this.winPointLabelH = null;
        _this.winPointTextH = null;
        _this.winPointLabelV = null;
        _this.winPointTextV = null;
        _this.winPoint = null;
        _this.groupIDH = null;
        _this.groupIDV = null;
        _this.freeTitle = null;
        _this.freeCount = null;
        return _this;
    }
    MainGameLabel_1 = MainGameLabel;
    MainGameLabel.prototype.onCreate = function () {
        MainGameLabel_1.instance = this;
        this.tableInfo =
            WebResponseManager_1.WebResponseManager
                .instance()
                .getResult(ResponseType_1.ResponseType.TABLE_INFO);
        this.freeResult =
            WebResponseManager_1.WebResponseManager
                .instance()
                .getResult(ResponseType_1.ResponseType.FREE);
        //初始free標題
        this.freeCount.string = "";
        this.freeTitle.active = false;
        //初始:單局識別號
        var groupIDNum = SocketSetting_1.default.ServerReturnData["GroupID"].GroupID;
        this.groupIDH.string = groupIDNum;
        this.groupIDV.string = groupIDNum;
        //初始獲獎欄位
        this.winPoint.string = "";
        this.winPoint.node.active = false;
        //初始手動更新該遊戲線數:無線遊戲無從計算(寫死)
        this.gameLineLabelH.string = "243";
        this.gameLineLabelV.string = "243";
        //初始化 userConfig設定的初始user下注金額
        this.userTotalBetLabelH.string =
            String(this.tableInfo.LineTotalBet[SlotGameManager_1.default.instance.userBetPoint.LineBet]);
        this.userTotalBetLabelV.string =
            String(this.tableInfo.LineTotalBet[SlotGameManager_1.default.instance.userBetPoint.LineBet]);
        //初始更新user 金額,接收tableInfo參數時,尚未實例化該類,因此初始更新USER MONEY 失效
        var numberFormat = new Intl.NumberFormat().format(SlotGameManager_1.default.instance.userMoney);
        this.userMoneyLabelV.string = String(numberFormat);
        this.userMoneyLabelH.string = String(numberFormat);
        //初始將贏分欄位清空
        this.winPointLabelH.string = "";
        this.winPointLabelV.string = "";
        //訂閱推播事件
        UserMoneyChangeNotification_1.default //更新user金額時 訂閱事件
            .instance.subscribe(this.getUserMoneyChangeObserver(), true);
        UserTotalBetChangeNotification_1.default
            .instance.subscribe(this.getUserTotalBetChangeObserver(), true);
        UserWinPointStateNotification_1.default //獲獎時 訂閱事件
            .instance.subscribe(this.getUserWinPointStateObserver(), true);
        this.updateGroupIDEventListener(); //GroupID 監聽變更
    };
    /**
     * 更新語系
     */
    MainGameLabel.prototype.languageSetting = function () {
        this.gameLineTextH.string = SocketSetting_1.default.t("4_008");
        this.gameLineTextV.string = SocketSetting_1.default.t("4_008");
        this.userTotalBetTextH.string = SocketSetting_1.default.t("4_002");
        this.userTotalBetTextV.string = SocketSetting_1.default.t("4_002");
        this.winPointTextH.string = SocketSetting_1.default.t("4_004");
        this.winPointTextV.string = SocketSetting_1.default.t("4_004");
        LanguageMethod_1.default.instance
            .updateLabelStyle(this.gameLineTextH)
            .updateLabelStyle(this.gameLineTextV)
            .updateLabelStyle(this.userTotalBetTextH)
            .updateLabelStyle(this.userTotalBetTextV)
            .updateLabelStyle(this.winPointTextH)
            .updateLabelStyle(this.winPointTextV);
    };
    MainGameLabel.prototype.updateGroupIDEventListener = function () {
        var _this = this;
        EventManager_1.default.instance.serverEventListener(ServerEventType_1.ServerEventType.GROUP_ID, function (groupID) {
            _this.groupIDV.string = groupID;
            _this.groupIDH.string = groupID;
        }, false);
    };
    MainGameLabel.prototype.getUserTotalBetChangeObserver = function () {
        var _this = this;
        return new UserTotalBetChangeObserver_1.default(function (beforeIndex, afterIndex) {
            _this.userTotalBetLabelAnimation(_this.userTotalBetLabelV.node);
            _this.userTotalBetLabelAnimation(_this.userTotalBetLabelH.node);
            _this.userTotalBetLabelV.string = String(_this.tableInfo.LineTotalBet[afterIndex]);
            _this.userTotalBetLabelH.string = String(_this.tableInfo.LineTotalBet[afterIndex]);
        }, this);
    };
    MainGameLabel.prototype.userTotalBetLabelAnimation = function (node) {
        cc.tween(node)
            .to(0.3, { scale: 0 })
            .to(0.4, { scale: 1 }, { easing: "bounceOut" })
            .start();
    };
    MainGameLabel.prototype.getUserWinPointStateObserver = function () {
        var _this = this;
        return new UserWinPointStateObserver_1.default(function (winPoint, level) {
            var numberFormat = new Intl.NumberFormat().format(winPoint);
            _this.winPointLabelV.string = String(numberFormat);
            _this.winPointLabelH.string = String(numberFormat);
            if (SlotGameManager_1.default.instance.gameState == GameState_1.GameState.FREEING && level == 0) {
                winPoint = _this.freeResult.TotalWinPoint;
                _this.winEvent(winPoint);
                return;
            }
            if (level == 0) {
                _this.winEvent(winPoint);
            }
        }, this);
    };
    MainGameLabel.prototype.winEvent = function (winPoint) {
        var _this = this;
        this.winPoint.node.active = true;
        this.winPoint.string = String(winPoint);
        setTimeout(function () {
            _this.winPoint.string = "";
            _this.winPoint.node.active = false;
        }, 900);
    };
    MainGameLabel.prototype.getUserMoneyChangeObserver = function () {
        var _this = this;
        return new UserMoenyChangeObserver_1.default(function (money) {
            var numberFormat = new Intl.NumberFormat().format(money);
            _this.userMoneyLabelH.string = String(numberFormat);
            _this.userMoneyLabelV.string = String(numberFormat);
        }, this);
    };
    /**
     * 清除狀態上一輪狀態
     */
    MainGameLabel.prototype.remove = function () {
        this.winPointLabelV.string = "";
        this.winPointLabelH.string = "";
    };
    MainGameLabel.prototype.closeFreeTitle = function () {
        this.freeCount.string = "";
        if (this.freeTitle.active) {
            this.freeTitle.active = false;
        }
    };
    MainGameLabel.prototype.updateFreeTitle = function (count) {
        if (!this.freeTitle.active) {
            this.freeTitle.active = true;
        }
        this.freeCount.string = String(count);
    };
    var MainGameLabel_1, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_b = typeof cc !== "undefined" && cc.Label) === "function" ? _b : Object)
    ], MainGameLabel.prototype, "userMoneyLabelH", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_c = typeof cc !== "undefined" && cc.Label) === "function" ? _c : Object)
    ], MainGameLabel.prototype, "userMoneyLabelV", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_d = typeof cc !== "undefined" && cc.Label) === "function" ? _d : Object)
    ], MainGameLabel.prototype, "gameLineLabelH", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_e = typeof cc !== "undefined" && cc.Label) === "function" ? _e : Object)
    ], MainGameLabel.prototype, "gameLineLabelV", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_f = typeof cc !== "undefined" && cc.Label) === "function" ? _f : Object)
    ], MainGameLabel.prototype, "gameLineTextH", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_g = typeof cc !== "undefined" && cc.Label) === "function" ? _g : Object)
    ], MainGameLabel.prototype, "gameLineTextV", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_h = typeof cc !== "undefined" && cc.Label) === "function" ? _h : Object)
    ], MainGameLabel.prototype, "userTotalBetLabelH", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_j = typeof cc !== "undefined" && cc.Label) === "function" ? _j : Object)
    ], MainGameLabel.prototype, "userTotalBetTextH", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_k = typeof cc !== "undefined" && cc.Label) === "function" ? _k : Object)
    ], MainGameLabel.prototype, "userTotalBetLabelV", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_l = typeof cc !== "undefined" && cc.Label) === "function" ? _l : Object)
    ], MainGameLabel.prototype, "userTotalBetTextV", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_m = typeof cc !== "undefined" && cc.Label) === "function" ? _m : Object)
    ], MainGameLabel.prototype, "winPointLabelH", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_o = typeof cc !== "undefined" && cc.Label) === "function" ? _o : Object)
    ], MainGameLabel.prototype, "winPointTextH", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_p = typeof cc !== "undefined" && cc.Label) === "function" ? _p : Object)
    ], MainGameLabel.prototype, "winPointLabelV", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_q = typeof cc !== "undefined" && cc.Label) === "function" ? _q : Object)
    ], MainGameLabel.prototype, "winPointTextV", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_r = typeof cc !== "undefined" && cc.Label) === "function" ? _r : Object)
    ], MainGameLabel.prototype, "winPoint", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_s = typeof cc !== "undefined" && cc.Label) === "function" ? _s : Object)
    ], MainGameLabel.prototype, "groupIDH", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_t = typeof cc !== "undefined" && cc.Label) === "function" ? _t : Object)
    ], MainGameLabel.prototype, "groupIDV", void 0);
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_u = typeof cc !== "undefined" && cc.Node) === "function" ? _u : Object)
    ], MainGameLabel.prototype, "freeTitle", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_v = typeof cc !== "undefined" && cc.Label) === "function" ? _v : Object)
    ], MainGameLabel.prototype, "freeCount", void 0);
    __decorate([
        AudioManager_1.Effect("WinSingleLine"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], MainGameLabel.prototype, "winEvent", null);
    MainGameLabel = MainGameLabel_1 = __decorate([
        ccclass
    ], MainGameLabel);
    return MainGameLabel;
}(AGenericTemplate_1.default));
exports.default = MainGameLabel;

cc._RF.pop();