"use strict";
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