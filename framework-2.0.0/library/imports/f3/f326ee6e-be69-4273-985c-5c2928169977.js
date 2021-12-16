"use strict";
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