
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/LoadResources/LoadType/TextLoad.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b3d8cew3stJ6p+6B3hmBaZw', 'TextLoad');
// script/Framework/LoadResources/LoadType/TextLoad.ts

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
var ALoadType_1 = require("../ILoad/ALoadType");
var LoadResManager_1 = require("../LoadResManager");
var TextLoad = /** @class */ (function (_super) {
    __extends(TextLoad, _super);
    function TextLoad(dataName, type, url, folder) {
        return _super.call(this, dataName, type, url, folder) || this;
    }
    /**
     *  目前只能傳入 .CSV 檔案,目前無從判斷該檔案副檔名
     *  因此需自行檢查回傳資料是否正確
     * @param key
     * @param asset
     */
    TextLoad.prototype.setResToManager = function (key, asset) {
        var e_1, _a;
        //清除回車
        var textArray = asset[0]["text"].split(/[\s\n]/);
        var textMap = new Map();
        try {
            for (var textArray_1 = __values(textArray), textArray_1_1 = textArray_1.next(); !textArray_1_1.done; textArray_1_1 = textArray_1.next()) {
                var texts = textArray_1_1.value;
                //切割 CSV特有的 ,
                var array = texts.split(',');
                //你可以在第三格放入註解,我只抓前兩格資料
                var key_1 = array[0];
                var value = array[1];
                if (key_1 == "") {
                    continue;
                }
                //清除所有包含的 "" '' 等特殊符號
                var processingvalue = value.replace(/['"]/g, '');
                textMap.set(key_1, processingvalue);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (textArray_1_1 && !textArray_1_1.done && (_a = textArray_1.return)) _a.call(textArray_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        LoadResManager_1.default.instance.readFileRes.set(key, textMap);
        //目的解決異步操作
        //當資源都載入到LoadManager時才回傳以載入完成的狀態
        this.updateProgressEnd();
    };
    TextLoad.prototype.updateManagerState = function (key, state, update) {
        if (this.folder === "resources") {
            LoadResManager_1.default.instance.initialLoadState.set(this.dataName, state);
        }
        else {
            LoadResManager_1.default.instance.secondaryLoadState.set(this.dataName, state);
        }
        LoadResManager_1.default.instance.loadMainEventCallback(key, update, state);
    };
    return TextLoad;
}(ALoadType_1.default));
exports.default = TextLoad;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXExvYWRSZXNvdXJjZXNcXExvYWRUeXBlXFxUZXh0TG9hZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUEyQztBQUMzQyxvREFBK0M7QUFFL0M7SUFBc0MsNEJBQVM7SUFFM0Msa0JBQVksUUFBZ0IsRUFBRSxJQUFTLEVBQUUsR0FBVyxFQUFFLE1BQWM7ZUFDaEUsa0JBQU0sUUFBUSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDO0lBRXRDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILGtDQUFlLEdBQWYsVUFBZ0IsR0FBVyxFQUFFLEtBQW1COztRQUU1QyxNQUFNO1FBQ04sSUFBSSxTQUFTLEdBQWtCLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEUsSUFBSSxPQUFPLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7O1lBRXhDLEtBQWtCLElBQUEsY0FBQSxTQUFBLFNBQVMsQ0FBQSxvQ0FBQSwyREFBRTtnQkFBeEIsSUFBSSxLQUFLLHNCQUFBO2dCQUVWLGFBQWE7Z0JBQ2IsSUFBSSxLQUFLLEdBQWtCLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBRTVDLHNCQUFzQjtnQkFDdEIsSUFBSSxLQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNuQixJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRXJCLElBQUksS0FBRyxJQUFJLEVBQUUsRUFBRTtvQkFDWCxTQUFTO2lCQUNaO2dCQUVELHFCQUFxQjtnQkFDckIsSUFBSSxlQUFlLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBRWpELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBRyxFQUFFLGVBQWUsQ0FBQyxDQUFDO2FBQ3JDOzs7Ozs7Ozs7UUFFRCx3QkFBYyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUV0RCxVQUFVO1FBQ1YsZ0NBQWdDO1FBQ2hDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxxQ0FBa0IsR0FBbEIsVUFBbUIsR0FBVyxFQUFFLEtBQWEsRUFBRSxNQUFjO1FBRXpELElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxXQUFXLEVBQUU7WUFDN0Isd0JBQWMsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDdEU7YUFBTTtZQUNILHdCQUFjLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3hFO1FBRUQsd0JBQWMsQ0FBQyxRQUFRLENBQUMscUJBQXFCLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUV0RSxDQUFDO0lBQ0wsZUFBQztBQUFELENBeERBLEFBd0RDLENBeERxQyxtQkFBUyxHQXdEOUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQUxvYWRUeXBlIGZyb20gXCIuLi9JTG9hZC9BTG9hZFR5cGVcIjtcclxuaW1wb3J0IExvYWRSZXNNYW5hZ2VyIGZyb20gXCIuLi9Mb2FkUmVzTWFuYWdlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dExvYWQgZXh0ZW5kcyBBTG9hZFR5cGUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGRhdGFOYW1lOiBzdHJpbmcsIHR5cGU6IGFueSwgdXJsOiBzdHJpbmcsIGZvbGRlcjogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoZGF0YU5hbWUsIHR5cGUsIHVybCwgZm9sZGVyKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAg55uu5YmN5Y+q6IO95YKz5YWlIC5DU1Yg5qqU5qGILOebruWJjeeEoeW+nuWIpOaWt+ipsuaqlOahiOWJr+aqlOWQjVxyXG4gICAgICogIOWboOatpOmcgOiHquihjOaqouafpeWbnuWCs+izh+aWmeaYr+WQpuato+eiulxyXG4gICAgICogQHBhcmFtIGtleVxyXG4gICAgICogQHBhcmFtIGFzc2V0XHJcbiAgICAgKi9cclxuICAgIHNldFJlc1RvTWFuYWdlcihrZXk6IHN0cmluZywgYXNzZXQ6IGNjLlRleHRBc3NldCkge1xyXG5cclxuICAgICAgICAvL+a4hemZpOWbnui7ilxyXG4gICAgICAgIGxldCB0ZXh0QXJyYXk6IEFycmF5PHN0cmluZz4gPSBhc3NldFswXVtcInRleHRcIl0uc3BsaXQoL1tcXHNcXG5dLyk7XHJcbiAgICAgICAgbGV0IHRleHRNYXAgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCB0ZXh0cyBvZiB0ZXh0QXJyYXkpIHtcclxuXHJcbiAgICAgICAgICAgIC8v5YiH5YmyIENTVueJueacieeahCAsXHJcbiAgICAgICAgICAgIGxldCBhcnJheTogQXJyYXk8c3RyaW5nPiA9IHRleHRzLnNwbGl0KCcsJyk7XHJcblxyXG4gICAgICAgICAgICAvL+S9oOWPr+S7peWcqOesrOS4ieagvOaUvuWFpeiou+inoyzmiJHlj6rmipPliY3lhanmoLzos4fmlplcclxuICAgICAgICAgICAgbGV0IGtleSA9IGFycmF5WzBdO1xyXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBhcnJheVsxXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChrZXkgPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8v5riF6Zmk5omA5pyJ5YyF5ZCr55qEIFwiXCIgJycg562J54m55q6K56ym6JmfXHJcbiAgICAgICAgICAgIGxldCBwcm9jZXNzaW5ndmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9bJ1wiXS9nLCAnJyk7XHJcblxyXG4gICAgICAgICAgICB0ZXh0TWFwLnNldChrZXksIHByb2Nlc3Npbmd2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBMb2FkUmVzTWFuYWdlci5pbnN0YW5jZS5yZWFkRmlsZVJlcy5zZXQoa2V5LCB0ZXh0TWFwKTtcclxuXHJcbiAgICAgICAgLy/nm67nmoTop6PmsbrnlbDmraXmk43kvZxcclxuICAgICAgICAvL+eVtuizh+a6kOmDvei8ieWFpeWIsExvYWRNYW5hZ2Vy5pmC5omN5Zue5YKz5Lul6LyJ5YWl5a6M5oiQ55qE54uA5oWLXHJcbiAgICAgICAgdGhpcy51cGRhdGVQcm9ncmVzc0VuZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZU1hbmFnZXJTdGF0ZShrZXk6IHN0cmluZywgc3RhdGU6IG51bWJlciwgdXBkYXRlOiBudW1iZXIpIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZm9sZGVyID09PSBcInJlc291cmNlc1wiKSB7XHJcbiAgICAgICAgICAgIExvYWRSZXNNYW5hZ2VyLmluc3RhbmNlLmluaXRpYWxMb2FkU3RhdGUuc2V0KHRoaXMuZGF0YU5hbWUsIHN0YXRlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBMb2FkUmVzTWFuYWdlci5pbnN0YW5jZS5zZWNvbmRhcnlMb2FkU3RhdGUuc2V0KHRoaXMuZGF0YU5hbWUsIHN0YXRlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIExvYWRSZXNNYW5hZ2VyLmluc3RhbmNlLmxvYWRNYWluRXZlbnRDYWxsYmFjayhrZXksIHVwZGF0ZSwgc3RhdGUpO1xyXG5cclxuICAgIH1cclxufSJdfQ==