"use strict";
cc._RF.push(module, 'bf8877/4WZLfokhStrlLU7Z', 'ALoadType');
// script/Framework/LoadResources/ILoad/ALoadType.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorManagerEnum_1 = require("../../Error/Enum/ErrorManagerEnum");
var ErrorManager_1 = require("../../Error/ErrorManager");
var Util_1 = require("../../GlobalMethod/Util");
var LoadResManager_1 = require("../LoadResManager");
var ALoadType = /** @class */ (function () {
    function ALoadType(dataName, type, url, folder) {
        this.type = type; //當前要獲取的資源類型
        this.url = url; //獲取的地址
        this.dataName = dataName; //要拿取資源的key
        this.folder = folder; //父資料夾名稱,默認 resources
        this.beforeProgress = 0; //當前上次的載入進度
        this.assetBundle = cc.assetManager.getBundle(this.folder);
    }
    /**
     * 加載資源方法
     */
    ALoadType.prototype.loadResources = function () {
        if (this.type !== cc.SceneAsset) {
            this.assetBundle.loadDir(this.url, this.type, this.loadResProgress.bind(this), this.loadResCallBack.bind(this));
        }
        else {
            //載入scene資源,如果名稱錯誤會scene名稱錯誤會無法拿取資源
            //載入scene資源,無須URL地址,但是2.4.X需要放在Resource底下
            this.assetBundle.loadScene(this.dataName, cc.SceneAsset, this.loadResProgress.bind(this), this.loadResCallBack.bind(this));
        }
    };
    ALoadType.prototype.loadResCallBack = function (error, assets) {
        if (error) {
            ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.LoadErrorFW, error);
        }
        else if (!(assets instanceof cc.SceneAsset) && assets.length == 0) {
            ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.LoadErrorFW, "\u7121\u8F09\u5165\u4EFB\u4F55\u8CC7\u6E90 " + this.url + " ");
        }
        this.setResToManager(this.dataName, assets);
    };
    ALoadType.prototype.loadResProgress = function (complete, TotalAmount) {
        //獲取百分比
        var progress = Util_1.default.myFloor((complete / TotalAmount), 2);
        if (progress > this.beforeProgress) {
            //不從這裡判斷狀態,目的解決異步操作
            //當資源都載入到LoadManager時才回傳以載入完成的狀態
            if (progress >= 1) {
                progress = 0.99;
            }
            //回傳上次與這次之間增加了多少進度
            this.updateManagerState(this.dataName, progress, (progress - this.beforeProgress));
            this.beforeProgress = progress;
        }
    };
    ALoadType.prototype.updateProgressEnd = function () {
        //目的解決異步操作
        //當資源都載入到LoadManager時才回傳以載入完成的狀態
        if (this.folder === "resources") {
            LoadResManager_1.default.instance.initialLoadState.set(this.dataName, 1);
            LoadResManager_1.default.instance.loadMainEventCallback(this.dataName, 0.01, 1);
        }
        else {
            LoadResManager_1.default.instance.secondaryLoadState.set(this.dataName, 1);
            LoadResManager_1.default.instance.loadSecondaryEventCallback(this.dataName, 1);
        }
    };
    ALoadType.prototype.updateManagerState = function (key, state, update) {
        if (this.folder === "resources") {
            LoadResManager_1.default.instance.initialLoadState.set(key, state);
            LoadResManager_1.default.instance.loadMainEventCallback(key, update, state);
        }
        else {
            LoadResManager_1.default.instance.secondaryLoadState.set(key, state);
            LoadResManager_1.default.instance.loadSecondaryEventCallback(key, state);
        }
    };
    return ALoadType;
}());
exports.default = ALoadType;

cc._RF.pop();