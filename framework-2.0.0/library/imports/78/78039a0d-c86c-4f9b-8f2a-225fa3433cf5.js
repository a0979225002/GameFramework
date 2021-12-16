"use strict";
cc._RF.push(module, '78039oNyGxPm48qIl+jQzz1', 'LoadTypeFactory');
// script/Framework/LoadResources/LoadTypeFactory.ts

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
var LoadEnum_1 = require("./Enum/LoadEnum");
var CSSLoad_1 = require("./LoadScriptType/CSSLoad");
var ScriptLoad_1 = require("./LoadScriptType/ScriptLoad");
var ImgLoad_1 = require("./LoadType/ImgLoad");
var MusicLoad_1 = require("./LoadType/MusicLoad");
var PrefabLoad_1 = require("./LoadType/PrefabLoad");
var SceneLoad_1 = require("./LoadType/SceneLoad");
var SpineLoad_1 = require("./LoadType/SpineLoad");
var TextLoad_1 = require("./LoadType/TextLoad");
var LoadTypeFactory = /** @class */ (function () {
    function LoadTypeFactory() {
        this.assetMethod = new Array();
    }
    LoadTypeFactory.prototype.loadBundle = function (dataName, type, url) {
        var _this = this;
        if (this.assetBundle)
            return;
        this.promise = new Promise(function () {
        });
        //加載Bundle資源時須先加載Bundle清單
        return new Promise(function (resolve) {
            if (!_this.isLoadBundle) {
                _this.isLoadBundle = true;
                cc.assetManager.loadBundle("secondaryRes", function (error, bundle) {
                    if (error) {
                        ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.LoadErrorFW, error);
                    }
                    _this.assetBundle = bundle;
                    resolve();
                });
            }
            else if (!_this.assetBundle && _this.isLoadBundle) {
                _this.assetMethod.push(_this.checkLoadType.bind(_this, dataName, type, url, "secondaryRes"));
            }
        });
    };
    /**
     * 檢測當前Type,做各自對應的加載動作
     * @param dataName
     * @param type
     * @param url
     */
    LoadTypeFactory.prototype.executeLoad = function (dataName, type, url) {
        this.checkLoadType(dataName, type, url, "resources");
    };
    /**
     * 執行Bundle載入動作
     * @param dataName
     * @param type
     * @param url
     */
    LoadTypeFactory.prototype.executeLoadBundle = function (dataName, type, url) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadBundle(dataName, type, url)];
                    case 1:
                        _a.sent();
                        this.checkLoadType(dataName, type, url, "secondaryRes");
                        if (this.assetMethod.length != 0) {
                            while (this.assetMethod.length) {
                                this.assetMethod[0]();
                                this.assetMethod.shift();
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    //確認當前type
    LoadTypeFactory.prototype.checkLoadType = function (dataName, type, url, folder) {
        switch (type) {
            case LoadEnum_1.LoadType.img:
                new ImgLoad_1.default(dataName, cc.SpriteAtlas, url, folder).loadResources();
                break;
            case LoadEnum_1.LoadType.music:
                new MusicLoad_1.default(dataName, cc.AudioClip, url, folder).loadResources();
                break;
            case LoadEnum_1.LoadType.prefab:
                new PrefabLoad_1.default(dataName, cc.Prefab, url, folder).loadResources();
                break;
            case LoadEnum_1.LoadType.spine:
                new SpineLoad_1.default(dataName, sp.SkeletonData, url, folder).loadResources();
                break;
            case LoadEnum_1.LoadType.scene:
                new SceneLoad_1.default(dataName, cc.SceneAsset, null, folder).loadResources();
                break;
            case LoadEnum_1.LoadType.text:
                new TextLoad_1.default(dataName, cc.TextAsset, url, folder).loadResources();
                break;
            default:
                ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.TypeFW, "LoadType 無法偵測");
        }
    };
    /**
     * 加載外部腳本
     * @param name
     * @param type
     * @param url
     */
    LoadTypeFactory.prototype.executeLoadExternalScript = function (name, type, url) {
        switch (type) {
            case LoadEnum_1.LoadType.css:
                new CSSLoad_1.default(name, "text/css", url).loadScript();
                break;
            case LoadEnum_1.LoadType.script:
                new ScriptLoad_1.default(name, "text/javascript", url).loadScript();
                break;
            default:
                ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.TypeFW, "LoadType 無法偵測");
        }
    };
    return LoadTypeFactory;
}());
exports.default = LoadTypeFactory;

cc._RF.pop();