
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/LoadResources/LoadScriptType/ScriptLoad.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e30b2b1gRlLcq6W9d65tmK2', 'ScriptLoad');
// script/Framework/LoadResources/LoadScriptType/ScriptLoad.ts

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
var ScriptLoad = /** @class */ (function (_super) {
    __extends(ScriptLoad, _super);
    function ScriptLoad(scriptName, type, url) {
        var _this = _super.call(this, scriptName, type, url) || this;
        _this.linkElem = document.createElement("script");
        return _this;
    }
    ScriptLoad.prototype.loadScript = function () {
        var url = SlotConfigManager_1.default.instance.externallyLoadURL + "/" + this.url + "/" + this.scriptName + ".js";
        if (LoadResManager_1.default.instance.scriptRes.has(url)) {
            ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.LoadErrorFW, "\u8ACB\u52FF\u91CD\u8907\u52A0\u8F09\u5DF2\u6709\u7684\u5916\u90E8\u8173\u672C : " + url);
        }
        this.linkElem.type = this.type;
        this.linkElem.src = url;
        this.linkElem.onload = this.test;
        ALoadScriptType_1.default.head.appendChild(this.linkElem);
        LoadResManager_1.default.instance.scriptRes.add(url);
    };
    ScriptLoad.prototype.test = function () {
        cc.log("測試加載script", "00", ALoadScriptType_1.default.head);
    };
    return ScriptLoad;
}(ALoadScriptType_1.default));
exports.default = ScriptLoad;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXExvYWRSZXNvdXJjZXNcXExvYWRTY3JpcHRUeXBlXFxTY3JpcHRMb2FkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9FQUE4RDtBQUM5RCxzRUFBMkQ7QUFDM0QseURBQW1EO0FBQ25ELDREQUFzRDtBQUN0RCxvREFBOEM7QUFHOUM7SUFBd0MsOEJBQWU7SUFJbkQsb0JBQVksVUFBa0IsRUFBRSxJQUFZLEVBQUUsR0FBVztRQUF6RCxZQUNJLGtCQUFNLFVBQVUsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLFNBSS9CO1FBRkcsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDOztJQUVyRCxDQUFDO0lBR0QsK0JBQVUsR0FBVjtRQUNJLElBQUksR0FBRyxHQUFNLDJCQUFpQixDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsU0FBSSxJQUFJLENBQUMsR0FBRyxTQUFJLElBQUksQ0FBQyxVQUFVLFFBQUssQ0FBQztRQUM5RixJQUFJLHdCQUFjLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDNUMsc0JBQVksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLDRCQUFTLENBQUMsV0FBVyxFQUFFLHNGQUFtQixHQUFLLENBQUMsQ0FBQTtTQUN0RjtRQUNELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDakMseUJBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoRCx3QkFBYyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCx5QkFBSSxHQUFKO1FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxFQUFDLHlCQUFlLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDbkQsQ0FBQztJQUVMLGlCQUFDO0FBQUQsQ0E1QkEsQUE0QkMsQ0E1QnVDLHlCQUFlLEdBNEJ0RCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTbG90Q29uZmlnTWFuYWdlciBmcm9tICcuLi8uLi9Db25maWcvU2xvdENvbmZpZ01hbmFnZXInXHJcbmltcG9ydCB7RXJyb3JUeXBlfSBmcm9tICcuLi8uLi9FcnJvci9FbnVtL0Vycm9yTWFuYWdlckVudW0nXHJcbmltcG9ydCBFcnJvck1hbmFnZXIgZnJvbSAnLi4vLi4vRXJyb3IvRXJyb3JNYW5hZ2VyJ1xyXG5pbXBvcnQgQUxvYWRTY3JpcHRUeXBlIGZyb20gJy4uL0lMb2FkL0FMb2FkU2NyaXB0VHlwZSdcclxuaW1wb3J0IExvYWRSZXNNYW5hZ2VyIGZyb20gJy4uL0xvYWRSZXNNYW5hZ2VyJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcmlwdExvYWQgZXh0ZW5kcyBBTG9hZFNjcmlwdFR5cGUge1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbGlua0VsZW06IEhUTUxTY3JpcHRFbGVtZW50XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NyaXB0TmFtZTogc3RyaW5nLCB0eXBlOiBzdHJpbmcsIHVybDogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoc2NyaXB0TmFtZSwgdHlwZSwgdXJsKVxyXG5cclxuICAgICAgICB0aGlzLmxpbmtFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGxvYWRTY3JpcHQoKSB7XHJcbiAgICAgICAgbGV0IHVybCA9IGAke1Nsb3RDb25maWdNYW5hZ2VyLmluc3RhbmNlLmV4dGVybmFsbHlMb2FkVVJMfS8ke3RoaXMudXJsfS8ke3RoaXMuc2NyaXB0TmFtZX0uanNgO1xyXG4gICAgICAgIGlmIChMb2FkUmVzTWFuYWdlci5pbnN0YW5jZS5zY3JpcHRSZXMuaGFzKHVybCkpIHtcclxuICAgICAgICAgICAgRXJyb3JNYW5hZ2VyLmluc3RhbmNlLmV4ZWN1dGVFcnJvcihFcnJvclR5cGUuTG9hZEVycm9yRlcsIGDoq4vli7/ph43opIfliqDovInlt7LmnInnmoTlpJbpg6johbPmnKwgOiAke3VybH1gKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxpbmtFbGVtLnR5cGUgPSB0aGlzLnR5cGU7XHJcbiAgICAgICAgdGhpcy5saW5rRWxlbS5zcmMgPSB1cmw7XHJcbiAgICAgICAgdGhpcy5saW5rRWxlbS5vbmxvYWQgPSB0aGlzLnRlc3Q7XHJcbiAgICAgICAgQUxvYWRTY3JpcHRUeXBlLmhlYWQuYXBwZW5kQ2hpbGQodGhpcy5saW5rRWxlbSk7XHJcbiAgICAgICAgTG9hZFJlc01hbmFnZXIuaW5zdGFuY2Uuc2NyaXB0UmVzLmFkZCh1cmwpO1xyXG4gICAgfVxyXG5cclxuICAgIHRlc3QoKSB7XHJcbiAgICAgICAgY2MubG9nKFwi5ris6Kmm5Yqg6LyJc2NyaXB0XCIsIFwiMDBcIixBTG9hZFNjcmlwdFR5cGUuaGVhZClcclxuICAgIH1cclxuXHJcbn0iXX0=