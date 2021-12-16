"use strict";
cc._RF.push(module, '168e9VgMaFKwIclD9pYJjCf', 'SceneLoad');
// script/Framework/LoadResources/LoadType/SceneLoad.ts

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
var ErrorManagerEnum_1 = require("../../Error/Enum/ErrorManagerEnum");
var ErrorManager_1 = require("../../Error/ErrorManager");
var ALoadType_1 = require("../ILoad/ALoadType");
var LoadResManager_1 = require("../LoadResManager");
var SceneLoad = /** @class */ (function (_super) {
    __extends(SceneLoad, _super);
    function SceneLoad(dataName, type, url, folder) {
        return _super.call(this, dataName, type, url, folder) || this;
    }
    SceneLoad.prototype.setResToManager = function (key, asset) {
        if (LoadResManager_1.default.instance.scriptRes.has(key))
            ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.LoadErrorFW, key + " \u9375\u503C\u91CD\u8907,\u8ACB\u6AA2\u67E5\u8A72\u8CC7\u6E90\u662F\u5426\u5DF2\u52A0\u8F09\u904E");
        LoadResManager_1.default.instance.sceneRes.set(key, asset);
        //目的解決異步操作
        //當資源都載入到LoadManager時才回傳以載入完成的狀態
        this.updateProgressEnd();
    };
    return SceneLoad;
}(ALoadType_1.default));
exports.default = SceneLoad;

cc._RF.pop();