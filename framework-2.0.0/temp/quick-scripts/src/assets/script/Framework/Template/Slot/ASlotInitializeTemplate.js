"use strict";
cc._RF.push(module, '74fb9qfl55NT7tis9vkr4um', 'ASlotInitializeTemplate');
// script/Framework/Template/Slot/ASlotInitializeTemplate.ts

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
var ErrorManagerEnum_1 = require("../../Error/Enum/ErrorManagerEnum");
var ErrorManager_1 = require("../../Error/ErrorManager");
var ServerEventType_1 = require("../../Listener/Enum/ServerEventType");
var EventManager_1 = require("../../Listener/EventManager");
var SlotGameManager_1 = require("../../Process/SlotGameManager");
var ResponseType_1 = require("../../WebResponse/Enum/ResponseType");
var WebResponseManager_1 = require("../../WebResponse/WebResponseManager");
var OverrideComponent_1 = require("../OverrideComponent");
var ccclass = cc._decorator.ccclass;
var ASlotInitializeTemplate = /** @class */ (function (_super) {
    __extends(ASlotInitializeTemplate, _super);
    function ASlotInitializeTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ASlotInitializeTemplate.prototype.onLoad = function () {
        this.normalResult =
            WebResponseManager_1.WebResponseManager
                .instance()
                .getResult(ResponseType_1.ResponseType.NORMAL);
        this.freeResult =
            WebResponseManager_1.WebResponseManager
                .instance()
                .getResult(ResponseType_1.ResponseType.FREE);
        this.onCreate();
        this.slotInitialize();
        this.slotStyleSetting();
        this.normalResultResponse();
        this.freeResultEvenResponse();
    };
    /**
     * 一般狀態回傳事件接收器
     */
    ASlotInitializeTemplate.prototype.normalResultResponse = function () {
        var _this = this;
        EventManager_1.default.instance.serverEventListener(ServerEventType_1.ServerEventType.BET_RESULT, function (target) {
            var e_1, _a;
            try {
                for (var _b = __values(Object.keys(target)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var name = _c.value;
                    if (_this.normalResult[name] === undefined) {
                        try {
                            ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.WebResponseErrorFW, name + "\u53C3\u6578\u672A\u5BA3\u544A:\u7121\u6CD5\u4FDD\u5B58\u56DE\u50B3\u503C,\u5982\u679C\u8A72\u53C3\u6578\u70BA\u5FC5\u8981,\u8ACB\u66F4\u63DBBetResultModule Type");
                        }
                        catch (e) {
                            console.log(e);
                        }
                    }
                    else {
                        _this.normalResult[name] = target[name];
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
            cc.log(_this.normalResult);
            SlotGameManager_1.default.instance.isResultOk = true;
        }, false);
    };
    /**
     * free回傳 game 事件接收器
     * @private
     */
    ASlotInitializeTemplate.prototype.freeResultEvenResponse = function () {
        var _this = this;
        EventManager_1.default.instance.serverEventListener(ServerEventType_1.ServerEventType.FREE_SPIN_RESULT, function (target) {
            var e_2, _a;
            try {
                for (var _b = __values(Object.keys(target)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var name = _c.value;
                    if (_this.freeResult[name] === undefined) {
                        try {
                            ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.WebResponseErrorFW, name + "\u53C3\u6578\u672A\u5BA3\u544A:\u7121\u6CD5\u4FDD\u5B58\u56DE\u50B3\u503C,\u5982\u679C\u8A72\u53C3\u6578\u70BA\u5FC5\u8981,\u8ACB\u66F4\u63DBFreeResultModule Type");
                        }
                        catch (e) {
                            console.log(e);
                        }
                    }
                    else {
                        _this.freeResult[name] = target[name];
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
            cc.log(_this.freeResult);
            SlotGameManager_1.default.instance.isResultOk = true;
        }, false);
    };
    ASlotInitializeTemplate = __decorate([
        ccclass
    ], ASlotInitializeTemplate);
    return ASlotInitializeTemplate;
}(OverrideComponent_1.default));
exports.default = ASlotInitializeTemplate;

cc._RF.pop();