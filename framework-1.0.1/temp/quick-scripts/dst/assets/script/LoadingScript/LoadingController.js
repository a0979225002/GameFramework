
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/LoadingScript/LoadingController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f326e5uvmlCc5hcXCkoFpl3', 'LoadingController');
// script/LoadingScript/LoadingController.ts

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
var SlotConfigManager_1 = require("../Framework/Config/SlotConfigManager");
var ButtonMethod_1 = require("../Framework/GlobalMethod/ButtonMethod");
var LanguageMethod_1 = require("../Framework/GlobalMethod/LanguageMethod");
var LoadEnum_1 = require("../Framework/LoadResources/Enum/LoadEnum");
var LoadResManager_1 = require("../Framework/LoadResources/LoadResManager");
var SceneStyle_1 = require("../Framework/Scene/Enum/SceneStyle");
var SceneManager_1 = require("../Framework/Scene/SceneManager");
var SceneDirectionChangeNotification_1 = require("../Framework/Scene/SceneNotification/SceneDirectionChangeNotification");
var SceneDirectionChangeObserver_1 = require("../Framework/Scene/SceneObserver/SceneDirectionChangeObserver");
var ALoadingTemplate_1 = require("../Framework/Template/Loading/ALoadingTemplate");
var Socket_1 = require("../Socket/Socket");
var SocketSetting_1 = require("../Socket/SocketSetting");
var WebResponseManager_1 = require("../Framework/WebResponse/WebResponseManager");
var ResponseType_1 = require("../Framework/WebResponse/Enum/ResponseType");
var NoSleep = require("../Socket/NoSleep");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LoadingController = /** @class */ (function (_super) {
    __extends(LoadingController, _super);
    function LoadingController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.progressBar = null;
        _this.intoMainGameButton = null;
        _this.intoMainGameButtonImg = null;
        _this.loadingTextNode = null;
        _this.logoImg = null;
        _this.loadBG = null;
        return _this;
    }
    /**
     * 自定義初始
     */
    LoadingController.prototype.onCreat = function () {
        this.tableInfo = WebResponseManager_1.WebResponseManager.instance().getResult(ResponseType_1.ResponseType.TABLE_INFO);
        Socket_1.socketJS.SFSLoad(SlotConfigManager_1.default.instance.gameNumber);
        this.isLogoAnimaEnd = false; //初始化尚未結束logo動畫
        this.progressNum = 0; //初始進度條為0;
        this.progressBar.progress = this.progressNum; //初始UI進度條為0
        this.loadTextToArray = [
            this.loadingTextNode.children[0].getComponent(cc.Label),
            this.loadingTextNode.children[1].getComponent(cc.Label),
        ];
        this.loadTextToArray[0].string //初始第一條進度條文字
            = SocketSetting_1.default.t("DES_00" + 1);
        ButtonMethod_1.default.addButtonEvent(//添加進入主遊戲Button監聽事件
        this.intoMainGameButton, "intoMainGameButtonEventListener", this);
        this.intoMainGameButton.node.active = false; //初始關閉進入主遊戲Button顯示,等待進度載入完成後才顯示
        LanguageMethod_1.default.instance //初始載入條的說明文字樣式
            .updateLabelStyle(this.loadTextToArray[0])
            .updateLabelStyle(this.loadTextToArray[1]);
        SceneDirectionChangeNotification_1.default //初始第一次當前分辨率,自動移除監聽
            .instance.subscribe(this.getSceneDirectionChangeObserver(), false);
        cc.view.on("canvas-resize", this.changeLoadingBG, this); //持續間當前遊戲長寬,如果有變更,不管是否更換方向都會更新bg大小
    };
    /**
     * 持續間當前遊戲長寬,如果有變更,不管是否更換方向都會更新bg大小
     */
    LoadingController.prototype.changeLoadingBG = function () {
        if (cc.view.getFrameSize().width < cc.view.getFrameSize().height) {
            var newHeight = 1000 / cc.view.getFrameSize().width * cc.view.getFrameSize().height;
            var newWidth = newHeight / 9 * 16;
            this.loadBG.height = newHeight;
            this.loadBG.width = newWidth;
        }
        else {
            this.loadBG.height = 960;
            this.loadBG.width = 1560;
        }
    };
    /**
     * 螢幕方向事件觀察員
     * @returns {SceneDirectionChangeObserver}
     */
    LoadingController.prototype.getSceneDirectionChangeObserver = function () {
        var _this = this;
        if (!this._sceneDirectionChangeObserver) {
            this._sceneDirectionChangeObserver =
                new SceneDirectionChangeObserver_1.default(function (type) {
                    if (type == SceneStyle_1.SceneDirectionType.LANDSCAPE) {
                        _this.loadBG.height = 960;
                        _this.loadBG.width = 1560;
                    }
                    else {
                        var newHeight = 1000 / cc.view.getFrameSize().width * cc.view.getFrameSize().height;
                        var newWidth = newHeight / 9 * 16;
                        cc.log(newHeight, newWidth);
                        _this.loadBG.height = newHeight;
                        _this.loadBG.width = newWidth;
                    }
                }, this);
        }
        return this._sceneDirectionChangeObserver;
    };
    /**
     * 載入主資源
     */
    LoadingController.prototype.onLoadResources = function () {
        var _this = this;
        LoadResManager_1.default.instance
            .loadAsset("music", LoadEnum_1.LoadType.music, "music")
            .loadAsset("MainScene", LoadEnum_1.LoadType.scene, null)
            .loadAsset("gridImg", LoadEnum_1.LoadType.img, "image/grid/grid")
            .loadAsset("GameIcon", LoadEnum_1.LoadType.img, "image/loadLanguage", true)
            .loadAsset("errorFromPrefab", LoadEnum_1.LoadType.prefab, "prefab/ErrorFrame")
            .callback(function (progress) {
            if (progress == 1) {
                _this.intoMainGameButtonImg.spriteFrame =
                    LoadResManager_1.default.instance.imgRes.get("GameIcon").get("btn_start");
                _this.logoImg.spriteFrame =
                    LoadResManager_1.default.instance.imgRes.get("GameIcon").get("logo");
                _this.logoAnimation();
            }
        }, "GameIcon")
            .callback(function (progress) {
            _this.progressBar.progress = progress;
            if (progress == 1) {
                _this.progressNum = progress;
            }
        });
    };
    /**
     * 載入次資源
     */
    LoadingController.prototype.loadAssetBundle = function () {
        LoadResManager_1.default.instance
            .loadBundle("music2", LoadEnum_1.LoadType.music, "music")
            .loadBundle("prefab", LoadEnum_1.LoadType.prefab, "prefab");
    };
    /**
     * 載入外部script資源
     */
    LoadingController.prototype.loadExternalScript = function () {
        LoadResManager_1.default.instance
            .loadExternalScript("record.2.0.0", LoadEnum_1.LoadType.css, "lib/for1X/css")
            .loadExternalScript("record.2.0.0", LoadEnum_1.LoadType.css, "game84/css")
            .loadExternalScript("swiper.min", LoadEnum_1.LoadType.css, "lib/for1X/css")
            .loadExternalScript("game-record.2.0.0", LoadEnum_1.LoadType.script, "lib/for1X/js")
            .loadExternalScript("vendors", LoadEnum_1.LoadType.script, "lib/for1X/js");
    };
    /**
     * 更新進度條說明文字,輪播顯示
     * @param {number} textIndex
     */
    LoadingController.prototype.updateProgressText = function (textIndex) {
        var _this = this;
        if (textIndex === void 0) { textIndex = 1; }
        textIndex++;
        if (textIndex > 7)
            textIndex = 1;
        var textHeight = this.loadTextToArray[0].node.height;
        var nextNodeY = this.loadTextToArray[1].node.y;
        this.loadTextToArray[1].string
            = SocketSetting_1.default.t("DES_00" + (textIndex));
        cc.tween(this.loadingTextNode)
            .delay(2)
            .to(1, { y: this.loadingTextNode.y + textHeight })
            .call(function () {
            var node = _this.loadTextToArray[0].node;
            node.y = nextNodeY - textHeight;
            _this.loadTextToArray.splice(0, 1);
            _this.loadTextToArray.push(node.getComponent(cc.Label));
            //當進度尚未載入完成,且尚未登入成功,持續遞歸
            if (_this.progressNum != 1 || !_this.canPlayGame) {
                _this.updateProgressText(textIndex);
            }
        })
            .start();
    };
    /**
     * 配置該遊戲Scene適配寬高,與更新頻率
     */
    LoadingController.prototype.sceneStyle = function () {
        SceneManager_1.default.instance
            .setDesignWidth(1280)
            .setDesignHeight(720)
            .updateSize(SceneStyle_1.SceneStyle.AUTO)
            .designSceneSizeListenerAutoStart(100);
    };
    /**
     * 進入主遊戲按鈕點擊事件
     */
    LoadingController.prototype.intoMainGameButtonEventListener = function () {
        this.useNoSleep();
        SceneManager_1.default.instance.changeScene("MainScene");
        SceneManager_1.default.instance.removeScene(this);
    };
    LoadingController.prototype.useNoSleep = function () {
        if (!cc.sys.isMobile) {
            cc.log("不是mobile");
            return;
        }
        cc.log("我是手機");
        if (cc.sys.os == cc.sys.OS_IOS) {
            cc.log("我是 apple 手機 ,因為無法 noSleep 所以不執行監聽");
            return;
        }
        if (window.screenLock != 1) {
            cc["plug"] = cc["plug"] || {};
            cc["plug"].noSleep = new NoSleep();
            cc["plug"].noSleep.enable();
            cc.log(cc["plug"].noSleep);
            cc.game.on(cc.game.EVENT_HIDE, function () {
                // cc.log("游戏进入后台时触发的事件");
                cc["plug"].noSleep.disable();
            });
            cc.game.on(cc.game.EVENT_SHOW, function () {
                cc.log("近來搂");
                // cc.log("游戏进入前台运行时触发的事件");
                cc["plug"].noSleep = new NoSleep();
                cc["plug"].noSleep.enable();
            });
        }
    };
    /**
     * 進入主遊戲按鈕動畫
     */
    LoadingController.prototype.intoMainGameButtonAnimation = function () {
        cc.tween(this.intoMainGameButton.node)
            .repeatForever(cc.tween()
            .to(1, { y: this.intoMainGameButton.node.y + 15 }, { easing: 'bounceIn' })
            .to(1, { y: this.intoMainGameButton.node.y - 15 }, { easing: 'bounceOut' })).start();
    };
    /**
     * logo進場動畫
     */
    LoadingController.prototype.logoAnimation = function () {
        var _this = this;
        cc.tween(this.logoImg.node.parent)
            .parallel(cc.tween().to(1.5, { y: 0 }, { easing: 'bounceOut' }), cc.tween().to(2, { opacity: 255 }, { easing: 'smooth' }))
            .call(function () {
            _this.isLogoAnimaEnd = true;
        })
            .start();
    };
    /**
     * 監聽當前是否已經進入SFS登入,logo動畫已經結束,主加載已經完成
     * @param {number} dt
     * @protected
     */
    LoadingController.prototype.update = function (dt) {
        if (this.isLogoAnimaEnd && this.progressNum == 1 && this.canPlayGame) {
            //打開進入主遊戲button
            if (this.progressBar.node.active) {
                this.progressBar.node.active = false;
                this.intoMainGameButton.node.active = true;
                this.intoMainGameButtonAnimation();
            }
        }
    };
    LoadingController.prototype.onDestroy = function () {
        cc.view.off("canvas-resize", this.changeLoadingBG, this);
    };
    var _b, _c, _d, _e, _f, _g;
    __decorate([
        property(cc.ProgressBar),
        __metadata("design:type", typeof (_b = typeof cc !== "undefined" && cc.ProgressBar) === "function" ? _b : Object)
    ], LoadingController.prototype, "progressBar", void 0);
    __decorate([
        property(cc.Button),
        __metadata("design:type", typeof (_c = typeof cc !== "undefined" && cc.Button) === "function" ? _c : Object)
    ], LoadingController.prototype, "intoMainGameButton", void 0);
    __decorate([
        property(cc.Sprite),
        __metadata("design:type", typeof (_d = typeof cc !== "undefined" && cc.Sprite) === "function" ? _d : Object)
    ], LoadingController.prototype, "intoMainGameButtonImg", void 0);
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_e = typeof cc !== "undefined" && cc.Node) === "function" ? _e : Object)
    ], LoadingController.prototype, "loadingTextNode", void 0);
    __decorate([
        property(cc.Sprite),
        __metadata("design:type", typeof (_f = typeof cc !== "undefined" && cc.Sprite) === "function" ? _f : Object)
    ], LoadingController.prototype, "logoImg", void 0);
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_g = typeof cc !== "undefined" && cc.Node) === "function" ? _g : Object)
    ], LoadingController.prototype, "loadBG", void 0);
    LoadingController = __decorate([
        ccclass
    ], LoadingController);
    return LoadingController;
}(ALoadingTemplate_1.default));
exports.default = LoadingController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxMb2FkaW5nU2NyaXB0XFxMb2FkaW5nQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyRUFBc0U7QUFDdEUsdUVBQWlFO0FBQ2pFLDJFQUFzRTtBQUN0RSxxRUFBaUU7QUFDakUsNEVBQXNFO0FBQ3RFLGlFQUFpRjtBQUNqRixnRUFBMEQ7QUFDMUQsMEhBQXFIO0FBQ3JILDhHQUF5RztBQUN6RyxtRkFBNkU7QUFDN0UsMkNBQTBDO0FBQzFDLHlEQUFtRDtBQUNuRCxrRkFBK0U7QUFFL0UsMkVBQXdFO0FBQ3hFLDJDQUE4QztBQUV4QyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUErQyxxQ0FBZ0I7SUFBL0Q7UUFBQSxxRUFrUUM7UUEvUFcsaUJBQVcsR0FBbUIsSUFBSSxDQUFDO1FBRW5DLHdCQUFrQixHQUFjLElBQUksQ0FBQztRQUVyQywyQkFBcUIsR0FBYyxJQUFJLENBQUM7UUFFeEMscUJBQWUsR0FBWSxJQUFJLENBQUM7UUFFaEMsYUFBTyxHQUFjLElBQUksQ0FBQztRQUUxQixZQUFNLEdBQVksSUFBSSxDQUFDOztJQXFQbkMsQ0FBQztJQS9PRzs7T0FFRztJQUNJLG1DQUFPLEdBQWQ7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLHVDQUFrQixDQUFDLFFBQVEsRUFBbUIsQ0FBQyxTQUFTLENBQUMsMkJBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUNsRyxpQkFBUSxDQUFDLE9BQU8sQ0FBQywyQkFBaUIsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsQ0FBb0MsZUFBZTtRQUMvRSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUEyQyxVQUFVO1FBQzFFLElB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QUMzRCxDQUFDOztJQTlQRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO3NEQUNKLEVBQUUsb0JBQUYsRUFBRSxDQUFDLFdBQVc7MERBQVE7SUFFM0M7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztzREFDUSxFQUFFLG9CQUFGLEVBQUUsQ0FBQyxNQUFNO2lFQUFRO0lBRTdDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7c0RBQ1csRUFBRSxvQkFBRixFQUFFLENBQUMsTUFBTTtvRUFBUTtJQUVoRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NEQUNPLEVBQUUsb0JBQUYsRUFBRSxDQUFDLElBQUk7OERBQVE7SUFFeEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztzREFDSCxFQUFFLG9CQUFGLEVBQUUsQ0FBQyxNQUFNO3NEQUFRO0lBRWxDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7c0RBQ0YsRUFBRSxvQkFBRixFQUFFLENBQUMsSUFBSTtxREFBUTtJQWJkLGlCQUFpQjtRQURyQyxPQUFPO09BQ2EsaUJBQWlCLENBa1FyQztJQUFELHdCQUFDO0NBbFFELEFBa1FDLENBbFE4QywwQkFBZ0IsR0FrUTlEO2tCQWxRb0IsaUJBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNsb3RDb25maWdNYW5hZ2VyIGZyb20gXCIuLi9GcmFtZXdvcmsvQ29uZmlnL1Nsb3RDb25maWdNYW5hZ2VyXCI7XHJcbmltcG9ydCBCdXR0b25NZXRob2QgZnJvbSAnLi4vRnJhbWV3b3JrL0dsb2JhbE1ldGhvZC9CdXR0b25NZXRob2QnXHJcbmltcG9ydCBMYW5ndWFnZU1ldGhvZCBmcm9tIFwiLi4vRnJhbWV3b3JrL0dsb2JhbE1ldGhvZC9MYW5ndWFnZU1ldGhvZFwiO1xyXG5pbXBvcnQge0xvYWRUeXBlfSBmcm9tICcuLi9GcmFtZXdvcmsvTG9hZFJlc291cmNlcy9FbnVtL0xvYWRFbnVtJ1xyXG5pbXBvcnQgTG9hZFJlc01hbmFnZXIgZnJvbSAnLi4vRnJhbWV3b3JrL0xvYWRSZXNvdXJjZXMvTG9hZFJlc01hbmFnZXInXHJcbmltcG9ydCB7U2NlbmVTdHlsZSwgU2NlbmVEaXJlY3Rpb25UeXBlfSBmcm9tICcuLi9GcmFtZXdvcmsvU2NlbmUvRW51bS9TY2VuZVN0eWxlJ1xyXG5pbXBvcnQgU2NlbmVNYW5hZ2VyIGZyb20gJy4uL0ZyYW1ld29yay9TY2VuZS9TY2VuZU1hbmFnZXInXHJcbmltcG9ydCBTY2VuZURpcmVjdGlvbkNoYW5nZU5vdGlmaWNhdGlvbiBmcm9tIFwiLi4vRnJhbWV3b3JrL1NjZW5lL1NjZW5lTm90aWZpY2F0aW9uL1NjZW5lRGlyZWN0aW9uQ2hhbmdlTm90aWZpY2F0aW9uXCI7XHJcbmltcG9ydCBTY2VuZURpcmVjdGlvbkNoYW5nZU9ic2VydmVyIGZyb20gXCIuLi9GcmFtZXdvcmsvU2NlbmUvU2NlbmVPYnNlcnZlci9TY2VuZURpcmVjdGlvbkNoYW5nZU9ic2VydmVyXCI7XHJcbmltcG9ydCBBTG9hZGluZ1RlbXBsYXRlIGZyb20gJy4uL0ZyYW1ld29yay9UZW1wbGF0ZS9Mb2FkaW5nL0FMb2FkaW5nVGVtcGxhdGUnXHJcbmltcG9ydCB7c29ja2V0SlN9IGZyb20gXCIuLi9Tb2NrZXQvU29ja2V0XCI7XHJcbmltcG9ydCBTb2NrZXRTZXR0aW5nIGZyb20gJy4uL1NvY2tldC9Tb2NrZXRTZXR0aW5nJ1xyXG5pbXBvcnQge1dlYlJlc3BvbnNlTWFuYWdlcn0gZnJvbSBcIi4uL0ZyYW1ld29yay9XZWJSZXNwb25zZS9XZWJSZXNwb25zZU1hbmFnZXJcIjtcclxuaW1wb3J0IHtOb0xpbmVUYWJsZUluZm99IGZyb20gXCIuLi8uLi8uLi9UZW1wbGF0ZVwiO1xyXG5pbXBvcnQge1Jlc3BvbnNlVHlwZX0gZnJvbSBcIi4uL0ZyYW1ld29yay9XZWJSZXNwb25zZS9FbnVtL1Jlc3BvbnNlVHlwZVwiO1xyXG5pbXBvcnQgTm9TbGVlcCA9IHJlcXVpcmUoJy4uL1NvY2tldC9Ob1NsZWVwJyk7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRpbmdDb250cm9sbGVyIGV4dGVuZHMgQUxvYWRpbmdUZW1wbGF0ZSB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByb2dyZXNzQmFyKVxyXG4gICAgcHJpdmF0ZSBwcm9ncmVzc0JhcjogY2MuUHJvZ3Jlc3NCYXIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIHByaXZhdGUgaW50b01haW5HYW1lQnV0dG9uOiBjYy5CdXR0b24gPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIHByaXZhdGUgaW50b01haW5HYW1lQnV0dG9uSW1nOiBjYy5TcHJpdGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIGxvYWRpbmdUZXh0Tm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgcHJpdmF0ZSBsb2dvSW1nOiBjYy5TcHJpdGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIGxvYWRCRzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIHByb2dyZXNzTnVtOiBudW1iZXJcclxuICAgIHByaXZhdGUgbG9hZFRleHRUb0FycmF5OiBBcnJheTxjYy5MYWJlbD47XHJcbiAgICBwcml2YXRlIGlzTG9nb0FuaW1hRW5kOiBib29sZWFuXHJcbiAgICBwcml2YXRlIF9zY2VuZURpcmVjdGlvbkNoYW5nZU9ic2VydmVyOiBTY2VuZURpcmVjdGlvbkNoYW5nZU9ic2VydmVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6Ieq5a6a576p5Yid5aeLXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBvbkNyZWF0KCkge1xyXG4gICAgICAgIHRoaXMudGFibGVJbmZvID0gV2ViUmVzcG9uc2VNYW5hZ2VyLmluc3RhbmNlPE5vTGluZVRhYmxlSW5mbz4oKS5nZXRSZXN1bHQoUmVzcG9uc2VUeXBlLlRBQkxFX0lORk8pXHJcbiAgICAgICAgc29ja2V0SlMuU0ZTTG9hZChTbG90Q29uZmlnTWFuYWdlci5pbnN0YW5jZS5nYW1lTnVtYmVyKTtcclxuICAgICAgICB0aGlzLmlzTG9nb0FuaW1hRW5kID0gZmFsc2U7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/liJ3lp4vljJblsJrmnKrntZDmnZ9sb2dv5YuV55WrXHJcbiAgICAgICAgdGhpcy5wcm9ncmVzc051bSA9IDA7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Yid5aeL6YCy5bqm5qKd54K6MDtcclxuICAgICAgICB0aGlzLnByb2dyZXNzQmFyLnByb2dyZXNzID0gdGhpcy5wcm9ncmVzc051bTsgICAgICAgICAgICAgICAgICAgLy/liJ3lp4tVSemAsuW6puaineeCujBcclxuICAgICAgICB0aGlzLmxvYWRUZXh0VG9BcnJheSA9IFsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lrZjmlL7pgLLluqbmop3oqqrmmI7mloflrZBMYWJlbFxyXG4gICAgICAgICAgICB0aGlzLmxvYWRpbmdUZXh0Tm9kZS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLFxyXG4gICAgICAgICAgICB0aGlzLmxvYWRpbmdUZXh0Tm9kZS5jaGlsZHJlblsxXS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgdGhpcy5sb2FkVGV4dFRvQXJyYXlbMF0uc3RyaW5nICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Yid5aeL56ys5LiA5qKd6YCy5bqm5qKd5paH5a2XXHJcbiAgICAgICAgICAgID0gU29ja2V0U2V0dGluZy50KFwiREVTXzAwXCIgKyAxKTtcclxuICAgICAgICBCdXR0b25NZXRob2QuYWRkQnV0dG9uRXZlbnQoICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/mt7vliqDpgLLlhaXkuLvpgYrmiLJCdXR0b27nm6Pogb3kuovku7ZcclxuICAgICAgICAgICAgdGhpcy5pbnRvTWFpbkdhbWVCdXR0b24sXHJcbiAgICAgICAgICAgIFwiaW50b01haW5HYW1lQnV0dG9uRXZlbnRMaXN0ZW5lclwiLFxyXG4gICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmludG9NYWluR2FtZUJ1dHRvbi5ub2RlLmFjdGl2ZSA9IGZhbHNlOyAgICAgICAgICAgICAgICAgICAgLy/liJ3lp4vpl5zplonpgLLlhaXkuLvpgYrmiLJCdXR0b27poa/npLos562J5b6F6YCy5bqm6LyJ5YWl5a6M5oiQ5b6M5omN6aGv56S6XHJcbiAgICAgICAgTGFuZ3VhZ2VNZXRob2QuaW5zdGFuY2UgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Yid5aeL6LyJ5YWl5qKd55qE6Kqq5piO5paH5a2X5qij5byPXHJcbiAgICAgICAgICAgIC51cGRhdGVMYWJlbFN0eWxlKHRoaXMubG9hZFRleHRUb0FycmF5WzBdKVxyXG4gICAgICAgICAgICAudXBkYXRlTGFiZWxTdHlsZSh0aGlzLmxvYWRUZXh0VG9BcnJheVsxXSlcclxuXHJcbiAgICAgICAgU2NlbmVEaXJlY3Rpb25DaGFuZ2VOb3RpZmljYXRpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Yid5aeL56ys5LiA5qyh55W25YmN5YiG6L6o546HLOiHquWLleenu+mZpOebo+iBvVxyXG4gICAgICAgICAgICAuaW5zdGFuY2Uuc3Vic2NyaWJlKHRoaXMuZ2V0U2NlbmVEaXJlY3Rpb25DaGFuZ2VPYnNlcnZlcigpLCBmYWxzZSk7XHJcblxyXG4gICAgICAgIGNjLnZpZXcub24oXCJjYW52YXMtcmVzaXplXCIsdGhpcy5jaGFuZ2VMb2FkaW5nQkcsdGhpcykgICAgICAvL+aMgee6jOmWk+eVtuWJjemBiuaIsumVt+WvrCzlpoLmnpzmnInorormm7Qs5LiN566h5piv5ZCm5pu05o+b5pa55ZCR6YO95pyD5pu05pawYmflpKflsI9cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaMgee6jOmWk+eVtuWJjemBiuaIsumVt+WvrCzlpoLmnpzmnInorormm7Qs5LiN566h5piv5ZCm5pu05o+b5pa55ZCR6YO95pyD5pu05pawYmflpKflsI9cclxuICAgICAqL1xyXG4gICAgY2hhbmdlTG9hZGluZ0JHKCkge1xyXG4gICAgICAgIGlmIChjYy52aWV3LmdldEZyYW1lU2l6ZSgpLndpZHRoIDwgY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQpIHtcclxuICAgICAgICAgICAgbGV0IG5ld0hlaWdodCA9IDEwMDAgLyBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLndpZHRoICogY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQ7XHJcbiAgICAgICAgICAgIGxldCBuZXdXaWR0aCA9IG5ld0hlaWdodCAvIDkgKiAxNjtcclxuICAgICAgICAgICAgdGhpcy5sb2FkQkcuaGVpZ2h0ID0gbmV3SGVpZ2h0O1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRCRy53aWR0aCA9IG5ld1dpZHRoO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZEJHLmhlaWdodCA9IDk2MDtcclxuICAgICAgICAgICAgdGhpcy5sb2FkQkcud2lkdGggPSAxNTYwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOieouW5leaWueWQkeS6i+S7tuingOWvn+WToVxyXG4gICAgICogQHJldHVybnMge1NjZW5lRGlyZWN0aW9uQ2hhbmdlT2JzZXJ2ZXJ9XHJcbiAgICAgKi9cclxuICAgIGdldFNjZW5lRGlyZWN0aW9uQ2hhbmdlT2JzZXJ2ZXIoKTogU2NlbmVEaXJlY3Rpb25DaGFuZ2VPYnNlcnZlciB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9zY2VuZURpcmVjdGlvbkNoYW5nZU9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NjZW5lRGlyZWN0aW9uQ2hhbmdlT2JzZXJ2ZXIgPVxyXG4gICAgICAgICAgICAgICAgbmV3IFNjZW5lRGlyZWN0aW9uQ2hhbmdlT2JzZXJ2ZXIoKHR5cGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PSBTY2VuZURpcmVjdGlvblR5cGUuTEFORFNDQVBFKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZEJHLmhlaWdodCA9IDk2MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkQkcud2lkdGggPSAxNTYwO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdIZWlnaHQgPSAxMDAwIC8gY2Mudmlldy5nZXRGcmFtZVNpemUoKS53aWR0aCAqIGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3V2lkdGggPSBuZXdIZWlnaHQgLyA5ICogMTY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmxvZyhuZXdIZWlnaHQsIG5ld1dpZHRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkQkcuaGVpZ2h0ID0gbmV3SGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRCRy53aWR0aCA9IG5ld1dpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5fc2NlbmVEaXJlY3Rpb25DaGFuZ2VPYnNlcnZlcjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOi8ieWFpeS4u+izh+a6kFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb25Mb2FkUmVzb3VyY2VzKCkge1xyXG4gICAgICAgIExvYWRSZXNNYW5hZ2VyLmluc3RhbmNlXHJcbiAgICAgICAgICAgIC5sb2FkQXNzZXQoXCJtdXNpY1wiLCBMb2FkVHlwZS5tdXNpYywgXCJtdXNpY1wiKVxyXG4gICAgICAgICAgICAubG9hZEFzc2V0KFwiTWFpblNjZW5lXCIsIExvYWRUeXBlLnNjZW5lLCBudWxsKVxyXG4gICAgICAgICAgICAubG9hZEFzc2V0KFwiZ3JpZEltZ1wiLCBMb2FkVHlwZS5pbWcsIFwiaW1hZ2UvZ3JpZC9ncmlkXCIpXHJcbiAgICAgICAgICAgIC5sb2FkQXNzZXQoXCJHYW1lSWNvblwiLCBMb2FkVHlwZS5pbWcsIFwiaW1hZ2UvbG9hZExhbmd1YWdlXCIsIHRydWUpXHJcbiAgICAgICAgICAgIC5sb2FkQXNzZXQoXCJlcnJvckZyb21QcmVmYWJcIixMb2FkVHlwZS5wcmVmYWIsXCJwcmVmYWIvRXJyb3JGcmFtZVwiKVxyXG4gICAgICAgICAgICAuY2FsbGJhY2soKHByb2dyZXNzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvZ3Jlc3MgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW50b01haW5HYW1lQnV0dG9uSW1nLnNwcml0ZUZyYW1lID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9hZFJlc01hbmFnZXIuaW5zdGFuY2UuaW1nUmVzLmdldChcIkdhbWVJY29uXCIpLmdldChcImJ0bl9zdGFydFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ29JbWcuc3ByaXRlRnJhbWUgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2FkUmVzTWFuYWdlci5pbnN0YW5jZS5pbWdSZXMuZ2V0KFwiR2FtZUljb25cIikuZ2V0KFwibG9nb1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ29BbmltYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgXCJHYW1lSWNvblwiKVxyXG4gICAgICAgICAgICAuY2FsbGJhY2soKHByb2dyZXNzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2dyZXNzQmFyLnByb2dyZXNzID0gcHJvZ3Jlc3M7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvZ3Jlc3MgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NOdW0gPSBwcm9ncmVzcztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDovInlhaXmrKHos4fmupBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRBc3NldEJ1bmRsZSgpIHtcclxuICAgICAgICBMb2FkUmVzTWFuYWdlci5pbnN0YW5jZVxyXG4gICAgICAgICAgICAubG9hZEJ1bmRsZShcIm11c2ljMlwiLCBMb2FkVHlwZS5tdXNpYywgXCJtdXNpY1wiKVxyXG4gICAgICAgICAgICAubG9hZEJ1bmRsZShcInByZWZhYlwiLCBMb2FkVHlwZS5wcmVmYWIsIFwicHJlZmFiXCIpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDovInlhaXlpJbpg6hzY3JpcHTos4fmupBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvYWRFeHRlcm5hbFNjcmlwdCgpIHtcclxuICAgICAgICBMb2FkUmVzTWFuYWdlci5pbnN0YW5jZVxyXG4gICAgICAgICAgICAubG9hZEV4dGVybmFsU2NyaXB0KFwicmVjb3JkLjIuMC4wXCIsIExvYWRUeXBlLmNzcywgXCJsaWIvZm9yMVgvY3NzXCIpXHJcbiAgICAgICAgICAgIC5sb2FkRXh0ZXJuYWxTY3JpcHQoXCJyZWNvcmQuMi4wLjBcIiwgTG9hZFR5cGUuY3NzLCBcImdhbWU4NC9jc3NcIilcclxuICAgICAgICAgICAgLmxvYWRFeHRlcm5hbFNjcmlwdChcInN3aXBlci5taW5cIiwgTG9hZFR5cGUuY3NzLCBcImxpYi9mb3IxWC9jc3NcIilcclxuICAgICAgICAgICAgLmxvYWRFeHRlcm5hbFNjcmlwdChcImdhbWUtcmVjb3JkLjIuMC4wXCIsIExvYWRUeXBlLnNjcmlwdCwgXCJsaWIvZm9yMVgvanNcIilcclxuICAgICAgICAgICAgLmxvYWRFeHRlcm5hbFNjcmlwdChcInZlbmRvcnNcIiwgTG9hZFR5cGUuc2NyaXB0LCBcImxpYi9mb3IxWC9qc1wiKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOabtOaWsOmAsuW6puaineiqquaYjuaWh+WtlyzovKrmkq3poa/npLpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0ZXh0SW5kZXhcclxuICAgICAqL1xyXG4gICAgcHVibGljIHVwZGF0ZVByb2dyZXNzVGV4dCh0ZXh0SW5kZXg6IG51bWJlciA9IDEpIHtcclxuICAgICAgICB0ZXh0SW5kZXgrKztcclxuICAgICAgICBpZiAodGV4dEluZGV4ID4gNykgdGV4dEluZGV4ID0gMTtcclxuICAgICAgICBsZXQgdGV4dEhlaWdodCA9IHRoaXMubG9hZFRleHRUb0FycmF5WzBdLm5vZGUuaGVpZ2h0O1xyXG4gICAgICAgIGxldCBuZXh0Tm9kZVkgPSB0aGlzLmxvYWRUZXh0VG9BcnJheVsxXS5ub2RlLnk7XHJcbiAgICAgICAgdGhpcy5sb2FkVGV4dFRvQXJyYXlbMV0uc3RyaW5nXHJcbiAgICAgICAgICAgID0gU29ja2V0U2V0dGluZy50KFwiREVTXzAwXCIgKyAodGV4dEluZGV4KSk7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5sb2FkaW5nVGV4dE5vZGUpXHJcbiAgICAgICAgICAgIC5kZWxheSgyKVxyXG4gICAgICAgICAgICAudG8oMSwge3k6IHRoaXMubG9hZGluZ1RleHROb2RlLnkgKyB0ZXh0SGVpZ2h0fSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmxvYWRUZXh0VG9BcnJheVswXS5ub2RlO1xyXG4gICAgICAgICAgICAgICAgbm9kZS55ID0gbmV4dE5vZGVZIC0gdGV4dEhlaWdodDtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZFRleHRUb0FycmF5LnNwbGljZSgwLCAxKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZFRleHRUb0FycmF5LnB1c2gobm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpKTtcclxuICAgICAgICAgICAgICAgIC8v55W26YCy5bqm5bCa5pyq6LyJ5YWl5a6M5oiQLOS4lOWwmuacqueZu+WFpeaIkOWKnyzmjIHnuozpgZ7mrbhcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb2dyZXNzTnVtICE9IDEgfHwgIXRoaXMuY2FuUGxheUdhbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2dyZXNzVGV4dCh0ZXh0SW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmFjee9ruipsumBiuaIslNjZW5l6YGp6YWN5a+s6auYLOiIh+abtOaWsOmgu+eOh1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2NlbmVTdHlsZSgpIHtcclxuICAgICAgICBTY2VuZU1hbmFnZXIuaW5zdGFuY2VcclxuICAgICAgICAgICAgLnNldERlc2lnbldpZHRoKDEyODApXHJcbiAgICAgICAgICAgIC5zZXREZXNpZ25IZWlnaHQoNzIwKVxyXG4gICAgICAgICAgICAudXBkYXRlU2l6ZShTY2VuZVN0eWxlLkFVVE8pXHJcbiAgICAgICAgICAgIC5kZXNpZ25TY2VuZVNpemVMaXN0ZW5lckF1dG9TdGFydCgxMDApO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmAsuWFpeS4u+mBiuaIsuaMiemIlem7nuaTiuS6i+S7tlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGludG9NYWluR2FtZUJ1dHRvbkV2ZW50TGlzdGVuZXIoKSB7XHJcbiAgICAgICAgdGhpcy51c2VOb1NsZWVwKCk7XHJcbiAgICAgICAgU2NlbmVNYW5hZ2VyLmluc3RhbmNlLmNoYW5nZVNjZW5lKFwiTWFpblNjZW5lXCIpO1xyXG4gICAgICAgIFNjZW5lTWFuYWdlci5pbnN0YW5jZS5yZW1vdmVTY2VuZSh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVzZU5vU2xlZXAoKSB7XHJcbiAgICAgICAgaWYgKCFjYy5zeXMuaXNNb2JpbGUpIHtcclxuICAgICAgICAgICAgY2MubG9nKFwi5LiN5pivbW9iaWxlXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNjLmxvZyhcIuaIkeaYr+aJi+apn1wiKTtcclxuICAgICAgICBpZiAoY2Muc3lzLm9zID09IGNjLnN5cy5PU19JT1MpIHtcclxuICAgICAgICAgICAgY2MubG9nKFwi5oiR5pivIGFwcGxlIOaJi+apnyAs5Zug54K654Sh5rOVIG5vU2xlZXAg5omA5Lul5LiN5Z+36KGM55uj6IG9XCIpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHdpbmRvdy5zY3JlZW5Mb2NrICE9IDEpIHtcclxuICAgICAgICAgICAgY2NbXCJwbHVnXCJdID0gY2NbXCJwbHVnXCJdIHx8IHt9O1xyXG4gICAgICAgICAgICBjY1tcInBsdWdcIl0ubm9TbGVlcCA9IG5ldyBOb1NsZWVwKCk7XHJcbiAgICAgICAgICAgIGNjW1wicGx1Z1wiXS5ub1NsZWVwLmVuYWJsZSgpO1xyXG4gICAgICAgICAgICBjYy5sb2coY2NbXCJwbHVnXCJdLm5vU2xlZXApXHJcbiAgICAgICAgICAgIGNjLmdhbWUub24oY2MuZ2FtZS5FVkVOVF9ISURFLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2coXCLmuLjmiI/ov5vlhaXlkI7lj7Dml7bop6blj5HnmoTkuovku7ZcIik7XHJcbiAgICAgICAgICAgICAgICBjY1tcInBsdWdcIl0ubm9TbGVlcC5kaXNhYmxlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjYy5nYW1lLm9uKGNjLmdhbWUuRVZFTlRfU0hPVywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwi6L+R5L6G5pCCXCIpXHJcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2coXCLmuLjmiI/ov5vlhaXliY3lj7Dov5DooYzml7bop6blj5HnmoTkuovku7ZcIik7XHJcbiAgICAgICAgICAgICAgICBjY1tcInBsdWdcIl0ubm9TbGVlcCA9IG5ldyBOb1NsZWVwKCk7XHJcbiAgICAgICAgICAgICAgICBjY1tcInBsdWdcIl0ubm9TbGVlcC5lbmFibGUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6YCy5YWl5Li76YGK5oiy5oyJ6YiV5YuV55WrXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaW50b01haW5HYW1lQnV0dG9uQW5pbWF0aW9uKCkge1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuaW50b01haW5HYW1lQnV0dG9uLm5vZGUpXHJcbiAgICAgICAgICAgIC5yZXBlYXRGb3JldmVyKFxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4oKVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygxLCB7eTogdGhpcy5pbnRvTWFpbkdhbWVCdXR0b24ubm9kZS55ICsgMTV9LCB7ZWFzaW5nOiAnYm91bmNlSW4nfSlcclxuICAgICAgICAgICAgICAgICAgICAudG8oMSwge3k6IHRoaXMuaW50b01haW5HYW1lQnV0dG9uLm5vZGUueSAtIDE1fSwge2Vhc2luZzogJ2JvdW5jZU91dCd9KVxyXG4gICAgICAgICAgICApLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBsb2dv6YCy5aC05YuV55WrXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgbG9nb0FuaW1hdGlvbigpIHtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmxvZ29JbWcubm9kZS5wYXJlbnQpXHJcbiAgICAgICAgICAgIC5wYXJhbGxlbChcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkudG8oMS41LCB7eTogMH0sIHtlYXNpbmc6ICdib3VuY2VPdXQnfSksXHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbigpLnRvKDIsIHtvcGFjaXR5OiAyNTV9LCB7ZWFzaW5nOiAnc21vb3RoJ30pXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvZ29BbmltYUVuZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog55uj6IG955W25YmN5piv5ZCm5bey57aT6YCy5YWlU0ZT55m75YWlLGxvZ2/li5Xnlavlt7LntpPntZDmnZ8s5Li75Yqg6LyJ5bey57aT5a6M5oiQXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZHRcclxuICAgICAqIEBwcm90ZWN0ZWRcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZShkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNMb2dvQW5pbWFFbmQgJiYgdGhpcy5wcm9ncmVzc051bSA9PSAxICYmIHRoaXMuY2FuUGxheUdhbWUpIHtcclxuICAgICAgICAgICAgLy/miZPplovpgLLlhaXkuLvpgYrmiLJidXR0b25cclxuICAgICAgICAgICAgaWYgKHRoaXMucHJvZ3Jlc3NCYXIubm9kZS5hY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW50b01haW5HYW1lQnV0dG9uLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW50b01haW5HYW1lQnV0dG9uQW5pbWF0aW9uKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBjYy52aWV3Lm9mZihcImNhbnZhcy1yZXNpemVcIix0aGlzLmNoYW5nZUxvYWRpbmdCRyx0aGlzKTtcclxuICAgIH1cclxufVxyXG4iXX0=