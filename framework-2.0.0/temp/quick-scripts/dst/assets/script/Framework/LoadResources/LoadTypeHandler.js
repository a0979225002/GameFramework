
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/LoadResources/LoadTypeHandler.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '452c20FX9FOYJDbMg0fNKi/', 'LoadTypeHandler');
// script/Framework/LoadResources/LoadTypeHandler.ts

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorManagerEnum_1 = require("../Error/Enum/ErrorManagerEnum");
var ErrorManager_1 = require("../Error/ErrorManager");
var LoadResManager_1 = require("./LoadResManager");
var LoadTypeFactory_1 = require("./LoadTypeFactory");
var LoadTypeHandler = /** @class */ (function () {
    function LoadTypeHandler() {
        this.factory = new LoadTypeFactory_1.default();
    }
    /**
     * 檢測當前Type,做各自對應的加載動作
     * @param name
     * @param type
     * @param url
     */
    LoadTypeHandler.prototype.executeLoad = function (name, type, url) {
        this.checkRepeatTheName(name);
        LoadResManager_1.default.instance.initialLoadState.set(name, null);
        this.factory.executeLoad(name, type, url);
    };
    /**
     * 執行Bundle載入動作
     * @param name
     * @param type
     * @param url
     */
    LoadTypeHandler.prototype.executeLoadBundle = function (name, type, url) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.checkRepeatTheName(name);
                        LoadResManager_1.default.instance.secondaryLoadState.set(name, null);
                        return [4 /*yield*/, this.factory.executeLoadBundle(name, type, url)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoadTypeHandler.prototype.checkRepeatTheName = function (name) {
        if (LoadResManager_1.default.instance.initialLoadState.has(name)) {
            ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.LoadErrorFW, name + " \u6B64(\u4E3B\u8CC7\u6E90)\u5DF2\u8F09\u5165\u904E\u4E86,\u6216\u540D\u7A31\u91CD\u8907,\u8ACB\u6AA2\u5BDF");
        }
        if (LoadResManager_1.default.instance.secondaryLoadState.has(name)) {
            ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.LoadErrorFW, name + " \u6B64(\u6B21\u8CC7\u6E90)\u5DF2\u8F09\u5165\u904E\u4E86,\u6216\u540D\u7A31\u91CD\u8907,\u8ACB\u6AA2\u5BDF");
        }
    };
    /**
     * 加載外部腳本
     * @param {string} name
     * @param {LoadType} type
     * @param {string} url
     */
    LoadTypeHandler.prototype.executeLoadExternalScript = function (name, type, url) {
        this.factory.executeLoadExternalScript(name, type, url);
    };
    return LoadTypeHandler;
}());
exports.default = LoadTypeHandler;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXExvYWRSZXNvdXJjZXNcXExvYWRUeXBlSGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1FQUF5RDtBQUN6RCxzREFBaUQ7QUFHakQsbURBQThDO0FBQzlDLHFEQUFnRDtBQUVoRDtJQUlJO1FBRUksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLHlCQUFlLEVBQUUsQ0FBQztJQUV6QyxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxxQ0FBVyxHQUFsQixVQUFtQixJQUFZLEVBQUUsSUFBYyxFQUFFLEdBQVc7UUFFeEQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTlCLHdCQUFjLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFekQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztJQUU5QyxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDVSwyQ0FBaUIsR0FBOUIsVUFBK0IsSUFBWSxFQUFFLElBQWMsRUFBRSxHQUFXOzs7Ozt3QkFFcEUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUU5Qix3QkFBYyxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO3dCQUMzRCxxQkFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUE7O3dCQUFyRCxTQUFxRCxDQUFDOzs7OztLQUN6RDtJQUVPLDRDQUFrQixHQUExQixVQUEyQixJQUFXO1FBRWxDLElBQUksd0JBQWMsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3BELHNCQUFZLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyw0QkFBUyxDQUFDLFdBQVcsRUFBSyxJQUFJLGdIQUF3QixDQUFDLENBQUM7U0FDOUY7UUFDRCxJQUFJLHdCQUFjLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN0RCxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsNEJBQVMsQ0FBQyxXQUFXLEVBQUssSUFBSSxnSEFBd0IsQ0FBQyxDQUFDO1NBQzlGO0lBQ0wsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsbURBQXlCLEdBQXpCLFVBQTBCLElBQVksRUFBRSxJQUFjLEVBQUUsR0FBVztRQUUvRCxJQUFJLENBQUMsT0FBTyxDQUFDLHlCQUF5QixDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFFNUQsQ0FBQztJQUVMLHNCQUFDO0FBQUQsQ0E5REEsQUE4REMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RXJyb3JUeXBlfSBmcm9tIFwiLi4vRXJyb3IvRW51bS9FcnJvck1hbmFnZXJFbnVtXCI7XHJcbmltcG9ydCBFcnJvck1hbmFnZXIgZnJvbSBcIi4uL0Vycm9yL0Vycm9yTWFuYWdlclwiO1xyXG5pbXBvcnQge0xvYWRUeXBlfSBmcm9tIFwiLi9FbnVtL0xvYWRFbnVtXCI7XHJcbmltcG9ydCBJTG9hZEZhY3RvcnkgZnJvbSBcIi4vSUxvYWQvSUxvYWRGYWN0b3J5XCI7XHJcbmltcG9ydCBMb2FkUmVzTWFuYWdlciBmcm9tIFwiLi9Mb2FkUmVzTWFuYWdlclwiO1xyXG5pbXBvcnQgTG9hZFR5cGVGYWN0b3J5IGZyb20gXCIuL0xvYWRUeXBlRmFjdG9yeVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9hZFR5cGVIYW5kbGVyIGltcGxlbWVudHMgSUxvYWRGYWN0b3J5IHtcclxuXHJcbiAgICBwcml2YXRlIGZhY3Rvcnk6IExvYWRUeXBlRmFjdG9yeTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICAgICAgdGhpcy5mYWN0b3J5ID0gbmV3IExvYWRUeXBlRmFjdG9yeSgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaqoua4rOeVtuWJjVR5cGUs5YGa5ZCE6Ieq5bCN5oeJ55qE5Yqg6LyJ5YuV5L2cXHJcbiAgICAgKiBAcGFyYW0gbmFtZVxyXG4gICAgICogQHBhcmFtIHR5cGVcclxuICAgICAqIEBwYXJhbSB1cmxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGV4ZWN1dGVMb2FkKG5hbWU6IHN0cmluZywgdHlwZTogTG9hZFR5cGUsIHVybDogc3RyaW5nKSB7XHJcblxyXG4gICAgICAgIHRoaXMuY2hlY2tSZXBlYXRUaGVOYW1lKG5hbWUpO1xyXG5cclxuICAgICAgICBMb2FkUmVzTWFuYWdlci5pbnN0YW5jZS5pbml0aWFsTG9hZFN0YXRlLnNldChuYW1lLCBudWxsKTtcclxuXHJcbiAgICAgICAgdGhpcy5mYWN0b3J5LmV4ZWN1dGVMb2FkKG5hbWUsIHR5cGUsIHVybCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Z+36KGMQnVuZGxl6LyJ5YWl5YuV5L2cXHJcbiAgICAgKiBAcGFyYW0gbmFtZVxyXG4gICAgICogQHBhcmFtIHR5cGVcclxuICAgICAqIEBwYXJhbSB1cmxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jIGV4ZWN1dGVMb2FkQnVuZGxlKG5hbWU6IHN0cmluZywgdHlwZTogTG9hZFR5cGUsIHVybDogc3RyaW5nKSB7XHJcblxyXG4gICAgICAgIHRoaXMuY2hlY2tSZXBlYXRUaGVOYW1lKG5hbWUpO1xyXG5cclxuICAgICAgICBMb2FkUmVzTWFuYWdlci5pbnN0YW5jZS5zZWNvbmRhcnlMb2FkU3RhdGUuc2V0KG5hbWUsIG51bGwpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMuZmFjdG9yeS5leGVjdXRlTG9hZEJ1bmRsZShuYW1lLCB0eXBlLCB1cmwpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2hlY2tSZXBlYXRUaGVOYW1lKG5hbWU6c3RyaW5nKXtcclxuXHJcbiAgICAgICAgaWYgKExvYWRSZXNNYW5hZ2VyLmluc3RhbmNlLmluaXRpYWxMb2FkU3RhdGUuaGFzKG5hbWUpKSB7XHJcbiAgICAgICAgICAgIEVycm9yTWFuYWdlci5pbnN0YW5jZS5leGVjdXRlRXJyb3IoRXJyb3JUeXBlLkxvYWRFcnJvckZXLCBgJHtuYW1lfSDmraQo5Li76LOH5rqQKeW3sui8ieWFpemBjuS6hizmiJblkI3nqLHph43opIcs6KuL5qqi5a+fYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChMb2FkUmVzTWFuYWdlci5pbnN0YW5jZS5zZWNvbmRhcnlMb2FkU3RhdGUuaGFzKG5hbWUpKSB7XHJcbiAgICAgICAgICAgIEVycm9yTWFuYWdlci5pbnN0YW5jZS5leGVjdXRlRXJyb3IoRXJyb3JUeXBlLkxvYWRFcnJvckZXLCBgJHtuYW1lfSDmraQo5qyh6LOH5rqQKeW3sui8ieWFpemBjuS6hizmiJblkI3nqLHph43opIcs6KuL5qqi5a+fYCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6LyJ5aSW6YOo6IWz5pysXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxyXG4gICAgICogQHBhcmFtIHtMb2FkVHlwZX0gdHlwZVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxyXG4gICAgICovXHJcbiAgICBleGVjdXRlTG9hZEV4dGVybmFsU2NyaXB0KG5hbWU6IHN0cmluZywgdHlwZTogTG9hZFR5cGUsIHVybDogc3RyaW5nKSB7XHJcblxyXG4gICAgICAgIHRoaXMuZmFjdG9yeS5leGVjdXRlTG9hZEV4dGVybmFsU2NyaXB0KG5hbWUsIHR5cGUsIHVybCk7XHJcblxyXG4gICAgfVxyXG5cclxufSJdfQ==