
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/MainGameScript/Controller/WinLevelController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2d662iuxZRJeY6jFFp8SCcR', 'WinLevelController');
// script/MainGameScript/Controller/WinLevelController.ts

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
var GameState_1 = require("../../Framework/Process/Enum/GameState");
var UserMoneyChangeNotification_1 = require("../../Framework/Process/GameNotification/UserMoneyChangeNotification");
var UserWinPointStateNotification_1 = require("../../Framework/Process/GameNotification/UserWinPointStateNotification");
var SlotGameManager_1 = require("../../Framework/Process/SlotGameManager");
var ResponseType_1 = require("../../Framework/WebResponse/Enum/ResponseType");
var WebResponseManager_1 = require("../../Framework/WebResponse/WebResponseManager");
var LoadingDialogController_1 = require("./LoadingDialogController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var WinLevelController = /** @class */ (function (_super) {
    __extends(WinLevelController, _super);
    function WinLevelController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.winPointLabel = null;
        _this.winSpineBorder = null;
        _this.winSpine = null;
        _this.winLevel = [];
        return _this;
    }
    WinLevelController_1 = WinLevelController;
    WinLevelController.prototype.onLoad = function () {
        WinLevelController_1.instance = this;
        this.normalResult = //拿取該遊戲一般狀態model
            WebResponseManager_1.WebResponseManager
                .instance()
                .getResult(ResponseType_1.ResponseType.NORMAL);
        this.freeResult = //拿取該遊戲免費狀態model
            WebResponseManager_1.WebResponseManager
                .instance()
                .getResult(ResponseType_1.ResponseType.FREE);
        this.tableInfo = //拿取該遊戲基本資料model
            WebResponseManager_1.WebResponseManager
                .instance()
                .getResult(ResponseType_1.ResponseType.TABLE_INFO);
        this.node.active = false; //初始押注prefab組件為隱藏
        this.winPointLabel.string = ""; //初始押注分數 label 為空
        this.winLevelRange = this.tableInfo.LevelWinPoint; //遊戲前三個等級的押注倍率
        this.winLevelRange.push(60, 70); //額外新增押注倍率
        this.totalPoint = new Array();
        this.spineData = {
            FREE_TITLE_OPEN: "0Animate_FreespinsComeout",
            FREE_TITLE_LOOP: "0Animate_FreespinsRoop",
            BIG_WIN_OPEN: "1Animate_Comeout",
            BIG_WIN_LOOP: "2Animate_BigWin",
            SUPER_WIN_OPEN: "3Animate_SuperComeout",
            SUPER_WIN_LOOP: "4Animate_SuperWin",
            MEGA_WIN_OPEN: "5Animate_MegaComeout",
            MEGA_WIN_LOOP: "6Animate_MegaWin",
            WIN_BORDER_OPEN: "1Animate_ComeoutBG",
            WIN_BORDER_LOOP: "2~6Animate_BG",
        };
    };
    WinLevelController.prototype.initializeSpine = function () {
        this.resolve = null;
        //當前獲獎分數
        this.userNowBet = this.tableInfo.LineTotalBet[SlotGameManager_1.default.instance.userBetPoint.LineBet];
        this.startNum = 0; //當前開始跑分的初始分數
        this.pointSplitIndex = 0; //當前尋訪第幾個Level
        this.isNumberRun = false; //當前是否能開始跑分
        this.winPointLabel.string = ""; //當前顯示跑到幾分
        this.node.active = true; //打開整個node
        this.totalPoint.length = 0; //初始拆分的數字
        this.levelWinPoint = 0; //當前跑到第幾個拆分的數字儲存用
        this.showBigWin(); //開啟Big Win
    };
    WinLevelController.prototype.totalPointSplit = function (point) {
        var totalPoint = point;
        var numberSplit = [];
        var count = 0;
        var beforePoint = 0;
        var afterPoint = 0;
        while (true) {
            if (count == 0) {
                numberSplit.push(this.userNowBet * this.winLevelRange[count]);
            }
            if (count == this.winLevelRange.length - 1) {
                totalPoint - afterPoint > afterPoint ?
                    numberSplit.push(afterPoint - beforePoint, totalPoint - afterPoint) : numberSplit.push(totalPoint - beforePoint);
                break;
            }
            if (count > 0) {
                numberSplit.push(afterPoint - beforePoint);
            }
            if (totalPoint - afterPoint < 0) {
                break;
            }
            if (count < this.winLevelRange.length) {
                count++;
                beforePoint = this.userNowBet * this.winLevelRange[count - 1];
                afterPoint = this.userNowBet * this.winLevelRange[count];
            }
        }
        this.totalPoint = numberSplit;
        cc.log(this.totalPoint);
    };
    WinLevelController.prototype.runTotalWinPoint = function () {
        this.isNumberRun = true;
    };
    WinLevelController.prototype.showWinAboveState = function (point, resolve) {
        var _this = this;
        this.initializeSpine();
        this.totalPointSplit(point);
        this.point = point;
        this.scheduleOnce(function () {
            _this.runTotalWinPoint();
            _this.node.once(cc.Node.EventType.TOUCH_END, _this.runPointTouchEnd, _this);
            cc.systemEvent.once(cc.SystemEvent.EventType.KEY_DOWN, _this.keyboardEvent, _this);
        }, 0.5);
        this.resolve = resolve;
    };
    WinLevelController.prototype.keyboardEvent = function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.space:
                this.runPointTouchEnd();
                break;
        }
    };
    /**
     * 當點擊畫面時,直接顯示最終答案
     * @private
     */
    WinLevelController.prototype.runPointTouchEnd = function () {
        this.pointSplitIndex = this.totalPoint.length - 1;
        this.startNum = this.point;
    };
    /**
     * 當前每個獲獎等級需跑的時間
     * @param {number} pointSplitIndex
     * @return {number}
     * @private
     */
    WinLevelController.prototype.checkTimer = function (pointSplitIndex) {
        var time;
        switch (pointSplitIndex) {
            case 0:
                time = 4;
                break;
            case 1:
                time = 3;
                break;
            case 2:
                time = 3;
                break;
            case 3:
                time = 2;
                break;
            case 4:
                time = 2;
                break;
            case 5:
                time = 2;
                break;
            default:
                cc.log("class WinLevelController.timerSetting() 有錯誤:", pointSplitIndex);
        }
        return time;
    };
    WinLevelController.prototype.showBigWin = function () {
        this.isBigWinOpen = true;
        this.winSpine.setAnimation(0, this.spineData.BIG_WIN_OPEN, false);
        this.winSpine.addAnimation(0, this.spineData.BIG_WIN_LOOP, true);
        this.winSpineBorder.setAnimation(0, this.spineData.WIN_BORDER_OPEN, false);
        this.winSpineBorder.addAnimation(0, this.spineData.WIN_BORDER_LOOP, true);
        this.winLevel[1].active = false;
        this.winLevel[2].active = false;
    };
    WinLevelController.prototype.showSuperWin = function () {
        this.isBigWinOpen = false;
        this.isSuperWinOpen = true;
        this.winSpine.setAnimation(0, this.spineData.SUPER_WIN_OPEN, false);
        this.winSpine.addAnimation(0, this.spineData.SUPER_WIN_LOOP, true);
        this.winLevel[1].active = true;
    };
    WinLevelController.prototype.showMegaWin = function () {
        this.isBigWinOpen = false;
        this.isSuperWinOpen = false;
        this.isMegaWinOpen = true;
        this.winSpine.setAnimation(0, this.spineData.MEGA_WIN_OPEN, false);
        this.winSpine.addAnimation(0, this.spineData.MEGA_WIN_LOOP, true);
        this.winLevel[2].active = true;
    };
    /**
     * 金額跑完時,發送更新user金錢欄位,與贏分欄位
     * @param point
     */
    WinLevelController.prototype.userMoneyEventEmit = function (point) {
        if (SlotGameManager_1.default.instance.gameState === GameState_1.GameState.PLAYING) {
            var level = this.freeResult.BaseLevelWin;
            UserWinPointStateNotification_1.default.instance.notify(point, level);
        }
        else if (SlotGameManager_1.default.instance.gameState == GameState_1.GameState.FREEING) {
            var point_1 = this.freeResult.FreeSpinWin;
            var level = this.freeResult.BaseLevelWin;
            UserWinPointStateNotification_1.default.instance.notify(point_1, level);
        }
        if (SlotGameManager_1.default.instance.gameState != GameState_1.GameState.FREEING) {
            UserMoneyChangeNotification_1.default.instance.notify(this.normalResult.UserPointAfter);
        }
    };
    /**
     * 分數跑完時
     * @param {number} totalPoint
     */
    WinLevelController.prototype.updateWinPointEnd = function (totalPoint) {
        var _this = this;
        this.winPointLabel.string = new Intl.NumberFormat().format(totalPoint);
        this.userMoneyEventEmit(totalPoint);
        this.isNumberRun = false;
        //時間到後初始所有參數
        this.scheduleOnce(function () {
            _this.winPointLabel.string = "";
            _this.isBigWinOpen = false;
            _this.isMegaWinOpen = false;
            _this.isSuperWinOpen = false;
            _this.node.active = false;
            if (SlotGameManager_1.default.instance.gameState == GameState_1.GameState.FREEING) {
                AudioManager_1.default.instance.musicPlay("FBS");
            }
            else {
                AudioManager_1.default.instance.musicPlay("NBS");
            }
            _this.resolve();
        }, 5);
    };
    WinLevelController.prototype.update = function (dt) {
        if (this.isNumberRun) {
            var totalPoint = this.point;
            var time = this.checkTimer(this.pointSplitIndex);
            if (this.pointSplitIndex == 2 && !this.isSuperWinOpen) {
                this.showSuperWin();
            }
            if (this.pointSplitIndex >= 3 && !this.isMegaWinOpen) {
                this.showMegaWin();
            }
            //當分數到達時呼叫
            if (this.startNum >= totalPoint) {
                this.updateWinPointEnd(totalPoint);
                return;
            }
            var numberFormat = new Intl.NumberFormat().format(Math.floor(this.startNum * 10) / 10);
            if (numberFormat.indexOf(".") == -1) {
                numberFormat = numberFormat + ".0";
            }
            this.winPointLabel.string = numberFormat;
            this.startNum += this.totalPoint[this.pointSplitIndex] / time * dt;
            //當前跑分要到達的level數字
            if (this.pointSplitIndex == 0 && this.levelWinPoint != 0) {
                this.levelWinPoint = this.userNowBet * this.totalPoint[this.pointSplitIndex];
            }
            if (this.startNum >= this.levelWinPoint) {
                if (this.pointSplitIndex == this.totalPoint.length - 1) {
                    return;
                }
                this.pointSplitIndex++;
                this.levelWinPoint += this.totalPoint[this.pointSplitIndex];
            }
        }
    };
    var WinLevelController_1, _b, _c, _d;
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_b = typeof cc !== "undefined" && cc.Label) === "function" ? _b : Object)
    ], WinLevelController.prototype, "winPointLabel", void 0);
    __decorate([
        property(sp.Skeleton),
        __metadata("design:type", typeof (_c = typeof sp !== "undefined" && sp.Skeleton) === "function" ? _c : Object)
    ], WinLevelController.prototype, "winSpineBorder", void 0);
    __decorate([
        property(sp.Skeleton),
        __metadata("design:type", typeof (_d = typeof sp !== "undefined" && sp.Skeleton) === "function" ? _d : Object)
    ], WinLevelController.prototype, "winSpine", void 0);
    __decorate([
        property(cc.Node),
        __metadata("design:type", Array)
    ], WinLevelController.prototype, "winLevel", void 0);
    __decorate([
        AudioManager_1.Effect("runPoint"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], WinLevelController.prototype, "runTotalWinPoint", null);
    __decorate([
        LoadingDialogController_1.Loading("prefab"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Function]),
        __metadata("design:returntype", void 0)
    ], WinLevelController.prototype, "showWinAboveState", null);
    __decorate([
        AudioManager_1.Music("bigWin3"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], WinLevelController.prototype, "showBigWin", null);
    __decorate([
        AudioManager_1.Music("bigWinEnd"),
        AudioManager_1.EffectStop("runPoint"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], WinLevelController.prototype, "updateWinPointEnd", null);
    WinLevelController = WinLevelController_1 = __decorate([
        ccclass
    ], WinLevelController);
    return WinLevelController;
}(cc.Component));
exports.default = WinLevelController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxNYWluR2FtZVNjcmlwdFxcQ29udHJvbGxlclxcV2luTGV2ZWxDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1FQUEwRjtBQUMxRixvRUFBZ0U7QUFDaEUsb0hBQStHO0FBQy9HLHdIQUFtSDtBQUNuSCwyRUFBcUU7QUFDckUsOEVBQTJFO0FBSTNFLHFGQUFpRjtBQUNqRixxRUFBa0Q7QUFFNUMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBZ0Qsc0NBQVk7SUFBNUQ7UUFBQSxxRUFtU0M7UUFoU1csbUJBQWEsR0FBYSxJQUFJLENBQUM7UUFHL0Isb0JBQWMsR0FBZ0IsSUFBSSxDQUFDO1FBR25DLGNBQVEsR0FBZ0IsSUFBSSxDQUFDO1FBRzdCLGNBQVEsR0FBYyxFQUFFLENBQUM7O0lBdVJyQyxDQUFDOzJCQW5Tb0Isa0JBQWtCO0lBZ0N6QixtQ0FBTSxHQUFoQjtRQUNJLG9CQUFrQixDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDbkMsSUFBSSxDQUFDLFlBQVksR0FBOEQsZ0JBQWdCO1lBQzNGLHVDQUFrQjtpQkFDYixRQUFRLEVBQWdCO2lCQUN4QixTQUFTLENBQUMsMkJBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsVUFBVSxHQUFnRSxnQkFBZ0I7WUFDM0YsdUNBQWtCO2lCQUNiLFFBQVEsRUFBb0I7aUJBQzVCLFNBQVMsQ0FBQywyQkFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxTQUFTLEdBQWtFLGdCQUFnQjtZQUM1Rix1Q0FBa0I7aUJBQ2IsUUFBUSxFQUFtQjtpQkFDM0IsU0FBUyxDQUFDLDJCQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLElBQUksQ0FB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aW1wb3J0IEF1ZGlvTWFuYWdlciwge0VmZmVjdCwgTXVzaWMsIEVmZmVjdFN0b3B9IGZyb20gJy4uLy4uL0ZyYW1ld29yay9BdWRpby9BdWRpb01hbmFnZXInXHJcbmltcG9ydCB7R2FtZVN0YXRlfSBmcm9tICcuLi8uLi9GcmFtZXdvcmsvUHJvY2Vzcy9FbnVtL0dhbWVTdGF0ZSdcclxuaW1wb3J0IFVzZXJNb25leUNoYW5nZU5vdGlmaWNhdGlvbiBmcm9tIFwiLi4vLi4vRnJhbWV3b3JrL1Byb2Nlc3MvR2FtZU5vdGlmaWNhdGlvbi9Vc2VyTW9uZXlDaGFuZ2VOb3RpZmljYXRpb25cIjtcclxuaW1wb3J0IFVzZXJXaW5Qb2ludFN0YXRlTm90aWZpY2F0aW9uIGZyb20gXCIuLi8uLi9GcmFtZXdvcmsvUHJvY2Vzcy9HYW1lTm90aWZpY2F0aW9uL1VzZXJXaW5Qb2ludFN0YXRlTm90aWZpY2F0aW9uXCI7XHJcbmltcG9ydCBTbG90R2FtZU1hbmFnZXIgZnJvbSAnLi4vLi4vRnJhbWV3b3JrL1Byb2Nlc3MvU2xvdEdhbWVNYW5hZ2VyJ1xyXG5pbXBvcnQge1Jlc3BvbnNlVHlwZX0gZnJvbSBcIi4uLy4uL0ZyYW1ld29yay9XZWJSZXNwb25zZS9FbnVtL1Jlc3BvbnNlVHlwZVwiO1xyXG5pbXBvcnQgTm9MaW5lRnJlZVJlc3VsdCBmcm9tIFwiLi4vLi4vRnJhbWV3b3JrL1dlYlJlc3BvbnNlL1NldmVyRGF0YU1vZGVsL0ZyZWVSZXN1bHQvTm9MaW5lRnJlZVJlc3VsdFwiO1xyXG5pbXBvcnQgTm9MaW5lUmVzdWx0IGZyb20gXCIuLi8uLi9GcmFtZXdvcmsvV2ViUmVzcG9uc2UvU2V2ZXJEYXRhTW9kZWwvTm9ybWFsUmVzdWx0L05vTGluZVJlc3VsdFwiO1xyXG5pbXBvcnQgTm9MaW5lVGFibGVJbmZvIGZyb20gXCIuLi8uLi9GcmFtZXdvcmsvV2ViUmVzcG9uc2UvU2V2ZXJEYXRhTW9kZWwvVGFibGVJbmZvL05vTGluZVRhYmxlSW5mb1wiO1xyXG5pbXBvcnQge1dlYlJlc3BvbnNlTWFuYWdlcn0gZnJvbSAnLi4vLi4vRnJhbWV3b3JrL1dlYlJlc3BvbnNlL1dlYlJlc3BvbnNlTWFuYWdlcidcclxuaW1wb3J0IHtMb2FkaW5nfSBmcm9tIFwiLi9Mb2FkaW5nRGlhbG9nQ29udHJvbGxlclwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaW5MZXZlbENvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHByaXZhdGUgd2luUG9pbnRMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcclxuICAgIHByaXZhdGUgd2luU3BpbmVCb3JkZXI6IHNwLlNrZWxldG9uID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXHJcbiAgICBwcml2YXRlIHdpblNwaW5lOiBzcC5Ta2VsZXRvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIHdpbkxldmVsOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIHNwaW5lRGF0YTogeyBNRUdBX1dJTl9PUEVOOiBzdHJpbmc7IEJJR19XSU5fT1BFTjogc3RyaW5nOyBTVVBFUl9XSU5fT1BFTjogc3RyaW5nOyBXSU5fQk9SREVSX09QRU46IHN0cmluZzsgRlJFRV9USVRMRV9PUEVOOiBzdHJpbmc7IFNVUEVSX1dJTl9MT09QOiBzdHJpbmc7IFdJTl9CT1JERVJfTE9PUDogc3RyaW5nOyBCSUdfV0lOX0xPT1A6IHN0cmluZzsgTUVHQV9XSU5fTE9PUDogc3RyaW5nOyBGUkVFX1RJVExFX0xPT1A6IHN0cmluZyB9XHJcbiAgICBwcml2YXRlIHdpbkxldmVsUmFuZ2U6IEFycmF5PG51bWJlcj47XHJcbiAgICBwcml2YXRlIHRvdGFsUG9pbnQ6IEFycmF5PG51bWJlcj47XHJcbiAgICBwcml2YXRlIGlzTnVtYmVyUnVuOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBzdGFydE51bTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBwb2ludFNwbGl0SW5kZXg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgcG9pbnQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgdXNlck5vd0JldDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBpc0JpZ1dpbk9wZW46IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIGlzU3VwZXJXaW5PcGVuOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBpc01lZ2FXaW5PcGVuOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBsZXZlbFdpblBvaW50OiBudW1iZXJcclxuICAgIHByaXZhdGUgbm9ybWFsUmVzdWx0OiBOb0xpbmVSZXN1bHQ7XHJcbiAgICBwcml2YXRlIGZyZWVSZXN1bHQ6IE5vTGluZUZyZWVSZXN1bHQ7XHJcbiAgICBwcml2YXRlIHRhYmxlSW5mbzogTm9MaW5lVGFibGVJbmZvO1xyXG4gICAgcHJpdmF0ZSByZXNvbHZlOiAodmFsdWU6IChQcm9taXNlTGlrZTx2b2lkPiB8IHZvaWQpKSA9PiB2b2lkO1xyXG4gICAgcHVibGljIHN0YXRpYyBpbnN0YW5jZTogV2luTGV2ZWxDb250cm9sbGVyO1xyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKSB7XHJcbiAgICAgICAgV2luTGV2ZWxDb250cm9sbGVyLmluc3RhbmNlID0gdGhpcztcclxuICAgICAgICB0aGlzLm5vcm1hbFJlc3VsdCA9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/mi7/lj5boqbLpgYrmiLLkuIDoiKzni4DmhYttb2RlbFxyXG4gICAgICAgICAgICBXZWJSZXNwb25zZU1hbmFnZXJcclxuICAgICAgICAgICAgICAgIC5pbnN0YW5jZTxOb0xpbmVSZXN1bHQ+KClcclxuICAgICAgICAgICAgICAgIC5nZXRSZXN1bHQoUmVzcG9uc2VUeXBlLk5PUk1BTCk7XHJcbiAgICAgICAgdGhpcy5mcmVlUmVzdWx0ID0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5ou/5Y+W6Kmy6YGK5oiy5YWN6LK754uA5oWLbW9kZWxcclxuICAgICAgICAgICAgV2ViUmVzcG9uc2VNYW5hZ2VyXHJcbiAgICAgICAgICAgICAgICAuaW5zdGFuY2U8Tm9MaW5lRnJlZVJlc3VsdD4oKVxyXG4gICAgICAgICAgICAgICAgLmdldFJlc3VsdChSZXNwb25zZVR5cGUuRlJFRSk7XHJcbiAgICAgICAgdGhpcy50YWJsZUluZm8gPSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+aLv+WPluipsumBiuaIsuWfuuacrOizh+aWmW1vZGVsXHJcbiAgICAgICAgICAgIFdlYlJlc3BvbnNlTWFuYWdlclxyXG4gICAgICAgICAgICAgICAgLmluc3RhbmNlPE5vTGluZVRhYmxlSW5mbz4oKVxyXG4gICAgICAgICAgICAgICAgLmdldFJlc3VsdChSZXNwb25zZVR5cGUuVEFCTEVfSU5GTyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WIneWni+aKvOazqHByZWZhYue1hOS7tueCuumaseiXj1xyXG4gICAgICAgIHRoaXMud2luUG9pbnRMYWJlbC5zdHJpbmcgPSBcIlwiOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WIneWni+aKvOazqOWIhuaVuCBsYWJlbCDngrrnqbpcclxuICAgICAgICB0aGlzLndpbkxldmVsUmFuZ2UgPSB0aGlzLnRhYmxlSW5mby5MZXZlbFdpblBvaW50OyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6YGK5oiy5YmN5LiJ5YCL562J57Sa55qE5oq85rOo5YCN546HXHJcbiAgICAgICAgdGhpcy53aW5MZXZlbFJhbmdlLnB1c2goNjAsIDcwKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+mhjeWkluaWsOWinuaKvOazqOWAjeeOh1xyXG4gICAgICAgIHRoaXMudG90YWxQb2ludCA9IG5ldyBBcnJheTxudW1iZXI+KCk7XHJcbiAgICAgICAgdGhpcy5zcGluZURhdGEgPSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+i0j+WIhixzcGluZeWLleeVq1xyXG4gICAgICAgICAgICBGUkVFX1RJVExFX09QRU46IFwiMEFuaW1hdGVfRnJlZXNwaW5zQ29tZW91dFwiLFxyXG4gICAgICAgICAgICBGUkVFX1RJVExFX0xPT1A6IFwiMEFuaW1hdGVfRnJlZXNwaW5zUm9vcFwiLFxyXG4gICAgICAgICAgICBCSUdfV0lOX09QRU46IFwiMUFuaW1hdGVfQ29tZW91dFwiLFxyXG4gICAgICAgICAgICBCSUdfV0lOX0xPT1A6IFwiMkFuaW1hdGVfQmlnV2luXCIsXHJcbiAgICAgICAgICAgIFNVUEVSX1dJTl9PUEVOOiBcIjNBbmltYXRlX1N1cGVyQ29tZW91dFwiLFxyXG4gICAgICAgICAgICBTVVBFUl9XSU5fTE9PUDogXCI0QW5pbWF0ZV9TdXBlcldpblwiLFxyXG4gICAgICAgICAgICBNRUdBX1dJTl9PUEVOOiBcIjVBbmltYXRlX01lZ2FDb21lb3V0XCIsXHJcbiAgICAgICAgICAgIE1FR0FfV0lOX0xPT1A6IFwiNkFuaW1hdGVfTWVnYVdpblwiLFxyXG4gICAgICAgICAgICBXSU5fQk9SREVSX09QRU46IFwiMUFuaW1hdGVfQ29tZW91dEJHXCIsXHJcbiAgICAgICAgICAgIFdJTl9CT1JERVJfTE9PUDogXCIyfjZBbmltYXRlX0JHXCIsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluaXRpYWxpemVTcGluZSgpIHtcclxuICAgICAgICB0aGlzLnJlc29sdmUgPSBudWxsO1xyXG4gICAgICAgIC8v55W25YmN542y542O5YiG5pW4XHJcbiAgICAgICAgdGhpcy51c2VyTm93QmV0ID0gdGhpcy50YWJsZUluZm8uTGluZVRvdGFsQmV0W1Nsb3RHYW1lTWFuYWdlci5pbnN0YW5jZS51c2VyQmV0UG9pbnQuTGluZUJldF07XHJcbiAgICAgICAgdGhpcy5zdGFydE51bSA9IDA7ICAgICAgICAgICAgICAgICAgICAgIC8v55W25YmN6ZaL5aeL6LeR5YiG55qE5Yid5aeL5YiG5pW4XHJcbiAgICAgICAgdGhpcy5wb2ludFNwbGl0SW5kZXggPSAwOyAgICAgICAgICAgICAgIC8v55W25YmN5bCL6Kiq56ys5bm+5YCLTGV2ZWxcclxuICAgICAgICB0aGlzLmlzTnVtYmVyUnVuID0gZmFsc2U7ICAgICAgICAgICAgICAgLy/nlbbliY3mmK/lkKbog73plovlp4vot5HliIZcclxuICAgICAgICB0aGlzLndpblBvaW50TGFiZWwuc3RyaW5nID0gXCJcIjsgICAgICAgICAvL+eVtuWJjemhr+ekuui3keWIsOW5vuWIhlxyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlOyAgICAgICAgICAgICAgICAvL+aJk+mWi+aVtOWAi25vZGVcclxuICAgICAgICB0aGlzLnRvdGFsUG9pbnQubGVuZ3RoID0gMDsgICAgICAgICAgICAgLy/liJ3lp4vmi4bliIbnmoTmlbjlrZdcclxuICAgICAgICB0aGlzLmxldmVsV2luUG9pbnQgPSAwICAgICAgICAgICAgICAgICAgLy/nlbbliY3ot5HliLDnrKzlub7lgIvmi4bliIbnmoTmlbjlrZflhLLlrZjnlKhcclxuICAgICAgICB0aGlzLnNob3dCaWdXaW4oKTsgICAgICAgICAgICAgICAgICAgICAgLy/plovllZ9CaWcgV2luXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvdGFsUG9pbnRTcGxpdChwb2ludCkge1xyXG5cclxuICAgICAgICBsZXQgdG90YWxQb2ludCA9IHBvaW50O1xyXG5cclxuICAgICAgICBsZXQgbnVtYmVyU3BsaXQgPSBbXTtcclxuXHJcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcclxuXHJcbiAgICAgICAgbGV0IGJlZm9yZVBvaW50ID0gMDtcclxuICAgICAgICBsZXQgYWZ0ZXJQb2ludCA9IDA7XHJcblxyXG4gICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgIGlmIChjb3VudCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBudW1iZXJTcGxpdC5wdXNoKHRoaXMudXNlck5vd0JldCAqIHRoaXMud2luTGV2ZWxSYW5nZVtjb3VudF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb3VudCA9PSB0aGlzLndpbkxldmVsUmFuZ2UubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgdG90YWxQb2ludCAtIGFmdGVyUG9pbnQgPiBhZnRlclBvaW50ID9cclxuICAgICAgICAgICAgICAgICAgICBudW1iZXJTcGxpdC5wdXNoKGFmdGVyUG9pbnQgLSBiZWZvcmVQb2ludCwgdG90YWxQb2ludCAtIGFmdGVyUG9pbnQpIDogbnVtYmVyU3BsaXQucHVzaCh0b3RhbFBvaW50IC0gYmVmb3JlUG9pbnQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjb3VudCA+IDApIHtcclxuICAgICAgICAgICAgICAgIG51bWJlclNwbGl0LnB1c2goYWZ0ZXJQb2ludCAtIGJlZm9yZVBvaW50KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRvdGFsUG9pbnQgLSBhZnRlclBvaW50IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChjb3VudCA8IHRoaXMud2luTGV2ZWxSYW5nZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgICAgICAgICBiZWZvcmVQb2ludCA9IHRoaXMudXNlck5vd0JldCAqIHRoaXMud2luTGV2ZWxSYW5nZVtjb3VudCAtIDFdO1xyXG4gICAgICAgICAgICAgICAgYWZ0ZXJQb2ludCA9IHRoaXMudXNlck5vd0JldCAqIHRoaXMud2luTGV2ZWxSYW5nZVtjb3VudF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50b3RhbFBvaW50ID0gbnVtYmVyU3BsaXQ7XHJcbiAgICAgICAgY2MubG9nKHRoaXMudG90YWxQb2ludClcclxuICAgIH1cclxuXHJcbiAgICBARWZmZWN0KFwicnVuUG9pbnRcIilcclxuICAgIHByaXZhdGUgcnVuVG90YWxXaW5Qb2ludCgpIHtcclxuICAgICAgICB0aGlzLmlzTnVtYmVyUnVuID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBATG9hZGluZyhcInByZWZhYlwiKVxyXG4gICAgcHVibGljIHNob3dXaW5BYm92ZVN0YXRlKHBvaW50OiBudW1iZXIsIHJlc29sdmU6ICh2YWx1ZTogKFByb21pc2VMaWtlPHZvaWQ+IHwgdm9pZCkpID0+IHZvaWQpIHtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemVTcGluZSgpO1xyXG4gICAgICAgIHRoaXMudG90YWxQb2ludFNwbGl0KHBvaW50KTtcclxuICAgICAgICB0aGlzLnBvaW50ID0gcG9pbnQ7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJ1blRvdGFsV2luUG9pbnQoKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLm9uY2UoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnJ1blBvaW50VG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbmNlKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5rZXlib2FyZEV2ZW50LCB0aGlzKTtcclxuICAgICAgICB9LCAwLjUpO1xyXG4gICAgICAgIHRoaXMucmVzb2x2ZSA9IHJlc29sdmU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBrZXlib2FyZEV2ZW50KGV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnNwYWNlOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5ydW5Qb2ludFRvdWNoRW5kKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnlbbpu57mk4rnlavpnaLmmYIs55u05o6l6aGv56S65pyA57WC562U5qGIXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJ1blBvaW50VG91Y2hFbmQoKSB7XHJcbiAgICAgICAgdGhpcy5wb2ludFNwbGl0SW5kZXggPSB0aGlzLnRvdGFsUG9pbnQubGVuZ3RoIC0gMTtcclxuICAgICAgICB0aGlzLnN0YXJ0TnVtID0gdGhpcy5wb2ludDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOeVtuWJjeavj+WAi+eNsueNjuetiee0mumcgOi3keeahOaZgumWk1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBvaW50U3BsaXRJbmRleFxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBjaGVja1RpbWVyKHBvaW50U3BsaXRJbmRleDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgdGltZTtcclxuICAgICAgICBzd2l0Y2ggKHBvaW50U3BsaXRJbmRleCkge1xyXG4gICAgICAgICAgICBjYXNlIDAgOlxyXG4gICAgICAgICAgICAgICAgdGltZSA9IDQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxIDpcclxuICAgICAgICAgICAgICAgIHRpbWUgPSAzO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMiA6XHJcbiAgICAgICAgICAgICAgICB0aW1lID0gMztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDMgOlxyXG4gICAgICAgICAgICAgICAgdGltZSA9IDI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA0IDpcclxuICAgICAgICAgICAgICAgIHRpbWUgPSAyO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNSA6XHJcbiAgICAgICAgICAgICAgICB0aW1lID0gMjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwiY2xhc3MgV2luTGV2ZWxDb250cm9sbGVyLnRpbWVyU2V0dGluZygpIOaciemMr+iqpDpcIiwgcG9pbnRTcGxpdEluZGV4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRpbWU7XHJcbiAgICB9XHJcblxyXG4gICAgQE11c2ljKFwiYmlnV2luM1wiKVxyXG4gICAgcHJpdmF0ZSBzaG93QmlnV2luKCkge1xyXG4gICAgICAgIHRoaXMuaXNCaWdXaW5PcGVuID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLndpblNwaW5lLnNldEFuaW1hdGlvbigwLCB0aGlzLnNwaW5lRGF0YS5CSUdfV0lOX09QRU4sIGZhbHNlKTtcclxuICAgICAgICB0aGlzLndpblNwaW5lLmFkZEFuaW1hdGlvbigwLCB0aGlzLnNwaW5lRGF0YS5CSUdfV0lOX0xPT1AsIHRydWUpO1xyXG4gICAgICAgIHRoaXMud2luU3BpbmVCb3JkZXIuc2V0QW5pbWF0aW9uKDAsIHRoaXMuc3BpbmVEYXRhLldJTl9CT1JERVJfT1BFTiwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMud2luU3BpbmVCb3JkZXIuYWRkQW5pbWF0aW9uKDAsIHRoaXMuc3BpbmVEYXRhLldJTl9CT1JERVJfTE9PUCwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy53aW5MZXZlbFsxXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLndpbkxldmVsWzJdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2hvd1N1cGVyV2luKCkge1xyXG4gICAgICAgIHRoaXMuaXNCaWdXaW5PcGVuID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc1N1cGVyV2luT3BlbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy53aW5TcGluZS5zZXRBbmltYXRpb24oMCwgdGhpcy5zcGluZURhdGEuU1VQRVJfV0lOX09QRU4sIGZhbHNlKTtcclxuICAgICAgICB0aGlzLndpblNwaW5lLmFkZEFuaW1hdGlvbigwLCB0aGlzLnNwaW5lRGF0YS5TVVBFUl9XSU5fTE9PUCwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy53aW5MZXZlbFsxXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2hvd01lZ2FXaW4oKSB7XHJcbiAgICAgICAgdGhpcy5pc0JpZ1dpbk9wZW4gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzU3VwZXJXaW5PcGVuID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc01lZ2FXaW5PcGVuID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLndpblNwaW5lLnNldEFuaW1hdGlvbigwLCB0aGlzLnNwaW5lRGF0YS5NRUdBX1dJTl9PUEVOLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy53aW5TcGluZS5hZGRBbmltYXRpb24oMCwgdGhpcy5zcGluZURhdGEuTUVHQV9XSU5fTE9PUCwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy53aW5MZXZlbFsyXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6YeR6aGN6LeR5a6M5pmCLOeZvOmAgeabtOaWsHVzZXLph5HpjKLmrITkvY0s6IiH6LSP5YiG5qyE5L2NXHJcbiAgICAgKiBAcGFyYW0gcG9pbnRcclxuICAgICAqL1xyXG4gICAgdXNlck1vbmV5RXZlbnRFbWl0KHBvaW50KSB7XHJcbiAgICAgICAgaWYgKFNsb3RHYW1lTWFuYWdlci5pbnN0YW5jZS5nYW1lU3RhdGUgPT09IEdhbWVTdGF0ZS5QTEFZSU5HKSB7XHJcbiAgICAgICAgICAgIGxldCBsZXZlbCA9IHRoaXMuZnJlZVJlc3VsdC5CYXNlTGV2ZWxXaW5cclxuICAgICAgICAgICAgVXNlcldpblBvaW50U3RhdGVOb3RpZmljYXRpb24uaW5zdGFuY2Uubm90aWZ5KHBvaW50LCBsZXZlbCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChTbG90R2FtZU1hbmFnZXIuaW5zdGFuY2UuZ2FtZVN0YXRlID09IEdhbWVTdGF0ZS5GUkVFSU5HKSB7XHJcbiAgICAgICAgICAgIGxldCBwb2ludCA9IHRoaXMuZnJlZVJlc3VsdC5GcmVlU3BpbldpbjtcclxuICAgICAgICAgICAgbGV0IGxldmVsID0gdGhpcy5mcmVlUmVzdWx0LkJhc2VMZXZlbFdpblxyXG4gICAgICAgICAgICBVc2VyV2luUG9pbnRTdGF0ZU5vdGlmaWNhdGlvbi5pbnN0YW5jZS5ub3RpZnkocG9pbnQsIGxldmVsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFNsb3RHYW1lTWFuYWdlci5pbnN0YW5jZS5nYW1lU3RhdGUgIT0gR2FtZVN0YXRlLkZSRUVJTkcpIHtcclxuICAgICAgICAgICAgVXNlck1vbmV5Q2hhbmdlTm90aWZpY2F0aW9uLmluc3RhbmNlLm5vdGlmeSh0aGlzLm5vcm1hbFJlc3VsdC5Vc2VyUG9pbnRBZnRlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDliIbmlbjot5HlrozmmYJcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0b3RhbFBvaW50XHJcbiAgICAgKi9cclxuICAgIEBNdXNpYyhcImJpZ1dpbkVuZFwiKVxyXG4gICAgQEVmZmVjdFN0b3AoXCJydW5Qb2ludFwiKVxyXG4gICAgdXBkYXRlV2luUG9pbnRFbmQodG90YWxQb2ludDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy53aW5Qb2ludExhYmVsLnN0cmluZyA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCgpLmZvcm1hdCh0b3RhbFBvaW50KTtcclxuICAgICAgICB0aGlzLnVzZXJNb25leUV2ZW50RW1pdCh0b3RhbFBvaW50KTtcclxuICAgICAgICB0aGlzLmlzTnVtYmVyUnVuID0gZmFsc2U7XHJcbiAgICAgICAgLy/mmYLplpPliLDlvozliJ3lp4vmiYDmnInlj4PmlbhcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMud2luUG9pbnRMYWJlbC5zdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgICAgICB0aGlzLmlzQmlnV2luT3BlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmlzTWVnYVdpbk9wZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5pc1N1cGVyV2luT3BlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmIChTbG90R2FtZU1hbmFnZXIuaW5zdGFuY2UuZ2FtZVN0YXRlID09IEdhbWVTdGF0ZS5GUkVFSU5HKSB7XHJcbiAgICAgICAgICAgICAgICBBdWRpb01hbmFnZXIuaW5zdGFuY2UubXVzaWNQbGF5KFwiRkJTXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgQXVkaW9NYW5hZ2VyLmluc3RhbmNlLm11c2ljUGxheShcIk5CU1wiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucmVzb2x2ZSgpO1xyXG4gICAgICAgIH0sIDUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCB1cGRhdGUoZHQ6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLmlzTnVtYmVyUnVuKSB7XHJcbiAgICAgICAgICAgIGxldCB0b3RhbFBvaW50ID0gdGhpcy5wb2ludDtcclxuICAgICAgICAgICAgbGV0IHRpbWUgPSB0aGlzLmNoZWNrVGltZXIodGhpcy5wb2ludFNwbGl0SW5kZXgpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wb2ludFNwbGl0SW5kZXggPT0gMiAmJiAhdGhpcy5pc1N1cGVyV2luT3Blbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93U3VwZXJXaW4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5wb2ludFNwbGl0SW5kZXggPj0gMyAmJiAhdGhpcy5pc01lZ2FXaW5PcGVuKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dNZWdhV2luKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/nlbbliIbmlbjliLDpgZTmmYLlkbzlj6tcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhcnROdW0gPj0gdG90YWxQb2ludCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVXaW5Qb2ludEVuZCh0b3RhbFBvaW50KTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgbnVtYmVyRm9ybWF0ID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KCkuZm9ybWF0KE1hdGguZmxvb3IodGhpcy5zdGFydE51bSAqIDEwKSAvIDEwKTtcclxuICAgICAgICAgICAgaWYgKG51bWJlckZvcm1hdC5pbmRleE9mKFwiLlwiKSA9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgbnVtYmVyRm9ybWF0ID0gbnVtYmVyRm9ybWF0ICsgXCIuMFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy53aW5Qb2ludExhYmVsLnN0cmluZyA9IG51bWJlckZvcm1hdDtcclxuICAgICAgICAgICAgdGhpcy5zdGFydE51bSArPSB0aGlzLnRvdGFsUG9pbnRbdGhpcy5wb2ludFNwbGl0SW5kZXhdIC8gdGltZSAqIGR0O1xyXG4gICAgICAgICAgICAvL+eVtuWJjei3keWIhuimgeWIsOmBlOeahGxldmVs5pW45a2XXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBvaW50U3BsaXRJbmRleCA9PSAwICYmIHRoaXMubGV2ZWxXaW5Qb2ludCAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxldmVsV2luUG9pbnQgPSB0aGlzLnVzZXJOb3dCZXQgKiB0aGlzLnRvdGFsUG9pbnRbdGhpcy5wb2ludFNwbGl0SW5kZXhdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXJ0TnVtID49IHRoaXMubGV2ZWxXaW5Qb2ludCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucG9pbnRTcGxpdEluZGV4ID09IHRoaXMudG90YWxQb2ludC5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wb2ludFNwbGl0SW5kZXgrKztcclxuICAgICAgICAgICAgICAgIHRoaXMubGV2ZWxXaW5Qb2ludCArPSB0aGlzLnRvdGFsUG9pbnRbdGhpcy5wb2ludFNwbGl0SW5kZXhdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19