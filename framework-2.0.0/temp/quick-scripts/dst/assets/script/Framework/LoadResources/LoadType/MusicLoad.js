
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/LoadResources/LoadType/MusicLoad.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f79b9RD2L1JhIesRiCg8z/o', 'MusicLoad');
// script/Framework/LoadResources/LoadType/MusicLoad.ts

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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorManagerEnum_1 = require("../../Error/Enum/ErrorManagerEnum");
var ErrorManager_1 = require("../../Error/ErrorManager");
var ALoadType_1 = require("../ILoad/ALoadType");
var LoadResManager_1 = require("../LoadResManager");
var MusicLoad = /** @class */ (function (_super) {
    __extends(MusicLoad, _super);
    function MusicLoad(dataName, type, url, folder) {
        return _super.call(this, dataName, type, url, folder) || this;
    }
    //@Override
    MusicLoad.prototype.setResToManager = function (key, asset) {
        var e_1, _a;
        try {
            //拿取音樂檔名,當作鍵值
            for (var asset_1 = __values(asset), asset_1_1 = asset_1.next(); !asset_1_1.done; asset_1_1 = asset_1.next()) {
                var value = asset_1_1.value;
                var key_1 = value.name;
                if (LoadResManager_1.default.instance.musicRes.has(key_1))
                    ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.LoadErrorFW, key_1 + " \u9375\u503C\u91CD\u8907,\u8ACB\u6AA2\u67E5\u8A72\u97F3\u6A02\u8CC7\u6E90\u662F\u5426\u5DF2\u52A0\u8F09\u904E");
                LoadResManager_1.default.instance.musicRes.set(key_1, value);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (asset_1_1 && !asset_1_1.done && (_a = asset_1.return)) _a.call(asset_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        //目的解決異步操作
        //當資源都載入到LoadManager時才回傳以載入完成的狀態
        this.updateProgressEnd();
    };
    return MusicLoad;
}(ALoadType_1.default));
exports.default = MusicLoad;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXExvYWRSZXNvdXJjZXNcXExvYWRUeXBlXFxNdXNpY0xvYWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzRUFBNEQ7QUFDNUQseURBQW9EO0FBQ3BELGdEQUEyQztBQUMzQyxvREFBK0M7QUFFL0M7SUFBdUMsNkJBQVM7SUFFNUMsbUJBQVksUUFBZ0IsRUFBRSxJQUFTLEVBQUUsR0FBVyxFQUFFLE1BQWM7ZUFFaEUsa0JBQU0sUUFBUSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDO0lBRXRDLENBQUM7SUFFRCxXQUFXO0lBQ1gsbUNBQWUsR0FBZixVQUFnQixHQUFXLEVBQUUsS0FBMEI7OztZQUNuRCxhQUFhO1lBQ2IsS0FBa0IsSUFBQSxVQUFBLFNBQUEsS0FBSyxDQUFBLDRCQUFBLCtDQUFFO2dCQUFwQixJQUFJLEtBQUssa0JBQUE7Z0JBRVYsSUFBSSxLQUFHLEdBQVcsS0FBSyxDQUFDLElBQUksQ0FBQztnQkFFN0IsSUFBSSx3QkFBYyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUcsQ0FBQztvQkFDekMsc0JBQVksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLDRCQUFTLENBQUMsV0FBVyxFQUFLLEtBQUcsbUhBQXNCLENBQUMsQ0FBQTtnQkFFM0Ysd0JBQWMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFFcEQ7Ozs7Ozs7OztRQUNELFVBQVU7UUFDVixnQ0FBZ0M7UUFDaEMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0F6QkEsQUF5QkMsQ0F6QnNDLG1CQUFTLEdBeUIvQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RXJyb3JUeXBlfSBmcm9tIFwiLi4vLi4vRXJyb3IvRW51bS9FcnJvck1hbmFnZXJFbnVtXCI7XHJcbmltcG9ydCBFcnJvck1hbmFnZXIgZnJvbSBcIi4uLy4uL0Vycm9yL0Vycm9yTWFuYWdlclwiO1xyXG5pbXBvcnQgQUxvYWRUeXBlIGZyb20gXCIuLi9JTG9hZC9BTG9hZFR5cGVcIjtcclxuaW1wb3J0IExvYWRSZXNNYW5hZ2VyIGZyb20gXCIuLi9Mb2FkUmVzTWFuYWdlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXVzaWNMb2FkIGV4dGVuZHMgQUxvYWRUeXBlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihkYXRhTmFtZTogc3RyaW5nLCB0eXBlOiBhbnksIHVybDogc3RyaW5nLCBmb2xkZXI6IHN0cmluZykge1xyXG5cclxuICAgICAgICBzdXBlcihkYXRhTmFtZSwgdHlwZSwgdXJsLCBmb2xkZXIpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvL0BPdmVycmlkZVxyXG4gICAgc2V0UmVzVG9NYW5hZ2VyKGtleTogc3RyaW5nLCBhc3NldDogQXJyYXk8Y2MuQXVkaW9DbGlwPikge1xyXG4gICAgICAgIC8v5ou/5Y+W6Z+z5qiC5qqU5ZCNLOeVtuS9nOmNteWAvFxyXG4gICAgICAgIGZvciAobGV0IHZhbHVlIG9mIGFzc2V0KSB7XHJcblxyXG4gICAgICAgICAgICBsZXQga2V5OiBzdHJpbmcgPSB2YWx1ZS5uYW1lO1xyXG5cclxuICAgICAgICAgICAgaWYgKExvYWRSZXNNYW5hZ2VyLmluc3RhbmNlLm11c2ljUmVzLmhhcyhrZXkpKVxyXG4gICAgICAgICAgICAgICAgRXJyb3JNYW5hZ2VyLmluc3RhbmNlLmV4ZWN1dGVFcnJvcihFcnJvclR5cGUuTG9hZEVycm9yRlcsIGAke2tleX0g6Y215YC86YeN6KSHLOiri+aqouafpeipsumfs+aoguizh+a6kOaYr+WQpuW3suWKoOi8iemBjmApXHJcblxyXG4gICAgICAgICAgICBMb2FkUmVzTWFuYWdlci5pbnN0YW5jZS5tdXNpY1Jlcy5zZXQoa2V5LCB2YWx1ZSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+ebrueahOino+axuueVsOatpeaTjeS9nFxyXG4gICAgICAgIC8v55W26LOH5rqQ6YO96LyJ5YWl5YiwTG9hZE1hbmFnZXLmmYLmiY3lm57lgrPku6XovInlhaXlrozmiJDnmoTni4DmhYtcclxuICAgICAgICB0aGlzLnVwZGF0ZVByb2dyZXNzRW5kKCk7XHJcbiAgICB9XHJcbn0iXX0=