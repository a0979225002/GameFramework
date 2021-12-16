
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/LoadResources/LoadType/SceneLoad.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '168e9VgMaFKwIclD9pYJjCf', 'SceneLoad');
// script/Framework/LoadResources/LoadType/SceneLoad.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorManagerEnum_1 = require("../../Error/Enum/ErrorManagerEnum");
var ErrorManager_1 = require("../../Error/ErrorManager");
var ALoadType_1 = require("../ILoad/ALoadType");
var LoadResManager_1 = require("../LoadResManager");
var SceneLoad = /** @class */ (function (_super) {
    __extends(SceneLoad, _super);
    function SceneLoad(dataName, type, url, folder) {
        return _super.call(this, dataName, type, url, folder) || this;
    }
    SceneLoad.prototype.setResToManager = function (key, asset) {
        if (LoadResManager_1.default.instance.scriptRes.has(key))
            ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.LoadErrorFW, key + " \u9375\u503C\u91CD\u8907,\u8ACB\u6AA2\u67E5\u8A72\u8CC7\u6E90\u662F\u5426\u5DF2\u52A0\u8F09\u904E");
        LoadResManager_1.default.instance.sceneRes.set(key, asset);
        //目的解決異步操作
        //當資源都載入到LoadManager時才回傳以載入完成的狀態
        this.updateProgressEnd();
    };
    return SceneLoad;
}(ALoadType_1.default));
exports.default = SceneLoad;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXExvYWRSZXNvdXJjZXNcXExvYWRUeXBlXFxTY2VuZUxvYWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0VBQTJEO0FBQzNELHlEQUFtRDtBQUNuRCxnREFBMEM7QUFDMUMsb0RBQThDO0FBRTlDO0lBQXVDLDZCQUFTO0lBRTVDLG1CQUFZLFFBQWdCLEVBQUUsSUFBUyxFQUFFLEdBQVcsRUFBRSxNQUFjO2VBQ2hFLGtCQUFNLFFBQVEsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sQ0FBQztJQUN0QyxDQUFDO0lBRUQsbUNBQWUsR0FBZixVQUFnQixHQUFXLEVBQUUsS0FBVTtRQUVuQyxJQUFJLHdCQUFjLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO1lBQzFDLHNCQUFZLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyw0QkFBUyxDQUFDLFdBQVcsRUFBSyxHQUFHLHVHQUFvQixDQUFDLENBQUE7UUFFekYsd0JBQWMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFakQsVUFBVTtRQUNWLGdDQUFnQztRQUNoQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUU3QixDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQWxCQSxBQWtCQyxDQWxCc0MsbUJBQVMsR0FrQi9DIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFcnJvclR5cGV9IGZyb20gJy4uLy4uL0Vycm9yL0VudW0vRXJyb3JNYW5hZ2VyRW51bSdcclxuaW1wb3J0IEVycm9yTWFuYWdlciBmcm9tICcuLi8uLi9FcnJvci9FcnJvck1hbmFnZXInXHJcbmltcG9ydCBBTG9hZFR5cGUgZnJvbSAnLi4vSUxvYWQvQUxvYWRUeXBlJ1xyXG5pbXBvcnQgTG9hZFJlc01hbmFnZXIgZnJvbSAnLi4vTG9hZFJlc01hbmFnZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZUxvYWQgZXh0ZW5kcyBBTG9hZFR5cGUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGRhdGFOYW1lOiBzdHJpbmcsIHR5cGU6IGFueSwgdXJsOiBzdHJpbmcsIGZvbGRlcjogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoZGF0YU5hbWUsIHR5cGUsIHVybCwgZm9sZGVyKVxyXG4gICAgfVxyXG5cclxuICAgIHNldFJlc1RvTWFuYWdlcihrZXk6IHN0cmluZywgYXNzZXQ6IGFueSkge1xyXG5cclxuICAgICAgICBpZiAoTG9hZFJlc01hbmFnZXIuaW5zdGFuY2Uuc2NyaXB0UmVzLmhhcyhrZXkpKVxyXG4gICAgICAgICAgICBFcnJvck1hbmFnZXIuaW5zdGFuY2UuZXhlY3V0ZUVycm9yKEVycm9yVHlwZS5Mb2FkRXJyb3JGVywgYCR7a2V5fSDpjbXlgLzph43opIcs6KuL5qqi5p+l6Kmy6LOH5rqQ5piv5ZCm5bey5Yqg6LyJ6YGOYClcclxuXHJcbiAgICAgICAgTG9hZFJlc01hbmFnZXIuaW5zdGFuY2Uuc2NlbmVSZXMuc2V0KGtleSwgYXNzZXQpO1xyXG5cclxuICAgICAgICAvL+ebrueahOino+axuueVsOatpeaTjeS9nFxyXG4gICAgICAgIC8v55W26LOH5rqQ6YO96LyJ5YWl5YiwTG9hZE1hbmFnZXLmmYLmiY3lm57lgrPku6XovInlhaXlrozmiJDnmoTni4DmhYtcclxuICAgICAgICB0aGlzLnVwZGF0ZVByb2dyZXNzRW5kKCk7XHJcblxyXG4gICAgfVxyXG59Il19