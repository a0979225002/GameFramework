"use strict";
cc._RF.push(module, '3b050x4ms5MNKxpczHlpR8H', 'PrefabLoad');
// script/Framework/LoadResources/LoadType/PrefabLoad.ts

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
var ALoadType_1 = require("../ILoad/ALoadType");
var LoadResManager_1 = require("../LoadResManager");
var PrefabLoad = /** @class */ (function (_super) {
    __extends(PrefabLoad, _super);
    function PrefabLoad(dataName, type, url, folder) {
        return _super.call(this, dataName, type, url, folder) || this;
    }
    PrefabLoad.prototype.setResToManager = function (key, asset) {
        var e_1, _a;
        try {
            for (var asset_1 = __values(asset), asset_1_1 = asset_1.next(); !asset_1_1.done; asset_1_1 = asset_1.next()) {
                var prefab = asset_1_1.value;
                if (LoadResManager_1.default.instance.prefabRes.has(prefab.name)) {
                    ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.LoadErrorFW, prefab.name + " prefab\u540D\u7A31\u91CD\u8907,\u8ACB\u6AA2\u67E5\u662F\u5426\u6709\u76F8\u540C\u540D\u7A31prefab");
                    return;
                }
                else {
                    LoadResManager_1.default.instance.prefabRes.set(prefab.name, prefab);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (asset_1_1 && !asset_1_1.done && (_a = asset_1.return)) _a.call(asset_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        //目的解決異步操作
        //當資源都載入到LoadManager時才回傳以載入完成的狀態
        this.updateProgressEnd();
    };
    return PrefabLoad;
}(ALoadType_1.default));
exports.default = PrefabLoad;

cc._RF.pop();