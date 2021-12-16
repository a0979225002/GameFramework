
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/LoadResources/ILoad/ALoadType.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXExvYWRSZXNvdXJjZXNcXElMb2FkXFxBTG9hZFR5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzRUFBNEQ7QUFDNUQseURBQW9EO0FBQ3BELGdEQUEyQztBQUMzQyxvREFBK0M7QUFFL0M7SUFTSSxtQkFBc0IsUUFBZ0IsRUFBRSxJQUFTLEVBQUUsR0FBVyxFQUFFLE1BQWM7UUFFMUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBZSxZQUFZO1FBQzVDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQWlCLE9BQU87UUFDdkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsQ0FBTyxXQUFXO1FBQzNDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBLENBQVkscUJBQXFCO1FBQ3JELElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQVEsV0FBVztRQUMzQyxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxpQ0FBYSxHQUFwQjtRQUNJLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsVUFBVSxFQUFFO1lBQzdCLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ25IO2FBQU07WUFDSCxtQ0FBbUM7WUFDbkMseUNBQXlDO1lBQ3pDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUs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QUFDO0FBQUQsQ0F0RkEsQUFzRkMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RXJyb3JUeXBlfSBmcm9tIFwiLi4vLi4vRXJyb3IvRW51bS9FcnJvck1hbmFnZXJFbnVtXCI7XHJcbmltcG9ydCBFcnJvck1hbmFnZXIgZnJvbSBcIi4uLy4uL0Vycm9yL0Vycm9yTWFuYWdlclwiO1xyXG5pbXBvcnQgVXRpbCBmcm9tIFwiLi4vLi4vR2xvYmFsTWV0aG9kL1V0aWxcIjtcclxuaW1wb3J0IExvYWRSZXNNYW5hZ2VyIGZyb20gXCIuLi9Mb2FkUmVzTWFuYWdlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQUxvYWRUeXBlIGltcGxlbWVudHMgSUxvYWRUeXBlIHtcclxuXHJcbiAgICBwcm90ZWN0ZWQgdHlwZTogYW55O1xyXG4gICAgcHJvdGVjdGVkIHVybDogc3RyaW5nO1xyXG4gICAgcHJvdGVjdGVkIGRhdGFOYW1lOiBzdHJpbmc7XHJcbiAgICBwcm90ZWN0ZWQgZm9sZGVyOiBzdHJpbmdcclxuICAgIHByaXZhdGUgYmVmb3JlUHJvZ3Jlc3M6IG51bWJlcjtcclxuICAgIHByaXZhdGUgYXNzZXRCdW5kbGU6IGNjLkFzc2V0TWFuYWdlci5CdW5kbGVcclxuXHJcbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IoZGF0YU5hbWU6IHN0cmluZywgdHlwZTogYW55LCB1cmw6IHN0cmluZywgZm9sZGVyOiBzdHJpbmcpIHtcclxuXHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTsgICAgICAgICAgICAgICAvL+eVtuWJjeimgeeNsuWPlueahOizh+a6kOmhnuWei1xyXG4gICAgICAgIHRoaXMudXJsID0gdXJsOyAgICAgICAgICAgICAgICAgLy/njbLlj5bnmoTlnLDlnYBcclxuICAgICAgICB0aGlzLmRhdGFOYW1lID0gZGF0YU5hbWU7ICAgICAgIC8v6KaB5ou/5Y+W6LOH5rqQ55qEa2V5XHJcbiAgICAgICAgdGhpcy5mb2xkZXIgPSBmb2xkZXIgICAgICAgICAgICAvL+eItuizh+aWmeWkvuWQjeeosSzpu5joqo0gcmVzb3VyY2VzXHJcbiAgICAgICAgdGhpcy5iZWZvcmVQcm9ncmVzcyA9IDA7ICAgICAgICAvL+eVtuWJjeS4iuasoeeahOi8ieWFpemAsuW6plxyXG4gICAgICAgIHRoaXMuYXNzZXRCdW5kbGUgPSBjYy5hc3NldE1hbmFnZXIuZ2V0QnVuZGxlKHRoaXMuZm9sZGVyKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWKoOi8ieizh+a6kOaWueazlVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbG9hZFJlc291cmNlcygpIHtcclxuICAgICAgICBpZiAodGhpcy50eXBlICE9PSBjYy5TY2VuZUFzc2V0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXNzZXRCdW5kbGUubG9hZERpcih0aGlzLnVybCwgdGhpcy50eXBlLCB0aGlzLmxvYWRSZXNQcm9ncmVzcy5iaW5kKHRoaXMpLCB0aGlzLmxvYWRSZXNDYWxsQmFjay5iaW5kKHRoaXMpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvL+i8ieWFpXNjZW5l6LOH5rqQLOWmguaenOWQjeeosemMr+iqpOacg3NjZW5l5ZCN56ix6Yyv6Kqk5pyD54Sh5rOV5ou/5Y+W6LOH5rqQXHJcbiAgICAgICAgICAgIC8v6LyJ5YWlc2NlbmXos4fmupAs54Sh6aCIVVJM5Zyw5Z2ALOS9huaYrzIuNC5Y6ZyA6KaB5pS+5ZyoUmVzb3VyY2XlupXkuItcclxuICAgICAgICAgICAgdGhpcy5hc3NldEJ1bmRsZS5sb2FkU2NlbmUodGhpcy5kYXRhTmFtZSwgY2MuU2NlbmVBc3NldCwgdGhpcy5sb2FkUmVzUHJvZ3Jlc3MuYmluZCh0aGlzKSwgdGhpcy5sb2FkUmVzQ2FsbEJhY2suYmluZCh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbG9hZFJlc0NhbGxCYWNrKGVycm9yOiBFcnJvciwgYXNzZXRzOiBbXSB8IGNjLlNjZW5lQXNzZXQpIHtcclxuICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgRXJyb3JNYW5hZ2VyLmluc3RhbmNlLmV4ZWN1dGVFcnJvcihFcnJvclR5cGUuTG9hZEVycm9yRlcsIGVycm9yKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCEoYXNzZXRzIGluc3RhbmNlb2YgY2MuU2NlbmVBc3NldCkgJiYgYXNzZXRzLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIEVycm9yTWFuYWdlci5pbnN0YW5jZS5leGVjdXRlRXJyb3IoRXJyb3JUeXBlLkxvYWRFcnJvckZXLCBg54Sh6LyJ5YWl5Lu75L2V6LOH5rqQICR7dGhpcy51cmx9IGApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXRSZXNUb01hbmFnZXIodGhpcy5kYXRhTmFtZSwgYXNzZXRzKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBsb2FkUmVzUHJvZ3Jlc3MoY29tcGxldGU6IG51bWJlciwgVG90YWxBbW91bnQ6IG51bWJlcikge1xyXG5cclxuICAgICAgICAvL+eNsuWPlueZvuWIhuavlFxyXG4gICAgICAgIGxldCBwcm9ncmVzcyA9IFV0aWwubXlGbG9vcigoY29tcGxldGUgLyBUb3RhbEFtb3VudCksIDIpO1xyXG5cclxuICAgICAgICBpZiAocHJvZ3Jlc3MgPiB0aGlzLmJlZm9yZVByb2dyZXNzKSB7XHJcblxyXG4gICAgICAgICAgICAvL+S4jeW+numAmeijoeWIpOaWt+eLgOaFiyznm67nmoTop6PmsbrnlbDmraXmk43kvZxcclxuICAgICAgICAgICAgLy/nlbbos4fmupDpg73ovInlhaXliLBMb2FkTWFuYWdlcuaZguaJjeWbnuWCs+S7pei8ieWFpeWujOaIkOeahOeLgOaFi1xyXG4gICAgICAgICAgICBpZiAocHJvZ3Jlc3MgPj0gMSkge1xyXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3MgPSAwLjk5XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8v5Zue5YKz5LiK5qyh6IiH6YCZ5qyh5LmL6ZaT5aKe5Yqg5LqG5aSa5bCR6YCy5bqmXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTWFuYWdlclN0YXRlKHRoaXMuZGF0YU5hbWUsIHByb2dyZXNzLCAocHJvZ3Jlc3MgLSB0aGlzLmJlZm9yZVByb2dyZXNzKSk7XHJcbiAgICAgICAgICAgIHRoaXMuYmVmb3JlUHJvZ3Jlc3MgPSBwcm9ncmVzcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHVwZGF0ZVByb2dyZXNzRW5kKCkge1xyXG4gICAgICAgIC8v55uu55qE6Kej5rG655Ww5q2l5pON5L2cXHJcbiAgICAgICAgLy/nlbbos4fmupDpg73ovInlhaXliLBMb2FkTWFuYWdlcuaZguaJjeWbnuWCs+S7pei8ieWFpeWujOaIkOeahOeLgOaFi1xyXG4gICAgICAgIGlmICh0aGlzLmZvbGRlciA9PT0gXCJyZXNvdXJjZXNcIikge1xyXG4gICAgICAgICAgICBMb2FkUmVzTWFuYWdlci5pbnN0YW5jZS5pbml0aWFsTG9hZFN0YXRlLnNldCh0aGlzLmRhdGFOYW1lLCAxKTtcclxuICAgICAgICAgICAgTG9hZFJlc01hbmFnZXIuaW5zdGFuY2UubG9hZE1haW5FdmVudENhbGxiYWNrKHRoaXMuZGF0YU5hbWUsIDAuMDEsIDEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIExvYWRSZXNNYW5hZ2VyLmluc3RhbmNlLnNlY29uZGFyeUxvYWRTdGF0ZS5zZXQodGhpcy5kYXRhTmFtZSwgMSk7XHJcbiAgICAgICAgICAgIExvYWRSZXNNYW5hZ2VyLmluc3RhbmNlLmxvYWRTZWNvbmRhcnlFdmVudENhbGxiYWNrKHRoaXMuZGF0YU5hbWUsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgdXBkYXRlTWFuYWdlclN0YXRlKGtleTogc3RyaW5nLCBzdGF0ZTogbnVtYmVyLCB1cGRhdGU6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLmZvbGRlciA9PT0gXCJyZXNvdXJjZXNcIikge1xyXG4gICAgICAgICAgICBMb2FkUmVzTWFuYWdlci5pbnN0YW5jZS5pbml0aWFsTG9hZFN0YXRlLnNldChrZXksIHN0YXRlKTtcclxuICAgICAgICAgICAgTG9hZFJlc01hbmFnZXIuaW5zdGFuY2UubG9hZE1haW5FdmVudENhbGxiYWNrKGtleSwgdXBkYXRlLCBzdGF0ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgTG9hZFJlc01hbmFnZXIuaW5zdGFuY2Uuc2Vjb25kYXJ5TG9hZFN0YXRlLnNldChrZXksIHN0YXRlKTtcclxuICAgICAgICAgICAgTG9hZFJlc01hbmFnZXIuaW5zdGFuY2UubG9hZFNlY29uZGFyeUV2ZW50Q2FsbGJhY2soa2V5LCBzdGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBzZXRSZXNUb01hbmFnZXIoZGF0YU5hbWU6IHN0cmluZywgYXNzZXQ6IGFueSk6dm9pZDtcclxuXHJcbn0iXX0=