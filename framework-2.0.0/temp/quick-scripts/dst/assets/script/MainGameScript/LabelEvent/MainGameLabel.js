
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/MainGameScript/LabelEvent/MainGameLabel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxNYWluR2FtZVNjcmlwdFxcTGFiZWxFdmVudFxcTWFpbkdhbWVMYWJlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtRUFBeUQ7QUFDekQsOEVBQXlFO0FBQ3pFLGlGQUE2RTtBQUM3RSxzRUFBZ0U7QUFDaEUsb0VBQWdFO0FBQ2hFLG9IQUErRztBQUMvRywwSEFBcUg7QUFDckgsd0hBQW1IO0FBQ25ILHdHQUFtRztBQUNuRyw4R0FBeUc7QUFDekcsNEdBQXVHO0FBQ3ZHLDJFQUFxRTtBQUNyRSw4RUFBd0U7QUFDeEUsOEVBQTJFO0FBRzNFLHFGQUFpRjtBQUNqRiw0REFBc0Q7QUFFaEQsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBMkMsaUNBQWdCO0lBQTNEO1FBQUEscUVBMk1DO1FBeE1XLHFCQUFlLEdBQWEsSUFBSSxDQUFDO1FBRWpDLHFCQUFlLEdBQWEsSUFBSSxDQUFDO1FBRWpDLG9CQUFjLEdBQWEsSUFBSSxDQUFDO1FBRWhDLG9CQUFjLEdBQWEsSUFBSSxDQUFDO1FBRWhDLG1CQUFhLEdBQWEsSUFBSSxDQUFDO1FBRS9CLG1CQUFhLEdBQWEsSUFBSSxDQUFDO1FBRS9CLHdCQUFrQixHQUFhLElBQUksQ0FBQztRQUVwQyx1QkFBaUIsR0FBYSxJQUFJLENBQUM7UUFFbkMsd0JBQWtCLEdBQWEsSUFBSSxDQUFDO1FBRXBDLHVCQUFpQixHQUFhLElBQUksQ0FBQztRQUVuQyxvQkFBYyxHQUFhLElBQUksQ0FBQztRQUVoQyxtQkFBYSxHQUFhLElBQUksQ0FBQztRQUUvQixvQkFBYyxHQUFhLElBQUksQ0FBQztRQUVoQyxtQkFBYSxHQUFhLElBQUksQ0FBQztRQUUvQixjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRTFCLGNBQVEsR0FBYSxJQUFJLENBQUM7UUFF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REMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7c0RBQ0QsRUFBRSxvQkFBRixFQUFFLENBQUMsS0FBSzttREFBUTtJQUVsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3NEQUNELEVBQUUsb0JBQUYsRUFBRSxDQUFDLEtBQUs7bURBQVE7SUFFbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztzREFDQyxFQUFFLG9CQUFGLEVBQUUsQ0FBQyxJQUFJO29EQUFRO0lBRWxDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7c0RBQ0EsRUFBRSxvQkFBRixFQUFFLENBQUMsS0FBSztvREFBUTtJQXdIbkM7UUFEQyxxQkFBTSxDQUFDLGVBQWUsQ0FBQzs7OztpREFTdkI7SUF2S2dCLGFBQWE7UUFEakMsT0FBTztPQUNhLGFBQWEsQ0EyTWpDO0lBQUQsb0JBQUM7Q0EzTUQsQUEyTUMsQ0EzTTBDLDBCQUFnQixHQTJNMUQ7a0JBM01vQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFZmZlY3R9IGZyb20gJy4uLy4uL0ZyYW1ld29yay9BdWRpby9BdWRpb01hbmFnZXInXHJcbmltcG9ydCBMYW5ndWFnZU1ldGhvZCBmcm9tIFwiLi4vLi4vRnJhbWV3b3JrL0dsb2JhbE1ldGhvZC9MYW5ndWFnZU1ldGhvZFwiO1xyXG5pbXBvcnQge1NlcnZlckV2ZW50VHlwZX0gZnJvbSAnLi4vLi4vRnJhbWV3b3JrL0xpc3RlbmVyL0VudW0vU2VydmVyRXZlbnRUeXBlJ1xyXG5pbXBvcnQgRXZlbnRNYW5hZ2VyIGZyb20gJy4uLy4uL0ZyYW1ld29yay9MaXN0ZW5lci9FdmVudE1hbmFnZXInXHJcbmltcG9ydCB7R2FtZVN0YXRlfSBmcm9tICcuLi8uLi9GcmFtZXdvcmsvUHJvY2Vzcy9FbnVtL0dhbWVTdGF0ZSdcclxuaW1wb3J0IFVzZXJNb25leUNoYW5nZU5vdGlmaWNhdGlvbiBmcm9tIFwiLi4vLi4vRnJhbWV3b3JrL1Byb2Nlc3MvR2FtZU5vdGlmaWNhdGlvbi9Vc2VyTW9uZXlDaGFuZ2VOb3RpZmljYXRpb25cIjtcclxuaW1wb3J0IFVzZXJUb3RhbEJldENoYW5nZU5vdGlmaWNhdGlvbiBmcm9tIFwiLi4vLi4vRnJhbWV3b3JrL1Byb2Nlc3MvR2FtZU5vdGlmaWNhdGlvbi9Vc2VyVG90YWxCZXRDaGFuZ2VOb3RpZmljYXRpb25cIjtcclxuaW1wb3J0IFVzZXJXaW5Qb2ludFN0YXRlTm90aWZpY2F0aW9uIGZyb20gXCIuLi8uLi9GcmFtZXdvcmsvUHJvY2Vzcy9HYW1lTm90aWZpY2F0aW9uL1VzZXJXaW5Qb2ludFN0YXRlTm90aWZpY2F0aW9uXCI7XHJcbmltcG9ydCBVc2VyTW9uZXlDaGFuZ2VPYnNlcnZlciBmcm9tIFwiLi4vLi4vRnJhbWV3b3JrL1Byb2Nlc3MvR2FtZU9ic2VydmVyL1VzZXJNb2VueUNoYW5nZU9ic2VydmVyXCI7XHJcbmltcG9ydCBVc2VyVG90YWxCZXRDaGFuZ2VPYnNlcnZlciBmcm9tIFwiLi4vLi4vRnJhbWV3b3JrL1Byb2Nlc3MvR2FtZU9ic2VydmVyL1VzZXJUb3RhbEJldENoYW5nZU9ic2VydmVyXCI7XHJcbmltcG9ydCBVc2VyV2luUG9pbnRTdGF0ZU9ic2VydmVyIGZyb20gXCIuLi8uLi9GcmFtZXdvcmsvUHJvY2Vzcy9HYW1lT2JzZXJ2ZXIvVXNlcldpblBvaW50U3RhdGVPYnNlcnZlclwiO1xyXG5pbXBvcnQgU2xvdEdhbWVNYW5hZ2VyIGZyb20gJy4uLy4uL0ZyYW1ld29yay9Qcm9jZXNzL1Nsb3RHYW1lTWFuYWdlcidcclxuaW1wb3J0IEFHZW5lcmljVGVtcGxhdGUgZnJvbSAnLi4vLi4vRnJhbWV3b3JrL1RlbXBsYXRlL0FHZW5lcmljVGVtcGxhdGUnXHJcbmltcG9ydCB7UmVzcG9uc2VUeXBlfSBmcm9tIFwiLi4vLi4vRnJhbWV3b3JrL1dlYlJlc3BvbnNlL0VudW0vUmVzcG9uc2VUeXBlXCI7XHJcbmltcG9ydCBOb0xpbmVGcmVlUmVzdWx0IGZyb20gXCIuLi8uLi9GcmFtZXdvcmsvV2ViUmVzcG9uc2UvU2V2ZXJEYXRhTW9kZWwvRnJlZVJlc3VsdC9Ob0xpbmVGcmVlUmVzdWx0XCI7XHJcbmltcG9ydCBOb0xpbmVUYWJsZUluZm8gZnJvbSBcIi4uLy4uL0ZyYW1ld29yay9XZWJSZXNwb25zZS9TZXZlckRhdGFNb2RlbC9UYWJsZUluZm8vTm9MaW5lVGFibGVJbmZvXCI7XHJcbmltcG9ydCB7V2ViUmVzcG9uc2VNYW5hZ2VyfSBmcm9tICcuLi8uLi9GcmFtZXdvcmsvV2ViUmVzcG9uc2UvV2ViUmVzcG9uc2VNYW5hZ2VyJ1xyXG5pbXBvcnQgU29ja2V0U2V0dGluZyBmcm9tICcuLi8uLi9Tb2NrZXQvU29ja2V0U2V0dGluZydcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbkdhbWVMYWJlbCBleHRlbmRzIEFHZW5lcmljVGVtcGxhdGUge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHByaXZhdGUgdXNlck1vbmV5TGFiZWxIOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwcml2YXRlIHVzZXJNb25leUxhYmVsVjogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcHJpdmF0ZSBnYW1lTGluZUxhYmVsSDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcHJpdmF0ZSBnYW1lTGluZUxhYmVsVjogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcHJpdmF0ZSBnYW1lTGluZVRleHRIOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwcml2YXRlIGdhbWVMaW5lVGV4dFY6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHByaXZhdGUgdXNlclRvdGFsQmV0TGFiZWxIOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwcml2YXRlIHVzZXJUb3RhbEJldFRleHRIOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwcml2YXRlIHVzZXJUb3RhbEJldExhYmVsVjogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcHJpdmF0ZSB1c2VyVG90YWxCZXRUZXh0VjogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcHJpdmF0ZSB3aW5Qb2ludExhYmVsSDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcHJpdmF0ZSB3aW5Qb2ludFRleHRIOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwcml2YXRlIHdpblBvaW50TGFiZWxWOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwcml2YXRlIHdpblBvaW50VGV4dFY6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHByaXZhdGUgd2luUG9pbnQ6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHByaXZhdGUgZ3JvdXBJREg6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHByaXZhdGUgZ3JvdXBJRFY6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBmcmVlVGl0bGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcHJpdmF0ZSBmcmVlQ291bnQ6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIHByaXZhdGUgdGFibGVJbmZvOiBOb0xpbmVUYWJsZUluZm87XHJcbiAgICBwcml2YXRlIGZyZWVSZXN1bHQ6Tm9MaW5lRnJlZVJlc3VsdDtcclxuICAgIHB1YmxpYyBzdGF0aWMgaW5zdGFuY2U6IE1haW5HYW1lTGFiZWw7XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBvbkNyZWF0ZSgpIHtcclxuICAgICAgICBNYWluR2FtZUxhYmVsLmluc3RhbmNlID0gdGhpcztcclxuICAgICAgICB0aGlzLnRhYmxlSW5mbyA9XHJcbiAgICAgICAgICAgIFdlYlJlc3BvbnNlTWFuYWdlclxyXG4gICAgICAgICAgICAgICAgLmluc3RhbmNlPE5vTGluZVRhYmxlSW5mbz4oKVxyXG4gICAgICAgICAgICAgICAgLmdldFJlc3VsdChSZXNwb25zZVR5cGUuVEFCTEVfSU5GTyk7XHJcbiAgICAgICAgdGhpcy5mcmVlUmVzdWx0ID1cclxuICAgICAgICAgICAgV2ViUmVzcG9uc2VNYW5hZ2VyXHJcbiAgICAgICAgICAgICAgICAuaW5zdGFuY2U8Tm9MaW5lRnJlZVJlc3VsdD4oKVxyXG4gICAgICAgICAgICAgICAgLmdldFJlc3VsdChSZXNwb25zZVR5cGUuRlJFRSk7XHJcbiAgICAgICAgLy/liJ3lp4tmcmVl5qiZ6aGMXHJcbiAgICAgICAgdGhpcy5mcmVlQ291bnQuc3RyaW5nID0gXCJcIjtcclxuICAgICAgICB0aGlzLmZyZWVUaXRsZS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy/liJ3lp4s65Zau5bGA6K2Y5Yil6JmfXHJcbiAgICAgICAgbGV0IGdyb3VwSUROdW0gPSBTb2NrZXRTZXR0aW5nLlNlcnZlclJldHVybkRhdGFbXCJHcm91cElEXCJdLkdyb3VwSUQ7XHJcbiAgICAgICAgdGhpcy5ncm91cElESC5zdHJpbmcgPSBncm91cElETnVtO1xyXG4gICAgICAgIHRoaXMuZ3JvdXBJRFYuc3RyaW5nID0gZ3JvdXBJRE51bTtcclxuXHJcbiAgICAgICAgLy/liJ3lp4vnjbLnjY7mrITkvY1cclxuICAgICAgICB0aGlzLndpblBvaW50LnN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy53aW5Qb2ludC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvL+WIneWni+aJi+WLleabtOaWsOipsumBiuaIsue3muaVuDrnhKHnt5rpgYrmiLLnhKHlvp7oqIjnrpco5a+r5q27KVxyXG4gICAgICAgIHRoaXMuZ2FtZUxpbmVMYWJlbEguc3RyaW5nID0gXCIyNDNcIjtcclxuICAgICAgICB0aGlzLmdhbWVMaW5lTGFiZWxWLnN0cmluZyA9IFwiMjQzXCI7XHJcblxyXG4gICAgICAgIC8v5Yid5aeL5YyWIHVzZXJDb25maWfoqK3lrprnmoTliJ3lp4t1c2Vy5LiL5rOo6YeR6aGNXHJcbiAgICAgICAgdGhpcy51c2VyVG90YWxCZXRMYWJlbEguc3RyaW5nID1cclxuICAgICAgICAgICAgU3RyaW5nKHRoaXMudGFibGVJbmZvLkxpbmVUb3RhbEJldFtTbG90R2FtZU1hbmFnZXIuaW5zdGFuY2UudXNlckJldFBvaW50LkxpbmVCZXRdKTtcclxuICAgICAgICB0aGlzLnVzZXJUb3RhbEJldExhYmVsVi5zdHJpbmcgPVxyXG4gICAgICAgICAgICBTdHJpbmcodGhpcy50YWJsZUluZm8uTGluZVRvdGFsQmV0W1Nsb3RHYW1lTWFuYWdlci5pbnN0YW5jZS51c2VyQmV0UG9pbnQuTGluZUJldF0pO1xyXG5cclxuICAgICAgICAvL+WIneWni+abtOaWsHVzZXIg6YeR6aGNLOaOpeaUtnRhYmxlSW5mb+WPg+aVuOaZgizlsJrmnKrlr6bkvovljJboqbLpoZ4s5Zug5q2k5Yid5aeL5pu05pawVVNFUiBNT05FWSDlpLHmlYhcclxuICAgICAgICBsZXQgbnVtYmVyRm9ybWF0ID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KCkuZm9ybWF0KFNsb3RHYW1lTWFuYWdlci5pbnN0YW5jZS51c2VyTW9uZXkpO1xyXG4gICAgICAgIHRoaXMudXNlck1vbmV5TGFiZWxWLnN0cmluZyA9IFN0cmluZyhudW1iZXJGb3JtYXQpO1xyXG4gICAgICAgIHRoaXMudXNlck1vbmV5TGFiZWxILnN0cmluZyA9IFN0cmluZyhudW1iZXJGb3JtYXQpO1xyXG5cclxuICAgICAgICAvL+WIneWni+Wwh+i0j+WIhuashOS9jea4heepulxyXG4gICAgICAgIHRoaXMud2luUG9pbnRMYWJlbEguc3RyaW5nID0gXCJcIjtcclxuICAgICAgICB0aGlzLndpblBvaW50TGFiZWxWLnN0cmluZyA9IFwiXCI7XHJcblxyXG4gICAgICAgIC8v6KiC6Zax5o6o5pKt5LqL5Lu2XHJcbiAgICAgICAgVXNlck1vbmV5Q2hhbmdlTm90aWZpY2F0aW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+abtOaWsHVzZXLph5HpoY3mmYIg6KiC6Zax5LqL5Lu2XHJcbiAgICAgICAgICAgIC5pbnN0YW5jZS5zdWJzY3JpYmUodGhpcy5nZXRVc2VyTW9uZXlDaGFuZ2VPYnNlcnZlcigpLCB0cnVlKTtcclxuICAgICAgICBVc2VyVG90YWxCZXRDaGFuZ2VOb3RpZmljYXRpb25cclxuICAgICAgICAgICAgLmluc3RhbmNlLnN1YnNjcmliZSh0aGlzLmdldFVzZXJUb3RhbEJldENoYW5nZU9ic2VydmVyKCksIHRydWUpO1xyXG4gICAgICAgIFVzZXJXaW5Qb2ludFN0YXRlTm90aWZpY2F0aW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/njbLnjY7mmYIg6KiC6Zax5LqL5Lu2XHJcbiAgICAgICAgICAgIC5pbnN0YW5jZS5zdWJzY3JpYmUodGhpcy5nZXRVc2VyV2luUG9pbnRTdGF0ZU9ic2VydmVyKCksIHRydWUpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlR3JvdXBJREV2ZW50TGlzdGVuZXIoKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9Hcm91cElEIOebo+iBveiuiuabtFxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOabtOaWsOiqnuezu1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgbGFuZ3VhZ2VTZXR0aW5nKCkge1xyXG5cclxuICAgICAgICB0aGlzLmdhbWVMaW5lVGV4dEguc3RyaW5nID0gU29ja2V0U2V0dGluZy50KFwiNF8wMDhcIik7XHJcbiAgICAgICAgdGhpcy5nYW1lTGluZVRleHRWLnN0cmluZyA9IFNvY2tldFNldHRpbmcudChcIjRfMDA4XCIpO1xyXG4gICAgICAgIHRoaXMudXNlclRvdGFsQmV0VGV4dEguc3RyaW5nID0gU29ja2V0U2V0dGluZy50KFwiNF8wMDJcIik7XHJcbiAgICAgICAgdGhpcy51c2VyVG90YWxCZXRUZXh0Vi5zdHJpbmcgPSBTb2NrZXRTZXR0aW5nLnQoXCI0XzAwMlwiKTtcclxuICAgICAgICB0aGlzLndpblBvaW50VGV4dEguc3RyaW5nID0gU29ja2V0U2V0dGluZy50KFwiNF8wMDRcIik7XHJcbiAgICAgICAgdGhpcy53aW5Qb2ludFRleHRWLnN0cmluZyA9IFNvY2tldFNldHRpbmcudChcIjRfMDA0XCIpO1xyXG5cclxuICAgICAgICBMYW5ndWFnZU1ldGhvZC5pbnN0YW5jZVxyXG4gICAgICAgICAgICAudXBkYXRlTGFiZWxTdHlsZSh0aGlzLmdhbWVMaW5lVGV4dEgpXHJcbiAgICAgICAgICAgIC51cGRhdGVMYWJlbFN0eWxlKHRoaXMuZ2FtZUxpbmVUZXh0VilcclxuICAgICAgICAgICAgLnVwZGF0ZUxhYmVsU3R5bGUodGhpcy51c2VyVG90YWxCZXRUZXh0SClcclxuICAgICAgICAgICAgLnVwZGF0ZUxhYmVsU3R5bGUodGhpcy51c2VyVG90YWxCZXRUZXh0VilcclxuICAgICAgICAgICAgLnVwZGF0ZUxhYmVsU3R5bGUodGhpcy53aW5Qb2ludFRleHRIKVxyXG4gICAgICAgICAgICAudXBkYXRlTGFiZWxTdHlsZSh0aGlzLndpblBvaW50VGV4dFYpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlR3JvdXBJREV2ZW50TGlzdGVuZXIoKSB7XHJcbiAgICAgICAgRXZlbnRNYW5hZ2VyLmluc3RhbmNlLnNlcnZlckV2ZW50TGlzdGVuZXIoU2VydmVyRXZlbnRUeXBlLkdST1VQX0lELCAoZ3JvdXBJRDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZ3JvdXBJRFYuc3RyaW5nID0gZ3JvdXBJRDtcclxuICAgICAgICAgICAgdGhpcy5ncm91cElESC5zdHJpbmcgPSBncm91cElEO1xyXG4gICAgICAgIH0sIGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFVzZXJUb3RhbEJldENoYW5nZU9ic2VydmVyKCk6IFVzZXJUb3RhbEJldENoYW5nZU9ic2VydmVyIHtcclxuICAgICAgICByZXR1cm4gbmV3IFVzZXJUb3RhbEJldENoYW5nZU9ic2VydmVyKChiZWZvcmVJbmRleCwgYWZ0ZXJJbmRleCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnVzZXJUb3RhbEJldExhYmVsQW5pbWF0aW9uKHRoaXMudXNlclRvdGFsQmV0TGFiZWxWLm5vZGUpO1xyXG4gICAgICAgICAgICB0aGlzLnVzZXJUb3RhbEJldExhYmVsQW5pbWF0aW9uKHRoaXMudXNlclRvdGFsQmV0TGFiZWxILm5vZGUpO1xyXG4gICAgICAgICAgICB0aGlzLnVzZXJUb3RhbEJldExhYmVsVi5zdHJpbmcgPSBTdHJpbmcodGhpcy50YWJsZUluZm8uTGluZVRvdGFsQmV0W2FmdGVySW5kZXhdKTtcclxuICAgICAgICAgICAgdGhpcy51c2VyVG90YWxCZXRMYWJlbEguc3RyaW5nID0gU3RyaW5nKHRoaXMudGFibGVJbmZvLkxpbmVUb3RhbEJldFthZnRlckluZGV4XSk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1c2VyVG90YWxCZXRMYWJlbEFuaW1hdGlvbihub2RlOiBjYy5Ob2RlKTogdm9pZCB7XHJcbiAgICAgICAgY2MudHdlZW4obm9kZSlcclxuICAgICAgICAgICAgLnRvKDAuMywge3NjYWxlOiAwfSlcclxuICAgICAgICAgICAgLnRvKDAuNCwge3NjYWxlOiAxfSwge2Vhc2luZzogXCJib3VuY2VPdXRcIn0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0VXNlcldpblBvaW50U3RhdGVPYnNlcnZlcigpOiBVc2VyV2luUG9pbnRTdGF0ZU9ic2VydmVyIHtcclxuICAgICAgICByZXR1cm4gbmV3IFVzZXJXaW5Qb2ludFN0YXRlT2JzZXJ2ZXIoKHdpblBvaW50LCBsZXZlbCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbnVtYmVyRm9ybWF0ID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KCkuZm9ybWF0KHdpblBvaW50KTtcclxuICAgICAgICAgICAgdGhpcy53aW5Qb2ludExhYmVsVi5zdHJpbmcgPSBTdHJpbmcobnVtYmVyRm9ybWF0KTtcclxuICAgICAgICAgICAgdGhpcy53aW5Qb2ludExhYmVsSC5zdHJpbmcgPSBTdHJpbmcobnVtYmVyRm9ybWF0KTtcclxuICAgICAgICAgICAgaWYgKFNsb3RHYW1lTWFuYWdlci5pbnN0YW5jZS5nYW1lU3RhdGUgPT0gR2FtZVN0YXRlLkZSRUVJTkcgJiYgbGV2ZWwgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgd2luUG9pbnQgPSB0aGlzLmZyZWVSZXN1bHQuVG90YWxXaW5Qb2ludDtcclxuICAgICAgICAgICAgICAgIHRoaXMud2luRXZlbnQod2luUG9pbnQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChsZXZlbCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndpbkV2ZW50KHdpblBvaW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgQEVmZmVjdChcIldpblNpbmdsZUxpbmVcIilcclxuICAgIHByaXZhdGUgd2luRXZlbnQod2luUG9pbnQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMud2luUG9pbnQubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMud2luUG9pbnQuc3RyaW5nID0gU3RyaW5nKHdpblBvaW50KTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMud2luUG9pbnQuc3RyaW5nID0gXCJcIjtcclxuICAgICAgICAgICAgdGhpcy53aW5Qb2ludC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0sIDkwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRVc2VyTW9uZXlDaGFuZ2VPYnNlcnZlcigpOiBVc2VyTW9uZXlDaGFuZ2VPYnNlcnZlciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBVc2VyTW9uZXlDaGFuZ2VPYnNlcnZlcigobW9uZXkpID0+IHtcclxuICAgICAgICAgICAgbGV0IG51bWJlckZvcm1hdCA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCgpLmZvcm1hdChtb25leSk7XHJcbiAgICAgICAgICAgIHRoaXMudXNlck1vbmV5TGFiZWxILnN0cmluZyA9IFN0cmluZyhudW1iZXJGb3JtYXQpO1xyXG4gICAgICAgICAgICB0aGlzLnVzZXJNb25leUxhYmVsVi5zdHJpbmcgPSBTdHJpbmcobnVtYmVyRm9ybWF0KTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOa4hemZpOeLgOaFi+S4iuS4gOi8queLgOaFi1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVtb3ZlKCkge1xyXG5cclxuICAgICAgICB0aGlzLndpblBvaW50TGFiZWxWLnN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy53aW5Qb2ludExhYmVsSC5zdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xvc2VGcmVlVGl0bGUoKSB7XHJcbiAgICAgICAgdGhpcy5mcmVlQ291bnQuc3RyaW5nID0gXCJcIjtcclxuICAgICAgICBpZiAodGhpcy5mcmVlVGl0bGUuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZnJlZVRpdGxlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlRnJlZVRpdGxlKGNvdW50OiBudW1iZXIpIHtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmZyZWVUaXRsZS5hY3RpdmUpIHtcclxuICAgICAgICAgICAgdGhpcy5mcmVlVGl0bGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5mcmVlQ291bnQuc3RyaW5nID0gU3RyaW5nKGNvdW50KTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==