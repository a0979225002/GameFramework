"use strict";
cc._RF.push(module, '09291NUvY1DUKu/Cj5ETEvx', 'CSSLoad');
// script/Framework/LoadResources/LoadScriptType/CSSLoad.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var SlotConfigManager_1 = require("../../Config/SlotConfigManager");
var ErrorManagerEnum_1 = require("../../Error/Enum/ErrorManagerEnum");
var ErrorManager_1 = require("../../Error/ErrorManager");
var ALoadScriptType_1 = require("../ILoad/ALoadScriptType");
var LoadResManager_1 = require("../LoadResManager");
var CSSLoad = /** @class */ (function (_super) {
    __extends(CSSLoad, _super);
    function CSSLoad(scriptName, type, url) {
        var _this = _super.call(this, scriptName, type, url) || this;
        _this.linkElem = document.createElement("link");
        return _this;
    }
    CSSLoad.prototype.loadScript = function () {
        var url = SlotConfigManager_1.default.instance.externallyLoadURL + "/" + this.url + "/" + this.scriptName + ".css";
        if (LoadResManager_1.default.instance.scriptRes.has(url)) {
            ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.LoadErrorFW, "\u8ACB\u52FF\u91CD\u8907\u52A0\u8F09\u5DF2\u6709\u7684\u5916\u90E8\u8173\u672C : " + url);
        }
        this.linkElem.rel = "stylesheet";
        this.linkElem.type = this.type;
        this.linkElem.href = url;
        ALoadScriptType_1.default.head.appendChild(this.linkElem);
        LoadResManager_1.default.instance.scriptRes.add(url);
    };
    return CSSLoad;
}(ALoadScriptType_1.default));
exports.default = CSSLoad;

cc._RF.pop();