"use strict";
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