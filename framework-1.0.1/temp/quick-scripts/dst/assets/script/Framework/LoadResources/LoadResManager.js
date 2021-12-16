
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/LoadResources/LoadResManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c197fmHFRZO64ve0NYFY8k2', 'LoadResManager');
// script/Framework/LoadResources/LoadResManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorManagerEnum_1 = require("../Error/Enum/ErrorManagerEnum");
var ErrorManager_1 = require("../Error/ErrorManager");
var Util_1 = require("../GlobalMethod/Util");
var WebRequestManager_1 = require("../WebRequest/WebRequestManager");
var LoadTypeHandler_1 = require("./LoadTypeHandler");
var LoadResManager = /** @class */ (function () {
    function LoadResManager(configManager) {
        this.configManager = configManager;
        this.loadTypeHandler = new LoadTypeHandler_1.default(); //配發要用哪個class執行載入動作
        this._initialLoadState = new Map(); //主加載狀態
        this._secondaryLoadState = new Map(); //次加載狀態
        this._imgRes = new Map(); //圖片
        this._spineRes = new Map(); //骨架
        this._readFileRes = new Map(); //text文件
        this._prefabRes = new Map(); //預載體
        this.callFun = new Map(); //callback方法
        this._musicRes = new Map(); //音樂
        this._scriptRes = new Set(); //外部腳本保存URL地址,單存判斷是否重複加載
        this._sceneRes = new Map(); //保存scene場場景資源
        this.count = 0; //初始要載入數量
        this.allProgress = 0; //初始加載進度
        this.beforeProgress = 0; //初始上次加載的進度
        this.allProgressEndCount = 0; //因精準度問題,額外判斷是否所有資源都加載完畢
    }
    /**
     *  懶漢加載
     *  初始化,只讓一個專案產生一次該class
     */
    LoadResManager.setInstance = function (configManager) {
        if (!this._instance) {
            this._instance = new LoadResManager(configManager);
        }
    };
    Object.defineProperty(LoadResManager, "instance", {
        /**
         *  獲取已經初始化的靜態實例class
         */
        get: function () {
            if (!this._instance) {
                ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.LoadErrorFW, "該類尚未實例化");
                return;
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 主資源加載物件,監聽是否有callback,隨之返回該狀態
     * @param name
     * @param progress 又加載了多少
     * @param state 該物件加載到幾趴
     */
    LoadResManager.prototype.loadMainEventCallback = function (name, progress, state) {
        this.onlyResEventCallback(name, state);
        //當前總加載進度
        this.allProgress += progress / this.count;
        if (this.allProgress >= 1)
            this.allProgress = 0.99; //精度問題,不回傳1
        //因為浮點數精度,由這裏額外判斷所有資源已加載完畢時,加載進度等於1
        if (state == 1) {
            this.allProgressEndCount += 1;
            if (this.allProgressEndCount == this.count) {
                this.allProgress = 1;
            }
        }
        //當前所有加載的總進度
        if (this.callFun.has(null)) {
            //預防多個重複進度回傳
            //判斷與上一個進度是一樣的話,將不執行回傳,等待有新進度近來
            if (Util_1.default.myFloor(this.beforeProgress, 2) == Util_1.default.myFloor(this.allProgress, 2)) {
                return;
            }
            else {
                this.beforeProgress = this.allProgress;
                //回傳當前進度,將精度將低為小數點後兩位
                this.callFun.get(null)(Util_1.default.myFloor(this.allProgress, 2));
                if (this.allProgress >= 1) {
                    //當全部加載完後,清除當前加載多少件東西的計數
                    this.count = 0;
                    //事件結束,清除該是保存的function
                    this.callFun.delete(null);
                }
            }
        }
    };
    /**
     * 次資源加載物件,監聽是否有callback,隨之返回該狀態
     * 注意,該狀態無總資源監聽回傳事件
     * @param {string} name
     * @param {number} state
     */
    LoadResManager.prototype.loadSecondaryEventCallback = function (name, state) {
        this.onlyResEventCallback(name, state);
    };
    /**
     * 單一資源返回判斷,用戶是否有添加callback參數
     * @param {string} name
     * @param {number} state
     * @private
     */
    LoadResManager.prototype.onlyResEventCallback = function (name, state) {
        //如果有綁訂的回傳方法時,將回傳該資源當前的加載進度
        if (this.callFun.has(name)) {
            this.callFun.get(name)(state);
            if (state == 1) {
                //事件結束,清除該是保存的function
                this.callFun.delete(name);
            }
        }
    };
    /**
     * 加載該資料夾底下所有資源 注意: 需存放於 resources中
     * @param {string} name : 自訂義拿取資源時的名稱
     * @param {LoadType} type : 要獲取的資源類型
     * @param {string} url : 要獲取的資源位置
     * @param {boolean} isLanguageUsed : 是否要使用語系位置
     * @return {this}
     */
    LoadResManager.prototype.loadAsset = function (name, type, url, isLanguageUsed) {
        this.count += 1;
        if (isLanguageUsed) {
            url = url + "/" + WebRequestManager_1.default.instance.UserLanguage;
        }
        this.loadTypeHandler.executeLoad(name, type, url);
        return this;
    };
    /**
     * 加載 該 assetBundle 底下資源
     * 使用此方法者,加載狀態存放次加載中 secondaryLoadState
     * 注意:須於UI勾選配置為Bundle資料夾
     * @param {string} name : 自訂義拿取資源時的名稱
     * @param {LoadType} type : 要獲取的資源類型
     * @param {string} url : 要獲取的資源位置
     * @param {boolean} isLanguageUsed : 是否要使用語系位置
     */
    LoadResManager.prototype.loadBundle = function (name, type, url, isLanguageUsed) {
        if (isLanguageUsed) {
            url = url + "/" + WebRequestManager_1.default.instance.UserLanguage;
        }
        this.loadTypeHandler.executeLoadBundle(name, type, url).then();
        return this;
    };
    /**
     * 保存使用者要callback的方法,當有回傳進度時將透過 loadEventCallback方法回傳進度
     * @param callFun
     * @param resName
     */
    LoadResManager.prototype.callback = function (callFun, resName) {
        if (resName) {
            if (this.callFun.has(resName)) {
                ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.LoadErrorFW, "如果拿取該資源進度,請勿重複callback");
                return;
            }
            this.callFun.set(resName, callFun);
            return this;
        }
        else {
            if (this.callFun.has(null)) {
                ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.LoadErrorFW, "如果拿取總進度,請勿在之前資源尚未加載完前,重複callback");
                return;
            }
            this.callFun.set(null, callFun);
        }
    };
    /**
     * 查看該資源是否已加載完畢
     * @param name
     * @param isMainResources
     */
    LoadResManager.prototype.getLoadState = function (name, isMainResources) {
        if (isMainResources) {
            return this._initialLoadState.get(name) == 1;
        }
        else {
            return this._initialLoadState.get(name) == 1;
        }
    };
    /**
     * 加載外部腳本
     * @param name
     * @param type
     * @param url
     */
    LoadResManager.prototype.loadExternalScript = function (name, type, url) {
        this.loadTypeHandler.executeLoadExternalScript(name, type, url);
        return this;
    };
    /**
     * 重置
     */
    LoadResManager.prototype.reset = function () {
        LoadResManager._instance = null;
    };
    Object.defineProperty(LoadResManager.prototype, "initialLoadState", {
        //--------------------------------------getter------------------------------------
        get: function () {
            return this._initialLoadState;
        },
        //--------------------------------------setter------------------------------------
        set: function (value) {
            this._initialLoadState = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadResManager.prototype, "secondaryLoadState", {
        get: function () {
            return this._secondaryLoadState;
        },
        set: function (value) {
            this._secondaryLoadState = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadResManager.prototype, "imgRes", {
        get: function () {
            return this._imgRes;
        },
        set: function (value) {
            this._imgRes = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadResManager.prototype, "spineRes", {
        get: function () {
            return this._spineRes;
        },
        set: function (value) {
            this._spineRes = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadResManager.prototype, "readFileRes", {
        get: function () {
            return this._readFileRes;
        },
        set: function (value) {
            this._readFileRes = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadResManager.prototype, "prefabRes", {
        get: function () {
            return this._prefabRes;
        },
        set: function (value) {
            this._prefabRes = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadResManager.prototype, "musicRes", {
        get: function () {
            return this._musicRes;
        },
        set: function (value) {
            this._musicRes = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadResManager.prototype, "scriptRes", {
        get: function () {
            return this._scriptRes;
        },
        set: function (value) {
            this._scriptRes = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoadResManager.prototype, "sceneRes", {
        get: function () {
            return this._sceneRes;
        },
        set: function (value) {
            this._sceneRes = value;
        },
        enumerable: false,
        configurable: true
    });
    return LoadResManager;
}());
exports.default = LoadResManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXExvYWRSZXNvdXJjZXNcXExvYWRSZXNNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsbUVBQXlEO0FBQ3pELHNEQUFpRDtBQUNqRCw2Q0FBd0M7QUFDeEMscUVBQStEO0FBRy9ELHFEQUFnRDtBQUVoRDtJQW1ESSx3QkFBb0IsYUFBNkI7UUFDN0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLHlCQUFlLEVBQUUsQ0FBQyxDQUF1QixtQkFBbUI7UUFDdkYsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksR0FBRyxFQUFrQixDQUFDLENBQWlCLE9BQU87UUFDM0UsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksR0FBRyxFQUFrQixDQUFDLENBQWUsT0FBTztRQUMzRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksR0FBRyxFQUF1QyxDQUFDLENBQU0sSUFBSTtRQUN4RSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksR0FBRyxFQUEyQixDQUFDLENBQWdCLElBQUk7UUFDeEUsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLEdBQUcsRUFBK0IsQ0FBQyxDQUFTLFFBQVE7UUFDNUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLEdBQUcsRUFBcUIsQ0FBQyxDQUFxQixLQUFLO1FBQ3pFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxHQUFHLEVBQXNDLENBQUMsQ0FBTyxZQUFZO1FBQ2hGLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxHQUFHLEVBQXdCLENBQUMsQ0FBbUIsSUFBSTtRQUN4RSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksR0FBRyxFQUFVLENBQUMsQ0FBZ0Msd0JBQXdCO1FBQzVGLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxHQUFHLEVBQXlCLENBQUMsQ0FBa0IsY0FBYztRQUNsRixJ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Q3pCLENBQUM7YUF4Q0QsVUFBYSxLQUFnQztZQUN6QyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQTtRQUMxQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHFDQUFTO2FBc0NiO1lBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFBO1FBQzFCLENBQUM7YUF4Q0QsVUFBYyxLQUFrQjtZQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQTtRQUMzQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLG9DQUFRO2FBc0NaO1lBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFBO1FBQ3pCLENBQUM7YUF4Q0QsVUFBYSxLQUFpQztZQUMxQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQTtRQUMxQixDQUFDOzs7T0FBQTtJQXVDTCxxQkFBQztBQUFELENBdFZBLEFBc1ZDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lDb25maWdNYW5hZ2VyfSBmcm9tIFwiLi4vQ29uZmlnL0lDb25maWcvSUNvbmZpZ01hbmFnZXJcIjtcclxuaW1wb3J0IHtFcnJvclR5cGV9IGZyb20gXCIuLi9FcnJvci9FbnVtL0Vycm9yTWFuYWdlckVudW1cIjtcclxuaW1wb3J0IEVycm9yTWFuYWdlciBmcm9tIFwiLi4vRXJyb3IvRXJyb3JNYW5hZ2VyXCI7XHJcbmltcG9ydCBVdGlsIGZyb20gXCIuLi9HbG9iYWxNZXRob2QvVXRpbFwiO1xyXG5pbXBvcnQgV2ViUmVxdWVzdE1hbmFnZXIgZnJvbSAnLi4vV2ViUmVxdWVzdC9XZWJSZXF1ZXN0TWFuYWdlcidcclxuaW1wb3J0IHtMb2FkVHlwZX0gZnJvbSBcIi4vRW51bS9Mb2FkRW51bVwiO1xyXG5pbXBvcnQgSUxvYWRSZXNNYW5hZ2VyIGZyb20gXCIuL0lMb2FkL0lMb2FkUmVzTWFuYWdlclwiO1xyXG5pbXBvcnQgTG9hZFR5cGVIYW5kbGVyIGZyb20gXCIuL0xvYWRUeXBlSGFuZGxlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9hZFJlc01hbmFnZXIgaW1wbGVtZW50cyBJTG9hZFJlc01hbmFnZXIge1xyXG5cclxuICAgIHByaXZhdGUgY29uZmlnTWFuYWdlcjogSUNvbmZpZ01hbmFnZXI7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IElMb2FkUmVzTWFuYWdlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WKoOi8ieeJqeS7tumAsuW6plxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9pbml0aWFsTG9hZFN0YXRlOiBNYXA8c3RyaW5nLCBudW1iZXI+O1xyXG4gICAgLyoqXHJcbiAgICAgKiDmrKHliqDovIks5Y+v5Lul5Zyo6YKE5pyq5Yqg6LyJ5a6M5oiQ5pmCLOS5n+iDvemAsuWFpU1haW5HYW1lIFNjZW5lXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX3NlY29uZGFyeUxvYWRTdGF0ZTogTWFwPHN0cmluZywgbnVtYmVyPjtcclxuICAgIC8qKlxyXG4gICAgICogaW1n54mp5Lu25L+d5a2YXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX2ltZ1JlczogTWFwPHN0cmluZywgTWFwPHN0cmluZywgY2MuU3ByaXRlRnJhbWU+PjtcclxuICAgIC8qKlxyXG4gICAgICogc3BpbmUg54mp5Lu25L+d5a2YXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX3NwaW5lUmVzOiBNYXA8c3RyaW5nLCBzcC5Ta2VsZXRvbkRhdGE+O1xyXG4gICAgLyoqXHJcbiAgICAgKiDoroDlj5blvoznmoTmlofku7bmqpTmoYgs5L+d5a2Y5L2N572uXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX3JlYWRGaWxlUmVzOiBNYXA8c3RyaW5nLCBNYXA8c3RyaW5nLCBzdHJpbmc+PjtcclxuICAgIC8qKlxyXG4gICAgICog6K6A5Y+W5b6M55qEUHJlZmFiLOS/neWtmOS9jee9rlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9wcmVmYWJSZXM6IE1hcDxzdHJpbmcsIGNjLlByZWZhYj47XHJcbiAgICAvKipcclxuICAgICAqIOmfs+aoguS/neWtmOS9jee9rlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9tdXNpY1JlczogTWFwPHN0cmluZywgY2MuQXVkaW9DbGlwPjtcclxuICAgIC8qKlxyXG4gICAgICog5aSW6YOo6IWz5pys5L+d5a2YVVJM5Zyw5Z2ALOWWruWtmOWIpOaWt+aYr+WQpumHjeikh+WKoOi8iVxyXG4gICAgICogQHR5cGUge1NldDxzdHJpbmc+fVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9zY3JpcHRSZXM6IFNldDxzdHJpbmc+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5aC05pmv5L+d5a2Y5L2N572uXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX3NjZW5lUmVzOiBNYXA8c3RyaW5nLCBjYy5TY2VuZUFzc2V0PlxyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbG9hZFR5cGVIYW5kbGVyOiBMb2FkVHlwZUhhbmRsZXI7XHJcbiAgICBwcml2YXRlIGNhbGxGdW46IE1hcDxzdHJpbmcsIChwcm9ncmVzczogbnVtYmVyKSA9PiB2b2lkPjtcclxuICAgIHByaXZhdGUgY291bnQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgYWxsUHJvZ3Jlc3M6IG51bWJlcjtcclxuICAgIHByaXZhdGUgYmVmb3JlUHJvZ3Jlc3M6IG51bWJlcjtcclxuICAgIHByaXZhdGUgYWxsUHJvZ3Jlc3NFbmRDb3VudDogbnVtYmVyO1xyXG5cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoY29uZmlnTWFuYWdlcjogSUNvbmZpZ01hbmFnZXIpIHtcclxuICAgICAgICB0aGlzLmNvbmZpZ01hbmFnZXIgPSBjb25maWdNYW5hZ2VyO1xyXG4gICAgICAgIHRoaXMubG9hZFR5cGVIYW5kbGVyID0gbmV3IExvYWRUeXBlSGFuZGxlcigpOyAgICAgICAgICAgICAgICAgICAgICAgLy/phY3nmbzopoHnlKjlk6rlgItjbGFzc+Wft+ihjOi8ieWFpeWLleS9nFxyXG4gICAgICAgIHRoaXMuX2luaXRpYWxMb2FkU3RhdGUgPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpOyAgICAgICAgICAgICAgICAgLy/kuLvliqDovInni4DmhYtcclxuICAgICAgICB0aGlzLl9zZWNvbmRhcnlMb2FkU3RhdGUgPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpOyAgICAgICAgICAgICAgIC8v5qyh5Yqg6LyJ54uA5oWLXHJcbiAgICAgICAgdGhpcy5faW1nUmVzID0gbmV3IE1hcDxzdHJpbmcsIE1hcDxzdHJpbmcsIGNjLlNwcml0ZUZyYW1lPj4oKTsgICAgICAvL+WclueJh1xyXG4gICAgICAgIHRoaXMuX3NwaW5lUmVzID0gbmV3IE1hcDxzdHJpbmcsIHNwLlNrZWxldG9uRGF0YT4oKTsgICAgICAgICAgICAgICAgLy/pqqjmnrZcclxuICAgICAgICB0aGlzLl9yZWFkRmlsZVJlcyA9IG5ldyBNYXA8c3RyaW5nLCBNYXA8c3RyaW5nLCBzdHJpbmc+PigpOyAgICAgICAgIC8vdGV4dOaWh+S7tlxyXG4gICAgICAgIHRoaXMuX3ByZWZhYlJlcyA9IG5ldyBNYXA8c3RyaW5nLCBjYy5QcmVmYWI+KCk7ICAgICAgICAgICAgICAgICAgICAgLy/poJDovInpq5RcclxuICAgICAgICB0aGlzLmNhbGxGdW4gPSBuZXcgTWFwPHN0cmluZywgKHByb2dyZXNzOiBudW1iZXIpID0+IHZvaWQ+KCk7ICAgICAgIC8vY2FsbGJhY2vmlrnms5VcclxuICAgICAgICB0aGlzLl9tdXNpY1JlcyA9IG5ldyBNYXA8c3RyaW5nLCBjYy5BdWRpb0NsaXA+KCk7ICAgICAgICAgICAgICAgICAgIC8v6Z+z5qiCXHJcbiAgICAgICAgdGhpcy5fc2NyaXB0UmVzID0gbmV3IFNldDxzdHJpbmc+KCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WklumDqOiFs+acrOS/neWtmFVSTOWcsOWdgCzllq7lrZjliKTmlrfmmK/lkKbph43opIfliqDovIlcclxuICAgICAgICB0aGlzLl9zY2VuZVJlcyA9IG5ldyBNYXA8c3RyaW5nLCBjYy5TY2VuZUFzc2V0PigpOyAgICAgICAgICAgICAgICAgIC8v5L+d5a2Yc2NlbmXloLTloLTmma/os4fmupBcclxuICAgICAgICB0aGlzLmNvdW50ID0gMDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Yid5aeL6KaB6LyJ5YWl5pW46YePXHJcbiAgICAgICAgdGhpcy5hbGxQcm9ncmVzcyA9IDA7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WIneWni+WKoOi8iemAsuW6plxyXG4gICAgICAgIHRoaXMuYmVmb3JlUHJvZ3Jlc3MgPSAwOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/liJ3lp4vkuIrmrKHliqDovInnmoTpgLLluqZcclxuICAgICAgICB0aGlzLmFsbFByb2dyZXNzRW5kQ291bnQgPSAwOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Zug57K+5rqW5bqm5ZWP6aGMLOmhjeWkluWIpOaWt+aYr+WQpuaJgOacieizh+a6kOmDveWKoOi8ieWujOeVolxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqICDmh7bmvKLliqDovIlcclxuICAgICAqICDliJ3lp4vljJYs5Y+q6K6T5LiA5YCL5bCI5qGI55Si55Sf5LiA5qyh6KmyY2xhc3NcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzZXRJbnN0YW5jZShjb25maWdNYW5hZ2VyOiBJQ29uZmlnTWFuYWdlcikge1xyXG4gICAgICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgTG9hZFJlc01hbmFnZXIoY29uZmlnTWFuYWdlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqICDnjbLlj5blt7LntpPliJ3lp4vljJbnmoTpnZzmhYvlr6bkvotjbGFzc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBpbnN0YW5jZSgpOiBJTG9hZFJlc01hbmFnZXIge1xyXG4gICAgICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgRXJyb3JNYW5hZ2VyLmluc3RhbmNlLmV4ZWN1dGVFcnJvcihFcnJvclR5cGUuTG9hZEVycm9yRlcsIFwi6Kmy6aGe5bCa5pyq5a+m5L6L5YyWXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOS4u+izh+a6kOWKoOi8ieeJqeS7tiznm6Pogb3mmK/lkKbmnIljYWxsYmFjayzpmqjkuYvov5Tlm57oqbLni4DmhYtcclxuICAgICAqIEBwYXJhbSBuYW1lXHJcbiAgICAgKiBAcGFyYW0gcHJvZ3Jlc3Mg5Y+I5Yqg6LyJ5LqG5aSa5bCRXHJcbiAgICAgKiBAcGFyYW0gc3RhdGUg6Kmy54mp5Lu25Yqg6LyJ5Yiw5bm+6La0XHJcbiAgICAgKi9cclxuICAgIGxvYWRNYWluRXZlbnRDYWxsYmFjayhuYW1lOiBzdHJpbmcsIHByb2dyZXNzOiBudW1iZXIsIHN0YXRlOiBudW1iZXIpIHtcclxuXHJcbiAgICAgICAgdGhpcy5vbmx5UmVzRXZlbnRDYWxsYmFjayhuYW1lLCBzdGF0ZSk7XHJcbiAgICAgICAgLy/nlbbliY3nuL3liqDovInpgLLluqZcclxuICAgICAgICB0aGlzLmFsbFByb2dyZXNzICs9IHByb2dyZXNzIC8gdGhpcy5jb3VudDtcclxuICAgICAgICBpZiAodGhpcy5hbGxQcm9ncmVzcyA+PSAxKSB0aGlzLmFsbFByb2dyZXNzID0gMC45OTsvL+eyvuW6puWVj+mhjCzkuI3lm57lgrMxXHJcblxyXG4gICAgICAgIC8v5Zug54K65rWu6bue5pW457K+5bqmLOeUsemAmeijj+mhjeWkluWIpOaWt+aJgOacieizh+a6kOW3suWKoOi8ieWujOeVouaZgizliqDovInpgLLluqbnrYnmlrwxXHJcbiAgICAgICAgaWYgKHN0YXRlID09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5hbGxQcm9ncmVzc0VuZENvdW50ICs9IDE7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFsbFByb2dyZXNzRW5kQ291bnQgPT0gdGhpcy5jb3VudCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGxQcm9ncmVzcyA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v55W25YmN5omA5pyJ5Yqg6LyJ55qE57i96YCy5bqmXHJcbiAgICAgICAgaWYgKHRoaXMuY2FsbEZ1bi5oYXMobnVsbCkpIHtcclxuXHJcbiAgICAgICAgICAgIC8v6aCQ6Ziy5aSa5YCL6YeN6KSH6YCy5bqm5Zue5YKzXHJcbiAgICAgICAgICAgIC8v5Yik5pa36IiH5LiK5LiA5YCL6YCy5bqm5piv5LiA5qij55qE6KmxLOWwh+S4jeWft+ihjOWbnuWCsyznrYnlvoXmnInmlrDpgLLluqbov5HkvoZcclxuICAgICAgICAgICAgaWYgKFV0aWwubXlGbG9vcih0aGlzLmJlZm9yZVByb2dyZXNzLCAyKSA9PSBVdGlsLm15Rmxvb3IodGhpcy5hbGxQcm9ncmVzcywgMikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iZWZvcmVQcm9ncmVzcyA9IHRoaXMuYWxsUHJvZ3Jlc3M7XHJcbiAgICAgICAgICAgICAgICAvL+WbnuWCs+eVtuWJjemAsuW6pizlsIfnsr7luqblsIfkvY7ngrrlsI/mlbjpu57lvozlhankvY1cclxuICAgICAgICAgICAgICAgIHRoaXMuY2FsbEZ1bi5nZXQobnVsbCkoVXRpbC5teUZsb29yKHRoaXMuYWxsUHJvZ3Jlc3MsIDIpKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFsbFByb2dyZXNzID49IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+eVtuWFqOmDqOWKoOi8ieWujOW+jCzmuIXpmaTnlbbliY3liqDovInlpJrlsJHku7bmnbHopb/nmoToqIjmlbhcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvdW50ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAvL+S6i+S7tue1kOadnyzmuIXpmaToqbLmmK/kv53lrZjnmoRmdW5jdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FsbEZ1bi5kZWxldGUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmrKHos4fmupDliqDovInnianku7Ys55uj6IG95piv5ZCm5pyJY2FsbGJhY2ss6Zqo5LmL6L+U5Zue6Kmy54uA5oWLXHJcbiAgICAgKiDms6jmhI8s6Kmy54uA5oWL54Sh57i96LOH5rqQ55uj6IG95Zue5YKz5LqL5Lu2XHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHN0YXRlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsb2FkU2Vjb25kYXJ5RXZlbnRDYWxsYmFjayhuYW1lOiBzdHJpbmcsIHN0YXRlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLm9ubHlSZXNFdmVudENhbGxiYWNrKG5hbWUsIHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWWruS4gOizh+a6kOi/lOWbnuWIpOaWtyznlKjmiLbmmK/lkKbmnInmt7vliqBjYWxsYmFja+WPg+aVuFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzdGF0ZVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBvbmx5UmVzRXZlbnRDYWxsYmFjayhuYW1lOiBzdHJpbmcsIHN0YXRlOiBudW1iZXIpIHtcclxuXHJcbiAgICAgICAgLy/lpoLmnpzmnInntoHoqILnmoTlm57lgrPmlrnms5XmmYIs5bCH5Zue5YKz6Kmy6LOH5rqQ55W25YmN55qE5Yqg6LyJ6YCy5bqmXHJcbiAgICAgICAgaWYgKHRoaXMuY2FsbEZ1bi5oYXMobmFtZSkpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2FsbEZ1bi5nZXQobmFtZSkoc3RhdGUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHN0YXRlID09IDEpIHtcclxuICAgICAgICAgICAgICAgIC8v5LqL5Lu257WQ5p2fLOa4hemZpOipsuaYr+S/neWtmOeahGZ1bmN0aW9uXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGxGdW4uZGVsZXRlKG5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWKoOi8ieipsuizh+aWmeWkvuW6leS4i+aJgOacieizh+a6kCDms6jmhI86IOmcgOWtmOaUvuaWvCByZXNvdXJjZXPkuK1cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIDog6Ieq6KiC576p5ou/5Y+W6LOH5rqQ5pmC55qE5ZCN56ixXHJcbiAgICAgKiBAcGFyYW0ge0xvYWRUeXBlfSB0eXBlIDog6KaB542y5Y+W55qE6LOH5rqQ6aGe5Z6LXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIDog6KaB542y5Y+W55qE6LOH5rqQ5L2N572uXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzTGFuZ3VhZ2VVc2VkIDog5piv5ZCm6KaB5L2/55So6Kqe57O75L2N572uXHJcbiAgICAgKiBAcmV0dXJuIHt0aGlzfVxyXG4gICAgICovXHJcbiAgICBsb2FkQXNzZXQobmFtZTogc3RyaW5nLCB0eXBlOiBMb2FkVHlwZSwgdXJsOiBzdHJpbmcsIGlzTGFuZ3VhZ2VVc2VkPzogYm9vbGVhbik6IHRoaXMge1xyXG4gICAgICAgIHRoaXMuY291bnQgKz0gMTtcclxuICAgICAgICBpZiAoaXNMYW5ndWFnZVVzZWQpIHtcclxuICAgICAgICAgICAgdXJsID0gYCR7dXJsfS8ke1dlYlJlcXVlc3RNYW5hZ2VyLmluc3RhbmNlLlVzZXJMYW5ndWFnZX1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxvYWRUeXBlSGFuZGxlci5leGVjdXRlTG9hZChuYW1lLCB0eXBlLCB1cmwpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6LyJIOipsiBhc3NldEJ1bmRsZSDlupXkuIvos4fmupBcclxuICAgICAqIOS9v+eUqOatpOaWueazleiAhSzliqDovInni4DmhYvlrZjmlL7mrKHliqDovInkuK0gc2Vjb25kYXJ5TG9hZFN0YXRlXHJcbiAgICAgKiDms6jmhI866aCI5pa8VUnli77pgbjphY3nva7ngrpCdW5kbGXos4fmlpnlpL5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIDog6Ieq6KiC576p5ou/5Y+W6LOH5rqQ5pmC55qE5ZCN56ixXHJcbiAgICAgKiBAcGFyYW0ge0xvYWRUeXBlfSB0eXBlIDog6KaB542y5Y+W55qE6LOH5rqQ6aGe5Z6LXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIDog6KaB542y5Y+W55qE6LOH5rqQ5L2N572uXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzTGFuZ3VhZ2VVc2VkIDog5piv5ZCm6KaB5L2/55So6Kqe57O75L2N572uXHJcbiAgICAgKi9cclxuICAgIGxvYWRCdW5kbGUobmFtZTogc3RyaW5nLCB0eXBlOiBMb2FkVHlwZSwgdXJsOiBzdHJpbmcsIGlzTGFuZ3VhZ2VVc2VkPzogYm9vbGVhbik6IHRoaXMge1xyXG5cclxuICAgICAgICBpZiAoaXNMYW5ndWFnZVVzZWQpIHtcclxuXHJcbiAgICAgICAgICAgIHVybCA9IGAke3VybH0vJHtXZWJSZXF1ZXN0TWFuYWdlci5pbnN0YW5jZS5Vc2VyTGFuZ3VhZ2V9YFxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubG9hZFR5cGVIYW5kbGVyLmV4ZWN1dGVMb2FkQnVuZGxlKG5hbWUsIHR5cGUsIHVybCkudGhlbigpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOS/neWtmOS9v+eUqOiAheimgWNhbGxiYWNr55qE5pa55rOVLOeVtuacieWbnuWCs+mAsuW6puaZguWwh+mAj+mBjiBsb2FkRXZlbnRDYWxsYmFja+aWueazleWbnuWCs+mAsuW6plxyXG4gICAgICogQHBhcmFtIGNhbGxGdW5cclxuICAgICAqIEBwYXJhbSByZXNOYW1lXHJcbiAgICAgKi9cclxuICAgIGNhbGxiYWNrKGNhbGxGdW46IChwcm9ncmVzczogbnVtYmVyKSA9PiB2b2lkLCByZXNOYW1lPzogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHJlc05hbWUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY2FsbEZ1bi5oYXMocmVzTmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIEVycm9yTWFuYWdlci5pbnN0YW5jZS5leGVjdXRlRXJyb3IoRXJyb3JUeXBlLkxvYWRFcnJvckZXLCBcIuWmguaenOaLv+WPluipsuizh+a6kOmAsuW6pizoq4vli7/ph43opIdjYWxsYmFja1wiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNhbGxGdW4uc2V0KHJlc05hbWUsIGNhbGxGdW4pO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jYWxsRnVuLmhhcyhudWxsKSkge1xyXG4gICAgICAgICAgICAgICAgRXJyb3JNYW5hZ2VyLmluc3RhbmNlLmV4ZWN1dGVFcnJvcihFcnJvclR5cGUuTG9hZEVycm9yRlcsIFwi5aaC5p6c5ou/5Y+W57i96YCy5bqmLOiri+WLv+WcqOS5i+WJjeizh+a6kOWwmuacquWKoOi8ieWujOWJjSzph43opIdjYWxsYmFja1wiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNhbGxGdW4uc2V0KG51bGwsIGNhbGxGdW4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOafpeeci+ipsuizh+a6kOaYr+WQpuW3suWKoOi8ieWujOeVolxyXG4gICAgICogQHBhcmFtIG5hbWVcclxuICAgICAqIEBwYXJhbSBpc01haW5SZXNvdXJjZXNcclxuICAgICAqL1xyXG4gICAgZ2V0TG9hZFN0YXRlKG5hbWU6IHN0cmluZywgaXNNYWluUmVzb3VyY2VzOiBib29sZWFuKTogYm9vbGVhbiB7XHJcblxyXG4gICAgICAgIGlmIChpc01haW5SZXNvdXJjZXMpIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pbml0aWFsTG9hZFN0YXRlLmdldChuYW1lKSA9PSAxO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2luaXRpYWxMb2FkU3RhdGUuZ2V0KG5hbWUpID09IDE7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWKoOi8ieWklumDqOiFs+acrFxyXG4gICAgICogQHBhcmFtIG5hbWVcclxuICAgICAqIEBwYXJhbSB0eXBlXHJcbiAgICAgKiBAcGFyYW0gdXJsXHJcbiAgICAgKi9cclxuICAgIGxvYWRFeHRlcm5hbFNjcmlwdChuYW1lOiBzdHJpbmcsIHR5cGU6IExvYWRUeXBlLCB1cmw6IHN0cmluZykge1xyXG5cclxuICAgICAgICB0aGlzLmxvYWRUeXBlSGFuZGxlci5leGVjdXRlTG9hZEV4dGVybmFsU2NyaXB0KG5hbWUsIHR5cGUsIHVybCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6YeN572uXHJcbiAgICAgKi9cclxuICAgIHJlc2V0KCkge1xyXG5cclxuICAgICAgICBMb2FkUmVzTWFuYWdlci5faW5zdGFuY2UgPSBudWxsO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tc2V0dGVyLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgc2V0IGluaXRpYWxMb2FkU3RhdGUodmFsdWU6IE1hcDxzdHJpbmcsIG51bWJlcj4pIHtcclxuICAgICAgICB0aGlzLl9pbml0aWFsTG9hZFN0YXRlID0gdmFsdWVcclxuICAgIH1cclxuXHJcbiAgICBzZXQgc2Vjb25kYXJ5TG9hZFN0YXRlKHZhbHVlOiBNYXA8c3RyaW5nLCBudW1iZXI+KSB7XHJcbiAgICAgICAgdGhpcy5fc2Vjb25kYXJ5TG9hZFN0YXRlID0gdmFsdWVcclxuICAgIH1cclxuXHJcbiAgICBzZXQgaW1nUmVzKHZhbHVlOiBNYXA8c3RyaW5nLCBNYXA8c3RyaW5nLCBjYy5TcHJpdGVGcmFtZT4+KSB7XHJcbiAgICAgICAgdGhpcy5faW1nUmVzID0gdmFsdWVcclxuICAgIH1cclxuXHJcbiAgICBzZXQgc3BpbmVSZXModmFsdWU6IE1hcDxzdHJpbmcsIHNwLlNrZWxldG9uRGF0YT4pIHtcclxuICAgICAgICB0aGlzLl9zcGluZVJlcyA9IHZhbHVlXHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHJlYWRGaWxlUmVzKHZhbHVlOiBNYXA8c3RyaW5nLCBNYXA8c3RyaW5nLCBzdHJpbmc+Pikge1xyXG4gICAgICAgIHRoaXMuX3JlYWRGaWxlUmVzID0gdmFsdWVcclxuICAgIH1cclxuXHJcbiAgICBzZXQgcHJlZmFiUmVzKHZhbHVlOiBNYXA8c3RyaW5nLCBjYy5QcmVmYWI+KSB7XHJcbiAgICAgICAgdGhpcy5fcHJlZmFiUmVzID0gdmFsdWVcclxuICAgIH1cclxuXHJcbiAgICBzZXQgbXVzaWNSZXModmFsdWU6IE1hcDxzdHJpbmcsIGNjLkF1ZGlvQ2xpcD4pIHtcclxuICAgICAgICB0aGlzLl9tdXNpY1JlcyA9IHZhbHVlXHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHNjcmlwdFJlcyh2YWx1ZTogU2V0PHN0cmluZz4pIHtcclxuICAgICAgICB0aGlzLl9zY3JpcHRSZXMgPSB2YWx1ZVxyXG4gICAgfVxyXG5cclxuICAgIHNldCBzY2VuZVJlcyh2YWx1ZTogTWFwPHN0cmluZywgY2MuU2NlbmVBc3NldD4pIHtcclxuICAgICAgICB0aGlzLl9zY2VuZVJlcyA9IHZhbHVlXHJcbiAgICB9XHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWdldHRlci0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgIGdldCBpbml0aWFsTG9hZFN0YXRlKCk6IE1hcDxzdHJpbmcsIG51bWJlcj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbml0aWFsTG9hZFN0YXRlXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNlY29uZGFyeUxvYWRTdGF0ZSgpOiBNYXA8c3RyaW5nLCBudW1iZXI+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2Vjb25kYXJ5TG9hZFN0YXRlXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGltZ1JlcygpOiBNYXA8c3RyaW5nLCBNYXA8c3RyaW5nLCBjYy5TcHJpdGVGcmFtZT4+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faW1nUmVzXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNwaW5lUmVzKCk6IE1hcDxzdHJpbmcsIHNwLlNrZWxldG9uRGF0YT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zcGluZVJlc1xyXG4gICAgfVxyXG5cclxuICAgIGdldCByZWFkRmlsZVJlcygpOiBNYXA8c3RyaW5nLCBNYXA8c3RyaW5nLCBzdHJpbmc+PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlYWRGaWxlUmVzXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHByZWZhYlJlcygpOiBNYXA8c3RyaW5nLCBjYy5QcmVmYWI+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcHJlZmFiUmVzXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG11c2ljUmVzKCk6IE1hcDxzdHJpbmcsIGNjLkF1ZGlvQ2xpcD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tdXNpY1Jlc1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzY3JpcHRSZXMoKTogU2V0PHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zY3JpcHRSZXNcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc2NlbmVSZXMoKTogTWFwPHN0cmluZywgY2MuU2NlbmVBc3NldD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zY2VuZVJlc1xyXG4gICAgfVxyXG59Il19