"use strict";
cc._RF.push(module, '58f6b5cI2xD4ZNYQN6mFEOC', 'AMenuButtonEvent');
// script/Framework/Template/ButtonEvent/MenuButton/AMenuButtonEvent.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var AudioManager_1 = require("../../../Audio/AudioManager");
var AutoStateChangeNotification_1 = require("../../../Process/GameNotification/AutoStateChangeNotification");
var UserTotalBetChangeNotification_1 = require("../../../Process/GameNotification/UserTotalBetChangeNotification");
var AutoStateChangeObserver_1 = require("../../../Process/GameObserver/AutoStateChangeObserver");
var UserTotalBetChangeObserver_1 = require("../../../Process/GameObserver/UserTotalBetChangeObserver");
var SlotGameManager_1 = require("../../../Process/SlotGameManager");
var ResponseType_1 = require("../../../WebResponse/Enum/ResponseType");
var WebResponseManager_1 = require("../../../WebResponse/WebResponseManager");
var OverrideComponent_1 = require("../../OverrideComponent");
var ccclass = cc._decorator.ccclass;
/**
 * @Author XIAO-LI-PIN
 * @Description (抽象類)MENU主頁面,所有按鈕事件
 * @Date 2021-05-26 上午 15:59
 * @Version 1.1
 */
var AMenuButtonEvent = /** @class */ (function (_super) {
    __extends(AMenuButtonEvent, _super);
    function AMenuButtonEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AMenuButtonEvent.prototype.onLoad = function () {
        this.tableInfo =
            WebResponseManager_1.WebResponseManager
                .instance()
                .getResult(ResponseType_1.ResponseType.TABLE_INFO);
        this.onCreate(); //自訂義初始狀態
        AutoStateChangeNotification_1.default //訂閱自動事件
            .instance.subscribe(this.getAutoStateChangeObserver(), true);
        UserTotalBetChangeNotification_1.default //訂閱用戶更改押注時事件
            .instance.subscribe(this.getUserTotalBetChangeObserver(), true);
    };
    /**
     * 自動更新當前是否靜音背景音樂
     * 注意:update靜音狀態會依照config初始設定做更新
     * @protected
     */
    AMenuButtonEvent.prototype.musicEventListener = function () {
        var isOnMute = AudioManager_1.default.instance.updateMusicOnMute();
        this.musicEvent(isOnMute);
    };
    /**
     * 自動更新當前是否靜音效果音樂
     * 注意:update靜音狀態會依照config初始設定做更新
     * @protected
     */
    AMenuButtonEvent.prototype.effectEventListener = function () {
        var isOnMute = AudioManager_1.default.instance.updateEffectOnMute();
        this.effectEvent(isOnMute);
    };
    /**
     * 用戶點擊按鈕增加押注點數事件
     * 注意:當用戶增加的押注點數超過最大值,將會自動跳回最小值
     * @protected
     */
    AMenuButtonEvent.prototype.betUpEventListener = function () {
        var beforeBetIndex = SlotGameManager_1.default.instance.userBetPoint.LineBet;
        var afterBetIndex = beforeBetIndex + 1;
        if (afterBetIndex > this.tableInfo.LineBet.length - 1) {
            afterBetIndex = 0;
        }
        UserTotalBetChangeNotification_1.default.instance.notify(beforeBetIndex, afterBetIndex);
    };
    /**
     * 用戶點擊按鈕增加押注點數事件
     * 注意:當用戶增加的押注點數超過最小值,將會自動跳回最大值
     * @protected
     */
    AMenuButtonEvent.prototype.betDownEventListener = function () {
        var beforeBetIndex = SlotGameManager_1.default.instance.userBetPoint.LineBet;
        var afterBetIndex = beforeBetIndex - 1;
        if (afterBetIndex < 0) {
            afterBetIndex = this.tableInfo.LineBet.length - 1;
        }
        UserTotalBetChangeNotification_1.default.instance.notify(beforeBetIndex, afterBetIndex);
    };
    /**
     * 當前總押注事件推播接收者
     * 注意:如果要解除推播,將無法在監聽推波事件派發
     * @returns {UserTotalBetChangeObserver}
     * @protected
     */
    AMenuButtonEvent.prototype.getUserTotalBetChangeObserver = function () {
        var _this = this;
        if (!this.userTotalBetChangeObserver) {
            this.userTotalBetChangeObserver = new UserTotalBetChangeObserver_1.default(function (beforeIndex, afterIndex) {
                _this.totalBetChangeEvent(beforeIndex, afterIndex);
            }, this);
        }
        return this.userTotalBetChangeObserver;
    };
    /**
     * 當前自動狀態事件推播接收者
     * 注意:如果要解除推播,將無法在監聽推波事件派發
     * @returns {UserTotalBetChangeObserver}
     * @protected
     */
    AMenuButtonEvent.prototype.getAutoStateChangeObserver = function () {
        var _this = this;
        if (!this.autoStateChangeObserver) {
            this.autoStateChangeObserver = new AutoStateChangeObserver_1.default(function (isAutomaticState, beforeAutoCount, afterAutoCount) {
                _this.autoEvent(beforeAutoCount, afterAutoCount);
            }, this);
        }
        return this.autoStateChangeObserver;
    };
    /**
     * 自動按鈕點擊事件
     * @param event
     * @param {AutoType} callbackType : 哪顆類型的按鈕點擊
     * @protected
     */
    AMenuButtonEvent.prototype.autoButtonEventListener = function (event, callbackType) {
        var beforeAutoType = SlotGameManager_1.default.instance.autoType;
        AutoStateChangeNotification_1.default
            .instance.notify(true, beforeAutoType, callbackType);
    };
    AMenuButtonEvent = __decorate([
        ccclass
    ], AMenuButtonEvent);
    return AMenuButtonEvent;
}(OverrideComponent_1.default));
exports.default = AMenuButtonEvent;

cc._RF.pop();