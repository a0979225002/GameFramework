
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Scene/SceneManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXFNjZW5lXFxTY2VuZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxtRUFBd0Q7QUFDeEQsc0RBQWdEO0FBQ2hELGtFQUE0RDtBQUM1RCxnREFBZ0U7QUFFaEUseUdBQW9HO0FBQ3BHLDZGQUF3RjtBQUN4RixxRUFBK0Q7QUFDL0QseURBQW1EO0FBRW5EO0lBWUksc0JBQW9CLGFBQTZCO1FBQzdDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLENBQW1ELFFBQVE7UUFDcEYsSUFBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUMsQ0FBbUQsUUFBUTtRQUNwRixJQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxpQ0FBdUIsRUFBRSxDQUFDLENBQXlCLFFBQVE7UUFDOUYsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksMkJBQWlCLEVBQUUsQ0FBQyxDQUEyQixlQUFlO1FBQzNGLElBQUksQ0FBQyxLQUFLLEdBQUcsdUJBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBeUMsa0JBQWtCO0lBQ2xHLENBQUM7SUFFRDs7O09BR0c7SUFDVyx3QkFBVyxHQUF6QixVQUEwQixhQUE2QjtRQUNuRCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ3BEO0lBQ0wsQ0FBQztJQUtELHNCQUFrQix3QkFBUTtRQUgxQjs7V0FFRzthQUNIO1lBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2pCLHNCQUFZLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyw0QkFBUyxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztnQkFDakUsT0FBTzthQUNWO1lBQ0QsT0FBTyxJQUFJLENBQUMsU0FB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QUNELEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLHdCQUFjLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsa0NBQVcsR0FBWCxVQUFZLEtBQVU7UUFDbEIsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFHRCxzQkFBSSx3Q0FBYzthQUFsQjtZQUNJLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUNoQyxDQUFDO2FBRUQsVUFBbUIsS0FBeUI7WUFDeEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDakMsQ0FBQzs7O09BSkE7SUFLTCxtQkFBQztBQUFELENBNUtBLEFBNEtDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lDb25maWdNYW5hZ2VyfSBmcm9tIFwiLi4vQ29uZmlnL0lDb25maWcvSUNvbmZpZ01hbmFnZXJcIjtcclxuaW1wb3J0IHtFcnJvclR5cGV9IGZyb20gJy4uL0Vycm9yL0VudW0vRXJyb3JNYW5hZ2VyRW51bSdcclxuaW1wb3J0IEVycm9yTWFuYWdlciBmcm9tICcuLi9FcnJvci9FcnJvck1hbmFnZXInXHJcbmltcG9ydCBMb2FkUmVzTWFuYWdlciBmcm9tICcuLi9Mb2FkUmVzb3VyY2VzL0xvYWRSZXNNYW5hZ2VyJ1xyXG5pbXBvcnQge1NjZW5lU3R5bGUsIFNjZW5lRGlyZWN0aW9uVHlwZX0gZnJvbSAnLi9FbnVtL1NjZW5lU3R5bGUnXHJcbmltcG9ydCB7SVNjZW5lTWFuYWdlcn0gZnJvbSBcIi4vSVNjZW5lL0lTY2VuZU1hbmFnZXJcIjtcclxuaW1wb3J0IFNjZW5lRGlyZWN0aW9uQ2hhbmdlTm90aWZpY2F0aW9uIGZyb20gXCIuL1NjZW5lTm90aWZpY2F0aW9uL1NjZW5lRGlyZWN0aW9uQ2hhbmdlTm90aWZpY2F0aW9uXCI7XHJcbmltcG9ydCBTY2VuZURpcmVjdGlvbkNoYW5nZU9ic2VydmVyIGZyb20gXCIuL1NjZW5lT2JzZXJ2ZXIvU2NlbmVEaXJlY3Rpb25DaGFuZ2VPYnNlcnZlclwiO1xyXG5pbXBvcnQgU2NlbmVTaXplQ2hhbmdlTGlzdGVuZXIgZnJvbSAnLi9TY2VuZVNpemVDaGFuZ2VMaXN0ZW5lcidcclxuaW1wb3J0IFNjZW5lU3R5bGVIYW5kbGVyIGZyb20gJy4vU2NlbmVTdHlsZUhhbmRsZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZU1hbmFnZXIgaW1wbGVtZW50cyBJU2NlbmVNYW5hZ2VyIHtcclxuXHJcbiAgICBwcml2YXRlIGNvbmZpZ01hbmFnZXI6IElDb25maWdNYW5hZ2VyO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBJU2NlbmVNYW5hZ2VyO1xyXG4gICAgcHJpdmF0ZSBzdHlsZTogU2NlbmVTdHlsZSB8IElTY2VuZVN0eWxlO1xyXG4gICAgcHJpdmF0ZSBfZGVzaWduV2lkdGg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2Rlc2lnbkhlaWdodDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBzY2VuZVNpemVDaGFuZ2VMaXN0ZW5lcjogU2NlbmVTaXplQ2hhbmdlTGlzdGVuZXI7XHJcbiAgICBwcml2YXRlIHNjZW5lU3R5bGVIYW5kbGVyOiBTY2VuZVN0eWxlSGFuZGxlcjtcclxuICAgIHByaXZhdGUgX3NjZW5lRGlyZWN0aW9uOiBTY2VuZURpcmVjdGlvblR5cGU7XHJcbiAgICBwcml2YXRlIHNjZW5lQ2hhbmdlRGlyZWN0aW9uT2JzZXJ2ZXI6IFNjZW5lRGlyZWN0aW9uQ2hhbmdlT2JzZXJ2ZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcihjb25maWdNYW5hZ2VyOiBJQ29uZmlnTWFuYWdlcikge1xyXG4gICAgICAgIHRoaXMuY29uZmlnTWFuYWdlciA9IGNvbmZpZ01hbmFnZXI7XHJcbiAgICAgICAgdGhpcy5fZGVzaWduV2lkdGggPSAxMjgwOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Yid5aeL6aCQ6Kit5a+s5bqmXHJcbiAgICAgICAgdGhpcy5fZGVzaWduSGVpZ2h0ID0gNzIwOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Yid5aeL6aCQ6Kit6auY5bqmXHJcbiAgICAgICAgdGhpcy5zY2VuZVNpemVDaGFuZ2VMaXN0ZW5lciA9IG5ldyBTY2VuZVNpemVDaGFuZ2VMaXN0ZW5lcigpOyAgICAgICAgICAgICAgICAgICAgICAgICAvL+WvpuS+i+WMluebo+iBveWZqFxyXG4gICAgICAgIHRoaXMuc2NlbmVTdHlsZUhhbmRsZXIgPSBuZXcgU2NlbmVTdHlsZUhhbmRsZXIoKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WvpuS+i+WMlnNjZW5l5qij5byP5bCO5ZCR5ZmoXHJcbiAgICAgICAgdGhpcy5zdHlsZSA9IFNjZW5lU3R5bGUuSG9yaXpvbnRhbDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Yid5aeL6aCQ6Kitc2NlbmXnlavpnaLoqr/mlbTnmoTmqKHlvI9cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqICDmh7bmvKLliqDovIlcclxuICAgICAqICDliJ3lp4vljJYs5Y+q6K6T5LiA5YCL5bCI5qGI55Si55Sf5LiA5qyh6KmyY2xhc3NcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzZXRJbnN0YW5jZShjb25maWdNYW5hZ2VyOiBJQ29uZmlnTWFuYWdlcikge1xyXG4gICAgICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgU2NlbmVNYW5hZ2VyKGNvbmZpZ01hbmFnZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqICDnjbLlj5blt7LntpPliJ3lp4vljJbnmoTpnZzmhYvlr6bkvotjbGFzc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBpbnN0YW5jZSgpOiBJU2NlbmVNYW5hZ2VyIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2luc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIEVycm9yTWFuYWdlci5pbnN0YW5jZS5leGVjdXRlRXJyb3IoRXJyb3JUeXBlLlNjZW5lRlcsIFwi6Kmy6aGe5bCa5pyq5a+m5L6L5YyWXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGNhdmVycyDoqK3oqIjlr6zluqZcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aFxyXG4gICAgICogQHJldHVybiB7dGhpc31cclxuICAgICAqL1xyXG4gICAgc2V0RGVzaWduV2lkdGgod2lkdGg6IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIHRoaXMuX2Rlc2lnbldpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBjYXZlcnMg6Kit6KiI6auY5bqmXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0XHJcbiAgICAgKiBAcmV0dXJuIHt0aGlzfVxyXG4gICAgICovXHJcbiAgICBzZXREZXNpZ25IZWlnaHQoaGVpZ2h0OiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLl9kZXNpZ25IZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmm7TmlrDnlbbliY3npLrphY3lr6zpq5gs5pyD5L+d5a2Y5LiK5qyh55qEc2NlbmXmm7Tli5XmqKHlvI9cclxuICAgICAqIOWmguS4jea3u+WKoOWPg+aVuCznrKzkuIDmrKHlsIfmnIPkvb/nlKjpoJDoqK3mqKHlvI/mm7Tli5VcclxuICAgICAqIEBwYXJhbSB7U2NlbmVTdHlsZSB8IEZ1bmN0aW9ufSBzdHlsZSA6IOWPr+iHquWumue+qeabtOWLleaoo+W8jyzkvYblr6bkvZwo5LuL6Z2iKUlTY2VuZVN0eWxlXHJcbiAgICAgKiBAcmV0dXJuIHt0aGlzfVxyXG4gICAgICovXHJcbiAgICB1cGRhdGVTaXplKHN0eWxlPzogU2NlbmVTdHlsZSB8IElTY2VuZVN0eWxlKTogdGhpcyB7XHJcbiAgICAgICAgaWYgKHN0eWxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3R5bGUgPSBzdHlsZTtcclxuICAgICAgICAgICAgc3dpdGNoIChzdHlsZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBTY2VuZVN0eWxlLkhvcml6b250YWw6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVTY2VuZUNoYW5nZURpcmVjdGlvbkV2ZW50TGlzdGVuZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zY2VuZURpcmVjdGlvbiA9IFNjZW5lRGlyZWN0aW9uVHlwZS5QT1JUUkFJVDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgU2NlbmVTdHlsZS5WZXJ0aWNhbDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZVNjZW5lQ2hhbmdlRGlyZWN0aW9uRXZlbnRMaXN0ZW5lcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NjZW5lRGlyZWN0aW9uID0gU2NlbmVEaXJlY3Rpb25UeXBlLkxBTkRTQ0FQRTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgU2NlbmVTdHlsZS5BVVRPOlxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjZW5lQ2hhbmdlRGlyZWN0aW9uRXZlbnRMaXN0ZW5lcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2NlbmVTdHlsZUhhbmRsZXIuZ2V0U3R5bGUodGhpcy5zdHlsZSwgdGhpcy5fZGVzaWduV2lkdGgsIHRoaXMuX2Rlc2lnbkhlaWdodCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlpoLmnpzkvb/nlKjogIXmm7TmlLnonqLluZXlvI/phY3luqbmmYIs5Yik5pa355W25YmN5piv5ZCm6ZaL5ZWfU2NlbmVDaGFuZ2VEaXJlY3Rpb25FdmVudExpc3RlbmVy55uj6IG9XHJcbiAgICAgKiDlpoLmnpzmnIks5LiU5Lim5LiN5pivU2NlbmVTdHlsZS5BVVRP6aGe5Z6LLOWwh+iHquWLlemXnOmWieiogumWsVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZW1vdmVTY2VuZUNoYW5nZURpcmVjdGlvbkV2ZW50TGlzdGVuZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2NlbmVDaGFuZ2VEaXJlY3Rpb25PYnNlcnZlcikge1xyXG4gICAgICAgICAgICBTY2VuZURpcmVjdGlvbkNoYW5nZU5vdGlmaWNhdGlvblxyXG4gICAgICAgICAgICAgICAgLmluc3RhbmNlLnVuc3Vic2NyaWJlKHRoaXMuc2NlbmVDaGFuZ2VEaXJlY3Rpb25PYnNlcnZlcik7XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmVDaGFuZ2VEaXJlY3Rpb25PYnNlcnZlciA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6Ieq55m855uj6IG9LOeVtueUqOaItumWi+WVn0FVVE/mqKPlvI8s5oiW6Ieq6KiC5qij5byP5pmC5omN5pyD6ZaL5ZWfXHJcbiAgICAgKiDnlbbmjqjms6LnmbzpgIHpgY7kvobmmYLlsIfmnIPmm7TmlrDnlbbliY0gc2NlbmVEaXJlY3Rpb25UeXBlXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHNjZW5lQ2hhbmdlRGlyZWN0aW9uRXZlbnRMaXN0ZW5lcigpIHtcclxuICAgICAgICAvL+WmguaenHNjZW5lQ2hhbmdlRGlyZWN0aW9uT2JzZXJ2ZXLku6XlibXlu7rpgY4s5Luj6KGo5bey6ZaL5aeL55uj6IG95LitLOWwh+ebtOaOpemboumWiyzkuI3ph43opIfoqILplrFcclxuICAgICAgICBpZiAodGhpcy5zY2VuZUNoYW5nZURpcmVjdGlvbk9ic2VydmVyKSByZXR1cm47XHJcbiAgICAgICAgU2NlbmVEaXJlY3Rpb25DaGFuZ2VOb3RpZmljYXRpb25cclxuICAgICAgICAgICAgLmluc3RhbmNlLnN1YnNjcmliZSh0aGlzLmdldFNjZW5lQ2hhbmdlRGlyZWN0aW9uT2JzZXJ2ZXIoKSwgdHJ1ZSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOW7uueri3NjZW5l5pa55ZCR5pS56K6K6KeA5a+f6ICFLOS4pue2geWumuaUueiuinNjZW5l5pa55ZCR5pmCLOabtOaWsOeVtuWJjemBiuaIsuaWueWQkeeLgOaFi1xyXG4gICAgICogQHJldHVybnMge1NjZW5lRGlyZWN0aW9uQ2hhbmdlT2JzZXJ2ZXJ9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGdldFNjZW5lQ2hhbmdlRGlyZWN0aW9uT2JzZXJ2ZXIoKTogU2NlbmVEaXJlY3Rpb25DaGFuZ2VPYnNlcnZlciB7XHJcbiAgICAgICAgdGhpcy5zY2VuZUNoYW5nZURpcmVjdGlvbk9ic2VydmVyID0gbmV3IFNjZW5lRGlyZWN0aW9uQ2hhbmdlT2JzZXJ2ZXIoKHR5cGUgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNjZW5lRGlyZWN0aW9uKHR5cGUpO1xyXG4gICAgICAgIH0pLCB0cnVlKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5zY2VuZUNoYW5nZURpcmVjdGlvbk9ic2VydmVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pu05paw55W25YmN6YGK5oiy5pa55ZCRXHJcbiAgICAgKiBAcGFyYW0ge1NjZW5lRGlyZWN0aW9uVHlwZX0gZGlyZWN0aW9uXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdXBkYXRlU2NlbmVEaXJlY3Rpb24oZGlyZWN0aW9uOiBTY2VuZURpcmVjdGlvblR5cGUpIHtcclxuICAgICAgICB0aGlzLl9zY2VuZURpcmVjdGlvbiA9IGRpcmVjdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOebo+iBveeVtuWJjWNhdmVyc+aYr+WQpuacieabtOWLleWkp+WwjyzlpoLmnpzmnInlsIfmnIPoh6rli5Xmm7TmlrDnlbbliY3mmK/phY3lr6zpq5hcclxuICAgICAqIOWwh+acg+avlOeFp+S4iuasoeabtOWLleeahOaoo+W8j+mAsuihjOabtOWLlVxyXG4gICAgICog5aaC5p6c6ZyA5rGC5pu05YuV5qij5byPLOmgiOWFiOabtOaWsCB1cGRhdGVTaXplKClcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lIDog5pu05paw55qE6aC7546HIOWWruS9jeavq+enkiBtc1xyXG4gICAgICovXHJcbiAgICBkZXNpZ25TY2VuZVNpemVMaXN0ZW5lckF1dG9TdGFydCh0aW1lOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnNjZW5lU2l6ZUNoYW5nZUxpc3RlbmVyLmRlc2lnblNjZW5lRXZlbnRMaXN0ZW5lcih0aW1lKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOabtOaPm+WgtOaZr1xyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgOiDloLTmma/os4fmupDlkI3nqLHngrrkvaBSZXPli5XmhYvliqDovInnmoToh6roqILnvqnnmoRzY2VuZeWQjeeosVxyXG4gICAgICovXHJcbiAgICBjaGFuZ2VTY2VuZShuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoIUxvYWRSZXNNYW5hZ2VyLmluc3RhbmNlLnNjZW5lUmVzLmhhcyhuYW1lKSkge1xyXG4gICAgICAgICAgICBFcnJvck1hbmFnZXIuaW5zdGFuY2UuZXhlY3V0ZUVycm9yKEVycm9yVHlwZS5TY2VuZUZXLCBcIuWKoOi8ieS4jeWIsOS9oOeahFNjZW5l6LOH5rqQLOiri+aqouafpeipsuizh+a6kOWQjeaYr+WQpuato+eiulwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2MuZGlyZWN0b3IucnVuU2NlbmUoTG9hZFJlc01hbmFnZXIuaW5zdGFuY2Uuc2NlbmVSZXMuZ2V0KG5hbWUpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOa4hemZpOipsnNjZW5l5omA5pyJ5YuV5L2cXHJcbiAgICAgKiBAcGFyYW0gc2NlbmVcclxuICAgICAqL1xyXG4gICAgcmVtb3ZlU2NlbmUoc2NlbmU6IGFueSkge1xyXG4gICAgICAgIHNjZW5lLmRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0IHNjZW5lRGlyZWN0aW9uKCk6IFNjZW5lRGlyZWN0aW9uVHlwZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NjZW5lRGlyZWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBzY2VuZURpcmVjdGlvbih2YWx1ZTogU2NlbmVEaXJlY3Rpb25UeXBlKSB7XHJcbiAgICAgICAgdGhpcy5fc2NlbmVEaXJlY3Rpb24gPSB2YWx1ZTtcclxuICAgIH1cclxufSJdfQ==