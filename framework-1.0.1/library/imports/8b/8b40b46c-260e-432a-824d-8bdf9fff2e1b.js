"use strict";
cc._RF.push(module, '8b40bRsJg5DKoJNi9+f/y4b', 'SceneManager');
// script/Framework/Scene/SceneManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorManagerEnum_1 = require("../Error/Enum/ErrorManagerEnum");
var ErrorManager_1 = require("../Error/ErrorManager");
var LoadResManager_1 = require("../LoadResources/LoadResManager");
var SceneStyle_1 = require("./Enum/SceneStyle");
var SceneDirectionChangeNotification_1 = require("./SceneNotification/SceneDirectionChangeNotification");
var SceneDirectionChangeObserver_1 = require("./SceneObserver/SceneDirectionChangeObserver");
var SceneSizeChangeListener_1 = require("./SceneSizeChangeListener");
var SceneStyleHandler_1 = require("./SceneStyleHandler");
var SceneManager = /** @class */ (function () {
    function SceneManager(configManager) {
        this.configManager = configManager;
        this._designWidth = 1280; //初始預設寬度
        this._designHeight = 720; //初始預設高度
        this.sceneSizeChangeListener = new SceneSizeChangeListener_1.default(); //實例化監聽器
        this.sceneStyleHandler = new SceneStyleHandler_1.default(); //實例化scene樣式導向器
        this.style = SceneStyle_1.SceneStyle.Horizontal; //初始預設scene畫面調整的模式
    }
    /**
     *  懶漢加載
     *  初始化,只讓一個專案產生一次該class
     */
    SceneManager.setInstance = function (configManager) {
        if (!this._instance) {
            this._instance = new SceneManager(configManager);
        }
    };
    Object.defineProperty(SceneManager, "instance", {
        /**
         *  獲取已經初始化的靜態實例class
         */
        get: function () {
            if (!this._instance) {
                ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.SceneFW, "該類尚未實例化");
                return;
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * cavers 設計寬度
     * @param {number} width
     * @return {this}
     */
    SceneManager.prototype.setDesignWidth = function (width) {
        this._designWidth = width;
        return this;
    };
    /**
     * cavers 設計高度
     * @param {number} height
     * @return {this}
     */
    SceneManager.prototype.setDesignHeight = function (height) {
        this._designHeight = height;
        return this;
    };
    /**
     * 更新當前示配寬高,會保存上次的scene更動模式
     * 如不添加參數,第一次將會使用預設模式更動
     * @param {SceneStyle | Function} style : 可自定義更動樣式,但實作(介面)ISceneStyle
     * @return {this}
     */
    SceneManager.prototype.updateSize = function (style) {
        if (style) {
            this.style = style;
            switch (style) {
                case SceneStyle_1.SceneStyle.Horizontal:
                    this.removeSceneChangeDirectionEventListener();
                    this._sceneDirection = SceneStyle_1.SceneDirectionType.PORTRAIT;
                    break;
                case SceneStyle_1.SceneStyle.Vertical:
                    this.removeSceneChangeDirectionEventListener();
                    this._sceneDirection = SceneStyle_1.SceneDirectionType.LANDSCAPE;
                    break;
                case SceneStyle_1.SceneStyle.AUTO:
                default:
                    this.sceneChangeDirectionEventListener();
                    break;
            }
        }
        this.sceneStyleHandler.getStyle(this.style, this._designWidth, this._designHeight);
        return this;
    };
    /**
     * 如果使用者更改螢幕式配度時,判斷當前是否開啟SceneChangeDirectionEventListener監聽
     * 如果有,且並不是SceneStyle.AUTO類型,將自動關閉訂閱
     * @private
     */
    SceneManager.prototype.removeSceneChangeDirectionEventListener = function () {
        if (this.sceneChangeDirectionObserver) {
            SceneDirectionChangeNotification_1.default
                .instance.unsubscribe(this.sceneChangeDirectionObserver);
            this.sceneChangeDirectionObserver = null;
        }
    };
    /**
     * 自發監聽,當用戶開啟AUTO樣式,或自訂樣式時才會開啟
     * 當推波發送過來時將會更新當前 sceneDirectionType
     * @private
     */
    SceneManager.prototype.sceneChangeDirectionEventListener = function () {
        //如果sceneChangeDirectionObserver以創建過,代表已開始監聽中,將直接離開,不重複訂閱
        if (this.sceneChangeDirectionObserver)
            return;
        SceneDirectionChangeNotification_1.default
            .instance.subscribe(this.getSceneChangeDirectionObserver(), true);
    };
    /**
     * 建立scene方向改變觀察者,並綁定改變scene方向時,更新當前遊戲方向狀態
     * @returns {SceneDirectionChangeObserver}
     * @private
     */
    SceneManager.prototype.getSceneChangeDirectionObserver = function () {
        var _this = this;
        this.sceneChangeDirectionObserver = new SceneDirectionChangeObserver_1.default((function (type) {
            _this.updateSceneDirection(type);
        }), true);
        return this.sceneChangeDirectionObserver;
    };
    /**
     * 更新當前遊戲方向
     * @param {SceneDirectionType} direction
     */
    SceneManager.prototype.updateSceneDirection = function (direction) {
        this._sceneDirection = direction;
    };
    /**
     * 監聽當前cavers是否有更動大小,如果有將會自動更新當前是配寬高
     * 將會比照上次更動的樣式進行更動
     * 如果需求更動樣式,須先更新 updateSize()
     * @param {number} time : 更新的頻率 單位毫秒 ms
     */
    SceneManager.prototype.designSceneSizeListenerAutoStart = function (time) {
        this.sceneSizeChangeListener.designSceneEventListener(time);
    };
    /**
     * 更換場景
     * @param {string} name : 場景資源名稱為你Res動態加載的自訂義的scene名稱
     */
    SceneManager.prototype.changeScene = function (name) {
        if (!LoadResManager_1.default.instance.sceneRes.has(name)) {
            ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.SceneFW, "加載不到你的Scene資源,請檢查該資源名是否正確");
        }
        cc.director.runScene(LoadResManager_1.default.instance.sceneRes.get(name));
    };
    /**
     * 清除該scene所有動作
     * @param scene
     */
    SceneManager.prototype.removeScene = function (scene) {
        scene.destroy();
    };
    Object.defineProperty(SceneManager.prototype, "sceneDirection", {
        get: function () {
            return this._sceneDirection;
        },
        set: function (value) {
            this._sceneDirection = value;
        },
        enumerable: false,
        configurable: true
    });
    return SceneManager;
}());
exports.default = SceneManager;

cc._RF.pop();