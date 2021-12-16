
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/LoadResources/LoadScriptType/CSSLoad.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '09291NUvY1DUKu/Cj5ETEvx', 'CSSLoad');
// script/Framework/LoadResources/LoadScriptType/CSSLoad.ts

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
var SlotConfigManager_1 = require("../../Config/SlotConfigManager");
var ErrorManagerEnum_1 = require("../../Error/Enum/ErrorManagerEnum");
var ErrorManager_1 = require("../../Error/ErrorManager");
var ALoadScriptType_1 = require("../ILoad/ALoadScriptType");
var LoadResManager_1 = require("../LoadResManager");
var CSSLoad = /** @class */ (function (_super) {
    __extends(CSSLoad, _super);
    function CSSLoad(scriptName, type, url) {
        var _this = _super.call(this, scriptName, type, url) || this;
        _this.linkElem = document.createElement("link");
        return _this;
    }
    CSSLoad.prototype.loadScript = function () {
        var url = SlotConfigManager_1.default.instance.externallyLoadURL + "/" + this.url + "/" + this.scriptName + ".css";
        if (LoadResManager_1.default.instance.scriptRes.has(url)) {
            ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.LoadErrorFW, "\u8ACB\u52FF\u91CD\u8907\u52A0\u8F09\u5DF2\u6709\u7684\u5916\u90E8\u8173\u672C : " + url);
        }
        this.linkElem.rel = "stylesheet";
        this.linkElem.type = this.type;
        this.linkElem.href = url;
        ALoadScriptType_1.default.head.appendChild(this.linkElem);
        LoadResManager_1.default.instance.scriptRes.add(url);
    };
    return CSSLoad;
}(ALoadScriptType_1.default));
exports.default = CSSLoad;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXExvYWRSZXNvdXJjZXNcXExvYWRTY3JpcHRUeXBlXFxDU1NMb2FkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9FQUE4RDtBQUM5RCxzRUFBMkQ7QUFDM0QseURBQW1EO0FBQ25ELDREQUFzRDtBQUN0RCxvREFBOEM7QUFFOUM7SUFBcUMsMkJBQWU7SUFJaEQsaUJBQVksVUFBa0IsRUFBRSxJQUFZLEVBQUUsR0FBVztRQUF6RCxZQUNJLGtCQUFNLFVBQVUsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLFNBSS9CO1FBRkcsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDOztJQUVuRCxDQUFDO0lBRUQsNEJBQVUsR0FBVjtRQUVJLElBQUksR0FBRyxHQUFNLDJCQUFpQixDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsU0FBSSxJQUFJLENBQUMsR0FBRyxTQUFJLElBQUksQ0FBQyxVQUFVLFNBQU0sQ0FBQztRQUMvRixJQUFJLHdCQUFjLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDNUMsc0JBQVksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLDRCQUFTLENBQUMsV0FBVyxFQUFFLHNGQUFtQixHQUFLLENBQUMsQ0FBQTtTQUN0RjtRQUNELElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQy9CLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUN6Qix5QkFBZSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRWhELHdCQUFjLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVMLGNBQUM7QUFBRCxDQXpCQSxBQXlCQyxDQXpCb0MseUJBQWUsR0F5Qm5EIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNsb3RDb25maWdNYW5hZ2VyIGZyb20gJy4uLy4uL0NvbmZpZy9TbG90Q29uZmlnTWFuYWdlcidcclxuaW1wb3J0IHtFcnJvclR5cGV9IGZyb20gJy4uLy4uL0Vycm9yL0VudW0vRXJyb3JNYW5hZ2VyRW51bSdcclxuaW1wb3J0IEVycm9yTWFuYWdlciBmcm9tICcuLi8uLi9FcnJvci9FcnJvck1hbmFnZXInXHJcbmltcG9ydCBBTG9hZFNjcmlwdFR5cGUgZnJvbSAnLi4vSUxvYWQvQUxvYWRTY3JpcHRUeXBlJ1xyXG5pbXBvcnQgTG9hZFJlc01hbmFnZXIgZnJvbSAnLi4vTG9hZFJlc01hbmFnZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDU1NMb2FkIGV4dGVuZHMgQUxvYWRTY3JpcHRUeXBlIHtcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxpbmtFbGVtOiBIVE1MTGlua0VsZW1lbnRcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY3JpcHROYW1lOiBzdHJpbmcsIHR5cGU6IHN0cmluZywgdXJsOiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihzY3JpcHROYW1lLCB0eXBlLCB1cmwpXHJcblxyXG4gICAgICAgIHRoaXMubGlua0VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFNjcmlwdCgpIHtcclxuXHJcbiAgICAgICAgbGV0IHVybCA9IGAke1Nsb3RDb25maWdNYW5hZ2VyLmluc3RhbmNlLmV4dGVybmFsbHlMb2FkVVJMfS8ke3RoaXMudXJsfS8ke3RoaXMuc2NyaXB0TmFtZX0uY3NzYDtcclxuICAgICAgICBpZiAoTG9hZFJlc01hbmFnZXIuaW5zdGFuY2Uuc2NyaXB0UmVzLmhhcyh1cmwpKSB7XHJcbiAgICAgICAgICAgIEVycm9yTWFuYWdlci5pbnN0YW5jZS5leGVjdXRlRXJyb3IoRXJyb3JUeXBlLkxvYWRFcnJvckZXLCBg6KuL5Yu/6YeN6KSH5Yqg6LyJ5bey5pyJ55qE5aSW6YOo6IWz5pysIDogJHt1cmx9YClcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5saW5rRWxlbS5yZWwgPSBcInN0eWxlc2hlZXRcIjtcclxuICAgICAgICB0aGlzLmxpbmtFbGVtLnR5cGUgPSB0aGlzLnR5cGU7XHJcbiAgICAgICAgdGhpcy5saW5rRWxlbS5ocmVmID0gdXJsO1xyXG4gICAgICAgIEFMb2FkU2NyaXB0VHlwZS5oZWFkLmFwcGVuZENoaWxkKHRoaXMubGlua0VsZW0pO1xyXG5cclxuICAgICAgICBMb2FkUmVzTWFuYWdlci5pbnN0YW5jZS5zY3JpcHRSZXMuYWRkKHVybCk7XHJcbiAgICB9XHJcblxyXG59Il19