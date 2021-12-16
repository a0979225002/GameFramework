
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/LoadResources/LoadType/ImgLoad.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'aa107MBRdRE942iZidp7UBi', 'ImgLoad');
// script/Framework/LoadResources/LoadType/ImgLoad.ts

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
var ImgLoad = /** @class */ (function (_super) {
    __extends(ImgLoad, _super);
    function ImgLoad(dataName, type, url, folder) {
        return _super.call(this, dataName, type, url, folder) || this;
    }
    //@Override
    ImgLoad.prototype.setResToManager = function (dataName, asset) {
        var e_1, _a;
        var spriteMap = new Map();
        try {
            for (var _b = __values(asset[0].getSpriteFrames()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var sprite = _c.value;
                //將鍵值轉小寫,如果有使用grid key 作為搜尋資源
                //將無條件將 key 轉成 純數字 例如 : symbol0~10 = 0~10
                var lowerCase = dataName.toLowerCase();
                if (lowerCase.match("grid")) {
                    var gridName = sprite.name.replace(/[a-z A-Z]/g, '');
                    spriteMap.set(gridName, sprite);
                }
                else {
                    var spriteName = sprite.name;
                    spriteMap.set(spriteName, sprite);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        LoadResManager_1.default.instance.imgRes.set(dataName, spriteMap);
        //目的解決異步操作
        //當資源都載入到LoadManager時才回傳以載入完成的狀態
        this.updateProgressEnd();
    };
    return ImgLoad;
}(ALoadType_1.default));
exports.default = ImgLoad;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXExvYWRSZXNvdXJjZXNcXExvYWRUeXBlXFxJbWdMb2FkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQTJDO0FBQzNDLG9EQUErQztBQUUvQztJQUFxQywyQkFBUztJQUUxQyxpQkFBWSxRQUFnQixFQUFFLElBQVMsRUFBRSxHQUFXLEVBQUUsTUFBYztlQUNoRSxrQkFBTSxRQUFRLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUM7SUFFdEMsQ0FBQztJQUVELFdBQVc7SUFDWCxpQ0FBZSxHQUFmLFVBQWdCLFFBQWdCLEVBQUUsS0FBcUI7O1FBRW5ELElBQUksU0FBUyxHQUFnQyxJQUFJLEdBQUcsRUFBMEIsQ0FBQzs7WUFDL0UsS0FBbUIsSUFBQSxLQUFBLFNBQUEsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFBLGdCQUFBLDRCQUFFO2dCQUExQyxJQUFJLE1BQU0sV0FBQTtnQkFFWCw2QkFBNkI7Z0JBQzdCLHlDQUF5QztnQkFDekMsSUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUN2QyxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUU7b0JBQ3pCLElBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUMsQ0FBQztvQkFDckQsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7aUJBQ25DO3FCQUFNO29CQUNILElBQUksVUFBVSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7b0JBQzdCLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2lCQUNyQzthQUNKOzs7Ozs7Ozs7UUFFRCx3QkFBYyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUV4RCxVQUFVO1FBQ1YsZ0NBQWdDO1FBQ2hDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBRTdCLENBQUM7SUFFTCxjQUFDO0FBQUQsQ0FqQ0EsQUFpQ0MsQ0FqQ29DLG1CQUFTLEdBaUM3QyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBTG9hZFR5cGUgZnJvbSBcIi4uL0lMb2FkL0FMb2FkVHlwZVwiO1xyXG5pbXBvcnQgTG9hZFJlc01hbmFnZXIgZnJvbSBcIi4uL0xvYWRSZXNNYW5hZ2VyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWdMb2FkIGV4dGVuZHMgQUxvYWRUeXBlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihkYXRhTmFtZTogc3RyaW5nLCB0eXBlOiBhbnksIHVybDogc3RyaW5nLCBmb2xkZXI6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKGRhdGFOYW1lLCB0eXBlLCB1cmwsIGZvbGRlcik7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vQE92ZXJyaWRlXHJcbiAgICBzZXRSZXNUb01hbmFnZXIoZGF0YU5hbWU6IHN0cmluZywgYXNzZXQ6IGNjLlNwcml0ZUF0bGFzKSB7XHJcblxyXG4gICAgICAgIGxldCBzcHJpdGVNYXA6IE1hcDxzdHJpbmcsIGNjLlNwcml0ZUZyYW1lPiA9IG5ldyBNYXA8c3RyaW5nLCBjYy5TcHJpdGVGcmFtZT4oKTtcclxuICAgICAgICBmb3IgKGxldCBzcHJpdGUgb2YgYXNzZXRbMF0uZ2V0U3ByaXRlRnJhbWVzKCkpIHtcclxuXHJcbiAgICAgICAgICAgIC8v5bCH6Y215YC86L2J5bCP5a+rLOWmguaenOacieS9v+eUqGdyaWQga2V5IOS9nOeCuuaQnOWwi+izh+a6kFxyXG4gICAgICAgICAgICAvL+Wwh+eEoeaineS7tuWwhyBrZXkg6L2J5oiQIOe0lOaVuOWtlyDkvovlpoIgOiBzeW1ib2wwfjEwID0gMH4xMFxyXG4gICAgICAgICAgICBsZXQgbG93ZXJDYXNlID0gZGF0YU5hbWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgaWYgKGxvd2VyQ2FzZS5tYXRjaChcImdyaWRcIikpIHtcclxuICAgICAgICAgICAgICAgIGxldCBncmlkTmFtZSA9IHNwcml0ZS5uYW1lLnJlcGxhY2UoL1thLXogQS1aXS9nLCAnJyk7XHJcbiAgICAgICAgICAgICAgICBzcHJpdGVNYXAuc2V0KGdyaWROYW1lLCBzcHJpdGUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IHNwcml0ZU5hbWUgPSBzcHJpdGUubmFtZTtcclxuICAgICAgICAgICAgICAgIHNwcml0ZU1hcC5zZXQoc3ByaXRlTmFtZSwgc3ByaXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgTG9hZFJlc01hbmFnZXIuaW5zdGFuY2UuaW1nUmVzLnNldChkYXRhTmFtZSwgc3ByaXRlTWFwKTtcclxuXHJcbiAgICAgICAgLy/nm67nmoTop6PmsbrnlbDmraXmk43kvZxcclxuICAgICAgICAvL+eVtuizh+a6kOmDvei8ieWFpeWIsExvYWRNYW5hZ2Vy5pmC5omN5Zue5YKz5Lul6LyJ5YWl5a6M5oiQ55qE54uA5oWLXHJcbiAgICAgICAgdGhpcy51cGRhdGVQcm9ncmVzc0VuZCgpO1xyXG5cclxuICAgIH1cclxuXHJcbn0iXX0=