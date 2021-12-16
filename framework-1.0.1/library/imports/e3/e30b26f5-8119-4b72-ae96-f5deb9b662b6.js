"use strict";
cc._RF.push(module, 'e30b2b1gRlLcq6W9d65tmK2', 'ScriptLoad');
// script/Framework/LoadResources/LoadScriptType/ScriptLoad.ts

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
var ScriptLoad = /** @class */ (function (_super) {
    __extends(ScriptLoad, _super);
    function ScriptLoad(scriptName, type, url) {
        var _this = _super.call(this, scriptName, type, url) || this;
        _this.linkElem = document.createElement("script");
        return _this;
    }
    ScriptLoad.prototype.loadScript = function () {
        var url = SlotConfigManager_1.default.instance.externallyLoadURL + "/" + this.url + "/" + this.scriptName + ".js";
        if (LoadResManager_1.default.instance.scriptRes.has(url)) {
            ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.LoadErrorFW, "\u8ACB\u52FF\u91CD\u8907\u52A0\u8F09\u5DF2\u6709\u7684\u5916\u90E8\u8173\u672C : " + url);
        }
        this.linkElem.type = this.type;
        this.linkElem.src = url;
        this.linkElem.onload = this.test;
        ALoadScriptType_1.default.head.appendChild(this.linkElem);
        LoadResManager_1.default.instance.scriptRes.add(url);
    };
    ScriptLoad.prototype.test = function () {
        cc.log("測試加載script", "00", ALoadScriptType_1.default.head);
    };
    return ScriptLoad;
}(ALoadScriptType_1.default));
exports.default = ScriptLoad;

cc._RF.pop();