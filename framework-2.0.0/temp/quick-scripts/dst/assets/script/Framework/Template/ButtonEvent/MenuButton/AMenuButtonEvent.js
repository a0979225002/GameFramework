
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Template/ButtonEvent/MenuButton/AMenuButtonEvent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXFRlbXBsYXRlXFxCdXR0b25FdmVudFxcTWVudUJ1dHRvblxcQU1lbnVCdXR0b25FdmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0REFBc0Q7QUFFdEQsNkdBQXdHO0FBQ3hHLG1IQUE4RztBQUM5RyxpR0FBNEY7QUFDNUYsdUdBQWtHO0FBQ2xHLG9FQUE4RDtBQUM5RCx1RUFBb0U7QUFDcEUsOEVBQTBFO0FBQzFFLDZEQUF3RDtBQUVqRCxJQUFBLE9BQU8sR0FBSSxFQUFFLENBQUMsVUFBVSxRQUFqQixDQUFrQjtBQUVoQzs7Ozs7R0FLRztBQUVIO0lBQXVELG9DQUFpQjtJQUF4RTs7SUErS0EsQ0FBQztJQXZHYSxpQ0FBTSxHQUFoQjtRQUNJLElBQUksQ0FBQyxTQUFTO1lBQ1YsdUNBQWtCO2lCQUNiLFFBQVEsRUFBbUI7aUJBQzNCLFNBQVMsQ0FBQywyQkFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRTVDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFrRSxTQUFTO1FBRTNGLHFDQUEyQixDQUF1RCxRQUFRO2FBQ3JGLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLDBCQUEwQixFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDakUsd0NBQThCLENBQW9ELGFBQWE7YUFDMUYsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsNkJBQTZCLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNPLDZDQUFrQixHQUE1QjtRQUNJLElBQUksUUFBUSxHQUFHLHNCQUFZLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDekQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNPLDhDQUFtQixHQUE3QjtRQUNJLElBQUksUUFBUSxHQUFHLHNCQUFZLENBQUMsUUFBUSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDMUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNPLDZDQUFrQixHQUE1QjtRQUNJLElBQUksY0FBYyxHQUFHLHlCQUFlLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUM7UUFDbkUsSUFBSSxhQUFhLEdBQUcsY0FBYyxHQUFDLENBQUMsQ0FBQztRQUNyQyxJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ25ELGFBQWEsR0FBRyxDQUFDLENBQUM7U0FDckI7UUFDRCx3Q0FBOEIsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNPLCtDQUFvQixHQUE5QjtRQUNJLElBQUksY0FBYyxHQUFHLHlCQUFlLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUM7UUFDbkUsSUFBSSxhQUFhLEdBQUcsY0FBYyxHQUFDLENBQUMsQ0FBQztRQUNyQyxJQUFJLGFBQWEsR0FBRyxDQUFDLEVBQUU7WUFDbkIsYUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7U0FDckQ7UUFDRCx3Q0FBOEIsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDTyx3REFBNkIsR0FBdkM7UUFBQSxpQkFPQztRQU5HLElBQUksQ0FBQyxJQUFJLENBQUMsMEJBQTBCLEVBQUU7WUFDbEMsSUFBSSxDQUFDLDBCQUEwQixHQUFHLElBQUksb0NBQTBCLENBQUMsVUFBQyxXQUFXLEVBQUUsVUFBVTtnQkFDckYsS0FBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUN0RCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDWjtRQUNELE9BQU8sSUFBSSxDQUFDLDBCQUEwQixDQUFDO0lBQzNDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNPLHFEQUEwQixHQUFwQztRQUFBLGlCQU9DO1FBTkcsSUFBSSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRTtZQUMvQixJQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxpQ0FBdUIsQ0FBQyxVQUFDLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxjQUFjO2dCQUN6RyxLQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsRUFBRSxjQUFjLENBQUMsQ0FBQztZQUNwRCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDWjtRQUNELE9BQU8sSUFBSSxDQUFDLHVCQUF1QixDQUFDO0lBQ3hDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNPLGtEQUF1QixHQUFqQyxVQUFrQyxLQUFLLEVBQUUsWUFBc0I7UUFDM0QsSUFBSSxjQUFjLEdBQUcseUJBQWUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO1FBQ3ZELHFDQUEyQjthQUN0QixRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxjQUFjLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQTlLeUIsZ0JBQWdCO1FBRDdDLE9BQU87T0FDc0IsZ0JBQWdCLENBK0s3QztJQUFELHVCQUFDO0NBL0tELEFBK0tDLENBL0tzRCwyQkFBaUIsR0ErS3ZFO2tCQS9LNkIsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tICcuLi8uLi8uLi9BdWRpby9BdWRpb01hbmFnZXInXHJcbmltcG9ydCB7QXV0b1R5cGV9IGZyb20gJy4uLy4uLy4uL0NvbmZpZy9FbnVtL0NvbmZpZ0VudW0nXHJcbmltcG9ydCBBdXRvU3RhdGVDaGFuZ2VOb3RpZmljYXRpb24gZnJvbSBcIi4uLy4uLy4uL1Byb2Nlc3MvR2FtZU5vdGlmaWNhdGlvbi9BdXRvU3RhdGVDaGFuZ2VOb3RpZmljYXRpb25cIjtcclxuaW1wb3J0IFVzZXJUb3RhbEJldENoYW5nZU5vdGlmaWNhdGlvbiBmcm9tIFwiLi4vLi4vLi4vUHJvY2Vzcy9HYW1lTm90aWZpY2F0aW9uL1VzZXJUb3RhbEJldENoYW5nZU5vdGlmaWNhdGlvblwiO1xyXG5pbXBvcnQgQXV0b1N0YXRlQ2hhbmdlT2JzZXJ2ZXIgZnJvbSBcIi4uLy4uLy4uL1Byb2Nlc3MvR2FtZU9ic2VydmVyL0F1dG9TdGF0ZUNoYW5nZU9ic2VydmVyXCI7XHJcbmltcG9ydCBVc2VyVG90YWxCZXRDaGFuZ2VPYnNlcnZlciBmcm9tIFwiLi4vLi4vLi4vUHJvY2Vzcy9HYW1lT2JzZXJ2ZXIvVXNlclRvdGFsQmV0Q2hhbmdlT2JzZXJ2ZXJcIjtcclxuaW1wb3J0IFNsb3RHYW1lTWFuYWdlciBmcm9tICcuLi8uLi8uLi9Qcm9jZXNzL1Nsb3RHYW1lTWFuYWdlcidcclxuaW1wb3J0IHtSZXNwb25zZVR5cGV9IGZyb20gXCIuLi8uLi8uLi9XZWJSZXNwb25zZS9FbnVtL1Jlc3BvbnNlVHlwZVwiO1xyXG5pbXBvcnQge1dlYlJlc3BvbnNlTWFuYWdlcn0gZnJvbSAnLi4vLi4vLi4vV2ViUmVzcG9uc2UvV2ViUmVzcG9uc2VNYW5hZ2VyJ1xyXG5pbXBvcnQgT3ZlcnJpZGVDb21wb25lbnQgZnJvbSBcIi4uLy4uL092ZXJyaWRlQ29tcG9uZW50XCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzc30gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuLyoqXHJcbiAqIEBBdXRob3IgWElBTy1MSS1QSU5cclxuICogQERlc2NyaXB0aW9uICjmir3osaHpoZ4pTUVOVeS4u+mggemdoizmiYDmnInmjInpiJXkuovku7ZcclxuICogQERhdGUgMjAyMS0wNS0yNiDkuIrljYggMTU6NTlcclxuICogQFZlcnNpb24gMS4xXHJcbiAqL1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBBTWVudUJ1dHRvbkV2ZW50IGV4dGVuZHMgT3ZlcnJpZGVDb21wb25lbnQge1xyXG4gICAgLyoqXHJcbiAgICAgKiDoqILplrHoh6rli5Xkuovku7ZcclxuICAgICAqIEB0eXBlIHtVc2VyVG90YWxCZXRDaGFuZ2VPYnNlcnZlcn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdXNlclRvdGFsQmV0Q2hhbmdlT2JzZXJ2ZXI6IFVzZXJUb3RhbEJldENoYW5nZU9ic2VydmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiDoqILplrHnlKjmiLbmm7TmlLnmirzms6jmmYLkuovku7ZcclxuICAgICAqIEB0eXBlIHtBdXRvU3RhdGVDaGFuZ2VPYnNlcnZlcn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgYXV0b1N0YXRlQ2hhbmdlT2JzZXJ2ZXI6IEF1dG9TdGF0ZUNoYW5nZU9ic2VydmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiDoh6roqILnvqnliJ3lp4vni4DmhYtcclxuICAgICAqIEBwcm90ZWN0ZWRcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IG9uQ3JlYXRlKCk7XHJcbiAgICAvKipcclxuICAgICAqIOiDjOaZr+mfs+aoguaMiemIleS6i+S7tlxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBpc09uTXV0ZSA6IOaYr+WQpumdnOmfs1xyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgbXVzaWNFdmVudChpc09uTXV0ZTogYm9vbGVhbik7XHJcbiAgICAvKipcclxuICAgICAqIOaViOaenOmfs+aoguaMiemIleS6i+S7tlxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBpc09uTXV0ZSA6IOaYr+WQpumdnOmfs1xyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgZWZmZWN0RXZlbnQoaXNPbk11dGU6IGJvb2xlYW4pO1xyXG4gICAgLyoqXHJcbiAgICAgKiDoh6rli5XmjInpiJXkuovku7ZcclxuICAgICAqIEBwYXJhbSB7QXV0b1R5cGV9IGJlZm9yZUF1dG9Db3VudCA6IOm7nuaTiuWJjeeahOaMiemIlXR5cGVcclxuICAgICAqIEBwYXJhbSB7QXV0b1R5cGV9IGFmdGVyQXV0b0NvdW50IDog5pu05paw55qE5oyJ6YiVdHlwZVxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgYXV0b0V2ZW50KGJlZm9yZUF1dG9Db3VudDogQXV0b1R5cGUsIGFmdGVyQXV0b0NvdW50OiBBdXRvVHlwZSk7XHJcbiAgICAvKipcclxuICAgICAqIOWJjeW+gOioreWumumggeaMiemIleS6i+S7tlxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3Qgc2V0dGluZ1BhZ2VUb3VjaEV2ZW50KCk7XHJcbiAgICAvKipcclxuICAgICAqIOWJjeW+gOe0gOmMhOmggeaMiemIleS6i+S7tlxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgcmVjb3JkUGFnZVRvdWNoRXZlbnQoKTtcclxuICAgIC8qKlxyXG4gICAgICog5YmN5b6A6Kqq5piO6aCB5oyJ6YiV5LqL5Lu2XHJcbiAgICAgKiBAcHJvdGVjdGVkXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBkZXNjcmlwdGlvblBhZ2VFdmVudCgpO1xyXG4gICAgLyoqXHJcbiAgICAgKiDmm7Tmj5vmirzms6jkuovku7ZcclxuICAgICAqIEBwYXJhbSBiZWZvcmVJbmRleFxyXG4gICAgICogQHBhcmFtIGFmdGVySW5kZXhcclxuICAgICAqIEBwcm90ZWN0ZWRcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IHRvdGFsQmV0Q2hhbmdlRXZlbnQoYmVmb3JlSW5kZXgsIGFmdGVySW5kZXgpXHJcbiAgICAvKipcclxuICAgICAqIOi/lOWbnumBiuaIsumggemdouaMiemIleS6i+S7tlxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgZ29CYWNrVG91Y2hFdmVudCgpO1xyXG4gICAgLyoqXHJcbiAgICAgKiDov5Tlm57pppbpoIHmjInpiJXnm6Pogb3kuovku7ZcclxuICAgICAqIEBwcm90ZWN0ZWRcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGdvSG9tZVRvdWNoRXZlbnQoKTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgdGFibGVJbmZvOklUYWJsZUluZm9Nb2RlbDtcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMudGFibGVJbmZvID1cclxuICAgICAgICAgICAgV2ViUmVzcG9uc2VNYW5hZ2VyXHJcbiAgICAgICAgICAgICAgICAuaW5zdGFuY2U8SVRhYmxlSW5mb01vZGVsPigpXHJcbiAgICAgICAgICAgICAgICAuZ2V0UmVzdWx0KFJlc3BvbnNlVHlwZS5UQUJMRV9JTkZPKTtcclxuXHJcbiAgICAgICAgdGhpcy5vbkNyZWF0ZSgpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6Ieq6KiC576p5Yid5aeL54uA5oWLXHJcblxyXG4gICAgICAgIEF1dG9TdGF0ZUNoYW5nZU5vdGlmaWNhdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+iogumWseiHquWLleS6i+S7tlxyXG4gICAgICAgICAgICAuaW5zdGFuY2Uuc3Vic2NyaWJlKHRoaXMuZ2V0QXV0b1N0YXRlQ2hhbmdlT2JzZXJ2ZXIoKSwgdHJ1ZSk7XHJcbiAgICAgICAgVXNlclRvdGFsQmV0Q2hhbmdlTm90aWZpY2F0aW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6KiC6Zax55So5oi25pu05pS55oq85rOo5pmC5LqL5Lu2XHJcbiAgICAgICAgICAgIC5pbnN0YW5jZS5zdWJzY3JpYmUodGhpcy5nZXRVc2VyVG90YWxCZXRDaGFuZ2VPYnNlcnZlcigpLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiHquWLleabtOaWsOeVtuWJjeaYr+WQpumdnOmfs+iDjOaZr+mfs+aoglxyXG4gICAgICog5rOo5oSPOnVwZGF0ZemdnOmfs+eLgOaFi+acg+S+neeFp2NvbmZpZ+WIneWni+ioreWumuWBmuabtOaWsFxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgbXVzaWNFdmVudExpc3RlbmVyKCkge1xyXG4gICAgICAgIGxldCBpc09uTXV0ZSA9IEF1ZGlvTWFuYWdlci5pbnN0YW5jZS51cGRhdGVNdXNpY09uTXV0ZSgpO1xyXG4gICAgICAgIHRoaXMubXVzaWNFdmVudChpc09uTXV0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDoh6rli5Xmm7TmlrDnlbbliY3mmK/lkKbpnZzpn7PmlYjmnpzpn7PmqIJcclxuICAgICAqIOazqOaEjzp1cGRhdGXpnZzpn7Pni4DmhYvmnIPkvp3nhadjb25maWfliJ3lp4voqK3lrprlgZrmm7TmlrBcclxuICAgICAqIEBwcm90ZWN0ZWRcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGVmZmVjdEV2ZW50TGlzdGVuZXIoKSB7XHJcbiAgICAgICAgbGV0IGlzT25NdXRlID0gQXVkaW9NYW5hZ2VyLmluc3RhbmNlLnVwZGF0ZUVmZmVjdE9uTXV0ZSgpO1xyXG4gICAgICAgIHRoaXMuZWZmZWN0RXZlbnQoaXNPbk11dGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog55So5oi26bue5pOK5oyJ6YiV5aKe5Yqg5oq85rOo6bue5pW45LqL5Lu2XHJcbiAgICAgKiDms6jmhI8655W255So5oi25aKe5Yqg55qE5oq85rOo6bue5pW46LaF6YGO5pyA5aSn5YC8LOWwh+acg+iHquWLlei3s+WbnuacgOWwj+WAvFxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgYmV0VXBFdmVudExpc3RlbmVyKCkge1xyXG4gICAgICAgIGxldCBiZWZvcmVCZXRJbmRleCA9IFNsb3RHYW1lTWFuYWdlci5pbnN0YW5jZS51c2VyQmV0UG9pbnQuTGluZUJldDtcclxuICAgICAgICBsZXQgYWZ0ZXJCZXRJbmRleCA9IGJlZm9yZUJldEluZGV4KzE7XHJcbiAgICAgICAgaWYgKGFmdGVyQmV0SW5kZXggPiB0aGlzLnRhYmxlSW5mby5MaW5lQmV0Lmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgYWZ0ZXJCZXRJbmRleCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFVzZXJUb3RhbEJldENoYW5nZU5vdGlmaWNhdGlvbi5pbnN0YW5jZS5ub3RpZnkoYmVmb3JlQmV0SW5kZXgsIGFmdGVyQmV0SW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog55So5oi26bue5pOK5oyJ6YiV5aKe5Yqg5oq85rOo6bue5pW45LqL5Lu2XHJcbiAgICAgKiDms6jmhI8655W255So5oi25aKe5Yqg55qE5oq85rOo6bue5pW46LaF6YGO5pyA5bCP5YC8LOWwh+acg+iHquWLlei3s+WbnuacgOWkp+WAvFxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgYmV0RG93bkV2ZW50TGlzdGVuZXIoKSB7XHJcbiAgICAgICAgbGV0IGJlZm9yZUJldEluZGV4ID0gU2xvdEdhbWVNYW5hZ2VyLmluc3RhbmNlLnVzZXJCZXRQb2ludC5MaW5lQmV0O1xyXG4gICAgICAgIGxldCBhZnRlckJldEluZGV4ID0gYmVmb3JlQmV0SW5kZXgtMTtcclxuICAgICAgICBpZiAoYWZ0ZXJCZXRJbmRleCA8IDApIHtcclxuICAgICAgICAgICAgYWZ0ZXJCZXRJbmRleCA9IHRoaXMudGFibGVJbmZvLkxpbmVCZXQubGVuZ3RoIC0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgVXNlclRvdGFsQmV0Q2hhbmdlTm90aWZpY2F0aW9uLmluc3RhbmNlLm5vdGlmeShiZWZvcmVCZXRJbmRleCwgYWZ0ZXJCZXRJbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnlbbliY3nuL3mirzms6jkuovku7bmjqjmkq3mjqXmlLbogIVcclxuICAgICAqIOazqOaEjzrlpoLmnpzopoHop6PpmaTmjqjmkq0s5bCH54Sh5rOV5Zyo55uj6IG95o6o5rOi5LqL5Lu25rS+55m8XHJcbiAgICAgKiBAcmV0dXJucyB7VXNlclRvdGFsQmV0Q2hhbmdlT2JzZXJ2ZXJ9XHJcbiAgICAgKiBAcHJvdGVjdGVkXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBnZXRVc2VyVG90YWxCZXRDaGFuZ2VPYnNlcnZlcigpOiBVc2VyVG90YWxCZXRDaGFuZ2VPYnNlcnZlciB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnVzZXJUb3RhbEJldENoYW5nZU9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXNlclRvdGFsQmV0Q2hhbmdlT2JzZXJ2ZXIgPSBuZXcgVXNlclRvdGFsQmV0Q2hhbmdlT2JzZXJ2ZXIoKGJlZm9yZUluZGV4LCBhZnRlckluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvdGFsQmV0Q2hhbmdlRXZlbnQoYmVmb3JlSW5kZXgsIGFmdGVySW5kZXgpO1xyXG4gICAgICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudXNlclRvdGFsQmV0Q2hhbmdlT2JzZXJ2ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnlbbliY3oh6rli5Xni4DmhYvkuovku7bmjqjmkq3mjqXmlLbogIVcclxuICAgICAqIOazqOaEjzrlpoLmnpzopoHop6PpmaTmjqjmkq0s5bCH54Sh5rOV5Zyo55uj6IG95o6o5rOi5LqL5Lu25rS+55m8XHJcbiAgICAgKiBAcmV0dXJucyB7VXNlclRvdGFsQmV0Q2hhbmdlT2JzZXJ2ZXJ9XHJcbiAgICAgKiBAcHJvdGVjdGVkXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBnZXRBdXRvU3RhdGVDaGFuZ2VPYnNlcnZlcigpOiBBdXRvU3RhdGVDaGFuZ2VPYnNlcnZlciB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmF1dG9TdGF0ZUNoYW5nZU9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0b1N0YXRlQ2hhbmdlT2JzZXJ2ZXIgPSBuZXcgQXV0b1N0YXRlQ2hhbmdlT2JzZXJ2ZXIoKGlzQXV0b21hdGljU3RhdGUsIGJlZm9yZUF1dG9Db3VudCwgYWZ0ZXJBdXRvQ291bnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0b0V2ZW50KGJlZm9yZUF1dG9Db3VudCwgYWZ0ZXJBdXRvQ291bnQpO1xyXG4gICAgICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0b1N0YXRlQ2hhbmdlT2JzZXJ2ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDoh6rli5XmjInpiJXpu57mk4rkuovku7ZcclxuICAgICAqIEBwYXJhbSBldmVudFxyXG4gICAgICogQHBhcmFtIHtBdXRvVHlwZX0gY2FsbGJhY2tUeXBlIDog5ZOq6aGG6aGe5Z6L55qE5oyJ6YiV6bue5pOKXHJcbiAgICAgKiBAcHJvdGVjdGVkXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBhdXRvQnV0dG9uRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2tUeXBlOiBBdXRvVHlwZSkge1xyXG4gICAgICAgIGxldCBiZWZvcmVBdXRvVHlwZSA9IFNsb3RHYW1lTWFuYWdlci5pbnN0YW5jZS5hdXRvVHlwZTtcclxuICAgICAgICBBdXRvU3RhdGVDaGFuZ2VOb3RpZmljYXRpb25cclxuICAgICAgICAgICAgLmluc3RhbmNlLm5vdGlmeSh0cnVlLCBiZWZvcmVBdXRvVHlwZSwgY2FsbGJhY2tUeXBlKTtcclxuICAgIH1cclxufSJdfQ==