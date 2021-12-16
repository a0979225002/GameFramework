
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/LoadResources/LoadTypeFactory.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXExvYWRSZXNvdXJjZXNcXExvYWRUeXBlRmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1FQUF5RDtBQUN6RCxzREFBaUQ7QUFDakQsNENBQXlDO0FBRXpDLG9EQUE4QztBQUM5QywwREFBb0Q7QUFDcEQsOENBQXlDO0FBQ3pDLGtEQUE2QztBQUM3QyxvREFBK0M7QUFDL0Msa0RBQTRDO0FBQzVDLGtEQUE2QztBQUM3QyxnREFBMkM7QUFFM0M7SUFRSTtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxLQUFLLEVBQVksQ0FBQztJQUM3QyxDQUFDO0lBRUQsb0NBQVUsR0FBVixVQUFXLFFBQWdCLEVBQUUsSUFBYyxFQUFFLEdBQVc7UUFBeEQsaUJBdUJDO1FBckJHLElBQUksSUFBSSxDQUFDLFdBQVc7WUFBRSxPQUFPO1FBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQU87UUFDakMsQ0FBQyxDQUFDLENBQUM7UUFFSCx5QkFBeUI7UUFDekIsT0FBTyxJQUFJLE9BQU8sQ0FBTyxVQUFDLE9BQU87WUFDN0IsSUFBSSxDQUFDLEtBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ3BCLEtBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2dCQUN6QixFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsVUFBQyxLQUFLLEVBQUUsTUFBTTtvQkFDckQsSUFBSSxLQUFLLEVBQUU7d0JBQ1Asc0JBQVksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLDRCQUFTLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFBO3FCQUNuRTtvQkFDRCxLQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztvQkFDMUIsT0FBTyxFQUFFLENBQUM7Z0JBQ2QsQ0FBQyxDQUFDLENBQUE7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LElBQVksRUFBRSxJQUFjLEVBQUUsR0FBVztRQUMvRCxRQUFRLElBQUksRUFBRTtZQUNWLEtBQUssbUJBQVEsQ0FBQyxHQUFHO2dCQUNiLElBQUksaUJBQU8sQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNoRCxNQUFLO1lBQ1QsS0FBSyxtQkFBUSxDQUFDLE1BQU07Z0JBQ2hCLElBQUksb0JBQVUsQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQzFELE1BQUs7WUFDVDtnQkFDSSxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsNEJBQVMsQ0FBQyxNQUFNLEVBQUUsZUFBZSxDQUFDLENBQUM7U0FDN0U7SUFDTCxDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQWxIQSxBQWtIQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFcnJvclR5cGV9IGZyb20gXCIuLi9FcnJvci9FbnVtL0Vycm9yTWFuYWdlckVudW1cIjtcclxuaW1wb3J0IEVycm9yTWFuYWdlciBmcm9tIFwiLi4vRXJyb3IvRXJyb3JNYW5hZ2VyXCI7XHJcbmltcG9ydCB7TG9hZFR5cGV9IGZyb20gXCIuL0VudW0vTG9hZEVudW1cIjtcclxuaW1wb3J0IElMb2FkRmFjdG9yeSBmcm9tIFwiLi9JTG9hZC9JTG9hZEZhY3RvcnlcIjtcclxuaW1wb3J0IENTU0xvYWQgZnJvbSAnLi9Mb2FkU2NyaXB0VHlwZS9DU1NMb2FkJ1xyXG5pbXBvcnQgU2NyaXB0TG9hZCBmcm9tICcuL0xvYWRTY3JpcHRUeXBlL1NjcmlwdExvYWQnXHJcbmltcG9ydCBJbWdMb2FkIGZyb20gXCIuL0xvYWRUeXBlL0ltZ0xvYWRcIjtcclxuaW1wb3J0IE11c2ljTG9hZCBmcm9tIFwiLi9Mb2FkVHlwZS9NdXNpY0xvYWRcIjtcclxuaW1wb3J0IFByZWZhYkxvYWQgZnJvbSBcIi4vTG9hZFR5cGUvUHJlZmFiTG9hZFwiO1xyXG5pbXBvcnQgU2NlbmVMb2FkIGZyb20gJy4vTG9hZFR5cGUvU2NlbmVMb2FkJ1xyXG5pbXBvcnQgU3BpbmVMb2FkIGZyb20gXCIuL0xvYWRUeXBlL1NwaW5lTG9hZFwiO1xyXG5pbXBvcnQgVGV4dExvYWQgZnJvbSBcIi4vTG9hZFR5cGUvVGV4dExvYWRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRUeXBlRmFjdG9yeSBpbXBsZW1lbnRzIElMb2FkRmFjdG9yeSB7XHJcblxyXG4gICAgcHJpdmF0ZSBpc0xvYWRCdW5kbGU6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIGFzc2V0QnVuZGxlOiBjYy5Bc3NldE1hbmFnZXIuQnVuZGxlXHJcbiAgICBwcml2YXRlIHByb21pc2U6IFByb21pc2U8dW5rbm93bj5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgYXNzZXRNZXRob2Q6IEFycmF5PEZ1bmN0aW9uPjtcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5hc3NldE1ldGhvZCA9IG5ldyBBcnJheTxGdW5jdGlvbj4oKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkQnVuZGxlKGRhdGFOYW1lOiBzdHJpbmcsIHR5cGU6IExvYWRUeXBlLCB1cmw6IHN0cmluZykge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5hc3NldEJ1bmRsZSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlPHZvaWQ+KCgpID0+IHtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy/liqDovIlCdW5kbGXos4fmupDmmYLpoIjlhYjliqDovIlCdW5kbGXmuIXllq5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzTG9hZEJ1bmRsZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRCdW5kbGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRCdW5kbGUoXCJzZWNvbmRhcnlSZXNcIiwgKGVycm9yLCBidW5kbGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRXJyb3JNYW5hZ2VyLmluc3RhbmNlLmV4ZWN1dGVFcnJvcihFcnJvclR5cGUuTG9hZEVycm9yRlcsIGVycm9yKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFzc2V0QnVuZGxlID0gYnVuZGxlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuYXNzZXRCdW5kbGUgJiYgdGhpcy5pc0xvYWRCdW5kbGUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFzc2V0TWV0aG9kLnB1c2godGhpcy5jaGVja0xvYWRUeXBlLmJpbmQodGhpcywgZGF0YU5hbWUsIHR5cGUsIHVybCwgXCJzZWNvbmRhcnlSZXNcIikpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5qqi5ris55W25YmNVHlwZSzlgZrlkIToh6rlsI3mh4nnmoTliqDovInli5XkvZxcclxuICAgICAqIEBwYXJhbSBkYXRhTmFtZVxyXG4gICAgICogQHBhcmFtIHR5cGVcclxuICAgICAqIEBwYXJhbSB1cmxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGV4ZWN1dGVMb2FkKGRhdGFOYW1lOiBzdHJpbmcsIHR5cGU6IExvYWRUeXBlLCB1cmw6IHN0cmluZykge1xyXG5cclxuICAgICAgICB0aGlzLmNoZWNrTG9hZFR5cGUoZGF0YU5hbWUsIHR5cGUsIHVybCwgXCJyZXNvdXJjZXNcIik7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Z+36KGMQnVuZGxl6LyJ5YWl5YuV5L2cXHJcbiAgICAgKiBAcGFyYW0gZGF0YU5hbWVcclxuICAgICAqIEBwYXJhbSB0eXBlXHJcbiAgICAgKiBAcGFyYW0gdXJsXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGV4ZWN1dGVMb2FkQnVuZGxlKGRhdGFOYW1lOiBzdHJpbmcsIHR5cGU6IExvYWRUeXBlLCB1cmw6IHN0cmluZykge1xyXG5cclxuICAgICAgICBhd2FpdCB0aGlzLmxvYWRCdW5kbGUoZGF0YU5hbWUsIHR5cGUsIHVybCk7XHJcbiAgICAgICAgdGhpcy5jaGVja0xvYWRUeXBlKGRhdGFOYW1lLCB0eXBlLCB1cmwsIFwic2Vjb25kYXJ5UmVzXCIpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5hc3NldE1ldGhvZC5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgICAgICB3aGlsZSAodGhpcy5hc3NldE1ldGhvZC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXNzZXRNZXRob2RbMF0oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXNzZXRNZXRob2Quc2hpZnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+eiuuiqjeeVtuWJjXR5cGVcclxuICAgIGNoZWNrTG9hZFR5cGUoZGF0YU5hbWU6IHN0cmluZywgdHlwZTogTG9hZFR5cGUsIHVybDogc3RyaW5nLCBmb2xkZXI6IHN0cmluZykge1xyXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG5cclxuICAgICAgICAgICAgY2FzZSBMb2FkVHlwZS5pbWc6XHJcbiAgICAgICAgICAgICAgICBuZXcgSW1nTG9hZChkYXRhTmFtZSwgY2MuU3ByaXRlQXRsYXMsIHVybCwgZm9sZGVyKS5sb2FkUmVzb3VyY2VzKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMb2FkVHlwZS5tdXNpYzpcclxuICAgICAgICAgICAgICAgIG5ldyBNdXNpY0xvYWQoZGF0YU5hbWUsIGNjLkF1ZGlvQ2xpcCwgdXJsLCBmb2xkZXIpLmxvYWRSZXNvdXJjZXMoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExvYWRUeXBlLnByZWZhYjpcclxuICAgICAgICAgICAgICAgIG5ldyBQcmVmYWJMb2FkKGRhdGFOYW1lLCBjYy5QcmVmYWIsIHVybCwgZm9sZGVyKS5sb2FkUmVzb3VyY2VzKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMb2FkVHlwZS5zcGluZTpcclxuICAgICAgICAgICAgICAgIG5ldyBTcGluZUxvYWQoZGF0YU5hbWUsIHNwLlNrZWxldG9uRGF0YSwgdXJsLCBmb2xkZXIpLmxvYWRSZXNvdXJjZXMoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExvYWRUeXBlLnNjZW5lOlxyXG4gICAgICAgICAgICAgICAgbmV3IFNjZW5lTG9hZChkYXRhTmFtZSwgY2MuU2NlbmVBc3NldCwgbnVsbCwgZm9sZGVyKS5sb2FkUmVzb3VyY2VzKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMb2FkVHlwZS50ZXh0OlxyXG4gICAgICAgICAgICAgICAgbmV3IFRleHRMb2FkKGRhdGFOYW1lLCBjYy5UZXh0QXNzZXQsIHVybCwgZm9sZGVyKS5sb2FkUmVzb3VyY2VzKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdCA6XHJcbiAgICAgICAgICAgICAgICBFcnJvck1hbmFnZXIuaW5zdGFuY2UuZXhlY3V0ZUVycm9yKEVycm9yVHlwZS5UeXBlRlcsIFwiTG9hZFR5cGUg54Sh5rOV5YG15risXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDovInlpJbpg6johbPmnKxcclxuICAgICAqIEBwYXJhbSBuYW1lXHJcbiAgICAgKiBAcGFyYW0gdHlwZVxyXG4gICAgICogQHBhcmFtIHVybFxyXG4gICAgICovXHJcbiAgICBleGVjdXRlTG9hZEV4dGVybmFsU2NyaXB0KG5hbWU6IHN0cmluZywgdHlwZTogTG9hZFR5cGUsIHVybDogc3RyaW5nKSB7XHJcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgTG9hZFR5cGUuY3NzOlxyXG4gICAgICAgICAgICAgICAgbmV3IENTU0xvYWQobmFtZSwgXCJ0ZXh0L2Nzc1wiLCB1cmwpLmxvYWRTY3JpcHQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIGNhc2UgTG9hZFR5cGUuc2NyaXB0OlxyXG4gICAgICAgICAgICAgICAgbmV3IFNjcmlwdExvYWQobmFtZSwgXCJ0ZXh0L2phdmFzY3JpcHRcIiwgdXJsKS5sb2FkU2NyaXB0KCk7XHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgRXJyb3JNYW5hZ2VyLmluc3RhbmNlLmV4ZWN1dGVFcnJvcihFcnJvclR5cGUuVHlwZUZXLCBcIkxvYWRUeXBlIOeEoeazleWBtea4rFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=