"use strict";
cc._RF.push(module, '9a713jj+yhDxZ6SgCxN9zvd', 'MainGameSetting');
// script/MainGameScript/MainGameSetting.ts

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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var FreeOpenProcess_test_1 = require("../../Test/GameProcess/FreeOpenProcess.test");
var FreeProcessTest_1 = require("../../Test/GameProcess/FreeProcessTest");
var NormalBigWinProcess_test_1 = require("../../Test/GameProcess/NormalBigWinProcess.test");
var AudioManager_1 = require("../Framework/Audio/AudioManager");
var AudioStateType_1 = require("../Framework/Audio/Enum/AudioStateType");
var LoadResManager_1 = require("../Framework/LoadResources/LoadResManager");
var GameState_1 = require("../Framework/Process/Enum/GameState");
var GameProcess_1 = require("../Framework/Process/Procress/GameProcess");
var SlotGameProcess_1 = require("../Framework/Process/Procress/SlotGameProcess");
var SlotGameManager_1 = require("../Framework/Process/SlotGameManager");
var SceneStyle_1 = require("../Framework/Scene/Enum/SceneStyle");
var SceneManager_1 = require("../Framework/Scene/SceneManager");
var SceneDirectionChangeNotification_1 = require("../Framework/Scene/SceneNotification/SceneDirectionChangeNotification");
var SceneDirectionChangeObserver_1 = require("../Framework/Scene/SceneObserver/SceneDirectionChangeObserver");
var AMainGameSettingTemplate_1 = require("../Framework/Template/Setting/AMainGameSettingTemplate");
var SocketSetting_1 = require("../Socket/SocketSetting");
var MainGameFreeProcess_1 = require("./GameProcess/MainGameFreeProcess");
var MainGameNormalProcess_1 = require("./GameProcess/MainGameNormalProcess");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MainGameSetting = /** @class */ (function (_super) {
    __extends(MainGameSetting, _super);
    function MainGameSetting() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.allButtonH = null;
        _this.allButtonV = null;
        _this.mainGameModuleV = null;
        _this.labelInformationH = null;
        _this.labelInformationV = null;
        _this.loadingDialog = null;
        _this.prefabIndex = {
            "LookAt_Node": 3,
            "WinPointAnimation": 0,
            "FreeOpenFrame": 0,
            "FreeEnd": 0,
        };
        return _this;
    }
    /**
     * 初始,重新更新 scene適配
     */
    MainGameSetting.prototype.onCreate = function () {
        //註冊scene樣式更新推播事件
        SceneDirectionChangeNotification_1.default
            .instance
            .subscribe(this.getSceneDirectionObserver(), true);
        //重新更新scene方向,scene跳轉會造成需重新式配size問題
        //重新更新mainScene的長寬是配
        SceneManager_1.default.instance.updateSize(SceneStyle_1.SceneStyle.AUTO);
        //第一次加載,需先自行更新一次
        this.updateSceneDirection(SceneManager_1.default.instance.sceneDirection);
        //將載入效果dialog節點放置在倒數第二個位置
        this.loadingDialog.setSiblingIndex(98);
        //將錯誤視窗dialog節點放置最後一個位置
        var errorFrame = cc.instantiate(LoadResManager_1.default.instance.prefabRes.get("ErrorFramePrefab"));
        this.node.parent.addChild(errorFrame);
        errorFrame.setSiblingIndex(99);
    };
    /**
     * 建立詳情頁面
     */
    MainGameSetting.prototype.setHistoryDetail = function () {
        // 建立詳情頁面
        cc["plug"].Record.createMainElem();
        // 初始化title語系
        var obj_langStr = {};
        obj_langStr["gameTitle"] = 'GAME-000';
        obj_langStr["navTitle"] = SocketSetting_1.default.t("S_9068");
        obj_langStr["date"] = SocketSetting_1.default.t("S_9069");
        obj_langStr["id"] = SocketSetting_1.default.t("S_9070");
        obj_langStr["bet"] = SocketSetting_1.default.t("S_9071");
        obj_langStr["winLose"] = SocketSetting_1.default.t("S_9081");
        obj_langStr["noData"] = SocketSetting_1.default.t("S_9074");
        obj_langStr["loadDone"] = SocketSetting_1.default.t("S_9073");
        obj_langStr["mode"] = [SocketSetting_1.default.t("S_9078"), SocketSetting_1.default.t("S_9079"), SocketSetting_1.default.t("S_9080")];
        if (window.test) {
            cc["plug"].Record.init({ obj_langStr: obj_langStr });
        }
        else {
            var container = document.querySelector('#gameBox');
            cc["plug"].Record.init({ obj_langStr: obj_langStr }, { container: container });
        }
    };
    /**
     * 直橫向監聽器
     */
    MainGameSetting.prototype.getSceneDirectionObserver = function () {
        var _this = this;
        return new SceneDirectionChangeObserver_1.default(function (type) {
            _this.updateSceneDirection(type);
        }, this);
    };
    /**
     * 推波回傳當前scene直橫樣式
     * 更新遊戲當前直式還是橫式
     * @param {SceneDirectionType} sceneType
     * @private
     */
    MainGameSetting.prototype.updateSceneDirection = function (sceneType) {
        if (sceneType == SceneStyle_1.SceneDirectionType.LANDSCAPE) {
            this.labelInformationH.active = true;
            this.allButtonH.active = true;
            this.mainGameModuleV.active = false;
            this.labelInformationV.active = false;
            this.allButtonV.active = false;
        }
        else if (sceneType == SceneStyle_1.SceneDirectionType.PORTRAIT) {
            this.labelInformationH.active = false;
            this.allButtonH.active = false;
            this.mainGameModuleV.active = true;
            this.labelInformationV.active = true;
            this.allButtonV.active = true;
        }
        else {
            cc.log("MainGameSetting sceneDirectionEvent() \u6709\u932F\u8AA4 : " + sceneType);
        }
    };
    /**
     * 音樂設定,未設定的音樂與效果音照原預設
     * 原預設值:
     * 音量：1
     * 可否疊加播放:否
     * 可否循環:否
     */
    MainGameSetting.prototype.audioSetting = function () {
        AudioManager_1.default.instance
            .settingMusic("NBS", 0.6, true)
            .settingMusic("FBS", 0.6, true)
            .settingEffect("SlotTrun", AudioStateType_1.AudioStateType.CLEAR_TO_REPLAY, 1, true)
            .settingEffect("WinSingleLine", AudioStateType_1.AudioStateType.CLEAR_TO_REPLAY, 0.3)
            .settingEffect("SlotStop", AudioStateType_1.AudioStateType.SUPERIMPOSE, 1);
    };
    /**
     * 綁定要使用的流程Class
     * 使用方式:需自行繼承 介面 IExecutionContainer;
     */
    MainGameSetting.prototype.gameProcessSetting = function () {
        var normalContainer = new MainGameNormalProcess_1.default();
        var normalProcess = new SlotGameProcess_1.default(normalContainer);
        var normalP = normalProcess
            .onCustomizeStart()
            .onSineInGrid()
            .onRunning()
            .onShowAnswer()
            .onCustomizeEnd()
            .onChangeStatus();
        var freeContainer = new MainGameFreeProcess_1.default();
        var freeProcess = new SlotGameProcess_1.default(freeContainer);
        var freeP = freeProcess
            .onCustomizeStart()
            .onSineInGrid()
            .onRunning()
            .onShowAnswer()
            .onCustomizeEnd()
            .onChangeStatus();
        SlotGameManager_1.default.instance
            .setProcess(GameState_1.GameType.FREE, freeP)
            .setProcess(GameState_1.GameType.NORMAL, normalP)
            // .setProcess("FreeOpenTest",this.getFreeOpenTestProcess())
            // .setProcess("BigWinTest",this.getBigWinTestProcess())
            // .setProcess("BigWinTest", this.getTestProcess2())
            .setInitialProcess(GameState_1.GameType.NORMAL);
    };
    /**
     * 測試:
     * @returns {GameProcess}
     * @private
     */
    MainGameSetting.prototype.getFreeStateProcess = function () {
        // setTimeout(() => {
        //     cc.log("", UserMoneyChangeNotification.instance.getAllSubscribe());
        //     cc.log("UserTotalBetChangeNotification", UserTotalBetChangeNotification.instance.getAllSubscribe());
        //     cc.log("UserWinPointStateNotification", UserWinPointStateNotification.instance.getAllSubscribe());
        //     cc.log("SceneDirectionChangeNotification", SceneDirectionChangeNotification.instance.getAllSubscribe());
        //     cc.log("AutoStateChangeNotification", AutoStateChangeNotification.instance.getAllSubscribe());
        //     cc.log("ScrollFocusStateNotification", ScrollFocusStateNotification.instance.getAllSubscribe());
        //     cc.log("StopNowStateNotification", StopNowStateNotification.instance.getAllSubscribe());
        // }, 1000)
        var testContainer = new FreeProcessTest_1.default();
        var testProcess = new GameProcess_1.default(testContainer);
        return testProcess
            .onCreate()
            .onExecution()
            .onEnd()
            .onChangeStatus();
    };
    /**
     * 測試:
     * @returns {SlotGameProcess}
     */
    MainGameSetting.prototype.getBigWinTestProcess = function () {
        var testContainer = new NormalBigWinProcess_test_1.default();
        var testProcess = new SlotGameProcess_1.default(testContainer);
        return testProcess
            .onCustomizeStart()
            .onSineInGrid()
            .onRunning()
            .onShowAnswer()
            .onCustomizeEnd()
            .onChangeStatus();
    };
    /**
     * 測試:
     * @returns {SlotGameProcess}
     */
    MainGameSetting.prototype.getFreeOpenTestProcess = function () {
        var testContainer = new FreeOpenProcess_test_1.default();
        var testProcess = new GameProcess_1.default(testContainer);
        return testProcess
            .onCreate()
            .onExecution()
            .onEnd()
            .onChangeStatus();
    };
    /**
     * 實例化所有動態加載的prefab
     */
    MainGameSetting.prototype.prefabInstantiate = function () {
        var _this = this;
        var progress = LoadResManager_1.default.instance.secondaryLoadState.get("prefab");
        if (progress != 1) {
            LoadResManager_1.default.instance.callback(function (progress) {
                if (progress == 1) {
                    _this.makePrefabInstantiate();
                }
            }, "prefab");
        }
        else {
            this.makePrefabInstantiate();
        }
    };
    /**
     * 實例化Prefab Method
     * @private
     */
    MainGameSetting.prototype.makePrefabInstantiate = function () {
        var e_1, _a;
        try {
            for (var _b = __values(Object.keys(this.prefabIndex)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                var prefab = cc.instantiate(LoadResManager_1.default.instance.prefabRes.get(key));
                this.node.parent.addChild(prefab);
                var index = this.prefabIndex[key];
                if (index) {
                    prefab.setSiblingIndex(index);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    var _b, _c, _d, _e, _f, _g;
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_b = typeof cc !== "undefined" && cc.Node) === "function" ? _b : Object)
    ], MainGameSetting.prototype, "allButtonH", void 0);
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_c = typeof cc !== "undefined" && cc.Node) === "function" ? _c : Object)
    ], MainGameSetting.prototype, "allButtonV", void 0);
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_d = typeof cc !== "undefined" && cc.Node) === "function" ? _d : Object)
    ], MainGameSetting.prototype, "mainGameModuleV", void 0);
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_e = typeof cc !== "undefined" && cc.Node) === "function" ? _e : Object)
    ], MainGameSetting.prototype, "labelInformationH", void 0);
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_f = typeof cc !== "undefined" && cc.Node) === "function" ? _f : Object)
    ], MainGameSetting.prototype, "labelInformationV", void 0);
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_g = typeof cc !== "undefined" && cc.Node) === "function" ? _g : Object)
    ], MainGameSetting.prototype, "loadingDialog", void 0);
    MainGameSetting = __decorate([
        ccclass
    ], MainGameSetting);
    return MainGameSetting;
}(AMainGameSettingTemplate_1.default));
exports.default = MainGameSetting;

cc._RF.pop();