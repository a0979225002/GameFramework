"use strict";
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