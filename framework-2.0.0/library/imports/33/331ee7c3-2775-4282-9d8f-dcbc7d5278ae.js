"use strict";
cc._RF.push(module, '331eefDJ3VCgp2P3Lx9Uniu', 'ALoadingTemplate');
// script/Framework/Template/Loading/ALoadingTemplate.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
var OverrideComponent_1 = require("../OverrideComponent");
var EventManager_1 = require("../../Listener/EventManager");
var ServerEventType_1 = require("../../Listener/Enum/ServerEventType");
var ErrorManager_1 = require("../../Error/ErrorManager");
var UserMoneyChangeNotification_1 = require("../../Process/GameNotification/UserMoneyChangeNotification");
var ErrorManagerEnum_1 = require("../../Error/Enum/ErrorManagerEnum");
var ccclass = cc._decorator.ccclass;
var ALoadingTemplate = /** @class */ (function (_super) {
    __extends(ALoadingTemplate, _super);
    function ALoadingTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ALoadingTemplate.prototype, "canPlayGame", {
        get: function () {
            return this._canPlayGame;
        },
        enumerable: false,
        configurable: true
    });
    ALoadingTemplate.prototype.onLoad = function () {
        this._canPlayGame = false; //由 Server TableInfo Event 改變狀態
        this.onCreat(); //自訂義初始 例:拿取node...
    };
    ALoadingTemplate.prototype.start = function () {
        this.tableInfoEvent();
        this.sceneStyle();
        this.loadExternalScript(); //外部資源
        this.onLoadResources(); //載入資源方法
        this.loadAssetBundle(); //次資源
        this.updateProgressText(); //更新讀取條文字
    };
    /**
     * 當Server 回傳tableInfo 資訊,將更動canPlayGame布林值,且保存tableInfo資源
     */
    ALoadingTemplate.prototype.tableInfoEvent = function () {
        var _this = this;
        EventManager_1.default.instance.serverEventListener(ServerEventType_1.ServerEventType.TABLE_INFO, function (target) {
            var e_1, _a;
            try {
                for (var _b = __values(Object.keys(target)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var name = _c.value;
                    if (_this.tableInfo[name] === undefined) {
                        try {
                            ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.WebResponseErrorFW, "\u7121 " + name + " \u53C3\u6578,\u8ACB\u66F4\u63DB TableInfo Type");
                        }
                        catch (e) {
                            console.log(e);
                        }
                    }
                    else {
                        _this.tableInfo[name] = target[name];
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
            cc.log(_this.tableInfo);
            UserMoneyChangeNotification_1.default.instance.notify(_this.tableInfo.UserPoint);
            _this._canPlayGame = true;
        }, true);
    };
    ALoadingTemplate = __decorate([
        ccclass
    ], ALoadingTemplate);
    return ALoadingTemplate;
}(OverrideComponent_1.default));
exports.default = ALoadingTemplate;

cc._RF.pop();