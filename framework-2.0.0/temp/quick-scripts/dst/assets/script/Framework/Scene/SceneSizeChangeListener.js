
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Scene/SceneSizeChangeListener.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e7c05UWC0pKXbsYpZ9v9d8y', 'SceneSizeChangeListener');
// script/Framework/Scene/SceneSizeChangeListener.ts

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
var SlotConfigManager_1 = require("../Config/SlotConfigManager");
var SceneManager_1 = require("./SceneManager");
var SceneSizeChangeListener = /** @class */ (function () {
    function SceneSizeChangeListener() {
        //是否可以更新畫面
        this._isCanUpdateScene = true;
    }
    /**
     * 監聽是否要更動scene寬高
     * @param {number}delayTime:更新頻率
     */
    SceneSizeChangeListener.prototype.designSceneEventListener = function (delayTime) {
        var _this = this;
        cc.view.on("canvas-resize", function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.makeDesignScene(delayTime)];
                    case 1:
                        _a.sent();
                        cc.log("更新畫面完畢......");
                        return [2 /*return*/];
                }
            });
        }); });
    };
    /**
     * 依照designSceneEventListener()參數中的delay時間,更新cavers
     * @param time
     */
    SceneSizeChangeListener.prototype.makeDesignScene = function (time) {
        var _this = this;
        return new Promise((function (resolve, reject) {
            if (_this._isCanUpdateScene) {
                _this._isCanUpdateScene = false;
                setTimeout(function () {
                    SceneManager_1.default.instance.updateSize();
                    _this._isCanUpdateScene = true;
                    resolve();
                }, time);
            }
            else {
                if (SlotConfigManager_1.default.instance.isFrameworkDebug)
                    reject("正在UpdateScene中 請稍後......");
            }
        }));
    };
    return SceneSizeChangeListener;
}());
exports.default = SceneSizeChangeListener;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXFNjZW5lXFxTY2VuZVNpemVDaGFuZ2VMaXN0ZW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUEyRDtBQUMzRCwrQ0FBeUM7QUFFekM7SUFBQTtRQUVJLFVBQVU7UUFDRixzQkFBaUIsR0FBYSxJQUFJLENBQUM7SUFnQy9DLENBQUM7SUE5Qkc7OztPQUdHO0lBQ0gsMERBQXdCLEdBQXhCLFVBQXlCLFNBQWtCO1FBQTNDLGlCQUtDO1FBSkcsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsZUFBZSxFQUFFOzs7NEJBQ3hCLHFCQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLEVBQUE7O3dCQUFyQyxTQUFxQyxDQUFDO3dCQUN0QyxFQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDOzs7O2FBQzFCLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRDs7O09BR0c7SUFDSyxpREFBZSxHQUF2QixVQUF3QixJQUFhO1FBQXJDLGlCQWNDO1FBYkcsT0FBTyxJQUFJLE9BQU8sQ0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDdEMsSUFBRyxLQUFJLENBQUMsaUJBQWlCLEVBQUU7Z0JBQ3ZCLEtBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7Z0JBQy9CLFVBQVUsQ0FBQztvQkFDUCxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDbkMsS0FBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztvQkFDOUIsT0FBTyxFQUFFLENBQUM7Z0JBQ2QsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ1o7aUJBQU07Z0JBQ0gsSUFBRywyQkFBaUIsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCO29CQUMxQyxNQUFNLENBQUMsMEJBQTBCLENBQUMsQ0FBQzthQUMxQztRQUNMLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDUCxDQUFDO0lBQ0wsOEJBQUM7QUFBRCxDQW5DQSxBQW1DQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNsb3RDb25maWdNYW5hZ2VyIGZyb20gJy4uL0NvbmZpZy9TbG90Q29uZmlnTWFuYWdlcidcclxuaW1wb3J0IFNjZW5lTWFuYWdlciBmcm9tICcuL1NjZW5lTWFuYWdlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjZW5lU2l6ZUNoYW5nZUxpc3RlbmVyIHtcclxuICAgIFxyXG4gICAgLy/mmK/lkKblj6/ku6Xmm7TmlrDnlavpnaJcclxuICAgIHByaXZhdGUgX2lzQ2FuVXBkYXRlU2NlbmUgOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOebo+iBveaYr+WQpuimgeabtOWLlXNjZW5l5a+s6auYXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn1kZWxheVRpbWU65pu05paw6aC7546HXHJcbiAgICAgKi9cclxuICAgIGRlc2lnblNjZW5lRXZlbnRMaXN0ZW5lcihkZWxheVRpbWUgOiBudW1iZXIpIHtcclxuICAgICAgICBjYy52aWV3Lm9uKFwiY2FudmFzLXJlc2l6ZVwiLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMubWFrZURlc2lnblNjZW5lKGRlbGF5VGltZSk7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIuabtOaWsOeVq+mdouWujOeVoi4uLi4uLlwiKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAqIOS+neeFp2Rlc2lnblNjZW5lRXZlbnRMaXN0ZW5lcigp5Y+D5pW45Lit55qEZGVsYXnmmYLplpMs5pu05pawY2F2ZXJzXHJcbiAgICAgKiBAcGFyYW0gdGltZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIG1ha2VEZXNpZ25TY2VuZSh0aW1lIDogbnVtYmVyKSA6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBpZih0aGlzLl9pc0NhblVwZGF0ZVNjZW5lKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pc0NhblVwZGF0ZVNjZW5lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBTY2VuZU1hbmFnZXIuaW5zdGFuY2UudXBkYXRlU2l6ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2lzQ2FuVXBkYXRlU2NlbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0sIHRpbWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYoU2xvdENvbmZpZ01hbmFnZXIuaW5zdGFuY2UuaXNGcmFtZXdvcmtEZWJ1ZylcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoXCLmraPlnKhVcGRhdGVTY2VuZeS4rSDoq4vnqI3lvowuLi4uLi5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSlcclxuICAgIH1cclxufSJdfQ==