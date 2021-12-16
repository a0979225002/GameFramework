
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/MainGameScript/MainGameSetting.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxNYWluR2FtZVNjcmlwdFxcTWFpbkdhbWVTZXR0aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0ZBQThFO0FBQzlFLDBFQUFxRTtBQUNyRSw0RkFBc0Y7QUFDdEYsZ0VBQTBEO0FBQzFELHlFQUFzRTtBQUN0RSw0RUFBc0U7QUFDdEUsaUVBQTREO0FBQzVELHlFQUFvRTtBQUNwRSxpRkFBMkU7QUFDM0Usd0VBQWtFO0FBQ2xFLGlFQUFpRjtBQUNqRixnRUFBMEQ7QUFDMUQsMEhBQXFIO0FBQ3JILDhHQUF5RztBQUN6RyxtR0FBNkY7QUFDN0YseURBQW9EO0FBQ3BELHlFQUFtRTtBQUNuRSw2RUFBd0U7QUFHbEUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBNkMsbUNBQXdCO0lBQXJFO1FBQUEscUVBOE9DO1FBM09VLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLHFCQUFlLEdBQVksSUFBSSxDQUFDO1FBRWhDLHVCQUFpQixHQUFZLElBQUksQ0FBQztRQUVsQyx1QkFBaUIsR0FBWSxJQUFJLENBQUM7UUFFbEMsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFFckMsaUJBQVcsR0FBVztZQUNsQixhQUFhLEVBQUUsQ0FBQztZQUNoQixtQkFBbUIsRUFBRSxDQUFDO1lBQ3RCLGVBQWUsRUFBRSxDQUFDO1lBQ2xCLFNBQVMsRUFBRSxDQUFDO1NBQ2YsQ0FBQTs7SUEwTkwsQ0FBQztJQXhORzs7T0FFRztJQUNPLGtDQUFRLEdBQWxCO1FBQ0ksaUJBQWlCO1FBQ2pCLDBDQUFnQzthQUMzQixRQUFRO2FBQ1IsU0FBUyxDQUFDLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFD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QUMsSUFBSTs4REFBUTtJQUV6QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NEQUNJLEVBQUUsb0JBQUYsRUFBRSxDQUFDLElBQUk7MERBQVE7SUFicEIsZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQThPbkM7SUFBRCxzQkFBQztDQTlPRCxBQThPQyxDQTlPNEMsa0NBQXdCLEdBOE9wRTtrQkE5T29CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRnJlZU9wZW5Qcm9jZXNzVGVzdCBmcm9tIFwiLi4vLi4vVGVzdC9HYW1lUHJvY2Vzcy9GcmVlT3BlblByb2Nlc3MudGVzdFwiO1xyXG5pbXBvcnQgRnJlZVByb2Nlc3NUZXN0IGZyb20gXCIuLi8uLi9UZXN0L0dhbWVQcm9jZXNzL0ZyZWVQcm9jZXNzVGVzdFwiO1xyXG5pbXBvcnQgTm9ybWFsQmlnV2luUHJvY2Vzc1Rlc3QgZnJvbSBcIi4uLy4uL1Rlc3QvR2FtZVByb2Nlc3MvTm9ybWFsQmlnV2luUHJvY2Vzcy50ZXN0XCI7XHJcbmltcG9ydCBBdWRpb01hbmFnZXIgZnJvbSAnLi4vRnJhbWV3b3JrL0F1ZGlvL0F1ZGlvTWFuYWdlcidcclxuaW1wb3J0IHtBdWRpb1N0YXRlVHlwZX0gZnJvbSBcIi4uL0ZyYW1ld29yay9BdWRpby9FbnVtL0F1ZGlvU3RhdGVUeXBlXCI7XHJcbmltcG9ydCBMb2FkUmVzTWFuYWdlciBmcm9tICcuLi9GcmFtZXdvcmsvTG9hZFJlc291cmNlcy9Mb2FkUmVzTWFuYWdlcidcclxuaW1wb3J0IHtHYW1lVHlwZX0gZnJvbSAnLi4vRnJhbWV3b3JrL1Byb2Nlc3MvRW51bS9HYW1lU3RhdGUnXHJcbmltcG9ydCBHYW1lUHJvY2VzcyBmcm9tIFwiLi4vRnJhbWV3b3JrL1Byb2Nlc3MvUHJvY3Jlc3MvR2FtZVByb2Nlc3NcIjtcclxuaW1wb3J0IFNsb3RHYW1lUHJvY2VzcyBmcm9tICcuLi9GcmFtZXdvcmsvUHJvY2Vzcy9Qcm9jcmVzcy9TbG90R2FtZVByb2Nlc3MnXHJcbmltcG9ydCBTbG90R2FtZU1hbmFnZXIgZnJvbSAnLi4vRnJhbWV3b3JrL1Byb2Nlc3MvU2xvdEdhbWVNYW5hZ2VyJ1xyXG5pbXBvcnQge1NjZW5lRGlyZWN0aW9uVHlwZSwgU2NlbmVTdHlsZX0gZnJvbSAnLi4vRnJhbWV3b3JrL1NjZW5lL0VudW0vU2NlbmVTdHlsZSdcclxuaW1wb3J0IFNjZW5lTWFuYWdlciBmcm9tICcuLi9GcmFtZXdvcmsvU2NlbmUvU2NlbmVNYW5hZ2VyJ1xyXG5pbXBvcnQgU2NlbmVEaXJlY3Rpb25DaGFuZ2VOb3RpZmljYXRpb24gZnJvbSBcIi4uL0ZyYW1ld29yay9TY2VuZS9TY2VuZU5vdGlmaWNhdGlvbi9TY2VuZURpcmVjdGlvbkNoYW5nZU5vdGlmaWNhdGlvblwiO1xyXG5pbXBvcnQgU2NlbmVEaXJlY3Rpb25DaGFuZ2VPYnNlcnZlciBmcm9tIFwiLi4vRnJhbWV3b3JrL1NjZW5lL1NjZW5lT2JzZXJ2ZXIvU2NlbmVEaXJlY3Rpb25DaGFuZ2VPYnNlcnZlclwiO1xyXG5pbXBvcnQgQU1haW5HYW1lU2V0dGluZ1RlbXBsYXRlIGZyb20gJy4uL0ZyYW1ld29yay9UZW1wbGF0ZS9TZXR0aW5nL0FNYWluR2FtZVNldHRpbmdUZW1wbGF0ZSdcclxuaW1wb3J0IFNvY2tldFNldHRpbmcgZnJvbSBcIi4uL1NvY2tldC9Tb2NrZXRTZXR0aW5nXCI7XHJcbmltcG9ydCBNYWluR2FtZUZyZWVQcm9jZXNzIGZyb20gJy4vR2FtZVByb2Nlc3MvTWFpbkdhbWVGcmVlUHJvY2VzcydcclxuaW1wb3J0IE1haW5HYW1lTm9ybWFsUHJvY2VzcyBmcm9tIFwiLi9HYW1lUHJvY2Vzcy9NYWluR2FtZU5vcm1hbFByb2Nlc3NcIjtcclxuXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5HYW1lU2V0dGluZyBleHRlbmRzIEFNYWluR2FtZVNldHRpbmdUZW1wbGF0ZSB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwdWJsaWMgYWxsQnV0dG9uSDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHB1YmxpYyBhbGxCdXR0b25WOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHVibGljIG1haW5HYW1lTW9kdWxlVjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHB1YmxpYyBsYWJlbEluZm9ybWF0aW9uSDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHB1YmxpYyBsYWJlbEluZm9ybWF0aW9uVjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHB1YmxpYyBsb2FkaW5nRGlhbG9nOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBwcmVmYWJJbmRleDogb2JqZWN0ID0ge1xyXG4gICAgICAgIFwiTG9va0F0X05vZGVcIjogMyxcclxuICAgICAgICBcIldpblBvaW50QW5pbWF0aW9uXCI6IDAsXHJcbiAgICAgICAgXCJGcmVlT3BlbkZyYW1lXCI6IDAsXHJcbiAgICAgICAgXCJGcmVlRW5kXCI6IDAsXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4ss6YeN5paw5pu05pawIHNjZW5l6YGp6YWNXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBvbkNyZWF0ZSgpIHtcclxuICAgICAgICAvL+iou+WGinNjZW5l5qij5byP5pu05paw5o6o5pKt5LqL5Lu2XHJcbiAgICAgICAgU2NlbmVEaXJlY3Rpb25DaGFuZ2VOb3RpZmljYXRpb25cclxuICAgICAgICAgICAgLmluc3RhbmNlXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUodGhpcy5nZXRTY2VuZURpcmVjdGlvbk9ic2VydmVyKCksIHRydWUpO1xyXG4gICAgICAgIC8v6YeN5paw5pu05pawc2NlbmXmlrnlkJEsc2NlbmXot7PovYnmnIPpgKDmiJDpnIDph43mlrDlvI/phY1zaXpl5ZWP6aGMXHJcbiAgICAgICAgLy/ph43mlrDmm7TmlrBtYWluU2NlbmXnmoTplbflr6zmmK/phY1cclxuICAgICAgICBTY2VuZU1hbmFnZXIuaW5zdGFuY2UudXBkYXRlU2l6ZShTY2VuZVN0eWxlLkFVVE8pO1xyXG4gICAgICAgIC8v56ys5LiA5qyh5Yqg6LyJLOmcgOWFiOiHquihjOabtOaWsOS4gOasoVxyXG4gICAgICAgIHRoaXMudXBkYXRlU2NlbmVEaXJlY3Rpb24oU2NlbmVNYW5hZ2VyLmluc3RhbmNlLnNjZW5lRGlyZWN0aW9uKTtcclxuXHJcbiAgICAgICAgLy/lsIfovInlhaXmlYjmnpxkaWFsb2fnr4Dpu57mlL7nva7lnKjlgJLmlbjnrKzkuozlgIvkvY3nva5cclxuICAgICAgICB0aGlzLmxvYWRpbmdEaWFsb2cuc2V0U2libGluZ0luZGV4KDk4KTtcclxuXHJcbiAgICAgICAgLy/lsIfpjK/oqqToppbnqpdkaWFsb2fnr4Dpu57mlL7nva7mnIDlvozkuIDlgIvkvY3nva5cclxuICAgICAgICBsZXQgZXJyb3JGcmFtZSA9IGNjLmluc3RhbnRpYXRlKExvYWRSZXNNYW5hZ2VyLmluc3RhbmNlLnByZWZhYlJlcy5nZXQoXCJFcnJvckZyYW1lUHJlZmFiXCIpKTtcclxuICAgICAgICB0aGlzLm5vZGUucGFyZW50LmFkZENoaWxkKGVycm9yRnJhbWUpO1xyXG4gICAgICAgIGVycm9yRnJhbWUuc2V0U2libGluZ0luZGV4KDk5KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5bu656uL6Kmz5oOF6aCB6Z2iXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBzZXRIaXN0b3J5RGV0YWlsKCkge1xyXG4gICAgICAgIC8vIOW7uueri+ips+aDhemggemdolxyXG4gICAgICAgIGNjW1wicGx1Z1wiXS5SZWNvcmQuY3JlYXRlTWFpbkVsZW0oKTtcclxuICAgICAgICAvLyDliJ3lp4vljJZ0aXRsZeiqnuezu1xyXG4gICAgICAgIGxldCBvYmpfbGFuZ1N0ciA9IHt9O1xyXG4gICAgICAgIG9ial9sYW5nU3RyW1wiZ2FtZVRpdGxlXCJdID0gJ0dBTUUtMDAwJztcclxuICAgICAgICBvYmpfbGFuZ1N0cltcIm5hdlRpdGxlXCJdID0gU29ja2V0U2V0dGluZy50KFwiU185MDY4XCIpO1xyXG4gICAgICAgIG9ial9sYW5nU3RyW1wiZGF0ZVwiXSA9IFNvY2tldFNldHRpbmcudChcIlNfOTA2OVwiKTtcclxuICAgICAgICBvYmpfbGFuZ1N0cltcImlkXCJdID0gU29ja2V0U2V0dGluZy50KFwiU185MDcwXCIpO1xyXG4gICAgICAgIG9ial9sYW5nU3RyW1wiYmV0XCJdID0gU29ja2V0U2V0dGluZy50KFwiU185MDcxXCIpO1xyXG4gICAgICAgIG9ial9sYW5nU3RyW1wid2luTG9zZVwiXSA9IFNvY2tldFNldHRpbmcudChcIlNfOTA4MVwiKTtcclxuICAgICAgICBvYmpfbGFuZ1N0cltcIm5vRGF0YVwiXSA9IFNvY2tldFNldHRpbmcudChcIlNfOTA3NFwiKTtcclxuICAgICAgICBvYmpfbGFuZ1N0cltcImxvYWREb25lXCJdID0gU29ja2V0U2V0dGluZy50KFwiU185MDczXCIpO1xyXG4gICAgICAgIG9ial9sYW5nU3RyW1wibW9kZVwiXSA9IFtTb2NrZXRTZXR0aW5nLnQoXCJTXzkwNzhcIiksIFNvY2tldFNldHRpbmcudChcIlNfOTA3OVwiKSwgU29ja2V0U2V0dGluZy50KFwiU185MDgwXCIpXTtcclxuICAgICAgICBpZiAod2luZG93LnRlc3QpIHtcclxuICAgICAgICAgICAgY2NbXCJwbHVnXCJdLlJlY29yZC5pbml0KHtvYmpfbGFuZ1N0cn0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZUJveCcpO1xyXG4gICAgICAgICAgICBjY1tcInBsdWdcIl0uUmVjb3JkLmluaXQoe29ial9sYW5nU3RyfSwge2NvbnRhaW5lcn0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnm7TmqavlkJHnm6Pogb3lmahcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBnZXRTY2VuZURpcmVjdGlvbk9ic2VydmVyKCk6IFNjZW5lRGlyZWN0aW9uQ2hhbmdlT2JzZXJ2ZXIge1xyXG4gICAgICAgIHJldHVybiBuZXcgU2NlbmVEaXJlY3Rpb25DaGFuZ2VPYnNlcnZlcigodHlwZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNjZW5lRGlyZWN0aW9uKHR5cGUpO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5o6o5rOi5Zue5YKz55W25YmNc2NlbmXnm7TmqavmqKPlvI9cclxuICAgICAqIOabtOaWsOmBiuaIsueVtuWJjeebtOW8j+mChOaYr+apq+W8j1xyXG4gICAgICogQHBhcmFtIHtTY2VuZURpcmVjdGlvblR5cGV9IHNjZW5lVHlwZVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVTY2VuZURpcmVjdGlvbihzY2VuZVR5cGU6IFNjZW5lRGlyZWN0aW9uVHlwZSkge1xyXG4gICAgICAgIGlmIChzY2VuZVR5cGUgPT0gU2NlbmVEaXJlY3Rpb25UeXBlLkxBTkRTQ0FQRSkge1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsSW5mb3JtYXRpb25ILmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuYWxsQnV0dG9uSC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm1haW5HYW1lTW9kdWxlVi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbEluZm9ybWF0aW9uVi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5hbGxCdXR0b25WLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc2NlbmVUeXBlID09IFNjZW5lRGlyZWN0aW9uVHlwZS5QT1JUUkFJVCkge1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsSW5mb3JtYXRpb25ILmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmFsbEJ1dHRvbkguYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbkdhbWVNb2R1bGVWLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWxJbmZvcm1hdGlvblYuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5hbGxCdXR0b25WLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2MubG9nKGBNYWluR2FtZVNldHRpbmcgc2NlbmVEaXJlY3Rpb25FdmVudCgpIOaciemMr+iqpCA6ICR7c2NlbmVUeXBlfWApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmfs+aoguioreWumizmnKroqK3lrprnmoTpn7PmqILoiIfmlYjmnpzpn7Pnhafljp/poJDoqK1cclxuICAgICAqIOWOn+mgkOioreWAvDpcclxuICAgICAqIOmfs+mHj++8mjFcclxuICAgICAqIOWPr+WQpueWiuWKoOaSreaUvjrlkKZcclxuICAgICAqIOWPr+WQpuW+queSsDrlkKZcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGF1ZGlvU2V0dGluZygpIHtcclxuICAgICAgICBBdWRpb01hbmFnZXIuaW5zdGFuY2VcclxuICAgICAgICAgICAgLnNldHRpbmdNdXNpYyhcIk5CU1wiLCAwLjYsIHRydWUpXHJcbiAgICAgICAgICAgIC5zZXR0aW5nTXVzaWMoXCJGQlNcIiwgMC42LCB0cnVlKVxyXG4gICAgICAgICAgICAuc2V0dGluZ0VmZmVjdChcIlNsb3RUcnVuXCIsIEF1ZGlvU3RhdGVUeXBlLkNMRUFSX1RPX1JFUExBWSwgMSwgdHJ1ZSlcclxuICAgICAgICAgICAgLnNldHRpbmdFZmZlY3QoXCJXaW5TaW5nbGVMaW5lXCIsIEF1ZGlvU3RhdGVUeXBlLkNMRUFSX1RPX1JFUExBWSwgMC4zKVxyXG4gICAgICAgICAgICAuc2V0dGluZ0VmZmVjdChcIlNsb3RTdG9wXCIsIEF1ZGlvU3RhdGVUeXBlLlNVUEVSSU1QT1NFLCAxKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOe2geWumuimgeS9v+eUqOeahOa1geeoi0NsYXNzXHJcbiAgICAgKiDkvb/nlKjmlrnlvI866ZyA6Ieq6KGM57m85om/IOS7i+mdoiBJRXhlY3V0aW9uQ29udGFpbmVyO1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgZ2FtZVByb2Nlc3NTZXR0aW5nKCkge1xyXG4gICAgICAgIGxldCBub3JtYWxDb250YWluZXIgPSBuZXcgTWFpbkdhbWVOb3JtYWxQcm9jZXNzKCk7XHJcbiAgICAgICAgbGV0IG5vcm1hbFByb2Nlc3MgPSBuZXcgU2xvdEdhbWVQcm9jZXNzKG5vcm1hbENvbnRhaW5lcik7XHJcbiAgICAgICAgY29uc3Qgbm9ybWFsUCA9IG5vcm1hbFByb2Nlc3NcclxuICAgICAgICAgICAgLm9uQ3VzdG9taXplU3RhcnQoKVxyXG4gICAgICAgICAgICAub25TaW5lSW5HcmlkKClcclxuICAgICAgICAgICAgLm9uUnVubmluZygpXHJcbiAgICAgICAgICAgIC5vblNob3dBbnN3ZXIoKVxyXG4gICAgICAgICAgICAub25DdXN0b21pemVFbmQoKVxyXG4gICAgICAgICAgICAub25DaGFuZ2VTdGF0dXMoKTtcclxuXHJcbiAgICAgICAgbGV0IGZyZWVDb250YWluZXIgPSBuZXcgTWFpbkdhbWVGcmVlUHJvY2VzcygpO1xyXG4gICAgICAgIGxldCBmcmVlUHJvY2VzcyA9IG5ldyBTbG90R2FtZVByb2Nlc3MoZnJlZUNvbnRhaW5lcik7XHJcbiAgICAgICAgY29uc3QgZnJlZVAgPSBmcmVlUHJvY2Vzc1xyXG4gICAgICAgICAgICAub25DdXN0b21pemVTdGFydCgpXHJcbiAgICAgICAgICAgIC5vblNpbmVJbkdyaWQoKVxyXG4gICAgICAgICAgICAub25SdW5uaW5nKClcclxuICAgICAgICAgICAgLm9uU2hvd0Fuc3dlcigpXHJcbiAgICAgICAgICAgIC5vbkN1c3RvbWl6ZUVuZCgpXHJcbiAgICAgICAgICAgIC5vbkNoYW5nZVN0YXR1cygpO1xyXG5cclxuICAgICAgICBTbG90R2FtZU1hbmFnZXIuaW5zdGFuY2VcclxuICAgICAgICAgICAgLnNldFByb2Nlc3MoR2FtZVR5cGUuRlJFRSwgZnJlZVApXHJcbiAgICAgICAgICAgIC5zZXRQcm9jZXNzKEdhbWVUeXBlLk5PUk1BTCwgbm9ybWFsUClcclxuICAgICAgICAgICAgLy8gLnNldFByb2Nlc3MoXCJGcmVlT3BlblRlc3RcIix0aGlzLmdldEZyZWVPcGVuVGVzdFByb2Nlc3MoKSlcclxuICAgICAgICAgICAgLy8gLnNldFByb2Nlc3MoXCJCaWdXaW5UZXN0XCIsdGhpcy5nZXRCaWdXaW5UZXN0UHJvY2VzcygpKVxyXG4gICAgICAgICAgICAvLyAuc2V0UHJvY2VzcyhcIkJpZ1dpblRlc3RcIiwgdGhpcy5nZXRUZXN0UHJvY2VzczIoKSlcclxuICAgICAgICAgICAgLnNldEluaXRpYWxQcm9jZXNzKEdhbWVUeXBlLk5PUk1BTCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmuKzoqaY6XHJcbiAgICAgKiBAcmV0dXJucyB7R2FtZVByb2Nlc3N9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGdldEZyZWVTdGF0ZVByb2Nlc3MoKTogR2FtZVByb2Nlc3Mge1xyXG4gICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBjYy5sb2coXCJcIiwgVXNlck1vbmV5Q2hhbmdlTm90aWZpY2F0aW9uLmluc3RhbmNlLmdldEFsbFN1YnNjcmliZSgpKTtcclxuICAgICAgICAvLyAgICAgY2MubG9nKFwiVXNlclRvdGFsQmV0Q2hhbmdlTm90aWZpY2F0aW9uXCIsIFVzZXJUb3RhbEJldENoYW5nZU5vdGlmaWNhdGlvbi5pbnN0YW5jZS5nZXRBbGxTdWJzY3JpYmUoKSk7XHJcbiAgICAgICAgLy8gICAgIGNjLmxvZyhcIlVzZXJXaW5Qb2ludFN0YXRlTm90aWZpY2F0aW9uXCIsIFVzZXJXaW5Qb2ludFN0YXRlTm90aWZpY2F0aW9uLmluc3RhbmNlLmdldEFsbFN1YnNjcmliZSgpKTtcclxuICAgICAgICAvLyAgICAgY2MubG9nKFwiU2NlbmVEaXJlY3Rpb25DaGFuZ2VOb3RpZmljYXRpb25cIiwgU2NlbmVEaXJlY3Rpb25DaGFuZ2VOb3RpZmljYXRpb24uaW5zdGFuY2UuZ2V0QWxsU3Vic2NyaWJlKCkpO1xyXG4gICAgICAgIC8vICAgICBjYy5sb2coXCJBdXRvU3RhdGVDaGFuZ2VOb3RpZmljYXRpb25cIiwgQXV0b1N0YXRlQ2hhbmdlTm90aWZpY2F0aW9uLmluc3RhbmNlLmdldEFsbFN1YnNjcmliZSgpKTtcclxuICAgICAgICAvLyAgICAgY2MubG9nKFwiU2Nyb2xsRm9jdXNTdGF0ZU5vdGlmaWNhdGlvblwiLCBTY3JvbGxGb2N1c1N0YXRlTm90aWZpY2F0aW9uLmluc3RhbmNlLmdldEFsbFN1YnNjcmliZSgpKTtcclxuICAgICAgICAvLyAgICAgY2MubG9nKFwiU3RvcE5vd1N0YXRlTm90aWZpY2F0aW9uXCIsIFN0b3BOb3dTdGF0ZU5vdGlmaWNhdGlvbi5pbnN0YW5jZS5nZXRBbGxTdWJzY3JpYmUoKSk7XHJcbiAgICAgICAgLy8gfSwgMTAwMClcclxuICAgICAgICBsZXQgdGVzdENvbnRhaW5lciA9IG5ldyBGcmVlUHJvY2Vzc1Rlc3QoKTtcclxuICAgICAgICBsZXQgdGVzdFByb2Nlc3MgPSBuZXcgR2FtZVByb2Nlc3ModGVzdENvbnRhaW5lcik7XHJcbiAgICAgICAgcmV0dXJuIHRlc3RQcm9jZXNzXHJcbiAgICAgICAgICAgIC5vbkNyZWF0ZSgpXHJcbiAgICAgICAgICAgIC5vbkV4ZWN1dGlvbigpXHJcbiAgICAgICAgICAgIC5vbkVuZCgpXHJcbiAgICAgICAgICAgIC5vbkNoYW5nZVN0YXR1cygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5ris6KmmOlxyXG4gICAgICogQHJldHVybnMge1Nsb3RHYW1lUHJvY2Vzc31cclxuICAgICAqL1xyXG4gICAgZ2V0QmlnV2luVGVzdFByb2Nlc3MoKTogU2xvdEdhbWVQcm9jZXNzIHtcclxuICAgICAgICBsZXQgdGVzdENvbnRhaW5lciA9IG5ldyBOb3JtYWxCaWdXaW5Qcm9jZXNzVGVzdCgpO1xyXG4gICAgICAgIGxldCB0ZXN0UHJvY2VzcyA9IG5ldyBTbG90R2FtZVByb2Nlc3ModGVzdENvbnRhaW5lcik7XHJcbiAgICAgICAgcmV0dXJuIHRlc3RQcm9jZXNzXHJcbiAgICAgICAgICAgIC5vbkN1c3RvbWl6ZVN0YXJ0KClcclxuICAgICAgICAgICAgLm9uU2luZUluR3JpZCgpXHJcbiAgICAgICAgICAgIC5vblJ1bm5pbmcoKVxyXG4gICAgICAgICAgICAub25TaG93QW5zd2VyKClcclxuICAgICAgICAgICAgLm9uQ3VzdG9taXplRW5kKClcclxuICAgICAgICAgICAgLm9uQ2hhbmdlU3RhdHVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmuKzoqaY6XHJcbiAgICAgKiBAcmV0dXJucyB7U2xvdEdhbWVQcm9jZXNzfVxyXG4gICAgICovXHJcbiAgICBnZXRGcmVlT3BlblRlc3RQcm9jZXNzKCk6IEdhbWVQcm9jZXNzIHtcclxuICAgICAgICBsZXQgdGVzdENvbnRhaW5lciA9IG5ldyBGcmVlT3BlblByb2Nlc3NUZXN0KCk7XHJcbiAgICAgICAgbGV0IHRlc3RQcm9jZXNzID0gbmV3IEdhbWVQcm9jZXNzKHRlc3RDb250YWluZXIpO1xyXG4gICAgICAgIHJldHVybiB0ZXN0UHJvY2Vzc1xyXG4gICAgICAgICAgICAub25DcmVhdGUoKVxyXG4gICAgICAgICAgICAub25FeGVjdXRpb24oKVxyXG4gICAgICAgICAgICAub25FbmQoKVxyXG4gICAgICAgICAgICAub25DaGFuZ2VTdGF0dXMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWvpuS+i+WMluaJgOacieWLleaFi+WKoOi8ieeahHByZWZhYlxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgcHJlZmFiSW5zdGFudGlhdGUoKSB7XHJcbiAgICAgICAgbGV0IHByb2dyZXNzID0gTG9hZFJlc01hbmFnZXIuaW5zdGFuY2Uuc2Vjb25kYXJ5TG9hZFN0YXRlLmdldChcInByZWZhYlwiKTtcclxuICAgICAgICBpZiAocHJvZ3Jlc3MgIT0gMSkge1xyXG4gICAgICAgICAgICBMb2FkUmVzTWFuYWdlci5pbnN0YW5jZS5jYWxsYmFjaygocHJvZ3Jlc3MpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChwcm9ncmVzcyA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWtlUHJlZmFiSW5zdGFudGlhdGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgXCJwcmVmYWJcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tYWtlUHJlZmFiSW5zdGFudGlhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlr6bkvovljJZQcmVmYWIgTWV0aG9kXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIG1ha2VQcmVmYWJJbnN0YW50aWF0ZSgpIHtcclxuICAgICAgICBmb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXModGhpcy5wcmVmYWJJbmRleCkpIHtcclxuICAgICAgICAgICAgbGV0IHByZWZhYiA9IGNjLmluc3RhbnRpYXRlKExvYWRSZXNNYW5hZ2VyLmluc3RhbmNlLnByZWZhYlJlcy5nZXQoa2V5KSlcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5hZGRDaGlsZChwcmVmYWIpO1xyXG4gICAgICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnByZWZhYkluZGV4W2tleV07XHJcbiAgICAgICAgICAgIGlmIChpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgcHJlZmFiLnNldFNpYmxpbmdJbmRleChpbmRleCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=