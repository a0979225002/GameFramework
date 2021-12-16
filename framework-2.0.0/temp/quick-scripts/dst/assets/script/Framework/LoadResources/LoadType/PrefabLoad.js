
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/LoadResources/LoadType/PrefabLoad.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3b050x4ms5MNKxpczHlpR8H', 'PrefabLoad');
// script/Framework/LoadResources/LoadType/PrefabLoad.ts

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
var PrefabLoad = /** @class */ (function (_super) {
    __extends(PrefabLoad, _super);
    function PrefabLoad(dataName, type, url, folder) {
        return _super.call(this, dataName, type, url, folder) || this;
    }
    PrefabLoad.prototype.setResToManager = function (key, asset) {
        var e_1, _a;
        try {
            for (var asset_1 = __values(asset), asset_1_1 = asset_1.next(); !asset_1_1.done; asset_1_1 = asset_1.next()) {
                var prefab = asset_1_1.value;
                if (LoadResManager_1.default.instance.prefabRes.has(prefab.name)) {
                    ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.LoadErrorFW, prefab.name + " prefab\u540D\u7A31\u91CD\u8907,\u8ACB\u6AA2\u67E5\u662F\u5426\u6709\u76F8\u540C\u540D\u7A31prefab");
                    return;
                }
                else {
                    LoadResManager_1.default.instance.prefabRes.set(prefab.name, prefab);
                }
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
    return PrefabLoad;
}(ALoadType_1.default));
exports.default = PrefabLoad;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXExvYWRSZXNvdXJjZXNcXExvYWRUeXBlXFxQcmVmYWJMb2FkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0VBQTREO0FBQzVELHlEQUFvRDtBQUNwRCxnREFBMkM7QUFDM0Msb0RBQStDO0FBRS9DO0lBQXdDLDhCQUFTO0lBRTdDLG9CQUFZLFFBQWdCLEVBQUUsSUFBUyxFQUFFLEdBQVcsRUFBRSxNQUFjO2VBQ2hFLGtCQUFNLFFBQVEsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sQ0FBQztJQUV0QyxDQUFDO0lBRUQsb0NBQWUsR0FBZixVQUFnQixHQUFXLEVBQUUsS0FBdUI7OztZQUVoRCxLQUFtQixJQUFBLFVBQUEsU0FBQSxLQUFLLENBQUEsNEJBQUEsK0NBQUU7Z0JBQXJCLElBQUksTUFBTSxrQkFBQTtnQkFFWCxJQUFJLHdCQUFjLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUVwRCxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsNEJBQVMsQ0FBQyxXQUFXLEVBQUssTUFBTSxDQUFDLElBQUksdUdBQThCLENBQUMsQ0FBQTtvQkFDdkcsT0FBTztpQkFDVjtxQkFBTTtvQkFDSCx3QkFBYyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7aUJBQzlEO2FBQ0o7Ozs7Ozs7OztRQUVELFVBQVU7UUFDVixnQ0FBZ0M7UUFDaEMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFFN0IsQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0F6QkEsQUF5QkMsQ0F6QnVDLG1CQUFTLEdBeUJoRCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RXJyb3JUeXBlfSBmcm9tIFwiLi4vLi4vRXJyb3IvRW51bS9FcnJvck1hbmFnZXJFbnVtXCI7XHJcbmltcG9ydCBFcnJvck1hbmFnZXIgZnJvbSBcIi4uLy4uL0Vycm9yL0Vycm9yTWFuYWdlclwiO1xyXG5pbXBvcnQgQUxvYWRUeXBlIGZyb20gXCIuLi9JTG9hZC9BTG9hZFR5cGVcIjtcclxuaW1wb3J0IExvYWRSZXNNYW5hZ2VyIGZyb20gXCIuLi9Mb2FkUmVzTWFuYWdlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlZmFiTG9hZCBleHRlbmRzIEFMb2FkVHlwZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZGF0YU5hbWU6IHN0cmluZywgdHlwZTogYW55LCB1cmw6IHN0cmluZywgZm9sZGVyOiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihkYXRhTmFtZSwgdHlwZSwgdXJsLCBmb2xkZXIpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzZXRSZXNUb01hbmFnZXIoa2V5OiBzdHJpbmcsIGFzc2V0OiBBcnJheTxjYy5QcmVmYWI+KSB7XHJcblxyXG4gICAgICAgIGZvciAobGV0IHByZWZhYiBvZiBhc3NldCkge1xyXG5cclxuICAgICAgICAgICAgaWYgKExvYWRSZXNNYW5hZ2VyLmluc3RhbmNlLnByZWZhYlJlcy5oYXMocHJlZmFiLm5hbWUpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgRXJyb3JNYW5hZ2VyLmluc3RhbmNlLmV4ZWN1dGVFcnJvcihFcnJvclR5cGUuTG9hZEVycm9yRlcsIGAke3ByZWZhYi5uYW1lfSBwcmVmYWLlkI3nqLHph43opIcs6KuL5qqi5p+l5piv5ZCm5pyJ55u45ZCM5ZCN56ixcHJlZmFiYClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIExvYWRSZXNNYW5hZ2VyLmluc3RhbmNlLnByZWZhYlJlcy5zZXQocHJlZmFiLm5hbWUsIHByZWZhYik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v55uu55qE6Kej5rG655Ww5q2l5pON5L2cXHJcbiAgICAgICAgLy/nlbbos4fmupDpg73ovInlhaXliLBMb2FkTWFuYWdlcuaZguaJjeWbnuWCs+S7pei8ieWFpeWujOaIkOeahOeLgOaFi1xyXG4gICAgICAgIHRoaXMudXBkYXRlUHJvZ3Jlc3NFbmQoKTtcclxuXHJcbiAgICB9XHJcbn0iXX0=